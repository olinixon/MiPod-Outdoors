"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { PRODUCT_FAQS } from "@/lib/content"

export function ProductFAQs() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  function toggle(i: number) {
    setOpenItems((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white scroll-mt-24">
      <Container>
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16">

          {/* Left column */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
              — FAQ
            </p>
            <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[40px] md:text-[48px] mb-6">
              The questions everyone asks.
            </h2>
            <p className="text-charcoal/70 font-sans text-[15px] leading-relaxed mb-8">
              Can&apos;t find your answer? Get in touch today and we&apos;ll respond within 24
              hours.
            </p>
            <Button href="/support">Contact us here</Button>
          </div>

          {/* Right column — accordion */}
          <div className="border-t border-charcoal/10">
            {PRODUCT_FAQS.map((item, i) => {
              const isOpen = openItems.has(i)
              return (
                <div key={i} className="border-b border-charcoal/10">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display font-bold text-charcoal text-lg leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={cn(
                        "flex-shrink-0 mt-1 text-orange transition-transform duration-[250ms]",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-[250ms] ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-charcoal/70 font-sans leading-relaxed pb-5 pr-10">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </Container>
    </section>
  )
}
