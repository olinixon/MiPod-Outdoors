import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/shared/PageHero"
import { ContactForm } from "@/components/shared/ContactForm"
import { FAQs } from "@/components/product/FAQs"
import { SUPPORT_FAQS } from "@/lib/content"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Support",
  description:
    "Real humans, NZ time zone. FAQs, warranty info, shipping details, and a contact form. We respond within 24 hours.",
  path: "/support",
})

const INFO_BLOCKS = [
  {
    id: "warranty",
    title: "3-year warranty. No fine print.",
    body: "Every Mi-Pod comes with a 3-year warranty covering materials and workmanship. If something goes wrong, contact us with your registration number and proof of purchase, and we'll make it right. Warranty is non-transferable.",
  },
  {
    id: "shipping",
    title: "Free shipping, NZ-wide.",
    body: "All Mi-Pod orders ship free within New Zealand. Most orders dispatch within 5–7 business days from our warehouse and arrive within 2–5 days after that. Rural deliveries may take longer.",
  },
  {
    id: "returns",
    title: "30-day returns.",
    body: "We accept returns within 30 days of delivery for unused, uninstalled units in original condition. Contact us with your order number to start the process.",
  },
]

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        headline="We're here when you need us."
        subhead="Real humans, NZ time zone, response within 24 hours."
      />

      {/* Contact form */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-3">
                Get in touch.
              </h2>
              <p className="text-charcoal-600 font-sans mb-8">
                We&apos;ll get back to you within 24 hours.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-charcoal font-sans">
                  <span className="font-medium">Phone:</span> +64 27 444 9740
                </p>
                <p className="text-sm text-charcoal font-sans">
                  <span className="font-medium">Email:</span> tony@ecotechhomes.co.nz
                </p>
                <p className="text-sm text-charcoal-600 font-sans">Aotearoa, New Zealand</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Info blocks */}
      <section id="warranty" className="py-16 md:py-24 bg-cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INFO_BLOCKS.map((block) => (
              <div key={block.id} id={block.id === "warranty" ? undefined : block.id}>
                <h3 className="font-display font-bold text-charcoal text-2xl leading-tight mb-4">
                  {block.title}
                </h3>
                <p className="text-charcoal-600 font-sans leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 md:py-24 bg-white scroll-mt-24">
        <Container>
          <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-10">
            FAQs
          </h2>
          <div className="max-w-2xl">
            <FAQs items={SUPPORT_FAQS} />
          </div>
        </Container>
      </section>
    </>
  )
}
