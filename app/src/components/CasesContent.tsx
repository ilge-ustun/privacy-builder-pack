import { Suspense, use } from "react"
import Collapse from "@/components/Collapse"
import { useGithubFiles } from "@/hooks/useGithubFiles"
import { GitHubFile } from "@/types/gitHubFile"
import Skeleton from "@/components/Skeleton"
import MarkdownRenderer from "@/components/MarkdownRenderer"
import ExternalLink from "@/components/ExternalLink"
import { addToTheEnd, splitIntoColumns } from "@/utils/splitIntoColumns"
import { useScreenSize } from "@/hooks/useScreenSize"

function getName(name: string) {
  return name.replace(".md", "").replace(/-/g, " ")
}

const contribute = {
  name: "contribute.md",
  link: "https://github.com/web3privacy/privacy-builder-pack/blob/main/cases/contribute.md",
  download_url: "",
}

function CasesContentInner({ caseFiles }: { caseFiles: Promise<GitHubFile[]> }) {
  const files = use(caseFiles)

  const isSmallScreen = useScreenSize()

  const columns = isSmallScreen
    ? splitIntoColumns([...files, contribute])
    : addToTheEnd(splitIntoColumns(files), contribute)

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((file: GitHubFile) => {
              if (file.name === "contribute.md") {
                return (
                  <ExternalLink
                    key={file.name}
                    href="https://github.com/web3privacy/privacy-builder-pack/blob/main/cases/contribute.md"
                    text="Contribute"
                    highlight
                  />
                )
              } else {
                return (
                  <Collapse key={file.name} title={getName(file.name)}>
                    <div className="flex flex-col">
                      <MarkdownRenderer content={file.content || ""} />
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
  const { files } = useGithubFiles({
    repoOwner: "web3privacy",
    repoName: "privacy-builder-pack",
    folderPath: "cases",
  })

  return (
    <Suspense fallback={<Skeleton />}>
      <CasesContentInner caseFiles={files} />
    </Suspense>
  )
}
