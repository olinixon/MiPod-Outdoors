import Image from "next/image"
import { Container } from "@/components/ui/Container"

export function Overview() {
  return (
    <section id="overview" className="py-16 md:py-24 bg-white scroll-mt-24">
      <Container>
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-orange mb-4 font-sans">
          — Overview
        </p>
        <h2 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[40px] md:text-[56px] lg:text-[64px] mb-8">
          A small house on your roof.
        </h2>

        <p className="text-charcoal-600 font-sans text-[17px] leading-relaxed max-w-[720px] mb-12">
          The Mi-Pod is built on one idea — a tent shouldn&apos;t be a fight. Hydraulic
          semi-automatic lift means deployment is one motion: release the latch, the tent does the
          rest.
        </p>

        {/* LIFESTYLE PLACEHOLDER: Mi-Pod overview section image — reusing existing asset, swap later */}
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-12">
          <Image
            src="/images/lifestyle/hero-river-mountains.jpg"
            alt="A vehicle with a rooftop tent deployed in a cinematic New Zealand landscape"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-charcoal-600 font-sans text-[17px] leading-relaxed">
            The shell is 420D Oxford with a polyurethane coating, rated to 3000mm waterproof. Wind
            and UV resistant. Marine-grade aluminium alloy frame, with a 300kg loading capacity that
            comfortably absorbs two adults plus gear. Comes with a 2.7m retractable aluminium
            ladder, factory installation bags, and integrated LED light strips. Universal mount fits
            any vehicle with a roof rack rated to 75kg dynamic load.
          </p>
          <p className="text-charcoal-600 font-sans text-[17px] leading-relaxed">
            Heavy-duty Oxford shell, marine-grade alloy frame. Waterproof to 3000mm, wind and UV
            resistant — built to handle whatever the country throws at it. Fits any roof rack rated
            to 75kg. Comes with the 2.7m ladder, install bags, and LED strips, ready to go.
          </p>
        </div>
      </Container>
    </section>
  )
}
