import { Suspense, use } from "react"
import Collapse from "@/components/Collapse"
import { useGithubMarkdownFiles } from "@/hooks/useGithubMarkdownFiles"
import { MarkdownFile } from "@/types/markdownFile"
import ReactMarkdown from "react-markdown"
import Skeleton from "@/components/Skeleton"

function getName(content: string) {
  const firstLine = content.split("\n")[0]
  return firstLine.replace(/^#\s*/, "").trim()
}

function TipsContentInner({ tipFiles }: { tipFiles: Promise<MarkdownFile[]> }) {
  const files = use(tipFiles)

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
            {column.map((file: MarkdownFile) => (
              <Collapse key={file.name} title={getName(file.content)}>
                <div className="flex flex-col">
                  <ReactMarkdown>{file.content}</ReactMarkdown>
                </div>
              </Collapse>
            ))}
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
