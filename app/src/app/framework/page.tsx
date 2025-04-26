"use client"
import { Suspense } from "react"
import Image from "next/image"
import PagencyFrameworkForm from "@/components/PagencyFrameworkForm"
import { useSearchParams } from "next/navigation"
import PagencyFrameworkSummary from "@/components/PagencyFrameworkSummary"

function FrameworkContent() {
  const searchParams = useSearchParams()
  const itemId = parseInt(searchParams.get("item") ?? "1")

  return (
    <div className="relative z-10 flex flex-col gap-[32px] items-center sm:items-start p-5 px-3 sm:px-5 pb-20 sm:p-20">
      <div className="w-full flex gap-2 space-x-2">
        <Image src="/navbar/framework.svg" alt="Pagency Framework" width={28} height={28} />
        <h1 className="text-white text-2xl">Pagency Framework_</h1>
      </div>
      <div>
        A structured approach to building privacy-enhancing applications that make a real impact.
      </div>
      {itemId === 0 ? <PagencyFrameworkSummary /> : <PagencyFrameworkForm itemId={itemId} />}
    </div>
  )
}

export default function Framework() {
  return (
    <main className="relative min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-no-repeat pt-20">
      <Suspense>
        <FrameworkContent />
      </Suspense>
    </main>
  )
}
