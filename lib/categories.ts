import type { NewsCategory } from "@/lib/news"

export const CATEGORY_SLUGS: Record<NewsCategory, string> = {
  "Riset AI": "riset-ai",
  "Agen & Otomasi": "agen-otomasi",
  Teknologi: "teknologi",
  "Kebijakan AI": "kebijakan-ai",
  Startup: "startup",
  "Keamanan AI": "keamanan-ai",
}

export const CATEGORY_DESCRIPTIONS: Record<NewsCategory, string> = {
  "Riset AI": "Paper, benchmark, dan terobosan model terbaru.",
  "Agen & Otomasi": "Sistem otonom, workflow, dan orkestrasi AI.",
  Teknologi: "Infrastruktur, chip, dan platform pendukung AI.",
  "Kebijakan AI": "Regulasi, etika, dan tata kelola kecerdasan buatan.",
  Startup: "Pendanaan, produk, dan pertarungan pasar AI.",
  "Keamanan AI": "Alignment, red teaming, dan risiko model.",
}

export const CATEGORY_ACCENTS: Record<
  NewsCategory,
  { dot: string; text: string; panel: string }
> = {
  "Riset AI": {
    dot: "bg-cyan-500",
    text: "text-cyan-700 dark:text-cyan-300",
    panel: "from-cyan-500/15 via-cyan-500/5 to-transparent",
  },
  "Agen & Otomasi": {
    dot: "bg-violet-500",
    text: "text-violet-700 dark:text-violet-300",
    panel: "from-violet-500/15 via-violet-500/5 to-transparent",
  },
  Teknologi: {
    dot: "bg-emerald-500",
    text: "text-emerald-700 dark:text-emerald-300",
    panel: "from-emerald-500/15 via-emerald-500/5 to-transparent",
  },
  "Kebijakan AI": {
    dot: "bg-amber-500",
    text: "text-amber-700 dark:text-amber-300",
    panel: "from-amber-500/15 via-amber-500/5 to-transparent",
  },
  Startup: {
    dot: "bg-rose-500",
    text: "text-rose-700 dark:text-rose-300",
    panel: "from-rose-500/15 via-rose-500/5 to-transparent",
  },
  "Keamanan AI": {
    dot: "bg-orange-500",
    text: "text-orange-700 dark:text-orange-300",
    panel: "from-orange-500/15 via-orange-500/5 to-transparent",
  },
}
