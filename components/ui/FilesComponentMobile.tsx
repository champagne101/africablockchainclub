"use client";

import { useState, useRef } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectsDrawer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const card = container.children[index] as HTMLElement;
      if (card) {
        const scrollLeft = card.offsetLeft - container.offsetLeft - 20;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const nextProject = () => {
    const next = (currentIndex + 1) % projectsData.length;
    setCurrentIndex(next);
    scrollToIndex(next);
  };

  const prevProject = () => {
    const prev = currentIndex - 1 < 0 ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(prev);
    scrollToIndex(prev);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto left-0 right-0 px-4 sm:px-6 lg:px-4 z-50 overflow-hidden">
      
      {/* Large text above the modal */}
      <div className="absolute top-[-0.5rem] sm:top-[-1rem] left-0 w-full text-center z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Projects
        </h1>
      </div>

      {/* Main container */}
      <div
        className="w-full max-w-7xl mx-auto flex flex-col px-3 sm:px-4 py-4 gap-1 items-stretch min-h-[60vh] relative z-10 rounded-2xl bg-neutral-900/70 backdrop-blur-sm"
        style={{
          marginTop: '2.5rem',
          maxWidth: '100vw',
          boxShadow: `
            0 0 60px rgba(88, 28, 135, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.4), 
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >

        {/* Description card */}
        <div 
          className="w-full h-auto text-white p-4 sm:p-6 flex flex-col justify-start relative overflow-hidden"
          style={{
            border: "2px solid transparent",
            borderRadius: "1rem",
            background: 
              "linear-gradient(#111, #111) padding-box, " +
              "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3)) border-box"
          }}
        >
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 via-blue-500 to-transparent animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Discover our latest work—cutting-edge blockchain projects and insights.
            </p>
            
            {/* Mobile navigation - Tapered moving line */}
            <div className="flex flex-col items-center space-y-3 mt-4">
              {/* Track background */}
              <div className="w-48 h-1.5 bg-gray-600/20 rounded-full relative overflow-hidden">
                {/* Moving tapered line */}
                <div 
                  className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-all duration-500 ease-out"
                  style={{
                    left: `${(currentIndex / (projectsData.length - 1)) * 80}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal carousel */}
        <div className="flex-1 relative h-full">
          {/* Navigation arrows */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-1 z-30">
            <button
              onClick={prevProject}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center transition-all active:scale-95 border border-gray-600"
            >
              <FaChevronLeft className="text-white text-sm" />
            </button>
          </div>
          
          <div className="absolute top-1/2 transform -translate-y-1/2 right-1 z-30">
            <button
              onClick={nextProject}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center transition-all active:scale-95 border border-gray-600"
            >
              <FaChevronRight className="text-white text-sm" />
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto overflow-y-hidden gap-3 h-full pb-4 scrollbar-hide px-2 pt-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollPadding: '0 16px'
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[260px] h-full scroll-snap-align-start"
              >
                <div 
                  className={clsx(
                    "h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border-2 border-gray-700/50 p-4 relative transition-all duration-300 mt-2", 
                    {
                      "border-purple-400/50 scale-105 shadow-2xl": currentIndex === index,
                      "hover:border-gray-600": currentIndex !== index,
                    }
                  )}
                  style={{
                    boxShadow: currentIndex === index 
                      ? '0 20px 40px rgba(139, 92, 246, 0.2), 0 0 80px rgba(59, 130, 246, 0.1)'
                      : '0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Circular position indicator */}
                  <div className={clsx(
                    "absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 z-20",
                    {
                      "bg-gradient-to-br from-pink-500 to-blue-500 text-white shadow-lg": currentIndex === index,
                      "bg-gray-700 text-gray-300 border border-gray-600": currentIndex !== index,
                    }
                  )}>
                    {index + 1}
                  </div>

                  {/* Image */}
                  {project.image && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 border border-gray-700/50 mt-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="260px"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-base font-semibold mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center items-center mt-4 pt-3 border-t border-gray-700/30">
                    <button className="flex items-center text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all active:scale-95 cursor-pointer">
                      <span className="font-medium">{project.message}</span>
                      <FaLocationArrow className="ms-2" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}