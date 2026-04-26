"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle } from "lucide-react"
import { Eyebrow } from "@/components/ui/Eyebrow"
import type { Product } from "@/lib/products"

interface BuyBoxProps {
  product: Product
}

export function BuyBox({ product }: BuyBoxProps) {
  const [notifyEmail, setNotifyEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [showForm, setShowForm] = useState(false)

  async function handleNotify(e: FormEvent) {
    e.preventDefault()
    if (!notifyEmail) return
    setStatus("loading")
    // Placeholder — replace with Resend once DNS is live
    console.log("[Notify me at launch]", { email: notifyEmail, product: product.id })
    await new Promise((r) => setTimeout(r, 400))
    setStatus("success")
  }

  return (
    <div className="lg:sticky lg:top-24">
      <Eyebrow dash className="mb-3">
        {product.eyebrow}
      </Eyebrow>

      <h1 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[56px] md:text-[72px]">
        {product.name}
      </h1>
      <p className="mt-2 text-lg text-charcoal-600 font-sans">{product.subtitle}</p>

      {/* Price */}
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display font-bold text-4xl text-charcoal">{product.price}</span>
        <span className="text-charcoal-600 font-sans text-sm">{product.currency}</span>
      </div>
      <p className="mt-2 text-sm text-charcoal-600 font-sans">{product.trustLine}</p>

      {/* Description */}
      <p className="mt-6 text-charcoal-600 font-sans leading-relaxed">{product.description}</p>

      {/* Feature ticks */}
      <ul className="mt-6 space-y-3">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircle size={18} strokeWidth={1.5} className="text-orange flex-shrink-0 mt-0.5" />
            <span className="text-charcoal font-sans text-sm">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        {status === "success" ? (
          <div className="rounded-md bg-orange/10 border border-orange/20 px-6 py-5">
            <p className="text-charcoal font-sans font-medium text-sm">
              You&apos;re on the list. We&apos;ll let you know the moment the Mi-Pod launches.
            </p>
          </div>
        ) : showForm ? (
          <form onSubmit={handleNotify} className="flex flex-col gap-3">
            <label htmlFor="buybox-email" className="sr-only">
              Email address
            </label>
            <input
              id="buybox-email"
              type="email"
              value={notifyEmail}
              onChange={(e) => setNotifyEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="rounded-md border border-gray-200 px-4 py-3 text-charcoal placeholder:text-charcoal-600/50 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-orange text-white px-8 py-4 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-orange-400 transition-all duration-200 disabled:opacity-60 font-sans"
            >
              {status === "loading" ? "Sending…" : "Notify me at launch"}
            </button>
          </form>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-orange text-white px-8 py-4 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-orange-400 hover:shadow-lg transition-all duration-200 font-sans"
          >
            Notify me at launch
          </button>
        )}

        <button className="mt-3 w-full border border-charcoal-600/30 text-charcoal-600 px-8 py-4 rounded-md font-medium uppercase tracking-wider text-xs hover:border-charcoal hover:text-charcoal transition-all duration-200 font-sans">
          Download spec sheet{" "}
          <span className="normal-case tracking-normal text-charcoal-600/60 font-normal">
            (coming soon)
          </span>
        </button>
      </div>
    </div>
  )
}
