"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "sw"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.beeLife": "Bee Life & Knowledge",
    "nav.media": "Media & Training",
    "nav.products": "Products",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "SiMBBO ASALI",
    "hero.subtitle": "Honeybees Natural Pot Co.",
    "hero.description": "Premium natural honey products and bee conservation education",
    "hero.cta.primary": "Explore Products",
    "hero.cta.secondary": "Learn About Bees",

    // Common
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.contact": "Contact Us",
    "common.subscribe": "Subscribe",
    "common.email": "Email",
    "common.name": "Name",
    "common.message": "Message",
    "common.send": "Send",
    "common.close": "Close",

    // About Us page translations
    "about.title": "About SiMBBO ASALI",
    "about.subtitle": "Our Story & Mission",
    "about.story.title": "Our Sweet Journey",
    "about.story.content":
      "Founded in the heart of Tanzania, SiMBBO ASALI began as a passion project to preserve our precious bee ecosystems while sharing the golden treasures they create. Our journey started with a simple belief: that sustainable beekeeping practices can protect our environment while providing communities with natural, healthy products.",
    "about.mission.title": "Our Mission",
    "about.mission.content":
      "To preserve Tanzania's bee ecosystems through sustainable practices, education, and community empowerment while delivering the finest natural honey products to families across East Africa.",
    "about.vision.title": "Our Vision",
    "about.vision.content":
      "A thriving ecosystem where bees and humans coexist harmoniously, creating sustainable livelihoods while protecting our planet's biodiversity for future generations.",
    "about.team.title": "Meet Our Team",
    "about.values.title": "Our Core Values",

    // Bee Life page translations
    "beeLife.title": "Bee Life & Knowledge",
    "beeLife.subtitle": "Discover the Amazing World of Bees",
    "beeLife.intro":
      "Explore the fascinating world of bees, their crucial role in our ecosystem, and learn how you can help protect these amazing creatures.",
    "beeLife.lifecycle.title": "The Bee Lifecycle",
    "beeLife.lifecycle.content":
      "Understanding the complete lifecycle of bees helps us appreciate their complexity and importance in nature.",
    "beeLife.benefits.title": "Health Benefits of Honey",
    "beeLife.benefits.content":
      "Pure honey offers incredible natural healing properties and health benefits that have been recognized for thousands of years.",
    "beeLife.conservation.title": "Conservation Tips",
    "beeLife.conservation.content":
      "Simple actions you can take to help protect bee populations and their natural habitats.",
    "beeLife.ecosystem.title": "Bees & Ecosystem",
    "beeLife.ecosystem.content":
      "Learn how bees are essential pollinators that support biodiversity and food security worldwide.",

    // Media & Training page translations
    "media.title": "Media & Training",
    "media.subtitle": "Learn Through Videos, Photos & Workshops",
    "media.intro":
      "Explore our comprehensive collection of educational content and join our hands-on training programs.",
    "media.videos.title": "Educational Videos",
    "media.videos.subtitle": "Watch and Learn About Beekeeping",
    "media.photos.title": "Photo Gallery",
    "media.photos.subtitle": "Behind the Scenes of Our Beekeeping Operations",
    "media.training.title": "Training & Workshops",
    "media.training.subtitle": "Join Our Educational Programs",
    "media.training.upcoming": "Upcoming Events",
    "media.training.register": "Register Now",
    "media.training.duration": "Duration",
    "media.training.level": "Level",
    "media.training.location": "Location",
    "media.training.price": "Price",
    "media.training.beginner": "Beginner",
    "media.training.intermediate": "Intermediate",
    "media.training.advanced": "Advanced",
    "media.training.free": "Free",
    "media.training.paid": "Paid",
    "media.gallery.bees": "Our Busy Bees at Work",
    "media.gallery.production": "Honey Production Process",
    "media.gallery.training": "Training Sessions",
    "media.gallery.conservation": "Conservation Efforts",

    // Products page translations
    "products.title": "Our Premium Honey Products",
    "products.subtitle": "Pure, Natural, Sustainably Sourced",
    "products.intro":
      "Discover our range of premium honey products, each carefully crafted to bring you nature's sweetest treasures.",
    "products.categories.all": "All Products",
    "products.categories.raw": "Raw Honey",
    "products.categories.flavored": "Flavored Honey",
    "products.categories.skincare": "Skincare",
    "products.categories.gift": "Gift Sets",
    "products.filter.sortBy": "Sort By",
    "products.filter.price": "Price: Low to High",
    "products.filter.name": "Name: A to Z",
    "products.filter.newest": "Newest First",
    "products.addToCart": "Add to Cart",
    "products.viewDetails": "View Details",
    "products.inStock": "In Stock",
    "products.outOfStock": "Out of Stock",
    "products.quantity": "Quantity",
    "products.description": "Description",
    "products.ingredients": "Ingredients",
    "products.benefits": "Benefits",
    "products.usage": "How to Use",
    "products.reviews": "Customer Reviews",
    "products.relatedProducts": "Related Products",
    "products.cart.title": "Shopping Cart",
    "products.cart.empty": "Your cart is empty",
    "products.cart.total": "Total",
    "products.cart.checkout": "Proceed to Checkout",
    "products.cart.continue": "Continue Shopping",
    "products.cart.remove": "Remove",
    "products.cart.update": "Update",

    // Team member translations
    "team.founder": "Founder & CEO",
    "team.beekeeper": "Master Beekeeper",
    "team.educator": "Education Director",
    "team.conservationist": "Conservation Specialist",

    // Contact page translations
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in Touch with SiMBBO ASALI",
    "contact.intro":
      "We'd love to hear from you! Whether you have questions about our products, want to learn more about beekeeping, or are interested in our training programs, don't hesitate to reach out.",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Thank you! Your message has been sent successfully.",
    "contact.form.error": "Sorry, there was an error sending your message. Please try again.",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.weekdays": "Monday - Friday: 8:00 AM - 6:00 PM",
    "contact.info.hours.saturday": "Saturday: 9:00 AM - 4:00 PM",
    "contact.info.hours.sunday": "Sunday: Closed",
    "contact.location.title": "Visit Our Farm",
    "contact.location.description":
      "Come visit our beekeeping farm and see our operations firsthand. Tours available by appointment.",
    "contact.social.title": "Follow Us",
    "contact.newsletter.title": "Subscribe to Our Newsletter",
    "contact.newsletter.description":
      "Stay updated with the latest news, tips, and product releases from SiMBBO ASALI.",
    "contact.newsletter.placeholder": "Enter your email address",
    "contact.newsletter.subscribe": "Subscribe",
    "contact.newsletter.success": "Thank you for subscribing!",
    "contact.newsletter.error": "Please enter a valid email address.",
  },
  sw: {
    // Navigation
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu Sisi",
    "nav.beeLife": "Maisha ya Nyuki na Maarifa",
    "nav.media": "Media na Mafunzo",
    "nav.products": "Bidhaa",
    "nav.contact": "Mawasiliano",

    // Hero Section
    "hero.title": "SiMBBO ASALI",
    "hero.subtitle": "Kampuni ya Asali Asilia",
    "hero.description": "Bidhaa za asali asilia za hali ya juu na elimu ya uhifadhi wa nyuki",
    "hero.cta.primary": "Chunguza Bidhaa",
    "hero.cta.secondary": "Jifunze Kuhusu Nyuki",

    // Common
    "common.learnMore": "Jifunze Zaidi",
    "common.getStarted": "Anza",
    "common.contact": "Wasiliana Nasi",
    "common.subscribe": "Jiandikishe",
    "common.email": "Barua Pepe",
    "common.name": "Jina",
    "common.message": "Ujumbe",
    "common.send": "Tuma",
    "common.close": "Funga",

    // About Us page translations in Swahili
    "about.title": "Kuhusu SiMBBO ASALI",
    "about.subtitle": "Hadithi na Dhamira Yetu",
    "about.story.title": "Safari Yetu Tamu",
    "about.story.content":
      "Ilianzishwa katika moyo wa Tanzania, SiMBBO ASALI ilianza kama mradi wa shauku wa kuhifadhi mazingira yetu muhimu ya nyuki huku tukishiriki hazina za dhahabu wanazozalisha. Safari yetu ilianza na imani rahisi: kwamba mazoea endelevu ya ufugaji nyuki yanaweza kulinda mazingira yetu huku yakitoa jamii bidhaa asilia na za kiafya.",
    "about.mission.title": "Dhamira Yetu",
    "about.mission.content":
      "Kuhifadhi mazingira ya nyuki ya Tanzania kupitia mazoea endelevu, elimu, na uwezeshaji wa jamii huku tukitoa bidhaa bora za asali asilia kwa familia kote Afrika Mashariki.",
    "about.vision.title": "Maono Yetu",
    "about.vision.content":
      "Mazingira yanayostawi ambapo nyuki na wanadamu wanaishi kwa uongozi, wakiunda maisha endelevu huku wakilinda utofauti wa kibiolojia wa sayari yetu kwa vizazi vijavyo.",
    "about.team.title": "Kutana na Timu Yetu",
    "about.values.title": "Maadili Yetu Muhimu",

    // Bee Life page translations in Swahili
    "beeLife.title": "Maisha ya Nyuki na Maarifa",
    "beeLife.subtitle": "Gundua Ulimwengu wa Ajabu wa Nyuki",
    "beeLife.intro":
      "Chunguza ulimwengu wa kuvutia wa nyuki, jukumu lao muhimu katika mazingira yetu, na ujifunze jinsi unavyoweza kusaidia kulinda viumbe hawa wa ajabu.",
    "beeLife.lifecycle.title": "Mzunguko wa Maisha ya Nyuki",
    "beeLife.lifecycle.content":
      "Kuelewa mzunguko kamili wa maisha ya nyuki kunasaidia kuthamini utata na umuhimu wao katika asili.",
    "beeLife.benefits.title": "Faida za Kiafya za Asali",
    "beeLife.benefits.content":
      "Asali safi inatoa sifa za ajabu za uponyaji wa asili na faida za kiafya ambazo zimetambuliwa kwa maelfu ya miaka.",
    "beeLife.conservation.title": "Vidokezo vya Uhifadhi",
    "beeLife.conservation.content":
      "Vitendo rahisi unavyoweza kuchukua kusaidia kulinda idadi ya nyuki na mazingira yao asilia.",
    "beeLife.ecosystem.title": "Nyuki na Mazingira",
    "beeLife.ecosystem.content":
      "Jifunze jinsi nyuki ni wachanganuzi muhimu wanaounga mkono utofauti wa kibiolojia na usalama wa chakula ulimwenguni.",

    // Media & Training page translations in Swahili
    "media.title": "Media na Mafunzo",
    "media.subtitle": "Jifunze Kupitia Video, Picha na Warsha",
    "media.intro":
      "Chunguza mkusanyiko wetu kamili wa maudhui ya kielimu na jiunge na programu zetu za mafunzo za vitendo.",
    "media.videos.title": "Video za Kielimu",
    "media.videos.subtitle": "Tazama na Ujifunze Kuhusu Ufugaji Nyuki",
    "media.photos.title": "Mkusanyiko wa Picha",
    "media.photos.subtitle": "Nyuma ya Pazia la Shughuli Zetu za Ufugaji Nyuki",
    "media.training.title": "Mafunzo na Warsha",
    "media.training.subtitle": "Jiunge na Programu Zetu za Kielimu",
    "media.training.upcoming": "Matukio Yanayokuja",
    "media.training.register": "Jiandikishe Sasa",
    "media.training.duration": "Muda",
    "media.training.level": "Kiwango",
    "media.training.location": "Mahali",
    "media.training.price": "Bei",
    "media.training.beginner": "Mwanzo",
    "media.training.intermediate": "Kati",
    "media.training.advanced": "Juu",
    "media.training.free": "Bure",
    "media.training.paid": "Kulipa",
    "media.gallery.bees": "Nyuki Wetu Wenye Shughuli Kazini",
    "media.gallery.production": "Mchakato wa Uzalishaji Asali",
    "media.gallery.training": "Vipindi vya Mafunzo",
    "media.gallery.conservation": "Juhudi za Uhifadhi",

    // Products page translations in Swahili
    "products.title": "Bidhaa Zetu za Asali za Hali ya Juu",
    "products.subtitle": "Safi, Asilia, Zilizochukuliwa kwa Uendelevu",
    "products.intro":
      "Gundua safu yetu ya bidhaa za asali za hali ya juu, kila moja imetengenezwa kwa uangalifu kuleta hazina tamu za asili.",
    "products.categories.all": "Bidhaa Zote",
    "products.categories.raw": "Asali Mbichi",
    "products.categories.flavored": "Asali Yenye Ladha",
    "products.categories.skincare": "Huduma ya Ngozi",
    "products.categories.gift": "Seti za Zawadi",
    "products.filter.sortBy": "Panga Kwa",
    "products.filter.price": "Bei: Chini hadi Juu",
    "products.filter.name": "Jina: A hadi Z",
    "products.filter.newest": "Mpya Kwanza",
    "products.addToCart": "Ongeza Kwenye Kikapu",
    "products.viewDetails": "Ona Maelezo",
    "products.inStock": "Ipo Hifadhini",
    "products.outOfStock": "Haipo Hifadhini",
    "products.quantity": "Idadi",
    "products.description": "Maelezo",
    "products.ingredients": "Viungo",
    "products.benefits": "Faida",
    "products.usage": "Jinsi ya Kutumia",
    "products.reviews": "Mapitio ya Wateja",
    "products.relatedProducts": "Bidhaa Zinazohusiana",
    "products.cart.title": "Kikapu cha Ununuzi",
    "products.cart.empty": "Kikapu chako ni tupu",
    "products.cart.total": "Jumla",
    "products.cart.checkout": "Endelea na Malipo",
    "products.cart.continue": "Endelea Kununua",
    "products.cart.remove": "Ondoa",
    "products.cart.update": "Sasisha",

    // Team member translations in Swahili
    "team.founder": "Mwanzilishi na Mkurugenzi Mkuu",
    "team.beekeeper": "Mfugaji Mkuu wa Nyuki",
    "team.educator": "Mkurugenzi wa Elimu",
    "team.conservationist": "Mtaalamu wa Uhifadhi",

    // Contact page translations in Swahili
    "contact.title": "Wasiliana Nasi",
    "contact.subtitle": "Ungana na SiMBBO ASALI",
    "contact.intro":
      "Tungependa kusikia kutoka kwako! Iwe una maswali kuhusu bidhaa zetu, unataka kujifunza zaidi kuhusu ufugaji nyuki, au una nia ya kujiunga na programu zetu za mafunzo, usisite kuwasiliana nasi.",
    "contact.form.title": "Tutumie Ujumbe",
    "contact.form.name": "Jina Kamili",
    "contact.form.email": "Anwani ya Barua Pepe",
    "contact.form.phone": "Nambari ya Simu",
    "contact.form.subject": "Mada",
    "contact.form.message": "Ujumbe Wako",
    "contact.form.submit": "Tuma Ujumbe",
    "contact.form.sending": "Inatuma...",
    "contact.form.success": "Asante! Ujumbe wako umetumwa kwa ufanisi.",
    "contact.form.error": "Samahani, kulikuwa na hitilafu katika kutuma ujumbe wako. Tafadhali jaribu tena.",
    "contact.info.title": "Maelezo ya Mawasiliano",
    "contact.info.address": "Anwani",
    "contact.info.phone": "Simu",
    "contact.info.email": "Barua Pepe",
    "contact.info.hours": "Masaa ya Biashara",
    "contact.info.hours.weekdays": "Jumatatu - Ijumaa: 8:00 Asubuhi - 6:00 Jioni",
    "contact.info.hours.saturday": "Jumamosi: 9:00 Asubuhi - 4:00 Jioni",
    "contact.info.hours.sunday": "Jumapili: Imefungwa",
    "contact.location.title": "Tembelea Shamba Letu",
    "contact.location.description":
      "Njoo utembelee shamba letu la ufugaji nyuki na uone shughuli zetu moja kwa moja. Ziara zinapatikana kwa miadi.",
    "contact.social.title": "Tufuate",
    "contact.newsletter.title": "Jiandikishe kwa Jarida Letu",
    "contact.newsletter.description":
      "Baki umesasishwa na habari za hivi karibuni, vidokezo, na uzinduzi wa bidhaa kutoka SiMBBO ASALI.",
    "contact.newsletter.placeholder": "Ingiza anwani yako ya barua pepe",
    "contact.newsletter.subscribe": "Jiandikishe",
    "contact.newsletter.success": "Asante kwa kujiandikisha!",
    "contact.newsletter.error": "Tafadhali ingiza anwani halali ya barua pepe.",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "sw")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
