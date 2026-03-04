import { TemplateDefinition, TemplateCategory } from '../types'

export const empathyMap: TemplateDefinition = {
  id: 'empathy-map',
  name: 'Empathy Map',
  category: TemplateCategory.Design,
  description: 'Four-quadrant empathy map to understand what users say, think, do, and feel.',
  longDescription: 'Step into your user\'s shoes with this classic empathy mapping exercise. Capture what they say out loud, what they think internally, what they do in practice, and how they feel emotionally. Ideal for workshop facilitation and building team empathy.',
  emoji: '\u{1F9E0}',
  estimatedTime: '~3 min',
  blueprintId: 'empathy-map',
  complexity: 'simple',
  color: '#F472B6',
  tags: ['empathy', 'ux', 'design thinking', 'user research', 'workshop'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      EMPATHY MAP               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SAYS          \u2502  THINKS        \u2502
\u2502  (sky)         \u2502  (periwinkle)  \u2502
\u2502  "quotes..."   \u2502  concerns...   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u25CF\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  DOES   \u2502Persona\u2502  FEELS        \u2502
\u2502  (lemon)\u2502       \u2502  (rose)       \u2502
\u2502  actions.\u2502       \u2502  emotions...  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ANALYSIS DOCUMENT             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'userName', label: 'User / Persona Name', type: 'text', placeholder: 'e.g., First-time Buyer', required: true },
    { id: 'says', label: 'Says', type: 'textarea', placeholder: 'Direct quotes and statements from the user', required: true, helpText: 'What does the user literally say out loud?' },
    { id: 'thinks', label: 'Thinks', type: 'textarea', placeholder: 'Internal thoughts, beliefs, and concerns', required: true, helpText: 'What might they be thinking but not saying?' },
    { id: 'does', label: 'Does', type: 'textarea', placeholder: 'Observable actions and behaviors', required: true, helpText: 'What actions do they take? What behaviors do you observe?' },
    { id: 'feels', label: 'Feels', type: 'textarea', placeholder: 'Emotions, frustrations, and delights', required: true, helpText: 'What are their emotional reactions?' },
    { id: 'context', label: 'Context', type: 'text', placeholder: 'e.g., During onboarding, While shopping online', required: false },
  ],
  sections: [
    { id: 'quadrants', name: 'Empathy Quadrants', type: 'matrix', description: '2x2 grid: Says, Thinks, Does, Feels', icon: '\u{1F9E0}' },
    { id: 'analysis', name: 'Empathy Analysis', type: 'document', description: 'Key patterns, insights, and design implications', icon: '\u{1F4DD}' },
  ],
}
