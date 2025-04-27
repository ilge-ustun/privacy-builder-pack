import { MarkdownFile } from "@/types/markdownFile"

interface UseGithubMarkdownFilesOptions {
  repoOwner: string
  repoName: string
  folderPath: string
}

export function useGithubMarkdownFiles({
  repoOwner,
  repoName,
  folderPath,
}: UseGithubMarkdownFilesOptions) {
  const fetchMarkdownFiles = async (): Promise<MarkdownFile[]> => {
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub folder: ${response.status}`)
    }

    interface GithubFile {
      name: string
      download_url: string
    }

    const files: GithubFile[] = await response.json()
    const mdFiles = files.filter(
      (file) => file.name.endsWith(".md") && file.name !== "contribute.md",
    )

    const fetchedFiles = await Promise.all(
      mdFiles.map(async (file) => {
        const res = await fetch(file.download_url)
        const text = await res.text()
        return { name: file.name, content: text }
      }),
    )

    return fetchedFiles
  }

  return { markdownFiles: fetchMarkdownFiles() }
}
