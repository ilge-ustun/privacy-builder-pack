import Image from "next/image"
import { useState } from "react"
import CoreComponentCard from "@/components/CoreComponentCard"
import coreComponents from "@/data/coreComponents.json"
import { useScreenSize } from "@/hooks/useScreenSize"

export default function CoreComponents() {
  const [isHovered, setIsHovered] = useState(false)
  const isSmallScreen = useScreenSize()

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
          {isHovered || isSmallScreen ? "Core Components" : "©¢w§¶Ï"}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {coreComponents.map((component) => (
          <CoreComponentCard key={component.title} component={component} />
        ))}
      </div>
    </>
  )
}
