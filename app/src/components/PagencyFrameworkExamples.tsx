import { addToTheEnd, splitIntoColumns } from "@/utils/splitIntoColumns"
import ExternalLink from "@/components/ExternalLink"
import { useScreenSize } from "@/hooks/useScreenSize"
import Skeleton from "@/components/Skeleton"
import { Suspense, use } from "react"
import { useGithubFiles } from "@/hooks/useGithubFiles"
import { GitHubFile } from "@/types/gitHubFile"

const contribute = {
  name: "Contribute",
  link: "https://github.com/web3privacy/privacy-builder-pack/blob/main/framework/contribute.md",
  download_url: "",
}

function getName(name: string) {
  const withoutPrefix = name.startsWith("PFS-") ? name.slice(4) : name
  const withoutExtension = withoutPrefix.replace(/\.[^/.]+$/, "")
  return withoutExtension
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function FrameworkExamplesInner({ gitHubFiles }: { gitHubFiles: Promise<GitHubFile[]> }) {
  const files = use(gitHubFiles)
  const isSmallScreen = useScreenSize()

  const columns = isSmallScreen
    ? splitIntoColumns([...files, contribute])
    : addToTheEnd(splitIntoColumns(files), contribute, 3)

  return (
    <div className="w-full mt-32 border-t border-white/20 pt-24 px-0 md:px-24">
      <h3 className="text-white font-bold mb-12 text-xl">$ examples.log</h3>
      <div className="flex flex-col md:flex-row gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((item: GitHubFile) => (
              <ExternalLink
                key={item.name}
                href={item.name === "Contribute" ? contribute.link : item.download_url}
                text={getName(item.name)}
                highlight={item.name === "Contribute"}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FrameworkExamples() {
  const { files } = useGithubFiles({
    repoOwner: "web3privacy",
    repoName: "privacy-builder-pack",
    folderPath: "framework",
    fileType: "png",
  })
  return (
    <Suspense fallback={<Skeleton />}>
      <FrameworkExamplesInner gitHubFiles={files} />
    </Suspense>
  )
}
