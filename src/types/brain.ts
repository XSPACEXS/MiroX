export interface BrainKnowledge {
  designPhilosophy: string
  layoutPatterns: string
  visualGuide: string
  contentGuide: string
  buildProcess: string
  examplesReference: string
  variations: string
}

export interface BrainContext {
  blueprintId: string
  category: string
  blueprint: string
  knowledge: BrainKnowledge
}

export interface BrainGenerateParams {
  template: { name: string; brainBlueprint: string }
  fieldValues: Record<string, string>
  boardName: string
  brainContext: BrainContext
}
