"use client"

import { useEffect, useRef } from "react"

export default function BlockchainCube({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let rotation = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    // Draw cube
    const drawCube = () => {
      const size = Math.min(canvas.width, canvas.height) * 0.4
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw cube
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Front face
      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 2)
      ctx.lineTo(size / 2, -size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.closePath()
      ctx.strokeStyle = "#f59e0b"
      ctx.lineWidth = 2
      ctx.stroke()

      // Inner lines
      ctx.beginPath()
      ctx.moveTo(-size / 4, -size / 2)
      ctx.lineTo(-size / 4, size / 2)
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(0, size / 2)
      ctx.moveTo(size / 4, -size / 2)
      ctx.lineTo(size / 4, size / 2)

      ctx.moveTo(-size / 2, -size / 4)
      ctx.lineTo(size / 2, -size / 4)
      ctx.moveTo(-size / 2, 0)
      ctx.lineTo(size / 2, 0)
      ctx.moveTo(-size / 2, size / 4)
      ctx.lineTo(size / 2, size / 4)

      ctx.strokeStyle = "#f59e0b"
      ctx.lineWidth = 1
      ctx.stroke()

      // Nodes
      for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {
          if (Math.random() > 0.3) {
            ctx.beginPath()
            ctx.arc((x * size) / 4, (y * size) / 4, 3, 0, Math.PI * 2)
            ctx.fillStyle = Math.random() > 0.7 ? "#f59e0b" : "#ffffff"
            ctx.fill()
          }
        }
      }

      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      rotation += 0.005
      drawCube()
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

  return <canvas ref={canvasRef} className={`${className}`} />
}
