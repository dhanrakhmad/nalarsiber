import Link from "next/link"
import { ArrowUpRight, TrendingUp } from "lucide-react"

import { Card } from "@/components/ui/card"
import { CATEGORY_ACCENTS } from "@/lib/categories"
import type { TrendingTopic } from "@/lib/news"
import { cn } from "@/lib/utils"

interface TrendingTopicsProps {
  topics: TrendingTopic[]
  className?: string
}

export function TrendingTopics({ topics, className }: TrendingTopicsProps) {
  return (
    <Card
      className={cn(
        "gap-0 overflow-hidden border-0 bg-card/80 py-0 ring-1 ring-border/70",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3.5">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
            <TrendingUp className="size-3.5" />
          </span>
          <h2 className="font-heading text-sm font-semibold tracking-tight">
            Topik Populer
          </h2>
        </div>
        <span className="rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground">
          7 hari
        </span>
      </div>

      <ul className="divide-y divide-border/50 p-1.5">
        {topics.map((topic, index) => {
          const accent = CATEGORY_ACCENTS[topic.category]

          return (
            <li key={topic.slug}>
              <Link
                href="/#kategori"
                className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-muted/60"
              >
                <span className="w-4 shrink-0 font-mono text-[0.62rem] text-muted-foreground/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-[0.83rem] font-medium text-foreground">
                    <span
                      className={cn("size-1.5 rounded-full", accent.dot)}
                      aria-hidden="true"
                    />
                    <span className="truncate">{topic.category}</span>
                  </span>
                  <span className="mt-0.5 block truncate text-[0.68rem] text-muted-foreground">
                    {topic.total} artikel · {topic.change}
                  </span>
                </span>

                <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="border-t border-border/60 px-3 py-2">
        <Link
          href="/#kategori"
          className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[0.7rem] text-muted-foreground transition-colors hover:text-foreground"
        >
          Jelajahi semua topik
          <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </Card>
  )
}
