// Phase 1: hardcoded. Phase 2: replace with Shopify Storefront API call
// without changing component contracts (components consume this type).

export type ProductImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  id: string
  name: string
  subtitle: string
  eyebrow: string
  price: string
  currency: string
  trustLine: string
  description: string
  features: string[]
  images: ProductImage[]
  specs: ProductSpec[]
}

export const MI_POD_PRODUCT: Product = {
  id: "mi-pod-series-01",
  name: "The Mi-Pod",
  subtitle: "Hydraulic auto-lift rooftop tent.",
  eyebrow: "Series 01 — Hard-Shell",
  price: "$4,890",
  currency: "NZD",
  trustLine: "Free shipping NZ-wide · 3-year warranty · Afterpay available",
  description:
    "A hard-shell rooftop tent that lifts itself. Sleeps 2–3 adults, fits any vehicle, deploys in 90 seconds. Designed and built for everywhere a back road can take you.",
  features: [
    "Hydraulic auto-lift — deploys in 90 seconds",
    "Sleeps 2–3 adults",
    "3000mm waterproof rating",
    "3-year full warranty",
  ],
  images: [
    {
      src: "/images/product/mi-pod-render-1.png",
      alt: "Mi-Pod rooftop tent — front view, fully deployed",
      width: 1200,
      height: 900,
    },
    {
      src: "/images/product/mi-pod-render-2.png",
      alt: "Mi-Pod rooftop tent — rear view, deployed",
      width: 1200,
      height: 900,
    },
    {
      src: "/images/product/mi-pod-render-3.png",
      alt: "Mi-Pod rooftop tent — top-down view",
      width: 1200,
      height: 900,
    },
    {
      src: "/images/product/mi-pod-render-4.png",
      alt: "Mi-Pod rooftop tent — three-quarter view, deployed",
      width: 1200,
      height: 900,
    },
    {
      src: "/images/product/mi-pod-render-5.png",
      alt: "Mi-Pod rooftop tent — closed shell, transport mode",
      width: 1200,
      height: 900,
    },
  ],
  specs: [
    { label: "Capacity", value: "2–3 adults" },
    { label: "Weight", value: "75 kg" },
    { label: "Loading capacity", value: "300 kg" },
    { label: "Open dimensions", value: "215 × 128 × 101 cm" },
    { label: "Closed dimensions", value: "215 × 130 × 24 cm" },
    { label: "Packed dimensions", value: "225 × 137 × 30 cm" },
    { label: "Setup time", value: "Under 90 seconds (hydraulic semi-automatic)" },
    { label: "Frame", value: "Aluminium alloy" },
    { label: "Outer fabric", value: "420D Oxford with PU coating" },
    { label: "Waterproofing", value: "3000mm" },
    { label: "Weather rating", value: "Wind and UV resistant" },
    { label: "Mesh", value: "200g eco-friendly fixed-colour yarn" },
    { label: "Mattress", value: "30D high-density sponge, 7cm thick, washable cover" },
    { label: "Outer shell", value: "ABS hard shell" },
    { label: "Colour", value: "Black with orange trim" },
  ],
}
