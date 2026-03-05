export enum TemplateCategory {
  Agile = 'agile',
  Strategy = 'strategy',
  Research = 'research',
  Design = 'design',
  Technical = 'technical',
  Brainstorm = 'brainstorm',
  Meetings = 'meetings',
}

export type FieldType = 'text' | 'textarea' | 'select' | 'multiselect' | 'number' | 'date'

export interface TemplateField {
  id: string
  label: string
  type: FieldType
  placeholder: string
  required: boolean
  defaultValue?: string
  options?: string[]
  helpText?: string
}

export type SectionType = 'flowchart' | 'document' | 'table' | 'frame' | 'sticky_cluster' | 'kanban' | 'matrix'

export interface TemplateSection {
  id: string
  name: string
  type: SectionType
  description: string
  icon: string
}

export interface TemplateDefinition {
  id: string
  name: string
  category: TemplateCategory
  description: string
  longDescription: string
  emoji: string
  previewAscii: string
  estimatedTime: string
  blueprintId: string
  fields: TemplateField[]
  tags: string[]
  complexity: 'simple' | 'medium' | 'complex'
  sections: TemplateSection[]
  color: string
}

export interface BoardManifest {
  boardName: string
  sections: BoardSection[]
}

export interface BoardSection {
  type: 'sticky_note' | 'shape' | 'frame' | 'text' | 'card'
  content: string
  x: number
  y: number
  width?: number
  height?: number
  color?: string
  style?: Record<string, unknown>
}
