const glitchChars = [
  "©",
  "­",
  "瞞",
  "ȯ",
  "z",
  "¢",
  "u",
  "ꨦ",
  "¸",
  "¯",
  "i",
  "́",
  "º",
  ")",
  "]",
  "³",
  "ٲ",
  "O",
  "±",
  "¢",
  "ك",
  "µ",
  "+",
  "r",
  "릊",
  "%",
  "ل",
  "ش",
  "忍",
  "密",
  "技",
  "術",
  "꧑",
  "Ϟ",
  "릊",
  "҉",
  "¶",
  "ҋ",
  "Ҍ",
  "ґ",
  "藏",
  "ª",
  "",
  "܊",
  "",
  "©",
  "¢",
  "w",
  "§",
  "¶",
  "Ï",
  "Ͼ",
  "Ҝ",
  "宮",
]

const latinAlphabet = "abcdefghijklmnopqrstuvwxyz"

// Create a constant mapping between Latin alphabet and glitch characters
const glitchMap: Record<string, string> = {}
latinAlphabet.split("").forEach((char, index) => {
  glitchMap[char] = glitchChars[index % glitchChars.length]
})

export function glitchify(text: string): string {
  return text
    .split("")
    .map((char) => {
      const lowerChar = char.toLowerCase()
      if (glitchMap[lowerChar]) {
        // If it's uppercase in original, try to make the glitch character uppercase
        return char === char.toUpperCase() &&
          glitchMap[lowerChar].toUpperCase() !== glitchMap[lowerChar]
          ? glitchMap[lowerChar].toUpperCase()
          : glitchMap[lowerChar]
      }
      // For non-alphabet characters, return the character as is
      return char
    })
    .join("")
}
