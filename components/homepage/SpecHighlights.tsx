import { Zap, Moon, Timer, Droplets, Grid2x2, Layers } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { SPEC_FEATURES } from "@/lib/content"

const ICON_MAP = { Zap, Moon, Timer, Droplets, Grid2x2, Layers }

export function SpecHighlights() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-900">
      <Container>
        <SectionHeading
          eyebrow="What's inside"
          headline="Built to a standard, not a price."
          light
          className="max-w-xl"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-md overflow-hidden">
          {SPEC_FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={feature.id}
                className="bg-charcoal-900 p-8 flex items-start gap-5 hover:bg-charcoal-700 transition-colors"
              >
                {Icon && (
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-orange/10 flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.5} className="text-orange" />
                  </div>
                )}
                <p className="text-white/90 font-sans text-[15px] leading-snug pt-1">
                  {feature.label}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
