import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/shared/PageHero"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Mi-Pod Outdoors privacy policy.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" headline="Privacy Policy." />
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl prose prose-sm font-sans text-charcoal-600 space-y-4">
            <p className="text-sm text-charcoal-600 font-sans">
              This is a placeholder page. A full privacy policy will be added before launch.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
