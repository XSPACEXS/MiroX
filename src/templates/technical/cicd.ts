import { TemplateDefinition, TemplateCategory } from '../types'

export const cicd: TemplateDefinition = {
  id: 'deployment-pipeline',
  name: 'CI/CD Pipeline',
  category: TemplateCategory.Technical,
  description: 'CI/CD pipeline visualization with build stages, environments, and deployment config.',
  longDescription: 'Map your entire deployment pipeline from code commit to production monitoring. Visualize build stages, test gates, and deployment environments. Includes an environment configuration table and a runbook document with rollback procedures and incident response.',
  emoji: '\u{1F504}',
  estimatedTime: '~4 min',
  blueprintId: 'deployment-pipeline',
  brainCategory: 'technical-architecture',
  brainBlueprint: 'infrastructure-overview',
  complexity: 'medium',
  color: '#3B82F6',
  tags: ['cicd', 'devops', 'pipeline', 'deployment', 'automation', 'infrastructure'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       CI/CD PIPELINE                   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 PIPELINE FLOW      \u2502 PIPELINE DOC       \u2502
\u2502 Commit\u2500>Build\u2500>Test\u2502 \u2022 Branching        \u2502
\u2502 \u2500>Stage\u2500>Prod     \u2502 \u2022 Code Review      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ENVIRONMENTS TABLE                    \u2502
\u2502  Env | URL | Branch | Auto-Deploy      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RUNBOOK DOCUMENT                      \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'repoName', label: 'Repository Name', type: 'text', placeholder: 'e.g., acme/platform', required: true },
    { id: 'ciTool', label: 'CI Tool', type: 'select', placeholder: 'Select CI tool', required: true, options: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'Bitbucket Pipelines'] },
    { id: 'environments', label: 'Environments', type: 'multiselect', placeholder: 'Select environments', required: true, defaultValue: 'dev,staging,prod', options: ['dev', 'staging', 'uat', 'prod', 'preview', 'canary'] },
    { id: 'deploymentTarget', label: 'Deployment Target', type: 'select', placeholder: 'Where does the app deploy?', required: false, options: ['AWS ECS', 'Kubernetes', 'Vercel', 'Netlify', 'Railway', 'Docker Compose', 'VM / Bare Metal'] },
    { id: 'branchStrategy', label: 'Branching Strategy', type: 'select', placeholder: 'Select strategy', required: false, options: ['GitHub Flow', 'GitFlow', 'Trunk-based', 'Release Branches'] },
  ],
  sections: [
    { id: 'pipeline', name: 'Pipeline Flow', type: 'flowchart', description: 'Full CI/CD pipeline with gates and failure paths', icon: '\u{1F504}' },
    { id: 'environments', name: 'Environments Table', type: 'table', description: 'Environment config with URLs and deployment rules', icon: '\u{1F4CB}' },
    { id: 'pipelineDoc', name: 'Pipeline Document', type: 'document', description: 'Tool choices, branching strategy, and review process', icon: '\u{1F4DD}' },
    { id: 'runbook', name: 'Runbook', type: 'document', description: 'Deployment checklist, rollback, and incident response', icon: '\u{1F4D6}' },
  ],
}
