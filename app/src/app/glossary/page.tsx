"use client"

import { Suspense } from "react"
import glossary from "@/data/glossary.json"
import Collapse from "@/components/Collapse"
import { GlossaryCategory, GlossaryTerm } from "@/types/glossary"
import Image from "next/image"
function GlossaryContent() {
  const itemsPerColumn = Math.ceil(glossary.length / 3)

  // Split glossary into 3 columns with dynamic number of items
  const columns = [
    glossary.slice(0, itemsPerColumn),
    glossary.slice(itemsPerColumn, itemsPerColumn * 2),
    glossary.slice(itemsPerColumn * 2),
  ]

  return (
    <div className="relative flex flex-col gap-8 items-center sm:items-start p-5 px-3 sm:px-5 pb-20 sm:p-20 container">
      <div className="w-full flex gap-2 space-x-2">
        <Image src="/icons/glossary.svg" alt="Glossary" width={28} height={28} />
        <h1 className="text-white text-2xl">Glossary_</h1>
      </div>
      <p>Master the essential terminology of privacy and security in the digital age.</p>
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
              {column.map((category: GlossaryCategory) => (
                <Collapse key={category.category} title={category.category}>
                  <div className="flex flex-col">
                    {category.terms.map((term: GlossaryTerm, termIndex: number) => (
                      <div
                        key={term.term}
                        className={`flex flex-col gap-1 py-6 ${
                          termIndex !== category.terms.length - 1 ? "border-b border-white" : ""
                        }`}
                      >
                        <h3 className="text-green font-bold">{term.term}</h3>
                        <p className="text-white/80 text-sm">{term.definition}</p>
                      </div>
                    ))}
                  </div>
                </Collapse>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Glossary() {
  return (
    <main className="relative min-h-screen bg-[url('/bg2.webp')] bg-fixed bg-cover bg-center bg-no-repeat pt-20 flex flex-col items-center">
      <Suspense>
        <GlossaryContent />
      </Suspense>
    </main>
  )
}
