import { useMemo } from "react";
import { buildQuote } from "../lib/quote";
import type { SimulationResult } from "../types/simulation";

function formatPrice(value: number, currency: string) {
  return `${value.toLocaleString("fr-FR")} ${currency}`
}

export function QuotePage() {
  const simulation = useMemo(() => {
    const raw = localStorage.getItem("latestSimulation")
    if (!raw) return null
    return JSON.parse(raw) as SimulationResult
  }, [])

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
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700">
          <div>Materiel</div>
          <div>Quantite</div>
          <div>Prix unitaire</div>
          <div>Total</div>
        </div>

        <div className="divide-y divide-slate-200">
          {quote.items.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-4 gap-4 px-6 py-4 text-sm text-slate-700"
            >
              <div className="font-medium text-slate-900">{item.label}</div>
              <div>{item.quantity}</div>
              <div>{formatPrice(item.unitPrice, quote.currency)}</div>
              <div className="font-semibold text-slate-900">
                {formatPrice(item.total, quote.currency)}
              </div>
            </div>
          ))}
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
