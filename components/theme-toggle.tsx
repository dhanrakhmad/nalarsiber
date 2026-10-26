"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  function toggleTheme() {
    const isDark =
      resolvedTheme === "dark" ||
      document.documentElement.classList.contains("dark")

    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title="Ganti tema terang / gelap"
      aria-label="Ganti tema terang atau gelap"
      className="relative overflow-hidden rounded-full border border-transparent text-muted-foreground transition-colors hover:border-border hover:bg-muted/70 hover:text-foreground"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
