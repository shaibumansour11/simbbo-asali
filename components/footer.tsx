"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t, language } = useLanguage()

  const footerContent = {
    en: {
      description: "Premium natural honey products and bee conservation education in Tanzania",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      followUs: "Follow Us",
      copyright: "© 2024 SiMBBO ASALI. All rights reserved.",
      phone: "Phone: +255 123 456 789",
      email: "Email: info@simbboasali.co.tz",
      address: "Dar es Salaam, Tanzania",
    },
    sw: {
      description: "Bidhaa za asali asilia za hali ya juu na elimu ya uhifadhi wa nyuki Tanzania",
      quickLinks: "Viungo vya Haraka",
      contact: "Maelezo ya Mawasiliano",
      followUs: "Tufuate",
      copyright: "© 2024 SiMBBO ASALI. Haki zote zimehifadhiwa.",
      phone: "Simu: +255 123 456 789",
      email: "Barua pepe: info@simbboasali.co.tz",
      address: "Dar es Salaam, Tanzania",
    },
  }

  const content = footerContent[language]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🐝</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-card-foreground">SiMBBO ASALI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{content.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-card-foreground mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/bee-life" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.beeLife")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-card-foreground mb-4">{content.contact}</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>{content.phone}</p>
              <p>{content.email}</p>
              <p>{content.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">{content.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
