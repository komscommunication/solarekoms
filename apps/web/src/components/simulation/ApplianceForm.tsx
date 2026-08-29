import { useState } from "react";
import { useForm } from "react-hook-form";
import { calculateSimulation } from "../../lib/api";
import type { SimulationResult } from "../../types/simulation";

type FormValues = {
  projectName: string
  region: string
  installationType: string
  roofType: string
  autonomyDays: number

  systemVoltage: number
  outputVoltage: number
  currency: string

  lightPoints: number
  wattsPerLightPoint: number

  socketPoints: number
  socketCircuitType: string
  averageSocketWatts: number

  specializedSocketPoints: number
  specializedSocketWatts: number

  dedicatedLoadLabel: string
  dedicatedLoadWatts: number
  dedicatedLoadHours: number

  otherSpecificLoads: string
}

type ApplianceFormProps = {
  onResult: (result: SimulationResult) => void
}

export function ApplianceForm({ onResult }: ApplianceFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      projectName: "Maison principale",
      region: "France",
      installationType: "site-isole",
      roofType: "toiture",
      autonomyDays: 2,

      systemVoltage: 48,
      outputVoltage: 230,
      currency: "EUR",

      lightPoints: 12,
      wattsPerLightPoint: 12,

      socketPoints: 8,
      socketCircuitType: "AC",
      averageSocketWatts: 150,

      specializedSocketPoints: 2,
      specializedSocketWatts: 2000,

      dedicatedLoadLabel: "Refrigerateur",
      dedicatedLoadWatts: 180,
      dedicatedLoadHours: 10,

      otherSpecificLoads: "Machine a laver, television, box internet"
    }
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true)
      setError("")
      const result = await calculateSimulation(values)
      onResult(result)
    } catch (e) {
      setError("Impossible de contacter l API de calcul")
    } finally {
      setLoading(false)
    }
  }

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
          Region
        </label>
        <input
          {...register("region")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Type installation
        </label>
        <select
          {...register("installationType")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="site-isole">site-isole</option>
          <option value="maison">maison</option>
          <option value="commerce">commerce</option>
          <option value="bureau">bureau</option>
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
          <option value="toiture">toiture</option>
          <option value="sol">sol</option>
          <option value="mixte">mixte</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Jours d autonomie
        </label>
        <input
          type="number"
          {...register("autonomyDays", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <hr className="border-slate-200" />

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Tension systeme batterie
        </label>
        <select
          {...register("systemVoltage", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="12">12V</option>
          <option value="24">24V</option>
          <option value="48">48V</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Tension de sortie utilisateur
        </label>
        <select
          {...register("outputVoltage", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="230">230V</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Devise du devis
        </label>
        <select
          {...register("currency")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <hr className="border-slate-200" />

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Nombre de points lumineux
        </label>
        <input
          type="number"
          {...register("lightPoints", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Puissance par point lumineux en W
        </label>
        <input
          type="number"
          {...register("wattsPerLightPoint", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <hr className="border-slate-200" />

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Nombre de prises standards
        </label>
        <input
          type="number"
          {...register("socketPoints", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Type de circuit prises standards
        </label>
        <select
          {...register("socketCircuitType")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        >
          <option value="AC">AC</option>
          <option value="C">C</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Puissance moyenne estimee par prise standard en W
        </label>
        <input
          type="number"
          {...register("averageSocketWatts", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <hr className="border-slate-200" />

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Nombre de prises specialisees
        </label>
        <input
          type="number"
          {...register("specializedSocketPoints", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Puissance estimee des prises specialisees en W
        </label>
        <input
          type="number"
          {...register("specializedSocketWatts", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <hr className="border-slate-200" />

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Element specifique principal
        </label>
        <input
          {...register("dedicatedLoadLabel")}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Puissance de cet element specifique en W
        </label>
        <input
          type="number"
          {...register("dedicatedLoadWatts", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Heures de fonctionnement de cet element specifique
        </label>
        <input
          type="number"
          {...register("dedicatedLoadHours", { valueAsNumber: true })}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">
          Autres elements specifiques a preciser
        </label>
        <textarea
          {...register("otherSpecificLoads")}
          rows={4}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
        />
      </div>

      {error ? (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-brand-600 px-5 py-3 font-medium text-white hover:bg-brand-700 disabled:opacity-60"
      >
        {loading ? "Calcul en cours..." : "Calculer le besoin solaire"}
      </button>
    </form>
  )
}
