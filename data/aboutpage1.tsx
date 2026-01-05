"use client";

import * as React from "react";
import Image from "next/image";
import { aboutText, aboutImages } from "@/data";

export default function FullscreenCarousel() {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center py-18 ">
        <h2 className="text-6xl font-extrabold text-white sm:text-6xl py-4">
          About Africa's Blockchain Club
        </h2>
        <p className="mt-5 max-w-4xl text-xl text-white lg:mx-auto text-6l sm:text-6l">
          We are a community-driven organization dedicated to advancing Web3 technology and fostering innovation in
          the blockchain space across Africa.
        </p>
      </div>

      {/* Islands Section */}
      <div className="flex justify-center gap-28 px-8 ">
        {aboutText.map((item, index) => {

          return (
            <div
  key={index}
  className="min-w-[400px] max-w-[550px] h-full flex flex-col items-center justify-center snap-start pt-16 pb-10 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-[0_0_30px_10px_rgba(234,179,8,0.75)] bg-[#2B2B2B] text-white"
>
  <div className="mb-6  overflow-hidden">
    <Image
      src={aboutImages[index].src}
      alt={aboutImages[index].alt}
      width={aboutImages[index].width}
      height={aboutImages[index].height}
      className=""
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
