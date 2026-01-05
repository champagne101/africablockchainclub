"use client"

import { useEffect, useRef } from "react"

export default function BlockchainModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let blocks: { x: number; y: number; width: number; height: number; angle: number; speed: number }[] = []
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      initBlocks()
    }

    // Initialize blocks
    const initBlocks = () => {
      blocks = []
      const blockCount = 7

      for (let i = 0; i < blockCount; i++) {
        blocks.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          width: 60,
          height: 40,
          angle: (i * Math.PI * 2) / blockCount,
          speed: 0.005,
        })
      }
    }

    // Draw a 3D-like block
    const drawBlock = (x: number, y: number, width: number, height: number, angle: number) => {
      const distance = 120
      const blockX = x + Math.cos(angle) * distance
      const blockY = y + Math.sin(angle) * distance * 0.5 // Flatten the circle to make it look like perspective

      // Draw block
      ctx.save()
      ctx.translate(blockX, blockY)

      // Main face
      ctx.fillStyle = "#f59e0b"
      ctx.fillRect(-width / 2, -height / 2, width, height)

      // Top face - simulate 3D
      ctx.fillStyle = "#fbbf24"
      ctx.beginPath()
      ctx.moveTo(-width / 2, -height / 2)
      ctx.lineTo(-width / 2 + 10, -height / 2 - 10)
      ctx.lineTo(width / 2 + 10, -height / 2 - 10)
      ctx.lineTo(width / 2, -height / 2)
      ctx.closePath()
      ctx.fill()

      // Right face - simulate 3D
      ctx.fillStyle = "#d97706"
      ctx.beginPath()
      ctx.moveTo(width / 2, -height / 2)
      ctx.lineTo(width / 2 + 10, -height / 2 - 10)
      ctx.lineTo(width / 2 + 10, height / 2 - 10)
      ctx.lineTo(width / 2, height / 2)
      ctx.closePath()
      ctx.fill()

      // Draw hash-like text
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.font = "8px monospace"
      ctx.fillText("0x" + Math.random().toString(16).substr(2, 6), -width / 3, 0)

      ctx.restore()

      // Draw connection lines to adjacent blocks
      const prevIndex = (blocks.findIndex((b) => b.angle === angle) - 1 + blocks.length) % blocks.length
      const prevBlock = blocks[prevIndex]
      const prevX = x + Math.cos(prevBlock.angle) * distance
      const prevY = y + Math.sin(prevBlock.angle) * distance * 0.5

      ctx.strokeStyle = "rgba(245, 158, 11, 0.5)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(blockX, blockY)
      ctx.lineTo(prevX, prevY)
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Update and draw blocks
      blocks.forEach((block) => {
        block.angle += block.speed
        drawBlock(block.x, block.y, block.width, block.height, block.angle)
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

  return <canvas ref={canvasRef} className="h-64 w-full" />
}
