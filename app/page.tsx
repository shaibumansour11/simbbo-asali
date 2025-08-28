"use client"
import { Hero } from "@/components/hero"
import { MissionSection } from "@/components/mission-section"
import { FeaturesGrid } from "@/components/features-grid"
import { PageTransition } from "@/components/page-transition"
import ProductsPage from "./products/page"
import MediaPage from "./media/page"

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <ProductsPage/>
      < MediaPage/>
      <MissionSection />
      <FeaturesGrid />
    </PageTransition>
  )
}
