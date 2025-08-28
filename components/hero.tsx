"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with honeycomb pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="honeycomb" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
                <polygon
                  points="10,1 18.66,6 18.66,16 10,21 1.34,16 1.34,6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#honeycomb)" />
          </svg>
        </div>
      </div>

      {/* Floating bee animation */}
      <div className="absolute top-20 right-10 animate-bounce">
        <div className="text-6xl animate-pulse">🐝</div>
      </div>
      <div className="absolute bottom-32 left-10 animate-bounce delay-1000">
        <div className="text-4xl animate-pulse delay-500">🐝</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Title with honey drip effect */}
          <div className="space-y-4">
            <h1 className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                {t("hero.title")}
              </span>
            </h1>
            <p className="font-montserrat font-semibold text-2xl sm:text-3xl text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Honey jar illustration */}
          <div className="pt-12">
            <div className="inline-block animate-bounce">
              <div className="text-8xl filter drop-shadow-lg">🍯</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
