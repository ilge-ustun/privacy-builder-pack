import { useScreenSize } from "@/hooks/useScreenSize"
import { useState } from "react"
import { useDecryptAnimation } from "@/hooks/useDecryptAnimation"
import TerminalCursor from "@/components/TerminalCursor"

const title = "Privacy Builder Pack"
const subtitle = "Your toolkit for digital sovereignty in the surveillance age"

const glitchedTitle = ">¸¯íº)]z³ٲO"
const glitchedSubtitle = "b«¶%+_¢·b+Zȯz·¢{r{az˫½襕©۹¨"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const isSmallScreen = useScreenSize()

  const displayTitle = useDecryptAnimation(title, glitchedTitle, isHovered)
  const displaySubtitle = useDecryptAnimation(subtitle, glitchedSubtitle, isHovered, 20)

  return (
    <div
      className="self-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
        {isSmallScreen ? title : displayTitle}
        <TerminalCursor />
      </h1>
      <p className="text-lg xl:text-xl">{isSmallScreen ? subtitle : displaySubtitle}</p>
    </div>
  )
}
