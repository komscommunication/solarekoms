/*
  Warnings:

  - Added the required column `acProtection` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `averageSocketWatts` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dcProtection` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inverterProtection` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lightPoints` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lightingBreaker` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socketBreaker` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socketCircuitType` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socketPoints` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wattsPerLightPoint` to the `Simulation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Simulation" ADD COLUMN     "acProtection" TEXT NOT NULL,
ADD COLUMN     "averageSocketWatts" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "dcProtection" TEXT NOT NULL,
ADD COLUMN     "dedicatedLoadHours" DOUBLE PRECISION,
ADD COLUMN     "dedicatedLoadLabel" TEXT,
ADD COLUMN     "dedicatedLoadWatts" DOUBLE PRECISION,
ADD COLUMN     "inverterProtection" TEXT NOT NULL,
ADD COLUMN     "lightPoints" INTEGER NOT NULL,
ADD COLUMN     "lightingBreaker" TEXT NOT NULL,
ADD COLUMN     "socketBreaker" TEXT NOT NULL,
ADD COLUMN     "socketCircuitType" TEXT NOT NULL,
ADD COLUMN     "socketPoints" INTEGER NOT NULL,
ADD COLUMN     "wattsPerLightPoint" DOUBLE PRECISION NOT NULL;
