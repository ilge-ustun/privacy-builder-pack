import ExternalLink from "@/components/InlineExternalLink"
import Image from "next/image"
import ToolsCategories from "@/components/ToolsCategories"
import tools1 from "@/data/tools.json"
import tools2 from "@/data/privacyFocusedTools.json"

const tools = [...tools1, ...tools2]
export default function Tools() {
  return (
    <main className="relative min-h-screen bg-[#030303] pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image src="/icons/tools.svg" alt="Tools" width={28} height={28} />
          <h1 className="text-white text-2xl">Web3 & Privacy Tools_</h1>
        </div>
        <p>A curated collection of tools and resources.</p>
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-row mr-8">
            <span className="mr-2">→</span>{" "}
            <ExternalLink href="https://haveibeenpwned.com" text="pwned?" />
          </div>
          <div className="flex flex-row mr-8">
            <span className="mr-2">→</span>{" "}
            <ExternalLink href="https://monitor.mozilla.org/breaches" text="Data Leaks" />
          </div>
          <div className="flex flex-row mr-8">
            <span className="mr-2">→</span>{" "}
            <ExternalLink href="https://privacytests.org/" text="Browser Privacy" />
          </div>
          <div className="flex flex-row mr-8">
            <span className="mr-2">→</span> <ExternalLink href="" color="green" text="Contribute" />
          </div>
        </div>

        {/* To do add search */}

        <ToolsCategories toolsCategories={tools} />
      </div>
    </main>
  )
}
