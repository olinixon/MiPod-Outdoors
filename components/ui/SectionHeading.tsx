import { cn } from "@/lib/utils"
import { Eyebrow } from "./Eyebrow"

interface SectionHeadingProps {
  eyebrow?: string
  headline: string
  sub?: string
  light?: boolean
  centered?: boolean
  className?: string
  headingLevel?: "h1" | "h2" | "h3"
}

export function SectionHeading({
  eyebrow,
  headline,
  sub,
  light = false,
  centered = false,
  className,
  headingLevel: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <Eyebrow light={light} dash className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          "font-display font-bold leading-[0.95] tracking-tight",
          "text-[40px] md:text-[64px]",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {headline}
      </Tag>
      {sub && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed max-w-2xl font-sans",
            light ? "text-white/75" : "text-charcoal-600",
            centered && "mx-auto"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  )
}
