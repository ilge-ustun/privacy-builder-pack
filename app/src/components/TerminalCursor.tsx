"use client"
import { useEffect, useState } from "react"

export default function TerminalCursor() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`inline-block w-2 h-6  ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-200`}
    >
      _
    </span>
  )
}
