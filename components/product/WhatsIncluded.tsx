import { CheckCircle } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { INCLUDED_ITEMS } from "@/lib/content"

export function WhatsIncluded() {
  return (
    <section id="included" className="py-16 md:py-24 bg-cream scroll-mt-24">
      <Container>
        <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-10">
          What&apos;s included
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {INCLUDED_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle size={18} strokeWidth={1.5} className="text-orange flex-shrink-0 mt-0.5" />
              <span className="text-charcoal font-sans">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
