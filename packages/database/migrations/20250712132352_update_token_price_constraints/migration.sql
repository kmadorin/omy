-- =========================
-- up.sql
-- =========================
BEGIN;

-- 1. Снять старый PK
ALTER TABLE public.token_price
  DROP CONSTRAINT token_price_pkey;

-- 2. Создать новый PK (с тем же именем,
--    чтобы не менять код/документацию)
ALTER TABLE public.token_price
  ADD CONSTRAINT token_price_pkey
    PRIMARY KEY (network, symbol);

-- 3. (Необязательно) Индекс для address,
--    если по нему будут частые WHERE/JOIN
-- CREATE INDEX token_price_network_address_idx
--   ON public.token_price (network, address);

COMMIT;
