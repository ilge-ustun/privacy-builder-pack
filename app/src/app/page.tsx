"use client"
import CoreComponents from "@/components/CoreComponents"
import Image from "next/image"
import Hero from "@/components/Hero"
import GetStarted from "@/components/GetStarted"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030303] bg-[url('/bg1_sm.webp')] lg:bg-[url('/bg1.webp')] bg-contain sm:bg-cover bg-top-right bg-no-repeat pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <Hero />
        <div className="flex space-x-4 mt-2 mb-20 self-start">
          <Link
            href="#get-started"
            className="bg-white text-black px-4 sm:px-12 py-2 rounded-md disabled:opacity-50 cursor-pointer disabled:hover:cursor-default text-xs sm:text-base hover-shine"
          >
            Get Started
          </Link>

          <button
            type="button"
            className="text-white px-4 sm:px-8 py-2 rounded-md border disabled:opacity-50 cursor-pointer disabled:hover:cursor-default text-xs sm:text-base flex hover-shine"
            onClick={() => {}}
            disabled={false}
          >
            <Image
              src="/icons/cursor.svg"
              alt="Documentation"
              width={20}
              height={20}
              className="w-auto h-auto"
            />{" "}
            Documentation
          </button>
        </div>
        <CoreComponents />
        <GetStarted />
      </div>
    </main>
  )
}
