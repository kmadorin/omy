/* ────────────────────────────────────────────────────────────────
   0. Prerequisites
   ──────────────────────────────────────────────────────────────── */
CREATE EXTENSION IF NOT EXISTS "pgcrypto";


/* ────────────────────────────────────────────────────────────────
   1.  Ensure portfolio_transaction.amount exists
   ──────────────────────────────────────────────────────────────── */
ALTER TABLE public.portfolio_transaction
  ADD COLUMN IF NOT EXISTS amount NUMERIC NOT NULL DEFAULT 0;

/* (If you later want it nullable, change NOT NULL in a follow-up.) */


/* ────────────────────────────────────────────────────────────────
   2.  Drop every old trigger + function that still mentions `amount`
       or the obsolete `fn_upsert_portfolio_position`
   ──────────────────────────────────────────────────────────────── */
-- old principal trigger
DROP TRIGGER     IF EXISTS trg_portfolio_principal     ON public.portfolio_transaction;
DROP TRIGGER     IF EXISTS trg_pt_update_principal     ON public.portfolio_transaction;
DROP TRIGGER     IF EXISTS trg_pt_upsert_position      ON public.portfolio_transaction;

-- functions those triggers pointed to
DROP FUNCTION    IF EXISTS public.trg_update_principal()               CASCADE;
DROP FUNCTION    IF EXISTS public.fn_upsert_portfolio_position()       CASCADE;


/* ────────────────────────────────────────────────────────────────
   3.  Re-create the canonical trigger for principal_sum
   ──────────────────────────────────────────────────────────────── */
CREATE OR REPLACE FUNCTION public.trg_update_principal()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  delta NUMERIC;
BEGIN
  IF NEW.direction = 'ENTER' THEN
     delta :=  NEW.amount;          -- deposit  +amount (USDC)
  ELSIF NEW.direction = 'EXIT' THEN
     delta := -NEW.amount;          -- withdrawal -amount
  ELSE
     RETURN NEW;                    -- ignore CORRECTION rows
  END IF;

  INSERT INTO public.portfolio_position (
      id,
      wallet_address,
      yield_opportunity_id,
      principal_sum,
      on_chain_amount,
      entry_date,
      last_modified,
      is_active
  )
  VALUES (
      gen_random_uuid(),
      NEW.wallet_address,
      NEW.yield_opportunity_id,
      delta,
      0,                            -- on-chain aToken will be patched by sync job
      NEW.executed_at,
      NOW(),
      TRUE
  )
  ON CONFLICT (wallet_address, yield_opportunity_id)
  DO UPDATE
     SET principal_sum = portfolio_position.principal_sum + delta,
         last_modified = NOW();

  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_portfolio_principal
AFTER INSERT ON public.portfolio_transaction
FOR EACH ROW
WHEN (NEW.direction IN ('ENTER','EXIT'))
EXECUTE FUNCTION public.trg_update_principal();


/* ────────────────────────────────────────────────────────────────
   4.  Done
   ──────────────────────────────────────────────────────────────── */
