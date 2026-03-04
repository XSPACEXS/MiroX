import { describe, it, expect } from 'vitest'
import { ALL_TEMPLATES, TEMPLATES_BY_CATEGORY, getTemplateById, searchTemplates } from '../templates'
import { TemplateCategory } from '../templates/types'

describe('Template Registry', () => {
  it('should have 38 templates in ALL_TEMPLATES', () => {
    expect(ALL_TEMPLATES).toHaveLength(38)
  })

  it('every template has required fields', () => {
    for (const t of ALL_TEMPLATES) {
      expect(t.id).toBeTruthy()
      expect(t.name).toBeTruthy()
      expect(t.description).toBeTruthy()
      expect(t.longDescription).toBeTruthy()
      expect(t.category).toBeTruthy()
      expect(t.emoji).toBeTruthy()
      expect(t.previewAscii).toBeTruthy()
      expect(t.estimatedTime).toBeTruthy()
      expect(t.blueprintId).toBeTruthy()
      expect(t.color).toBeTruthy()
      expect(Array.isArray(t.fields)).toBe(true)
      expect(Array.isArray(t.tags)).toBe(true)
      expect(t.tags.length).toBeGreaterThan(0)
      expect(Array.isArray(t.sections)).toBe(true)
      expect(t.sections.length).toBeGreaterThan(0)
      expect(['simple', 'medium', 'complex']).toContain(t.complexity)
    }
  })

  it('every template has unique id', () => {
    const ids = ALL_TEMPLATES.map(t => t.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('every template field has required properties', () => {
    for (const t of ALL_TEMPLATES) {
      for (const f of t.fields) {
        expect(f.id).toBeTruthy()
        expect(f.label).toBeTruthy()
        expect(f.type).toBeTruthy()
        expect(typeof f.required).toBe('boolean')
        expect(['text', 'textarea', 'select', 'multiselect', 'number', 'date']).toContain(f.type)
      }
    }
  })

  it('every template section has required properties', () => {
    for (const t of ALL_TEMPLATES) {
      for (const s of t.sections) {
        expect(s.id).toBeTruthy()
        expect(s.name).toBeTruthy()
        expect(s.type).toBeTruthy()
        expect(s.description).toBeTruthy()
        expect(s.icon).toBeTruthy()
      }
    }
  })

  it('TEMPLATES_BY_CATEGORY covers all categories', () => {
    const categories = Object.values(TemplateCategory)
    for (const cat of categories) {
      expect(TEMPLATES_BY_CATEGORY).toHaveProperty(cat)
      expect(Array.isArray(TEMPLATES_BY_CATEGORY[cat])).toBe(true)
    }
  })

  it('TEMPLATES_BY_CATEGORY["all"] equals ALL_TEMPLATES', () => {
    expect(TEMPLATES_BY_CATEGORY['all']).toBe(ALL_TEMPLATES)
  })

  it('category template counts add up (excluding empty startup)', () => {
    const categories = Object.values(TemplateCategory).filter(c => c !== 'startup')
    let sum = 0
    for (const cat of categories) {
      sum += TEMPLATES_BY_CATEGORY[cat]?.length ?? 0
    }
    expect(sum).toBe(ALL_TEMPLATES.length)
  })

  it('getTemplateById returns correct template', () => {
    const first = ALL_TEMPLATES[0]!
    const found = getTemplateById(first.id)
    expect(found).toBe(first)
  })

  it('getTemplateById returns undefined for unknown id', () => {
    expect(getTemplateById('nonexistent-id')).toBeUndefined()
  })

  it('searchTemplates returns all for empty query', () => {
    expect(searchTemplates('')).toBe(ALL_TEMPLATES)
  })

  it('searchTemplates filters by name', () => {
    const results = searchTemplates('kanban')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every(t =>
      t.name.toLowerCase().includes('kanban') ||
      t.description.toLowerCase().includes('kanban') ||
      t.tags.some(tag => tag.includes('kanban'))
    )).toBe(true)
  })

  it('searchTemplates returns empty for nonsense query', () => {
    const results = searchTemplates('xyznonexistent123')
    expect(results).toHaveLength(0)
  })
})
