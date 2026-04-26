import Image from "next/image"

export function LifestyleQuote() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-charcoal-900">
      {/* LIFESTYLE PLACEHOLDER: Full-bleed quote section — ute parked at night, tent deployed, stars visible. To be replaced post-Nelson shoot. */}
      <Image
        src="https://images.unsplash.com/photo-1516569423027-8a77ec5e04d8?w=2560&q=85"
        alt="Rooftop tent deployed under a clear night sky"
        fill
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <blockquote>
          <p className="font-display font-bold text-white leading-tight tracking-tight text-[32px] md:text-[52px]">
            &ldquo;Pulled over for the night somewhere between Picton and Kaikōura.
            Up in 90 seconds. Coffee on by 6am.&rdquo;
          </p>
          <footer className="mt-8">
            <p className="text-white/60 font-sans text-sm uppercase tracking-[0.2em]">
              — Tom & Anika · Nissan Patrol · South Island
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
