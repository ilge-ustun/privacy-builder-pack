import { GitHubFile } from "@/types/gitHubFile"

interface UseGithubFilesOptions {
  repoOwner: string
  repoName: string
  folderPath: string
  fileType?: string
}

export function useGithubFiles({
  repoOwner,
  repoName,
  folderPath,
  fileType = "md",
}: UseGithubFilesOptions) {
  const fetchFiles = async (): Promise<GitHubFile[]> => {
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub folder: ${response.status}`)
    }

    const files: GitHubFile[] = await response.json()
    const gitHubFiles = files.filter(
      (file) => file.name.endsWith(`.${fileType}`) && file.name !== "contribute.md",
    )

    if (fileType === "png") {
      return gitHubFiles as GitHubFile[]
    }

    const fetchedFiles = await Promise.all(
      gitHubFiles.map(async (file) => {
        const res = await fetch(file.download_url)
        const text = await res.text()
        return { name: file.name, content: text, download_url: file.download_url }
      }),
    )

    return fetchedFiles as GitHubFile[]
  }

  return { files: fetchFiles() }
}
