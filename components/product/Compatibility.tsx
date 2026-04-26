"use client"

import { useState, type FormEvent } from "react"
import { Car, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import vehiclesData from "@/lib/data/vehicles.json"

type VehicleStatus = "direct-fit" | "recommended" | "not-tested"

interface Vehicle {
  make: string
  model: string
  yearStart: number
  yearEnd: number
  status: VehicleStatus
  notes: string
}

const vehicles = vehiclesData.vehicles as Vehicle[]

function filterVehicles(make: string, model: string, year: string): Vehicle[] {
  const yearNum = year.trim() ? parseInt(year.trim(), 10) : null
  return vehicles.filter((v) => {
    const makeMatch = !make.trim() || v.make.toLowerCase().includes(make.trim().toLowerCase())
    const modelMatch = !model.trim() || v.model.toLowerCase().includes(model.trim().toLowerCase())
    const yearMatch = yearNum === null || (yearNum >= v.yearStart && yearNum <= v.yearEnd)
    return makeMatch && modelMatch && yearMatch
  })
}

export function Compatibility() {
  const [form, setForm] = useState({ make: "", model: "", year: "" })
  const [results, setResults] = useState<Vehicle[] | null>(null)
  const [searched, setSearched] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setResults(filterVehicles(form.make, form.model, form.year))
    setSearched(true)
  }

  return (
    <section id="compatibility" className="py-16 md:py-24 bg-cream scroll-mt-24">
      <Container>

        {/* Header: headline left, sub-line right */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end mb-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
              — Compatibility
            </p>
            <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[40px] md:text-[56px] lg:text-[64px]">
              Will it fit your vehicle?
            </h2>
          </div>
          <p className="text-charcoal/70 font-sans text-[17px] leading-relaxed md:pb-1">
            If your vehicle has a roof rack rated to 75kg dynamic load, the answer is almost always
            yes. Search below for your specific vehicle.
          </p>
        </div>

        {/* Checker form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1">
            <label
              htmlFor="compat-make"
              className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal mb-2 font-sans"
            >
              Make
            </label>
            <input
              id="compat-make"
              type="text"
              value={form.make}
              onChange={(e) => setForm((f) => ({ ...f, make: e.target.value }))}
              placeholder="Toyota"
              className="w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/30 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="compat-model"
              className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal mb-2 font-sans"
            >
              Model
            </label>
            <input
              id="compat-model"
              type="text"
              value={form.model}
              onChange={(e) => setForm((f) => ({ ...f, model: e.target.value }))}
              placeholder="Hilux"
              className="w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/30 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="compat-year"
              className="block text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal mb-2 font-sans"
            >
              Year
            </label>
            <input
              id="compat-year"
              type="text"
              value={form.year}
              onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))}
              placeholder="2022"
              className="w-full rounded-md border border-charcoal/20 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/30 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
            />
          </div>
          <div className="flex items-end">
            <Button type="submit">Check Fit</Button>
          </div>
        </form>

        {/* Results */}
        {searched && results !== null && (
          <div className="mb-8">
            {results.length > 0 ? (
              <div className="border border-charcoal/10 rounded-md overflow-hidden divide-y divide-charcoal/10">
                {results.map((v, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 bg-white">
                    <Car size={20} strokeWidth={1.5} className="text-charcoal/40 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-bold text-charcoal text-lg leading-tight">
                        {v.make} {v.model}
                      </p>
                      <p className="text-charcoal/60 font-sans text-sm mt-0.5">
                        {v.yearStart}–{v.yearEnd} · {v.notes}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "flex-shrink-0 text-[10px] font-medium uppercase tracking-[0.15em] font-sans px-3 py-1.5 rounded-sm",
                        v.status === "direct-fit"
                          ? "bg-charcoal text-white"
                          : "bg-orange text-white"
                      )}
                    >
                      {v.status === "direct-fit" ? "Direct Fit" : "Recommended"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-charcoal/10 bg-white px-6 py-8">
                <p className="text-charcoal font-sans mb-3">
                  Not in our database yet. Most vehicles with a 75kg-rated roof rack will fit —
                  drop us a line and we&apos;ll confirm for yours.
                </p>
                <a
                  href="/support"
                  className="text-orange font-medium font-sans text-sm hover:underline"
                >
                  Contact us
                </a>
              </div>
            )}

            <p className="mt-4">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-orange font-medium font-sans text-sm hover:underline"
              >
                View all 60+ tested vehicles
                <ArrowRight size={13} />
              </a>
            </p>
          </div>
        )}

      </Container>
    </section>
  )
}
