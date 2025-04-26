export interface Tool {
  name: string
  link: string
  description: string
  tags: string[]
}

export interface Category {
  category: string
  description: string
  items: Tool[]
}

export type ToolsData = Category[]
