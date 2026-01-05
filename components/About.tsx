"use client";

import * as React from "react";
import Image from "next/image";
import { aboutText, aboutImages } from "@/data";

export default function FullscreenCarousel() {
  return (
    <div className="min-h-screen ">
     <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
  <h2 className="text-5xl md:text-6xl font-bold text-white py-4">
    About Africa's Blockchain Club
  </h2>
  <p className="max-w-4xl text-lg md:text-xl text-white/90 px-4">
    We are a community-driven organization dedicated to advancing Web3 technology 
    and fostering innovation in the blockchain space across Africa.
  </p>
</div>
      {/* Islands Section */}
      <div className="lex flex-col md:flex-row justify-center gap-8 md:gap-12 px-4 md:px-8">
        {aboutText.map((item, index) => {

          return (
            <div
  key={index}
  className="w-full md:min-w-[400px] md:max-w-[550px] h-full flex flex-col items-center justify-center p-8 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-[0_0_25px_5px_rgba(234,179,8,0.6)] bg-[#2B2B2B] text-white transition-all duration-300 hover:shadow-[0_0_35px_15px_rgba(234,179,8,0.8)] hover:scale-105"
>
<div className="mb-6 w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-500">
  <Image
    src={aboutImages[index].src}
    alt={aboutImages[index].alt}
    width={128}
    height={128}
    className="object-cover w-full h-full"
  />
</div>

  <dt className="text-5xl font-Plush text-center ">
    {item.title1}
  </dt>
  <dt className="text-5xl font-Plush text-center mt-4">
    {item.title2}
  </dt>
  <dd className="mt-6 text-xl font-mono text-center max-w-xl px-4">
    _{item.description}_
  </dd>
</div>

          );
        })}
      </div>
    </div>
  );
}
