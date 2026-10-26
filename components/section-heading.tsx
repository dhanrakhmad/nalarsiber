import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  action?: {
    label: string
    href: string
  }
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-4",
        className
      )}
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-brand to-brand-2" />
          <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-2.5 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>

      {action ? (
        <Link
          href={action.href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "group gap-1.5 rounded-full text-muted-foreground hover:text-foreground"
          )}
        >
          {action.label}
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  )
}
