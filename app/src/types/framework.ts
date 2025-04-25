interface Section {
  title: string
  questions: string[]
}

interface FrameworkItem {
  id: string
  title: string
  description: string
  sections: Section[]
}

export type { Section, FrameworkItem }
