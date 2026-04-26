import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/shared/PageHero"
import { ComingSoonCard } from "@/components/shared/ComingSoonCard"
import { EmailCapture } from "@/components/shared/EmailCapture"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Adventures — Field Journal",
  description:
    "Stories from the long way home. Routes, builds, and the people taking the Mi-Pod somewhere it shouldn't go.",
  path: "/adventures",
})

const PLACEHOLDER_STORIES = [
  {
    title: "The Forgotten Highway",
    description: "Paparoa Range to Whangamomona. Three days, one flat tyre, zero regrets.",
  },
  {
    title: "East Cape in February",
    description:
      "The long way around the North Island. Empty roads and the best kai in the country.",
  },
  {
    title: "Down the Lindis",
    description: "Mackenzie Basin to the Queenstown lakes. Alpine passes, no bookings.",
  },
]

export default function AdventuresPage() {
  return (
    <>
      <PageHero
        eyebrow="Field journal"
        headline="Stories from the long way home."
        subhead="We're putting together a journal of routes, builds, and the people taking the Mi-Pod somewhere it shouldn't go. Drop your email and we'll send the first one when it lands."
      />

      {/* Email capture */}
      <section className="bg-white py-16 border-b border-gray-100">
        <Container>
          <EmailCapture source="adventures" successMessage="You're on the list. First story incoming." />
        </Container>
      </section>

      {/* Coming soon cards */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEHOLDER_STORIES.map((story) => (
              <ComingSoonCard
                key={story.title}
                title={story.title}
                description={story.description}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
