import { TemplateDefinition, TemplateCategory } from '../types'

export const affinityDiagram: TemplateDefinition = {
  id: 'affinity-diagram',
  name: 'Affinity Diagram',
  category: TemplateCategory.Brainstorm,
  description: 'Group raw insights and ideas into themed clusters for pattern discovery.',
  longDescription: 'Organize unstructured research data, brainstorming output, or workshop notes into meaningful themed clusters. Start with raw insights on sticky notes, then group them into themes to reveal patterns, priorities, and actionable findings.',
  emoji: '\u{1F5C2}\uFE0F',
  estimatedTime: '~4 min',
  blueprintId: 'affinity-diagram',
  complexity: 'medium',
  color: '#EC4899',
  tags: ['affinity', 'clustering', 'synthesis', 'research', 'themes', 'patterns'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Theme A \u2502 Theme B \u2502 Theme C \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Theme D \u2502 Theme E \u2502 Theme F \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  FINDINGS TABLE + SYNTHESIS     \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'researchQuestion', label: 'Research Question', type: 'textarea', placeholder: 'What question are you trying to answer?', required: true },
    { id: 'rawInsights', label: 'Raw Insights', type: 'textarea', placeholder: 'One insight per line\ne.g., Users struggle with navigation\nPricing page is confusing\nOnboarding takes too long', required: true, helpText: 'Paste all your raw data, notes, or insights here' },
    { id: 'themes', label: 'Initial Themes (optional)', type: 'textarea', placeholder: 'Comma-separated theme names\ne.g., Usability, Pricing, Onboarding, Performance', required: false, helpText: 'Pre-define themes or let them emerge during clustering' },
  ],
  sections: [
    { id: 'clusters', name: 'Theme Clusters', type: 'frame', description: 'Themed frames with sticky notes for insights', icon: '\u{1F5C2}\uFE0F' },
    { id: 'findings', name: 'Findings Table', type: 'table', description: 'Structured findings with frequency and actionability', icon: '\u{1F4CB}' },
    { id: 'synthesis', name: 'Synthesis Document', type: 'document', description: 'Key themes, patterns, and recommendations', icon: '\u{1F4DD}' },
  ],
}
