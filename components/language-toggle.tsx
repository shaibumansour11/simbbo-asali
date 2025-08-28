"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "sw" : "en")}
      className="flex items-center gap-2 text-foreground hover:bg-accent"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "SW" : "EN"}</span>
    </Button>
  )
}
