import { TemplateDefinition, TemplateCategory } from '../types'

export const projectDashboard: TemplateDefinition = {
  id: 'project-dashboard',
  name: 'Project Dashboard',
  category: TemplateCategory.Agile,
  description: 'Project status dashboard with KPIs, task tracking, and risk register.',
  longDescription: 'Get a bird\'s-eye view of your project health with a visual dashboard. Track KPIs with color-coded indicators, monitor task progress, and maintain a risk register all in one place. Ideal for stakeholder updates and PMO reporting.',
  emoji: '\u{1F4CA}',
  estimatedTime: '~3 min',
  blueprintId: 'project-dashboard',
  complexity: 'medium',
  color: '#7C3AED',
  tags: ['dashboard', 'project', 'status', 'kpi', 'tracking', 'reporting'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       PROJECT DASHBOARD            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Budget\u2502Schedule\u2502 Scope \u2502Quality\u2502 Team\u2502
\u2502  \u25CF   \u2502  \u25CF   \u2502  \u25CF   \u2502  \u25CF   \u2502  \u25CF  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  TASK TABLE     \u2502 STATUS DOC     \u2502
\u2502  Task|Owner|Stat \u2502 \u2022 Progress    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RISK REGISTER TABLE              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'projectName', label: 'Project Name', type: 'text', placeholder: 'e.g., Platform Migration', required: true },
    { id: 'status', label: 'Overall Status', type: 'select', placeholder: 'Select status', required: true, options: ['On Track', 'At Risk', 'Behind Schedule', 'Completed'] },
    { id: 'kpi1Name', label: 'KPI 1 Name', type: 'text', placeholder: 'e.g., Budget Utilization', required: false },
    { id: 'kpi1Value', label: 'KPI 1 Value', type: 'text', placeholder: 'e.g., 72%', required: false },
    { id: 'kpi2Name', label: 'KPI 2 Name', type: 'text', placeholder: 'e.g., Sprint Velocity', required: false },
    { id: 'kpi2Value', label: 'KPI 2 Value', type: 'text', placeholder: 'e.g., 42 pts/sprint', required: false },
    { id: 'kpi3Name', label: 'KPI 3 Name', type: 'text', placeholder: 'e.g., Team Satisfaction', required: false },
    { id: 'kpi3Value', label: 'KPI 3 Value', type: 'text', placeholder: 'e.g., 8.5/10', required: false },
  ],
  sections: [
    { id: 'kpis', name: 'KPI Indicators', type: 'frame', description: 'Color-coded KPI status circles', icon: '\u{1F7E2}' },
    { id: 'overview', name: 'Project Overview', type: 'flowchart', description: 'Project phases with current status', icon: '\u{1F4CA}' },
    { id: 'tasks', name: 'Task Tracking', type: 'table', description: 'Sprint task list with assignees and status', icon: '\u{1F4CB}' },
    { id: 'risks', name: 'Risk Register', type: 'table', description: 'Project risks with probability and impact', icon: '\u26A0\uFE0F' },
    { id: 'statusDoc', name: 'Status Report', type: 'document', description: 'Project summary, milestones, and blockers', icon: '\u{1F4DD}' },
  ],
}
