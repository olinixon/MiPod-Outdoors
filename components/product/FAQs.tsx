"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQ {
  q: string
  a: string
}

interface FAQsProps {
  items: readonly FAQ[]
  className?: string
}

export function FAQs({ items, className }: FAQsProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={cn("divide-y divide-gray-200", className)}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-start justify-between gap-6 py-5 text-left"
          >
            <span className="font-medium text-charcoal font-sans">{item.q}</span>
            <span className="flex-shrink-0 mt-0.5 text-orange">
              {open === i ? (
                <Minus size={18} strokeWidth={1.5} />
              ) : (
                <Plus size={18} strokeWidth={1.5} />
              )}
            </span>
          </button>
          {open === i && (
            <div className="pb-5 pr-10">
              <p className="text-charcoal-600 font-sans leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
