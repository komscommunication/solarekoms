import { Link } from "react-router-dom";
import { mockSimulation } from "../../data/mockSimulation";

const items = [
  {
    label: "Consommation journaliere",
    value: `${mockSimulation.dailyConsumptionWh} Wh`
  },
  {
    label: "Consommation journaliere",
    value: `${mockSimulation.dailyConsumptionKwh} kWh`
  },
  {
    label: "Puissance simultanee",
    value: `${mockSimulation.peakPowerW} W`
  },
  {
    label: "Batterie recommandee",
    value: `${mockSimulation.batteryCapacityAh} Ah`
  },
  {
    label: "Puissance solaire recommandee",
    value: `${mockSimulation.recommendedSolarWatts} Wc`
  },
  {
    label: "Onduleur recommande",
    value: `${mockSimulation.inverterWatts} W`
  },
  {
    label: "Regulateur recommande",
    value: `${mockSimulation.controllerAmps} A`
  }
];

export function SimulationSummary() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4">
        <h3 className="text-lg font-semibold text-brand-800">
          Recommandation automatique
        </h3>
        <p className="mt-2 text-sm text-brand-700">
          Cette estimation fournit un premier dimensionnement pour une installation solaire autonome basee sur vos besoins declares.
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
          Interpretation du resultat
        </h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>- Le besoin journalier estime sert de base au calcul des batteries et panneaux.</li>
          <li>- La puissance simultanee aide a choisir l'onduleur adapte.</li>
          <li>- Le devis recommande peut ensuite etre ajuste selon le budget et la disponibilite des produits.</li>
        </ul>

        <Link
          to="/devis"
          className="mt-4 inline-flex rounded-xl bg-brand-600 px-4 py-3 text-sm font-medium text-white hover:bg-brand-700"
        >
          Voir le devis recommande
        </Link>
      </div>
    </div>
  );
}
