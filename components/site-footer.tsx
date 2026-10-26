import Link from "next/link"
import { ArrowUpRight, BrainCircuit, Bot, ShieldCheck } from "lucide-react"

const RUBRIK_LINKS = [
  { label: "Terkini", href: "/#terkini" },
  { label: "Riset AI", href: "/#kategori" },
  { label: "Agen & Otomasi", href: "/#kategori" },
  { label: "Teknologi", href: "/#kategori" },
]

const NEWSROOM_LINKS = [
  { label: "Tentang Kami", href: "/#tentang" },
  { label: "Cara Kerja AI", href: "/#tentang" },
  { label: "Pedoman Etika", href: "/#tentang" },
  { label: "Kontak Redaksi", href: "mailto:redaksi@nalarsiber.id" },
]

const ECOSYSTEM_LINKS = [
  { label: "Next.js", href: "https://nextjs.org" },
  { label: "Supabase", href: "https://supabase.com" },
  { label: "Vercel", href: "https://vercel.com" },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t border-border/60 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="NalarSiber — beranda"
              className="inline-flex items-center gap-2.5"
            >
              <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand to-brand-2 text-brand-foreground ring-1 ring-white/15">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
                <BrainCircuit className="relative size-5" strokeWidth={2.1} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-[1.05rem] font-semibold tracking-tight">
                  Nalar<span className="text-gradient-brand">Siber</span>
                </span>
                <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  AI Newsroom
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Portal berita AI yang memantau sumber terbuka, menyaring
              kebisingan, dan menyajikan analisis teknologi yang jernih —
              ditulis oleh agen AI, diawasi oleh manusia.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[0.65rem] font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                Pipeline aktif
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/40 px-2.5 py-1 text-[0.65rem] text-muted-foreground">
                <ShieldCheck className="size-3" />
                Disunting manusia
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <FooterColumn title="Rubrik" links={RUBRIK_LINKS} />
            <FooterColumn title="Redaksi" links={NEWSROOM_LINKS} />
            <FooterColumn
              title="Ekosistem"
              links={ECOSYSTEM_LINKS}
              external
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/60 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 NalarSiber. Seluruh hak cipta dilindungi.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Bot className="size-3.5 text-brand" />
            Ditenagai AI Agent · Kurasi redaksi manusia
          </p>
        </div>
      </div>
    </footer>
  )
}

interface FooterColumnProps {
  title: string
  links: { label: string; href: string }[]
  external?: boolean
}

function FooterColumn({ title, links, external }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h3>
      <ul className="mt-3 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="size-3 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                <span className="sr-only">(buka di tab baru)</span>
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
