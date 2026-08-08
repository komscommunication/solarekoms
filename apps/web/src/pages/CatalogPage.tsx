const products = [
  {
    name: "Panneau solaire 550W",
    category: "Panneaux",
    description: "Panneau haute performance pour installations residentielles et sites isoles."
  },
  {
    name: "Batterie lithium 48V 200Ah",
    category: "Batteries",
    description: "Solution de stockage energie pour autonomie renforcee."
  },
  {
    name: "Onduleur hybride 3000W",
    category: "Onduleurs",
    description: "Convertit l'energie continue en courant alternatif pour vos usages domestiques."
  },
  {
    name: "Regulateur MPPT 80A",
    category: "Regulateurs",
    description: "Optimise la charge batterie et le rendement du champ solaire."
  }
];

export function CatalogPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">
          Catalogue des materiels recommandes
        </h1>
        <p className="max-w-3xl text-slate-600">
          Cette page presente une premiere base de produits que l'application pourra recommander apres calcul.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-brand-700">{product.category}</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h2>
            <p className="mt-3 text-sm text-slate-600">{product.description}</p>
            <button className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Voir le produit
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
