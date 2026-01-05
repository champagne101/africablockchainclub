"use client";

import Image from "next/image";
import { imageCards } from "@/data";
import { useState, useRef, MouseEvent } from "react";
import ImageTextCardPopUp from "./ImageTextCardPopUp";

// Card data interface
interface CardData {
  imageSrc: string;
  title: string;
  description: string;
}

export default function ImageTextCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  // Open modal
  const handleRegisterClick = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  

  return (
    <div className="pb-20 pt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-semibold mb-16 bg-white text-transparent bg-clip-text">
          Upcoming/Ongoing Events
        </h2>
      </div>

      {/* Card grid */}
      <div className="flex gap-10 justify-center flex-wrap">
        {imageCards.map((card, idx) => (
          <FinalCard
            key={idx}
            card={card}
            onRegisterClick={handleRegisterClick}
          />
        ))}
      </div>

      {/* Modal */}
      <ImageTextCardPopUp
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        card={selectedCard}
      />
    </div>
  );
}

// Props for each card
interface FinalCardProps {
  card: CardData;
  onRegisterClick: (card: CardData) => void;
}

const FinalCard = ({ card, onRegisterClick }: FinalCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    x: 0,
    y: 0,
    rotateY: 0,
    rotateX: 0,
    glowOpacity: 0,
  });

  const perspective = 1000;
  const maxTilt = 12;
  const maxMove = 30;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const relX = e.clientX - centerX;
    const relY = e.clientY - centerY;
    const rotateY = (relX / rect.width) * maxTilt * 2;
    const rotateX = -(relY / rect.height) * maxTilt * 1.5;
    const x = (relX / rect.width) * maxMove * 2;
    const y = (relY / rect.height) * maxMove * 1.5;
    const movementIntensity = Math.min(Math.sqrt(x * x + y * y) / maxMove, 1);

    setTransform({
      x: Math.max(-maxMove, Math.min(maxMove, x)),
      y: Math.max(-maxMove, Math.min(maxMove, y)),
      rotateY: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
      rotateX: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
      glowOpacity: movementIntensity * 0.8,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, rotateY: 0, rotateX: 0, glowOpacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative w-[400px] h-[500px] transition-all duration-500 ease-[cubic-bezier(0.15,0.85,0.35,1.1)]"
      style={{
        transform: `
          perspective(${perspective}px)
          translate3d(${transform.x}px, ${transform.y}px, 0)
          rotateY(${transform.rotateY}deg)
          rotateX(${transform.rotateX}deg)
        `,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, rgba(234,179,8,0.9) 0%, rgba(234,179,8,0.4) 50%, transparent 80%)`,
          filter: "blur(40px)",
          opacity: transform.glowOpacity,
          transform: `rotateY(${transform.rotateY * 0.3}deg) rotateX(${transform.rotateX * 0.3}deg)`,
        }}
      />

      {/* Card */}
      <div className="w-full h-full bg-[#1B1B1B] rounded-xl overflow-hidden shadow-lg flex flex-col relative z-10">
        {/* Image */}
        <div className="h-[60%] w-full relative">
          <Image
            src={card.imageSrc}
            alt={card.title}
            fill
            className="object-cover object-top brightness-95 hover:brightness-110 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Text + Button */}
        <div className="h-[40%] bg-black relative">
          <div className="absolute bottom-0 left-0 w-full px-6 pt-8 pb-6">
            <h3 className="text-xl font-semibold line-clamp-2 leading-tight">
              {card.title}
            </h3>
            <p className="text-md text-gray-300 line-clamp-2 mt-2 leading-relaxed">
              {card.description}
            </p>
            <button
              onClick={() => onRegisterClick(card)}
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-yellow-400/30 w-[180px] transform hover:scale-105"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
