import type { Metadata } from "next"
import { Antonio, Outfit } from "next/font/google"
import "./globals.css"

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-antonio",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Mi-Pod Outdoors — Live Above the Ground",
    template: "%s | Mi-Pod Outdoors",
  },
  description:
    "A hydraulic auto-lift rooftop tent. NZ designed. Fits any vehicle. From $4,890 NZD.",
  metadataBase: new URL("https://mipodoutdoors.com"),
  openGraph: {
    siteName: "Mi-Pod Outdoors",
    locale: "en_NZ",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-NZ"
      className={`${antonio.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
