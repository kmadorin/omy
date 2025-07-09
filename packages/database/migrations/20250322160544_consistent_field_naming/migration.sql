/*
  Warnings:

  - You are about to drop the column `canEnter` on the `YieldOpportunity` table. All the data in the column will be lost.
  - You are about to drop the column `canExit` on the `YieldOpportunity` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `YieldOpportunity` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `YieldOpportunity` table. All the data in the column will be lost.
  - You are about to drop the column `rewardType` on the `YieldOpportunity` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `YieldOpportunity` table. All the data in the column will be lost.
  - Added the required column `reward_type` to the `YieldOpportunity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `YieldOpportunity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "YieldOpportunity" DROP COLUMN "canEnter",
DROP COLUMN "canExit",
DROP COLUMN "createdAt",
DROP COLUMN "isAvailable",
DROP COLUMN "rewardType",
DROP COLUMN "updatedAt",
ADD COLUMN     "can_enter" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "can_exit" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "reward_type" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
