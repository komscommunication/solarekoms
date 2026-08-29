export type SpecificLoad = {
  label: string
  watts: number
  hoursPerDay: number
  quantity: number
}

export type SimulationResult = {
  id: string
  projectName: string
  region: string
  installationType: string
  roofType: string
  autonomyDays: number

  systemVoltage: number
  outputVoltage: number
  currency: string

  lightPoints: number
  wattsPerLightPoint: number

  socketPoints: number
  socketCircuitType: string
  averageSocketWatts: number

  specializedSocketPoints: number
  specializedSocketWatts: number

  dedicatedLoads?: SpecificLoad[]
  otherSpecificLoads?: string

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
