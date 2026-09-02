import { useState } from "react";
import { ApplianceForm } from "../components/simulation/ApplianceForm";
import { SimulationSummary } from "../components/simulation/SimulationSummary";
import { saveLatestSimulation } from "../lib/simulationStorage";
import type { SimulationResult } from "../types/simulation";

export function SimulatorPage() {
  const [result, setResult] = useState<SimulationResult | null>(null)

  const handleResult = (nextResult: SimulationResult) => {
    setResult(nextResult)
    saveLatestSimulation(nextResult)
  }

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Simulateur energetique</h1>
        <ApplianceForm onResult={handleResult} />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Resultat estime</h2>
        <SimulationSummary result={result} />
      </div>
    </section>
  )
}
