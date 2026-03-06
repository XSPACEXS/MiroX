import { TemplateDefinition, TemplateCategory } from '../types'

export const userStoryMap: TemplateDefinition = {
  id: 'user-story-map',
  name: 'User Story Map',
  category: TemplateCategory.Agile,
  description: 'Map user activities to stories, organized by priority for MVP and release planning.',
  longDescription: 'Visualize your product\'s user experience as a story map. Arrange user activities across the top, then stack stories beneath by release priority. Easily identify your MVP scope, plan iterative releases, and ensure a cohesive user journey.',
  emoji: '\u{1F5FA}\uFE0F',
  estimatedTime: '~5 min',
  blueprintId: 'user-story-map',
  brainCategory: 'product-development',
  brainBlueprint: 'user-story-mapping',
  complexity: 'medium',
  color: '#7C3AED',
  tags: ['story map', 'user stories', 'mvp', 'product', 'backlog', 'prioritization'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502Activity 1\u2502Activity 2\u2502Activity 3\u2502Activity 4\u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 MVP     \u2502 MVP     \u2502 MVP     \u2502 MVP     \u2502
\u2502 [green] \u2502 [green] \u2502 [green] \u2502 [green] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 v1.1    \u2502 v1.1    \u2502 v1.1    \u2502 v1.1    \u2502
\u2502 [yellow]\u2502 [yellow]\u2502 [yellow]\u2502 [yellow]\u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  STORY DETAILS TABLE                    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., MyApp Mobile', required: true },
    { id: 'activities', label: 'User Activities', type: 'textarea', placeholder: 'Comma-separated activities\ne.g., Sign Up, Browse, Purchase, Manage Account', required: true, helpText: 'High-level user activities that form the backbone of the map' },
    { id: 'storiesPerActivity', label: 'Stories per Activity', type: 'textarea', placeholder: 'Group stories by activity, one per line\ne.g., Sign Up: Email signup, Social login, Phone verification', required: false },
    { id: 'personaName', label: 'Target Persona', type: 'text', placeholder: 'e.g., Small Business Owner', required: false },
    { id: 'releaseStrategy', label: 'Release Strategy', type: 'select', placeholder: 'Select approach', required: false, options: ['MVP First', 'Feature-based Releases', 'Time-based Sprints'] },
  ],
  sections: [
    { id: 'activities', name: 'Activity Headers', type: 'frame', description: 'User activities row across the top', icon: '\u{1F3C3}' },
    { id: 'stories', name: 'Story Depth', type: 'sticky_cluster', description: 'Stories stacked by release priority', icon: '\u{1F4CC}' },
    { id: 'details', name: 'Story Details', type: 'table', description: 'Full story list with release and points', icon: '\u{1F4CB}' },
    { id: 'mapping', name: 'Story Map Guide', type: 'document', description: 'Persona context and release strategy', icon: '\u{1F4DD}' },
  ],
}
