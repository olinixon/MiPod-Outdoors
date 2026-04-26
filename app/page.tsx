import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/homepage/Hero"

export const metadata: Metadata = buildMetadata({
  title: "Mi-Pod Outdoors — Live Above the Ground",
  description:
    "A hydraulic auto-lift rooftop tent. NZ designed. Fits any vehicle. From $4,890 NZD. Built for the long way home.",
  path: "/",
})
import { ValueProps } from "@/components/homepage/ValueProps"
import { StorySection } from "@/components/homepage/StorySection"
import { SpecHighlights } from "@/components/homepage/SpecHighlights"
import { FeaturedProduct } from "@/components/homepage/FeaturedProduct"
import { SocialProof } from "@/components/homepage/SocialProof"
import { Newsletter } from "@/components/homepage/Newsletter"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <StorySection />
      <SpecHighlights />
      <FeaturedProduct />
      <SocialProof />
      <Newsletter />
    </>
  )
}
