import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Target,
  Globe,
  Award,
  BookOpen,
  Code,
  Heart,
  Lightbulb,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Zap,
  Rocket,
  Shield,
  Cpu,
  Send,
} from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import SlideIn from "@/components/animations/slide-in"
import ScaleIn from "@/components/animations/scale-in"
import StaggerContainer from "@/components/animations/stagger-container"
import BlockchainPattern from "@/components/blockchain-pattern"
import SocialLinks from "@/components/social-links"
import { milestones, ResearchTeam, stats, teamMembers } from "@/data"
import JoinCommunityButton from "@/components/join-community-button"

export default function AboutPage() {

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community First",
      description: "We believe in the power of community to drive innovation and create lasting change across Africa.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education & Empowerment",
      description: "Knowledge sharing and skill development are at the core of everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Pan-African Vision",
      description: "We're building bridges across African countries to create a unified blockchain ecosystem.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation & Impact",
      description: "We focus on practical blockchain solutions that solve real African challenges.",
    },
  ]
  const handleJoinCommunity = () => {
    window.open("https://t.me/africasblockchainclub", "_blank", "noopener,noreferrer")
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 text-white min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="African Tech Community Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <BlockchainPattern className="opacity-20" />

          {/* Floating Tech Icons */}
          <div className="absolute top-20 left-10 animate-bounce opacity-40">
            <Rocket className="h-16 w-16 text-amber-500" />
          </div>
          <div className="absolute top-32 right-20 animate-bounce opacity-30" style={{ animationDelay: "1s" }}>
            <Globe className="h-12 w-12 text-amber-400" />
          </div>
          <div className="absolute bottom-32 left-20 animate-bounce opacity-35" style={{ animationDelay: "2s" }}>
            <Users className="h-14 w-14 text-amber-300" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce opacity-30" style={{ animationDelay: "0.5s" }}>
            <Zap className="h-18 w-18 text-amber-600" />
          </div>
          <div className="absolute top-1/2 left-10 animate-bounce opacity-25" style={{ animationDelay: "1.8s" }}>
            <Shield className="h-10 w-10 text-amber-500" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce opacity-35" style={{ animationDelay: "0.3s" }}>
            <Cpu className="h-12 w-12 text-amber-400" />
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-1/3 h-24 w-24 rotate-45 bg-amber-500/20 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 h-20 w-20 rotate-12 bg-amber-400/20 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 h-16 w-16 rounded-full bg-amber-300/20 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/2 h-12 w-12 rotate-45 bg-amber-600/20 animate-pulse"
            style={{ animationDelay: "2.2s" }}
          ></div>

          {/* Connecting Lines */}
          <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-amber-500/30 rotate-45 animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-24 h-0.5 bg-amber-400/30 rotate-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <FadeIn direction="up">
            <div className="mx-auto max-w-5xl text-center">

              <h1 className="mb-8 font-mono text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                About{" "}
                <span className="block text-amber-400">
                  {`Africa's`}
                  <br />
                  Blockchain Club
                </span>
              </h1>

              <p className="mb-8 text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
                {`Empowering Africa's next generation of blockchain innovators, developers, and entrepreneurs to build the
                decentralized future of the continent. We're more than a community—we're a movement transforming how
                Africa engages with blockchain technology.
              `}</p>


              {/* Mission Statement */}
              <div id="mission" className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Our Mission</h3>
                <p className="text-lg text-neutral-200 leading-relaxed">
                  To accelerate blockchain technology adoption across Africa by building inclusive communities,
                  providing world-class education, and fostering innovation that addresses real African challenges.
                </p>
              </div>
              <div className="flex flex-wrap mt-8 justify-center gap-6 mb-0">
              <JoinCommunityButton
                  variant="primary"
                  size="large"
                  icon={<Users className="mr-2 h-5 w-5" />}
                  text="Join Our Community"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="h-8 w-5 rounded-full border-2 border-white/50 flex justify-center">
              <div className="h-2 w-1 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-700 transperant py-8">
        <div className="container mx-auto px-4">
          <StaggerContainer staggerDelay={200} className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <ScaleIn key={stat.label} delay={index * 200}>
                <div className="text-center">
                  <div className="mb-2 font-mono text-4xl font-bold text-white md:text-5xl">{stat.number}</div>
                  <div className="text-white font-medium">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gradient-to-br from-amber-900 via-neutral-800 to-neutral-900 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SlideIn direction="left">
              <div>
                <h2 className="mb-6 font-mono text-3xl font-bold md:text-4xl">Our Story</h2>
                <div className="space-y-6 text-lg text-white">
                  <p>
{`                    Africa's Blockchain Club (ABC) was born from a simple yet powerful vision: to position Africa at the
                    forefront of the global blockchain revolution. Founded in 2020 in Johannesburg, South Africa, we
                    started as a small group of passionate developers and entrepreneurs who believed that blockchain
                    technology could solve many of Africa's most pressing challenges.`}
                  </p>
                  <p>
                    What began as weekend meetups in a small co-working space has grown into a pan-African movement
                    spanning 15 countries, with over 2,000 active members including developers, researchers,
                    entrepreneurs, and blockchain enthusiasts.
                  </p>
                  <p>
                    Our journey has been marked by significant milestones: from organizing our first hackathon with 100
                    participants to launching groundbreaking projects that address real African challenges like
                    financial inclusion, digital identity, and cross-border payments.
                  </p>
                  <p>
                    {`Today, ABC stands as Africa's premier blockchain community, fostering innovation, education, and
                    collaboration across the continent. We're not just building technology; we're building the future of
                    Africa.`}
                  </p>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right">
              <div className="relative">
                <Image
                  src="/About/bgEle.png"
                  alt="ABC Community Meeting"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 rounded-lg bg-amber-500 p-6 text-black">
                  <div className="font-mono text-2xl font-bold">2 Years</div>
                  <div className="text-sm">of Innovation</div>
                </div>
              </div>
                <Image
                  src="/About/ABC_white_resized3.png"
                  alt="ABC Community Meeting"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Our Mission & Vision</h2>
              <p className="mx-auto max-w-3xl text-lg text-white">
                Driving blockchain adoption across Africa through education, innovation, and community building
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ScaleIn delay={200}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    To accelerate blockchain technology adoption across Africa by building inclusive communities,
                    providing world-class education, and fostering innovation that addresses real African challenges. We
                    empower individuals and organizations to leverage blockchain for economic growth, financial
                    inclusion, and social impact.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={400}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="font-mono text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    To establish Africa as a global leader in blockchain innovation and adoption. We envision a future
                    where every African has access to decentralized financial services, where African solutions lead
                    global blockchain development, and where the continent leapfrogs traditional systems through
                    blockchain technology.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>

          <div className="mt-16">
            <FadeIn direction="up">
              <h3 className="mb-8 text-center font-mono text-2xl font-bold">Our Core Values</h3>
            </FadeIn>
            <StaggerContainer staggerDelay={200} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <ScaleIn key={value.title} delay={index * 200}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center text-amber-500">{value.icon}</div>
                      <h4 className="mb-3 font-semibold">{value.title}</h4>
                      <p className="text-sm text-white">{value.description}</p>
                    </CardContent>
                  </Card>
                </ScaleIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Our Journey</h2>
              <p className="mx-auto max-w-2xl text-lg text-white">
                Key milestones in our mission to transform Africa through blockchain technology
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-amber-500 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn key={milestone.year} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                  <div className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="flex-1">
                      <Card
                        className={`${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} hover:shadow-lg transition-all duration-300`}
                      >
                        <CardContent className="p-6">
                          <div className="mb-2 font-mono text-2xl font-bold text-amber-600">{milestone.year}</div>
                          <h3 className="mb-2 text-xl font-semibold">{milestone.title}</h3>
                          <p className="text-white">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-amber-500 border-4 border-white shadow-lg"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-20">
        <div id="team" className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Meet Our Team</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600">
                Passionate individuals driving blockchain innovation across Africa
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <ScaleIn key={member.name} delay={index * 150}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4 text-center">
                      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-mono text-xl font-bold">{member.name}</h3>
                      <p className="text-amber-600 font-medium">{member.role}</p>
                    </div>

                    <p className="mb-4 text-sm text-neutral-600">{member.bio}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-3">
                      <Link href={member.linkedin} className="text-neutral-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href={member.twitter} className="text-neutral-400 hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href={member.github} className="text-neutral-400 hover:text-neutral-800 transition-colors">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="bg-gradient-to-br from-black/90 via-black/70 to-black/50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Our Research & Dev Teams</h2>
              <p className="mx-auto max-w-2xl text-lg text-white">
                Industry leaders and experts guiding our strategic direction
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={200} className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ResearchTeam.map((ResearchTeam, index) => (
              <ScaleIn key={ResearchTeam.name} delay={index * 200}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={ResearchTeam.image || "/placeholder.svg"}
                        alt={ResearchTeam.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">{ResearchTeam.name}</h3>
                    <p className="text-amber-600 text-sm font-medium">{ResearchTeam.role}</p>
                    <p className="text-white text-sm">{ResearchTeam.company}</p>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">What We Do</h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-300">
                Our comprehensive approach to blockchain education and innovation
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScaleIn delay={200}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <BookOpen className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Education & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Comprehensive blockchain education programs, workshops, and certification courses designed for all
                    skill levels from beginners to advanced developers.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={400}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Code className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Project Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Collaborative development of blockchain solutions addressing African challenges in finance,
                    identity, agriculture, and governance.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={600}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Community Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Creating vibrant local communities across Africa through meetups, hackathons, and networking events
                    that connect blockchain enthusiasts.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={800}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Research & Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Cutting-edge research on blockchain applications, scalability solutions, and policy recommendations
                    for African governments and institutions.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={1000}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Globe className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Policy Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">
                    Working with governments and regulatory bodies to create favorable blockchain policies that foster
                    innovation while protecting consumers.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>

            <ScaleIn delay={1200}>
              <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                    <Lightbulb className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white">Startup Incubation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    Supporting blockchain startups through mentorship, funding connections, and access to our extensive
                    network of industry partners.
                  </p>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className=" bg-gray-800 py-20">
        <div id="contact" className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-mono text-3xl font-bold md:text-4xl">Get In Touch</h2>
              <p className="mx-auto max-w-2xl text-lg text-white">
                {`Ready to join Africa's blockchain revolution? We'd love to hear from you.`}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <SlideIn direction="left">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Headquarters</h4>
                      <p className="text-white">Johannesburg, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-white">africablockchainclub@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-white">+27 11 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Weekly Meetups</h4>
                      <p className="text-white">Every Saturday, 11:00 AM SAST</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="mb-4 font-semibold">Follow Us</h4>
                    <SocialLinks />
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction="right">
              <Card>
                <CardHeader>
                  
                  <CardTitle className="font-mono text-2xl">Join Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p className="text-white">
                     {` Whether you're a developer, entrepreneur, student, or blockchain enthusiast, there's a place for
                      you in our community.`}
                    </p>

                    <div className="space-y-4">
                    <JoinCommunityButton variant="primary" size="full" text="Join Our Community" />
                    </div>

                    <div className="rounded-lg bg-neutral-900/30 p-4">
                      <h5 className="mb-2 font-semibold">Become an Ambassador</h5>
                      <p className="text-sm text-white">
                        Help us expand ABC to your city or country. We provide training, resources, and support to
                        community leaders.
                      </p>
                      <Button variant="ghost" className="mt-2 p-0 text-amber-600 hover:text-amber-700">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </section>
      
    </div>
  )
}
