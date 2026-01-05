"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export default function FadeIn({ children, className, delay = 0, direction = "up", duration = 600 }: FadeInProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translateY(30px)"
        case "down":
          return "translateY(-30px)"
        case "left":
          return "translateX(30px)"
        case "right":
          return "translateX(-30px)"
        default:
          return "none"
      }
    }
    return "none"
  }

  return (
    <div
      ref={elementRef}
      className={cn("transition-all ease-out", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
