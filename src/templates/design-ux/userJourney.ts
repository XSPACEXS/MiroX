import { TemplateDefinition, TemplateCategory } from '../types'

export const userJourney: TemplateDefinition = {
  id: 'user-journey-map',
  name: 'User Journey Map',
  category: TemplateCategory.Design,
  description: 'Horizontal journey map with stages, touchpoints, emotions, and opportunities.',
  longDescription: 'Visualize your customer\'s end-to-end experience from awareness to advocacy. Map each stage with actions, touchpoints, emotional highs and lows, and identify key opportunities for improvement. Backed by a touchpoints table for detailed tracking.',
  emoji: '\u{1F5FA}\uFE0F',
  estimatedTime: '~5 min',
  blueprintId: 'user-journey-map',
  brainCategory: 'customer-journey',
  brainBlueprint: 'journey-map',
  complexity: 'medium',
  color: '#F472B6',
  tags: ['journey', 'ux', 'customer experience', 'touchpoints', 'service design'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       USER JOURNEY MAP                 \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Aware \u2502Consider\u2502Purchase\u2502  Use  \u2502Support\u2502
\u2502 \u25CB\u2500\u2500\u2500>\u2502\u2500\u25CB\u2500\u2500\u2500>\u2502\u2500\u25CB\u2500\u2500\u2500>\u2502\u2500\u25CB\u2500\u2500>\u2502\u2500\u2500\u25CB   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  :)   \u2502  :|   \u2502  :(   \u2502  :)  \u2502  :|  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  TOUCHPOINTS TABLE                     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  OPPORTUNITIES DOCUMENT                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'personaName', label: 'Persona Name', type: 'text', placeholder: 'e.g., Sarah the Small Business Owner', required: true },
    { id: 'scenario', label: 'Scenario', type: 'textarea', placeholder: 'What scenario is this journey mapping? e.g., First-time purchase experience', required: true },
    { id: 'stages', label: 'Journey Stages', type: 'textarea', placeholder: 'Comma-separated stages\ne.g., Awareness, Consideration, Purchase, Use, Support', required: true, helpText: 'Define the high-level stages of the journey' },
    { id: 'painPoints', label: 'Known Pain Points', type: 'textarea', placeholder: 'Key frustrations, one per line', required: false },
    { id: 'opportunities', label: 'Opportunities', type: 'textarea', placeholder: 'Improvement ideas, one per line', required: false },
    { id: 'channels', label: 'Key Channels', type: 'text', placeholder: 'e.g., Website, Mobile App, Email, Support Chat', required: false },
  ],
  sections: [
    { id: 'journey', name: 'Journey Sequence', type: 'flowchart', description: 'Stage-by-stage interaction flow', icon: '\u{1F5FA}\uFE0F' },
    { id: 'emotions', name: 'Emotion Map', type: 'sticky_cluster', description: 'Emotional highs and lows per stage', icon: '\u{1F60A}' },
    { id: 'touchpoints', name: 'Touchpoints Table', type: 'table', description: 'Detailed touchpoint tracking with emotions', icon: '\u{1F4CB}' },
    { id: 'opportunities', name: 'Opportunities Document', type: 'document', description: 'Key insights and improvement recommendations', icon: '\u{1F4DD}' },
  ],
}
