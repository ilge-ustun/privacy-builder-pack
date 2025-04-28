"use client"
import InlineExternalLink from "@/components/InlineExternalLink"
import Image from "next/image"
import ToolsCategories from "@/components/ToolsCategories"
import tools1 from "@/data/tools.json"
import tools2 from "@/data/privacyFocusedTools.json"
import SearchTool from "@/components/SearchTool"
import { useState } from "react"
import { Category } from "@/types/tools"
import TerminalCursor from "@/components/TerminalCursor"

const tools = [...tools1, ...tools2]

interface SearchQuery {
  query: string
  tags: string[]
}

function filterTools(tools: Category[], searchQuery: SearchQuery) {
  if (searchQuery.tags.length === 0 && searchQuery.query.trim() === "") {
    return tools
  }

  return tools
    .map((tool) => {
      // Check if tool's category or description matches text query
      const matchesText =
        searchQuery.query.trim() === "" ||
        tool.category.toLowerCase().includes(searchQuery.query.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.query.toLowerCase())

      // If tool matches text query, return full tool
      if (matchesText && searchQuery.tags.length === 0) {
        return tool
      }

      // Otherwise, filter items by both tags and text
      const filteredItems = tool.items.filter((item) => {
        const matchesTags =
          searchQuery.tags.length === 0 || searchQuery.tags.every((tag) => item.tags.includes(tag))

        const matchesItemText =
          searchQuery.query === "" ||
          item.name.toLowerCase().includes(searchQuery.query.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.query.toLowerCase())

        return matchesTags && matchesItemText
      })

      // Only return tool if it has matching items
      return filteredItems.length > 0 ? { ...tool, items: filteredItems } : null
    })
    .filter(Boolean) as Category[]
}

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    query: "",
    tags: [],
  })

  const filteredTools = filterTools(tools, searchQuery)

  const handleSearch = (query: string, tags: string[]) => {
    setSearchQuery({ query, tags })
  }

  return (
    <main className="relative min-h-screen bg-[#030303] pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image src="/icons/tools.svg" alt="Tools" width={28} height={28} />
          <h1 className="text-white text-2xl">
            Web3 & Privacy Tools
            <TerminalCursor />
          </h1>
        </div>
        <div>
          <p className="mb-2">A curated collection of tools and resources.</p>
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-row mr-8">
              <span className="mr-2">→</span>{" "}
              <InlineExternalLink href="https://haveibeenpwned.com" text="pwned?" />
            </div>
            <div className="flex flex-row mr-8">
              <span className="mr-2">→</span>{" "}
              <InlineExternalLink href="https://monitor.mozilla.org/breaches" text="Data Leaks" />
            </div>
            <div className="flex flex-row mr-8">
              <span className="mr-2">→</span>{" "}
              <InlineExternalLink href="https://privacytests.org/" text="Browser Privacy" />
            </div>
            <div className="flex flex-row mr-8">
              <span className="mr-2">→</span>{" "}
              <InlineExternalLink
                href="https://github.com/web3privacy/privacy-builder-pack/blob/main/tools/contribute.md"
                color="green"
                text="Contribute"
              />
            </div>
          </div>
        </div>

        <SearchTool onSearch={handleSearch} />

        <ToolsCategories toolsCategories={filteredTools} />
      </div>
    </main>
  )
}
