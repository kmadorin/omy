/*
  Warnings:

  - The primary key for the `token_price` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "token_price" DROP CONSTRAINT "token_price_pkey",
ADD CONSTRAINT "token_price_pkey" PRIMARY KEY ("network", "address");

-- AlterTable
ALTER TABLE "YieldOpportunity" ADD COLUMN     "reward_token_symbol" TEXT,
ADD COLUMN     "reward_token_address" TEXT,
ADD COLUMN     "reward_token_name" TEXT;
