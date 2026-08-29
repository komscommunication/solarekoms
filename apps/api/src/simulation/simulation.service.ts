import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSimulationDto } from "./dto/create-simulation.dto";

@Injectable()
export class SimulationService {
  constructor(private readonly prisma: PrismaService) {}

  async calculate(input: CreateSimulationDto) {
    const lightingWh = input.lightPoints * input.wattsPerLightPoint * 5;
    const socketWh = input.socketPoints * input.averageSocketWatts * 4;
    const dedicatedWh =
      (input.dedicatedLoadWatts ?? 0) * (input.dedicatedLoadHours ?? 0);

    const dailyConsumptionWh = lightingWh + socketWh + dedicatedWh;
    const dailyConsumptionKwh = dailyConsumptionWh / 1000;

    const peakPowerW =
      input.lightPoints * input.wattsPerLightPoint +
      input.socketPoints * input.averageSocketWatts +
      (input.dedicatedLoadWatts ?? 0);

    const safetyFactor = 1.2;
    const adjustedWh = dailyConsumptionWh * safetyFactor;
    const batteryDod = 0.8;
    const efficiency = 0.9;
    const sunHours = 5;

    const batteryCapacityAh =
      (adjustedWh * input.autonomyDays) /
      (input.systemVoltage * batteryDod * efficiency);

    const recommendedSolarWatts = adjustedWh / sunHours;
    const inverterWatts = Math.ceil(peakPowerW * 1.25);
    const controllerAmps = recommendedSolarWatts / input.systemVoltage;

    const lightingBreaker = "10A";
    const socketBreaker =
      input.socketCircuitType === "AC" ? "20A" : "16A";
    const acProtection = "Interrupteur differentiel 30mA type AC";
    const dcProtection = "Disjoncteur DC + parafoudre DC";
    const inverterProtection = "Disjoncteur AC dedie onduleur";

    return this.prisma.simulation.create({
      data: {
        projectName: input.projectName,
        region: input.region,
        installationType: input.installationType,
        roofType: input.roofType,
        autonomyDays: input.autonomyDays,
        systemVoltage: input.systemVoltage,

        lightPoints: input.lightPoints,
        wattsPerLightPoint: input.wattsPerLightPoint,
        socketPoints: input.socketPoints,
        socketCircuitType: input.socketCircuitType,
        averageSocketWatts: input.averageSocketWatts,

        dedicatedLoadLabel: input.dedicatedLoadLabel,
        dedicatedLoadWatts: input.dedicatedLoadWatts,
        dedicatedLoadHours: input.dedicatedLoadHours,

        dailyConsumptionWh,
        dailyConsumptionKwh,
        peakPowerW,
        batteryCapacityAh,
        recommendedSolarWatts,
        inverterWatts,
        controllerAmps,

        acProtection,
        dcProtection,
        inverterProtection,
        lightingBreaker,
        socketBreaker,
      },
    });
  }

  async findAll() {
    return this.prisma.simulation.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
}
