import glossarySuggestions from "@/data/glossarySuggestions.json"
import { GlossarySuggestion } from "@/types/glossarySuggestions"
import { splitIntoColumns } from "@/utils/splitIntoColumns"
import Image from "next/image"
export default function GlossarySuggestions() {
  const columns = splitIntoColumns(glossarySuggestions, 3)

  return (
    <div className="w-full mt-32 border-t border-white/20 pt-24 px-0 md:px-24">
      <h3 className="text-white font-bold mb-12 text-xl">$ suggestions.log</h3>
      <div className="flex flex-col md:flex-row gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((item: GlossarySuggestion) => (
              <a
                className="thin-border p-6 bg-black/50 flex flex-col gap-2 items-start hover-shine"
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
                <h4 className="text-white text-lg font-bold mt-6">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.description}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
