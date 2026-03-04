import { TemplateDefinition, TemplateCategory } from '../types'

export const apiDesign: TemplateDefinition = {
  id: 'api-design',
  name: 'API Design',
  category: TemplateCategory.Technical,
  description: 'API specification board with auth flow, CRUD operations, and endpoint reference.',
  longDescription: 'Design your API with clear authentication flows, CRUD operation sequences, and a comprehensive endpoint reference table. Includes error handling documentation and versioning strategy. Perfect for backend planning and developer onboarding.',
  emoji: '\u{1F50C}',
  estimatedTime: '~6 min',
  blueprintId: 'api-design',
  complexity: 'complex',
  color: '#3B82F6',
  tags: ['api', 'rest', 'backend', 'endpoints', 'authentication', 'design'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       API DESIGN                 \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 AUTH FLOW      \u2502 API OVERVIEW     \u2502
\u2502 [sequence]     \u2502 \u2022 Base URL       \u2502
\u2502 Client<>Auth   \u2502 \u2022 Auth Method    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 CRUD FLOW      \u2502 CRUD SPEC        \u2502
\u2502 [sequence]     \u2502 \u2022 Schemas        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ENDPOINTS TABLE                  \u2502
\u2502  GET|POST|PUT|DELETE /resource    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ERROR HANDLING DOCUMENT          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'apiName', label: 'API Name', type: 'text', placeholder: 'e.g., Orders API', required: true },
    { id: 'version', label: 'API Version', type: 'text', placeholder: 'e.g., v2', required: false, defaultValue: 'v1' },
    { id: 'authMethod', label: 'Authentication Method', type: 'select', placeholder: 'Select auth method', required: true, options: ['API Key', 'OAuth2', 'JWT', 'None'] },
    { id: 'baseUrl', label: 'Base URL', type: 'text', placeholder: 'e.g., https://api.example.com/v1', required: false },
    { id: 'endpoints', label: 'Endpoints', type: 'textarea', placeholder: 'One per line: METHOD /path - description\ne.g., GET /users - List all users\nPOST /users - Create a user', required: true, helpText: 'Define your API endpoints' },
    { id: 'rateLimiting', label: 'Rate Limiting', type: 'text', placeholder: 'e.g., 100 requests/minute per API key', required: false },
  ],
  sections: [
    { id: 'authFlow', name: 'Authentication Flow', type: 'flowchart', description: 'Login, token issue, refresh, and logout sequence', icon: '\u{1F510}' },
    { id: 'crudFlow', name: 'CRUD Operations', type: 'flowchart', description: 'Create, Read, Update, Delete with validation', icon: '\u{1F504}' },
    { id: 'endpoints', name: 'Endpoints Table', type: 'table', description: 'Complete endpoint reference with auth levels', icon: '\u{1F4CB}' },
    { id: 'errorDoc', name: 'Error Handling', type: 'document', description: 'Error codes, retry guidance, and rate limits', icon: '\u{1F4DD}' },
  ],
}
