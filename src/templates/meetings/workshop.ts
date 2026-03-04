import { TemplateDefinition, TemplateCategory } from '../types'

export const workshop: TemplateDefinition = {
  id: 'workshop-board',
  name: 'Workshop Board',
  category: TemplateCategory.Meetings,
  description: 'Structured workshop board with agenda, activity frames, parking lot, and outcomes.',
  longDescription: 'Facilitate engaging workshops with a structured board featuring a timed agenda, activity frames for hands-on exercises, a parking lot for off-topic items, and an outcomes table tracking decisions and action items. Designed for both in-person and remote workshops.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~4 min',
  blueprintId: 'workshop-board',
  complexity: 'medium',
  color: '#10B981',
  tags: ['workshop', 'facilitation', 'activities', 'agenda', 'outcomes'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       WORKSHOP BOARD               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  AGENDA          \u2502  GROUND RULES    \u2502
\u2502  9:00 Intro      \u2502  \u2022 One voice     \u2502
\u2502  9:30 Activity 1 \u2502  \u2022 Timeboxed     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502Activity \u2502Activit\u2502 Parking Lot      \u2502
\u2502  1      \u2502  2    \u2502  [____]          \u2502
\u2502 [____] \u2502 [____]\u2502  [____]          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  OUTCOMES TABLE + SUMMARY DOC      \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'workshopTitle', label: 'Workshop Title', type: 'text', placeholder: 'e.g., Q2 Planning Workshop', required: true },
    { id: 'facilitator', label: 'Facilitator', type: 'text', placeholder: 'e.g., Sarah Chen', required: true },
    { id: 'agenda', label: 'Agenda', type: 'textarea', placeholder: 'Timed agenda items, one per line\ne.g., 9:00 - Welcome & Intro\n9:15 - Icebreaker\n9:30 - Activity 1', required: false },
    { id: 'activities', label: 'Activities', type: 'textarea', placeholder: 'Workshop activities, one per line\ne.g., Brainstorm Solutions\nDot Voting\nAction Planning', required: false },
    { id: 'outcomes', label: 'Expected Outcomes', type: 'textarea', placeholder: 'What should participants walk away with?', required: false },
  ],
  sections: [
    { id: 'agenda', name: 'Agenda & Rules', type: 'frame', description: 'Timed agenda and workshop ground rules', icon: '\u{1F4C5}' },
    { id: 'activities', name: 'Activity Frames', type: 'frame', description: '3-5 activity frames with prompts and space', icon: '\u{1F3AF}' },
    { id: 'parking', name: 'Parking Lot', type: 'sticky_cluster', description: 'Frame for off-topic items to revisit later', icon: '\u{1F17F}\uFE0F' },
    { id: 'outcomes', name: 'Outcomes Table', type: 'table', description: 'Decisions and actions with owners and deadlines', icon: '\u{1F4CB}' },
    { id: 'summary', name: 'Workshop Summary', type: 'document', description: 'Key discussions, decisions, and follow-up plan', icon: '\u{1F4DD}' },
  ],
}
