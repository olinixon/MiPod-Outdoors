import { Container } from "@/components/ui/Container"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  eyebrow?: string
  headline: string
  subhead?: string
  dark?: boolean
  centered?: boolean
  className?: string
}

export function PageHero({
  eyebrow,
  headline,
  subhead,
  dark = false,
  centered = false,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "pt-32 pb-16 md:pt-40 md:pb-24",
        dark ? "bg-charcoal-900" : "bg-white",
        className
      )}
    >
      <Container>
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
          {eyebrow && (
            <Eyebrow light={dark} dash className="mb-5">
              {eyebrow}
            </Eyebrow>
          )}
          <h1
            className={cn(
              "font-display font-bold leading-[0.95] tracking-tight",
              "text-[48px] md:text-[80px]",
              dark ? "text-white" : "text-charcoal"
            )}
          >
            {headline}
          </h1>
          {subhead && (
            <p
              className={cn(
                "mt-6 text-lg md:text-xl leading-relaxed font-sans",
                dark ? "text-white/70" : "text-charcoal-600",
                centered && "mx-auto"
              )}
            >
              {subhead}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
