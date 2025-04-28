"use client"
import { useState } from "react"
import navbarItems from "@/data/coreComponents.json"
import NavbarLink from "@/components/NavbarLink"

const homeItem = {
  title: "Privacy Builder Pack",
  shortTitle: "Privacy Builder Pack",
  description: "Your toolkit for digital sovereignty in the surveillance age",
  link: "/",
  external: false,
  icon: "/icons/privacy.svg",
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full absolute top-0 left-0 right-0 p-0 text-white z-50">
      <div className="w-full p-4 relative z-100 flex md:gap-4 items-center justify-between md:justify-center mx-auto">
        {/* Desktop menu */}
        <div className="hidden w-full md:flex md:flex-wrap items-center justify-center gap-4">
          <NavbarLink item={homeItem} onClick={() => setIsMenuOpen(false)} />
          <div className="flex items-center gap-4">
            {navbarItems.slice(0, Math.ceil(navbarItems.length / 2)).map((item, index) => (
              <NavbarLink key={index} item={item} onClick={() => setIsMenuOpen(false)} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {navbarItems.slice(Math.ceil(navbarItems.length / 2)).map((item, index) => (
              <NavbarLink key={index} item={item} onClick={() => setIsMenuOpen(false)} />
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center justify-between z-100 w-full space-x-2">
          <NavbarLink item={homeItem} onClick={() => setIsMenuOpen(false)} />

          <button
            className="p-2 opacity-70 hover:opacity-100"
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
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden z-90 fixed -translate-y-full top-0 left-0 right-0 bottom-0 bg-black transition-transform duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto p-4 space-y-8 overflow-y-auto h-full pt-20">
          {navbarItems.map((item, index) => (
            <NavbarLink key={index} item={item} onClick={() => setIsMenuOpen(false)} />
          ))}
        </div>
      </div>
    </nav>
  )
}
