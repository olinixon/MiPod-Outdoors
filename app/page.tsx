import { Hero } from "@/components/homepage/Hero"
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
