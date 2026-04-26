"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specs" },
  { id: "included", label: "What's Included" },
  { id: "compatibility", label: "Compatibility" },
  { id: "faqs", label: "FAQs" },
] as const

export function TabNav() {
  const [active, setActive] = useState<string>("overview")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const offset = 96
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <div className="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-x-auto">
        <nav className="flex gap-0 min-w-max" aria-label="Product sections">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "py-4 px-5 text-sm font-medium font-sans border-b-2 transition-all duration-200 whitespace-nowrap",
                active === id
                  ? "border-orange text-orange"
                  : "border-transparent text-charcoal-600 hover:text-charcoal"
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
