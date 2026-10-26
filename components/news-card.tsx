import Image from "next/image"
import Link from "next/link"
import { Bot, Sparkles } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { CATEGORY_ACCENTS } from "@/lib/categories"
import { formatArticleDate } from "@/lib/format"
import type { Article } from "@/lib/news"
import { cn } from "@/lib/utils"

interface NewsCardProps {
  article: Article
  className?: string
  priority?: boolean
}

export function NewsCard({
  article,
  className,
  priority = false,
}: NewsCardProps) {
  const accent = CATEGORY_ACCENTS[article.category]

  return (
    <article className={cn("group h-full", className)}>
      <Card className="h-full gap-0 overflow-hidden border-0 bg-card/80 py-0 ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:ring-brand/35 hover:shadow-[0_24px_60px_-30px_var(--brand)]">
        <Link
          href={`/berita/${article.slug}`}
          className="flex h-full flex-col outline-none"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
            <Image
              src={article.thumbnail_url}
              alt={`Ilustrasi berita: ${article.title}`}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10" />

            <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.65rem] font-medium text-white shadow-sm backdrop-blur-md">
                <span
                  className={cn("size-1.5 rounded-full", accent.dot)}
                  aria-hidden="true"
                />
                {article.category}
              </span>

              {article.is_breaking ? (
                <span className="rounded-full bg-red-500/90 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white shadow-sm">
                  Breaking
                </span>
              ) : null}
            </div>

            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-[0.6rem] font-medium text-white/90 backdrop-blur-md">
              <Sparkles className="size-3 text-brand" />
              Ditulis AI Agent
            </span>

            <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/45 px-2 py-1 font-mono text-[0.6rem] text-white/80 backdrop-blur-md">
              {article.reading_minutes} mnt
            </span>
          </div>

          <CardContent className="flex flex-1 flex-col gap-2.5 px-4 pb-4 pt-4">
            <h3 className="line-clamp-2 font-heading text-[1.05rem] font-semibold leading-snug tracking-tight text-balance transition-colors duration-200 group-hover:text-brand">
              {article.title}
            </h3>

            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {article.summary}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/60 pt-3 text-[0.7rem] text-muted-foreground">
              <span className="inline-flex min-w-0 items-center gap-1.5">
                <Bot className="size-3.5 shrink-0 text-brand" />
                <span className="truncate font-mono text-[0.68rem]">
                  {article.bot_name}
                </span>
              </span>
              <time
                dateTime={article.created_at}
                className="shrink-0 tabular-nums"
              >
                {formatArticleDate(article.created_at)}
              </time>
            </div>
          </CardContent>
        </Link>
      </Card>
    </article>
  )
}
