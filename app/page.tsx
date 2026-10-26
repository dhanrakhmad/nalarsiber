import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Cpu,
  Flame,
  Radio,
  Rss,
  ShieldCheck,
  Workflow,
} from "lucide-react"

import { AdSlot } from "@/components/ad-slot"
import { AgentPulse } from "@/components/agent-pulse"
import { FeaturedStory } from "@/components/featured-story"
import { NewsCard } from "@/components/news-card"
import { SectionHeading } from "@/components/section-heading"
import { TrendingTopics } from "@/components/trending-topics"
import { Button, buttonVariants } from "@/components/ui/button"
import { ARTICLES, TRENDING_TOPICS } from "@/lib/articles"
import { CATEGORY_ACCENTS } from "@/lib/categories"
import { formatArticleDate } from "@/lib/format"
import type { Article } from "@/lib/news"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

const featured = ARTICLES[0]
const spotlight = ARTICLES.slice(1, 4)
const latest = ARTICLES.slice(4)

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Headline ${SITE_NAME}`,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: ARTICLES.length,
  itemListElement: ARTICLES.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "NewsArticle",
      headline: article.title,
      description: article.summary,
      datePublished: article.created_at,
      articleSection: article.category,
      url: `${SITE_URL}/berita/${article.slug}`,
      image: [article.thumbnail_url],
      author: [{ "@type": "Organization", name: article.author }],
    },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[44rem]"
        >
          <div className="absolute -top-48 left-1/2 h-[32rem] w-[54rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]" />
          <div className="absolute right-0 top-40 size-72 rounded-full bg-brand-2/10 blur-[110px]" />
          <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/50 py-3 font-mono text-[0.65rem] text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
                <Radio className="size-3" />
                Newsroom live
              </span>
              <span className="normal-case">
                128 sumber dipantau · pembaruan tiap 5 menit
              </span>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span>JAKARTA</span>
              <span className="text-border">/</span>
              <time dateTime={featured.created_at}>
                {formatArticleDate(featured.created_at)}
              </time>
              <span className="text-border">/</span>
              <span className="text-brand">AI EDITION</span>
            </div>
          </div>

          <section
            id="headline"
            aria-label="Headline hari ini"
            className="scroll-mt-24 pt-6 lg:pt-8"
          >
            <div className="grid gap-5 lg:grid-cols-12">
              <FeaturedStory
                article={featured}
                className="lg:col-span-8"
              />

              <aside className="flex flex-col gap-4 lg:col-span-4">
                <div className="rounded-2xl border border-border/70 bg-card/70 p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-2 px-1 pb-1">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-lg bg-orange-500/10 text-orange-600 ring-1 ring-orange-500/20 dark:text-orange-400">
                        <Flame className="size-3.5" />
                      </span>
                      <h2 className="font-heading text-sm font-semibold tracking-tight">
                        Sorotan Hari Ini
                      </h2>
                    </div>
                    <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
                      3 teratas
                    </span>
                  </div>

                  <ol className="mt-1 divide-y divide-border/50">
                    {spotlight.map((article, index) => (
                      <SpotlightItem
                        key={article.id}
                        article={article}
                        index={index}
                      />
                    ))}
                  </ol>
                </div>

                <AgentPulse />
              </aside>
            </div>
          </section>

          <AdSlot
            slotId="home-leaderboard"
            format="leaderboard"
            className="mt-6"
          />

          <section
            id="terkini"
            aria-label="Berita terbaru"
            className="scroll-mt-24 py-12 lg:py-16"
          >
            <SectionHeading
              eyebrow="Newsfeed"
              title="Berita terbaru"
              description="Kurasi otomatis dari pipeline AI Agent, diverifikasi redaksi sebelum tayang."
              action={{ label: "Arsip lengkap", href: "/#terkini" }}
            />

            <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:hidden [&::-webkit-scrollbar]:hidden">
              {TRENDING_TOPICS.map((topic) => (
                <Link
                  key={topic.slug}
                  href="/#kategori"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                >
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      CATEGORY_ACCENTS[topic.category].dot
                    )}
                    aria-hidden="true"
                  />
                  {topic.category}
                  <span className="font-mono text-[0.6rem] text-muted-foreground/60">
                    {topic.total}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {latest.slice(0, 3).map((article, index) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      priority={index === 0}
                    />
                  ))}

                  <AdSlot
                    slotId="home-inline-1"
                    format="inline"
                    className="sm:col-span-2 xl:col-span-3"
                  />

                  {latest.slice(3).map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>

                <div className="mt-7 flex justify-center">
                  <Button
                    variant="outline"
                    nativeButton={false}
                    className="h-10 rounded-full border-border/70 bg-card/50 px-6 text-xs font-medium"
                    render={<Link href="/#terkini" />}
                  >
                    Muat lebih banyak
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>

              <aside
                aria-label="Topik populer dan informasi redaksi"
                className="lg:col-span-4 xl:col-span-3"
              >
                <div className="space-y-4 lg:sticky lg:top-20">
                  <div id="kategori" className="scroll-mt-24">
                    <TrendingTopics topics={TRENDING_TOPICS} />
                  </div>

                  <AdSlot slotId="home-sidebar-1" format="sidebar" />

                  <div className="rounded-2xl border border-border/70 bg-card/70 p-4">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                        <Workflow className="size-3.5" />
                      </span>
                      <h3 className="font-heading text-xs font-semibold tracking-tight">
                        Di balik layar
                      </h3>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      Setiap artikel melewati filter sumber, penyusunan draf
                      oleh AI Agent, lalu verifikasi redaksi manusia sebelum
                      dipublikasikan.
                    </p>
                    <dl className="mt-3 grid grid-cols-2 gap-2 text-[0.65rem]">
                      <div className="rounded-lg border border-border/60 bg-background/40 p-2">
                        <dt className="text-muted-foreground">Model</dt>
                        <dd className="mt-0.5 font-mono font-medium">
                          Nalar-1.5
                        </dd>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-background/40 p-2">
                        <dt className="text-muted-foreground">Sumber</dt>
                        <dd className="mt-0.5 font-mono font-medium">
                          128 feed
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section
            id="tentang"
            aria-label="Tentang NalarSiber"
            className="scroll-mt-24 pb-16 lg:pb-20"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-6 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/10 blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-gradient-to-r from-brand to-brand-2" />
                    <span className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand">
                      Redaksi algoritmik
                    </span>
                  </div>
                  <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                    Bukan agregator. Newsroom yang bernalar.
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    NalarSiber menggabungkan kecepatan agen AI dengan disiplin
                    verifikasi manusia. Fokus kami bukan mengejar klik, tetapi
                    menjelaskan mengapa sebuah terobosan penting.
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Setiap klaim wajib memiliki tautan sumber.",
                      "Label AI Agent ditampilkan transparan di setiap artikel.",
                      "Koreksi diterbitkan terbuka setelah verifikasi.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                          <Check className="size-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href="/#terkini"
                      className={cn(
                        buttonVariants({ size: "sm" }),
                        "h-9 rounded-full px-4 text-xs"
                      )}
                    >
                      Jelajahi berita
                      <ArrowRight className="size-3.5" />
                    </Link>
                    <a
                      href="mailto:redaksi@nalarsiber.id"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "h-9 rounded-full border-border/70 px-4 text-xs"
                      )}
                    >
                      Hubungi redaksi
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                </div>

                <ol className="grid gap-3">
                  {[
                    {
                      step: "01",
                      title: "Sumber terbuka",
                      description:
                        "RSS, X, Reddit, arXiv, dan siaran pers dipantau 24/7 oleh kolektor.",
                      icon: Rss,
                    },
                    {
                      step: "02",
                      title: "AI Agent menulis",
                      description:
                        "Filter duplikasi, rangkum, susun draf, dan lampirkan sitasi secara otomatis.",
                      icon: Cpu,
                    },
                    {
                      step: "03",
                      title: "Kurasi manusia",
                      description:
                        "Editor memverifikasi klaim, konteks, dan nada sebelum artikel tayang.",
                      icon: ShieldCheck,
                    },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <li
                        key={item.step}
                        className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-background/40 p-3.5 transition-colors hover:border-brand/30 hover:bg-background/60"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border/60 bg-card text-brand">
                          <Icon className="size-4.5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="flex items-center gap-2">
                            <span className="font-mono text-[0.6rem] text-muted-foreground/60">
                              {item.step}
                            </span>
                            <span className="text-sm font-medium">
                              {item.title}
                            </span>
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-muted-foreground/30 transition-colors group-hover:text-brand" />
                      </li>
                    )
                  })}
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

interface SpotlightItemProps {
  article: Article
  index: number
}

function SpotlightItem({ article, index }: SpotlightItemProps) {
  const accent = CATEGORY_ACCENTS[article.category]

  return (
    <li>
      <Link
        href={`/berita/${article.slug}`}
        className="group flex gap-3 rounded-xl px-1.5 py-3 transition-colors hover:bg-muted/40"
      >
        <span className="pt-0.5 font-mono text-[0.62rem] text-muted-foreground/50">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1.5 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-muted-foreground">
            <span
              className={cn("size-1.5 rounded-full", accent.dot)}
              aria-hidden="true"
            />
            {article.category}
          </span>
          <h3 className="mt-1 line-clamp-2 font-heading text-[0.83rem] font-medium leading-snug tracking-tight transition-colors group-hover:text-brand">
            {article.title}
          </h3>
          <span className="mt-1.5 flex items-center gap-1.5 text-[0.62rem] text-muted-foreground">
            <Bot className="size-3 text-brand/70" />
            <span className="font-mono">{article.bot_name}</span>
            <span className="text-border">·</span>
            <time dateTime={article.created_at}>
              {formatArticleDate(article.created_at)}
            </time>
          </span>
        </span>
      </Link>
    </li>
  )
}
