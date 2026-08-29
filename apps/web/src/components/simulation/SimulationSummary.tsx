import type { SimulationResult } from "../../types/simulation";

type SimulationSummaryProps = {
  result: SimulationResult | null
}

export function SimulationSummary({ result }: SimulationSummaryProps) {
  if (!result) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-600">
        Lance un calcul pour afficher les resultats reels provenant de l API.
      </div>
    )
  }

  const items = [
    {
      label: "Consommation journaliere",
      value: `${result.dailyConsumptionWh} Wh`
    },
    {
      label: "Consommation journaliere",
      value: `${result.dailyConsumptionKwh} kWh`
    },
    {
      label: "Puissance simultanee",
      value: `${result.peakPowerW} W`
    },
    {
      label: "Batterie recommandee",
      value: `${result.batteryCapacityAh} Ah`
    },
    {
      label: "Puissance solaire recommandee",
      value: `${result.recommendedSolarWatts} Wc`
    },
    {
      label: "Onduleur recommande",
      value: `${result.inverterWatts} W`
    },
    {
      label: "Regulateur recommande",
      value: `${result.controllerAmps} A`
    }
  ]

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
        <h3 className="text-lg font-semibold text-brand-800">
          Recommandation automatique
        </h3>
        <p className="mt-2 text-sm text-brand-700">
          Ces valeurs proviennent maintenant directement de l API de calcul.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label + item.value}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-1 text-xl font-semibold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          Protections recommandees
        </h3>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <div className="flex items-center justify-between">
            <span>Protection eclairage</span>
            <span>{result.lightingBreaker}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Protection prises</span>
            <span>{result.socketBreaker}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Protection AC</span>
            <span>{result.acProtection}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Protection DC</span>
            <span>{result.dcProtection}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Protection onduleur</span>
            <span>{result.inverterProtection}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
