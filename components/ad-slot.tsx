import type { ReactNode } from "react"
import { Megaphone } from "lucide-react"

import { cn } from "@/lib/utils"

export type AdFormat = "leaderboard" | "inline" | "sidebar" | "square"

const FORMAT_META: Record<AdFormat, { size: string; minHeight: string }> = {
  leaderboard: { size: "970 × 90", minHeight: "min-h-24 sm:min-h-28" },
  inline: { size: "970 × 250", minHeight: "min-h-32" },
  sidebar: { size: "300 × 600", minHeight: "min-h-64" },
  square: { size: "300 × 300", minHeight: "min-h-52" },
}

interface AdSlotProps {
  /** Identitas slot, nanti dipetakan ke placement ad server (mis. `home-leaderboard`). */
  slotId: string
  format?: AdFormat
  className?: string
  children?: ReactNode
}

/**
 * Boilerplate slot monetisasi.
 *
 * - Tanpa `children`: tampil sebagai placeholder bertema (house ad fallback).
 * - Dengan `children`: isi komponen iklan asli, mis. `<AdSense slot="..." />`.
 */
export function AdSlot({
  slotId,
  format = "inline",
  className,
  children,
}: AdSlotProps) {
  const meta = FORMAT_META[format]

  return (
    <aside
      data-ad-slot={slotId}
      aria-label={`Slot iklan ${slotId}`}
      className={cn(
        "relative isolate flex w-full overflow-hidden rounded-2xl border border-dashed border-border/80 bg-muted/20",
        meta.minHeight,
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-sm opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
      />

      <span className="absolute left-2.5 top-2 z-10 rounded-full border border-border/70 bg-background/80 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
        Iklan
      </span>
      <span className="absolute right-2.5 top-2 z-10 hidden font-mono text-[0.55rem] text-muted-foreground/60 sm:block">
        {meta.size}
      </span>

      <div className="relative z-[1] flex w-full flex-1 items-center justify-center p-6">
        {children ?? (
          <div className="flex flex-col items-center gap-1.5 text-center">
            <span className="grid size-9 place-items-center rounded-full border border-border/70 bg-background/60 text-muted-foreground">
              <Megaphone className="size-4" />
            </span>
            <p className="mt-1 text-xs font-medium text-foreground/90">
              Slot sponsor tersedia
            </p>
            <p className="max-w-[26ch] text-[0.7rem] leading-relaxed text-muted-foreground">
              Placeholder monetisasi — siap dihubungkan ke ad server.
            </p>
            <a
              href="mailto:ads@nalarsiber.id"
              className="mt-1 font-mono text-[0.65rem] text-brand underline-offset-4 hover:underline"
            >
              ads@nalarsiber.id
            </a>
          </div>
        )}
      </div>
    </aside>
  )
}
