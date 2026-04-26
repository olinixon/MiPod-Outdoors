"use client"

import { useState, type FormEvent } from "react"

const SUBJECTS = [
  "General",
  "Pre-Sales",
  "Warranty",
  "Press",
] as const

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General" as string,
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("loading")
    console.log("[Contact form]", form)
    await new Promise((r) => setTimeout(r, 500))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="rounded-md bg-orange/10 border border-orange/20 px-8 py-8 max-w-xl">
        <p className="font-medium text-charcoal font-sans">Message sent.</p>
        <p className="mt-1 text-charcoal-600 font-sans text-sm">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-md border border-gray-200 px-4 py-3 text-charcoal placeholder:text-charcoal-600/40 font-sans text-sm focus:outline-none focus:border-orange transition-colors"
  const labelClass = "block text-xs font-medium uppercase tracking-[0.15em] text-charcoal mb-2 font-sans"

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Jane Smith"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="jane@email.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone{" "}
            <span className="normal-case font-normal tracking-normal text-charcoal-600/60">
              (optional)
            </span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="+64 21 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelClass}>
            Subject
          </label>
          <select
            id="contact-subject"
            value={form.subject}
            onChange={set("subject")}
            className={inputClass}
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          value={form.message}
          onChange={set("message")}
          rows={5}
          placeholder="How can we help?"
          required
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-orange text-white px-8 py-4 rounded-md font-medium uppercase tracking-wider text-sm hover:bg-orange-400 transition-all duration-200 disabled:opacity-60 font-sans"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  )
}
