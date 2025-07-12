# Database Structure

This document describes the current database schema for the project, including all tables, columns, types, nullability, and default values.

---

## Table: `portfolio_position`
| Column              | Type                        | Nullable | Default     |
|---------------------|-----------------------------|----------|-------------|
| id                  | text                        | NO       |             |
| wallet_address      | text                        | NO       |             |
| yield_opportunity_id| text                        | NO       |             |
| on_chain_amount     | numeric                     | NO       | 0           |
| principal_sum       | numeric                     | NO       | 0           |
| usd_value_cached    | numeric                     | YES      |             |
| is_active           | boolean                     | NO       | true        |
| entry_date          | timestamp without time zone | NO       |             |
| last_modified       | timestamp without time zone | NO       |             |
| last_balance_sync   | timestamp without time zone | YES      |             |

---

## Table: `portfolio_rebalance`
| Column            | Type                        | Nullable | Default     |
|-------------------|-----------------------------|----------|-------------|
| id                | text                        | NO       |             |
| from_position_id  | text                        | NO       |             |
| to_position_id    | text                        | NO       |             |
| amount            | double precision            | NO       |             |
| from_apy          | double precision            | NO       |             |
| to_apy            | double precision            | NO       |             |
| annual_income_change | double precision         | NO       |             |
| gas_cost          | double precision            | NO       |             |
| executed_at       | timestamp without time zone | NO       |             |

---

## Table: `YieldOpportunity`
| Column         | Type                        | Nullable | Default         |
|----------------|-----------------------------|----------|-----------------|
| id             | text                        | NO       |                 |
| name           | text                        | NO       |                 |
| content        | text                        | YES      |                 |
| asset          | text                        | NO       | ''::text        |
| protocol       | text                        | NO       | ''::text        |
| provider_id    | text                        | NO       |                 |
| provider_name  | text                        | NO       |                 |
| reward_type    | text                        | NO       |                 |
| apy            | double precision            | NO       |                 |
| tvl            | double precision            | NO       | 0               |
| cooldown_days  | integer                     | YES      |                 |
| warmup_days    | integer                     | YES      |                 |
| withdraw_days  | integer                     | YES      |                 |
| can_enter      | boolean                     | NO       | true            |
| can_exit       | boolean                     | NO       | true            |
| is_available   | boolean                     | NO       | true            |
| created_at     | timestamp without time zone | NO       | CURRENT_TIMESTAMP|
| updated_at     | timestamp without time zone | NO       |                 |
| metadata_type  | text                        | NO       |                 |
| token_network  | text                        | NO       |                 |
| token_symbol   | text                        | NO       |                 |
| token_address  | text                        | YES      |                 |

---

## Table: `portfolio_transaction`
| Column              | Type                        | Nullable | Default             |
|---------------------|-----------------------------|----------|---------------------|
| id                  | text                        | NO       | uuid_generate_v4()  |
| wallet_address      | text                        | NO       |                     |
| yield_opportunity_id| text                        | NO       |                     |
| direction           | USER-DEFINED                | NO       |                     |
| amount              | numeric                     | NO       |                     |
| on_chain_delta      | numeric                     | YES      |                     |
| usd_value           | numeric                     | YES      |                     |
| tx_hash             | text                        | NO       |                     |
| executed_at         | timestamp without time zone | NO       |                     |

---

## Table: `token_price`
| Column      | Type                        | Nullable | Default |
|-------------|-----------------------------|----------|---------|
| address     | text                        | NO       |         |
| network     | text                        | NO       |         |
| symbol      | text                        | NO       |         |
| name        | text                        | NO       |         |
| decimals    | integer                     | NO       |         |
| price_usd   | numeric                     | YES      |         |
| fetched_at  | timestamp without time zone | YES      |         |

---

## Table: `_prisma_migrations`
| Column              | Type                        | Nullable | Default   |
|---------------------|-----------------------------|----------|-----------|
| id                  | character varying           | NO       |           |
| checksum            | character varying           | NO       |           |
| finished_at         | timestamp with time zone    | YES      |           |
| migration_name      | character varying           | NO       |           |
| logs                | text                        | YES      |           |
| rolled_back_at      | timestamp with time zone    | YES      |           |
| started_at          | timestamp with time zone    | NO       | now()     |
| applied_steps_count | integer                     | NO       | 0         | 