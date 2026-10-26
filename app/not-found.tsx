import Link from "next/link"
import { ArrowLeft, FileSearch, Sparkles } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-40 mask-fade-b"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[110px]"
      />

      <div className="relative mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <span className="grid size-12 place-items-center rounded-2xl border border-border/70 bg-card/70 text-brand shadow-sm">
          <FileSearch className="size-5" />
        </span>

        <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-brand">
          404 · Halaman tidak ditemukan
        </p>
        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Artikel ini belum sampai ke meja redaksi.
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Tautan yang kamu buka mungkin sudah dipindahkan atau artikelnya masih
          dalam proses kurasi. Kembali ke headline untuk membaca berita terbaru.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "sm" }),
              "h-9 gap-1.5 rounded-full px-4 text-xs"
            )}
          >
            <ArrowLeft className="size-3.5" />
            Kembali ke beranda
          </Link>
          <Link
            href="/#terkini"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "h-9 gap-1.5 rounded-full border-border/70 px-4 text-xs"
            )}
          >
            <Sparkles className="size-3.5 text-brand" />
            Lihat berita terbaru
          </Link>
        </div>
      </div>
    </div>
  )
}
