import { Suspense, use } from "react"
import Collapse from "@/components/Collapse"
import { useGithubMarkdownFiles } from "@/hooks/useGithubMarkdownFiles"
import { MarkdownFile } from "@/types/markdownFile"
import Skeleton from "@/components/Skeleton"
import Image from "next/image"
import MarkdownRenderer from "./MarkdownRenderer"

function getName(name: string) {
  return name.replace(".md", "").replace(/-/g, " ")
}

function CasesContentInner({ caseFiles }: { caseFiles: Promise<MarkdownFile[]> }) {
  const files = [...use(caseFiles), { name: "contribute.md", content: "" }]

  const itemsPerColumn = Math.ceil(files.length / 3)

  // Split into 3 columns with dynamic number of items
  const columns = [
    files.slice(0, itemsPerColumn),
    files.slice(itemsPerColumn, itemsPerColumn * 2),
    files.slice(itemsPerColumn * 2),
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((file: MarkdownFile) => {
              if (file.name === "contribute.md") {
                return (
                  <a
                    key={file.name}
                    href="https://github.com/web3privacy/privacy-builder-pack/blob/main/cases/contribute.md"
                    target="_blank"
                    className={
                      "w-full flex items-center justify-between h-[70px] border rounded-md border-green overflow-hidden p-5 hover-shine hover:cursor-pointer font-bold"
                    }
                  >
                    Contribute{" "}
                    <Image
                      src="/icons/chevron.svg"
                      alt="Toggle"
                      width={15}
                      height={15}
                      className="rotate-270 w-auto h-auto"
                    />
                  </a>
                )
              } else {
                return (
                  <Collapse key={file.name} title={getName(file.name)}>
                    <div className="flex flex-col">
                      <MarkdownRenderer content={file.content} />
                    </div>
                  </Collapse>
                )
              }
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CasesContent() {
  const { markdownFiles } = useGithubMarkdownFiles({
    repoOwner: "web3privacy",
    repoName: "privacy-builder-pack",
    folderPath: "cases",
  })

  return (
    <Suspense fallback={<Skeleton />}>
      <CasesContentInner caseFiles={markdownFiles} />
    </Suspense>
  )
}
