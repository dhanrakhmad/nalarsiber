import { Activity, Clock3, Database, Radio, Target } from "lucide-react"

import { cn } from "@/lib/utils"

const STATS = [
  { label: "Sumber", value: "128", icon: Radio },
  { label: "Artikel / 24j", value: "312", icon: Database },
  { label: "Akurasi", value: "97,4%", icon: Target },
  { label: "Latensi", value: "4 mnt", icon: Clock3 },
] as const

const SIGNAL_BARS = [
  38, 62, 45, 78, 56, 88, 67, 42, 72, 58, 92, 48, 64, 80, 52, 70, 40, 86,
  60, 74, 50, 82, 46, 68,
]

interface AgentPulseProps {
  className?: string
}

export function AgentPulse({ className }: AgentPulseProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-brand/10 via-card to-brand-2/10 p-4",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <h2 className="font-heading text-xs font-semibold tracking-tight">
            Agent Pulse
          </h2>
        </div>
        <span className="rounded-full border border-border/70 bg-background/50 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted-foreground">
          live
        </span>
      </div>

      <div className="relative mt-3 grid grid-cols-2 gap-2">
        {STATS.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className="rounded-xl border border-border/60 bg-background/40 p-2.5"
            >
              <span className="flex items-center gap-1 text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                <Icon className="size-3" />
                {stat.label}
              </span>
              <p className="mt-1 font-heading text-base font-semibold tabular-nums tracking-tight">
                {stat.value}
              </p>
            </div>
          )
        })}
      </div>

      <div className="relative mt-3">
        <div className="flex items-center justify-between text-[0.55rem] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Activity className="size-3 text-brand" />
            Aktivitas agent
          </span>
          <span className="font-mono">60 mnt terakhir</span>
        </div>
        <div
          className="mt-1.5 flex h-9 items-end gap-[3px]"
          aria-hidden="true"
        >
          {SIGNAL_BARS.map((height, index) => (
            <span
              key={index}
              className="w-full rounded-full bg-gradient-to-t from-brand/25 to-brand/80 motion-safe:animate-pulse"
              style={{
                height: `${height}%`,
                animationDelay: `${(index % 8) * 120}ms`,
                animationDuration: "2.8s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
