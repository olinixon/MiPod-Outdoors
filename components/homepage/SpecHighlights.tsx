import { Zap, Moon, Timer, Droplets, Grid2x2, Layers, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SPEC_FEATURES } from "@/lib/content"

const ICON_MAP = { Zap, Moon, Timer, Droplets, Grid2x2, Layers }

export function SpecHighlights() {
  return (
    <section id="whats-inside" className="py-24 md:py-32 bg-charcoal-900 scroll-mt-20">
      <Container>

        {/* Header: eyebrow, headline, sub-headline stacked */}
        <div className="mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
            — What&apos;s inside
          </p>
          <h2 className="font-display font-bold text-white leading-[0.95] tracking-tight text-[40px] md:text-[56px] lg:text-[64px] whitespace-nowrap mb-6">
            Built to a standard,{" "}
            <span className="block md:inline">not a price.</span>
          </h2>
          <p className="text-white/70 font-sans text-[17px] leading-relaxed max-w-[720px]">
            Six things that make a tent feel like a small house on your roof. The boring details
            that decide whether a sleepless 3am storm becomes a story or a refund.
          </p>
        </div>

        {/* 6-tile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-md overflow-hidden">
          {SPEC_FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={feature.id}
                className="bg-charcoal-900 p-8 flex flex-col gap-4 hover:bg-charcoal-700 transition-colors"
              >
                {/* Number */}
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-orange font-sans">
                  {feature.num}
                </p>

                {/* Icon — floating, no box */}
                {Icon && (
                  <Icon size={22} strokeWidth={1.5} className="text-orange" />
                )}

                {/* Title */}
                <h3 className="font-display font-bold text-white text-2xl leading-tight tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/40 font-sans text-sm">
            Every spec — independently tested in the New Zealand back-country.
          </p>
          <a
            href="/the-mi-pod#specs"
            className="inline-flex items-center gap-1.5 text-orange font-medium font-sans text-sm hover:text-orange-400 transition-colors group"
          >
            Full specifications
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}
