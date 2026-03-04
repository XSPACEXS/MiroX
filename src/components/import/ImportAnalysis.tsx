import { motion } from 'framer-motion'
import type { ParsedContent } from '../../types/import'

const templateInfo: Record<string, { emoji: string; description: string }> = {
  'system-architecture': { emoji: '\u{1F3D7}', description: 'Map out system components, services, and data flow' },
  'api-design': { emoji: '\u{1F50C}', description: 'Design API endpoints, schemas, and integrations' },
  'database-design': { emoji: '\u{1F5C4}', description: 'Model entities, relationships, and data schemas' },
  'microservices-map': { emoji: '\u{1F578}', description: 'Visualize microservice architecture and communication' },
  'deployment-pipeline': { emoji: '\u{1F680}', description: 'CI/CD pipeline stages, environments, and automation' },
  'kanban-board': { emoji: '\u{1F4CB}', description: 'Track tasks across workflow stages' },
  'sprint-planning': { emoji: '\u{1F3C3}', description: 'Plan sprints with stories, points, and capacity' },
  'business-plan': { emoji: '\u{1F4BC}', description: 'Business model, revenue, market analysis' },
  'competitive-analysis': { emoji: '\u{1F50D}', description: 'Compare competitors across key dimensions' },
  'brainstorm-session': { emoji: '\u{1F4A1}', description: 'Free-form ideation and concept clustering' },
  'user-persona': { emoji: '\u{1F464}', description: 'User profiles with demographics and behaviors' },
  'user-journey-map': { emoji: '\u{1F6A9}', description: 'Map customer experience across touchpoints' },
  'swot-analysis': { emoji: '\u{1F4CA}', description: 'Strengths, weaknesses, opportunities, threats' },
  'okr-tracker': { emoji: '\u{1F3AF}', description: 'Objectives and key results tracking' },
  'sprint-retrospective': { emoji: '\u{1F50E}', description: 'What went well, what to improve, action items' },
  'empathy-map': { emoji: '\u{1F49C}', description: 'Understand users: thinks, feels, says, does' },
  'product-roadmap': { emoji: '\u{1F5FA}', description: 'Quarterly milestones and feature planning' },
  'risk-matrix': { emoji: '\u{26A0}', description: 'Assess risk probability and impact' },
  'decision-matrix': { emoji: '\u{2696}', description: 'Weighted criteria for decision making' },
  'pitch-deck': { emoji: '\u{1F4E3}', description: 'Investor pitch: problem, solution, traction' },
  'project-dashboard': { emoji: '\u{1F4CA}', description: 'Project status overview with key metrics' },
}

const fileTypeBadges: Record<string, { label: string; color: string }> = {
  document: { label: 'Document', color: 'bg-blue-400/10 text-blue-400 border-blue-400/20' },
  spreadsheet: { label: 'Spreadsheet', color: 'bg-green-400/10 text-green-400 border-green-400/20' },
  code: { label: 'Repository', color: 'bg-purple-400/10 text-purple-400 border-purple-400/20' },
  archive: { label: 'Archive', color: 'bg-orange-400/10 text-orange-400 border-orange-400/20' },
  image: { label: 'Image', color: 'bg-pink-400/10 text-pink-400 border-pink-400/20' },
  other: { label: 'Content', color: 'bg-black-400/10 text-gray-400 border-black-400/20' },
}

interface ImportAnalysisProps {
  content: ParsedContent
  onUseTemplate: (templateId: string) => void
  onChooseDifferent: () => void
}

export default function ImportAnalysis({ content, onUseTemplate, onChooseDifferent }: ImportAnalysisProps) {
  const template = templateInfo[content.suggestedTemplate] || {
    emoji: '\u{1F4C4}',
    description: 'A matching template for your content',
  }
  const badge = fileTypeBadges[content.fileType] ?? fileTypeBadges['other']!
  const confidencePercent = Math.round(content.confidence * 100)

  // SVG circle for confidence meter
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (content.confidence * circumference)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
      className="p-5 rounded-xl bg-black-800/80 border border-black-600 space-y-5"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-lg">&#x2728;</span>
        <h3 className="text-white font-semibold">We analyzed your import</h3>
      </div>

      {/* Analysis row */}
      <div className="flex items-center gap-4">
        {/* Content type badge */}
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-1.5">Detected Content</p>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${badge.color}`}>
            {badge.label}
          </span>
          {content.detectedLanguage && content.detectedLanguage !== 'Unknown' && (
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-black-700 text-gray-400 border border-black-500">
              {content.detectedLanguage}
            </span>
          )}
        </div>

        {/* Confidence meter */}
        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-500 mb-1.5">Confidence</p>
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r={radius} fill="none" stroke="currentColor" strokeWidth="4" className="text-black-700" />
              <motion.circle
                cx="32" cy="32" r={radius} fill="none" strokeWidth="4"
                strokeLinecap="round"
                className={confidencePercent >= 75 ? 'text-green-400' : confidencePercent >= 50 ? 'text-yellow-400' : 'text-orange-400'}
                stroke="currentColor"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-white">{confidencePercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested template card */}
      <div className="p-4 rounded-lg bg-yellow-400/5 border border-yellow-400/15">
        <p className="text-xs text-gray-500 mb-2">Suggested Template</p>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{template.emoji}</span>
          <div>
            <p className="text-sm font-medium text-white capitalize">
              {content.suggestedTemplate.replace(/-/g, ' ')}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{template.description}</p>
          </div>
        </div>
      </div>

      {/* Key phrases */}
      {content.keyPhrases.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {content.keyPhrases.slice(0, 8).map((phrase, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-black-700 text-gray-400 border border-black-500"
            >
              {phrase}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 pt-1">
        <button
          onClick={() => onUseTemplate(content.suggestedTemplate)}
          className="flex-1 py-2.5 rounded-lg bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 transition-colors flex items-center justify-center gap-1.5"
        >
          Use This Template
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <button
          onClick={onChooseDifferent}
          className="px-4 py-2.5 rounded-lg text-gray-400 text-sm font-medium hover:text-white hover:bg-black-700 transition-colors"
        >
          Choose Different
        </button>
      </div>
    </motion.div>
  )
}
