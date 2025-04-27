import { Tool } from "@/types/tools"
import ToolCard from "@/components/ToolCard"
import splitIntoColumns from "@/utils/splitIntoColumns"

export default function ToolsGrid({ tools }: { tools: Tool[] }) {
  const columns = splitIntoColumns(tools, 3)

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
