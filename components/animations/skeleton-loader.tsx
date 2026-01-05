"use client";

import { cn } from "@/lib/utils"

interface SkeletonLoaderProps {
  className?: string
  lines?: number
}

export default function SkeletonLoader({ className, lines = 3 }: SkeletonLoaderProps) {
  return (
    <div className={cn("animate-pulse space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={cn("h-4 bg-neutral-200 rounded", i === lines - 1 ? "w-3/4" : "w-full")} />
      ))}
    </div>
  )
}
