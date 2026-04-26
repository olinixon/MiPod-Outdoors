import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/shared/PageHero"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Mi-Pod Outdoors terms of service.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" headline="Terms of Service." />
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm text-charcoal-600 font-sans">
              This is a placeholder page. Full terms of service will be added before launch.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
