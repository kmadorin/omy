/*
  Warnings:

  - You are about to drop the column `yield_opportunity_id` on the `portfolio_position` table. All the data in the column will be lost.
  - You are about to drop the column `usd_value` on the `portfolio_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `yield_opportunity_id` on the `portfolio_transaction` table. All the data in the column will be lost.
  - Added the required column `token_symbol` to the `portfolio_transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "portfolio_transaction" DROP CONSTRAINT "portfolio_transaction_yield_opportunity_id_fkey";

-- AlterTable
ALTER TABLE "portfolio_position" DROP COLUMN "yield_opportunity_id";

-- AlterTable
ALTER TABLE "portfolio_transaction" DROP COLUMN "usd_value",
DROP COLUMN "yield_opportunity_id",
ADD COLUMN     "token_address" TEXT,
ADD COLUMN     "token_symbol" TEXT NOT NULL;
