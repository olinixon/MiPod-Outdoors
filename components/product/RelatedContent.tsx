import { Container } from "@/components/ui/Container"
import { ArrowRight } from "lucide-react"

export function RelatedContent() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          {/* Film placeholder */}
          <div className="group rounded-md bg-charcoal-900 p-8 aspect-[4/3] flex flex-col justify-end cursor-not-allowed">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-orange/80 font-sans mb-3">
              Coming soon
            </p>
            <h3 className="font-display font-bold text-white text-2xl leading-tight">
              Watch the launch film
            </h3>
            <p className="mt-2 text-sm text-white/60 font-sans">
              Shot on location across the South Island.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-white/40 text-sm font-sans">
              <span>Watch</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Journal placeholder */}
          <div className="group rounded-md bg-cream p-8 aspect-[4/3] flex flex-col justify-end cursor-not-allowed">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-orange/80 font-sans mb-3">
              Coming soon
            </p>
            <h3 className="font-display font-bold text-charcoal text-2xl leading-tight">
              Read the field journal
            </h3>
            <p className="mt-2 text-sm text-charcoal-600 font-sans">
              Routes, builds, and the people going further.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-charcoal-600/60 text-sm font-sans">
              <span>Read</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
