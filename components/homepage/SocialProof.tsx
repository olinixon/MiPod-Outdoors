import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TESTIMONIALS } from "@/lib/content"

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading
          eyebrow="What people say"
          headline="Trusted by people who know the back-country."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-cream rounded-md p-8 flex flex-col justify-between"
            >
              <blockquote>
                <p className="text-charcoal font-sans text-[17px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-charcoal-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-display font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-charcoal font-sans text-sm">{t.name}</p>
                  <p className="text-charcoal-600 font-sans text-xs">
                    {t.vehicle} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* TODO: Replace with real testimonials post-launch */}
      </Container>
    </section>
  )
}
