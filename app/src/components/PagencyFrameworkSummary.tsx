import { useEffect, useState } from "react"
import { getAllFormData } from "@/utils/indexedDB"
import frameworkItems from "@/data/pagencyFramework.json"
import { FrameworkItem } from "@/types/framework"

export default function PagencyFrameworkSummary() {
  const [allData, setAllData] = useState<Array<{ itemId: number; data: Record<string, string> }>>(
    [],
  )

  useEffect(() => {
    const loadAllData = async () => {
      console.log("Loading all form data...")
      try {
        const data = await getAllFormData()
        console.log(data)
        setAllData(data)
      } catch (error) {
        console.error("Error loading all form data:", error)
      }
    }
    loadAllData()
  }, [])

  return (
    <div className="w-full flex flex-col gap-8">
      <button className="bg-green text-black px-4 py-2 rounded-md disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-default text-xs sm:text-base self-center">
        Download summary
      </button>

      {allData.map(({ itemId, data }) => {
        const item = (frameworkItems as FrameworkItem[]).find((item) => item.id === String(itemId))
        if (!item) return null

        return (
          <div key={itemId} className="border border-white/50 rounded-md p-5">
            <h3 className="text-xl font-bold text-green mb-4">
              {item.id}. {item.title}
            </h3>
            <h4 className="text-white text-sm mb-2">{item.description}</h4>
            {item.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-4">
                {section.questions.map((question, qIndex) => (
                  <div key={qIndex} className="mb-4">
                    <p className="text-green text-sm mb-1">{question}</p>
                    <p className="text-white ">
                      {data[`${section.title}-${qIndex}`] || "No answer provided"}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
