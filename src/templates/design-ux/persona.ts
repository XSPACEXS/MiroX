import { TemplateDefinition, TemplateCategory } from '../types'

export const persona: TemplateDefinition = {
  id: 'user-persona',
  name: 'User Persona',
  category: TemplateCategory.Design,
  description: 'Build a detailed user persona with demographics, goals, frustrations, and behaviors.',
  longDescription: 'Create a rich, realistic user persona that your entire team can rally around. Capture demographics, goals, frustrations, motivations, and daily behaviors to guide design decisions and keep the user at the center of your product strategy.',
  emoji: '\u{1F464}',
  estimatedTime: '~3 min',
  blueprintId: 'user-persona',
  brainCategory: 'customer-journey',
  brainBlueprint: 'persona-board',
  complexity: 'simple',
  color: '#F472B6',
  tags: ['persona', 'ux', 'user research', 'design', 'customer'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      USER PERSONA              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 [PH]\u2502 Name \u2022 Age \u2022 Job Title   \u2502
\u2502 OTO \u2502 "Quote from persona..."  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 GOALS  \u2502 FRUSTR. \u2502 MOTIVATIONS  \u2502
\u2502 (mint) \u2502 (coral) \u2502 (sky)        \u2502
\u2502 \u2022 ...  \u2502 \u2022 ...  \u2502 \u2022 ...        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 BEHAVIORS TABLE  \u2502 PERSONA DOC   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'personaName', label: 'Persona Name', type: 'text', placeholder: 'e.g., Marketing Mary', required: true },
    { id: 'age', label: 'Age', type: 'text', placeholder: 'e.g., 34', required: false },
    { id: 'jobTitle', label: 'Job Title', type: 'text', placeholder: 'e.g., Marketing Manager at a mid-size SaaS company', required: true },
    { id: 'bio', label: 'Bio', type: 'textarea', placeholder: 'Brief background and context for this persona', required: false },
    { id: 'goals', label: 'Goals', type: 'textarea', placeholder: 'What are they trying to achieve? One per line', required: true },
    { id: 'frustrations', label: 'Frustrations', type: 'textarea', placeholder: 'What problems do they face? One per line', required: true },
    { id: 'quote', label: 'Representative Quote', type: 'text', placeholder: 'e.g., "I just need something that works without a manual."', required: false },
  ],
  sections: [
    { id: 'card', name: 'Persona Card', type: 'frame', description: 'Demographics and photo placeholder', icon: '\u{1F464}' },
    { id: 'attributes', name: 'Goals & Frustrations', type: 'frame', description: 'Side-by-side goals, frustrations, motivations', icon: '\u{1F3AF}' },
    { id: 'behaviors', name: 'Behaviors Table', type: 'table', description: 'Observable behaviors with frequency and context', icon: '\u{1F4CB}' },
    { id: 'narrative', name: 'Persona Narrative', type: 'document', description: 'Full persona story and day-in-the-life scenario', icon: '\u{1F4DD}' },
  ],
}
