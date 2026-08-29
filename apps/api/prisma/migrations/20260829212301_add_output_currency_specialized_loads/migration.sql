/*
  Warnings:

  - Added the required column `currency` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputVoltage` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specializedSocketPoints` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specializedSocketWatts` to the `Simulation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Simulation" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "otherSpecificLoads" TEXT,
ADD COLUMN     "outputVoltage" INTEGER NOT NULL,
ADD COLUMN     "specializedSocketPoints" INTEGER NOT NULL,
ADD COLUMN     "specializedSocketWatts" DOUBLE PRECISION NOT NULL;
