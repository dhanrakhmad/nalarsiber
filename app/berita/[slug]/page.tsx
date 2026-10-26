import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  CalendarDays,
  ChevronRight,
  Clock,
  Flame,
  Tag,
} from "lucide-react"

import { AdSlot } from "@/components/ad-slot"
import { ArticleBody } from "@/components/article-body"
import { ArticleDisclosure } from "@/components/article-disclosure"
import { ArticleShare } from "@/components/article-share"
import { NewsCard } from "@/components/news-card"
import { ReadAlso } from "@/components/read-also"
import { ReadingProgress } from "@/components/reading-progress"
import { SectionHeading } from "@/components/section-heading"
import { TrendingTopics } from "@/components/trending-topics"
import {
  ARTICLES,
  TRENDING_TOPICS,
  getAdjacentArticles,
  getArticleBySlug,
  getArticleOgImage,
  getRelatedArticles,
} from "@/lib/articles"
import { CATEGORY_ACCENTS } from "@/lib/categories"
import { formatArticleDate, formatArticleTime } from "@/lib/format"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { cn } from "@/lib/utils"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Artikel tidak ditemukan",
      robots: { index: false, follow: false },
    }
  }

  const canonical = `/berita/${article.slug}`
  const ogImage = getArticleOgImage(article)

  return {
    title: article.title,
    description: article.summary,
    keywords: article.tags,
    authors: [{ name: article.author, url: SITE_URL }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "id_ID",
      url: canonical,
      siteName: SITE_NAME,
      title: article.title,
      description: article.summary,
      publishedTime: article.created_at,
      modifiedTime: article.created_at,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Ilustrasi berita: ${article.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const accent = CATEGORY_ACCENTS[article.category]
  const canonicalUrl = `${SITE_URL}/berita/${article.slug}`
  const related = getRelatedArticles(article)
  const { newer, older } = getAdjacentArticles(article)
  const latest = ARTICLES.filter((item) => item.id !== article.id).slice(0, 4)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: article.title,
    description: article.summary,
    image: [getArticleOgImage(article)],
    datePublished: article.created_at,
    dateModified: article.created_at,
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "id-ID",
    isAccessibleForFree: true,
    timeRequired: `PT${article.reading_minutes}M`,
    author: [
      {
        "@type": "Organization",
        name: article.author,
        url: SITE_URL,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `${SITE_URL}/#kategori`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  }

  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem]"
        >
          <div className="absolute -top-40 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px]" />
          <div className="absolute right-0 top-32 size-64 rounded-full bg-brand-2/10 blur-[110px]" />
          <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex min-w-0 items-center gap-1.5 font-mono text-[0.62rem] text-muted-foreground"
          >
            <Link
              href="/"
              className="shrink-0 transition-colors hover:text-foreground"
            >
              Beranda
            </Link>
            <ChevronRight className="size-3 shrink-0 opacity-50" aria-hidden="true" />
            <Link
              href="/#terkini"
              className="shrink-0 transition-colors hover:text-foreground"
            >
              Berita
            </Link>
            <ChevronRight className="size-3 shrink-0 opacity-50" aria-hidden="true" />
            <span className="truncate text-foreground/80" aria-current="page">
              {article.category}
            </span>
          </nav>

          <header className="mt-5 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/70 px-2.5 py-1 text-[0.65rem] font-medium",
                  accent.text
                )}
              >
                <span
                  className={cn("size-1.5 rounded-full", accent.dot)}
                  aria-hidden="true"
                />
                {article.category}
              </span>

              {article.is_breaking ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/90 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-white">
                  <Flame className="size-3" />
                  Breaking
                </span>
              ) : null}

              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-brand">
                <Bot className="size-3" />
                AI-assisted
              </span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.85rem]">
              {article.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              {article.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand/10 text-brand">
                  <Bot className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium leading-tight">
                    {article.author}
                  </p>
                  <p className="mt-0.5 font-mono text-[0.62rem] text-muted-foreground">
                    {article.bot_name}
                  </p>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-8 w-px bg-border sm:block"
              />

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" />
                  <time dateTime={article.created_at}>
                    {formatArticleDate(article.created_at)}
                  </time>
                </span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {formatArticleTime(article.created_at)}
                </span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1.5">
                  {article.reading_minutes} menit baca
                </span>
              </div>

              <ArticleShare
                url={canonicalUrl}
                title={article.title}
                className="ml-auto"
              />
            </div>
          </header>

          <figure className="mt-8 overflow-hidden rounded-3xl border border-border/70 bg-muted/40">
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src={article.thumbnail_url}
                alt={`Ilustrasi berita: ${article.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[0.62rem] font-medium text-white/90 backdrop-blur-md sm:bottom-4 sm:left-4">
                <span
                  className={cn("size-1.5 rounded-full", accent.dot)}
                  aria-hidden="true"
                />
                {article.category}
              </span>
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 px-4 py-3 text-[0.65rem] text-muted-foreground">
              <span>Foto ilustrasi: Unsplash</span>
              <span className="font-mono uppercase tracking-[0.12em]">
                {SITE_NAME} · AI Newsroom
              </span>
            </figcaption>
          </figure>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <ArticleBody
                content={article.content}
                inlineAd={
                  <AdSlot slotId="article-inline-1" format="inline" />
                }
              />

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border/60 pt-6">
                <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                  <Tag className="size-3.5" />
                  Tag
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 bg-card/60 px-2.5 py-1 text-[0.68rem] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ArticleDisclosure article={article} />

              <nav
                aria-label="Navigasi antar artikel"
                className="mt-8 grid gap-3 sm:grid-cols-2"
              >
                {older ? (
                  <Link
                    href={`/berita/${older.slug}`}
                    className="group rounded-2xl border border-border/70 bg-card/60 p-4 transition-colors hover:border-brand/35 hover:bg-card"
                  >
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      <ArrowLeft className="size-3" />
                      Artikel sebelumnya
                    </span>
                    <span className="mt-2 line-clamp-2 block font-heading text-sm font-medium leading-snug tracking-tight transition-colors group-hover:text-brand">
                      {older.title}
                    </span>
                  </Link>
                ) : (
                  <span aria-hidden="true" className="hidden sm:block" />
                )}

                {newer ? (
                  <Link
                    href={`/berita/${newer.slug}`}
                    className="group rounded-2xl border border-border/70 bg-card/60 p-4 text-right transition-colors hover:border-brand/35 hover:bg-card"
                  >
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                      Artikel berikutnya
                      <ArrowRight className="size-3" />
                    </span>
                    <span className="mt-2 line-clamp-2 block font-heading text-sm font-medium leading-snug tracking-tight transition-colors group-hover:text-brand">
                      {newer.title}
                    </span>
                  </Link>
                ) : null}
              </nav>
            </div>

            <aside
              aria-label="Artikel terkait dan topik populer"
              className="min-w-0 lg:col-span-4"
            >
              <div className="space-y-4 lg:sticky lg:top-20">
                <ReadAlso articles={latest} title="Terbaru" />
                <AdSlot slotId="article-sidebar-1" format="sidebar" />
                <TrendingTopics topics={TRENDING_TOPICS} />
              </div>
            </aside>
          </div>

          <section
            aria-label="Berita terkait"
            className="mt-14 border-t border-border/60 pb-16 pt-10 lg:pb-20"
          >
            <SectionHeading
              eyebrow="Lanjut baca"
              title="Berita terkait"
              description={`Artikel lain seputar ${article.category.toLowerCase()} dan perkembangan AI terbaru.`}
              action={{ label: "Semua berita", href: "/#terkini" }}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <NewsCard key={item.id} article={item} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
