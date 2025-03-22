export interface YieldData {
  id: string
  name: string
  token_symbol: string
  token_network: string
  provider_name: string
  apy: number
  metadata_type: string
  token_address: string | null
  provider_id: string
  protocol: string
  asset: string
  tvl: number
  cooldown_days: number | null
  warmup_days: number | null
  withdraw_days: number | null
}

