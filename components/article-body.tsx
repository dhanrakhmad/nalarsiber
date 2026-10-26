import { Fragment, type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ArticleBodyProps {
  content: string
  /** Slot iklan yang disisipkan setelah paragraf pertama. */
  inlineAd?: ReactNode
  className?: string
}

export function ArticleBody({ content, inlineAd, className }: ArticleBodyProps) {
  const paragraphs = content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  return (
    <div className={cn("space-y-6", className)}>
      {paragraphs.map((paragraph, index) => (
        <Fragment key={`${index}-${paragraph.slice(0, 24)}`}>
          <p
            className={cn(
              "text-[1.02rem] leading-[1.9] text-foreground/85 sm:text-[1.06rem]",
              index === 0 &&
                "first-letter:float-left first-letter:mr-2.5 first-letter:mt-1 first-letter:font-heading first-letter:text-4xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-brand sm:first-letter:text-5xl"
            )}
          >
            {paragraph}
          </p>

          {index === 0 && inlineAd ? (
            <div className="py-1">{inlineAd}</div>
          ) : null}
        </Fragment>
      ))}
    </div>
  )
}
