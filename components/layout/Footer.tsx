import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { FOOTER_LINKS } from "@/lib/content"

export function Footer() {
  return (
    <footer className="bg-charcoal text-white" aria-label="Site footer">
      <Container className="pt-16 pb-8">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" aria-label="Mi-Pod Outdoors — home">
              <Image
                src="/images/brand/logo-stacked.png"
                alt="Mi-Pod Outdoors"
                width={140}
                height={110}
                className="h-24 w-auto object-contain brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Live above the ground.
              <br />
              Aotearoa, New Zealand.
            </p>
            <div className="mt-5">
              <p className="text-xs text-white/50 font-sans">
                +64 27 444 9740
                <br />
                tony@ecotechhomes.co.nz
              </p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4 font-sans">
              Shop
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4 font-sans">
              Brand
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.brand.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4 font-sans">
              Support
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 mb-4 font-sans">
              Connect
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-sans">
            © 2026 Mi-Pod Outdoors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-sans"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white/70 transition-colors font-sans"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
