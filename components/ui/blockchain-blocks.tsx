"use client"

import { useEffect, useRef } from "react"

export default function BlockchainBlocks({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let blocks: { x: number; y: number; width: number; height: number; speed: number; color: string }[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      initBlocks()
    }

    // Initialize blocks
    const initBlocks = () => {
      blocks = []
      const blockCount = Math.floor(canvas.width / 100)

      for (let i = 0; i < blockCount; i++) {
        blocks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width: 40 + Math.random() * 20,
          height: 20 + Math.random() * 10,
          speed: 0.2 + Math.random() * 0.3,
          color: i % 5 === 0 ? "#f59e0b" : "#ffffff",
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw blocks
      blocks.forEach((block) => {
        // Update position
        block.y += block.speed

        // Reset position when off screen
        if (block.y > canvas.height) {
          block.y = -block.height
          block.x = Math.random() * canvas.width
        }

        // Draw block
        ctx.beginPath()
        ctx.rect(block.x, block.y, block.width, block.height)
        ctx.strokeStyle = block.color
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw hash inside block
        ctx.font = "8px monospace"
        ctx.fillStyle = block.color
        ctx.fillText("0x" + Math.random().toString(16).substr(2, 6), block.x + 5, block.y + 15)
      })

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

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
