export type SimulationPayload = {
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
