"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoGallery } from "@/components/video-gallery"
import { PhotoGallery } from "@/components/photo-gallery"
import { TrainingSection } from "@/components/training-section"
import { useLanguage } from "@/components/language-provider"

export default function MediaPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-card to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            {t("media.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t("media.subtitle")}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">{t("media.intro")}</p>
          <div className="flex justify-center space-x-4 text-4xl mb-8">
            <span className="animate-bounce">📹</span>
            <span className="animate-bounce delay-200">📸</span>
            <span className="animate-bounce delay-400">🎓</span>
            <span className="animate-bounce delay-600">🐝</span>
          </div>
        </div>
      </section>

      <VideoGallery />
      <PhotoGallery />
      <TrainingSection />

      {/* <Footer /> */}
    </div>
  )
}
