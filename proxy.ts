import { NextResponse, type NextRequest } from "next/server"

import { ARTICLES } from "@/lib/articles"

/**
 * Semua slug artikel sudah diketahui saat build. Proxy menolak slug asing
 * sebelum halaman dirender, sehingga status 404 dikirim sejak awal (bukan
 * soft-404 dari streaming PPR).
 */
const ARTICLE_SLUGS = new Set(ARTICLES.map((article) => article.slug))

export function proxy(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean)

  if (
    segments.length === 2 &&
    segments[0] === "berita" &&
    !ARTICLE_SLUGS.has(segments[1])
  ) {
    return NextResponse.rewrite(new URL("/_not-found", request.url), {
      status: 404,
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/berita/:path*",
}
