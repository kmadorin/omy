-- CreateTable
CREATE TABLE "YieldOpportunity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT,
    "apy" DOUBLE PRECISION NOT NULL,
    "rewardType" TEXT NOT NULL,
    "metadata_type" TEXT NOT NULL,
    "token_network" TEXT NOT NULL,
    "token_symbol" TEXT NOT NULL,
    "token_address" TEXT,
    "provider_id" TEXT NOT NULL,
    "provider_name" TEXT NOT NULL,
    "protocol" TEXT NOT NULL DEFAULT '',
    "asset" TEXT NOT NULL DEFAULT '',
    "tvl" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "cooldown_days" INTEGER,
    "warmup_days" INTEGER,
    "withdraw_days" INTEGER,
    "canEnter" BOOLEAN NOT NULL DEFAULT true,
    "canExit" BOOLEAN NOT NULL DEFAULT true,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "YieldOpportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_position" (
    "id" TEXT NOT NULL,
    "yield_opportunity_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "last_modified" TIMESTAMP(3) NOT NULL,
    "current_apy" DOUBLE PRECISION NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "exit_tx_hash" TEXT,
    "entry_tx_hash" TEXT,
    "token_address" TEXT,
    "token_symbol" TEXT NOT NULL,

    CONSTRAINT "portfolio_position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_rebalance" (
    "id" TEXT NOT NULL,
    "from_position_id" TEXT NOT NULL,
    "to_position_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "executed_at" TIMESTAMP(3) NOT NULL,
    "from_apy" DOUBLE PRECISION NOT NULL,
    "to_apy" DOUBLE PRECISION NOT NULL,
    "gas_cost" DOUBLE PRECISION NOT NULL,
    "annual_income_change" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "portfolio_rebalance_pkey" PRIMARY KEY ("id")
);
