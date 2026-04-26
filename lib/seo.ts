import type { Metadata } from "next"

const BASE_URL = "https://mipodoutdoors.com"

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-default.png",
}: {
  title: string
  description: string
  path?: string
  image?: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: `${BASE_URL}${image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${image}`],
    },
  }
}
