import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Page introuvable</h1>
      <p className="text-slate-600">
        La page demandee n'existe pas.
      </p>
      <Link to="/" className="text-brand-700 underline">
        Retour a l'accueil
      </Link>
    </section>
  );
}
