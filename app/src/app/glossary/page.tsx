"use client"
import Image from "next/image"
import GlossaryContent from "@/components/GlossaryContent"
import { Suspense } from "react"

export default function Glossary() {
  return (
    <main className="relative min-h-screen bg-[url('/bg2.webp')] bg-fixed bg-cover bg-center bg-no-repeat pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-5 px-3 sm:px-5 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image
            src="/icons/glossary.svg"
            alt="Glossary"
            width={28}
            height={28}
            className="w-auto h-auto"
          />
          <h1 className="text-white text-2xl">Glossary_</h1>
        </div>
        <p>Master the essential terminology of privacy and security in the digital age.</p>

        <Suspense>
          <GlossaryContent />
        </Suspense>
      </div>
    </main>
  )
}
