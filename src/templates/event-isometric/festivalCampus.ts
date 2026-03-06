import { TemplateDefinition, TemplateCategory } from '../types'

export const festivalCampus: TemplateDefinition = {
  id: 'festival-campus',
  name: 'Festival Campus Map',
  category: TemplateCategory.EventIsometric,
  description: 'Design an isometric festival campus with zones, stages, and interactive area information.',
  longDescription: 'Plan your festival with an immersive campus map. Lay out zones like main stage, food court, workshops, and lounges in an isometric frame. Add sticky clusters with zone-specific details like lineup, capacity, and logistics. Perfect for event planners and organizers.',
  emoji: '\u{1F3AA}',
  estimatedTime: '~12 min',
  blueprintId: 'festival-campus',
  brainCategory: 'event-isometric',
  brainBlueprint: 'festival-campus',
  complexity: 'complex',
  color: '#4E342E',
  tags: ['festival', 'campus', 'isometric', 'event', 'map', 'zones'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    FESTIVAL CAMPUS MAP          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Main Stage]  [Food Court]    \u2502
\u2502     [Workshop]  [Lounge]       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Zone Info Cluster]           \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'festivalName', label: 'Festival Name', type: 'text', placeholder: 'e.g., SummerFest 2026', required: true },
    { id: 'date', label: 'Festival Date', type: 'date', placeholder: 'Select festival date', required: true },
    { id: 'zones', label: 'Festival Zones', type: 'textarea', placeholder: 'Festival zones, one per line', required: true, helpText: 'Festival zones, one per line' },
    { id: 'capacity', label: 'Capacity', type: 'text', placeholder: 'e.g., 10,000 attendees', required: false },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Headliners, special attractions, or sponsors', required: false },
  ],
  sections: [
    { id: 'campus-layout', name: 'Campus Layout', type: 'frame', description: 'Frame-based isometric campus layout with festival zones', icon: '\u{1F3AA}' },
    { id: 'zone-info', name: 'Zone Information', type: 'sticky_cluster', description: 'Sticky notes with details for each festival zone', icon: '\u{1F4CC}' },
  ],
}
