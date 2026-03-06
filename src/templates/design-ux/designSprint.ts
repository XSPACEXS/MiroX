import { TemplateDefinition, TemplateCategory } from '../types'

export const designSprint: TemplateDefinition = {
  id: 'design-sprint',
  name: 'Design Sprint',
  category: TemplateCategory.Design,
  description: 'Five-day Google Ventures design sprint structure with day-by-day activities.',
  longDescription: 'Run a structured design sprint following the Google Ventures methodology. Five days of focused work: Map the challenge, Sketch solutions, Decide on the best approach, build a Prototype, and Test with real users. Includes deliverables tracking and activity prompts.',
  emoji: '\u26A1',
  estimatedTime: '~6 min',
  blueprintId: 'design-sprint',
  brainCategory: 'workshops',
  brainBlueprint: 'design-thinking',
  complexity: 'complex',
  color: '#F472B6',
  tags: ['design sprint', 'gv', 'prototype', 'testing', 'innovation', 'workshop'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  MAP \u2500> SKETCH \u2500> DECIDE \u2500> BUILD \u2500> TEST  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 DAY 1  \u2502 DAY 2  \u2502 DAY 3  \u2502 DAY 4  \u2502 DAY 5 \u2502
\u2502        \u2502        \u2502        \u2502        \u2502       \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502 [____] \u2502 [____]\u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502 [____] \u2502 [____]\u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502 [____] \u2502 [____]\u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SPRINT DELIVERABLES TABLE                  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'challenge', label: 'Sprint Challenge', type: 'textarea', placeholder: 'What challenge are you trying to solve in 5 days?', required: true },
    { id: 'teamMembers', label: 'Sprint Team', type: 'textarea', placeholder: 'Team members, one per line\ne.g., Designer, Developer, PM, Stakeholder', required: false },
    { id: 'facilitator', label: 'Facilitator', type: 'text', placeholder: 'e.g., Jane Smith', required: true },
    { id: 'startDate', label: 'Sprint Start Date', type: 'date', placeholder: 'YYYY-MM-DD', required: true },
    { id: 'successMetric', label: 'Success Metric', type: 'textarea', placeholder: 'How will you know if the sprint was successful?', required: false, helpText: 'Define what success looks like for the test on Day 5' },
  ],
  sections: [
    { id: 'process', name: 'Sprint Process', type: 'flowchart', description: 'Map > Sketch > Decide > Prototype > Test flow', icon: '\u26A1' },
    { id: 'day1', name: 'Day 1: Map', type: 'frame', description: 'Challenge definition, expert interviews, journey map', icon: '\u{1F4CB}' },
    { id: 'day2', name: 'Day 2: Sketch', type: 'frame', description: 'Lightning demos, 4-step sketch, solution concepts', icon: '\u270F\uFE0F' },
    { id: 'day3', name: 'Day 3: Decide', type: 'frame', description: 'Art gallery, heat map vote, storyboard', icon: '\u{1F3AF}' },
    { id: 'day4', name: 'Day 4: Prototype', type: 'frame', description: 'Build realistic prototype, assign roles', icon: '\u{1F528}' },
    { id: 'day5', name: 'Day 5: Test', type: 'frame', description: '5 user interviews, observe, synthesize', icon: '\u{1F9EA}' },
  ],
}
