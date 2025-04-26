export interface GlossaryTerm {
  term: string
  definition: string
}

export interface GlossaryCategory {
  category: string
  terms: GlossaryTerm[]
}

export type Glossary = GlossaryCategory[]
