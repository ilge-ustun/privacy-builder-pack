import ExternalLink from "@/components/ExternalLink"
import tailOsUserGuides from "@/data/tailOsUserGuides.json"
import { TailOsUserGuide } from "@/types/tailOsUserGuides"
import splitIntoColumns from "@/utils/splitIntoColumns"

export default function TailOsUserGuides() {
  const columns = splitIntoColumns(tailOsUserGuides)

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((link: TailOsUserGuide) => (
              <ExternalLink key={link.title} href={link.url} text={link.title} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
