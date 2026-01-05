"use client";

import React, { useEffect, useRef } from "react";
import CodeModal from "./CodeModal"; 

interface CardData {
  title: string;
  description: string;
}

interface ImageTextCardPopUpProps {
  isOpen: boolean;
  onClose: () => void;
  card: CardData | null;
}

export default function ImageTextCardPopUp({
  isOpen,
  onClose,
  card,
}: ImageTextCardPopUpProps) {
  const shimmerRef = useRef<HTMLDivElement>(null);

  // Start shimmer animation
  useEffect(() => {
    if (!shimmerRef.current) return;
    let pos = -100;
    const animate = () => {
      pos = (pos + 2) % 200;
      shimmerRef.current!.style.backgroundPosition = `${pos}% 0%`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  if (!isOpen || !card) return null;

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4"
      onClick={handleBackdropClick}
    >
      {/* CodeModal plane behind the popup content */}
      <CodeModal />

      {/* Foreground popup */}
      <div className="relative bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl border border-yellow-500/20 p-8 max-w-md w-full z-60">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          {card.title}
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-6">{card.description}</p>

        {/* Registration Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-md transition-colors">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
