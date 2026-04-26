export const VALUE_PROPS = [
  {
    id: "nz-designed",
    icon: "MapPin",
    title: "NZ Designed",
    body: "Engineered in Aotearoa for Aotearoa conditions",
  },
  {
    id: "hydraulic-lift",
    icon: "Zap",
    title: "Hydraulic Lift",
    body: "Self-deploys in under 90 seconds",
  },
  {
    id: "fits-any-vehicle",
    icon: "Car",
    title: "Fits Any Vehicle",
    body: "Works with any standard roof rack",
  },
  {
    id: "warranty",
    icon: "Shield",
    title: "3-Year Warranty",
    body: "Full coverage, no questions",
  },
] as const

export const SPEC_FEATURES = [
  { id: "hydraulic", icon: "Zap", label: "Hydraulic auto-lift mechanism" },
  { id: "sleeps", icon: "Moon", label: "Sleeps 2–3 adults comfortably" },
  { id: "setup", icon: "Timer", label: "90-second setup" },
  { id: "waterproof", icon: "Droplets", label: "3000mm waterproof rating" },
  { id: "frame", icon: "Grid2x2", label: "Aluminium alloy frame" },
  { id: "mattress", icon: "Layers", label: "7cm high-density mattress, washable cover" },
] as const

export const TESTIMONIALS = [
  {
    id: "1",
    // TODO: Replace with real testimonials post-launch
    quote:
      "Pulled over for the night somewhere between Picton and Kaikōura. Up in 90 seconds. Coffee on by 6am.",
    name: "Tom & Anika",
    vehicle: "Nissan Patrol",
    location: "South Island",
  },
  {
    id: "2",
    // TODO: Replace with real testimonials post-launch
    quote:
      "We've had cheaper tents that took four times as long to set up. The Mi-Pod just works.",
    name: "Marcus R.",
    vehicle: "Toyota Hilux",
    location: "Waikato",
  },
  {
    id: "3",
    // TODO: Replace with real testimonials post-launch
    quote:
      "First time camping with the kids was actually relaxing. That's never happened before.",
    name: "Sarah & Dale",
    vehicle: "Ford Ranger",
    location: "Canterbury",
  },
] as const

export const STORY_BODY = [
  "Mi-Pod was born for Kiwis who want their weekends back. Hydraulic auto-lift means no fighting with poles, no fumbling in the dark. Just pull up, hit the latch, and the tent does the rest.",
  "Designed for New Zealand conditions. Waterproof, wind and UV resistant. Built to handle a season of back-country and still feel like home.",
] as const

export const NAV_LINKS = [
  { label: "The Mi-Pod", href: "/the-mi-pod" },
  { label: "Adventures", href: "/adventures" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
] as const

export const FOOTER_LINKS = {
  shop: [{ label: "The Mi-Pod", href: "/the-mi-pod" }],
  brand: [
    { label: "About", href: "/about" },
    { label: "Adventures", href: "/adventures" },
    { label: "Press", href: "/support" },
  ],
  support: [
    { label: "Contact", href: "/support" },
    { label: "FAQs", href: "/support#faqs" },
    { label: "Warranty", href: "/support#warranty" },
    { label: "Shipping", href: "/support#shipping" },
  ],
  connect: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "TikTok", href: "#" },
  ],
} as const

export const PRODUCT_FAQS = [
  {
    q: "How long does the Mi-Pod take to set up?",
    a: "Under 90 seconds. The hydraulic mechanism does the heavy lifting — you release the latches, lift the front edge, and the tent extends itself.",
  },
  {
    q: "Will it fit my vehicle?",
    a: "Any vehicle with a roof rack rated to 75kg dynamic load. If you're not sure, contact us with your make and model.",
  },
  {
    q: "How waterproof is it?",
    a: "3000mm hydrostatic head, which handles heavy NZ rain comfortably. The 420D Oxford fabric is also UV resistant and wind tested.",
  },
  {
    q: "What's included with the tent?",
    a: "Tent, 2.7m ladder, mounting hardware, mattress, LED strip, and the warranty registration. Everything you need to start the same day it arrives.",
  },
  {
    q: "What's the warranty?",
    a: "3 years, full coverage on materials and workmanship. Contact us within the warranty period and we'll sort it out.",
  },
  {
    q: "Where do you ship?",
    a: "NZ-wide, free. Shipped from our warehouse within 5–7 business days.",
  },
  {
    q: "Can I see one before I buy?",
    a: "Yes — we're setting up viewing locations across NZ. Contact us with your region and we'll find the closest one.",
  },
] as const

export const SUPPORT_FAQS = [
  ...PRODUCT_FAQS,
  {
    q: "How do I install the Mi-Pod on my vehicle?",
    a: "The Mi-Pod ships with mounting brackets and an installation guide. Most installs take 1–2 hours with basic tools. We also have a network of approved fitters if you'd prefer professional installation.",
  },
  {
    q: "What's the return policy?",
    a: "We accept returns within 30 days of delivery for unused, uninstalled units in original condition. Contact us to start the process.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — Afterpay is available at checkout when we go live.",
  },
]

export const INCLUDED_ITEMS = [
  "Mi-Pod hydraulic rooftop tent",
  "2.7m retractable aluminium ladder",
  "Mounting brackets and installation bags",
  "LED light strip (interior)",
  "7cm high-density mattress with washable cover",
  "3-year warranty registration card",
  "Quick-start guide",
] as const
