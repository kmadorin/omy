-- 1. Drop the old trigger and function
drop trigger if exists trg_pt_upsert_position on public."portfolio_transaction";
drop function if exists public.fn_upsert_portfolio_position();

-- 2. Recreate the function with the correct column name
create or replace function public.fn_upsert_portfolio_position()
returns trigger
language plpgsql
security definer
as $$
declare
  delta numeric;
  base_row public."portfolio_position"%ROWTYPE;
begin
  delta := case NEW.direction
             when 'EXIT'       then -NEW.amount
             when 'CORRECTION' then  NEW.amount
             else                   NEW.amount
           end;

  insert into public."portfolio_position" (
       id,
       wallet_address,
       yield_opportunity_id,  -- <-- updated
       amount,
       entry_date,
       last_modified,
       last_balance_sync,
       is_active
  )
  values (
       gen_random_uuid(),
       NEW.wallet_address,
       NEW.yield_opportunity_id,  -- <-- updated
       delta,
       NEW.executed_at,
       now(),
       now(),
       delta <> 0
  )
  on conflict (wallet_address, yield_opportunity_id)  -- <-- updated
  do update
     set amount            = public."portfolio_position".amount + delta,
         last_modified     = now(),
         last_balance_sync = now(),
         is_active         = (public."portfolio_position".amount + delta) <> 0;

  return NEW;
end;
$$;

-- 3. Recreate the trigger
create trigger trg_pt_upsert_position
after insert on public."portfolio_transaction"
for each row
execute procedure public.fn_upsert_portfolio_position();