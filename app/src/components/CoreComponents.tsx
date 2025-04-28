import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import CoreComponentCard from "@/components/CoreComponentCard"
import coreComponents from "@/data/coreComponents.json"
import { useScreenSize } from "@/hooks/useScreenSize"
import { useDecryptAnimation } from "@/hooks/useDecryptAnimation"

export default function CoreComponents() {
  const [isHovered, setIsHovered] = useState(false)
  const isSmallScreen = useScreenSize()

  const targetRef = useRef<HTMLDivElement>(null)

  const [stablePosition, setStablePosition] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  const getBackgroundSize = useCallback(() => {
    if (windowWidth < 768) {
      return "370px"
    } else if (windowWidth < 960) {
      return "500px"
    } else if (windowWidth < 1024) {
      return "600px"
    } else {
      return "800px"
    }
  }, [windowWidth])

  const getBackgroundPosition = useCallback(() => {
    if (stablePosition) {
      if (windowWidth < 768) {
        return `right -30px top ${stablePosition - 160}px`
      } else if (windowWidth < 960) {
        return `right 0px top ${stablePosition - 200}px`
      } else if (windowWidth < 1024) {
        return `right 0px top ${stablePosition - 230}px`
      } else {
        return `right 0px top ${stablePosition - 380}px`
      }
    }
    return ""
  }, [windowWidth, stablePosition])

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const elementObserver = new ResizeObserver(() => {
      if (targetRef.current) {
        setStablePosition(targetRef.current.offsetTop)
      }
    })
    const windowObserver = new ResizeObserver(() => {
      setWindowWidth(window.innerWidth)
    })

    if (targetRef.current) {
      elementObserver.observe(targetRef.current)
    }
    windowObserver.observe(document.documentElement)

    return () => {
      elementObserver.disconnect()
      windowObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const updateBackgroundPosition = () => {
      if (targetRef.current) {
        const main = document.querySelector("main")
        if (main && stablePosition) {
          main.style.backgroundPosition = `${getBackgroundPosition()}, left bottom`
          main.style.backgroundImage = "url(/bg0.webp), url(/bg1.webp)"
          main.style.backgroundSize = getBackgroundSize()
        }
      }
    }

    updateBackgroundPosition()
    window.addEventListener("resize", updateBackgroundPosition)
    window.addEventListener("scroll", updateBackgroundPosition)

    return () => {
      window.removeEventListener("resize", updateBackgroundPosition)
      window.removeEventListener("scroll", updateBackgroundPosition)
    }
  }, [getBackgroundSize, getBackgroundPosition, stablePosition])

  const originalTitle = "Core Components"
  const glitchedTitle = "©¢w§¶Ï"
  const displayTitle = useDecryptAnimation(originalTitle, glitchedTitle, isHovered)

  return (
    <>
      <div
        className="w-full flex gap-2 space-x-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <Image
          src="/icons/locker.svg"
          alt="Core Components"
          width={28}
          height={28}
          className="w-auto h-auto"
        />
        <h1 className="text-white text-2xl font-bold">
          {isSmallScreen ? originalTitle : displayTitle}
        </h1>
      </div>
      <div
        ref={targetRef}
        className="target-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {coreComponents.map((component) => (
          <CoreComponentCard key={component.title} component={component} />
        ))}
      </div>
    </>
  )
}
