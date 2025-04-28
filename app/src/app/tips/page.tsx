"use client"
import Image from "next/image"
import TipsContent from "@/components/TipsContent"
import TerminalCursor from "@/components/TerminalCursor"

export default function Tips() {
  return (
    <main className="relative min-h-screen bg-[#030303] pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image src="/icons/tips.svg" alt="Tips" width={28} height={28} />
          <h1 className="text-white text-2xl">
            Hackathon Tips & Tricks
            <TerminalCursor />
          </h1>
        </div>
        <p>
          Explore what seasoned hackers suggest to help you to build real impact instead of dead
          code on a hackathon.
        </p>
        <TipsContent />
      </div>
    </main>
  )
}
