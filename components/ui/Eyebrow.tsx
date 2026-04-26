import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  light?: boolean
  dash?: boolean
}

export function Eyebrow({ children, className, light = false, dash = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.25em] font-sans",
        light ? "text-orange-400" : "text-orange",
        className
      )}
    >
      {dash ? `— ${children}` : children}
    </p>
  )
}
