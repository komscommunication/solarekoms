export type SimulationResult = {
  id: string
  projectName: string
  region: string
  installationType: string
  roofType: string
  autonomyDays: number
  systemVoltage: number

  lightPoints: number
  wattsPerLightPoint: number
  socketPoints: number
  socketCircuitType: string
  averageSocketWatts: number

  dedicatedLoadLabel?: string
  dedicatedLoadWatts?: number
  dedicatedLoadHours?: number

  dailyConsumptionWh: number
  dailyConsumptionKwh: number
  peakPowerW: number
  batteryCapacityAh: number
  recommendedSolarWatts: number
  inverterWatts: number
  controllerAmps: number

  acProtection: string
  dcProtection: string
  inverterProtection: string
  lightingBreaker: string
  socketBreaker: string

  createdAt: string
  updatedAt: string
}
