import { TemplateDefinition, TemplateCategory } from '../types'

export const databaseDesign: TemplateDefinition = {
  id: 'database-design',
  name: 'Database Design',
  category: TemplateCategory.Technical,
  description: 'Database schema board with ER diagram, schema reference, and migration plan.',
  longDescription: 'Design your database schema visually with an entity-relationship diagram, detailed schema reference table, and migration planning documents. Covers table definitions, relationships, indexing strategy, and rollback procedures for production-ready database design.',
  emoji: '\u{1F5C4}\uFE0F',
  estimatedTime: '~5 min',
  blueprintId: 'database-design',
  brainCategory: 'technical-architecture',
  brainBlueprint: 'database-schema',
  complexity: 'complex',
  color: '#3B82F6',
  tags: ['database', 'schema', 'er diagram', 'sql', 'data model', 'migration'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       DATABASE DESIGN             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 ER DIAGRAM     \u2502 SCHEMA DOC       \u2502
\u2502 [Users]        \u2502 \u2022 Tables         \u2502
\u2502   |  1:N       \u2502 \u2022 Indexes        \u2502
\u2502 [Orders]       \u2502 \u2022 Constraints    \u2502
\u2502   |  N:M       \u2502                  \u2502
\u2502 [Products]     \u2502                  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SCHEMA REFERENCE TABLE           \u2502
\u2502  Table|Column|Type|Constraints    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  MIGRATION PLAN DOCUMENT          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'databaseName', label: 'Database Name', type: 'text', placeholder: 'e.g., app_production', required: true },
    { id: 'dbType', label: 'Database Engine', type: 'select', placeholder: 'Select engine', required: true, options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'DynamoDB'] },
    { id: 'tables', label: 'Tables / Collections', type: 'textarea', placeholder: 'One table per line with key columns\ne.g., users: id, email, name, created_at\norders: id, user_id, total, status', required: true },
    { id: 'relationships', label: 'Relationships', type: 'textarea', placeholder: 'Describe relationships\ne.g., users 1:N orders\norders N:M products', required: false },
    { id: 'constraints', label: 'Key Constraints', type: 'textarea', placeholder: 'Special constraints, unique indexes, etc.', required: false },
  ],
  sections: [
    { id: 'erDiagram', name: 'ER Diagram', type: 'flowchart', description: 'Entity-relationship diagram with cardinality', icon: '\u{1F5C4}\uFE0F' },
    { id: 'schemaDoc', name: 'Schema Document', type: 'document', description: 'Table descriptions and indexing strategy', icon: '\u{1F4DD}' },
    { id: 'schemaTable', name: 'Schema Reference', type: 'table', description: 'Column-level reference with types and constraints', icon: '\u{1F4CB}' },
    { id: 'migrationDoc', name: 'Migration Plan', type: 'document', description: 'Migration scripts, seed data, and rollback plan', icon: '\u{1F4E6}' },
  ],
}
