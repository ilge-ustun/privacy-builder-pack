import glossary from "@/data/glossary.json"
import Collapse from "@/components/Collapse"
import { GlossaryCategory, GlossaryTerm } from "@/types/glossary"

export default function GlossaryContent() {
  const itemsPerColumn = Math.ceil(glossary.length / 3)

  // Split into 3 columns with dynamic number of items
  const columns = [
    glossary.slice(0, itemsPerColumn),
    glossary.slice(itemsPerColumn, itemsPerColumn * 2),
    glossary.slice(itemsPerColumn * 2),
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((category: GlossaryCategory) => (
              <Collapse key={category.category} title={category.category}>
                <div className="flex flex-col">
                  {category.terms.map((term: GlossaryTerm, termIndex: number) => (
                    <div
                      key={term.term}
                      className={`flex flex-col gap-1 py-6 ${
                        termIndex !== category.terms.length - 1 ? "border-b border-white" : ""
                      }`}
                    >
                      <h3 className="text-green font-bold">{term.term}</h3>
                      <p className="text-white/80 text-sm mt-2">{term.definition}</p>
                    </div>
                  ))}
                </div>
              </Collapse>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
