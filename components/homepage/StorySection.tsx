import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { STORY_BODY } from "@/lib/content"

export function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: video / image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-charcoal-700">
              {/* LIFESTYLE PLACEHOLDER: Story section media — tent deployed at camp, late evening light, intimate moment. To be replaced with Mi-Pod hero loop video post-Nelson shoot. */}
              <Image
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1200&q=85"
                alt="A rooftop tent deployed on a 4WD, campfire glow, South Island New Zealand"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Established badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange text-white rounded-md p-6 w-32 text-center">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] font-sans opacity-80">
                Established
              </p>
              <p className="font-display font-bold text-4xl leading-none mt-1">2025</p>
              <p className="text-[9px] font-medium uppercase tracking-[0.15em] font-sans mt-1 opacity-80">
                Aotearoa, NZ
              </p>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:pl-8">
            <Eyebrow dash className="mb-5">Our story</Eyebrow>
            <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[48px] md:text-[64px]">
              Built for the long way home.
            </h2>
            <div className="mt-8 space-y-5">
              {STORY_BODY.map((para, i) => (
                <p key={i} className="text-charcoal-600 font-sans leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-orange font-medium font-sans hover:text-orange-600 transition-colors group"
            >
              Read our story
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
