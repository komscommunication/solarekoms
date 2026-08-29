export type SpecificLoadPayload = {
  label: string
  watts: number
  hoursPerDay: number
  quantity: number
}

export type SimulationPayload = {
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

  dedicatedLoads: SpecificLoadPayload[]

  otherSpecificLoads?: string
}

export async function calculateSimulation(payload: SimulationPayload) {
  const response = await fetch("http://localhost:3001/simulations/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error("Erreur lors du calcul de la simulation")
  }

  return response.json()
}
