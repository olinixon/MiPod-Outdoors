import { Container } from "@/components/ui/Container"

export function Overview() {
  return (
    <section id="overview" className="py-16 md:py-24 bg-white scroll-mt-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-8">
            A tent that does the work for you.
          </h2>
          <div className="space-y-6 text-charcoal-600 font-sans leading-relaxed text-[17px]">
            <p>
              Most rooftop tents are a wrestling match. Poles, springs, awnings flapping in the
              wind, the whole campsite watching while you figure it out. The Mi-Pod is different.
              Hit the latches and the hydraulic mechanism lifts the tent for you. From folded to
              ready-to-sleep in under 90 seconds.
            </p>
            <p>
              Inside, a 7cm high-density mattress with a washable cover. Mesh windows on every
              side for cross-flow on hot nights. A skylight overhead for stargazing. LED strip
              lighting on a soft warm tone, controlled from inside the tent.
            </p>
            <p>
              Outside, a 420D Oxford fabric shell with PU coating, rated to 3000mm waterproof. UV
              resistant. Wind tested. Aluminium alloy frame that&apos;s lightweight enough for the
              smallest roof rack and tough enough to take what New Zealand throws at it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
