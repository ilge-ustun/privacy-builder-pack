import { useScreenSize } from "@/hooks/useScreenSize"
import { useState } from "react"

const title = "Privacy Builder Pack_"
const subtitle = "Your toolkit for digital sovereignty in the surveillance age"

const glitchedTitle = ">¸¯íº)]z³ٲO"
const glitchedSubtitle = "b«¶%+_¢·b+Zȯz·¢{r{az˫½襕©۹¨"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const isSmallScreen = useScreenSize()
  return (
    <div
      className="self-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
        {isHovered || isSmallScreen ? title : glitchedTitle}
      </h1>
      <p className="text-lg xl:text-xl">
        {isHovered || isSmallScreen ? subtitle : glitchedSubtitle}
      </p>
    </div>
  )
}
