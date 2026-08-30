import type { SimulationResult } from "../types/simulation";

export type QuoteItem = {
  label: string
  quantity: number
  unitPrice: number
  total: number
}

export type QuoteResult = {
  currency: string
  items: QuoteItem[]
  subtotal: number
  installation: number
  transport: number
  total: number
}

function roundUpPanels(watts: number) {
  return Math.ceil(watts / 550)
}

function roundUpBatteries(ah: number) {
  return Math.ceil(ah / 200)
}

export function buildQuote(simulation: SimulationResult): QuoteResult {
  const panelCount = roundUpPanels(simulation.recommendedSolarWatts)
  const batteryCount = roundUpBatteries(simulation.batteryCapacityAh)
  const inverterCount = 1
  const controllerCount = 1

  const prices =
    simulation.currency === "USD"
      ? {
          panel: 180,
          battery: 900,
          inverter: 700,
          controller: 250,
          protections: 300,
          installation: 500,
          transport: 250
        }
      : {
          panel: 170,
          battery: 850,
          inverter: 650,
          controller: 230,
          protections: 280,
          installation: 450,
          transport: 200
        }

  const items: QuoteItem[] = [
    {
      label: "Panneaux solaires 550W",
      quantity: panelCount,
      unitPrice: prices.panel,
      total: panelCount * prices.panel
    },
    {
      label: "Batteries 200Ah",
      quantity: batteryCount,
      unitPrice: prices.battery,
      total: batteryCount * prices.battery
    },
    {
      label: "Onduleur",
      quantity: inverterCount,
      unitPrice: prices.inverter,
      total: inverterCount * prices.inverter
    },
    {
      label: "Regulateur",
      quantity: controllerCount,
      unitPrice: prices.controller,
      total: controllerCount * prices.controller
    },
    {
      label: "Protections et tableau",
      quantity: 1,
      unitPrice: prices.protections,
      total: prices.protections
    }
  ]

  const subtotal = items.reduce((sum, item) => sum + item.total, 0)
  const installation = prices.installation
  const transport = prices.transport
  const total = subtotal + installation + transport

  return {
    currency: simulation.currency,
    items,
    subtotal,
    installation,
    transport,
    total
  }
}
