"use client";

import { Mail, X, Github, Linkedin, Send, Facebook, Instagram, Twitter, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SlideIn from "../animations/slide-in";

const Footer = () => {
  const socialLinks = {
    twitter: "https://twitter.com/africasblock",
    linkedin: "https://linkedin.com/company/africa-s-blockchain-club",
    github: "https://github.com/orgs/Africas-Blockchain-Club",
  };

  return (
    <div className="relative">
      <div className="absolute -top-[3.4rem] left-0 w-full text-center overflow-hidden">
        <h1 className="text-[6rem] md:text-[10rem] lg:text-[12rem] font-extrabold tracking-tighter leading-none whitespace-nowrap 
              bg-[linear-gradient(to_top,black_0%,gray_100%)] 
              bg-clip-text text-transparent animate-gradient">
          WE MOVE
        </h1>
      </div>
    
      {/* Footer */}
      <footer className="relative bg-gray-900 text-white px-4 pt-12 pb-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SlideIn direction="left" delay={600}>
              <div>
                <div className="items-center mb-4 px-15">
                  <Image
                    src="/About/ABC_HD_White.png"
                    alt="Africa Blockchain Club"
                    width={90}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <p className="font-bold text-xl mb-2">Africa's Blockchain Club</p>
                <p className="text-gray-400 mb-2">Empowering Africa through blockchain innovation and education.</p>
                <div className="flex gap-4">
                  {/* Twitter Button with Link */}
                  <Link 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800 cursor-pointer"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </Link>
                  
                  {/* LinkedIn Button with Link */}
                  <Link 
                    href={socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800 cursor-pointer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </Link>
                  
                  {/* GitHub Button with Link */}
                  <Link 
                    href={socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 text-gray-400 hover:text-teal-400 hover:bg-gray-800 cursor-pointer"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SlideIn>
            
            <SlideIn direction="left" delay={600}>
              <div>
                <h3 className="font-bold text-lg mb-2 pt-16">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#projects" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about/#team" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about/#contact" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={600}>
              <div>
                <h3 className="font-bold text-lg mb-2 pt-16">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/about/#mission" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Mission & Vision
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#learn" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#events" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#projects" 
                      className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={600}>
              <div>
                <h3 className="font-bold text-lg mb-2 pt-16">Contact</h3>
                <p className="mb-2 text-neutral-400">
                  <MapPin className="mr-2 inline-block h-4 w-4" />
                  Johannesburg, South Africa
                </p>
                <p className="mb-4 text-neutral-400">
                  <Calendar className="mr-2 inline-block h-4 w-4" />
                  We meet every Saturday
                </p>
                <Link
                  href="mailto:africablockchainclub@gmail.com"
                  className="text-amber-500 hover:underline transition-all duration-200 cursor-pointer"
                >
                  africablockchainclub@gmail.com
                </Link>
              </div>
            </SlideIn>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Africa Blockchain Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;