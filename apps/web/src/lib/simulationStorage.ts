import type { SimulationResult } from "../types/simulation";

const STORAGE_KEY = "latestSimulation";

export function saveLatestSimulation(simulation: SimulationResult) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(simulation));
}

export function loadLatestSimulation(): SimulationResult | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SimulationResult;
  } catch {
    return null;
  }
}
