"use client"

import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium uppercase tracking-wider text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-white px-8 py-4 hover:bg-orange-400 hover:shadow-lg",
        secondary:
          "border border-charcoal text-charcoal px-8 py-4 hover:bg-charcoal hover:text-white",
        "secondary-light":
          "border border-white text-white px-8 py-4 hover:bg-white hover:text-charcoal",
        ghost: "text-orange hover:text-orange-600 px-0 py-0 normal-case tracking-normal font-medium text-base uppercase-false",
      },
      size: {
        default: "",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-10 py-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string; rel?: string; onClick?: () => void }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  if ("href" in props && props.href) {
    const { href, target, rel, onClick, ...rest } = props
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes} {...(rest as object)}>
        {children}
      </Link>
    )
  }

  const { ...rest } = props as ButtonAsButton
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
