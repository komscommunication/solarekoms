import { useForm } from "react-hook-form";

type FormValues = {
  projectName: string;
  region: string;
  autonomyDays: number;
  systemVoltage: string;
  roofType: string;
  installationType: string;
};

export function ApplianceForm() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      projectName: "Maison principale",
      region: "France",
      autonomyDays: 2,
      systemVoltage: "48",
      roofType: "toiture",
      installationType: "site-isole"
    }
  });

  const onSubmit = (values: FormValues) => {
    console.log("Simulation values", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Nom du projet
        </label>
        <input
          {...register("projectName")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Region / pays
        </label>
        <input
          {...register("region")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Type d'installation
        </label>
        <select
          {...register("installationType")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="site-isole">Site isole</option>
          <option value="maison">Maison</option>
          <option value="commerce">Commerce</option>
          <option value="bureau">Bureau</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Type de pose
        </label>
        <select
          {...register("roofType")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="toiture">Toiture</option>
          <option value="sol">Au sol</option>
          <option value="mixte">Mixte</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Jours d'autonomie
        </label>
        <input
          type="number"
          {...register("autonomyDays", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Tension systeme
        </label>
        <select
          {...register("systemVoltage")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="12">12V</option>
          <option value="24">24V</option>
          <option value="48">48V</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700"
      >
        Calculer le besoin solaire
      </button>
    </form>
  );
}
