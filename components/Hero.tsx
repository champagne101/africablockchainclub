'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import BlockchainHeroBg from './ui/blockchain.-hero-bg';
import BlockchainNetwork from './ui/blockchain-network';
import FloatingElements from './animations/floating-elements';
import FadeIn from './animations/fade-in';
import ScaleIn from './animations/scale-in';
import StaggerContainer from './animations/stagger-container';
import SlideIn from './animations/slide-in';
import { useRouter } from 'next/navigation';


export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden text-white px-4">
      
      
      <div className="pointer-events-none">
  <BlockchainHeroBg />
</div>

      <FloatingElements />

      <div className="container mx-auto grid grid-cols-1 items-center px-2 py-8 md:grid-cols-2 md:py-18 lg:py-20">
        {/* Text Content - Mobile First */}
        <div className="order-2 md:order-1">
          <FadeIn direction="left" delay={300}>
            <div className="space-y-4 pt-4 md:pt-2">
              <ScaleIn delay={500}>
                <div className="inline-block rounded-full bg-neutral-600/80 px-3 py-1 text-xs md:text-sm font-medium text-center w-full md:w-auto">
                  The Future of Web3 in Africa
                </div>
              </ScaleIn>
              
              <FadeIn direction="up" delay={700}>
                <h1 className="font-mono text-3xl font-bold leading-tight text-center md:text-left md:text-5xl lg:text-6xl xl:text-7xl max-w-[20ch] mx-auto md:mx-0">
                  Building<br />
                  Africa&apos;s<br />
                  Blockchain<br />
                  Future
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" delay={900}>
                <p className="max-w-2xl text-base md:text-lg text-neutral-200 text-center md:text-left mx-auto md:mx-0 px-2 md:px-0">
                  Join our community of passionate developers and innovators shaping the decentralized web across Africa.
                </p>
              </FadeIn>
              
              <FadeIn direction="up" delay={1100}>
                <div className="flex justify-center md:justify-start">
                <Button 
  size="lg" 
  className="w-full max-w-[240px] sm:w-auto bg-black text-white hover:bg-white/80 hover:text-black text-base md:text-lg px-8 py-4 rounded-xl sm:rounded-lg border-2 border-transparent hover:border-white transition-all duration-300 min-h-[60px] sm:min-h-0 cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  onClick={() => router.push('/about')}
>
  Learn More
</Button>
              </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative mt-4 md:mt-0 mb-8 md:mb-0">
  <SlideIn direction="right" delay={400}>
    <div className="relative w-full h-64 md:h-96 lg:h-[500px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <BlockchainNetwork className="w-full h-full" />
      </div>
      
      {/* Logo positioned over the network */}
      <div className="absolute top-[65%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-155 md:w-244 lg:w-244 xl:w-244 z-10">
        <Image
          src="/header/ABC.png"
          alt="Africa's Blockchain Club Logo"
          width={1500}
          height={1500}
          className="w-full h-auto"
          priority
        />
      </div>
      <BlockchainNetwork className="w-full h-full" />

    </div>
  </SlideIn>
</div>
      </div>
    </section>
  );
}