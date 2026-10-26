import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Bot, Clock3, Flame } from "lucide-react"

import { formatArticleDate, formatArticleTime } from "@/lib/format"
import type { Article } from "@/lib/news"
import { cn } from "@/lib/utils"

interface FeaturedStoryProps {
  article: Article
  className?: string
}

export function FeaturedStory({ article, className }: FeaturedStoryProps) {
  return (
    <article className={cn("group relative h-full", className)}>
      <Link
        href={`/berita/${article.slug}`}
        className="relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-brand/25 via-card to-brand-2/20 p-6 outline-none sm:min-h-[31rem] sm:p-8 lg:min-h-[35rem] lg:p-10"
      >
        <Image
          src={article.thumbnail_url}
          alt={`Ilustrasi headline: ${article.title}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-red-500/85 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            <Flame className="size-3" />
            Headline
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[0.6rem] font-medium text-white/80 backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            AI newsroom live
          </span>
        </div>

        <div className="relative z-10 mt-auto max-w-3xl pt-10">
          <div className="flex flex-wrap items-center gap-2 text-[0.65rem] text-white/75">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-medium backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2.5 py-1 backdrop-blur-md">
              <Clock3 className="size-3" />
              {formatArticleDate(article.created_at)} ·{" "}
              {formatArticleTime(article.created_at)}
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.06] tracking-tight text-balance text-white sm:text-4xl lg:text-[3.05rem]">
            {article.title}
          </h1>

          <p className="mt-4 line-clamp-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
            {article.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <Bot className="size-3.5 text-brand" />
              <span className="font-mono">{article.bot_name}</span>
            </span>
            <span className="hidden size-1 rounded-full bg-white/30 sm:block" />
            <span>{article.reading_minutes} menit baca</span>
            <span className="hidden size-1 rounded-full bg-white/30 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
              Terverifikasi redaksi
            </span>
          </div>

          <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black transition-all duration-300 group-hover:gap-3 group-hover:bg-brand group-hover:text-brand-foreground">
            Baca liputan lengkap
            <ArrowRight className="size-3.5" />
          </span>
        </div>
      </Link>
    </article>
  )
}
