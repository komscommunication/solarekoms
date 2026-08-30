export type CatalogProduct = {
  id: string
  name: string
  category: string
  unit: string
  priceEUR: number
  priceUSD: number
  description: string
  spec?: string
  supplier: string
  supplierUrl: string
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: "panel-550w",
    name: "Panneau solaire 550W",
    category: "Panneaux",
    unit: "piece",
    priceEUR: 170,
    priceUSD: 180,
    description: "Panneau solaire monocristallin haute puissance",
    spec: "550W",
    supplier: "Amazon",
    supplierUrl: "https://www.amazon.com/clp/B0DDKHY12N"
  },
  {
    id: "battery-200ah",
    name: "Batterie 200Ah",
    category: "Batteries",
    unit: "piece",
    priceEUR: 850,
    priceUSD: 900,
    description: "Batterie de stockage pour systeme solaire",
    spec: "200Ah",
    supplier: "Amazon",
    supplierUrl: "https://www.amazon.fr/batterie-12v-200ah/s?k=batterie+12v+200ah"
  },
  {
    id: "inverter-230v",
    name: "Onduleur 230V",
    category: "Onduleurs",
    unit: "piece",
    priceEUR: 650,
    priceUSD: 700,
    description: "Onduleur sortie 230V pour usages domestiques",
    spec: "230V",
    supplier: "Renogy",
    supplierUrl: "https://fr.renogy.com/"
  },
  {
    id: "controller-mppt",
    name: "Regulateur MPPT",
    category: "Regulateurs",
    unit: "piece",
    priceEUR: 230,
    priceUSD: 250,
    description: "Regulateur de charge solaire MPPT",
    spec: "MPPT",
    supplier: "Renogy",
    supplierUrl: "https://fr.renogy.com/"
  },
  {
    id: "protection-board",
    name: "Protections et tableau",
    category: "Protections",
    unit: "kit",
    priceEUR: 280,
    priceUSD: 300,
    description: "Protections AC DC et tableau associe",
    spec: "kit",
    supplier: "Alma Solar Shop",
    supplierUrl: "https://www.alma-solarshop.fr/2-accueil?order=product.sales.desc&resultsPerPage=36&shop_view=grid"
  }
]
