"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { contactUsData } from "@/data";
import { BookOpen, Video, Code, ArrowRight } from "lucide-react";
import TechParticles from "./tech-particles";
import useIsMobile from "@/hooks/useIsMobile";

const iconMap = {
  BookOpen: BookOpen,
  Video: Video,
  Code: Code,
};

type AvatarType = keyof typeof iconMap;

const EducationalResourcesSection = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  // Mobile state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // Desktop state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (index: number, link: string) => {
    if (isMobile) {
      if (expandedIndex === index) {
        router.push(link);
      } else {
        setExpandedIndex(index); 
      }
    } else {
      router.push(link); 
    }
  };

  // Mobile version
  if (isMobile) {
  return (
    <div className="w-full flex justify-center relative px-4 py-10">
      <div
        className={`relative w-full ${
          isMobile ? "px-2 py-6" : "max-w-[1200px] px-24 py-10"
        } rounded-[12px] flex flex-col gap-4 overflow-hidden`}
        style={{
          background: "black",
          boxShadow: "0 0 12px rgba(0,0,0,0.2)",
          textAlign: "center",
          alignItems: "center",
          minHeight: "auto",
          isolation: "isolate",
          position: "relative",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[12px]">
          <TechParticles />
        </div>

        {/* Title */}
        <h2
          className="relative z-10 font-semibold mb-12 bg-white text-transparent bg-clip-text"
          style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
        >
          Educational Resources
        </h2>

        {/* Cards Container */}
        <div
          className={`relative z-10 flex w-full gap-6 justify-center ${
            isMobile ? "flex-col" : "flex-row"
          }`}
        >
          {contactUsData.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered =
              hoveredIndex !== null && hoveredIndex !== index;
            const AvatarIcon = iconMap[item.avatarType as AvatarType];

            const showDescription = isMobile
              ? expandedIndex === index
              : isHovered;

            return (
              <motion.div
                key={index}
                onClick={() => handleCardClick(index, item.link)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-2xl p-4 md:p-6 text-white cursor-pointer transition-all duration-300 shadow-lg overflow-hidden bg-[#2B2B2B] ${
                  isMobile ? "w-full" : "flex-1"
                }`}
                animate={{
                  filter: isHovered
                    ? "brightness(1.1)"
                    : isOtherHovered
                    ? "brightness(0.7)"
                    : "brightness(1)",
                  scale: isHovered ? 1.05 : 1,
                  boxShadow: isHovered
                    ? "0 0 32px rgba(250, 204, 21, 0.8)"
                    : "0 0 12px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span
                  className={`absolute bottom-0 left-0 w-full transition-all duration-300 bg-gradient-to-t from-yellow-300/40 to-transparent ${
                    isHovered ? "h-10" : "h-[3px]"
                  }`}
                />

                {/* Avatar + Title */}
                <div className="flex items-center mb-0 md:mb-6">
                  <motion.div
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md mr-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 0.9,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  >
                    <AvatarIcon className="text-black" size={18} />
                  </motion.div>

                  <motion.h2
                    className="text-xl md:text-2xl font-semibold transition-all duration-300 flex-1"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    {item.title}
                  </motion.h2>
                </div>

                {/* Animated Description */}
                <AnimatePresence>
                  {showDescription && (
                    <motion.div
                      key="desc"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-base text-gray-300 z-10 relative mt-2 mb-4">
                        {item.text}
                      </p>

                      {/* Mobile Explore Button */}
                      {isMobile && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(item.link);
                          }}
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span>Explore</span>
                          <ArrowRight size={16} />
                        </motion.button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )

  }

  // Desktop version
  return (
    <div className="w-full px-8 py-10 flex justify-center relative">
      <div
        className="relative w-full max-w-full rounded-[12px] flex flex-col gap-4 overflow-hidden"
        style={{
          background: "black",
          boxShadow: "0 0 24px rgba(250, 204, 21, 0.3)",
          textAlign: "center",
          alignItems: "center",
          minHeight: "590px",
          padding: "90px 104px 104px",
          isolation: 'isolate',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[12px]">
          <TechParticles />
        </div>

        <h2 className="relative z-10 text-6xl font-semibold mb-16 bg-white text-transparent bg-clip-text">
          Educational Resources
        </h2>

        <div className="relative z-10 flex w-full gap-10 justify-center">
          {contactUsData.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            const AvatarIcon = iconMap[item.avatarType as AvatarType];

            return (
              <motion.div
                key={index}
                onClick={() => router.push(item.link)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative flex-1 rounded-2xl p-6 text-white cursor-pointer transition-all duration-300 shadow-lg overflow-hidden bg-[#2B2B2B]"
                animate={{
                  filter: isHovered
                    ? "brightness(1.1)"
                    : isOtherHovered
                    ? "brightness(0.7)"
                    : "brightness(1)",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span
                  className={`absolute bottom-0 left-0 w-full transition-all duration-300 bg-gradient-to-t from-yellow-300/40 to-transparent ${
                    isHovered ? "h-10" : "h-[3px]"
                  }`}
                />

                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md mr-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isHovered ? 1 : 0,
                      opacity: isHovered ? 0.8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  >
                    <AvatarIcon className="text-black" size={18} />
                  </motion.div>

                  <motion.h2
                    className="text-2xl font-semibold transition-all duration-300"
                    animate={{ x: isHovered ? 10 : 0 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    {item.title}
                  </motion.h2>
                </div>

                <p className="text-base text-gray-300 z-10 relative transition-all duration-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationalResourcesSection;



