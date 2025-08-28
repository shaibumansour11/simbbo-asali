"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from "lucide-react"

export function TrainingSection() {
  const { t, language } = useLanguage()

  const upcomingEvents = [
    {
      id: 1,
      title: language === "en" ? "Beginner Beekeeping Workshop" : "Warsha ya Ufugaji Nyuki wa Mwanzo",
      description:
        language === "en"
          ? "Perfect for those new to beekeeping. Learn the basics of hive management, bee behavior, and honey production."
          : "Bora kwa wale wapya katika ufugaji nyuki. Jifunze misingi ya usimamizi wa mzinga, tabia za nyuki, na uzalishaji wa asali.",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      duration: "7 hours",
      level: t("media.training.beginner"),
      location: "Dar es Salaam Training Center",
      price: "TSh 50,000",
      maxParticipants: 20,
      currentParticipants: 12,
      instructor: "Joseph Mwangi",
      features: [
        language === "en" ? "Hands-on hive inspection" : "Ukaguzi wa vitendo wa mzinga",
        language === "en" ? "Basic equipment training" : "Mafunzo ya vifaa vya msingi",
        language === "en" ? "Safety procedures" : "Taratibu za usalama",
        language === "en" ? "Certificate of completion" : "Cheti cha kukamilisha",
      ],
    },
    {
      id: 2,
      title: language === "en" ? "Advanced Honey Processing" : "Uchakataji wa Juu wa Asali",
      description:
        language === "en"
          ? "Learn professional honey extraction, processing, and packaging techniques for commercial production."
          : "Jifunze mbinu za kitaalamu za kutoa, kuchakata, na kufunga asali kwa uzalishaji wa kibiashara.",
      date: "March 22, 2024",
      time: "8:00 AM - 5:00 PM",
      duration: "9 hours",
      level: t("media.training.advanced"),
      location: "Arusha Processing Facility",
      price: "TSh 120,000",
      maxParticipants: 15,
      currentParticipants: 8,
      instructor: "Dr. Sarah Kimani",
      features: [
        language === "en" ? "Commercial extraction methods" : "Mbinu za kutoa za kibiashara",
        language === "en" ? "Quality control testing" : "Upimaji wa udhibiti wa ubora",
        language === "en" ? "Packaging & labeling" : "Ufungashaji na kuweka alama",
        language === "en" ? "Business planning" : "Upangaji wa biashara",
      ],
    },
    {
      id: 3,
      title: language === "en" ? "Bee Conservation Workshop" : "Warsha ya Uhifadhi wa Nyuki",
      description:
        language === "en"
          ? "Free community workshop focused on bee conservation, habitat protection, and sustainable practices."
          : "Warsha ya bure ya jamii inayolenga uhifadhi wa nyuki, ulinzi wa mazingira, na mazoea endelevu.",
      date: "April 5, 2024",
      time: "2:00 PM - 6:00 PM",
      duration: "4 hours",
      level: t("media.training.beginner"),
      location: "Mwanza Community Center",
      price: t("media.training.free"),
      maxParticipants: 50,
      currentParticipants: 23,
      instructor: "Michael Temba",
      features: [
        language === "en" ? "Habitat creation" : "Uundaji wa mazingira",
        language === "en" ? "Native plant identification" : "Utambuzi wa mimea ya asili",
        language === "en" ? "Community action planning" : "Upangaji wa vitendo vya jamii",
        language === "en" ? "Free materials provided" : "Vifaa vya bure vinatolewa",
      ],
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-6">
            {t("media.training.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("media.training.subtitle")}</p>
        </div>

        <div className="mb-12">
          <h3 className="font-montserrat font-semibold text-2xl text-foreground mb-8 text-center">
            {t("media.training.upcoming")}
          </h3>
          <div className="grid lg:grid-cols-1 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-card hover:bg-accent/30 transition-all duration-300 border-border overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="lg:flex">
                    {/* Event Image */}
                    <div className="lg:w-1/3">
                      <img
                        src={`/placeholder.svg?height=250&width=400&query=beekeeping+training+workshop+${event.level}`}
                        alt={event.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="lg:w-2/3 p-6 lg:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                              {event.level}
                            </span>
                            <span className="text-muted-foreground text-sm">{event.instructor}</span>
                          </div>
                          <h3 className="font-montserrat font-bold text-xl text-card-foreground mb-2">{event.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                        </div>
                      </div>

                      {/* Event Info Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-muted-foreground">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">
                              {event.currentParticipants}/{event.maxParticipants} participants
                            </span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Star className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm font-medium text-primary">{event.price}</span>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-montserrat font-semibold text-card-foreground mb-3">
                          {language === "en" ? "What's Included:" : "Kinachojumuishwa:"}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {event.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-muted-foreground text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Registration Button */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {event.maxParticipants - event.currentParticipants}{" "}
                          {language === "en" ? "spots remaining" : "nafasi zilizobaki"}
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          {t("media.training.register")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">
            {language === "en" ? "Can't Find What You're Looking For?" : "Huwezi Kupata Unachokitafuta?"}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "We offer custom training programs tailored to your specific needs. Contact us to discuss your requirements."
              : "Tunatoa programu za mafunzo za kawaida zilizorekebishwa kulingana na mahitaji yako maalum. Wasiliana nasi kujadili mahitaji yako."}
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            {t("common.contact")}
          </Button>
        </div>
      </div>
    </section>
  )
}
