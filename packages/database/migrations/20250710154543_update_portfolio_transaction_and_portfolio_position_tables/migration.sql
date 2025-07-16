/*
  Warnings:

  - You are about to drop the column `entry_tx_hash` on the `portfolio_position` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "portfolio_position" DROP CONSTRAINT "fk_portfolio_position_yield_opportunity";

-- DropForeignKey
ALTER TABLE "portfolio_transaction" DROP CONSTRAINT "fk_portfolio_transaction_yield_opportunity";

-- AlterTable
ALTER TABLE "portfolio_position" DROP COLUMN "entry_tx_hash";

-- AddForeignKey
ALTER TABLE "portfolio_position" ADD CONSTRAINT "portfolio_position_yield_opportunity_id_fkey" FOREIGN KEY ("yield_opportunity_id") REFERENCES "YieldOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_transaction" ADD CONSTRAINT "portfolio_transaction_yield_opportunity_id_fkey" FOREIGN KEY ("yield_opportunity_id") REFERENCES "YieldOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "portfolio_position_wallet_address_integration_id_key" RENAME TO "portfolio_position_wallet_address_yield_opportunity_id_key";
