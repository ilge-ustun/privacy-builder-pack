"use client"
import { useState } from "react"
import Image from "next/image"
import MultiSelectTags from "@/components/SelectTags"

interface SearchToolProps {
  onSearch: (query: string, tags: string[]) => void
}

export default function SearchTool({ onSearch }: SearchToolProps) {
  const [query, setQuery] = useState("")
  const [tags, setTags] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    if (onSearch) {
      onSearch(e.target.value, tags)
    }
  }

  const handleChangeTags = (selected: string) => {
    if (selected === "All categories") {
      setTags([])
      onSearch(query, [])
    } else {
      setTags([selected])
      onSearch(query, [selected])
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full my-6">
      <div className="flex items-center thin-border text-white w-full p-4 grow">
        <Image src="/icons/search.svg" alt="Search Icon" width={23} height={23} />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="ml-4 outline-none text-sm w-full placeholder-white/50"
          placeholder="Search tools..."
        />
      </div>
      <MultiSelectTags onChange={handleChangeTags} />
    </div>
  )
}
