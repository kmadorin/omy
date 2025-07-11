-- This is an empty migration.-- File: prisma/migrations/20250710_add_portfolio_position_trigger/migration.sql
-- Make sure the extension for UUID generation exists
create extension if not exists "pgcrypto";

--------------------------------------------------------------------------------
--  Function: fn_upsert_portfolio_position
--------------------------------------------------------------------------------
create or replace function public.fn_upsert_portfolio_position()
returns trigger
language plpgsql
security definer
as $$
declare
  delta numeric;      -- what we will add/subtract to the running balance
  base_row public."portfolio_position"%ROWTYPE;
begin
  --------------------------------------------------------------------------
  -- 1. Translate transaction direction → sign
  --------------------------------------------------------------------------
  delta := case NEW.direction
             when 'EXIT'       then -NEW.amount       -- user withdrew
             when 'CORRECTION' then  NEW.amount       -- already signed outside
             else                   NEW.amount        -- ENTER
           end;

  --------------------------------------------------------------------------
  -- 2. Upsert (wallet_address, integration_id) running balance
  --------------------------------------------------------------------------
  insert into public."portfolio_position" (
       id,
       wallet_address,
       integration_id,
       amount,
       entry_date,
       last_modified,
       last_balance_sync,
       is_active
  )
  values (
       gen_random_uuid(),
       NEW.wallet_address,
       NEW.integration_id,
       delta,
       NEW.executed_at,
       now(),
       now(),
       delta <> 0
  )
  on conflict (wallet_address, integration_id)
  do update
     set amount            = public."portfolio_position".amount + delta,
         last_modified     = now(),
         last_balance_sync = now(),
         is_active         = (public."portfolio_position".amount + delta) <> 0;

  return NEW;
end;
$$;

--------------------------------------------------------------------------------
-- 3. Attach to INSERTs (and optionally UPDATEs)
--------------------------------------------------------------------------------
drop trigger if exists trg_pt_upsert_position on public."portfolio_transaction";

create trigger trg_pt_upsert_position
after insert on public."portfolio_transaction"
for each row
execute procedure public.fn_upsert_portfolio_position();
