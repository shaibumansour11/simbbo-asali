"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ZoomIn, X } from "lucide-react"

export function PhotoGallery() {
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photoCategories = [
    {
      title: t("media.gallery.bees"),
      photos: [
        {
          src: "/busy-bees-working-on-honeycomb.png",
          alt: language === "en" ? "Bees working on honeycomb" : "Nyuki wakifanya kazi kwenye sega",
        },
        {
          src: "/bee-collecting-nectar-from-flower.png",
          alt: language === "en" ? "Bee collecting nectar" : "Nyuki akikusanya asali kutoka ua",
        },
        {
          src: "/queen-bee-surrounded-by-worker-bees.png",
          alt: language === "en" ? "Queen bee with workers" : "Malkia nyuki na wafanyakazi",
        },
        {
          src: "/bee-swarm-natural-habitat.png",
          alt: language === "en" ? "Bee swarm in nature" : "Kundi la nyuki asilia",
        },
      ],
    },
    {
      title: t("media.gallery.production"),
      photos: [
        {
          src: "/honey-extraction-process-beekeeping.png",
          alt: language === "en" ? "Honey extraction process" : "Mchakato wa kutoa asali",
        },
        {
          src: "/fresh-honey-dripping-from-comb.png",
          alt: language === "en" ? "Fresh honey dripping" : "Asali mpya ikidondoka",
        },
        {
          src: "/honey-jars-packaging-production.png",
          alt: language === "en" ? "Honey packaging" : "Ufungashaji wa asali",
        },
        {
          src: "/beekeeper-inspecting-honeycomb-frames.png",
          alt: language === "en" ? "Inspecting honeycomb" : "Kukagua sega za asali",
        },
      ],
    },
    {
      title: t("media.gallery.training"),
      photos: [
        {
          src: "/beekeeping-training-workshop-students.png",
          alt: language === "en" ? "Training workshop" : "Warsha ya mafunzo",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Beekeeping instruction" : "Mafunzo ya ufugaji nyuki",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Hive inspection practice" : "Mazoezi ya ukaguzi wa mzinga",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Community education" : "Elimu ya jamii",
        },
      ],
    },
    {
      title: t("media.gallery.conservation"),
      photos: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Bee-friendly garden" : "Bustani inayopendwa na nyuki",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Natural bee habitat" : "Mazingira asilia ya nyuki",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Bee conservation project" : "Mradi wa uhifadhi wa nyuki",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: language === "en" ? "Community planting" : "Upandaji wa kijamii",
        },
      ],
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
            {t("media.photos.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("media.photos.subtitle")}</p>
        </div>

        <div className="space-y-12">
          {photoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-montserrat font-semibold text-2xl text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.photos.map((photo, photoIndex) => (
                  <Card
                    key={photoIndex}
                    className="bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border group cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(photo.src)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain"
              />
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-4 right-4 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
