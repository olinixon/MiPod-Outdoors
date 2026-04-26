import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/shared/PageHero"
import { TextImageBlock } from "@/components/shared/TextImageBlock"
import { Button } from "@/components/ui/Button"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Our Story",
  description:
    "Mi-Pod started with a simple frustration: most rooftop tents are too much hassle for the actual time they save. Here's how we fixed it.",
  path: "/about",
})

const STORY_SECTIONS = [
  {
    headline: "The problem.",
    body: "We grew up in NZ. Camping was non-negotiable. But somewhere between adulthood and now, the gear got heavier, the setup got longer, and the weekend window kept shrinking. Most weekends, the tent stayed in the garage.",
    imageSrc: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=85",
    imageAlt: "A 4WD vehicle parked at a campsite in the New Zealand mountains",
    imageComment: "About page: NZ camping scene. To be replaced post-Nelson shoot.",
    reversed: false,
  },
  {
    headline: "The fix.",
    body: "We wanted something that took the friction out of the equation entirely. Pull up, hit the latch, the tent does the rest. No poles, no fumbling, no fighting with the wind. Hydraulic auto-lift was the answer.",
    imageSrc: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&q=85",
    imageAlt: "A rooftop tent being deployed from a vehicle at sunset",
    imageComment: "About page: tent deployment moment. To be replaced post-Nelson shoot.",
    reversed: true,
  },
  {
    headline: "The standard.",
    body: "We didn't want to make another rebadged import. The Mi-Pod is built to a standard, not a price. 420D Oxford fabric, aluminium frame, 3-year warranty. Every unit is checked in NZ before it ships. If it doesn't survive a season with us, it doesn't survive a season with you.",
    imageSrc: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1200&q=85",
    imageAlt: "Detail of rooftop tent construction and materials",
    imageComment: "About page: product detail shot. To be replaced post-Nelson shoot.",
    reversed: false,
  },
  {
    headline: "The mission.",
    body: "Mi-Pod is for everyone who wants to camp more and faff less. The country's full of back roads, river crossings, and lookouts that 90% of New Zealanders never see — because the gear gets in the way. We're trying to fix that.",
    imageSrc: "https://images.unsplash.com/photo-1516569423027-8a77ec5e04d8?w=1200&q=85",
    imageAlt: "Campfire at dusk with a tent pitched in the background, New Zealand landscape",
    imageComment: "About page: campfire and landscape. To be replaced post-Nelson shoot.",
    reversed: true,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        headline="A tent for people who'd rather be driving."
        subhead="Mi-Pod started with a simple frustration: most rooftop tents are too much hassle for the actual time they save."
      />

      <section className="bg-white">
        <Container>
          {STORY_SECTIONS.map((section) => (
            <TextImageBlock key={section.headline} {...section} />
          ))}
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-cream">
        <Container>
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
              — Ready to go
            </p>
            <h2 className="font-display font-bold text-charcoal text-[48px] leading-[0.95] tracking-tight mb-8">
              See the Mi-Pod.
            </h2>
            <Button href="/the-mi-pod">
              Shop the Mi-Pod{" "}
              <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
