"use client"

import { Download } from "lucide-react"
import { Container } from "@/components/ui/Container"
import type { ProductSpec } from "@/lib/products"

interface SpecsTableProps {
  specs: ProductSpec[]
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <section id="specs" className="py-16 md:py-24 bg-cream scroll-mt-24">
      <Container>
        <div className="grid md:grid-cols-[40%_1fr] gap-12 md:gap-16">

          {/* Left column */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
              — Specifications
            </p>
            <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[40px] md:text-[56px] mb-6">
              The numbers.
            </h2>
            <p className="text-charcoal/70 font-sans text-[15px] leading-relaxed mb-8">
              Independently tested by the wilderness of New Zealand. Full sheet available below.
            </p>
            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 border border-orange text-orange px-6 py-3 rounded-md font-medium text-sm font-sans hover:bg-orange/5 transition-colors"
              >
                <Download size={15} strokeWidth={1.5} />
                Download spec PDF
              </button>
              <p className="mt-2 text-xs text-charcoal/40 font-sans">(coming soon)</p>
            </div>
          </div>

          {/* Right column — spec table */}
          <div className="border-t border-charcoal/10">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="grid grid-cols-[40%_1fr] gap-4 py-4 border-b border-charcoal/10"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal font-sans pt-0.5">
                  {spec.label}
                </span>
                <span className="text-[15px] text-charcoal font-sans leading-snug">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
