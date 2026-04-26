import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-900">
      {/* LIFESTYLE PLACEHOLDER: Tacoma on clifftop with deployed rooftop tent, cinematic landscape. To be replaced post-Nelson shoot. */}
      <Image
        src="/images/lifestyle/hero-tacoma-clifftop.jpg"
        alt="A black Toyota Tacoma parked on a clifftop with a rooftop tent deployed, overlooking a vast wilderness landscape."
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient overlay — bottom fade for copy legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-charcoal-900/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-orange mb-6 font-sans">
            — New Zealand's rooftop tent
          </p>
          <h1 className="font-display font-bold text-white leading-[0.92] tracking-tight text-[64px] md:text-[96px] lg:text-[120px] uppercase">
            Live above
            <br />
            the ground.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 font-sans leading-relaxed max-w-xl">
            Where the road goes, you go.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/the-mi-pod" size="lg">
              Shop the Mi-Pod
            </Button>
            <Button variant="secondary-light" size="lg" href="/the-film">
              <span>Watch the film</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/30 animate-pulse" />
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40 font-sans">
            Scroll
          </p>
        </div>
      </div>
    </section>
  )
}
