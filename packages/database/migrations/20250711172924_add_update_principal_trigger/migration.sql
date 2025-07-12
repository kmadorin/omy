/* ────────────────────────────────────────────────────────────────
   5. Trigger keeps `principal_sum` up-to-date
   ──────────────────────────────────────────────────────────────── */

-- ①  Function
CREATE OR REPLACE FUNCTION public.trg_update_principal()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  delta NUMERIC;
BEGIN
  /* convert direction → signed delta in underlying units (USDC) */
  IF NEW.direction = 'ENTER' THEN
     delta :=  NEW.amount;         -- deposit  +amount
  ELSIF NEW.direction = 'EXIT' THEN
     delta := -NEW.amount;         -- withdrawal -amount
  ELSE
     RETURN NEW;                   -- ignore CORRECTION or other kinds
  END IF;

  /* upsert the running principal_sum */
  INSERT INTO public.portfolio_position (
      id,
      wallet_address,
      yield_opportunity_id,
      principal_sum,
      on_chain_amount,
      entry_date,
      last_modified
  )
  VALUES (
      gen_random_uuid(),
      NEW.wallet_address,
      NEW.yield_opportunity_id,
      delta,
      0,                            -- on-chain amount will be filled by sync job
      NEW.executed_at,
      NOW()
  )
  ON CONFLICT (wallet_address, yield_opportunity_id)
  DO UPDATE
     SET principal_sum = portfolio_position.principal_sum + delta,
         last_modified = NOW();

  RETURN NEW;
END;
$$;

-- ②  Trigger
DROP TRIGGER IF EXISTS trg_portfolio_principal ON public.portfolio_transaction;

CREATE TRIGGER trg_portfolio_principal
AFTER INSERT ON public.portfolio_transaction
FOR EACH ROW
WHEN (NEW.direction IN ('ENTER', 'EXIT'))
EXECUTE FUNCTION public.trg_update_principal();
