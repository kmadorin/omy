/**
 * Fast-follow wallet sync
 * -----------------------
 * • Input  : { wallet: "0x…" }  (POST JSON)
 * • Output : { processed, updated } or 400 / 500
 *
 * ENV (same as sync_balances):
 *  SUPABASE_URL
 *  SUPABASE_SERVICE_ROLE_KEY
 *  STAKEKIT_API_KEY
 *  STAKEKIT_BASE_URL   (e.g. "https://api.yield.xyz")
 */
import { serve }    from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { v4 as uuid }   from 'https://esm.sh/uuid@9'

interface PositionRow {
  id: string
  wallet_address: string
  yield_opportunity_id: string
  on_chain_amount: string
  YieldOpportunity: {
    token_network: string
    token_address: string
    token_symbol : string
  } | null
}

/* helpers for exact-decimal → bigint */
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

serve(async (req) => {
  /* 0. parse wallet */
  let wallet: string | undefined
  try { ({ wallet } = await req.json()) } catch { /* fallthrough */ }
  if (!wallet || typeof wallet !== 'string')
    return new Response('missing wallet', { status: 400 })

  const env = Deno.env.toObject()
  const sb  = createClient(env.SUPABASE_URL!, env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false }
  })

  /* 1. active positions for this wallet */
  const { data: rows, error } = await sb
    .from('portfolio_position')
    .select(`
      id,
      wallet_address,
      yield_opportunity_id,
      on_chain_amount,
      YieldOpportunity (
        token_network,
        token_address,
        token_symbol
      )
    `)
    .eq('wallet_address', wallet)
    .eq('is_active', true)

  if (error) return new Response(error.message, { status: 500 })
  if (!rows?.length) return new Response('no positions', { status: 200 })

  const positions = rows as PositionRow[]

  /* 2. StakeKit balances call (one batch ≤100) */
  const body = positions.map(p => ({
    addresses   : { address: p.wallet_address },
    integrationId: p.yield_opportunity_id
  }))
  const skRes = await fetch(`${env.STAKEKIT_BASE_URL!.replace(/\/+$/,'')}/v1/yields/balances`, {
    method : 'POST',
    headers: { 'x-api-key': env.STAKEKIT_API_KEY!, 'content-type': 'application/json' },
    body   : JSON.stringify(body)
  })
  if (!skRes.ok) return new Response(await skRes.text(), { status: 502 })
  type SK = { addresses:{ address:string }, integrationId:string,
              balances:[{ amount:string, token:{ name:string,symbol:string,decimals:number,
                                                 network:string,address:string } }]}[]
  const liveArr: SK = await skRes.json()

  /* 3. price cache */
  const { data: priceRows } = await sb
    .from('token_price')
    .select('network,address,price_usd,fetched_at')
  const priceMap = Object.fromEntries(
    priceRows!.map(r => [`${r.network}:${r.address.toLowerCase()}`, Number(r.price_usd)])
  )

  let updated = 0

  for (const live of liveArr) {
    const walletAddr = live.addresses?.address
    if (!walletAddr) continue
    const pos = positions.find(p =>
      p.wallet_address === walletAddr && p.yield_opportunity_id === live.integrationId)
    if (!pos) continue

    const bal        = live.balances[0]
    const { token }  = bal
    const decimals   = token.decimals
    const liveInt    = decimalToInt(bal.amount, decimals)
    const localInt   = decimalToInt(pos.on_chain_amount || '0', decimals)
    const deltaInt   = liveInt - localInt
    if (deltaInt === 0n) continue

    /* 3-a upsert token metadata */
    await sb.from('token_price').upsert({
      network : token.network,
      address : token.address.toLowerCase(),
      symbol  : token.symbol,
      name    : token.name,
      decimals: token.decimals
    }, { onConflict: 'network,address' })

    /* 3-b price fetch on-demand if missing */
    const key = `${token.network}:${token.address.toLowerCase()}`
    let price = priceMap[key]
    if (price === undefined) {
      const prRes = await fetch(`${env.STAKEKIT_BASE_URL}/v1/token/prices`, {
        method : 'POST',
        headers: { 'x-api-key': env.STAKEKIT_API_KEY!, 'content-type': 'application/json' },
        body   : JSON.stringify({ tokenList: [{
          name: token.name, network: token.network,
          symbol: token.symbol, decimals: token.decimals
        }]})
      })
      if (prRes.ok) {
        const [{ priceUsd }] = await prRes.json() as [{ priceUsd:number }]
        price = priceUsd
        await sb.from('token_price').upsert({
          network: token.network,
          address: token.address.toLowerCase(),
          price_usd: priceUsd,
          fetched_at: new Date().toISOString()
        }, { onConflict: 'network,address' })
      }
    }

    /* 3-c write CORRECTION */
    await sb.from('portfolio_transaction').insert({
      id                  : uuid(),
      wallet_address      : pos.wallet_address,
      yield_opportunity_id: pos.yield_opportunity_id,
      direction           : 'CORRECTION',
      amount              : 0,
      on_chain_delta      : intToDecimal(deltaInt, decimals),
      tx_hash             : `SYNC-${uuid()}`,
      executed_at         : new Date().toISOString()
    })

    /* 3-d update snapshot */
    await sb.from('portfolio_position').update({
      on_chain_amount   : bal.amount,
      usd_value_cached  : price !== undefined ? Number(bal.amount) * price : null,
      last_balance_sync : new Date().toISOString(),
      is_active         : liveInt > 0n
    }).eq('id', pos.id)

    updated++
  }

  return new Response(JSON.stringify({ processed: positions.length, updated }), {
    headers: { 'content-type': 'application/json' }
  })
})
