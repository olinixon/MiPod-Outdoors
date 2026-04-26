import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { EmailCapture } from "@/components/shared/EmailCapture"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "The Mi-Pod Film — Coming Soon",
  description:
    "The Mi-Pod brand film, dropping post-Nelson shoot. Drop your email and we'll send it to your inbox the moment it lands.",
  path: "/the-film",
})

export default function TheFilmPage() {
  return (
    <section className="min-h-screen bg-charcoal-900 flex items-center">
      <Container className="py-32">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-6 font-sans">
            — The film
          </p>
          <h1 className="font-display font-bold text-white leading-[0.92] tracking-tight text-[64px] md:text-[88px]">
            Coming soon.
          </h1>
          <p className="mt-8 text-lg text-white/70 font-sans leading-relaxed">
            The Mi-Pod brand film, dropping post-Nelson shoot. Drop your email and we&apos;ll
            send it to your inbox the moment it lands.
          </p>
          <div className="mt-10">
            <EmailCapture
              source="the-film"
              buttonLabel="Notify me when the film drops"
              successMessage="You're on the list. We'll send it the moment it drops."
            />
          </div>
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-sans text-sm group"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              Back to home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
