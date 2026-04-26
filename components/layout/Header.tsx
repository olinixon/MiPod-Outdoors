"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/content"
import { Button } from "@/components/ui/Button"

export function Header() {
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  // On homepage: transparent until scrolled. On all other pages: always solid.
  const isSolid = !isHomepage || scrolled || mobileOpen
  const isLight = !isSolid

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isSolid ? "bg-white shadow-sm" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Mi-Pod Outdoors — home">
              <Image
                src="/images/brand/logo-horizontal.png"
                alt="Mi-Pod Outdoors"
                width={200}
                height={55}
                className={cn(
                  "h-10 md:h-12 w-auto object-contain transition-all duration-300",
                  isLight ? "brightness-0 invert" : "brightness-0"
                )}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium font-sans tracking-wide transition-colors duration-200",
                    isLight
                      ? "text-white/90 hover:text-white"
                      : "text-charcoal hover:text-orange"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button
                href="/the-mi-pod"
                variant={isLight ? "secondary-light" : "primary"}
                size="sm"
              >
                Shop the Mi-Pod
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className={cn(
                "lg:hidden p-2 -mr-2 rounded-md transition-colors",
                isLight ? "text-white" : "text-charcoal"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-white transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-4 text-2xl font-display font-bold text-charcoal border-b border-gray-100 hover:text-orange transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Button href="/the-mi-pod" className="w-full" onClick={() => setMobileOpen(false)}>
              Shop the Mi-Pod
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
