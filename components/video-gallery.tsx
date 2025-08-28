"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Play, Clock, Eye } from "lucide-react"

export function VideoGallery() {
  const { t, language } = useLanguage()

  const videos = [
    {
      id: "1",
      title: language === "en" ? "Introduction to Beekeeping" : "Utangulizi wa Ufugaji Nyuki",
      description:
        language === "en"
          ? "Learn the basics of beekeeping and how to get started with your first hive."
          : "Jifunze misingi ya ufugaji nyuki na jinsi ya kuanza na mzinga wako wa kwanza.",
      thumbnail: "/beekeeping-introduction-video-thumbnail.png",
      duration: "12:34",
      views: "2.5K",
      category: language === "en" ? "Beginner" : "Mwanzo",
    },
    {
      id: "2",
      title: language === "en" ? "Honey Harvesting Techniques" : "Mbinu za Kuvuna Asali",
      description:
        language === "en"
          ? "Step-by-step guide to harvesting honey safely and efficiently."
          : "Mwongozo wa hatua kwa hatua wa kuvuna asali kwa usalama na ufanisi.",
      thumbnail: "/honey-harvesting-beekeeping-process.png",
      duration: "18:45",
      views: "4.1K",
      category: language === "en" ? "Intermediate" : "Kati",
    },
    {
      id: "3",
      title: language === "en" ? "Bee Health & Disease Prevention" : "Afya ya Nyuki na Kuzuia Magonjwa",
      description:
        language === "en"
          ? "Understanding common bee diseases and how to maintain healthy colonies."
          : "Kuelewa magonjwa ya kawaida ya nyuki na jinsi ya kudumisha makundi yenye afya.",
      thumbnail: "/bee-health-disease-prevention-beekeeping.png",
      duration: "15:22",
      views: "3.8K",
      category: language === "en" ? "Advanced" : "Juu",
    },
    {
      id: "4",
      title: language === "en" ? "Sustainable Beekeeping Practices" : "Mazoea Endelevu ya Ufugaji Nyuki",
      description:
        language === "en"
          ? "Eco-friendly methods for sustainable honey production and bee conservation."
          : "Mbinu za kirafiki za mazingira kwa uzalishaji endelevu wa asali na uhifadhi wa nyuki.",
      thumbnail: "/sustainable-beekeeping-eco-friendly-practices.png",
      duration: "20:15",
      views: "5.2K",
      category: language === "en" ? "Intermediate" : "Kati",
    },
    {
      id: "5",
      title: language === "en" ? "Building Your Own Beehive" : "Kujenga Mzinga Wako Mwenyewe",
      description:
        language === "en"
          ? "DIY guide to constructing a traditional Tanzanian beehive."
          : "Mwongozo wa kujitegemea wa kujenga mzinga wa jadi wa Kitanzania.",
      thumbnail: "/building-beehive-diy-construction-traditional.png",
      duration: "25:30",
      views: "6.7K",
      category: language === "en" ? "Beginner" : "Mwanzo",
    },
    {
      id: "6",
      title: language === "en" ? "Bee Conservation in Tanzania" : "Uhifadhi wa Nyuki Tanzania",
      description:
        language === "en"
          ? "Our conservation efforts and how communities can help protect bee populations."
          : "Juhudi zetu za uhifadhi na jinsi jamii zinavyoweza kusaidia kulinda idadi ya nyuki.",
      thumbnail: "/bee-conservation-tanzania-community-protection.png",
      duration: "14:18",
      views: "3.3K",
      category: language === "en" ? "Educational" : "Kielimu",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
            {t("media.videos.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("media.videos.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-montserrat font-semibold text-lg text-card-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
