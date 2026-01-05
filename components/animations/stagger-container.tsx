"use client"

import type React from "react"
import { Children, cloneElement, isValidElement } from "react"

interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  staggerDelay?: number
}

export default function StaggerContainer({
  children,
  staggerDelay = 100,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <div className={className} {...props}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          const element = child as React.ReactElement<{ style?: React.CSSProperties }>
          const existingStyle = element.props.style || {}

          return cloneElement(element, {
            style: {
              ...existingStyle,
              animationDelay: `${index * staggerDelay}ms`,
            },
          })
        }
        return child
      })}
    </div>
  )
}
