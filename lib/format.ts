const JAKARTA_TIME_ZONE = "Asia/Jakarta"

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: JAKARTA_TIME_ZONE,
})

const timeFormatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: JAKARTA_TIME_ZONE,
})

const numberFormatter = new Intl.NumberFormat("id-ID")

/**
 * Format deterministik (zona waktu Asia/Jakarta) agar hasil render server
 * dan client selalu identik — aman untuk ISR/SSR tanpa hydration mismatch.
 */
export function formatArticleDate(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate))
}

export function formatArticleTime(isoDate: string): string {
  return `${timeFormatter.format(new Date(isoDate))} WIB`
}

export function formatArticleDateTime(isoDate: string): string {
  return `${formatArticleDate(isoDate)} · ${formatArticleTime(isoDate)}`
}

export function formatCount(value: number): string {
  return numberFormatter.format(value)
}
