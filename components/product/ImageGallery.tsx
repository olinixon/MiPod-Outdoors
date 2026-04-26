"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ProductImage } from "@/lib/products"

interface ImageGalleryProps {
  images: ProductImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Primary image */}
      <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-white border border-gray-100">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          className="object-contain p-6 transition-opacity duration-200"
          sizes="(min-width: 1024px) 55vw, 100vw"
          priority={active === 0}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 flex-wrap">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={img.alt}
            className={cn(
              "relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-150 flex-shrink-0 bg-white",
              i === active
                ? "border-orange"
                : "border-gray-200 hover:border-charcoal-600"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain p-1"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
