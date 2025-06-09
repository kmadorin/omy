import type { Networks } from "@stakekit/api-hooks";

export interface YieldData {
  id: string;
  name: string;
  token_symbol: string;
  token_network: string;
  provider_name: string;
  apy: number;
  metadata_type: string;
  token_address: string | null;
  provider_id: string;
  protocol: string;
  asset: string;
  tvl: number;
  cooldown_days: number | null;
  warmup_days: number | null;
  withdraw_days: number | null;
}

export interface YieldResult {
  id: string;
  token_network: keyof typeof Networks;
  token_symbol: string;
  token_address: string | null;
  protocol: string;
  provider_name: string;
  apy: number;
  tvl: number;
  [key: string]: string | number | null;
}
