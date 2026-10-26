"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrainCircuit, Menu, Search, X } from "lucide-react"

import { SearchDialog } from "@/components/search-dialog"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Terkini", href: "/#terkini" },
  { label: "Riset AI", href: "/#terkini" },
  { label: "Agen & Otomasi", href: "/#terkini" },
  { label: "Teknologi", href: "/#terkini" },
  { label: "Tentang Kami", href: "/#tentang" },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeSearch = useCallback(() => setSearchOpen(false), [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setSearchOpen((current) => !current)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  function openSearch() {
    setMenuOpen(false)
    setSearchOpen(true)
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "border-border/80 bg-background/85 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-border/40 bg-background/60 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="NalarSiber — beranda"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-2 text-brand-foreground shadow-lg shadow-brand/20 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
              <BrainCircuit className="relative size-5" strokeWidth={2.1} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[1.05rem] font-semibold tracking-tight text-foreground">
                Nalar<span className="text-gradient-brand">Siber</span>
              </span>
              <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                AI Newsroom
              </span>
            </span>
          </Link>

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-0.5 md:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === "/" && item.label === "Terkini"

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    "after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-brand after:to-brand-2 after:transition-transform after:duration-300 hover:after:scale-x-100",
                    isActive
                      ? "text-foreground after:scale-x-100"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-1.5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={openSearch}
              className="hidden h-9 gap-2 rounded-full border-border/70 bg-background/40 pl-3 pr-1.5 text-muted-foreground shadow-none transition-colors hover:border-brand/30 hover:bg-muted/60 hover:text-foreground md:inline-flex"
            >
              <Search className="size-3.5" />
              <span className="text-xs">Cari</span>
              <kbd className="ml-1 rounded border border-border/70 bg-muted/60 px-1.5 py-0.5 font-mono text-[0.6rem] font-medium text-muted-foreground/80">
                ⌘K
              </kbd>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={openSearch}
              aria-label="Buka pencarian cepat"
              className="rounded-full text-muted-foreground hover:bg-muted/70 hover:text-foreground md:hidden"
            >
              <Search className="size-4.5" />
            </Button>

            <ThemeToggle />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="rounded-full text-muted-foreground hover:bg-muted/70 hover:text-foreground md:hidden"
            >
              {menuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl animate-in fade-in-0 slide-in-from-top-2 duration-200 md:hidden"
          >
            <nav
              aria-label="Navigasi seluler"
              className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6"
            >
              <ul className="grid gap-0.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                    >
                      {item.label}
                      <span className="size-1.5 rounded-full bg-border" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-3 grid gap-2 border-t border-border/60 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={openSearch}
                  className="h-10 w-full justify-between rounded-xl border-border/70 bg-background/40 px-3 text-muted-foreground"
                >
                  <span className="inline-flex items-center gap-2">
                    <Search className="size-4" />
                    Cari berita
                  </span>
                  <kbd className="rounded border border-border/70 bg-muted/60 px-1.5 py-0.5 font-mono text-[0.6rem]">
                    ⌘K
                  </kbd>
                </Button>
                <p className="flex items-center gap-2 px-1 pt-1 text-xs text-muted-foreground">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  AI newsroom aktif · 128 sumber dipantau
                </p>
              </div>
            </nav>
          </div>
        )}
      </header>

      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </>
  )
}
