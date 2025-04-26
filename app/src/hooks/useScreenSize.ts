import { useEffect, useState } from "react"

export function useScreenSize(breakpoint: number = 640) {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [breakpoint])

  return isSmallScreen
}
