"use client"

import { useState, type FormEvent } from "react"

interface EmailCaptureProps {
  source: string
  buttonLabel?: string
  successMessage?: string
}

export function EmailCapture({
  source,
  buttonLabel = "Notify me",
  successMessage = "You're on the list.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    console.log(`[Email capture — ${source}]`, { email })
    await new Promise((r) => setTimeout(r, 400))
    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <div className="rounded-md bg-orange/10 border border-orange/20 px-6 py-5 max-w-md">
        <p className="text-charcoal font-sans">{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md" noValidate>
      <label htmlFor={`email-capture-${source}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-capture-${source}`}
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
        className="bg-orange text-white px-6 py-3 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-orange-400 transition-all font-sans flex-shrink-0 disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : buttonLabel}
      </button>
    </form>
  )
}
