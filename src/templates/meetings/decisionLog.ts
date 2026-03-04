import { TemplateDefinition, TemplateCategory } from '../types'

export const decisionLog: TemplateDefinition = {
  id: 'decision-log',
  name: 'Decision Log',
  category: TemplateCategory.Meetings,
  description: 'Architecture Decision Record (ADR) log with structured decision tracking.',
  longDescription: 'Maintain a living record of important decisions using the ADR format. Track decision context, alternatives considered, consequences, and status over time. Ensures institutional knowledge is preserved and new team members can understand past reasoning.',
  emoji: '\u{1F4DD}',
  estimatedTime: '~2 min',
  blueprintId: 'decision-log',
  complexity: 'simple',
  color: '#10B981',
  tags: ['decision', 'adr', 'log', 'record', 'architecture', 'governance'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     DECISION LOG               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  DECISION TABLE                \u2502
\u2502  # | Title | Status | Impact  \u2502
\u2502  1 | ...   | Accepted | High  \u2502
\u2502  2 | ...   | Proposed | Med   \u2502
\u2502  3 | ...   | Deprecated       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ADR TEMPLATE DOCUMENT         \u2502
\u2502  # Context                     \u2502
\u2502  # Decision                    \u2502
\u2502  # Alternatives                \u2502
\u2502  # Consequences                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'projectName', label: 'Project Name', type: 'text', placeholder: 'e.g., Platform Architecture', required: true },
    { id: 'categories', label: 'Decision Categories', type: 'textarea', placeholder: 'Comma-separated categories\ne.g., Architecture, Product, Process, Team', required: false, defaultValue: 'Architecture,Product,Process,Team' },
    { id: 'initialDecision', label: 'First Decision (Optional)', type: 'text', placeholder: 'e.g., Adopt TypeScript for all new services', required: false },
    { id: 'decisionMaker', label: 'Default Decision Maker', type: 'text', placeholder: 'e.g., Tech Lead', required: false },
  ],
  sections: [
    { id: 'log', name: 'Decision Log Table', type: 'table', description: 'All decisions with status and impact tracking', icon: '\u{1F4CB}' },
    { id: 'template', name: 'ADR Template', type: 'document', description: 'Structured template for documenting new decisions', icon: '\u{1F4DD}' },
  ],
}
