import type { ParsedContent } from '../types/import'

export async function parseFileContent(
  filePath: string,
  fileName: string,
  mimeType: string
): Promise<ParsedContent> {
  const result = await window.electronAPI.files.parseFile(filePath, fileName, mimeType)

  if (!result.ok) {
    throw new Error(result.error || 'File parsing failed')
  }

  // Transform raw parse result into ParsedContent
  const text = result.text || ''
  const headings = (text.match(/^#{1,3} .+/gm) || []).map((h: string) => h.replace(/^#+\s/, ''))

  return {
    rawText: text.slice(0, 5000),
    title: fileName.replace(/\.[^.]+$/, ''),
    headings,
    keyPhrases: headings.slice(0, 10),
    summary: text.slice(0, 200),
    fileType: detectFileType(result.ext || ''),
    suggestedTemplate: '',
    confidence: 0.6,
  }
}

function detectFileType(ext: string): ParsedContent['fileType'] {
  if (['.pdf', '.docx', '.doc', '.txt', '.md'].includes(ext)) return 'document'
  if (['.csv', '.xlsx', '.xls'].includes(ext)) return 'spreadsheet'
  if (['.json', '.js', '.ts', '.py', '.go', '.rs'].includes(ext)) return 'code'
  if (['.zip'].includes(ext)) return 'archive'
  return 'other'
}

// Template suggestion logic based on parsed content
export function suggestTemplate(content: ParsedContent): string {
  const text = (content.rawText + ' ' + content.title + ' ' + content.headings.join(' ')).toLowerCase()

  if (content.fileType === 'spreadsheet') {
    if (/status|task|todo|done|progress/.test(text)) return 'kanban-board'
    return 'project-dashboard'
  }

  if (content.fileType === 'code') return 'system-architecture'
  if (content.fileType === 'archive') return 'system-architecture'

  const keywords: Array<[RegExp, string]> = [
    [/business plan|revenue model|go.to.market|market size/i, 'business-plan'],
    [/sprint|backlog|story point|velocity|agile|scrum/i, 'sprint-planning'],
    [/kanban|task board|workflow|wip limit/i, 'kanban-board'],
    [/api|endpoint|swagger|openapi|rest/i, 'api-design'],
    [/architecture|microservice|infrastructure|system design/i, 'system-architecture'],
    [/database|schema|erd|entity.relation|postgres|mysql/i, 'database-design'],
    [/ci.cd|pipeline|deploy|github action|gitlab/i, 'deployment-pipeline'],
    [/competitor|competitive|market share|positioning/i, 'competitive-analysis'],
    [/persona|user profile|demographics|behavior pattern/i, 'user-persona'],
    [/journey|touchpoint|customer experience|lifecycle/i, 'user-journey-map'],
    [/swot|strength|weakness|opportunity|threat/i, 'swot-analysis'],
    [/okr|objective|key result|goal/i, 'okr-tracker'],
    [/retrospective|retro|went well|improvement/i, 'sprint-retrospective'],
    [/brainstorm|idea|creative|innovation/i, 'brainstorm-session'],
    [/empathy|thinks|feels|says|does/i, 'empathy-map'],
    [/roadmap|milestone|quarter|release plan/i, 'product-roadmap'],
    [/risk|probability|impact|mitigation/i, 'risk-matrix'],
    [/decision|criteria|option|weight/i, 'decision-matrix'],
    [/pitch|investor|funding|startup|traction/i, 'pitch-deck'],
  ]

  for (const [pattern, template] of keywords) {
    if (pattern.test(text)) return template
  }

  return 'brainstorm-session'
}
