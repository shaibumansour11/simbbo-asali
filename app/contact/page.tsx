"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 2000)
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error")
      return
    }

    // Simulate newsletter subscription
    setTimeout(() => {
      setNewsletterStatus("success")
      setNewsletterEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => setNewsletterStatus("idle"), 3000)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-honey-50 to-amber-50 dark:from-honey-950 dark:to-amber-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-honey-900 dark:text-honey-100 mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-honey-700 dark:text-honey-300 mb-8">{t("contact.subtitle")}</p>
            <p className="text-lg text-honey-600 dark:text-honey-400 leading-relaxed">{t("contact.intro")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-honey-200 dark:border-honey-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-honey-900 dark:text-honey-100">
                    {t("contact.form.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-honey-700 dark:text-honey-300 mb-2">
                          {t("contact.form.name")}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-honey-200 dark:border-honey-700 focus:border-honey-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-honey-700 dark:text-honey-300 mb-2">
                          {t("contact.form.email")}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-honey-200 dark:border-honey-700 focus:border-honey-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-honey-700 dark:text-honey-300 mb-2">
                          {t("contact.form.phone")}
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-honey-200 dark:border-honey-700 focus:border-honey-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-honey-700 dark:text-honey-300 mb-2">
                          {t("contact.form.subject")}
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="border-honey-200 dark:border-honey-700 focus:border-honey-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-honey-700 dark:text-honey-300 mb-2">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="border-honey-200 dark:border-honey-700 focus:border-honey-500"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-green-700 dark:text-green-300">{t("contact.form.success")}</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-red-700 dark:text-red-300">{t("contact.form.error")}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-honey-600 hover:bg-honey-700 text-white"
                    >
                      {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <Card className="border-honey-200 dark:border-honey-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-honey-900 dark:text-honey-100">
                    {t("contact.info.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-honey-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-honey-900 dark:text-honey-100 mb-1">
                        {t("contact.info.address")}
                      </h3>
                      <p className="text-honey-700 dark:text-honey-300">
                        Mbeya Region, Tanzania
                        <br />
                        P.O. Box 1234, Mbeya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-honey-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-honey-900 dark:text-honey-100 mb-1">
                        {t("contact.info.phone")}
                      </h3>
                      <p className="text-honey-700 dark:text-honey-300">
                        +255 123 456 789
                        <br />
                        +255 987 654 321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-honey-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-honey-900 dark:text-honey-100 mb-1">
                        {t("contact.info.email")}
                      </h3>
                      <p className="text-honey-700 dark:text-honey-300">
                        info@simbboasali.co.tz
                        <br />
                        sales@simbboasali.co.tz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-honey-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-honey-900 dark:text-honey-100 mb-1">
                        {t("contact.info.hours")}
                      </h3>
                      <div className="text-honey-700 dark:text-honey-300 space-y-1">
                        <p>{t("contact.info.hours.weekdays")}</p>
                        <p>{t("contact.info.hours.saturday")}</p>
                        <p>{t("contact.info.hours.sunday")}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-honey-200 dark:border-honey-800">
                <CardHeader>
                  <CardTitle className="text-xl text-honey-900 dark:text-honey-100">
                    {t("contact.social.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-honey-200 hover:bg-honey-50 dark:border-honey-700 dark:hover:bg-honey-900 bg-transparent"
                    >
                      <Facebook className="w-5 h-5 text-honey-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-honey-200 hover:bg-honey-50 dark:border-honey-700 dark:hover:bg-honey-900 bg-transparent"
                    >
                      <Instagram className="w-5 h-5 text-honey-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-honey-200 hover:bg-honey-50 dark:border-honey-700 dark:hover:bg-honey-900 bg-transparent"
                    >
                      <Twitter className="w-5 h-5 text-honey-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-honey-50 dark:bg-honey-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-honey-900 dark:text-honey-100 mb-4">
              {t("contact.newsletter.title")}
            </h2>
            <p className="text-honey-700 dark:text-honey-300 mb-8">{t("contact.newsletter.description")}</p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t("contact.newsletter.placeholder")}
                className="flex-1 border-honey-200 dark:border-honey-700 focus:border-honey-500"
              />
              <Button type="submit" className="bg-honey-600 hover:bg-honey-700 text-white">
                {t("contact.newsletter.subscribe")}
              </Button>
            </form>

            {newsletterStatus === "success" && (
              <p className="mt-4 text-green-600 dark:text-green-400">{t("contact.newsletter.success")}</p>
            )}

            {newsletterStatus === "error" && (
              <p className="mt-4 text-red-600 dark:text-red-400">{t("contact.newsletter.error")}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-honey-900 dark:text-honey-100 mb-4">
              {t("contact.location.title")}
            </h2>
            <p className="text-honey-700 dark:text-honey-300 mb-8">{t("contact.location.description")}</p>

            {/* Map Placeholder */}
            <div className="bg-honey-100 dark:bg-honey-800 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-honey-600 mx-auto mb-4" />
                <p className="text-honey-700 dark:text-honey-300">Interactive Map Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
