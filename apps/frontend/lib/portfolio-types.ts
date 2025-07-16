export interface PortfolioPosition {
  wallet_address: string;
  integration_id: string;
  yield_opportunity_id: string;
  amount: number;
  entry_date: string;
  apy: number;
  last_balance_sync: string | null;
  provider_name?: string;
  token_symbol?: string;
  network: string;
}
