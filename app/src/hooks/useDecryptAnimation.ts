import { useState, useEffect } from "react"

export function useDecryptAnimation(
  originalText: string,
  glitchedText: string,
  isHovered: boolean,
  delay: number = 30,
): string {
  const [displayText, setDisplayText] = useState(glitchedText)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(glitchedText)
      setCurrentIndex(0)
      return
    }

    const interval = setInterval(() => {
      if (currentIndex < originalText.length) {
        setDisplayText(() => {
          const newText =
            originalText.slice(0, currentIndex + 1) + glitchedText.slice(currentIndex + 1)
          return newText
        })
        setCurrentIndex((prev) => prev + 1)
      } else {
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [isHovered, currentIndex, originalText, glitchedText, delay])

  return displayText
}
