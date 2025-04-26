"use client"

import { useState } from "react"
import Image from "next/image"

interface CollapseProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Collapse({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="w-full thin-border overflow-hidden p-5 hover-shine hover:border-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-baseline justify-between transition-colors hover:cursor-pointer"
      >
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-bold text-white text-left">{title}</h3>
          {subtitle && <p className="text-sm text-white mt-1">{subtitle}</p>}
        </div>
        <Image
          src="/icons/chevron.svg"
          alt="Toggle"
          width={15}
          height={15}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-6">{children}</div>
      </div>
    </div>
  )
}
