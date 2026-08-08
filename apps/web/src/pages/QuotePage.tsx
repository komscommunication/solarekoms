import { mockQuoteItems, mockQuoteSummary } from "../data/mockQuote";

function formatPrice(value: number, currency: string) {
  return `${value.toLocaleString("fr-FR")} ${currency}`;
}

export function QuotePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Devis recommande
        </h1>
        <p className="max-w-3xl text-slate-600">
          Ce devis d'exemple regroupe les principaux materiels recommandes pour une installation solaire autonome correspondant au besoin estime.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-5 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
          <div className="col-span-2">Produit</div>
          <div>Categorie</div>
          <div>Quantite</div>
          <div>Total</div>
        </div>

        <div className="divide-y divide-slate-200">
          {mockQuoteItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 gap-4 px-6 py-4 text-sm text-slate-700"
            >
              <div className="col-span-2">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-slate-500">
                  Prix unitaire : {formatPrice(item.unitPrice, mockQuoteSummary.currency)}
                </p>
              </div>
              <div>{item.category}</div>
              <div>{item.quantity}</div>
              <div className="font-semibold text-slate-900">
                {formatPrice(item.total, mockQuoteSummary.currency)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Hypotheses du devis
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>- Le dimensionnement est base sur une autonomie theorique de 2 jours.</li>
            <li>- Les prix sont des exemples et devront etre relies plus tard a un vrai catalogue produit.</li>
            <li>- Les couts d'installation et de transport sont affiches a titre indicatif.</li>
            <li>- Cette page servira ensuite de base au devis dynamique connecte a l'API.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Resume financier
          </h2>

          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>Sous-total materiel</span>
              <span>{formatPrice(mockQuoteSummary.subtotal, mockQuoteSummary.currency)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Installation</span>
              <span>{formatPrice(mockQuoteSummary.installation, mockQuoteSummary.currency)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Transport</span>
              <span>{formatPrice(mockQuoteSummary.transport, mockQuoteSummary.currency)}</span>
            </div>

            <div className="border-t border-slate-200 pt-3">
              <div className="flex items-center justify-between text-base font-bold text-slate-900">
                <span>Total estime</span>
                <span>{formatPrice(mockQuoteSummary.total, mockQuoteSummary.currency)}</span>
              </div>
            </div>
          </div>

          <button className="mt-6 w-full rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700">
            Demander ce devis
          </button>
        </div>
      </div>
    </section>
  );
}
