"use client";

import { User } from "lucide-react";
import { testimonials } from "@/data";
import { useRef, useEffect } from "react";

const TestimonialCard = ({ text, name, role }: any) => (
  <div className="bg-white text-black p-6 rounded-[30px] w-[460px] text-left shadow-[0_10px_50px_rgba(0,0,0,0.35)] transition-all duration-300 ease-in-out relative z-0 hover:z-50 hover:shadow-[0_0px_60px_rgba(255,255,255,0.4)]">
    <p className="text-sm italic mb-4 leading-relaxed">{text}</p>
    <div className="flex items-center gap-4">
      <div className="w-[80px] h-[80px] flex items-center justify-center bg-gray-200 rounded-full">
        <User size={40} className="text-gray-600" />
      </div>
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);


const EmptyModal = ({ className }: { className: string }) => (
  <div className={`bg-[#FFF8F0] w-[460px] h-[220px] border-2 border-gray-300 rounded-[30px] shadow-[0_10px_50px_rgba(0,0,0,0.35)] ${className}`} />
);

const FadeOverlay = ({ className, gradient }: { className: string; gradient: string }) => (
  <div className={`pointer-events-none absolute ${className} ${gradient}`} />
);

export default function TestimonialsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Header outside the main container */}
      <h1 className="text-6xl font-semibold mb-16 bg-white text-transparent bg-clip-text">A Word From Our Founders</h1>
      
      <div
        ref={containerRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-40 w-full"
      >
        {/* Top testimonial */}
        <div className="absolute top-[2cm] left-1/2 transform -translate-x-1/2">
          <TestimonialCard {...testimonials.find(t => t.id === "top")} />
        </div>

        {/* Bottom testimonial */}
        <div className="absolute bottom-[2cm] left-1/2 transform -translate-x-1/2">
          <TestimonialCard {...testimonials.find(t => t.id === "bottom")} />
        </div>

        {/* Left testimonial */}
        <div className="absolute left-[1cm] top-1/2 transform -translate-y-1/2">
          <TestimonialCard {...testimonials.find(t => t.id === "left")} />
        </div>

        {/* Right testimonial */}
        <div className="absolute right-[1cm] top-1/2 transform -translate-y-1/2">
          <TestimonialCard {...testimonials.find(t => t.id === "right")} />
        </div>


        {/* Empty modals */}
        <EmptyModal className="absolute top-[-0.5cm] left-[1cm]" />
        <EmptyModal className="absolute top-[-0.5cm] right-[1cm]" />
        <EmptyModal className="absolute bottom-[-0.5cm] left-[1cm]" />
        <EmptyModal className="absolute bottom-[-0.5cm] right-[1cm]" />
        <EmptyModal className="absolute top-[-4.5cm] left-1/2 transform -translate-x-1/2" />
        <EmptyModal className="absolute bottom-[-4.5cm] left-1/2 transform -translate-x-1/2" />


        {/* Soft black fade overlays */}
      <FadeOverlay
        className="top-0 left-0 w-full h-[50%]"
        gradient="bg-gradient-to-b from-[#2B2B2B] to-transparent"
      />
      <FadeOverlay
        className="bottom-0 left-0 w-full h-[50%]"
        gradient="bg-gradient-to-t from-[#2B2B2B] to-transparent"
      />
      <FadeOverlay
        className="top-0 left-0 h-full w-[20%]"
        gradient="bg-gradient-to-r from-[#2B2B2B]/60 to-transparent"
      />
      <FadeOverlay
        className="top-0 right-0 h-full w-[20%]"
        gradient="bg-gradient-to-l from-[#2B2B2B]/60 to-transparent"
      />

      </div>
    </div>
  );
}