/**
 * Hybrid-sync: background balance reconciler
 * ------------------------------------------
 * • touches only positions that are active AND stale (lastBalanceSync older than 1 h)
 * • compares on-chain share‑token balances with cached on_chain_amount
 * • writes a CORRECTION PortfolioTransaction when they differ
 * • refreshes usd_value_cached if we already have a price_usd
 *
 * ENV required:
 *  SUPABASE_URL
 *  SUPABASE_SERVICE_ROLE_KEY
 *  STAKEKIT_API_KEY
 *  STAKEKIT_BASE_URL   (e.g. "https://api.yield.xyz")
 */

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { v4 as uuid } from "https://esm.sh/uuid@9";

/* ───────────────────────── Types ───────────────────────── */
interface Position {
  id: string;
  wallet_address: string;
  yield_opportunity_id: string;
  on_chain_amount: string;
  is_active: boolean;
  last_balance_sync: string | null;
  YieldOpportunity?: {
    token_network: string;
    token_address: string;
    token_symbol: string;
  };
}

interface LiveItem {
  addresses: { address: string };
  integrationId: string;
  balances: Array<{
    amount: string;
    token: {
      name: string;
      symbol: string;
      decimals: number;
      network: string;
      address: string;
    };
  }>;
}

/* ───────────────────────── Math helpers ───────────────────────── */
function decimalToInt(src: string | number | bigint, decimals: number): bigint {
  const [whole, frac = ""] = src.toString().split(".");
  const padded = (frac + "0".repeat(decimals)).slice(0, decimals);
  return BigInt(whole + padded);
}

function intToDecimal(n: bigint, decimals: number): string {
  const sign = n < 0n ? "-" : "";
  const abs = (n < 0n ? -n : n).toString().padStart(decimals + 1, "0");
  const whole = abs.slice(0, -decimals);
  const frac = abs.slice(-decimals).replace(/0+$/, "");
  return sign + (frac ? `${whole}.${frac}` : whole);
}

const chunk = <T,>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size)
  );

/* ───────────────────────── Main handler ───────────────────────── */
serve(async () => {
  const env = Deno.env.toObject();
  const sb = createClient(env.SUPABASE_URL!, env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });

  /* 1 ── pick positions that haven’t been synced for ≥1 h */
  const oneHourAgo = new Date(Date.now() - 60 * 60_000).toISOString();

  const { data: positions, error: posErr } = await sb
    .from("portfolio_position")
    .select(
      `id,wallet_address,yield_opportunity_id,on_chain_amount,is_active,last_balance_sync,YieldOpportunity(token_network,token_address,token_symbol)`
    )
    .eq("is_active", true)
    .or(`last_balance_sync.is.null,last_balance_sync.lt.${oneHourAgo}`);

  if (posErr) throw posErr;
  if (!positions?.length)
    return new Response("nothing to sync", { status: 200 });

  const typedPositions = positions as Position[];

  /* 2 ── build price map */
  const { data: priceRows, error: priceErr } = await sb
    .from("token_price")
    .select("network,symbol,price_usd");          

  const priceMap = Object.fromEntries(
    priceRows.map(r => [
      `${r.network}:${r.symbol.toLowerCase()}`,    
      Number(r.price_usd),
    ]),
  );

  /* 3 ── iterate in StakeKit batches */
  let updated = 0;
  for (const batch of chunk(typedPositions, 100)) {
    const body = batch.map((p) => ({
      addresses: { address: p.wallet_address },
      integrationId: p.yield_opportunity_id,
    }));

    const skRes = await fetch(
      `${env.STAKEKIT_BASE_URL!.replace(/\/+$/, "")}/v1/yields/balances`,
      {
        method: "POST",
        headers: {
          "x-api-key": env.STAKEKIT_API_KEY!,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!skRes.ok) throw new Error(`StakeKit ${skRes.status} ${await skRes.text()}`);

    const liveBalances = (await skRes.json()) as LiveItem[];

    for (const live of liveBalances) {
      const wallet = live.addresses?.address;
      if (!wallet) continue;

      const pos = batch.find(
        (p) =>
          p.wallet_address === wallet &&
          p.yield_opportunity_id === live.integrationId
      );
      if (!pos) continue;

      const bal = live.balances[0]; // one per integration
      const dec = bal.token.decimals;
      const liveInt = decimalToInt(bal.amount, dec);
      const localInt = decimalToInt(pos.on_chain_amount || "0", dec);

      const priceKey = `${bal.token.network}:${bal.token.symbol.toLowerCase()}`;

      /* 3‑a  keep TokenPrice metadata fresh */
      await sb.from("token_price").upsert(
        {
          network: bal.token.network,
          symbol: bal.token.symbol,
          name: bal.token.name,
          address: bal.token.address.toLowerCase(),
          decimals: dec,
        },
        { onConflict: "network,symbol" }
      );

      if (liveInt === localInt) {
        await sb
          .from("portfolio_position")
          .update({ last_balance_sync: new Date().toISOString() })
          .eq("id", pos.id);
        continue;
      }

      /* 3‑b  correction transaction */
      const deltaStr = intToDecimal(liveInt - localInt, dec);
      await sb.from("portfolio_transaction").insert({
        id: uuid(),
        wallet_address: pos.wallet_address,
        yield_opportunity_id: pos.yield_opportunity_id,
        direction: "CORRECTION",
        amount: 0,
        on_chain_delta: deltaStr,
        tx_hash: `SYNC-${uuid()}`,
        executed_at: new Date().toISOString(),
      });

      /* 3‑c  update snapshot */
      const price = priceMap[priceKey];
      await sb
        .from("portfolio_position")
        .update({
          on_chain_amount: bal.amount,
          usd_value_cached: price !== undefined ? Number(bal.amount) * price : null,
          last_balance_sync: new Date().toISOString(),
          is_active: liveInt > 0n,
        })
        .eq("id", pos.id);

      updated++;
    }
  }

  return new Response(
    JSON.stringify({ processed: typedPositions.length, updated }),
    { headers: { "content-type": "application/json" } }
  );
});
