import Image from "next/image"

export function LifestyleQuote() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-charcoal-900">
      {/* LIFESTYLE PLACEHOLDER: Lifestyle quote background — reusing existing asset, swap later */}
      <Image
        src="/images/lifestyle/hero-tacoma-clifftop.jpg"
        alt="Vehicle with rooftop tent at a dramatic landscape location"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal-900/60" />

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
