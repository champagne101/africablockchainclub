"use client"

import { Button } from "@/components/ui/button"
import type React from "react"

interface JoinCommunityButtonProps {
  variant?: "primary" | "outline"
  size?: "default" | "large" | "full"
  icon?: React.ReactNode
  text?: string
  className?: string
}

export default function JoinCommunityButton({
  variant = "primary",
  size = "default",
  icon,
  text = "Join Our Community",
  className = "",
}: JoinCommunityButtonProps) {
  const handleJoinCommunity = () => {
    window.open("https://t.me/+a_GAuEkRdyRiNWE0", "_blank", "noopener,noreferrer")
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-amber-500 text-black hover:bg-amber-400"
      case "outline":
        return "border-white text-white hover:bg-white hover:text-black border"
      default:
        return "bg-amber-500 text-black hover:bg-amber-400"
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "large":
        return "px-8 py-4 text-lg font-semibold"
      case "full":
        return "w-full"
      default:
        return ""
    }
  }

  return (
    <Button
      className={`transform hover:scale-105 transition-all duration-200 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      onClick={handleJoinCommunity}
    >
      {icon}
      {text}
    </Button>
  )
}
