"use client";

import { useState } from "react";
import { projectsData } from "@/data";
import Image from "next/image";
import clsx from "clsx";
import { FaLocationArrow } from "react-icons/fa";

export default function ProjectsDrawer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full left-0 right-0 px-4 lg:px-10 z-50 overflow-hidden">
      
      {/* Large text above the modal - Mobile adjusted */}
      <div className="absolute top-[-1rem] lg:top-[-1.5cm] left-0 w-full text-center z-10">
        <h1 className="text-4xl lg:text-[8rem] font-extrabold mt-4 lg:mt-8">Projects</h1>
      </div>

      {/* Main container - Vertical layout on mobile */}
      <div
        className="w-full flex flex-col lg:flex-row px-2 py-4 lg:py-2 gap-4 lg:gap-8 items-stretch min-h-[30vh] lg:h-[80vh] relative z-10 rounded-2xl bg-neutral-900/70"
        style={{
          marginTop: '3rem',
          boxShadow: `
            0 0 80px rgba(0, 0, 0, 0.8), 
            0 40px 80px rgba(0, 0, 0, 0.6), 
            0 20px 60px rgba(0, 0, 0, 0.5), 
            inset 0 0 100px rgba(0, 0, 0, 0.7)
          `,
        }}
      >

        {/* Description card - Full width on mobile, fixed on desktop */}
        <div 
          className="w-full lg:flex-shrink-0 h-auto lg:h-full text-white p-6 shadow-md lg:w-[240px] flex flex-col justify-start lg:justify-end"
          style={{
            border: "4px solid transparent",
            borderRadius: "0.5rem",
            background: 
              "linear-gradient(#111, #111) padding-box, " +
              "linear-gradient(135deg,rgb(33, 16, 126),rgb(6, 17, 171)) border-box"
          }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-3">Featured Projects</h2>
            <p className="text-sm text-gray-400">
              Discover our latest work—cutting-edge blockchain projects and insights.
            </p>
          </div>
        </div>

        {/* Vertical file cabinet container */}
        <div className="flex-1 overflow-y-auto lg:overflow-x-auto pr-2 scrollbar-thin scrollbar-thumb-yellow-500 hover:scrollbar-thumb-yellow-400">
          {/* Mobile: Vertical stack */}
          <div className="flex flex-col lg:hidden gap-4">
            {projectsData.map((project, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <div
                  key={index}
                  className={clsx(
                    "w-full bg-[#262626] rounded-xl transition-all duration-300 ease-in-out border-2 border-gray-700 p-6 relative",
                    {
                      "border-purple-500/50 scale-[1.02]": isExpanded,
                    }
                  )}
                  style={{
                    boxShadow: `
                      0 20px 40px rgba(0, 0, 0, 0.4),
                      0 0 40px rgba(0, 0, 0, 0.3),
                      inset 0 0 40px rgba(0, 0, 0, 0.6)
                    `,
                  }}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  {/* File tab indicator */}
                  <div className="absolute -top-3 left-4 bg-[#262626] border-2 border-gray-700 border-b-0 px-4 py-1 rounded-t-lg">
                    <span className="text-white text-sm font-medium">{project.title}</span>
                  </div>

                  {/* Lighting effect */}
                  <div
                    className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                    style={{
                      background: "radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.08), transparent 60%)",
                    }}
                  />

                  {/* Content */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* Image */}
                    {project.image && (
                      <div className="relative w-full h-40 lg:h-[35vh] rounded-lg overflow-hidden z-10">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 380px"
                        />
                      </div>
                    )}

                    {/* Text content - always visible */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-3 text-white z-10 relative">
                        {project.title}
                      </h3>
                      <p className={clsx(
                        "text-gray-400 text-sm transition-all duration-300",
                        {
                          "line-clamp-3": !isExpanded,
                          "": isExpanded
                        }
                      )}>
                        {project.description}
                      </p>
                      
                      {/* Expandable details */}
                      {isExpanded && (
                        <div className="mt-4 space-y-2 animate-fadeIn">
                          {/* Add any additional project details here */}
                          <div className="flex items-center gap-2 text-purple-400">
                            <FaLocationArrow size={14} />
                            <span className="text-sm">View Project Details</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="flex justify-center items-center mt-4">
                    <p className="flex items-center text-sm text-purple border border-[#CBACF9] px-4 py-2 rounded-full hover:bg-[#CBACF9]/10 transition cursor-pointer">
                      {project.message}
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Original horizontal layout */}
          <div className="hidden lg:flex overflow-x-auto pr-2 scrollbar-thin scrollbar-thumb-yellow-500 hover:scrollbar-thumb-yellow-400">
            {projectsData.map((project, index) => {
              const isHovered = hoveredIndex === index;
              const isNextCard = hoveredIndex !== null && index === hoveredIndex + 1;

              return (
                <div
                  key={index}
                  className={clsx(
                    "flex-shrink-0 h-[100%] bg-[#262626] rounded-xl transition-all duration-300 ease-in-out border-2 border-gray-700 p-8 relative flex flex-col",
                    {
                      "z-50": isHovered,
                    }
                  )}
                  style={{
                    width: "27rem",
                    marginLeft: index === 0 ? "0" : "-5cm",
                    zIndex: index + 10,
                    transform: isNextCard ? "translateX(10rem)" : "none",
                    transformStyle: "preserve-3d",
                    transformOrigin: "bottom left",
                    boxShadow: `
                      0 80px 160px rgb(15, 1, 1),
                      0 40px 100px rgba(2, 0, 0, 0.8),
                      0 0 100px rgba(0, 0, 0, 1),
                      inset 0 0 60px rgba(0, 0, 0, 0.9)
                    `,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Lighting effect */}
                  <div
                    className="absolute inset-0 pointer-events-none z-0 rounded-xl"
                    style={{
                      background: "radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.08), transparent 60%)",
                    }}
                  />

                  {/* Image */}
                  {project.image && (
                    <div className="relative w-full h-[35vh] mb-4 rounded-xl overflow-hidden z-10">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        className="z-10 bg-[#262626] sm:w-64 w-[60vw] overflow-hidden h-full lg:h-[15vh] lg:rounded-lg absolute object-cover"
                      />
                    </div>
                  )}

                  {/* Top Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-white z-10 relative px-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm px-2 mb-4">
                      {project.description.length > 25
                        ? `${project.description.slice(0, 100)}...`
                        : project.description}
                    </p>
                  </div>

                  {/* Static Bottom Message */}
                  <div className="flex justify-center items-center mt-4">
                    <p className="flex items-center lg:text-xl md:text-xs text-sm text-purple border border-[#CBACF9] px-4 py-1 rounded-full hover:bg-[#CBACF9]/10 transition cursor-pointer">
                      {project.message}
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile instructions */}
      <div className="lg:hidden flex justify-center mt-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
          <p className="text-white/70 text-xs flex items-center gap-2">
            <span className="text-sm">↓</span>
            Scroll vertically to browse projects
          </p>
        </div>
      </div>
    </div>
  );
}