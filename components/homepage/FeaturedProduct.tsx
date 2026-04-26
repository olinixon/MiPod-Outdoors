"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Button } from "@/components/ui/Button"
import { MI_POD_PRODUCT } from "@/lib/products"
import { cn } from "@/lib/utils"

// Ordered per changelog: front, three-quarter, top-down, rear, closed shell
const CAROUSEL_IMAGES = [
  MI_POD_PRODUCT.images[0], // front deployed
  MI_POD_PRODUCT.images[3], // three-quarter
  MI_POD_PRODUCT.images[2], // top-down
  MI_POD_PRODUCT.images[1], // rear deployed
  MI_POD_PRODUCT.images[4], // closed shell
]

export function FeaturedProduct() {
  const product = MI_POD_PRODUCT

  // Disable slide transition for users who prefer reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: prefersReducedMotion ? 0 : 25,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  // Keyboard navigation when carousel container is focused
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollPrev() }
    if (e.key === "ArrowRight") { e.preventDefault(); scrollNext() }
  }

  return (
    <section className="py-24 md:py-32 bg-cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Carousel */}
          <div
            className="relative"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Product image carousel"
          >
            <div className="overflow-hidden rounded-md bg-white shadow-sm aspect-square" ref={emblaRef}>
              <div className="flex h-full">
                {CAROUSEL_IMAGES.map((img, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0 relative h-full p-10">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-10"
                      sizes="(min-width: 1024px) 50vw, 90vw"
                      priority={i === 0}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev arrow */}
            <button
              onClick={scrollPrev}
              aria-label="Previous product image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center text-charcoal transition-all duration-150 hover:shadow-md"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>

            {/* Next arrow */}
            <button
              onClick={scrollNext}
              aria-label="Next product image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center text-charcoal transition-all duration-150 hover:shadow-md"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Carousel position">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Go to image ${i + 1} of ${CAROUSEL_IMAGES.length}`}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    i === selectedIndex ? "bg-orange w-5" : "bg-charcoal-600/30 hover:bg-charcoal-600/50"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Copy */}
          <div>
            <Eyebrow dash className="mb-5">The product</Eyebrow>

            <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[48px] md:text-[64px]">
              One tent.
              <br />
              Every adventure.
            </h2>

            <p className="mt-6 text-lg text-charcoal-600 font-sans leading-relaxed">
              One tent, built right. Hydraulic auto-lift, 420D Oxford shell, sleeps up to three.
              Pull up, hit the latch, the tent does the rest.
            </p>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="font-display font-bold text-4xl text-charcoal">{product.price}</span>
              <span className="text-charcoal-600 font-sans text-sm">{product.currency}</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/the-mi-pod" variant="primary">
                View the Mi-Pod
              </Button>
              <Button href="#whats-inside" variant="secondary">
                Full specs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
