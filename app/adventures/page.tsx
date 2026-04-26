"use client"

import { useState, type FormEvent } from "react"
import { Container } from "@/components/ui/Container"
import { PageHero } from "@/components/shared/PageHero"
import { ComingSoonCard } from "@/components/shared/ComingSoonCard"

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
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    console.log("[Adventures signup]", { email })
    await new Promise((r) => setTimeout(r, 400))
    setStatus("success")
    setEmail("")
  }

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
          <div className="max-w-md">
            {status === "success" ? (
              <div className="rounded-md bg-orange/10 border border-orange/20 px-6 py-5">
                <p className="text-charcoal font-sans">
                  You&apos;re on the list. First story incoming.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="adventures-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="adventures-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-md border border-gray-200 px-4 py-3 text-charcoal placeholder:text-charcoal-600/40 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-orange text-white px-6 py-3 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-orange-400 transition-all font-sans flex-shrink-0"
                >
                  {status === "loading" ? "Sending…" : "Notify me"}
                </button>
              </form>
            )}
          </div>
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
