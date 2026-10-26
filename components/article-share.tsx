"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Link2, MessageCircle } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ArticleShareProps {
  url: string
  title: string
  className?: string
}

function copyWithFallback(value: string) {
  const field = document.createElement("textarea")
  field.value = value
  field.setAttribute("readonly", "")
  field.style.position = "fixed"
  field.style.opacity = "0"
  document.body.appendChild(field)
  field.select()
  document.execCommand("copy")
  document.body.removeChild(field)
}

export function ArticleShare({ url, title, className }: ArticleShareProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => window.clearTimeout(timer.current)
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      copyWithFallback(url)
    }

    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(title)

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <span className="mr-0.5 hidden font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
        Bagikan
      </span>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Tautan artikel tersalin" : "Salin tautan artikel"}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "rounded-full border-border/70 text-muted-foreground transition-colors hover:text-foreground",
          copied &&
            "border-emerald-500/40 text-emerald-600 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-400"
        )}
      >
        {copied ? (
          <Check className="size-3.5" strokeWidth={2.5} />
        ) : (
          <Link2 className="size-3.5" />
        )}
      </button>

      <a
        href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan ke WhatsApp (tab baru)"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "rounded-full border-border/70 text-muted-foreground transition-colors hover:text-foreground"
        )}
      >
        <MessageCircle className="size-3.5" />
      </a>

      <a
        href={`https://x.com/intent/post?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Bagikan ke X (tab baru)"
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "rounded-full border-border/70 text-muted-foreground transition-colors hover:text-foreground"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="size-3"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <span aria-live="polite" className="sr-only">
        {copied ? "Tautan artikel disalin ke papan klip." : ""}
      </span>
    </div>
  )
}
