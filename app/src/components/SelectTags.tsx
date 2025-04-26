import { getAllTags } from "@/utils/getTags"
import { useState } from "react"
import Image from "next/image"

interface SelectTagsProps {
  // onChange?: (selected: string[]) => void
  onChange?: (selected: string) => void
}

const placeholder = "All categories"

const options = [placeholder, ...getAllTags()]

export default function SelectTags({ onChange }: SelectTagsProps) {
  const [isOpen, setIsOpen] = useState(false)
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  // const toggleOption = (option: string) => {
  //   const newSelected = selectedOptions.includes(option)
  //     ? selectedOptions.filter((o) => o !== option)
  //     : [...selectedOptions, option]
  //   setSelectedOptions(newSelected)
  //   if (onChange) onChange(newSelected)
  // }

  const [selectedOption, setSelectedOption] = useState<string>(options[0])

  const toggleOption = (option: string) => {
    setSelectedOption(option)
    if (onChange) onChange(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-white w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full thin-border p-4 flex justify-between items-center"
      >
        <span
          className={`text-left text-sm truncate h-[23px] ${
            selectedOption === placeholder ? "text-white" : "text-green-500"
          }`}
        >
          {selectedOption}
        </span>

        <Image
          src="/icons/chevron.svg"
          alt="Toggle"
          width={15}
          height={15}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full thin-border bg-black overflow-y-auto z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              // className={`px-4 py-2 cursor-pointer text-sm hover:bg-white/10 ${
              //   selectedOptions.includes(option) ? "text-green-400" : "text-white"
              // }`}
              className={`px-4 py-2 cursor-pointer text-sm hover:bg-white/10 ${
                selectedOption === option ? "text-green-400" : "text-white"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
