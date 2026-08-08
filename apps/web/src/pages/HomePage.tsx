import { Link } from "react-router-dom";

const features = [
  {
    title: "Calcul de consommation",
    description: "Estimez vos besoins journaliers en Wh et kWh a partir de vos appareils."
  },
  {
    title: "Dimensionnement solaire",
    description: "Obtenez une recommandation de panneaux, batteries, regulateur et onduleur."
  },
  {
    title: "Devis intelligent",
    description: "Preparez un devis technique et commercial base sur votre besoin energetique."
  }
];

export function HomePage() {
  return (
    <section className="space-y-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700">
            SolarCops by Koms Energie
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Concevez votre autonomie energetique avec precision.
          </h1>

          <p className="text-lg text-slate-600">
            SolarCops vous aide a calculer votre consommation, dimensionner votre installation solaire autonome et preparer un devis de materiels recommandes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/simulateur"
              className="rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700"
            >
              Demarrer le simulateur
            </Link>

            <Link
              to="/devis"
              className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100"
            >
              Voir un devis type
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Ce que le site doit fournir
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li>- Analyse des appareils et temps d'utilisation</li>
              <li>- Calcul de la demande energetique journaliere</li>
              <li>- Recommandation du systeme solaire autonome</li>
              <li>- Proposition de materiels et devis</li>
              <li>- Preparation a l'achat et a la mise en production</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-3 text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
