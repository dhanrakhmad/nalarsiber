"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import {
  ArrowUpRight,
  Command,
  Cpu,
  Flame,
  Info,
  Newspaper,
  Search,
  Sparkles,
  Tags,
  X,
  type LucideIcon,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface QuickLink {
  title: string
  description: string
  href: string
  icon: LucideIcon
  keywords: string
  tag: string
}

const QUICK_LINKS: QuickLink[] = [
  {
    title: "Headline hari ini",
    description: "Berita AI paling penting dalam 24 jam terakhir",
    href: "/#headline",
    icon: Flame,
    keywords: "headline utama terhangat breaking hari ini",
    tag: "Sorotan",
  },
  {
    title: "Berita terbaru",
    description: "Newsfeed yang diperbarui otomatis oleh AI Agent",
    href: "/#terkini",
    icon: Newspaper,
    keywords: "berita terbaru newsfeed update terkini",
    tag: "Newsfeed",
  },
  {
    title: "Topik populer",
    description: "Riset AI, agen otonom, dan infrastruktur",
    href: "/#kategori",
    icon: Tags,
    keywords: "topik kategori populer riset agen otomasi teknologi",
    tag: "Topik",
  },
  {
    title: "Tentang NalarSiber",
    description: "Cara kerja newsroom AI kami",
    href: "/#tentang",
    icon: Info,
    keywords: "tentang redaksi cara kerja ai agent transparan",
    tag: "Redaksi",
  },
  {
    title: "Riset AI",
    description: "Paper, benchmark, dan arsitektur model terbaru",
    href: "/#kategori",
    icon: Sparkles,
    keywords: "riset paper benchmark model llm penelitian",
    tag: "Kategori",
  },
  {
    title: "Agen & Otomasi",
    description: "Workflow otonom dan orkestrasi multi-agent",
    href: "/#kategori",
    icon: Command,
    keywords: "agen agent otomasi workflow orkestrasi mcp",
    tag: "Kategori",
  },
  {
    title: "Teknologi",
    description: "Chip, infrastruktur, dan platform pendukung AI",
    href: "/#kategori",
    icon: Cpu,
    keywords: "teknologi chip hardware gpu infrastruktur data center",
    tag: "Kategori",
  },
]

const POPULAR_TOPICS = ["Riset AI", "Agen & Otomasi", "Teknologi"]

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const close = useCallback(() => {
    setQuery("")
    onClose()
  }, [onClose])

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase()

    if (!needle) {
      return QUICK_LINKS
    }

    return QUICK_LINKS.filter((link) =>
      `${link.title} ${link.description} ${link.keywords}`
        .toLowerCase()
        .includes(needle)
    )
  }, [query])

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 40)

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(focusTimer)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, close])

  if (!open) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[10vh] sm:pt-[14vh]">
      <div
        className="fixed inset-0 bg-background/75 backdrop-blur-md"
        onClick={close}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pencarian cepat NalarSiber"
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/80",
          "bg-card/95 shadow-2xl shadow-black/20 ring-1 ring-foreground/5 backdrop-blur-xl",
          "animate-in fade-in-0 zoom-in-95 duration-200"
        )}
      >
        <div className="flex items-center gap-3 border-b border-border/70 px-4">
          <Search className="size-5 shrink-0 text-muted-foreground" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari berita, topik, atau rubrik..."
            aria-label="Kata kunci pencarian"
            className="h-14 flex-1 border-0 bg-transparent px-0 text-base shadow-none outline-none focus-visible:ring-0 dark:bg-transparent"
          />
          <button
            type="button"
            onClick={close}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Tutup pencarian"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          <p className="px-3 pb-1.5 pt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {query.trim() ? "Hasil pencarian" : "Akses cepat"}
          </p>

          {results.length > 0 ? (
            <ul className="space-y-0.5">
              {results.map((link) => {
                const Icon = link.icon

                return (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted focus-visible:bg-muted"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border/70 bg-background/60 text-muted-foreground transition-colors group-hover:border-brand/30 group-hover:text-brand">
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-sm font-medium text-foreground">
                            {link.title}
                          </span>
                          <span className="hidden shrink-0 rounded-full border border-border/70 px-1.5 py-px text-[0.6rem] text-muted-foreground sm:inline">
                            {link.tag}
                          </span>
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                          {link.description}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:text-brand" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="px-3 py-10 text-center">
              <Search className="mx-auto size-6 text-muted-foreground/50" />
              <p className="mt-3 text-sm font-medium">
                Tidak ada hasil untuk “{query.trim()}”
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Coba kata kunci seperti “riset”, “agen”, atau “teknologi”.
              </p>
            </div>
          )}

          {!query.trim() && (
            <div className="mt-2 border-t border-border/60 px-3 pb-2 pt-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Topik populer
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {POPULAR_TOPICS.map((topic) => (
                  <Link
                    key={topic}
                    href="/#kategori"
                    onClick={close}
                    className="rounded-full border border-border/70 bg-background/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border/70 bg-muted/30 px-4 py-2 text-[0.65rem] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="size-3 text-brand" />
            NalarSiber Quick Search
          </span>
          <span className="inline-flex items-center gap-1">
            <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[0.6rem]">
              Esc
            </kbd>
            untuk menutup
          </span>
        </div>
      </div>
    </div>,
    document.body
  )
}
