import { catalogProducts } from "../data/catalog";

function formatPrice(eur: number, usd: number) {
  return `EUR ${eur} / USD ${usd}`;
}

export function CatalogPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Catalogue des materiels recommandes
        </h1>
        <p className="max-w-3xl text-slate-600">
          Ce catalogue sert de base commune au simulateur et au devis.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {catalogProducts.map((product) => (
          <article
            key={product.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-brand-700">{product.category}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">
              {product.name}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{product.description}</p>
            <p className="mt-2 text-sm text-slate-500">
              Specification : {product.spec}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Fournisseur : {product.supplier}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              {formatPrice(product.priceEUR, product.priceUSD)}
            </p>
            <a
              href={product.supplierUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Voir la source produit
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
