import type { TemplateDefinition, BoardManifest, BoardSection, TemplateSection } from '../templates/types'

export function generateBoardManifest(
  template: TemplateDefinition,
  fieldValues: Record<string, string>,
  boardName?: string
): BoardManifest {
  const name = boardName || fieldValues['boardName'] || fieldValues['projectName'] || fieldValues['companyName'] || template.name

  const sections: BoardSection[] = []

  // Hero banner
  sections.push({
    type: 'shape',
    content: `${template.emoji} ${name}`,
    x: 0,
    y: -500,
    width: 4000,
    height: 200,
    color: '#FFD600',
    style: { fillColor: '#FFD600', textColor: '#000000', fontSize: 32, fontWeight: 700 },
  })

  // Generate sections based on template definition
  template.sections.forEach((section, index) => {
    const y = index * 3000
    const items = generateSectionItems(section, fieldValues, template, y)
    sections.push(...items)
  })

  return { boardName: name, sections }
}

function generateSectionItems(
  section: TemplateSection,
  values: Record<string, string>,
  template: TemplateDefinition,
  y: number
): BoardSection[] {
  const items: BoardSection[] = []

  switch (section.type) {
    case 'frame':
      items.push({
        type: 'shape',
        content: `${section.icon} ${section.name}`,
        x: 0,
        y,
        width: 4000,
        height: 200,
        color: '#1A1A1A',
        style: { fillColor: '#1A1A1A', textColor: '#FFFFFF', fontSize: 24, fontWeight: 700 },
      })
      break

    case 'document':
      items.push({
        type: 'card',
        content: generateDocContent(section, values, template),
        x: 2500,
        y,
        width: 1200,
        height: 800,
        color: '#1A1A1A',
      })
      break

    case 'kanban':
      items.push({
        type: 'shape',
        content: `${section.icon} ${section.name}`,
        x: 0,
        y,
        width: 4000,
        height: 100,
        color: '#111111',
      })
      break

    case 'table':
      items.push({
        type: 'card',
        content: generateTableContent(section, values),
        x: 0,
        y: y + 500,
        width: 2000,
        height: 600,
        color: '#111111',
      })
      break

    case 'flowchart':
      items.push({
        type: 'shape',
        content: `${section.icon} ${section.name}`,
        x: 0,
        y,
        width: 800,
        height: 400,
        color: '#1A1A1A',
        style: { fillColor: '#1A1A1A', textColor: '#FFFFFF', fontSize: 18 },
      })
      break

    case 'matrix':
      items.push({
        type: 'shape',
        content: `${section.icon} ${section.name}`,
        x: 0,
        y,
        width: 3200,
        height: 3200,
        color: '#1A1A1A',
        style: { fillColor: '#1A1A1A', textColor: '#FFFFFF', fontSize: 18 },
      })
      break

    case 'sticky_cluster': {
      const clusterItems = getFieldItems(values, section.id)
      clusterItems.forEach((item, i) => {
        items.push({
          type: 'sticky_note',
          content: item,
          x: (i % 4) * 400,
          y: y + Math.floor(i / 4) * 300,
          color: '#FFD600',
        })
      })
      break
    }

    default:
      items.push({
        type: 'card',
        content: section.name,
        x: 0,
        y,
        width: 400,
        height: 200,
        color: '#1A1A1A',
      })
  }

  return items
}

function generateDocContent(
  section: TemplateSection,
  values: Record<string, string>,
  template: TemplateDefinition
): string {
  const lines = [`# ${section.name}`, '']

  template.fields.forEach(field => {
    const value = values[field.id]
    if (value) {
      lines.push(`**${field.label}:** ${value}`, '')
    }
  })

  if (lines.length <= 2) {
    lines.push(`*${section.description}*`, '')
  }

  return lines.join('\n')
}

function generateTableContent(section: TemplateSection, values: Record<string, string>): string {
  const lines = [`${section.icon} ${section.name}`, '']
  const entries = Object.entries(values).filter(([, v]) => v.trim())
  if (entries.length > 0) {
    lines.push('| Field | Value |', '|---|---|')
    entries.forEach(([k, v]) => lines.push(`| ${k.replace(/\|/g, '\\|')} | ${v.replace(/\|/g, '\\|')} |`))
  } else {
    lines.push(section.description)
  }
  return lines.join('\n')
}

function getFieldItems(fieldValues: Record<string, string>, sectionId: string): string[] {
  const key = Object.keys(fieldValues).find(k =>
    k.toLowerCase().includes(sectionId.toLowerCase())
  )
  if (key && fieldValues[key]) {
    return fieldValues[key].split('\n').filter(Boolean).slice(0, 12)
  }
  return ['Item 1', 'Item 2', 'Item 3']
}

export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] || `[${key}]`)
}
