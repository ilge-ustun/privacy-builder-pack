import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { CoreComponent } from "@/types/coreComponent"

export default function NavbarLink({
  item,
  onClick,
}: {
  item: CoreComponent
  onClick: () => void
}) {
  const pathname = usePathname()
  return (
    <Link
      href={item.link}
      target={item.external ? "_blank" : "_self"}
      className={`flex items-center space-x-2 whitespace-nowrap transition-transform duration-200 cursor-pointer hover:scale-105 ${
        pathname === item.link ? "opacity-100" : "opacity-70 hover:opacity-100"
      }`}
      onClick={onClick}
    >
      <div className="w-5 h-5 relative flex-shrink-0">
        <Image src={item.icon} alt={item.title} fill />
      </div>
      <span className="text-white">{item.shortTitle}</span>
    </Link>
  )
}
