import { Tool } from "@/types/tools"
import Tag from "@/components/Tag"

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.link}
      target="_blank"
      className="flex flex-col space-y-4 items-start p-4 thin-border hover:border-white/30 transition-all duration-300 min-h-46 hover-shine"
    >
      <h3 className="text-green font-bold text-xl">$ {tool.name}</h3>
      <p className="text-white/80 text-sm">{tool.description}</p>
      <div className="flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <p className="text-white text-sm font-bold">Learn More →</p>
    </a>
  )
}
