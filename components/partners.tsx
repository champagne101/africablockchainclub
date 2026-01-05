"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, GraduationCap, Coins, Globe, Shield, Users, Star, ExternalLink } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import ScaleIn from "@/components/animations/scale-in"
import StaggerContainer from "@/components/animations/stagger-container"

type PartnerCategory = "all" | "universities" | "protocols" | "enterprises" | "governments" | "ngos"

interface Partner {
  id: string
  name: string
  logo: string
  category: PartnerCategory
  description: string
  partnership: string
  website: string
  featured: boolean
  tags: string[]
}

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>("all")
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null)

  const partners: Partner[] = [

    {
      id: "WeThinkCode_",
      name: "WeThinkCode_",
      logo: "/partners/wtc.png",
      category: "universities",
      description: "Leading research collaboration on blockchain applications in African contexts",
      partnership: "Education Partner",
      website: "https://uct.ac.za",
      featured: true,
      tags: ["Research", "Education", "Innovation"],
    },
    {
      id: "University-Johannesburg",
      name: "University of Johannesburg",
      logo: "/partners/Uj.png",
      category: "universities",
      description: "West African blockchain research hub and talent development center",
      partnership: "Education Partner",
      website: "https://unilag.edu.ng",
      featured: true,
      
      tags: ["West Africa", "Talent", "Hub"],
    },
    // {
    //     id: "Biptap",
    //     name: "Biptap",
    //     logo: "/partners/biptap.png",
    //     category: "universities",
    //     description: "West African blockchain research hub and talent development center",
    //     partnership: "DeFi",
    //     website: "https://unilag.edu.ng",
    //     featured: true,
        
    //     tags: ["West Africa", "Talent", "Hub"],
    //   },

    {
      id: "scroll",
      name: "Scroll",
      logo: "/partners/Scroll.png",
      category: "protocols",
      description: "Supporting African Ethereum development through grants and technical mentorship",
      partnership: "Support Partner",
      website: "https://scroll.io",
      featured: true,
      
      tags: ["scroll", "Grants", "Development"],
    },


    
  ]

  const categories = [
    { id: "all", label: "All Partners", icon: <Globe className="h-4 w-4" />, count: partners.length },
    {
      id: "universities",
      label: "Universities",
      icon: <GraduationCap className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "universities").length,
    },
    {
      id: "protocols",
      label: "Protocols",
      icon: <Coins className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "protocols").length,
    },
    {
      id: "enterprises",
      label: "Enterprises",
      icon: <Building2 className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "enterprises").length,
    },
    {
      id: "governments",
      label: "Governments",
      icon: <Shield className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "governments").length,
    },
    {
      id: "ngos",
      label: "NGOs",
      icon: <Users className="h-4 w-4" />,
      count: partners.filter((p) => p.category === "ngos").length,
    },
  ]

  const filteredPartners = partners.filter((partner) => {
    if (activeCategory === "all") return true
    return partner.category === activeCategory
  })

  const featuredPartners = partners.filter((partner) => partner.featured)

  return (
    <section className="bg-gray py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn direction="up">
          <div className="mb-6 text-center">

            <h2 className="mb-6 font-mono text-4xl font-bold md:text-5xl lg:text-6xl">
              Our <span className="text-amber-500">Partners</span>
            </h2>

            <p className="mx-auto max-w-6xl text-xl text-white leading-relaxed">
              We collaborate with world-class universities, cutting-edge blockchain protocols, innovative enterprises,
              and forward-thinking organizations to accelerate blockchain adoption across Africa.
            </p>
          </div>
        </FadeIn>

        {/* Featured Partners Carousel */}
        <FadeIn direction="up" delay={200}>
          <div className="mb-6">
            <h3 className="mb-8 text-center font-mono text-2xl font-bold">Featured Partnerships</h3>
            <div className="relative">
              <div className="flex overflow-x-auto justify-center items-center text-center gap-6 pb-2 ">
                {featuredPartners.map((partner, index) => (
                  <ScaleIn key={partner.id} delay={index * 100}>
                    <Card className="min-w-[350px] group hover:shadow-2xl transition-all duration-500 border-2 hover:border-amber-500/30 bg-gradient-to-br from-black to-amber-50/30">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="relative h-40 w-40 mx-auto overflow-hidden rounded-lg bg-gray shadow-sm border">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={300}
                              height={100}
                              className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        <h4 className="mb-2 font-bold text-lg group-hover:text-amber-600 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-sm text-amber-600 font-medium">{partner.partnership}</p>
                        
                      </CardContent>
                    </Card>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>


        {/* Call to Action */}
        {/* <FadeIn direction="up" delay={800}>
          <div className="mt-6 text-center">
            <h3 className="mb-4 font-mono text-2xl font-bold">Become a Partner</h3>
            <p className="mb-8 text-neutral-400 max-w-2xl mx-auto">
              Join our ecosystem of innovative organizations driving blockchain adoption across Africa. Let's build the
              future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-amber-500 text-black hover:bg-amber-400 transform hover:scale-105 transition-all duration-200">
                <Building2 className="mr-2 h-4 w-4" />
                Partner With Us
              </Button>
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  )
}
