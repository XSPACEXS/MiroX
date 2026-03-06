import { TemplateDefinition, TemplateCategory } from '../types'

export const decisionTree: TemplateDefinition = {
  id: 'decision-tree',
  name: 'Decision Tree Board',
  category: TemplateCategory.MindMapCollab,
  description: 'Map complex decisions with branching options, criteria analysis, and stakeholder input.',
  longDescription: 'Navigate complex decisions by mapping them as a visual decision tree. Define options as branches, evaluate them against criteria in a document, and involve stakeholders in the process. The flowchart makes trade-offs visible and helps teams reach consensus faster.',
  emoji: '\u{1F333}',
  estimatedTime: '~8 min',
  blueprintId: 'decision-tree',
  brainCategory: 'mind-map-collab',
  brainBlueprint: 'decision-tree',
  complexity: 'medium',
  color: '#2E7D32',
  tags: ['decision', 'tree', 'analysis', 'mind-map', 'criteria', 'evaluation'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     DECISION TREE BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502        [Decision]               \u2502
\u2502       /    |    \\               \u2502
\u2502     [A]  [B]   [C]              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Criteria Analysis              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'decision', label: 'Decision', type: 'textarea', placeholder: 'What decision needs to be made?', required: true },
    { id: 'options', label: 'Options', type: 'textarea', placeholder: 'Decision options, one per line', required: true, helpText: 'Decision options, one per line' },
    { id: 'criteria', label: 'Evaluation Criteria', type: 'textarea', placeholder: 'Criteria for evaluating options, one per line', required: false },
    { id: 'constraints', label: 'Constraints', type: 'textarea', placeholder: 'Constraints or limitations to consider', required: false },
    { id: 'stakeholders', label: 'Stakeholders', type: 'textarea', placeholder: 'Key stakeholders and their priorities', required: false },
  ],
  sections: [
    { id: 'decision-tree-flow', name: 'Decision Tree', type: 'flowchart', description: 'Flowchart mapping the decision with branching options and outcomes', icon: '\u{1F333}' },
    { id: 'criteria-doc', name: 'Criteria Analysis', type: 'document', description: 'Document analyzing each option against defined criteria', icon: '\u{1F4CB}' },
  ],
}
