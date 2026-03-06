import { TemplateDefinition, TemplateCategory } from '../types'

export const wireframe: TemplateDefinition = {
  id: 'wireframe-board',
  name: 'Wireframe Board',
  category: TemplateCategory.Design,
  description: 'Screen wireframe placeholders with user flow diagram and design specifications.',
  longDescription: 'Plan your product screens with wireframe placeholders connected by a user flow diagram. Map out screen purposes, key interactions, and responsive behavior before jumping into high-fidelity design. Includes a screen specs table for developer handoff.',
  emoji: '\u{1F4D0}',
  estimatedTime: '~4 min',
  blueprintId: 'wireframe-board',
  brainCategory: 'design-ux',
  brainBlueprint: 'wireframe-board',
  complexity: 'medium',
  color: '#F472B6',
  tags: ['wireframe', 'ui', 'ux', 'screens', 'user flow', 'design'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       WIREFRAME BOARD            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  USER FLOW DIAGRAM               \u2502
\u2502  [Entry]\u2500>[Screen1]\u2500>[Screen2]    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 [Screen]\u2502 [Screen]\u2502 [Screen]    \u2502
\u2502 \u250C\u2500\u2500\u2500\u2500\u2510\u2502 \u250C\u2500\u2500\u2500\u2500\u2510\u2502 \u250C\u2500\u2500\u2500\u2500\u2510      \u2502
\u2502 \u2502 NAV\u2502\u2502 \u2502 NAV\u2502\u2502 \u2502 NAV\u2502      \u2502
\u2502 \u251C\u2500\u2500\u2500\u2500\u2524\u2502 \u251C\u2500\u2500\u2500\u2500\u2524\u2502 \u251C\u2500\u2500\u2500\u2500\u2524      \u2502
\u2502 \u2502BODY\u2502\u2502 \u2502BODY\u2502\u2502 \u2502BODY\u2502      \u2502
\u2502 \u2514\u2500\u2500\u2500\u2500\u2518\u2502 \u2514\u2500\u2500\u2500\u2500\u2518\u2502 \u2514\u2500\u2500\u2500\u2500\u2518      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SCREEN SPECS TABLE              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., MyApp Mobile', required: true },
    { id: 'screenNames', label: 'Screen Names', type: 'textarea', placeholder: 'One screen per line\ne.g., Home, Login, Dashboard, Profile, Settings', required: true },
    { id: 'userFlowDescription', label: 'User Flow', type: 'textarea', placeholder: 'Describe the main user flow\ne.g., Login > Dashboard > Create Project > Settings', required: false },
    { id: 'userType', label: 'Target User Type', type: 'select', placeholder: 'Select user type', required: false, options: ['Mobile (iOS)', 'Mobile (Android)', 'Desktop Web', 'Tablet', 'Responsive'] },
    { id: 'designSystem', label: 'Design System', type: 'text', placeholder: 'e.g., Material Design, iOS HIG, Custom', required: false },
  ],
  sections: [
    { id: 'flow', name: 'User Flow', type: 'flowchart', description: 'Screen-to-screen navigation flow', icon: '\u{1F500}' },
    { id: 'screens', name: 'Screen Wireframes', type: 'frame', description: 'Placeholder frames for each screen', icon: '\u{1F4F1}' },
    { id: 'specs', name: 'Screen Specs', type: 'table', description: 'Screen details and interaction patterns', icon: '\u{1F4CB}' },
    { id: 'designDoc', name: 'Design Spec', type: 'document', description: 'Design system references and responsive behavior', icon: '\u{1F4DD}' },
  ],
}
