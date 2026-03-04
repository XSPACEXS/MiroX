import { TemplateDefinition, TemplateCategory } from '../types'

export const rootCause: TemplateDefinition = {
  id: 'root-cause-analysis',
  name: 'Root Cause Analysis',
  category: TemplateCategory.Research,
  description: 'Fishbone (Ishikawa) diagram with 5 Whys table for systematic problem solving.',
  longDescription: 'Systematically investigate problems using a fishbone diagram to map potential causes across six categories (People, Process, Materials, Equipment, Environment, Management), then drill down with a 5 Whys table to identify the true root cause.',
  emoji: '\u{1F50E}',
  estimatedTime: '~4 min',
  blueprintId: 'root-cause-analysis',
  complexity: 'medium',
  color: '#F59E0B',
  tags: ['root cause', 'fishbone', 'ishikawa', '5 whys', 'problem solving', 'quality'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     ROOT CAUSE ANALYSIS          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 FISHBONE       \u2502 FINDINGS DOC     \u2502
\u2502 People\\  /Equip\u2502 \u2022 Root causes    \u2502
\u2502 Process-[PROB] \u2502 \u2022 Corrective     \u2502
\u2502 Materi/  \\Env  \u2502 \u2022 Preventive     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  5 WHYS TABLE                    \u2502
\u2502  Why? | Answer | Evidence | Root? \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'problemStatement', label: 'Problem Statement', type: 'textarea', placeholder: 'What problem are you investigating? Be specific.', required: true },
    { id: 'people', label: 'People Factors', type: 'textarea', placeholder: 'Human-related causes: training, skills, communication...', required: false },
    { id: 'process', label: 'Process Factors', type: 'textarea', placeholder: 'Process-related causes: procedures, workflows, handoffs...', required: false },
    { id: 'technology', label: 'Technology / Equipment', type: 'textarea', placeholder: 'Tech-related causes: tools, systems, infrastructure...', required: false },
    { id: 'environment', label: 'Environment Factors', type: 'textarea', placeholder: 'Environmental causes: culture, workload, external pressures...', required: false },
    { id: 'whys', label: '5 Whys (Optional)', type: 'textarea', placeholder: 'Initial why chain, one per line\ne.g., Why did the deploy fail?\nBecause tests weren\'t run', required: false },
  ],
  sections: [
    { id: 'fishbone', name: 'Fishbone Diagram', type: 'flowchart', description: 'Ishikawa diagram with 6 cause categories', icon: '\u{1F41F}' },
    { id: 'whys', name: '5 Whys Table', type: 'table', description: 'Iterative why analysis to reach root cause', icon: '\u{1F4CB}' },
    { id: 'findings', name: 'Findings Document', type: 'document', description: 'Root causes, corrective actions, and prevention plan', icon: '\u{1F4DD}' },
  ],
}
