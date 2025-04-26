import { Tool } from "@/types/tools"
import ToolCard from "@/components/ToolCard"

export default function ToolsGrid({ tools }: { tools: Tool[] }) {
  const itemsPerColumn = Math.ceil(tools.length / 3)

  // Split into 3 columns with dynamic number of items
  const columns = [
    tools.slice(0, itemsPerColumn),
    tools.slice(itemsPerColumn, itemsPerColumn * 2),
    tools.slice(itemsPerColumn * 2),
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((tool: Tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
