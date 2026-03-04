import { describe, it, expect } from 'vitest'
import { MiroApiClient, getMiroClient } from '../services/miroApi'
import { GitHubApiClient } from '../services/githubApi'
import { generateBoardManifest, interpolate } from '../services/templateEngine'
import { parseFileContent, suggestTemplate } from '../services/fileParser'
import { buildBoard } from '../services/boardBuilder'
import type { ParsedContent } from '../types/import'

describe('MiroApiClient', () => {
  it('exports MiroApiClient class', () => {
    expect(MiroApiClient).toBeDefined()
    expect(typeof MiroApiClient).toBe('function')
  })

  it('can be instantiated', () => {
    const client = new MiroApiClient('test-token')
    expect(client).toBeDefined()
    expect(typeof client.testConnection).toBe('function')
    expect(typeof client.createBoard).toBe('function')
    expect(typeof client.listBoards).toBe('function')
    expect(typeof client.createShape).toBe('function')
    expect(typeof client.createStickyNote).toBe('function')
    expect(typeof client.createText).toBe('function')
    expect(typeof client.createFrame).toBe('function')
    expect(typeof client.createConnector).toBe('function')
    expect(typeof client.deleteItem).toBe('function')
    expect(typeof client.deleteGhostItems).toBe('function')
  })

  it('getMiroClient returns singleton', () => {
    const client1 = getMiroClient('token-a')
    const client2 = getMiroClient()
    expect(client2).toBe(client1)
  })

  it('getMiroClient creates new instance with new token', () => {
    const client1 = getMiroClient('token-x')
    const client2 = getMiroClient('token-y')
    expect(client2).not.toBe(client1)
  })
})

describe('GitHubApiClient', () => {
  it('exports GitHubApiClient class', () => {
    expect(GitHubApiClient).toBeDefined()
    expect(typeof GitHubApiClient).toBe('function')
  })

  it('can be instantiated', () => {
    const client = new GitHubApiClient('ghp_test')
    expect(client).toBeDefined()
    expect(typeof client.testConnection).toBe('function')
    expect(typeof client.listRepos).toBe('function')
    expect(typeof client.getRepo).toBe('function')
    expect(typeof client.analyzeRepo).toBe('function')
  })
})

describe('Template Engine', () => {
  it('exports generateBoardManifest', () => {
    expect(typeof generateBoardManifest).toBe('function')
  })

  it('exports interpolate', () => {
    expect(typeof interpolate).toBe('function')
  })

  it('interpolate replaces template variables', () => {
    const result = interpolate('Hello {{name}}, welcome to {{app}}!', {
      name: 'World',
      app: 'MiroX',
    })
    expect(result).toBe('Hello World, welcome to MiroX!')
  })

  it('interpolate preserves unknown variables with brackets', () => {
    const result = interpolate('{{known}} and {{unknown}}', { known: 'yes' })
    expect(result).toBe('yes and [unknown]')
  })

  it('generateBoardManifest creates valid manifest', async () => {
    const templates = await import('../templates')
    const template = templates.ALL_TEMPLATES[0]!
    const manifest = generateBoardManifest(template, {}, 'Test Board')
    expect(manifest.boardName).toBe('Test Board')
    expect(Array.isArray(manifest.sections)).toBe(true)
    expect(manifest.sections.length).toBeGreaterThan(0)
    // First section should be the hero banner
    expect(manifest.sections[0]!.type).toBe('shape')
  })
})

describe('File Parser', () => {
  it('exports suggestTemplate', () => {
    expect(typeof suggestTemplate).toBe('function')
  })

  it('exports parseFileContent', () => {
    expect(typeof parseFileContent).toBe('function')
  })

  it('suggests sprint-planning for sprint/backlog content', () => {
    const content: ParsedContent = {
      rawText: 'sprint backlog task todo status',
      title: 'Tasks',
      headings: [],
      keyPhrases: [],
      summary: '',
      fileType: 'document',
      suggestedTemplate: '',
      confidence: 0,
    }
    const result = suggestTemplate(content)
    expect(result).toBe('sprint-planning')
  })

  it('suggests system-architecture for code files', () => {
    const content: ParsedContent = {
      rawText: 'some code content',
      title: 'code.ts',
      headings: [],
      keyPhrases: [],
      summary: '',
      fileType: 'code',
      suggestedTemplate: '',
      confidence: 0,
    }
    const result = suggestTemplate(content)
    expect(result).toBe('system-architecture')
  })

  it('suggests brainstorm-session as fallback', () => {
    const content: ParsedContent = {
      rawText: 'random text with no specific keywords',
      title: 'notes',
      headings: [],
      keyPhrases: [],
      summary: '',
      fileType: 'document',
      suggestedTemplate: '',
      confidence: 0,
    }
    const result = suggestTemplate(content)
    expect(result).toBe('brainstorm-session')
  })

  it('suggests project-dashboard for spreadsheets without task keywords', () => {
    const content: ParsedContent = {
      rawText: 'revenue expenses profit',
      title: 'data.xlsx',
      headings: [],
      keyPhrases: [],
      summary: '',
      fileType: 'spreadsheet',
      suggestedTemplate: '',
      confidence: 0,
    }
    const result = suggestTemplate(content)
    expect(result).toBe('project-dashboard')
  })
})

describe('Board Builder', () => {
  it('exports buildBoard function', () => {
    expect(typeof buildBoard).toBe('function')
  })
})
