import { TemplateDefinition, TemplateCategory } from '../types'

export const leanCanvas: TemplateDefinition = {
  id: 'lean-canvas',
  name: 'Lean Canvas Board',
  category: TemplateCategory.Startup,
  description: 'One-page business model using the Lean Canvas framework for rapid startup validation.',
  longDescription: 'Map your startup idea onto the Lean Canvas framework in minutes. Define your problem, customer segments, unique value proposition, solution, channels, revenue streams, and cost structure in a structured matrix. Track your key assumptions in an accompanying document.',
  emoji: '\u{1F3AA}',
  estimatedTime: '~8 min',
  blueprintId: 'lean-canvas',
  brainCategory: 'startup',
  brainBlueprint: 'lean-canvas',
  complexity: 'medium',
  color: '#FF6F00',
  tags: ['lean', 'canvas', 'startup', 'business-model', 'validation', 'mvp'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       LEAN CANVAS BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Prob \u2502 Soln \u2502 UVP  \u2502 Chan \u2502 Cust \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Cost Structure | Revenue       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Assumptions Document           \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., TaskFlow', required: true },
    { id: 'problem', label: 'Problem', type: 'textarea', placeholder: 'Top 1-3 problems you are solving', required: true },
    { id: 'customerSegments', label: 'Customer Segments', type: 'textarea', placeholder: 'Who are your target customers?', required: true },
    { id: 'uniqueValue', label: 'Unique Value Proposition', type: 'textarea', placeholder: 'Single clear compelling message', required: true },
    { id: 'solution', label: 'Solution', type: 'textarea', placeholder: 'Top features or capabilities', required: false },
    { id: 'channels', label: 'Channels', type: 'textarea', placeholder: 'How will you reach customers?', required: false },
    { id: 'revenueStreams', label: 'Revenue Streams', type: 'textarea', placeholder: 'How will you make money?', required: false },
    { id: 'costStructure', label: 'Cost Structure', type: 'textarea', placeholder: 'Key costs to operate', required: false },
  ],
  sections: [
    { id: 'canvas-matrix', name: 'Lean Canvas Matrix', type: 'matrix', description: 'Multi-cell canvas grid with all Lean Canvas sections', icon: '\u{1F3AA}' },
    { id: 'assumptions-doc', name: 'Assumptions Log', type: 'document', description: 'Document tracking key assumptions and validation status', icon: '\u{1F4DD}' },
  ],
}
