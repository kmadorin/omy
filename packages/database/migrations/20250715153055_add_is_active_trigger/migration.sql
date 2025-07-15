-- 1. Create or replace the trigger function
CREATE OR REPLACE FUNCTION trg_update_is_active()
RETURNS TRIGGER AS $$
BEGIN
  NEW.is_active := (NEW.on_chain_amount > 0);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Drop the old trigger if it exists (idempotent)
DROP TRIGGER IF EXISTS trg_set_is_active ON public.portfolio_position;

-- 3. Create the new trigger
CREATE TRIGGER trg_set_is_active
BEFORE UPDATE OF on_chain_amount ON public.portfolio_position
FOR EACH ROW
EXECUTE FUNCTION trg_update_is_active();