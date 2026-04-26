import { Container } from "@/components/ui/Container"
import type { ProductSpec } from "@/lib/products"

interface SpecsTableProps {
  specs: ProductSpec[]
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <section id="specs" className="py-16 md:py-24 bg-white scroll-mt-24">
      <Container>
        <h2 className="font-display font-bold text-charcoal text-[36px] md:text-[48px] leading-tight tracking-tight mb-10">
          Specifications
        </h2>
        <div className="max-w-2xl">
          <table className="w-full border-collapse">
            <tbody>
              {specs.map((spec, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-3.5 pr-8 text-sm font-medium text-charcoal font-sans w-1/2 align-top">
                    {spec.label}
                  </td>
                  <td className="py-3.5 text-sm text-charcoal-600 font-sans">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
