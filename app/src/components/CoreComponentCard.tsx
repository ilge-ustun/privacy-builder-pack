import Link from "next/link"
import Image from "next/image"
import { CoreComponent } from "@/types/coreComponent"
import { useState } from "react"
import { glitchify } from "@/utils/glitchify"
import { useScreenSize } from "@/hooks/useScreenSize"

export default function CoreComponentCard({ component }: { component: CoreComponent }) {
  const [isHovered, setIsHovered] = useState(false)
  const isSmallScreen = useScreenSize()

  const glitchedTitle = glitchify(component.title)
  const glitchedDescription = glitchify(component.description)
  return (
    <Link
      key={component.title}
      href={component.link}
      className="group relative flex flex-col space-y-2 items-start p-6 bg-white/5 backdrop-blur-sm thin-border hover:border-white/30 transition-all duration-300 hover-shine min-h-46"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <Image
        src={component.icon}
        alt={component.title}
        width={24}
        height={24}
        className="opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <h3 className="text-white text-lg font-medium">
        {isHovered || isSmallScreen ? component.title : glitchedTitle}
      </h3>
      <p className="text-white/70 text-sm">
        {isHovered || isSmallScreen ? component.description : glitchedDescription}
      </p>
    </Link>
  )
}
