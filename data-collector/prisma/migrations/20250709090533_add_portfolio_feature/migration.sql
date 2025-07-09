-- CreateEnum
CREATE TYPE "PortfolioDirection" AS ENUM ('ENTER', 'EXIT', 'CORRECTION');

-- AlterTable
ALTER TABLE "portfolio_position"
    DROP COLUMN "category",
    ADD COLUMN     "wallet_address" TEXT NOT NULL,
    ADD COLUMN     "integration_id" TEXT NOT NULL,
    ADD COLUMN     "last_balance_sync" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_position_wallet_address_integration_id_key" ON "portfolio_position" ("wallet_address", "integration_id");

-- CreateTable
CREATE TABLE "portfolio_transaction" (
    "id" TEXT NOT NULL DEFAULT uuid_generate_v4(),
    "wallet_address" TEXT NOT NULL,
    "integration_id" TEXT NOT NULL,
    "yield_opportunity_id" TEXT NOT NULL,
    "direction" "PortfolioDirection" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "usd_value" DECIMAL(65,30),
    "tx_hash" TEXT NOT NULL,
    "executed_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "portfolio_transaction_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "portfolio_transaction_tx_hash_key" UNIQUE ("tx_hash")
);

-- CreateIndex
CREATE INDEX "portfolio_transaction_wallet_address_idx" ON "portfolio_transaction" ("wallet_address");

-- AddForeignKey
ALTER TABLE "portfolio_transaction" ADD CONSTRAINT "portfolio_transaction_yield_opportunity_id_fkey" FOREIGN KEY ("yield_opportunity_id") REFERENCES "YieldOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
