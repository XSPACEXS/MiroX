import { TemplateDefinition, TemplateCategory } from '../types'

export const okrTracker: TemplateDefinition = {
  id: 'okr-tracker',
  name: 'OKR Tracker',
  category: TemplateCategory.Strategy,
  description: 'Track Objectives and Key Results with progress indicators and team alignment.',
  longDescription: 'Align your team around clear objectives and measurable key results. This tracker provides a visual overview of quarterly goals, progress tracking, and strategy documentation to keep everyone moving in the same direction.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~4 min',
  blueprintId: 'okr-tracker',
  complexity: 'medium',
  color: '#FFD600',
  tags: ['okr', 'objectives', 'key results', 'goals', 'tracking', 'quarterly'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    OKR TRACKER \u2014 Q1 2026       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Objective 1\u2502 Objective 2\u2502 Objective 3\u2502
\u2502  (hex)     \u2502  (hex)     \u2502  (hex)     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  KEY RESULTS TRACKING TABLE    \u2502
\u2502  Obj | KR | Target | Progress  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  STRATEGY DOCUMENT             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'quarter', label: 'Quarter', type: 'select', placeholder: 'Select quarter', required: true, options: ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026'] },
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Engineering, Marketing, Product', required: true },
    { id: 'objective1', label: 'Objective 1', type: 'textarea', placeholder: 'e.g., Increase product adoption among enterprise customers', required: true },
    { id: 'objective2', label: 'Objective 2', type: 'textarea', placeholder: 'e.g., Improve platform reliability and performance', required: false },
    { id: 'objective3', label: 'Objective 3', type: 'textarea', placeholder: 'e.g., Build a world-class engineering culture', required: false },
    { id: 'keyResults', label: 'Key Results', type: 'textarea', placeholder: 'List key results, one per line (prefix with O1/O2/O3)', required: true, helpText: 'e.g., O1: Increase enterprise signups by 30%' },
  ],
  sections: [
    { id: 'objectives', name: 'Objectives Overview', type: 'frame', description: 'Visual objective cards with status indicators', icon: '\u{1F3AF}' },
    { id: 'tracking', name: 'Key Results Table', type: 'table', description: 'Progress tracking for each key result', icon: '\u{1F4CA}' },
    { id: 'strategy', name: 'Strategy Document', type: 'document', description: 'Mission alignment and measurement methodology', icon: '\u{1F4DD}' },
  ],
}
