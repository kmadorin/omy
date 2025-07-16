-- This is an empty migration.-- Remove columns from portfolio_position
ALTER TABLE public."portfolio_position"
  DROP COLUMN IF EXISTS "current_apy",
  DROP COLUMN IF EXISTS "exit_tx_hash",
  DROP COLUMN IF EXISTS "token_address",
  DROP COLUMN IF EXISTS "token_symbol";

-- Remove columns from portfolio_transaction
ALTER TABLE public."portfolio_transaction"
  DROP COLUMN IF EXISTS "token_address",
  DROP COLUMN IF EXISTS "token_symbol";

-- Rename integration_id to yield_opportunity_id in portfolio_position
ALTER TABLE public."portfolio_position"
  RENAME COLUMN "integration_id" TO "yield_opportunity_id";

-- Rename integration_id to yield_opportunity_id in portfolio_transaction
ALTER TABLE public."portfolio_transaction"
  RENAME COLUMN "integration_id" TO "yield_opportunity_id";

-- Add foreign key constraint to portfolio_position
ALTER TABLE public."portfolio_position"
  ADD CONSTRAINT fk_portfolio_position_yield_opportunity
  FOREIGN KEY ("yield_opportunity_id") REFERENCES public."YieldOpportunity"("id") ON DELETE RESTRICT;

-- Add foreign key constraint to portfolio_transaction
ALTER TABLE public."portfolio_transaction"
  ADD CONSTRAINT fk_portfolio_transaction_yield_opportunity
  FOREIGN KEY ("yield_opportunity_id") REFERENCES public."YieldOpportunity"("id") ON DELETE RESTRICT;