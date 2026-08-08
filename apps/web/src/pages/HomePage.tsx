import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
          SolarCops by Koms Energie
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Calculez votre consommation energetique et dimensionnez votre installation solaire autonome.
        </h1>

        <p className="text-lg text-slate-600">
          Cette application web vous aide a estimer votre besoin en panneaux, batteries, onduleur et regulateur, puis a generer un devis de materiel recommande.
        </p>

        <div className="flex gap-4">
          <Link
            to="/simulateur"
            className="rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700"
          >
            Lancer le simulateur
          </Link>

          <Link
            to="/devis"
            className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100"
          >
            Voir un devis exemple
          </Link>
        </div>
      </div>
    </section>
  );
}
