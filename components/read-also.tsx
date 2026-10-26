import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { CATEGORY_ACCENTS } from "@/lib/categories"
import { formatArticleDate } from "@/lib/format"
import type { Article } from "@/lib/news"
import { cn } from "@/lib/utils"

interface ReadAlsoProps {
  articles: Article[]
  title?: string
  className?: string
}

/** Daftar artikel ringkas untuk sidebar halaman detail. */
export function ReadAlso({
  articles,
  title = "Baca juga",
  className,
}: ReadAlsoProps) {
  if (articles.length === 0) return null

  return (
    <section
      aria-label={title}
      className={cn(
        "overflow-hidden rounded-2xl border border-border/70 bg-card/80",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3.5">
        <h2 className="font-heading text-sm font-semibold tracking-tight">
          {title}
        </h2>
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground">
          {articles.length} artikel
        </span>
      </div>

      <ol className="divide-y divide-border/50 p-1.5">
        {articles.map((article) => {
          const accent = CATEGORY_ACCENTS[article.category]

          return (
            <li key={article.id}>
              <Link
                href={`/berita/${article.slug}`}
                className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-muted/50"
              >
                <span className="relative block size-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={article.thumbnail_url}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-[0.56rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                    <span
                      className={cn("size-1.5 rounded-full", accent.dot)}
                      aria-hidden="true"
                    />
                    {article.category}
                  </span>
                  <h3 className="mt-1 line-clamp-2 font-heading text-[0.82rem] font-medium leading-snug tracking-tight transition-colors group-hover:text-brand">
                    {article.title}
                  </h3>
                  <span className="mt-1 flex items-center justify-between gap-2 text-[0.6rem] text-muted-foreground">
                    <time dateTime={article.created_at}>
                      {formatArticleDate(article.created_at)}
                    </time>
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
