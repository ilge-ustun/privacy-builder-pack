import Link from "next/link"
import Image from "next/image"
import { CoreComponent } from "@/types/coreComponent"

export default function CoreComponentCard({ component }: { component: CoreComponent }) {
  return (
    <Link
      key={component.title}
      href={component.link}
      className="group relative flex flex-col space-y-2 items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <Image
        src={component.icon}
        alt={component.title}
        width={24}
        height={24}
        className="opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <h3 className="text-white text-lg font-medium">{component.title}</h3>
      <p className="text-white/70 text-sm">{component.description}</p>
    </Link>
  )
}
