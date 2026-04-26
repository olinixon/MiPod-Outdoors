"use client"

import { useState, type FormEvent } from "react"
import { Container } from "@/components/ui/Container"

export function Compatibility() {
  const [form, setForm] = useState({ make: "", model: "", year: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log("[Vehicle compatibility check]", form)
    setSubmitted(true)
  }

  return (
    <section id="compatibility" className="py-16 md:py-24 bg-white scroll-mt-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-4">
            Fits any vehicle with a roof rack.
          </h2>
          <p className="text-charcoal-600 font-sans leading-relaxed mb-10">
            The Mi-Pod mounts to any standard crossbar roof rack rated for at least 75kg dynamic
            load. We&apos;ve tested it on Hilux, Ranger, Triton, Patrol, Land Cruiser, and most
            popular SUVs. If you&apos;re not sure your rack will work, use the checker below.
          </p>

          {submitted ? (
            <div className="rounded-md bg-orange/10 border border-orange/20 px-6 py-5">
              <p className="text-charcoal font-sans font-medium">
                Thanks — we&apos;ll get back to you within 24 hours to confirm compatibility.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(["make", "model", "year"] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={`compat-${field}`}
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-charcoal mb-2 font-sans"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={`compat-${field}`}
                    type="text"
                    value={form[field]}
                    onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                    placeholder={field === "year" ? "2022" : field === "make" ? "Toyota" : "Hilux"}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-charcoal placeholder:text-charcoal-600/40 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
                  />
                </div>
              ))}
              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="bg-charcoal text-white px-8 py-3.5 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-charcoal-700 transition-colors font-sans"
                >
                  Check compatibility
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
