import { FrameworkItem } from "@/types/framework"
import frameworkItems from "@/data/pagencyFramework.json"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { saveFormData, getFormData } from "@/utils/indexedDB"

interface Props {
  itemId: number
}

export default function PagencyFrameworkForm({ itemId }: Props) {
  const router = useRouter()
  const item = (frameworkItems as FrameworkItem[]).find((item) => item.id === String(itemId))
  const [formData, setFormData] = useState<Record<string, string>>({})

  useEffect(() => {
    const loadSavedData = async () => {
      try {
        const savedData = await getFormData(itemId)
        if (savedData) {
          setFormData(savedData)
        } else {
          setFormData({})
        }
      } catch (error) {
        console.error("Error loading saved data:", error)
      }
    }
    loadSavedData()
  }, [itemId])

  if (!item) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await saveFormData(itemId, formData)
      if (itemId === frameworkItems.length) {
        router.push(`/framework?item=0`)
      } else {
        router.push(`/framework?item=${itemId + 1}`)
      }
    } catch (error) {
      console.error("Error saving form data:", error)
    }
  }

  const handlePrevious = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await saveFormData(itemId, formData)
      if (itemId === 1) {
        return
      } else {
        router.push(`/framework?item=${itemId - 1}`)
      }
    } catch (error) {
      console.error("Error saving form data:", error)
    }
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
          className="text-white px-4 py-2 rounded-md border disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-default text-xs sm:text-base hover-shine"
          onClick={handlePrevious}
          disabled={itemId === 1}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-md disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-default text-xs sm:text-base hover-shine"
        >
          {itemId === frameworkItems.length ? "Generate Summary" : "Next"}
        </button>
      </div>
    </form>
  )
}
