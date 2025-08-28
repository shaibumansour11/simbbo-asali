"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ArrowRight, BookOpen, Heart, Leaf, Globe } from "lucide-react"

export default function BeeLifePage() {
  const { t, language } = useLanguage()

  const articles = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t("beeLife.lifecycle.title"),
      content: t("beeLife.lifecycle.content"),
      color: "bg-chart-1",
      details:
        language === "en"
          ? "From egg to adult, bees undergo complete metamorphosis through four distinct stages: egg, larva, pupa, and adult. This fascinating process takes about 21 days for worker bees."
          : "Kutoka yai hadi mtu mzima, nyuki hupitia mabadiliko kamili kupitia hatua nne tofauti: yai, buu, pupa, na mtu mzima. Mchakato huu wa kuvutia huchukua siku 21 kwa nyuki wafanyakazi.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t("beeLife.benefits.title"),
      content: t("beeLife.benefits.content"),
      color: "bg-chart-2",
      details:
        language === "en"
          ? "Raw honey contains antioxidants, enzymes, and minerals that support immune function, wound healing, and digestive health. It's nature's perfect superfood."
          : "Asali mbichi ina antioxidants, enzymes, na madini yanayounga mkono kazi ya kinga, uponyaji wa majeraha, na afya ya tumbo. Ni chakula bora cha asili.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: t("beeLife.conservation.title"),
      content: t("beeLife.conservation.content"),
      color: "bg-chart-3",
      details:
        language === "en"
          ? "Plant bee-friendly flowers, avoid pesticides, support local beekeepers, and create bee hotels. Every small action contributes to bee conservation."
          : "Panda maua yanayopendwa na nyuki, epuka sumu za wadudu, unga mkono wafugaji nyuki wa ndani, na unda hoteli za nyuki. Kila kitendo kidogo kinachangia uhifadhi wa nyuki.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t("beeLife.ecosystem.title"),
      content: t("beeLife.ecosystem.content"),
      color: "bg-chart-4",
      details:
        language === "en"
          ? "Bees pollinate 1/3 of our food supply and support biodiversity. Without bees, our ecosystems and food security would be severely threatened."
          : "Nyuki huchanganua 1/3 ya ugavi wetu wa chakula na kuunga mkono utofauti wa kibiolojia. Bila nyuki, mazingira yetu na usalama wa chakula vingekuwa hatarini sana.",
    },
  ]

  const conservationTips = [
    {
      tip: language === "en" ? "Plant native wildflowers" : "Panda maua ya mwituni ya asili",
      description:
        language === "en"
          ? "Create a bee-friendly garden with native plants that bloom throughout the seasons"
          : "Unda bustani inayopendwa na nyuki na mimea ya asili inayochanua misimu yote",
    },
    {
      tip: language === "en" ? "Avoid harmful pesticides" : "Epuka sumu za wadudu zenye madhara",
      description:
        language === "en"
          ? "Choose organic and bee-safe alternatives to protect pollinators"
          : "Chagua mbadala za kikaboni na salama kwa nyuki kulinda wachanganuzi",
    },
    {
      tip: language === "en" ? "Support local beekeepers" : "Unga mkono wafugaji nyuki wa ndani",
      description:
        language === "en"
          ? "Buy local honey and bee products to support sustainable beekeeping"
          : "Nunua asali ya ndani na bidhaa za nyuki kuunga mkono ufugaji endelevu wa nyuki",
    },
    {
      tip: language === "en" ? "Create bee habitats" : "Unda mazingira ya nyuki",
      description:
        language === "en"
          ? "Build bee hotels and leave wild areas for native bee species"
          : "Jenga hoteli za nyuki na uache maeneo ya mwitu kwa aina za nyuki za asili",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-card to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            {t("beeLife.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t("beeLife.subtitle")}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">{t("beeLife.intro")}</p>
          <div className="flex justify-center space-x-4 text-4xl mb-8">
            <span className="animate-bounce">🐝</span>
            <span className="animate-bounce delay-200">🌸</span>
            <span className="animate-bounce delay-400">🍯</span>
            <span className="animate-bounce delay-600">🌿</span>
          </div>
        </div>
      </section>

      {/* Main Articles */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${article.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{article.icon}</div>
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-card-foreground mb-4">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{article.content}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{article.details}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group">
                    {t("common.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Tips */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              {language === "en" ? "How You Can Help" : "Jinsi Unavyoweza Kusaidia"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Simple actions you can take today to support bee conservation and protect our pollinators"
                : "Vitendo rahisi unavyoweza kuchukua leo kuunga mkono uhifadhi wa nyuki na kulinda wachanganuzi wetu"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {conservationTips.map((item, index) => (
              <Card key={index} className="bg-card hover:bg-accent/30 transition-all duration-300 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-card-foreground mb-2">{item.tip}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
            {language === "en" ? "Join Our Conservation Mission" : "Jiunge na Dhamira Yetu ya Uhifadhi"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Together, we can protect bee populations and ensure a sustainable future for our planet's pollinators."
              : "Pamoja, tunaweza kulinda idadi ya nyuki na kuhakikisha mustakabali endelevu wa wachanganuzi wa sayari yetu."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full"
            >
              {language === "en" ? "Get Involved" : "Jiunge Nasi"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-full bg-transparent"
            >
              {language === "en" ? "Learn More" : "Jifunze Zaidi"}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
