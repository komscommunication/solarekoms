import { mockSimulation } from "../../data/mockSimulation";

const items = [
  {
    label: "Consommation journaliere",
    value: ${mockSimulation.dailyConsumptionWh} Wh
  },
  {
    label: "Consommation journaliere",
    value: ${mockSimulation.dailyConsumptionKwh} kWh
  },
  {
    label: "Puissance simultanee",
    value: ${mockSimulation.peakPowerW} W
  },
  {
    label: "Batterie recommandee",
    value: ${mockSimulation.batteryCapacityAh} Ah
  },
  {
    label: "Puissance solaire recommandee",
    value: ${mockSimulation.recommendedSolarWatts} Wc
  },
  {
    label: "Onduleur recommande",
    value: ${mockSimulation.inverterWatts} W
  },
  {
    label: "Regulateur recommande",
    value: ${mockSimulation.controllerAmps} A
  }
];

export function SimulationSummary() {
  return (
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
  );
}
