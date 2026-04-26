import { MapPin, Zap, Car, Shield } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { VALUE_PROPS } from "@/lib/content"

const ICON_MAP = {
  MapPin,
  Zap,
  Car,
  Shield,
}

export function ValueProps() {
  return (
    <section className="bg-white border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {VALUE_PROPS.map((prop) => {
            const Icon = ICON_MAP[prop.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={prop.id}
                className="flex flex-col items-start gap-3 py-8 px-6 lg:py-10 lg:px-8"
              >
                {Icon && (
                  <Icon size={22} strokeWidth={1.5} className="text-orange flex-shrink-0" />
                )}
                <div>
                  <p className="font-display font-bold text-charcoal text-lg leading-tight">
                    {prop.title}
                  </p>
                  <p className="mt-1 text-sm text-charcoal-600 font-sans leading-snug">
                    {prop.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
