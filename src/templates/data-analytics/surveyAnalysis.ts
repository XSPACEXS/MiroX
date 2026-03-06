import { TemplateDefinition, TemplateCategory } from '../types'

export const surveyAnalysis: TemplateDefinition = {
  id: 'survey-analysis',
  name: 'Survey Analysis Board',
  category: TemplateCategory.DataAnalytics,
  description: 'Analyze survey results with quantitative data tables, qualitative theme clusters, and a summary report.',
  longDescription: 'Turn raw survey data into structured insights. Organize quantitative responses in a data table, cluster qualitative themes from open-ended responses, and produce a summary document highlighting top findings and demographic breakdowns.',
  emoji: '\u{1F4CB}',
  estimatedTime: '~8 min',
  blueprintId: 'survey-analysis',
  brainCategory: 'data-analytics',
  brainBlueprint: 'survey-analysis',
  complexity: 'medium',
  color: '#558B2F',
  tags: ['survey', 'analysis', 'data', 'qualitative', 'quantitative', 'feedback'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    SURVEY ANALYSIS BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Q1   \u2502  Q2   \u2502  Q3  \u2502  Q4     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Qualitative Themes]           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Summary Report                 \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'surveyName', label: 'Survey Name', type: 'text', placeholder: 'e.g., Customer Satisfaction Survey Q1', required: true },
    { id: 'responses', label: 'Number of Responses', type: 'text', placeholder: 'e.g., 250 responses', required: false },
    { id: 'topFindings', label: 'Top Findings', type: 'textarea', placeholder: 'Key findings from the survey, one per line', required: true },
    { id: 'demographics', label: 'Demographics', type: 'textarea', placeholder: 'Respondent demographics breakdown', required: false },
    { id: 'quantQuestions', label: 'Quantitative Questions', type: 'textarea', placeholder: 'Rating/scale questions and results', required: false },
    { id: 'qualThemes', label: 'Qualitative Themes', type: 'textarea', placeholder: 'Themes from open-ended responses, one per line', required: false },
  ],
  sections: [
    { id: 'quant-data', name: 'Quantitative Data', type: 'table', description: 'Table of survey questions with response distributions and averages', icon: '\u{1F4CA}' },
    { id: 'qual-themes', name: 'Qualitative Themes', type: 'sticky_cluster', description: 'Clustered sticky notes grouping open-ended response themes', icon: '\u{1F4AC}' },
    { id: 'summary-report', name: 'Summary Report', type: 'document', description: 'Written summary of survey findings and recommendations', icon: '\u{1F4DD}' },
  ],
}
