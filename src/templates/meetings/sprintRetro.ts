import { TemplateDefinition, TemplateCategory } from '../types'

export const sprintRetro: TemplateDefinition = {
  id: 'sprint-retrospective',
  name: 'Sprint Retrospective',
  category: TemplateCategory.Meetings,
  description: 'Three-column retro board: What went well, What didn\'t, and Action items.',
  longDescription: 'Run effective sprint retrospectives with the classic three-column format. Capture wins, challenges, and improvement actions on color-coded sticky notes, then track action items in a table with ownership and deadlines. Includes a summary document for institutional memory.',
  emoji: '\u{1F504}',
  estimatedTime: '~2 min',
  blueprintId: 'sprint-retrospective',
  complexity: 'simple',
  color: '#10B981',
  tags: ['retro', 'retrospective', 'sprint', 'agile', 'improvement', 'scrum'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 WENT WELL \u2502 DIDN'T GO  \u2502 ACTION     \u2502
\u2502 (green)   \u2502 WELL (org) \u2502 ITEMS (blu)\u2502
\u2502 [_____]  \u2502 [_____]   \u2502 [_____]   \u2502
\u2502 [_____]  \u2502 [_____]   \u2502 [_____]   \u2502
\u2502 [_____]  \u2502 [_____]   \u2502 [_____]   \u2502
\u2502 [_____]  \u2502 [_____]   \u2502 [_____]   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ACTION ITEMS TABLE                    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RETRO SUMMARY DOCUMENT                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'sprintNumber', label: 'Sprint Number', type: 'number', placeholder: 'e.g., 14', required: true },
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Team Phoenix', required: true },
    { id: 'date', label: 'Retro Date', type: 'date', placeholder: 'YYYY-MM-DD', required: false },
    { id: 'wentWell', label: 'What Went Well', type: 'textarea', placeholder: 'Wins and positives, one per line', required: false },
    { id: 'didntGoWell', label: 'What Didn\'t Go Well', type: 'textarea', placeholder: 'Challenges and issues, one per line', required: false },
    { id: 'actionItems', label: 'Action Items', type: 'textarea', placeholder: 'Improvement actions, one per line', required: false },
  ],
  sections: [
    { id: 'columns', name: 'Retro Columns', type: 'frame', description: 'Three-column layout with sticky notes', icon: '\u{1F4CB}' },
    { id: 'actions', name: 'Action Items Table', type: 'table', description: 'Action tracking with owner and status', icon: '\u{1F4CB}' },
    { id: 'summary', name: 'Retro Summary', type: 'document', description: 'Sprint summary and improvement commitments', icon: '\u{1F4DD}' },
  ],
}
