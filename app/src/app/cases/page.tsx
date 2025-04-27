"use client"
import Image from "next/image"
import CasesContent from "@/components/CasesContent"

export default function Cases() {
  return (
    <main className="relative min-h-screen bg-[#030303] bg-[url('/bg4.webp')] bg-cover bg-center bg-no-repeat pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image
            src="/icons/cases.svg"
            alt="Cases"
            width={28}
            height={28}
            className="w-auto h-auto"
          />
          <h1 className="text-white text-2xl">Local-First Privacy Cases_</h1>
        </div>
        <p>
          Real, local stories to inspire you to build impactful privacy solutions for the
          communities most in need.
        </p>
        <CasesContent />
      </div>
    </main>
  )
}
