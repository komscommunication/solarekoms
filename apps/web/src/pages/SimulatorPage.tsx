import { ApplianceForm } from "../components/simulation/ApplianceForm";
import { SimulationSummary } from "../components/simulation/SimulationSummary";

export function SimulatorPage() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold">Simulateur energetique</h1>
        <ApplianceForm />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Resultat estime</h2>
        <SimulationSummary />
      </div>
    </section>
  );
}
