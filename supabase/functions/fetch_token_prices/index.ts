// supabase/functions/fetch_token_prices/index.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import axios from "https://esm.sh/axios@1";

/**
 *  fetch_token_prices
 *  ------------------
 *  • picks tokens whose price is missing or older than 15 min
 *  • calls StakeKit `/v1/tokens/prices` **without `address`**
 *  • upserts rows on (network, symbol) primary key
 */

serve(async () => {
  /* ── 0 — env & Supabase client ──────────────────────────────────────────*/
  const env = Deno.env.toObject();
  const sb  = createClient(
    env.SUPABASE_URL!,
    env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );

  /* ── 1 — select stale tokens ────────────────────────────────────────────*/
  const cutoff = new Date(Date.now() - 15 * 60_000).toISOString();

  const { data: tokens, error: selErr } = await sb
    .from("token_price")
    .select("*")
    .or(`price_usd.is.null,fetched_at.is.null,fetched_at.lt.${cutoff}`);

  if (selErr) throw selErr;
  if (!tokens?.length) return new Response("fresh");

  /* ── 2 — build tokenList WITHOUT address ───────────────────────────────*/
  const tokenList = tokens.map(t => ({
    name     : t.name,
    network  : t.network,
    symbol   : t.symbol,
    decimals : t.decimals,
    // address intentionally omitted – StakeKit bug returns price 0 if present
  }));

  /* ── 3 — call StakeKit --------------------------------------------------*/
  const { data: raw } = await axios.post(
    `${env.STAKEKIT_BASE_URL.replace(/\/+$/, "")}/v1/tokens/prices`,
    { currency: "usd", tokenList },
    { headers: { "X-API-KEY": env.STAKEKIT_API_KEY } },
  );

  /*  StakeKit response is an object keyed “network-undefined”.
      We rely on list order: Object.values(raw) aligns with tokenList.       */
  const pricesArr = Object.values(raw) as Array<{ price: number }>;
  if (pricesArr.length !== tokenList.length) {
    // Rare mismatch – bail out so we don't corrupt data
    throw new Error(
      `StakeKit returned ${pricesArr.length} prices for ${tokenList.length} tokens`,
    );
  }

  /* ── 4 — build upserts using original token metadata + matched price ───*/
  const now = new Date().toISOString();
  const upserts = tokens.map((t, i) => ({
    network    : t.network,
    symbol     : t.symbol,
    name       : t.name,
    decimals   : t.decimals,
    address    : (t.address ?? "").toLowerCase(),
    price_usd  : pricesArr[i]?.price ?? null,
    fetched_at : now,
  }));

  /* ── 5 — upsert on (network, symbol) ───────────────────────────────────*/
  const { error: upsertErr } = await sb
    .from("token_price")
    .upsert(upserts, { onConflict: "network,symbol" });

  if (upsertErr) throw upsertErr;

  return new Response("updated");
});
