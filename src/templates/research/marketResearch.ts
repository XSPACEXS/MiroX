import { TemplateDefinition, TemplateCategory } from '../types'

export const marketResearch: TemplateDefinition = {
  id: 'market-research',
  name: 'Market Research',
  category: TemplateCategory.Research,
  description: 'Market research synthesis board with insights flowchart, data table, and recommendations.',
  longDescription: 'Organize and present market research findings in a structured format. Map your research methodology and key findings in a visual flow, catalog data points in a structured table, and synthesize actionable recommendations in a companion document.',
  emoji: '\u{1F4CB}',
  estimatedTime: '~4 min',
  blueprintId: 'market-research',
  brainCategory: 'strategy-planning',
  brainBlueprint: 'competitive-analysis',
  complexity: 'medium',
  color: '#F59E0B',
  tags: ['market', 'research', 'insights', 'data', 'survey', 'findings'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     MARKET RESEARCH              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 INSIGHTS FLOW  \u2502 OVERVIEW DOC     \u2502
\u2502 Goal\u2500>Method   \u2502 \u2022 Objectives     \u2502
\u2502 \u2500>Findings    \u2502 \u2022 Methodology    \u2502
\u2502 \u2500>Recommend.  \u2502 \u2022 Sample         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RESEARCH DATA TABLE             \u2502
\u2502  Finding | Value | Confidence    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RECOMMENDATIONS DOCUMENT        \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'marketName', label: 'Market / Topic', type: 'text', placeholder: 'e.g., US Plant-Based Food Market', required: true },
    { id: 'targetSegment', label: 'Target Segment', type: 'text', placeholder: 'e.g., Health-conscious millennials aged 25-40', required: false },
    { id: 'researchQuestions', label: 'Research Questions', type: 'textarea', placeholder: 'Key questions to answer, one per line', required: true },
    { id: 'dataSources', label: 'Data Sources', type: 'text', placeholder: 'e.g., Surveys, interviews, industry reports, analytics', required: false },
    { id: 'keyFindings', label: 'Key Findings', type: 'textarea', placeholder: 'Preliminary findings, one per line (if available)', required: false },
  ],
  sections: [
    { id: 'insights', name: 'Insights Flow', type: 'flowchart', description: 'Research methodology to findings to recommendations', icon: '\u{1F50D}' },
    { id: 'data', name: 'Research Data', type: 'table', description: 'Findings with values and confidence levels', icon: '\u{1F4CB}' },
    { id: 'overview', name: 'Research Overview', type: 'document', description: 'Objectives, methodology, and key metrics', icon: '\u{1F4DD}' },
    { id: 'recommendations', name: 'Recommendations', type: 'document', description: 'Actionable insights and next research steps', icon: '\u{1F4DD}' },
  ],
}
