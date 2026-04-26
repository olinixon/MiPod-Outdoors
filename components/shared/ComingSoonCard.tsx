import { cn } from "@/lib/utils"

interface ComingSoonCardProps {
  title: string
  description: string
  className?: string
}

export function ComingSoonCard({ title, description, className }: ComingSoonCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-md overflow-hidden bg-cream aspect-[4/3] flex flex-col justify-end p-8",
        className
      )}
    >
      {/* Coming soon ribbon */}
      <div className="absolute top-5 right-0 bg-orange text-white text-[10px] font-medium uppercase tracking-[0.2em] py-1.5 px-4 font-sans">
        Coming soon
      </div>
      <div className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal-600 font-sans">
          Field journal
        </p>
        <h3 className="font-display font-bold text-2xl text-charcoal leading-tight">{title}</h3>
        <p className="text-sm text-charcoal-600 font-sans">{description}</p>
      </div>
    </div>
  )
}
