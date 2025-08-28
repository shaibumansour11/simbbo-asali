"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight } from "lucide-react"

export function FeaturesGrid() {
  const { t, language } = useLanguage()

  const features = {
    en: [
      {
        title: "Bee Life & Knowledge",
        description:
          "Discover the fascinating world of bees, their lifecycle, and their crucial role in our ecosystem.",
        icon: "📚",
        color: "bg-chart-1",
      },
      {
        title: "Benefits of Honey",
        description: "Learn about the incredible health benefits and natural healing properties of pure honey.",
        icon: "💊",
        color: "bg-chart-2",
      },
      {
        title: "Conservation Efforts",
        description: "Join our mission to protect bee populations and preserve their natural habitats.",
        icon: "🌍",
        color: "bg-chart-3",
      },
      {
        title: "Bee Media & Training",
        description: "Access our educational videos, photos, and training workshops for beekeeping.",
        icon: "🎥",
        color: "bg-chart-4",
      },
    ],
    sw: [
      {
        title: "Maisha ya Nyuki na Maarifa",
        description:
          "Gundua ulimwengu wa ajabu wa nyuki, mzunguko wao wa maisha, na jukumu lao muhimu katika mazingira yetu.",
        icon: "📚",
        color: "bg-chart-1",
      },
      {
        title: "Faida za Asali",
        description: "Jifunze kuhusu faida za ajabu za kiafya na sifa za uponyaji wa asali safi.",
        icon: "💊",
        color: "bg-chart-2",
      },
      {
        title: "Juhudi za Uhifadhi",
        description: "Jiunge na dhamira yetu ya kulinda idadi ya nyuki na kuhifadhi mazingira yao asilia.",
        icon: "🌍",
        color: "bg-chart-3",
      },
      {
        title: "Media ya Nyuki na Mafunzo",
        description: "Pata video zetu za kielimu, picha, na warsha za mafunzo ya ufugaji nyuki.",
        icon: "🎥",
        color: "bg-chart-4",
      },
    ],
  }

  const currentFeatures = features[language]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl sm:text-5xl text-foreground mb-6">
            {language === "en" ? "Explore Our World" : "Chunguza Ulimwengu Wetu"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Dive deep into the world of bees, honey, and conservation through our comprehensive resources."
              : "Zama kina katika ulimwengu wa nyuki, asali, na uhifadhi kupitia rasilimali zetu kamili."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border hover:border-primary/50 cursor-pointer"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  {t("common.learnMore")}
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
