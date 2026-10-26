import { Bot, Check, ShieldCheck, Sparkles } from "lucide-react"

import type { Article } from "@/lib/news"

interface ArticleDisclosureProps {
  article: Article
}

/**
 * Kotak transparansi: menjelaskan peran AI Agent dan verifikasi redaksi.
 * Nilai model masih statis sampai metadata pipeline tersedia di database.
 */
export function ArticleDisclosure({ article }: ArticleDisclosureProps) {
  return (
    <aside
      aria-label="Transparansi proses penulisan artikel"
      className="mt-10 overflow-hidden rounded-2xl border border-brand/20 bg-brand/[0.04]"
    >
      <div className="flex items-center gap-2 border-b border-brand/15 px-4 py-3">
        <span className="grid size-7 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
          <Sparkles className="size-3.5" />
        </span>
        <h2 className="font-heading text-sm font-semibold tracking-tight">
          Transparansi AI
        </h2>
        <span className="ml-auto font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
          AI-assisted
        </span>
      </div>

      <div className="space-y-3 px-4 py-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Draf artikel ini disusun oleh{" "}
          <span className="font-mono text-xs text-foreground">
            {article.bot_name}
          </span>{" "}
          dari sumber terbuka, lalu diverifikasi editor manusia sebelum tayang.
          Klaim utama wajib memiliki tautan sumber.
        </p>

        <dl className="grid gap-2 text-[0.7rem] sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-2.5 py-2">
            <Bot className="size-3.5 shrink-0 text-brand" />
            <div className="min-w-0">
              <dt className="text-muted-foreground">Penulis draf</dt>
              <dd className="truncate font-mono font-medium">
                {article.bot_name}
              </dd>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-2.5 py-2">
            <Check className="size-3.5 shrink-0 text-emerald-500" />
            <div className="min-w-0">
              <dt className="text-muted-foreground">Verifikasi</dt>
              <dd className="truncate font-medium">{article.author}</dd>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-2.5 py-2">
            <ShieldCheck className="size-3.5 shrink-0 text-brand" />
            <div className="min-w-0">
              <dt className="text-muted-foreground">Model</dt>
              <dd className="truncate font-mono font-medium">Nalar-1.5</dd>
            </div>
          </div>
        </dl>
      </div>
    </aside>
  )
}
