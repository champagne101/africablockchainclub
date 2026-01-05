import FadeIn from "@/components/animations/fade-in";
import ScaleIn from "@/components/animations/scale-in";
import StaggerContainer from "@/components/animations/stagger-container";
import BlockchainPattern from "@/components/blockchain-pattern";
import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { Code, Globe, Lightbulb, Link, School, Trophy, Users } from "lucide-react";
import Image from "next/image";

export default function About1() {
    return(
      <section id="about" className="relative overflow-hidden py-8 md:py-16 text-white min-h-[70vh] md:min-h-[80vh] flex items-center">
        
        {/* Background Image - Optimized for mobile */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg_section3.jpg"
            alt="African Blockchain Innovation Background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70 md:from-black/85 md:via-black/70 md:to-black/60"></div>
        </div>

        {/* Animated Background Elements - Reduced for mobile */}
        <div className="absolute inset-0 z-10">
          <BlockchainPattern className="opacity-10 md:opacity-15" />

          {/* Floating Tech Icons - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute top-20 left-10 animate-bounce opacity-10">
            <Users className="h-14 w-14 text-amber-500" />
          </div>
          <div className="hidden md:block absolute top-32 right-20 animate-bounce opacity-15" style={{ animationDelay: "1s" }}>
            <School className="h-12 w-12 text-amber-400" />
          </div>
          <div className="hidden md:block absolute bottom-32 left-20 animate-bounce opacity-15" style={{ animationDelay: "2s" }}>
            <Trophy className="h-16 w-16 text-amber-300" />
          </div>
          <div className="hidden md:block absolute bottom-20 right-10 animate-bounce opacity-10" style={{ animationDelay: "0.5s" }}>
            <Globe className="h-18 w-18 text-amber-600" />
          </div>
          <div className="hidden md:block absolute top-1/2 left-16 animate-bounce opacity-15" style={{ animationDelay: "1.8s" }}>
            <Code className="h-10 w-10 text-amber-500" />
          </div>
          <div className="hidden md:block absolute top-1/3 right-1/4 animate-bounce opacity-15" style={{ animationDelay: "0.3s" }}>
            <Lightbulb className="h-12 w-12 text-amber-400" />
          </div>

          {/* Geometric Shapes - Reduced for mobile */}
          <div className="hidden md:block absolute top-1/4 left-1/3 h-20 w-20 rotate-45 bg-amber-500/20 animate-pulse"></div>
          <div
            className="hidden md:block absolute bottom-1/3 right-1/4 h-16 w-16 rotate-12 bg-amber-400/20 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="hidden md:block absolute top-1/2 right-1/3 h-14 w-14 rounded-full bg-amber-300/20 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>

          {/* Mobile-only minimal decorations */}
          <div className="md:hidden absolute top-10 right-8 h-8 w-8 rounded-full bg-amber-500/20 animate-pulse"></div>
          <div className="md:hidden absolute bottom-20 left-6 h-6 w-6 rotate-45 bg-amber-400/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl lg:max-w-7xl text-center">
            {/* Heading - Mobile optimized */}
            <FadeIn direction="up">
              <h2 className="mb-4 md:mb-6 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
                Driving Web3 Adoption Across Africa
              </h2>
            </FadeIn>

            {/* Description - Better mobile spacing */}
            <FadeIn direction="up" delay={200}>
              <p className="mb-8 md:mb-10 text-base sm:text-lg text-white/90 leading-relaxed px-2 sm:px-4 max-w-3xl mx-auto">
                {`Africa's Blockchain Club (ABC) is a community dedicated to accelerating blockchain technology adoption throughout South Africa and the entire African continent. We bring together developers, entrepreneurs, and enthusiasts to build the future of Web3 in Africa.`}
              </p>
            </FadeIn>

            {/* Feature Cards - Mobile optimized grid */}
            <FadeIn direction="up" delay={400}>
              <StaggerContainer staggerDelay={200} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
                <ScaleIn delay={200}>
                  <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-amber-500/20 p-4 sm:p-6 text-center hover:bg-black/50 transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="mb-2 text-sm sm:text-base font-semibold">Community Building</h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-snug">
                      Fostering a vibrant ecosystem of blockchain enthusiasts and developers
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn delay={400}>
                  <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-amber-500/20 p-4 sm:p-6 text-center hover:bg-black/50 transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                      <School className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="mb-2 text-sm sm:text-base font-semibold">Education & Training</h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-snug">
                      Providing resources and workshops to build blockchain skills
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn delay={600}>
                  <div className="rounded-xl bg-black/40 backdrop-blur-sm border border-amber-500/20 p-4 sm:p-6 text-center hover:bg-black/50 transition-all duration-300 transform hover:-translate-y-1 group sm:col-span-2 lg:col-span-1">
                    <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-amber-500 text-white">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h3 className="mb-2 text-sm sm:text-base font-semibold">Innovation</h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-snug">
                      Building projects and winning hackathons to showcase African talent
                    </p>
                  </div>
                </ScaleIn>
              </StaggerContainer>
            </FadeIn>

            {/* Button - Mobile optimized */}
            <FadeIn direction="up" delay={600}>
              <div className="pt-6 md:pt-8">
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto bg-black text-white hover:bg-white/80 hover:text-black text-sm sm:text-base px-6 py-3 sm:py-4 min-h-[48px]"
                  >
                    Learn more About Us
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
}