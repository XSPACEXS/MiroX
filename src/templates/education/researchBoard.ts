import { TemplateDefinition, TemplateCategory } from '../types'

export const researchBoard: TemplateDefinition = {
  id: 'research-board',
  name: 'Research Board',
  category: TemplateCategory.Education,
  description: 'Organize research with literature clusters, synthesis documents, and source tracking.',
  longDescription: 'Structure your research process from literature review through synthesis. Cluster sources by theme, synthesize findings into a cohesive document, and maintain a detailed source tracking table. Ideal for academic research, market research, and competitive analysis.',
  emoji: '\u{1F52C}',
  estimatedTime: '~8 min',
  blueprintId: 'research-board',
  brainCategory: 'education',
  brainBlueprint: 'research-board',
  complexity: 'medium',
  color: '#5C6BC0',
  tags: ['research', 'literature', 'academic', 'sources', 'synthesis'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      RESEARCH BOARD           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 LITERATUR\u2502 SYNTHESIS\u2502 SOURCES  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'topic', label: 'Research Topic', type: 'text', placeholder: 'e.g., Impact of AI on Education', required: true },
    { id: 'question', label: 'Research Question', type: 'textarea', placeholder: 'What question are you trying to answer?', required: true },
    { id: 'sources', label: 'Initial Sources', type: 'textarea', placeholder: 'Key sources or papers, one per line', required: false },
    { id: 'findings', label: 'Key Findings', type: 'textarea', placeholder: 'Important findings so far', required: false },
    { id: 'gaps', label: 'Research Gaps', type: 'textarea', placeholder: 'What is still unknown or unclear?', required: false },
  ],
  sections: [
    { id: 'literature', name: 'Literature Clusters', type: 'sticky_cluster', description: 'Sources grouped by theme or topic', icon: '\u{1F4DA}' },
    { id: 'synthesis', name: 'Research Synthesis', type: 'document', description: 'Synthesized findings and analysis', icon: '\u{1F4DD}' },
    { id: 'sourceTable', name: 'Source Tracker', type: 'table', description: 'Detailed source list with citations and notes', icon: '\u{1F4CA}' },
  ],
}
