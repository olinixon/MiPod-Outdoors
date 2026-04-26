'use client'

import { ReactNode } from 'react'
import { useFadeInOnScroll } from '@/lib/hooks/useFadeInOnScroll'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}

export function FadeIn({ children, className, as: Component = 'div' }: FadeInProps) {
  const { ref, isVisible } = useFadeInOnScroll<HTMLDivElement>()

  return (
    <Component
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </Component>
  )
}
