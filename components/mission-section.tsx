"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function MissionSection() {
  const { t, language } = useLanguage()

  const missionContent = {
    en: {
      title: "Our Sweet Mission",
      description:
        "At SiMBBO ASALI, we're dedicated to preserving Tanzania's precious bee ecosystems while delivering the finest natural honey products. Our mission extends beyond commerce – we're committed to education, conservation, and supporting local beekeeping communities.",
      values: [
        {
          icon: "🌱",
          title: "Sustainability",
          description: "Protecting bee habitats and promoting eco-friendly practices",
        },
        {
          icon: "🎓",
          title: "Education",
          description: "Teaching communities about the importance of bees and conservation",
        },
        {
          icon: "🤝",
          title: "Community",
          description: "Supporting local beekeepers and their families",
        },
      ],
    },
    sw: {
      title: "Dhamira Yetu Tamu",
      description:
        "Katika SiMBBO ASALI, tumejitolea kuhifadhi mazingira muhimu ya nyuki Tanzania huku tukitoa bidhaa bora za asali asilia. Dhamira yetu inazidi biashara – tumejitolea kwa elimu, uhifadhi, na kuunga mkono jamii za ufugaji nyuki.",
      values: [
        {
          icon: "🌱",
          title: "Uendelevu",
          description: "Kulinda mazingira ya nyuki na kukuza mazoea mazuri ya mazingira",
        },
        {
          icon: "🎓",
          title: "Elimu",
          description: "Kufundisha jamii kuhusu umuhimu wa nyuki na uhifadhi",
        },
        {
          icon: "🤝",
          title: "Jamii",
          description: "Kuunga mkono wafugaji nyuki wa ndani na familia zao",
        },
      ],
    },
  }

  const content = missionContent[language]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl sm:text-5xl text-foreground mb-6">{content.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{content.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.values.map((value, index) => (
            <Card
              key={index}
              className="bg-card hover:bg-accent/50 transition-all duration-300 transform hover:scale-105 border-border hover:border-primary/50"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-montserrat font-semibold text-xl text-card-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
