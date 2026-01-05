"use client"

import { useEffect, useState } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex mx-auto flex-col items-center justify-center bg-neutral-900">
      <div className="mb-8 text-center">
        <div className="mb-4 mx-auto h-16 w-16 animate-spin rounded-full border-4 border-neutral-700 border-t-amber-500" />
        <h2 className="font-mono text-2xl font-bold text-white">Africa's Blockchain Club</h2>
        <p className="text-neutral-400">Loading the future...</p>
      </div>

      <div className="w-64">
        <div className="mb-2 flex justify-between text-sm text-neutral-400">
          <span>Loading</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-neutral-700">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
