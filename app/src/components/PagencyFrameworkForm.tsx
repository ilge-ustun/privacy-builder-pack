import { FrameworkItem } from "@/types/framework"
import frameworkItems from "@/data/pagencyFramework.json"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface Props {
  itemId: number
}

export default function PagencyFrameworkForm({ itemId }: Props) {
  const router = useRouter()
  const item = (frameworkItems as FrameworkItem[]).find((item) => item.id === String(itemId))
  const [formData, setFormData] = useState<Record<string, string>>({})

  if (!item) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form data:", formData)
    if (itemId === frameworkItems.length) {
      router.push(`/framework?item=summary`)
    } else {
      router.push(`/framework?item=${itemId + 1}`)
    }
  }

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push(`/framework?item=${itemId - 1}`)
  }

  const handleTextAreaChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form
      className="flex flex-col border border-white/50 rounded-md w-full max-w-3xl self-center p-5 px-3 sm:px-5 text-white gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold">
        {item.id}. {item.title}
      </h2>
      <p className="text-white text-sm">{item.description}</p>

      {item.sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border border-white/50 rounded-md p-5 px-3 sm:px-5"
        >
          <h3 className="text-green font-bold">{section.title}</h3>
          {section.questions.map((question, qIndex) => (
            <div key={qIndex} className="flex flex-col gap-1 py-2">
              <label className="text-sm">{question}</label>
              <textarea
                className="bg-black/20 border border-white/20 rounded p-2 text-white"
                name={`${section.title}-${qIndex}`}
                value={formData[`${section.title}-${qIndex}`] || ""}
                onChange={(e) => handleTextAreaChange(`${section.title}-${qIndex}`, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}

      <div className="flex justify-between border-t border-white/30 mt-2 p-5">
        <button
          className="text-white px-4 py-2 rounded-md border disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-default text-xs sm:text-base"
          onClick={handlePrevious}
          disabled={itemId === 1}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-md disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-default text-xs sm:text-base"
        >
          {itemId === frameworkItems.length ? "Generate Summary" : "Next"}
        </button>
      </div>
    </form>
  )
}
