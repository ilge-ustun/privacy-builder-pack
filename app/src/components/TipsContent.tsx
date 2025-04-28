import { Suspense, use } from "react"
import Collapse from "@/components/Collapse"
import { useGithubMarkdownFiles } from "@/hooks/useGithubMarkdownFiles"
import { MarkdownFile } from "@/types/markdownFile"
import Skeleton from "@/components/Skeleton"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import ExternalLink from "@/components/ExternalLink"
import { addToTheEnd, splitIntoColumns } from "@/utils/splitIntoColumns"

function getName(content: string) {
  const firstLine = content.split("\n")[0]
  return firstLine.replace(/^#\s*/, "").trim()
}

function getContent(content: string) {
  const lines = content.split("\n")
  return lines.slice(1).join("\n").trim()
}

function TipsContentInner({ tipFiles }: { tipFiles: Promise<MarkdownFile[]> }) {
  const files = use(tipFiles)

  const columns = addToTheEnd(splitIntoColumns(files, 3), {
    name: "contribute.md",
    content: "",
  })

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((file: MarkdownFile) => {
              if (file.name === "contribute.md") {
                return (
                  <ExternalLink
                    key={file.name}
                    href="https://github.com/web3privacy/privacy-builder-pack/blob/main/tips/contribute.md"
                    text="Contribute"
                    highlight
                  />
                )
              } else {
                return (
                  <Collapse key={file.name} title={getName(file.content)}>
                    <div className="flex flex-col">
                      <MarkdownRenderer content={getContent(file.content)} />
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

export default function TipsContent() {
  const { markdownFiles } = useGithubMarkdownFiles({
    repoOwner: "web3privacy",
    repoName: "privacy-builder-pack",
    folderPath: "tips",
  })

  return (
    <Suspense fallback={<Skeleton />}>
      <TipsContentInner tipFiles={markdownFiles} />
    </Suspense>
  )
}
