-- First, let's check which schema the table is in
SELECT schemaname, tablename 
FROM pg_tables 
WHERE tablename = 'YieldOpportunity' OR tablename = 'yieldopportunity';

-- Then grant permissions more explicitly
-- If the table is in the public schema:
GRANT ALL PRIVILEGES ON TABLE public."YieldOpportunity" TO service_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- If the table is in a different schema (replace 'custom_schema' with actual schema name):
-- GRANT ALL PRIVILEGES ON TABLE custom_schema."YieldOpportunity" TO service_role;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA custom_schema TO service_role;

-- Make sure RLS is properly configured
ALTER TABLE public."YieldOpportunity" ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies to start fresh
DROP POLICY IF EXISTS "Service role can do all operations on YieldOpportunity" ON public."YieldOpportunity";

-- Create a policy that allows the service role to bypass RLS
CREATE POLICY "Service role can do all operations on YieldOpportunity"
  ON public."YieldOpportunity"
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);