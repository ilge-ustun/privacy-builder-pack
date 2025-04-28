"use client"
import { Suspense } from "react"
import Image from "next/image"
import PagencyFrameworkForm from "@/components/PagencyFrameworkForm"
import { useSearchParams } from "next/navigation"
import PagencyFrameworkSummary from "@/components/PagencyFrameworkSummary"
import PagencyFrameworkExamples from "@/components/PagencyFrameworkExamples"
import TerminalCursor from "@/components/TerminalCursor"

function FrameworkContent() {
  const searchParams = useSearchParams()
  const itemId = parseInt(searchParams.get("item") ?? "1")

  return (
    <>
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-5 px-3 sm:px-5 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image src="/icons/framework.svg" alt="Pagency Framework" width={28} height={28} />
          <h1 className="text-white text-2xl">
            Pagency Framework
            <TerminalCursor />
          </h1>
        </div>
        <div>
          A structured approach to building privacy-enhancing applications that make a real impact.
        </div>
      </div>
      {itemId === 0 ? (
        <PagencyFrameworkSummary />
      ) : (
        <div className="relative flex flex-col gap-8 items-center sm:items-start p-5 px-3 sm:px-5 pb-20 sm:p-20 container">
          <PagencyFrameworkForm itemId={itemId} />
        </div>
      )}
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-5 px-3 sm:px-5 pb-20 sm:p-20 container">
        <PagencyFrameworkExamples />
      </div>
    </>
  )
}

export default function Framework() {
  return (
    <main className="relative min-h-screen bg-[url('/bg2.webp')] bg-cover bg-center bg-no-repeat pt-20 flex flex-col items-center">
      <Suspense>
        <FrameworkContent />
      </Suspense>
    </main>
  )
}
