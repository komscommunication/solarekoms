/*
  Warnings:

  - You are about to drop the column `dedicatedLoadHours` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `dedicatedLoadLabel` on the `Simulation` table. All the data in the column will be lost.
  - You are about to drop the column `dedicatedLoadWatts` on the `Simulation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Simulation" DROP COLUMN "dedicatedLoadHours",
DROP COLUMN "dedicatedLoadLabel",
DROP COLUMN "dedicatedLoadWatts",
ADD COLUMN     "dedicatedLoads" JSONB;
