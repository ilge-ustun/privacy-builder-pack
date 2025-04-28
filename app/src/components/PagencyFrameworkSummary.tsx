import { useCallback, useEffect, useRef, useState } from "react"
import { getAllFormData } from "@/utils/indexedDB"
import frameworkItems from "@/data/pagencyFramework.json"
import { FrameworkItem } from "@/types/framework"
import { toPng } from "html-to-image"

export default function PagencyFrameworkSummary() {
  const [allData, setAllData] = useState<Array<{ itemId: number; data: Record<string, string> }>>(
    [],
  )
  const contentRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const [columnCount, setColumnCount] = useState(3)

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 640) {
        setColumnCount(1)
      } else if (window.innerWidth <= 1024) {
        setColumnCount(2)
      } else {
        setColumnCount(3)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    const loadAllData = async () => {
      try {
        const data = await getAllFormData()
        setAllData(data)
      } catch (error) {
        console.error("Error loading all form data:", error)
      }
    }
    loadAllData()
  }, [])
  const onButtonClick = useCallback(() => {
    if (!contentRef.current || isGenerating) return
    setIsGenerating(true)

    toPng(contentRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "PagencyFrameworkSummary.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [contentRef, isGenerating])

  return (
    <div className="w-full flex flex-col gap-8 px-4">
      <button
        onClick={onButtonClick}
        disabled={isGenerating}
        className={`bg-green-500 text-black px-5 py-2.5 rounded-md self-center hover-shine cursor-pointer cursor-${
          isGenerating ? "default" : "pointer"
        } opacity-${isGenerating ? "50" : "100"} text-sm`}
      >
        Download summary
      </button>

      {/* Downloadable summary, use inline styles to avoid layout shift */}
      <div
        ref={contentRef}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid white",
          borderRadius: "0.375rem",
          width: "100%",
          padding: "1.25rem 1rem",
          color: "white",
          userSelect: "none",
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3rem",
            userSelect: "none",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              userSelect: "none",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            PAGENCY Framework_
          </h2>
          <div
            style={{
              flex: 1,
              height: "1px",
              borderBottom: "1px solid white",
              borderColor: "#fff",
              // margin: "0 1rem",
              userSelect: "none",
              outline: "none",
              boxShadow: "none",
            }}
          ></div>
          <p
            style={{
              fontSize: "0.875rem",
              textAlign: "right",
              userSelect: "none",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            Generated Summary
          </p>
        </div>
        <div
          style={{
            columnCount: columnCount,
            columnGap: "1rem",
            margin: "0 auto",
            userSelect: "none",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        >
          {allData.map(({ itemId, data }) => {
            const item = (frameworkItems as FrameworkItem[]).find(
              (item) => item.id === String(itemId),
            )
            if (!item) return null

            return (
              <div
                key={itemId}
                style={{
                  marginBottom: "1rem",
                  breakInside: "avoid",
                  border: "1px solid white",
                  borderRadius: "0.375rem",
                  padding: "1.25rem",
                  userSelect: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                    color: "#22c55e",
                    fontWeight: "bold",
                    userSelect: "none",
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                >
                  {item.id}. {item.title}
                </h3>
                {/* <h4 style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>{item.description}</h4> */}
                {item.sections.map((section, sIndex) => (
                  <div
                    key={sIndex}
                    style={{
                      marginBottom: "1rem",
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                      userSelect: "none",
                    }}
                  >
                    {section.questions.map((question, qIndex) => (
                      <div
                        key={qIndex}
                        style={{
                          marginBottom: "1rem",
                          userSelect: "none",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                        }}
                      >
                        {/* <p
                          style={{
                            fontSize: "0.875rem",
                            marginBottom: "0.25rem",
                            color: "#22c55e",
                            userSelect: "none",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                        >
                          {question}
                        </p> */}
                        <p
                          style={{
                            userSelect: "none",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                          }}
                        >
                          {data[`${section.title}-${qIndex}`] || "..."}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        <div className="flex flex-row flex-wrap justify-between border-t border-white/20 mt-8 pt-6 pb-8 px-4 gap-4">
          <p>PAGENCY Framework - Privacy-Enhancing Applications Development Framework</p>
          <p>
            {new Date().toLocaleDateString("en-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
