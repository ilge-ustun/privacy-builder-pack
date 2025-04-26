"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import coreComponents from "@/data/coreComponents.json"

const navbarItems = coreComponents.slice(1)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="absolute top-0 left-0 right-0 p-0 text-white z-50">
      <div className="p-4 relative z-100 flex md:space-x-5 items-center justify-between md:justify-center max-w-7xl mx-auto">
        <Link
          href="/"
          className={`flex items-center space-x-2 whitespace-nowrap ${
            pathname === "/" ? "opacity-100" : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="w-5 h-5 relative flex-shrink-0">
            <Image src="/icons/privacy.svg" alt="Privacy Builder Pack" fill />
          </div>
          <span className="text-white">Privacy Builder Pack</span>
        </Link>
        <button
          className="md:hidden p-2 opacity-70 hover:opacity-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-5">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center space-x-2 ${
                pathname === item.link ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              target={item.external ? "_blank" : "_self"}
            >
              <div className="w-5 h-5 relative">
                <Image src={item.icon} alt={item.shortTitle} fill />
              </div>
              <span className="text-white">{item.shortTitle}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed -translate-y-full top-0 left-0 right-0 bottom-0 bg-black transition-transform duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto p-4 space-y-8 overflow-y-auto h-full pt-20">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center space-x-2 ${
                pathname === item.link ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
              target={item.external ? "_blank" : "_self"}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-5 h-5 relative ">
                <Image src={item.icon} alt={item.title} fill />
              </div>
              <span className="text-white">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
