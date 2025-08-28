"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: "Amina Hassan",
      role: "team.founder",
      image: "👩‍💼",
      bio:
        language === "en"
          ? "Passionate about sustainable agriculture and bee conservation with over 15 years of experience."
          : "Ana shauku ya kilimo endelevu na uhifadhi wa nyuki na uzoefu wa zaidi ya miaka 15.",
    },
    {
      name: "Joseph Mwangi",
      role: "team.beekeeper",
      image: "👨‍🌾",
      bio:
        language === "en"
          ? "Third-generation beekeeper with deep knowledge of traditional and modern beekeeping techniques."
          : "Mfugaji nyuki wa kizazi cha tatu na maarifa makubwa ya mbinu za jadi na za kisasa za ufugaji nyuki.",
    },
    {
      name: "Dr. Sarah Kimani",
      role: "team.educator",
      image: "👩‍🏫",
      bio:
        language === "en"
          ? "Environmental educator dedicated to spreading awareness about bee conservation and ecosystem protection."
          : "Mwalimu wa mazingira aliyejitolea kueneza uelewa kuhusu uhifadhi wa nyuki na ulinzi wa mazingira.",
    },
    {
      name: "Michael Temba",
      role: "team.conservationist",
      image: "👨‍🔬",
      bio:
        language === "en"
          ? "Conservation biologist working to protect bee habitats and promote biodiversity in Tanzania."
          : "Mwanabiolojia wa uhifadhi anayefanya kazi kulinda mazingira ya nyuki na kukuza utofauti wa kibiolojia Tanzania.",
    },
  ]

  const values = [
    {
      icon: "🌱",
      title: language === "en" ? "Sustainability" : "Uendelevu",
      description:
        language === "en"
          ? "We practice and promote sustainable beekeeping methods that protect both bees and their environment."
          : "Tunafanya na kukuza mbinu endelevu za ufugaji nyuki zinazolinda nyuki na mazingira yao.",
    },
    {
      icon: "🎓",
      title: language === "en" ? "Education" : "Elimu",
      description:
        language === "en"
          ? "We believe in the power of education to create lasting change in conservation practices."
          : "Tunaamini nguvu ya elimu kuunda mabadiliko ya kudumu katika mazoea ya uhifadhi.",
    },
    {
      icon: "🤝",
      title: language === "en" ? "Community" : "Jamii",
      description:
        language === "en"
          ? "We work hand-in-hand with local communities to build sustainable livelihoods."
          : "Tunafanya kazi mkono kwa mkono na jamii za ndani kujenga maisha endelevu.",
    },
    {
      icon: "💚",
      title: language === "en" ? "Quality" : "Ubora",
      description:
        language === "en"
          ? "We maintain the highest standards in all our products and conservation efforts."
          : "Tunadumisha viwango vya juu katika bidhaa zetu zote na juhudi za uhifadhi.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-card to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">{t("about.subtitle")}</p>
          <div className="text-6xl mb-8">🐝🍯</div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              {t("about.story.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about.story.content")}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card hover:bg-accent/30 transition-all duration-300 border-border">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-montserrat font-bold text-2xl text-card-foreground mb-4">
                  {t("about.mission.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.mission.content")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:bg-accent/30 transition-all duration-300 border-border">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="font-montserrat font-bold text-2xl text-card-foreground mb-4">
                  {t("about.vision.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.vision.content")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              {t("about.values.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-montserrat font-semibold text-lg text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
              {t("about.team.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-card-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{t(member.role)}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
