"use client"

import { useEffect, useRef } from "react"

export default function BlockchainHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create hexagon pattern
    const drawHexagon = (x: number, y: number, size: number, color: string) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const hexSize = 30
      const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 1
      const cols = Math.ceil(canvas.width / (hexSize * Math.sqrt(3))) + 1

      const time = Date.now() / 3000

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSize * Math.sqrt(3)
          const y = row * hexSize * 1.5 + (col % 2 === 0 ? 0 : hexSize * 0.75)

          const distFromCenter = Math.sqrt(
            Math.pow((x - canvas.width / 2) / canvas.width, 2) + Math.pow((y - canvas.height / 2) / canvas.height, 2),
          )

          const alpha = Math.max(0, 0.5 - distFromCenter)
          const pulseAlpha = alpha * (0.5 + 0.5 * Math.sin(time + distFromCenter * 5))

          const color = `rgba(245, 158, 11, ${pulseAlpha})`
          drawHexagon(x, y, hexSize, color)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />
}
