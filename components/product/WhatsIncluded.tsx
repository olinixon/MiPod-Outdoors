import { Tent, Ruler, BedDouble, Lightbulb, Package } from "lucide-react"
import { Container } from "@/components/ui/Container"
import type { LucideIcon } from "lucide-react"

interface BoxItem {
  num: string
  title: string
  Icon: LucideIcon
}

const ITEMS: BoxItem[] = [
  { num: "01", title: "The Mi-Pod tent", Icon: Tent },
  { num: "02", title: "2.7m ladder", Icon: Ruler },
  { num: "03", title: "70mm mattress", Icon: BedDouble },
  { num: "04", title: "LED light strips", Icon: Lightbulb },
  { num: "05", title: "Installation bags", Icon: Package },
]

export function WhatsIncluded() {
  return (
    <section id="included" className="py-16 md:py-24 bg-white scroll-mt-24">
      <Container>

        {/* Header: headline left, sub-line right */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-end mb-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
              — What&apos;s in the box
            </p>
            <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[40px] md:text-[56px] lg:text-[64px]">
              Everything you need.
            </h2>
          </div>
          <p className="text-charcoal/70 font-sans text-[15px] leading-relaxed md:pb-1">
            Add-ons sold separately: annexe room, awning, anti-condensation mat, ladder extension.
          </p>
        </div>

        {/* 5-tile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ITEMS.map(({ num, title, Icon }) => (
            <div
              key={num}
              className="border border-charcoal/10 rounded-md p-8 bg-white flex flex-col gap-4"
            >
              {/* PLACEHOLDER: Tile icon — replace with actual product photo when available */}
              <Icon size={24} strokeWidth={1.5} className="text-orange" />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/40 font-sans">
                {num}
              </p>
              <h3 className="font-display font-bold text-charcoal text-xl leading-tight">
                {title}
              </h3>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
