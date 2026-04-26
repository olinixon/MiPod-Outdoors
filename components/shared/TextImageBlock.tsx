import Image from "next/image"
import { cn } from "@/lib/utils"

interface TextImageBlockProps {
  eyebrow?: string
  headline: string
  body: string
  imageSrc: string
  imageAlt: string
  imageComment: string
  reversed?: boolean
}

export function TextImageBlock({
  headline,
  body,
  imageSrc,
  imageAlt,
  imageComment,
  reversed = false,
}: TextImageBlockProps) {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20 border-b border-gray-100 last:border-0",
        reversed && "lg:[&>*:first-child]:order-2"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-charcoal-700">
        {/* LIFESTYLE PLACEHOLDER: About page section image. To be replaced post-Nelson shoot. */}
        {/* {imageComment} */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      {/* Text */}
      <div className={cn(reversed && "lg:order-first")}>
        <h3 className="font-display font-bold text-charcoal text-[32px] md:text-[44px] leading-tight tracking-tight mb-5">
          {headline}
        </h3>
        <p className="text-charcoal-600 font-sans leading-relaxed text-lg">{body}</p>
      </div>
    </div>
  )
}
