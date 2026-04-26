"use client"

import { useState, type FormEvent } from "react"
import { Container } from "@/components/ui/Container"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    // Placeholder — replace with Resend once DNS is live
    console.log("[Newsletter signup]", { email })
    await new Promise((r) => setTimeout(r, 400))
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
            — Stay in the loop
          </p>
          <h2 className="font-display font-bold text-white leading-[0.95] tracking-tight text-[48px] md:text-[64px]">
            Get $100 off your first Mi-Pod.
          </h2>
          <p className="mt-6 text-white/70 font-sans text-lg leading-relaxed">
            Drop your email and we&apos;ll send launch updates, road trip stories, and a $100
            discount code at launch. No spam.
          </p>

          {status === "success" ? (
            <div className="mt-10 rounded-md bg-white/10 border border-white/20 px-6 py-5">
              <p className="text-white font-sans">
                You&apos;re on the list. We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-md bg-white/10 border border-white/20 px-5 py-4 text-white placeholder:text-white/40 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-orange text-white px-8 py-4 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-orange-400 transition-all duration-200 disabled:opacity-60 font-sans flex-shrink-0"
              >
                {status === "loading" ? "Sending…" : "Notify me at launch"}
              </button>
            </form>
          )}

          <p className="mt-4 text-white/40 font-sans text-xs">
            We respect your inbox. Unsubscribe any time.
          </p>
        </div>
      </Container>
    </section>
  )
}
