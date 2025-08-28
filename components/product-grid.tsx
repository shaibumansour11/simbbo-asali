"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { ShoppingCart, Heart, Star, Filter } from "lucide-react"

interface Product {
  id: string
  name: { en: string; sw: string }
  description: { en: string; sw: string }
  price: number
  originalPrice?: number
  category: string
  image: string
  inStock: boolean
  rating: number
  reviews: number
  isNew?: boolean
  isBestseller?: boolean
}

export function ProductGrid() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const products: Product[] = [
    {
      id: "1",
      name: {
        en: "Pure Wildflower Honey",
        sw: "Asali Safi ya Maua ya Mwituni",
      },
      description: {
        en: "Raw, unfiltered honey from wildflowers across Tanzania's pristine landscapes.",
        sw: "Asali mbichi, isiyochujwa kutoka maua ya mwituni katika mazingira safi ya Tanzania.",
      },
      price: 25000,
      category: "raw",
      image: "/pure-wildflower-honey-jar-natural.png",
      inStock: true,
      rating: 4.8,
      reviews: 124,
      isBestseller: true,
    },
    {
      id: "2",
      name: {
        en: "Acacia Honey Premium",
        sw: "Asali ya Mti wa Mgunga Bora",
      },
      description: {
        en: "Light, delicate honey with a mild floral taste from acacia trees.",
        sw: "Asali nyepesi, laini yenye ladha ya maua kutoka miti ya mgunga.",
      },
      price: 35000,
      originalPrice: 40000,
      category: "raw",
      image: "/acacia-honey-premium-light-golden.png",
      inStock: true,
      rating: 4.9,
      reviews: 89,
      isNew: true,
    },
    {
      id: "3",
      name: {
        en: "Cinnamon Infused Honey",
        sw: "Asali Iliyochanganywa na Mdalasini",
      },
      description: {
        en: "Premium honey infused with organic cinnamon for a warm, spicy flavor.",
        sw: "Asali bora iliyochanganywa na mdalasini wa kikaboni kwa ladha ya joto na viungo.",
      },
      price: 30000,
      category: "flavored",
      image: "/cinnamon-infused-honey-spiced-natural.png",
      inStock: true,
      rating: 4.7,
      reviews: 67,
    },
    {
      id: "4",
      name: {
        en: "Honey & Shea Butter Balm",
        sw: "Marham ya Asali na Shea Butter",
      },
      description: {
        en: "Nourishing skin balm made with pure honey and organic shea butter.",
        sw: "Marham ya kulisha ngozi iliyotengenezwa na asali safi na shea butter ya kikaboni.",
      },
      price: 18000,
      category: "skincare",
      image: "/honey-shea-butter-balm-skincare.png",
      inStock: true,
      rating: 4.6,
      reviews: 156,
    },
    {
      id: "5",
      name: {
        en: "Honey Tasting Gift Set",
        sw: "Seti ya Zawadi ya Kuonja Asali",
      },
      description: {
        en: "Curated selection of our finest honey varieties in a beautiful gift box.",
        sw: "Uteuzi maalum wa aina zetu bora za asali katika sanduku zuri la zawadi.",
      },
      price: 75000,
      category: "gift",
      image: "/honey-tasting-gift-set-premium.png",
      inStock: true,
      rating: 4.9,
      reviews: 43,
      isBestseller: true,
    },
    {
      id: "6",
      name: {
        en: "Eucalyptus Honey",
        sw: "Asali ya Mkalitusi",
      },
      description: {
        en: "Therapeutic honey with natural eucalyptus properties for respiratory health.",
        sw: "Asali ya tiba yenye sifa za asili za mkalitusi kwa afya ya kupumua.",
      },
      price: 32000,
      category: "raw",
      image: "/eucalyptus-honey-therapeutic-natural.png",
      inStock: false,
      rating: 4.8,
      reviews: 91,
    },
    {
      id: "7",
      name: {
        en: "Honey Face Mask",
        sw: "Barakoa ya Uso ya Asali",
      },
      description: {
        en: "Rejuvenating face mask with honey, oats, and natural botanicals.",
        sw: "Barakoa ya uso inayoburudisha yenye asali, uwando, na mimea ya asili.",
      },
      price: 22000,
      category: "skincare",
      image: "/honey-face-mask-natural-skincare.png",
      inStock: true,
      rating: 4.5,
      reviews: 78,
    },
    {
      id: "8",
      name: {
        en: "Ginger Honey Blend",
        sw: "Mchanganyiko wa Asali na Tangawizi",
      },
      description: {
        en: "Warming blend of pure honey and fresh ginger for digestive wellness.",
        sw: "Mchanganyiko wa joto wa asali safi na tangawizi mpya kwa afya ya tumbo.",
      },
      price: 28000,
      category: "flavored",
      image: "/ginger-honey-blend-warming-natural.png",
      inStock: true,
      rating: 4.7,
      reviews: 102,
      isNew: true,
    },
  ]

  const categories = [
    { id: "all", label: t("products.categories.all") },
    { id: "raw", label: t("products.categories.raw") },
    { id: "flavored", label: t("products.categories.flavored") },
    { id: "skincare", label: t("products.categories.skincare") },
    { id: "gift", label: t("products.categories.gift") },
  ]

  const filteredProducts = products.filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price
      case "name":
        return a.name[language].localeCompare(b.name[language])
      case "newest":
      default:
        return b.isNew ? 1 : -1
    }
  })

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-accent"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-1 text-sm text-foreground"
            >
              <option value="newest">{t("products.filter.newest")}</option>
              <option value="price">{t("products.filter.price")}</option>
              <option value="name">{t("products.filter.name")}</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-card hover:bg-accent/30 transition-all duration-300 transform hover:scale-105 border-border group"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name[language]}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && (
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        {language === "en" ? "New" : "Mpya"}
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {language === "en" ? "Bestseller" : "Inayouzwa Sana"}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="destructive" className="text-xs">
                        {t("products.outOfStock")}
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full p-2"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-montserrat font-semibold text-lg text-card-foreground mb-2 line-clamp-1">
                    {product.name[language]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                    {product.description[language]}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-montserrat font-bold text-lg text-primary">
                      TSh {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        TSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {t("products.addToCart")}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-foreground hover:bg-accent bg-transparent"
                    >
                      {t("products.viewDetails")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-muted/30 rounded-lg p-8">
          <h3 className="font-montserrat font-bold text-2xl text-foreground mb-4">
            {language === "en" ? "Can't Find What You're Looking For?" : "Huwezi Kupata Unachokitafuta?"}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "We offer custom honey blends and bulk orders for businesses. Contact us to discuss your specific needs."
              : "Tunatoa mchanganyiko wa kawaida wa asali na maagizo makubwa kwa biashara. Wasiliana nasi kujadili mahitaji yako maalum."}
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
