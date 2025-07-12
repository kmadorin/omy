import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

interface Position {
  wallet_address: string
  integration_id: string
  amount: string
  token_symbol: string
  yield_opportunity_id: string
}

interface ChainBalance {
  integrationId: string
  walletAddress: string
  amount: string
}

serve(async () => {
  try {
    const env = Deno.env.toObject()
    const supabaseUrl = env.SUPABASE_URL
    const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY
    const stakekitKey = env.STAKEKIT_API_KEY
    const stakekitBase = env.STAKEKIT_BASE_URL ?? 'https://api.yield.xyz'

    if (!supabaseUrl || !supabaseKey || !stakekitKey) {
      throw new Error('Missing environment variables')
    }

    const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } })

    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()

    const { data: positions, error } = await supabase
      .from('portfolio_position')
      .select('wallet_address,integration_id,amount,token_symbol,yield_opportunity_id')
      .eq('is_active', true)
      .or(`last_balance_sync.is.null,last_balance_sync.lt.${oneHourAgo}`)
      .limit(10000)

    if (error) throw error
    if (!positions || positions.length === 0) {
      return new Response('Nothing to sync', { status: 200 })
    }

    const batches = chunk(positions, 100)
    const priceCache: Record<string, number | null> = {}
    let apiCalls = 0
    let updated = 0

    for (const batch of batches) {
      const ids = batch.map(p => p.integration_id).join(',')
      const wallets = batch.map(p => p.wallet_address).join(',')
      const url = `${stakekitBase.replace(/\/+$/, '')}/v1/yields/balances?integrationIds=${ids}&walletAddresses=${wallets}`
      const res = await fetchWithRetry(url, stakekitKey)
      apiCalls++
      const onChain: ChainBalance[] = await res.json()

      for (const bal of onChain) {
        const pos = batch.find(p => p.integration_id === bal.integrationId && p.wallet_address === bal.walletAddress)
        if (!pos) continue
        const newAmount = BigInt(bal.amount)
        const oldAmount = BigInt(pos.amount)
        if (newAmount === oldAmount) {
          await supabase.from('portfolio_position')
            .update({ last_balance_sync: new Date().toISOString() })
            .match({ wallet_address: pos.wallet_address, integration_id: pos.integration_id })
          continue
        }

        const diff = newAmount - oldAmount
        if (!(pos.token_symbol in priceCache)) {
          const priceUrl = `${stakekitBase.replace(/\/+$/, '')}/v1/tokens/prices?symbols=${pos.token_symbol}`
          const priceRes = await fetch(priceUrl, { headers: { 'X-API-KEY': stakekitKey } })
          if (priceRes.ok) {
            const priceJson = await priceRes.json()
            priceCache[pos.token_symbol] = Number(priceJson?.[0]?.priceUsd ?? null)
          } else {
            priceCache[pos.token_symbol] = null
          }
          apiCalls++
        }
        const price = priceCache[pos.token_symbol]
        const usdValue = price != null ? Number(price) * Number(diff) : null

        await supabase.from('portfolio_transaction').insert({
          wallet_address: pos.wallet_address,
          integration_id: pos.integration_id,
          yield_opportunity_id: pos.yield_opportunity_id,
          direction: 'CORRECTION',
          amount: Number(diff),
          usd_value: usdValue,
          tx_hash: `SYNC-${crypto.randomUUID()}`,
          executed_at: new Date().toISOString()
        })

        await supabase.from('portfolio_position')
          .update({
            amount: newAmount.toString(),
            is_active: newAmount > 0n,
            last_balance_sync: new Date().toISOString()
          })
          .match({ wallet_address: pos.wallet_address, integration_id: pos.integration_id })

        updated++
      }
    }

    return new Response(JSON.stringify({ processed: positions.length, updated, apiCalls }))
  } catch (err) {
    console.error('sync_balances failed', err)
    return new Response('Internal error', { status: 500 })
  }
})

function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size))
}

async function fetchWithRetry(url: string, apiKey: string, retries = 3): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, { headers: { 'X-API-KEY': apiKey } })
    if (res.ok) return res
    if (res.status !== 429 && res.status < 500) throw new Error(`StakeKit error ${res.status}`)
    await new Promise(r => setTimeout(r, 2 ** (i + 1) * 1000))
  }
  const finalRes = await fetch(url, { headers: { 'X-API-KEY': apiKey } })
  if (!finalRes.ok) throw new Error(`StakeKit error ${finalRes.status}`)
  return finalRes
}
