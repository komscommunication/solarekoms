import { catalogProducts } from "../data/catalog";
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

function findProduct(id: string) {
  const product = catalogProducts.find((item) => item.id === id)
  if (!product) {
    throw new Error(`Produit catalogue introuvable: ${id}`)
  }
  return product
}

function getPrice(productId: string, currency: string) {
  const product = findProduct(productId)
  return currency === "USD" ? product.priceUSD : product.priceEUR
}

export function buildQuote(simulation: SimulationResult): QuoteResult {
  const panelCount = roundUpPanels(simulation.recommendedSolarWatts)
  const batteryCount = roundUpBatteries(simulation.batteryCapacityAh)
  const inverterCount = 1
  const controllerCount = 1

  const panelPrice = getPrice("panel-550w", simulation.currency)
  const batteryPrice = getPrice("battery-200ah", simulation.currency)
  const inverterPrice = getPrice("inverter-230v", simulation.currency)
  const controllerPrice = getPrice("controller-mppt", simulation.currency)
  const protectionsPrice = getPrice("protection-board", simulation.currency)

  const installation = simulation.currency === "USD" ? 500 : 450
  const transport = simulation.currency === "USD" ? 250 : 200

  const items: QuoteItem[] = [
    {
      label: findProduct("panel-550w").name,
      quantity: panelCount,
      unitPrice: panelPrice,
      total: panelCount * panelPrice
    },
    {
      label: findProduct("battery-200ah").name,
      quantity: batteryCount,
      unitPrice: batteryPrice,
      total: batteryCount * batteryPrice
    },
    {
      label: findProduct("inverter-230v").name,
      quantity: inverterCount,
      unitPrice: inverterPrice,
      total: inverterCount * inverterPrice
    },
    {
      label: findProduct("controller-mppt").name,
      quantity: controllerCount,
      unitPrice: controllerPrice,
      total: controllerCount * controllerPrice
    },
    {
      label: findProduct("protection-board").name,
      quantity: 1,
      unitPrice: protectionsPrice,
      total: protectionsPrice
    }
  ]

  const subtotal = items.reduce((sum, item) => sum + item.total, 0)
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
