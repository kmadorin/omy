-- This is an empty migration.-- Grant service_role full access to all main tables (except _prisma_migrations)

-- portfolio_position
GRANT ALL PRIVILEGES ON TABLE public."portfolio_position" TO service_role;
ALTER TABLE public."portfolio_position" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Service role can do all operations on portfolio_position" ON public."portfolio_position";
CREATE POLICY "Service role can do all operations on portfolio_position"
  ON public."portfolio_position"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- portfolio_rebalance
GRANT ALL PRIVILEGES ON TABLE public."portfolio_rebalance" TO service_role;
ALTER TABLE public."portfolio_rebalance" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Service role can do all operations on portfolio_rebalance" ON public."portfolio_rebalance";
CREATE POLICY "Service role can do all operations on portfolio_rebalance"
  ON public."portfolio_rebalance"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- portfolio_transaction
GRANT ALL PRIVILEGES ON TABLE public."portfolio_transaction" TO service_role;
ALTER TABLE public."portfolio_transaction" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Service role can do all operations on portfolio_transaction" ON public."portfolio_transaction";
CREATE POLICY "Service role can do all operations on portfolio_transaction"
  ON public."portfolio_transaction"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- token_price
GRANT ALL PRIVILEGES ON TABLE public."token_price" TO service_role;
ALTER TABLE public."token_price" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Service role can do all operations on token_price" ON public."token_price";
CREATE POLICY "Service role can do all operations on token_price"
  ON public."token_price"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
