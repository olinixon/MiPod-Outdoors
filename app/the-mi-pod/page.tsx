import Script from "next/script"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { FadeIn } from "@/components/ui/FadeIn"
import { ImageGallery } from "@/components/product/ImageGallery"
import { BuyBox } from "@/components/product/BuyBox"
import { TabNav } from "@/components/product/TabNav"
import { Overview } from "@/components/product/Overview"
import { SpecsTable } from "@/components/product/SpecsTable"
import { WhatsIncluded } from "@/components/product/WhatsIncluded"
import { Compatibility } from "@/components/product/Compatibility"
import { FAQs } from "@/components/product/FAQs"
import { LifestyleQuote } from "@/components/product/LifestyleQuote"
import { RelatedContent } from "@/components/product/RelatedContent"
import { MI_POD_PRODUCT } from "@/lib/products"
import { PRODUCT_FAQS } from "@/lib/content"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "The Mi-Pod — Hydraulic Auto-Lift Rooftop Tent",
  description:
    "A hard-shell rooftop tent that lifts itself. Sleeps 2–3 adults, deploys in 90 seconds, fits any vehicle. From $4,890 NZD. NZ designed.",
  path: "/the-mi-pod",
})

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Mi-Pod",
  description:
    "A hydraulic auto-lift hard-shell rooftop tent. Sleeps 2–3 adults, deploys in 90 seconds, fits any vehicle with a standard roof rack.",
  brand: { "@type": "Brand", name: "Mi-Pod Outdoors" },
  offers: {
    "@type": "Offer",
    price: "4890",
    priceCurrency: "NZD",
    availability: "https://schema.org/PreOrder",
    seller: { "@type": "Organization", name: "Mi-Pod Outdoors" },
  },
  image: "https://mipodoutdoors.com/images/product/mi-pod-render-1.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
}

export default function ProductPage() {
  const product = MI_POD_PRODUCT

  return (
    <>
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="pt-20 bg-white">
        <Container className="py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm font-sans">
            <Link href="/" className="text-charcoal-600 hover:text-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-charcoal-600/50" />
            <span className="text-charcoal font-medium">The Mi-Pod</span>
          </nav>
        </Container>
      </div>

      {/* Hero: gallery + buy box */}
      <section className="bg-white pb-16">
        <Container>
          <div className="grid lg:grid-cols-[55%_1fr] gap-12 lg:gap-16">
            <ImageGallery images={product.images} />
            <BuyBox product={product} />
          </div>
        </Container>
      </section>

      {/* Sticky tab nav */}
      <TabNav />

      {/* Content sections */}
      <FadeIn><Overview /></FadeIn>
      <FadeIn><SpecsTable specs={product.specs} /></FadeIn>
      <FadeIn><WhatsIncluded /></FadeIn>
      <FadeIn><Compatibility /></FadeIn>

      {/* FAQs */}
      <FadeIn>
        <section id="faqs" className="py-16 md:py-24 bg-cream scroll-mt-24">
          <Container>
            <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-10">
              FAQs
            </h2>
            <div className="max-w-2xl">
              <FAQs items={PRODUCT_FAQS} />
            </div>
          </Container>
        </section>
      </FadeIn>

      <FadeIn><LifestyleQuote /></FadeIn>
      <FadeIn><RelatedContent /></FadeIn>
    </>
  )
}
