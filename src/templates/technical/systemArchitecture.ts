import { TemplateDefinition, TemplateCategory } from '../types'

export const systemArchitecture: TemplateDefinition = {
  id: 'system-architecture',
  name: 'System Architecture',
  category: TemplateCategory.Technical,
  description: 'Complete system architecture board with overview, components, data flow, and deployment.',
  longDescription: 'Document your entire system architecture from high-level overview to deployment pipeline. Includes component diagrams, data flow sequences, ER models, technology stack reference, and infrastructure documentation. Based on proven architecture documentation patterns.',
  emoji: '\u{1F3D7}\uFE0F',
  estimatedTime: '~8 min',
  blueprintId: 'system-architecture',
  brainCategory: 'technical-architecture',
  brainBlueprint: 'system-diagram',
  complexity: 'complex',
  color: '#3B82F6',
  tags: ['architecture', 'system design', 'infrastructure', 'technical', 'components'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     SYSTEM ARCHITECTURE           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 SYSTEM OVERVIEW \u2502 BLUEPRINT DOC    \u2502
\u2502 [flowchart]     \u2502 \u2022 Tech Stack     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 COMPONENTS      \u2502 COMPONENT SPEC   \u2502
\u2502 [uml class]     \u2502 \u2022 Interfaces     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 DATA FLOW       \u2502 INTEGRATION DOC  \u2502
\u2502 [sequence]      \u2502 \u2022 API Contracts  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 DATA MODEL      \u2502 DATA ARCH DOC    \u2502
\u2502 [ER diagram]    \u2502 \u2022 Schema          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  TECH STACK TABLE  \u2502  INFRA DOC      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  CI/CD PIPELINE    \u2502  DEPLOY DOC     \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'systemName', label: 'System Name', type: 'text', placeholder: 'e.g., OrderFlow Platform', required: true },
    { id: 'techStack', label: 'Tech Stack', type: 'textarea', placeholder: 'Key technologies, one per line\ne.g., React, Node.js, PostgreSQL, Redis, AWS', required: true },
    { id: 'services', label: 'Core Services', type: 'textarea', placeholder: 'Main services or components, one per line', required: true },
    { id: 'databaseType', label: 'Primary Database', type: 'select', placeholder: 'Select database', required: true, options: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'SQLite', 'Redis', 'Other'] },
    { id: 'cloudProvider', label: 'Cloud Provider', type: 'select', placeholder: 'Select provider', required: false, options: ['AWS', 'GCP', 'Azure', 'Vercel', 'Railway', 'Self-hosted', 'Hybrid'] },
    { id: 'description', label: 'System Description', type: 'textarea', placeholder: 'Brief overview of what the system does and its key constraints', required: false },
  ],
  sections: [
    { id: 'overview', name: 'System Overview', type: 'flowchart', description: 'High-level architecture layers and data flows', icon: '\u{1F3D7}\uFE0F' },
    { id: 'components', name: 'Component Architecture', type: 'flowchart', description: 'Component diagram with interfaces and dependencies', icon: '\u{1F9E9}' },
    { id: 'dataFlow', name: 'Data Flow', type: 'flowchart', description: 'Request/response sequences for key operations', icon: '\u{1F500}' },
    { id: 'dataModel', name: 'Data Model', type: 'flowchart', description: 'Entity relationship diagram for core domain', icon: '\u{1F5C4}\uFE0F' },
    { id: 'techTable', name: 'Technology Stack', type: 'table', description: 'Full technology reference with versions', icon: '\u{1F4CB}' },
    { id: 'pipeline', name: 'CI/CD Pipeline', type: 'flowchart', description: 'Build, test, and deployment pipeline', icon: '\u{1F504}' },
  ],
}
