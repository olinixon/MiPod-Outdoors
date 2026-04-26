import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { MI_POD_PRODUCT } from "@/lib/products"

export function FeaturedProduct() {
  const product = MI_POD_PRODUCT
  const heroImage = product.images[0]

  return (
    <section className="py-24 md:py-32 bg-cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative bg-white rounded-md overflow-hidden aspect-square flex items-center justify-center p-12 shadow-sm">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={600}
              height={600}
              className="object-contain w-full h-full"
              sizes="(min-width: 1024px) 50vw, 90vw"
            />
          </div>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="The product"
              headline="One tent. Every adventure."
              sub="A single, considered product. Built once, built right."
            />

            <div className="mt-8 space-y-3">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                  <p className="text-charcoal-600 font-sans">{f}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-display font-bold text-4xl text-charcoal">
                {product.price}
              </span>
              <span className="text-charcoal-600 font-sans text-sm">{product.currency}</span>
            </div>

            <a
              href="/the-mi-pod"
              className="mt-6 inline-flex items-center gap-2 text-orange font-medium font-sans hover:text-orange-600 transition-colors group"
            >
              View the Mi-Pod
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
