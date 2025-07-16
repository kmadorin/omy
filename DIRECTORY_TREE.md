# Project Directory Tree

````
omy/
  - agent.ipynb
  - AGENT.md
  - agent.py
  - apps/
    - data-collector/
      - api-client.ts
      - collector.ts
      - db-service.ts
      - index.ts
      - package.json
      - test-db.js
      - types.ts
    - frontend/
      - app/
        - api/
          - portfolio/
            - route.ts
            - summary/
              - route.ts
            - sync/
              - route.ts
            - wallet/
              - route.ts
          - transactions/
            - route.ts
        - favicon.ico
        - globals.css
        - layout.tsx
        - not-found.tsx
        - page.tsx
        - portfolio/
          - page.tsx
        - search/
          - error.tsx
          - layout.tsx
          - loading.tsx
          - page.tsx
      - components/
        - account.tsx
        - ColorExample.tsx
        - connect-wallet.tsx
        - exit-position-modal.tsx
        - header.tsx
        - investment-modal.tsx
        - portfolio-client.tsx
        - position-card.tsx
        - search-bar.tsx
        - search-results.tsx
        - sync-badge.tsx
        - ui/
          - badge.tsx
          - button.tsx
          - card.tsx
          - dialog.tsx
          - input.tsx
          - label.tsx
          - slider.tsx
          - toast.tsx
          - toaster.tsx
          - tooltip.tsx
        - wallet-options.tsx
        - wallet-portfolio.tsx
        - wallet-tokens-row.tsx
        - yield-card.tsx
        - yield-results.tsx
      - components.json
      - eslint.config.mjs
      - hooks/
        - use-toast.tsx
      - integrations/
        - supabase/
          - client.ts
          - types.ts
      - lib/
        - chains-map.ts
        - langgraph-client.ts
        - mock-data.ts
        - portfolio-types.ts
        - portfolio-utils.ts
        - prisma.ts
        - search-service-supabase.ts
        - search-service.ts
        - types.ts
        - utils.ts
      - next.config.ts
      - package.json
      - postcss.config.mjs
      - providers/
        - providers.tsx
      - public/
        - file.svg
        - globe.svg
        - next.svg
        - placeholder-token.svg
        - vercel.svg
        - window.svg
      - README.md
      - tailwind.config.ts
      - tests/
        - api-transactions.test.ts
        - portfolio-fetch.test.ts
      - tsconfig.json
      - vitest.config.ts
      - wagmiConfig.ts
  - console_client/
    - index.js
    - package.json
    - top_10_stablecoin.js
    - top_5_ethereum.js
  - data_collector.txt
  - database_structure.md
  - GEMINI.md
  - langgraph.json
  - package.json
  - packages/
    - database/
      - migrations/
        - 20250322160135_init/
          - migration.sql
        - 20250322160544_consistent_field_naming/
          - migration.sql
        - 20250709090533_add_portfolio_feature/
          - migration.sql
        - 20250709204243_add_token_fields_to_portfolio_transaction/
          - migration.sql
        - 20250710143405_add_portfolio_position_trigger/
          - migration.sql
        - 20250710151221_verify_permissions/
          - migration.sql
        - 20250710151445_add_service_role_permissions_to_yield_opportunity_table/
          - migration.sql
        - 20250710153609_update_portfolio_transaction_and_portfolio_position_tables/
          - migration.sql
        - 20250710154543_update_portfolio_transaction_and_portfolio_position_tables/
          - migration.sql
        - 20250710162541_update_portfolio_position_trigger/
          - migration.sql
        - 20250711161304_better_db_structure_for_sync/
          - migration.sql
        - 20250711172924_add_update_principal_trigger/
          - migration.sql
        - 20250712111723_update_portfolio_position_trigger/
          - migration.sql
        - 20250712113717_add_service_role_permissions_to_all_tables/
          - migration.sql
        - 20250712120000_grant_service_role_permissions_to_all_tables/
          - migration.sql
        - 20250712132352_update_token_price_constraints/
          - migration.sql
        - 20250715132038_add_reward_token_data_to_yield_opportunities_table/
          - migration.sql
        - 20250715153055_add_is_active_trigger/
          - migration.sql
        - migration_lock.toml
      - package.json
      - schema.prisma
  - pnpm-lock.yaml
  - pnpm-workspace.yaml
  - PORTFOLIO_IMPLEMENTATION_PLAN.md
  - PRD.md
  - README.md
  - requirements.txt
  - supabase/
    - functions/
      - collect-yields/
        - index.ts
      - fetch_token_prices/
        - index.ts
      - fetch_token_prices_alchemy/
        - index.ts
      - sync_balances/
        - index.ts
      - sync_balances_old/
        - index.ts
      - sync_wallet/
        - index.ts
  - TODO.md
  - vercel.json

---

## Monorepo Structure Description

- **omy/**: Root of the monorepo. Contains global configs, docs, and subprojects.
- **apps/**: Application code. Each subfolder is a deployable app.
  - **data-collector/**: Node service for collecting and syncing data.
  - **frontend/**: Next.js web frontend.
- **console_client/**: CLI utilities and scripts.
- **packages/**: Shared packages/libraries.
  - **database/**: Prisma schema, migrations, and generated client for DB access.
- **supabase/**: Edge functions for Supabase integration.
- **Other files**: Docs, configs, and monorepo-level scripts.

---

## vercel.json

```json
{
	"$schema": "https://openapi.vercel.sh/vercel.json",
	"installCommand": "pnpm install && pnpm run prisma:generate",
	"buildCommand": "pnpm run prisma:generate && pnpm run copy:prisma-client && pnpm run build:frontend",
	"outputDirectory": "apps/frontend/.next"
}
````

---

## package.json (root)

```json
{
	"name": "omy",
	"private": true,
	"version": "1.0.0",
	"description": "Monorepo for the OhMyYield",
	"scripts": {
		"dev:frontend": "pnpm --filter frontend dev",
		"dev:collector": "pnpm --filter data-collector dev",
		"build:frontend": "pnpm --filter frontend build",
		"prod:frontend": "pnpm --filter frontend start",
		"build": "pnpm --filter \"./apps/*\" build",
		"lint": "pnpm --filter \"./apps/*\" lint",
		"prisma:generate": "pnpm --filter @omy/database generate",
		"prisma:migrate": "pnpm --filter @omy/database run migrate:dev",
		"prisma:migrate:deploy": "pnpm --filter @omy/database run migrate:deploy",
		"copy:prisma-client": "[ \"$(realpath packages/database/generated/client)\" = \"$(realpath apps/frontend/node_modules/@omy/database/generated/client)\" ] || (mkdir -p apps/frontend/node_modules/@omy/database/generated && cp -r packages/database/generated/client apps/frontend/node_modules/@omy/database/generated/)"
	},
	"devDependencies": {
		"next": "15.1.0",
		"prisma": "^5.22.0",
		"typescript": "^5",
		"eslint": "^9"
	}
}
```

---

## apps/data-collector/package.json

```json
{
	"name": "data-collector",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "tsx index.ts",
		"dev": "tsx watch index.ts",
		"build": "tsc"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"@prisma/client": "^5.22.0",
		"axios": "^1.8.4",
		"dotenv": "^16.4.7",
		"node-cron": "^3.x",
		"winston": "^3.x",
		"zod": "^3.x",
		"@omy/database": "workspace:*"
	},
	"devDependencies": {
		"@types/node": "^22.13.11",
		"@types/node-cron": "^3.0.11",
		"prisma": "^5.22.0",
		"tsx": "^4.7.1",
		"typescript": "^5.4.2"
	}
}
```

---

## apps/frontend/package.json

```json
{
	"name": "frontend",
	"version": "0.1.0",
	"private": true,
	"scripts": {
		"dev": "next dev --turbopack",
		"build": "next build",
		"start": "next start",
		"lint": "next lint",
		"test": "vitest run"
	},
	"dependencies": {
		"@langchain/langgraph-sdk": "^0.0.11",
		"@omy/database": "workspace:*",
		"@prisma/client": "^5.22.0",
		"@radix-ui/react-dialog": "^1.1.14",
		"@radix-ui/react-label": "^2.1.7",
		"@radix-ui/react-slider": "^1.3.5",
		"@radix-ui/react-slot": "^1.1.2",
		"@radix-ui/react-toast": "^1.2.14",
		"@radix-ui/react-tooltip": "^1.1.8",
		"@stakekit/api-hooks": "^0.0.103",
		"@supabase/supabase-js": "^2.49.8",
		"@tanstack/react-query": "^5.69.0",
		"@wagmi/connectors": "^5.8.5",
		"@wagmi/core": "^2.17.3",
		"class-variance-authority": "^0.7.1",
		"clsx": "^2.1.1",
		"date-fns": "^4.1.0",
		"lucide-react": "^0.483.0",
		"next": "15.1.0",
		"react": "^19.0.0",
		"react-dom": "^19.0.0",
		"sonner": "^2.0.4",
		"tailwind-merge": "^3.0.2",
		"tailwindcss-animate": "^1.0.7",
		"viem": "~2.31.7",
		"wagmi": "^2.15.6",
		"zod": "^3.25.76"
	},
	"devDependencies": {
		"@eslint/eslintrc": "^3",
		"@types/node": "^20.19.6",
		"@types/react": "^19",
		"@types/react-dom": "^19",
		"eslint": "^9",
		"eslint-config-next": "15.1.0",
		"pino-pretty": "^13.0.0",
		"postcss": "^8",
		"prisma": "^5.22.0",
		"tailwindcss": "^3.4.17",
		"typescript": "^5",
		"vitest": "^1.6.1"
	}
}
```

---

## console_client/package.json

```json
{
	"name": "console_client",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "node index.js",
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"@langchain/langgraph-sdk": "^0.0.60"
	}
}
```

---

## packages/database/package.json

```json
{
	"name": "@omy/database",
	"version": "1.0.0",
	"main": "./generated/client/index.js",
	"types": "./generated/client/index.d.ts",
	"scripts": {
		"generate": "prisma generate",
		"migrate:dev": "prisma migrate dev",
		"migrate:deploy": "prisma migrate deploy",
		"print-env": "node -e 'console.log(process.env.DATABASE_URL)'"
	},
	"dependencies": {
		"@prisma/client": "^5.22.0"
	},
	"devDependencies": {
		"prisma": "^5.22.0"
	}
}
```

---

## packages/database/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
	binaryTargets = ["native", "rhel-openssl-3.0.x"]
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

/// ─────── TOKEN PRICE ───────
/// composite PK = network+address (avoids symbol collisions)
model TokenPrice {
  network    String            // "polygon" | "ethereum" | …
  address    String            // lowercase checksum
  symbol     String
  name       String
  decimals   Int

  priceUsd   Decimal?  @map("price_usd")     // null until fetched
  fetchedAt  DateTime? @map("fetched_at")

  @@id([network, address])
  @@map("token_price")
}

model YieldOpportunity {
  id           String   @id
  name         String
  content      String?
  apy          Float
  type         String   @map("metadata_type")
  network      String   @map("token_network")
  tokenSymbol  String   @map("token_symbol")
  tokenAddress String?  @map("token_address")
  providerId   String   @map("provider_id")
  providerName String   @map("provider_name")
  protocol     String   @default("")
  asset        String   @default("")
  tvl          Float    @default(0)
  cooldownDays Int?     @map("cooldown_days")
  warmupDays   Int?     @map("warmup_days")
  withdrawDays Int?     @map("withdraw_days")
  canEnter     Boolean  @default(true) @map("can_enter")
  canExit      Boolean  @default(true) @map("can_exit")
  createdAt    DateTime @default(now()) @map("created_at")
  isAvailable  Boolean  @default(true) @map("is_available")
  rewardType   String   @map("reward_type")
  updatedAt    DateTime @map("updated_at")

  // New reward token fields
  rewardTokenSymbol   String?  @map("reward_token_symbol")
  rewardTokenAddress  String?  @map("reward_token_address")
  rewardTokenName     String?  @map("reward_token_name")

  portfolioPositions   PortfolioPosition[]
  portfolioTransactions PortfolioTransaction[]
  @@map("YieldOpportunity")
}

/// ─────── CURRENT SNAPSHOT ───────
model PortfolioPosition {
  id                String   @id @map("id")
  principalSum      Decimal  @default(0)  @map("principal_sum")   // Σ underlying
  onChainAmount     Decimal  @default(0)  @map("on_chain_amount") // live aToken
  usdValueCached    Decimal?              @map("usd_value_cached")
  entryDate         DateTime @map("entry_date")
  lastModified      DateTime @updatedAt @map("last_modified")
  isActive          Boolean  @default(true) @map("is_active")
  walletAddress     String   @map("wallet_address")
  yieldOpportunityId String  @map("yield_opportunity_id")
  lastBalanceSync   DateTime? @map("last_balance_sync")

  yieldOpportunity  YieldOpportunity @relation(fields: [yieldOpportunityId], references: [id])

  @@unique([walletAddress, yieldOpportunityId])
  @@map("portfolio_position")
}

model PortfolioRebalance {
  id                 String   @id
  fromPositionId     String   @map("from_position_id")
  toPositionId       String   @map("to_position_id")
  amount             Float
  executedAt         DateTime @map("executed_at")
  fromApy            Float    @map("from_apy")
  toApy              Float    @map("to_apy")
  gasCost            Float    @map("gas_cost")
  annualIncomeChange Float    @map("annual_income_change")

  @@map("portfolio_rebalance")
}

/// ─────── TRANSACTION LOG ───────

model PortfolioTransaction {
  id                String             @id @default(dbgenerated("uuid_generate_v4()"))
  walletAddress     String             @map("wallet_address")
  yieldOpportunityId String            @map("yield_opportunity_id")
  direction         PortfolioDirection
  amount            Decimal                       // underlying token (USDC)
  onChainDelta      Decimal?  @map("on_chain_delta") // signed Δ in aToken (only CORRECTION)
  usdValue          Decimal?  @map("usd_value")
  txHash            String             @unique @map("tx_hash")
  executedAt        DateTime           @map("executed_at")

  yieldOpportunity  YieldOpportunity   @relation(fields: [yieldOpportunityId], references: [id])

  @@index([walletAddress])
  @@map("portfolio_transaction")
}

enum PortfolioDirection {
  ENTER
  EXIT
  CORRECTION
}
```
