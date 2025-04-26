import { ToolsData } from "@/types/tools"
import Collapse from "@/components/Collapse"
import ToolsGrid from "@/components/ToolsGrid"

export default function ToolsCategories({ toolsCategories }: { toolsCategories: ToolsData }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {toolsCategories.map((toolCategory) => (
        <Collapse
          key={toolCategory.category}
          title={toolCategory.category}
          subtitle={toolCategory.description}
        >
          <ToolsGrid tools={toolCategory.items} />
        </Collapse>
      ))}
    </div>
  )
}
