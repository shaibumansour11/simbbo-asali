"use client"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/mission-section"
import { FeaturesGrid } from "@/components/features-grid"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <MissionSection />
      <FeaturesGrid />
    </PageTransition>
  )
}
