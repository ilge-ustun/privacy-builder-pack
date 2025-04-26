import { useEffect, useRef, useState } from "react"
import { getAllFormData } from "@/utils/indexedDB"
import frameworkItems from "@/data/pagencyFramework.json"
import { FrameworkItem } from "@/types/framework"
import domtoimage from "dom-to-image-more"

export default function PagencyFrameworkSummary() {
  const [allData, setAllData] = useState<Array<{ itemId: number; data: Record<string, string> }>>(
    [],
  )
  const contentRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const [columnCount, setColumnCount] = useState(3)

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 1024) {
        setColumnCount(1)
        // } else if (window.innerWidth <= 1280) {
        //   setColumnCount(2)
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

  const handleDownload = async () => {
    if (!contentRef.current || isGenerating) return
    setIsGenerating(true)

    try {
      const dataUrl = await domtoimage.toPng(contentRef.current, {
        scale: 2, // or 3 for even sharper
        style: {
          transform: "scale(1)", // ensure normal size visually
          transformOrigin: "top left",
        },
      })

      // Create a fake link and trigger download
      const link = document.createElement("a")
      link.href = dataUrl
      link.download = "pagency-framework-summary.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error generating PNG:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        className={`bg-green-500 text-black px-5 py-2.5 rounded-md self-center hover-shine hover:cursor-pointer cursor-${
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
          padding: "1.25rem 0.75rem",
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
      </div>
    </div>
  )
}
