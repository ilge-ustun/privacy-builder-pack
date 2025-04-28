import frameworkExamples from "@/data/frameworkExamples.json"
import { FrameworkExample } from "@/types/frameworkExamples"
import { splitIntoColumns } from "@/utils/splitIntoColumns"
import ExternalLink from "./ExternalLink"

const contribute = {
  title: "Contribute",
  link: "https://github.com/web3privacy/privacy-builder-pack/blob/main/framework/contribute.md",
  image: "",
}

export default function FrameworkExamples() {
  const columns = splitIntoColumns([...frameworkExamples, contribute], 3)

  return (
    <div className="w-full mt-32 border-t border-white/20 pt-24 px-0 md:px-24">
      <h3 className="text-white font-bold mb-12 text-xl">$ examples.log</h3>
      <div className="flex flex-col md:flex-row gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((item: FrameworkExample) => (
              <ExternalLink
                key={item.title}
                href={item.link}
                text={item.title}
                image={item.image}
                highlight={item.title === "Contribute"}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
