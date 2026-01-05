"use client"

import { useEffect, useRef, useState } from "react"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(".floating-element")

    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement
      htmlElement.style.left = `${Math.random() * 100}%`
      htmlElement.style.top = `${Math.random() * 100}%`
      htmlElement.style.animationDelay = `${Math.random() * 2}s`
      htmlElement.style.animationDuration = `${3 + Math.random() * 2}s`
    })
  }, [])

  // Don't render random values on server
  if (!mounted) {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
    )
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="floating-element absolute animate-bounce opacity-20"
          // No inline styles here - they'll be set in useEffect
        >
          <div className="h-2 w-2 rounded-full bg-amber-500" />
        </div>
      ))}
    </div>
  )
}