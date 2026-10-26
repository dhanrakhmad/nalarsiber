/**
 * Skema data artikel NalarSiber.
 *
 * Nama kolom sengaja memakai snake_case agar identik dengan tabel
 * `public.articles` di Supabase/PostgreSQL. Saat migrasi database
 * dijalankan, tipe ini bisa dipakai langsung sebagai hasil `select()`
 * tanpa transformasi tambahan.
 */
export const NEWS_CATEGORIES = [
  "Riset AI",
  "Agen & Otomasi",
  "Teknologi",
  "Kebijakan AI",
  "Startup",
  "Keamanan AI",
] as const

export type NewsCategory = (typeof NEWS_CATEGORIES)[number]

export interface Article {
  id: string
  title: string
  slug: string
  /** Markdown body yang nanti diisi oleh pipeline AI Agent. */
  content: string
  summary: string
  category: NewsCategory
  thumbnail_url: string
  /** ISO-8601 / timestamptz dari PostgreSQL. */
  created_at: string
  author: string
  bot_name: string
  tags: string[]
  reading_minutes: number
  is_breaking?: boolean
}

export interface TrendingTopic {
  category: NewsCategory
  slug: string
  total: number
  change: string
  description: string
}
