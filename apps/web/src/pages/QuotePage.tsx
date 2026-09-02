import { useMemo } from "react";
import { buildQuote } from "../lib/quote";
import { catalogProducts } from "../data/catalog";
import { loadLatestSimulation } from "../lib/simulationStorage";

function formatPrice(value: number, currency: string) {
  return `${value.toLocaleString("fr-FR")} ${currency}`
}

function getSupplierInfo(label: string) {
  const product = catalogProducts.find((item) => item.name === label)
  return product
    ? { supplier: product.supplier, supplierUrl: product.supplierUrl }
    : null
}

const PDF_URL = "https://files.use.ai/files/chat%2Ffiles%2F679f3840070d47015fbe93145aa280a486748f94fe26f0b82ab54562496f2458%2Fdevis-solarcops.pdf?v=1788352140426";

export function QuotePage() {
  const simulation = useMemo(() => loadLatestSimulation(), [])

  if (!simulation) {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">
          Devis recommande
        </h1>
        <p className="text-slate-600">
          Aucun calcul recent n est disponible. Lance d abord une simulation.
        </p>
      </section>
    )
  }

  const quote = buildQuote(simulation)

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Devis recommande
        </h1>
        <p className="max-w-3xl text-slate-600">
          Ce devis est genere a partir de la derniere simulation effectuee.
        </p>
        <a
          href={PDF_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700"
        >
          Telecharger le devis PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-5 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
          <div>Materiel</div>
          <div>Quantite</div>
          <div>Prix unitaire</div>
          <div>Total</div>
          <div>Source</div>
        </div>

        <div className="divide-y divide-slate-200">
          {quote.items.map((item) => {
            const supplierInfo = getSupplierInfo(item.label)

            return (
              <div
                key={item.label}
                className="grid grid-cols-5 gap-4 px-6 py-4 text-sm text-slate-700"
              >
                <div className="font-medium text-slate-900">{item.label}</div>
                <div>{item.quantity}</div>
                <div>{formatPrice(item.unitPrice, quote.currency)}</div>
                <div className="font-semibold text-slate-900">
                  {formatPrice(item.total, quote.currency)}
                </div>
                <div>
                  {supplierInfo ? (
                    <a
                      href={supplierInfo.supplierUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-700 underline"
                    >
                      {supplierInfo.supplier}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Donnees techniques
          </h2>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div>Tension batterie : {simulation.systemVoltage} V</div>
            <div>Tension utilisateur : {simulation.outputVoltage} V</div>
            <div>Puissance onduleur : {simulation.inverterWatts} W</div>
            <div>Protection AC : {simulation.acProtection}</div>
            <div>Protection DC : {simulation.dcProtection}</div>
            <div>Protection onduleur : {simulation.inverterProtection}</div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Resume financier
          </h2>

          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>Sous total materiel</span>
              <span>{formatPrice(quote.subtotal, quote.currency)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Installation</span>
              <span>{formatPrice(quote.installation, quote.currency)}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Transport</span>
              <span>{formatPrice(quote.transport, quote.currency)}</span>
            </div>

            <div className="border-t border-slate-200 pt-3">
              <div className="flex items-center justify-between text-base font-bold text-slate-900">
                <span>Total estime</span>
                <span>{formatPrice(quote.total, quote.currency)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
