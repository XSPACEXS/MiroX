import { TemplateDefinition, TemplateCategory } from '../types'

export const decisionMatrix: TemplateDefinition = {
  id: 'decision-matrix',
  name: 'Decision Matrix',
  category: TemplateCategory.Research,
  description: 'Weighted scoring matrix for evaluating options against multiple criteria.',
  longDescription: 'Make better decisions by objectively scoring options against weighted criteria. Compare tools, vendors, strategies, or any set of alternatives using a structured scoring table, with a clear winner highlight and rationale documentation.',
  emoji: '\u2696\uFE0F',
  estimatedTime: '~3 min',
  blueprintId: 'decision-matrix',
  brainCategory: 'data-analytics',
  brainBlueprint: 'data-dashboard',
  complexity: 'medium',
  color: '#F59E0B',
  tags: ['decision', 'matrix', 'scoring', 'evaluation', 'comparison', 'weighted'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     DECISION MATRIX              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SCORING TABLE                   \u2502
\u2502  Criteria|Wt|Opt A|Opt B|Opt C  \u2502
\u2502  Cost    |30| 8   | 6  | 9     \u2502
\u2502  Quality |25| 9   | 7  | 6     \u2502
\u2502  Speed   |20| 7   | 9  | 5     \u2502
\u2502  TOTAL   |  | 8.1 | 7.2| 6.8   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  WINNER: Option A               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  DECISION RATIONALE DOCUMENT    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'decisionTitle', label: 'Decision Title', type: 'text', placeholder: 'e.g., Choose a Project Management Tool', required: true },
    { id: 'options', label: 'Options to Evaluate', type: 'textarea', placeholder: 'Comma-separated options\ne.g., Jira, Linear, Asana, Monday.com', required: true },
    { id: 'criteria', label: 'Evaluation Criteria', type: 'textarea', placeholder: 'Comma-separated criteria\ne.g., Price, Ease of Use, Integrations, Support, Scalability', required: true },
    { id: 'weights', label: 'Criteria Weights', type: 'textarea', placeholder: 'Weight per criterion (should total 100)\ne.g., 25, 20, 20, 15, 20', required: false, helpText: 'Higher weight = more important criterion' },
    { id: 'context', label: 'Decision Context', type: 'textarea', placeholder: 'Why are you making this decision? What constraints exist?', required: false },
  ],
  sections: [
    { id: 'matrix', name: 'Scoring Matrix', type: 'table', description: 'Weighted scoring table with totals', icon: '\u{1F4CB}' },
    { id: 'winner', name: 'Winner Highlight', type: 'frame', description: 'Visual highlight of the recommended option', icon: '\u{1F3C6}' },
    { id: 'rationale', name: 'Decision Rationale', type: 'document', description: 'Context, methodology, and implementation next steps', icon: '\u{1F4DD}' },
  ],
}
