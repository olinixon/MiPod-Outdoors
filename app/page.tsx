import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { Hero } from "@/components/homepage/Hero"
import { ValueProps } from "@/components/homepage/ValueProps"
import { StorySection } from "@/components/homepage/StorySection"
import { FeaturedProduct } from "@/components/homepage/FeaturedProduct"
import { SpecHighlights } from "@/components/homepage/SpecHighlights"
import { SocialProof } from "@/components/homepage/SocialProof"
import { Newsletter } from "@/components/homepage/Newsletter"
import { FadeIn } from "@/components/ui/FadeIn"

export const metadata: Metadata = buildMetadata({
  title: "Mi-Pod Outdoors — Live Above the Ground",
  description:
    "A hydraulic auto-lift rooftop tent. NZ designed. Fits any vehicle. From $4,890 NZD. Built for the long way home.",
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn><ValueProps /></FadeIn>
      <FadeIn><StorySection /></FadeIn>
      <FadeIn><FeaturedProduct /></FadeIn>
      <FadeIn><SpecHighlights /></FadeIn>
      <FadeIn><SocialProof /></FadeIn>
      <FadeIn><Newsletter /></FadeIn>
    </>
  )
}
