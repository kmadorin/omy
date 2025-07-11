# Database Structure

This document describes the structure of all tables in the Supabase database for this project. Each table includes its columns, types, nullability, and default values.

---

## Table: `portfolio_position`
**Purpose:** Tracks a user's position in a yield opportunity, including amount, status, and sync info.

| Column              | Type                       | Nullable | Default | Description                       |
|---------------------|----------------------------|----------|---------|-----------------------------------|
| id                  | text                       | NO       |         | Unique identifier                 |
| amount              | double precision           | NO       |         | Amount in the position            |
| entry_date          | timestamp without time zone| NO       |         | When the position was entered     |
| last_modified       | timestamp without time zone| NO       |         | Last modification timestamp       |
| is_active           | boolean                    | NO       | true    | Whether the position is active    |
| wallet_address      | text                       | NO       |         | User's wallet address             |
| yield_opportunity_id| text                       | NO       |         | Linked yield opportunity          |
| last_balance_sync   | timestamp without time zone| YES      |         | Last balance sync time            |

---

## Table: `portfolio_rebalance`
**Purpose:** Records rebalancing actions between positions, including amounts and APY changes.

| Column               | Type                       | Nullable | Default | Description                       |
|----------------------|----------------------------|----------|---------|-----------------------------------|
| id                   | text                       | NO       |         | Unique identifier                 |
| from_position_id     | text                       | NO       |         | Source position                   |
| to_position_id       | text                       | NO       |         | Destination position              |
| amount               | double precision           | NO       |         | Amount rebalanced                 |
| executed_at          | timestamp without time zone| NO       |         | When rebalancing was executed     |
| from_apy             | double precision           | NO       |         | APY of source before rebalance    |
| to_apy               | double precision           | NO       |         | APY of destination after rebalance|
| gas_cost             | double precision           | NO       |         | Gas cost for the rebalance        |
| annual_income_change | double precision           | NO       |         | Change in annual income           |

---

## Table: `YieldOpportunity`
**Purpose:** Describes available yield opportunities, their parameters, and provider info.

| Column           | Type                       | Nullable | Default         | Description                       |
|------------------|----------------------------|----------|-----------------|-----------------------------------|
| id               | text                       | NO       |                 | Unique identifier                 |
| name             | text                       | NO       |                 | Name of the opportunity           |
| content          | text                       | YES      |                 | Description/content               |
| apy              | double precision           | NO       |                 | Annual percentage yield           |
| metadata_type    | text                       | NO       |                 | Metadata type                     |
| token_network    | text                       | NO       |                 | Network of the token              |
| token_symbol     | text                       | NO       |                 | Token symbol                      |
| token_address    | text                       | YES      |                 | Token contract address            |
| provider_id      | text                       | NO       |                 | Provider identifier               |
| provider_name    | text                       | NO       |                 | Provider name                     |
| protocol         | text                       | NO       | ''::text        | Protocol name                     |
| asset            | text                       | NO       | ''::text        | Asset name                        |
| tvl              | double precision           | NO       | 0               | Total value locked                |
| cooldown_days    | integer                    | YES      |                 | Cooldown period in days           |
| warmup_days      | integer                    | YES      |                 | Warmup period in days             |
| withdraw_days    | integer                    | YES      |                 | Withdrawal period in days         |
| can_enter        | boolean                    | NO       | true            | Can users enter                   |
| can_exit         | boolean                    | NO       | true            | Can users exit                    |
| created_at       | timestamp without time zone| NO       | CURRENT_TIMESTAMP| Creation timestamp                |
| is_available     | boolean                    | NO       | true            | Is opportunity available          |
| reward_type      | text                       | NO       |                 | Type of reward                    |
| updated_at       | timestamp without time zone| NO       |                 | Last update timestamp             |

---

## Table: `portfolio_transaction`
**Purpose:** Tracks transactions related to portfolio actions (deposit/withdrawal/etc).

| Column             | Type                       | Nullable | Default              | Description                       |
|--------------------|----------------------------|----------|----------------------|-----------------------------------|
| id                 | text                       | NO       | uuid_generate_v4()   | Unique identifier                 |
| wallet_address     | text                       | NO       |                      | User's wallet address             |
| yield_opportunity_id| text                      | NO       |                      | Linked yield opportunity          |
| direction          | USER-DEFINED               | NO       |                      | Transaction direction (enum)      |
| amount             | numeric                    | NO       |                      | Amount transacted                 |
| tx_hash            | text                       | NO       |                      | Transaction hash                  |
| executed_at        | timestamp without time zone| NO       |                      | When transaction was executed     |

---

## Table: `_prisma_migrations`
**Purpose:** Internal table for tracking database migrations (managed by Prisma).

| Column              | Type                       | Nullable | Default | Description                       |
|---------------------|----------------------------|----------|---------|-----------------------------------|
| id                  | character varying          | NO       |         | Unique migration id               |
| checksum            | character varying          | NO       |         | Checksum of migration             |
| finished_at         | timestamp with time zone   | YES      |         | When migration finished           |
| migration_name      | character varying          | NO       |         | Name of the migration             |
| logs                | text                       | YES      |         | Migration logs                    |
| rolled_back_at      | timestamp with time zone   | YES      |         | When migration was rolled back    |
| started_at          | timestamp with time zone   | NO       | now()   | When migration started            |
| applied_steps_count | integer                    | NO       | 0       | Number of steps applied           |

--- 