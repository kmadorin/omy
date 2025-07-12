/*
  Warnings:

  - You are about to drop the column `amount` on the `portfolio_position` table. All the data in the column will be lost.
  - Changed the type of `direction` on the `portfolio_transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "portfolio_position" DROP COLUMN "amount",
ADD COLUMN     "on_chain_amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "principal_sum" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "usd_value_cached" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "portfolio_transaction" ADD COLUMN     "on_chain_delta" DECIMAL(65,30),
ADD COLUMN     "usd_value" DECIMAL(65,30);

-- CreateTable
CREATE TABLE "token_price" (
    "network" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "decimals" INTEGER NOT NULL,
    "price_usd" DECIMAL(65,30),
    "fetched_at" TIMESTAMP(3),

    CONSTRAINT "token_price_pkey" PRIMARY KEY ("network","address")
);


