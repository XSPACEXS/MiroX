import { TemplateDefinition, TemplateCategory } from '../types'

export const researchClusterMap: TemplateDefinition = {
  id: 'research-cluster-map',
  name: 'Research Cluster Map',
  category: TemplateCategory.MindMapCollab,
  description: 'Organize research into thematic clusters with connections, sources, and gap analysis.',
  longDescription: 'Structure your research into interconnected thematic clusters. Group findings as sticky notes by theme, draw connections between clusters with a flowchart, and produce a synthesis document highlighting patterns and gaps. Ideal for literature reviews, competitive analysis, and discovery research.',
  emoji: '\u{1F52C}',
  estimatedTime: '~8 min',
  blueprintId: 'research-cluster-map',
  brainCategory: 'mind-map-collab',
  brainBlueprint: 'research-cluster-map',
  complexity: 'medium',
  color: '#1565C0',
  tags: ['research', 'cluster', 'mind-map', 'synthesis', 'analysis', 'collaboration'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   RESEARCH CLUSTER MAP          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Cluster A]  [Cluster B]      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Cluster Connections            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Synthesis Document             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'researchTopic', label: 'Research Topic', type: 'text', placeholder: 'e.g., User onboarding patterns', required: true },
    { id: 'clusters', label: 'Research Clusters', type: 'textarea', placeholder: 'Research clusters or themes, one per line', required: true, helpText: 'Research clusters/themes, one per line' },
    { id: 'sources', label: 'Sources', type: 'textarea', placeholder: 'Research sources and references', required: false },
    { id: 'connections', label: 'Connections', type: 'textarea', placeholder: 'How clusters relate to each other', required: false },
    { id: 'gaps', label: 'Research Gaps', type: 'textarea', placeholder: 'Areas needing more research', required: false },
  ],
  sections: [
    { id: 'research-clusters', name: 'Research Clusters', type: 'sticky_cluster', description: 'Sticky notes grouped by research theme and cluster', icon: '\u{1F52C}' },
    { id: 'cluster-connections', name: 'Cluster Connections', type: 'flowchart', description: 'Flowchart showing connections and relationships between clusters', icon: '\u{1F517}' },
    { id: 'synthesis-doc', name: 'Synthesis', type: 'document', description: 'Document synthesizing findings across clusters with gap analysis', icon: '\u{1F4D6}' },
  ],
}
