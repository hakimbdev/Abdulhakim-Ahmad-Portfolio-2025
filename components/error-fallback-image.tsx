"use client"

import Image from "next/image"
import { ComponentProps } from "react"

export function ErrorFallbackImage(props: ComponentProps<typeof Image>) {
  return (
    <Image
      {...props}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.style.display = "none"
      }}
    />
  )
}
