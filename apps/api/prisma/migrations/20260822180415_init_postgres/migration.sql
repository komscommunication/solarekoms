-- CreateTable
CREATE TABLE "public"."Simulation" (
    "id" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "installationType" TEXT NOT NULL,
    "roofType" TEXT NOT NULL,
    "autonomyDays" INTEGER NOT NULL,
    "systemVoltage" INTEGER NOT NULL,
    "dailyConsumptionWh" DOUBLE PRECISION NOT NULL,
    "dailyConsumptionKwh" DOUBLE PRECISION NOT NULL,
    "peakPowerW" DOUBLE PRECISION NOT NULL,
    "batteryCapacityAh" DOUBLE PRECISION NOT NULL,
    "recommendedSolarWatts" DOUBLE PRECISION NOT NULL,
    "inverterWatts" DOUBLE PRECISION NOT NULL,
    "controllerAmps" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Simulation_pkey" PRIMARY KEY ("id")
);
