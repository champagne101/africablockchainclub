"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface ScaleInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  scale?: number
}

export default function ScaleIn({ children, className, delay = 0, scale = 0.8 }: ScaleInProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div
      ref={elementRef}
      className={cn("transition-all duration-600 ease-out", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : `scale(${scale})`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
