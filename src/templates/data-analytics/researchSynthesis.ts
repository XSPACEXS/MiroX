import { TemplateDefinition, TemplateCategory } from '../types'

export const researchSynthesis: TemplateDefinition = {
  id: 'research-synthesis',
  name: 'Research Synthesis Board',
  category: TemplateCategory.DataAnalytics,
  description: 'Synthesize research findings into actionable insights with organized evidence and recommendations.',
  longDescription: 'Bring together findings from multiple research sources into a cohesive synthesis. Cluster key findings, write a synthesis document connecting themes, and maintain an evidence table linking claims to sources. Ideal for UX researchers, market analysts, and academic teams.',
  emoji: '\u{1F50D}',
  estimatedTime: '~8 min',
  blueprintId: 'research-synthesis',
  brainCategory: 'data-analytics',
  brainBlueprint: 'research-synthesis',
  complexity: 'medium',
  color: '#4527A0',
  tags: ['research', 'synthesis', 'findings', 'analysis', 'insights', 'ux'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   RESEARCH SYNTHESIS BOARD      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Findings Cluster]             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Synthesis Document             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Evidence Table                 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'researchQuestion', label: 'Research Question', type: 'textarea', placeholder: 'What is the primary research question?', required: true },
    { id: 'methodology', label: 'Methodology', type: 'text', placeholder: 'e.g., Interviews, Surveys, A/B Testing', required: false },
    { id: 'participants', label: 'Participants', type: 'text', placeholder: 'e.g., 12 users, 500 survey respondents', required: false },
    { id: 'keyFindings', label: 'Key Findings', type: 'textarea', placeholder: 'Main findings, one per line', required: true },
    { id: 'patterns', label: 'Patterns & Themes', type: 'textarea', placeholder: 'Recurring patterns observed, one per line', required: false },
    { id: 'recommendations', label: 'Recommendations', type: 'textarea', placeholder: 'Actionable recommendations, one per line', required: false },
  ],
  sections: [
    { id: 'findings-cluster', name: 'Findings Cluster', type: 'sticky_cluster', description: 'Grouped sticky notes for each key finding and theme', icon: '\u{1F50D}' },
    { id: 'synthesis-doc', name: 'Synthesis Document', type: 'document', description: 'Narrative document connecting findings into a cohesive story', icon: '\u{1F4D6}' },
    { id: 'evidence-table', name: 'Evidence Table', type: 'table', description: 'Table mapping claims to supporting evidence and sources', icon: '\u{1F4CB}' },
  ],
}
