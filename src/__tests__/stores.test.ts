import { describe, it, expect, beforeEach } from 'vitest'
import { useUIStore } from '../stores/uiStore'
import { useBoardStore } from '../stores/boardStore'
import { useSettingsStore } from '../stores/settingsStore'
import { useTemplateStore } from '../stores/templateStore'
import { TemplateCategory } from '../templates/types'
import { useImportStore } from '../stores/importStore'

describe('UI Store', () => {
  beforeEach(() => {
    useUIStore.setState({
      sidebarCollapsed: false,
      activePage: '/',
      activeModal: null,
      toasts: [],
      isSearchOpen: false,
    })
  })

  it('initializes with correct defaults', () => {
    const state = useUIStore.getState()
    expect(state.sidebarCollapsed).toBe(false)
    expect(state.activePage).toBe('/')
    expect(state.activeModal).toBeNull()
    expect(state.toasts).toEqual([])
    expect(state.isSearchOpen).toBe(false)
  })

  it('toggles sidebar', () => {
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarCollapsed).toBe(true)
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarCollapsed).toBe(false)
  })

  it('sets active page', () => {
    useUIStore.getState().setActivePage('/templates')
    expect(useUIStore.getState().activePage).toBe('/templates')
  })

  it('opens and closes modal', () => {
    useUIStore.getState().openModal('welcome')
    expect(useUIStore.getState().activeModal).toBe('welcome')
    useUIStore.getState().closeModal()
    expect(useUIStore.getState().activeModal).toBeNull()
  })

  it('toggles search', () => {
    useUIStore.getState().toggleSearch()
    expect(useUIStore.getState().isSearchOpen).toBe(true)
    useUIStore.getState().toggleSearch()
    expect(useUIStore.getState().isSearchOpen).toBe(false)
  })

  it('adds and removes toasts', () => {
    useUIStore.getState().addToast({ type: 'success', title: 'Test toast' })
    const toasts = useUIStore.getState().toasts
    expect(toasts).toHaveLength(1)
    expect(toasts[0]!.type).toBe('success')
    expect(toasts[0]!.title).toBe('Test toast')
    expect(toasts[0]!.id).toBeTruthy()

    useUIStore.getState().removeToast(toasts[0]!.id)
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })
})

describe('Board Store', () => {
  beforeEach(() => {
    useBoardStore.setState({
      recentBoards: [],
      totalBoardsCreated: 0,
      isCreating: false,
      creationProgress: 0,
      creationStep: '',
      lastCreatedBoard: null,
    })
  })

  it('initializes with correct defaults', () => {
    const state = useBoardStore.getState()
    expect(state.recentBoards).toEqual([])
    expect(state.totalBoardsCreated).toBe(0)
    expect(state.isCreating).toBe(false)
    expect(state.creationProgress).toBe(0)
    expect(state.creationStep).toBe('')
    expect(state.lastCreatedBoard).toBeNull()
  })

  it('adds recent board', () => {
    const board = {
      id: 'b1',
      name: 'Test Board',
      url: 'https://miro.com/board/1',
      templateId: 't1',
      templateName: 'Kanban',
      createdAt: new Date().toISOString(),
    }
    useBoardStore.getState().addRecentBoard(board)
    expect(useBoardStore.getState().recentBoards).toHaveLength(1)
    expect(useBoardStore.getState().recentBoards[0]).toEqual(board)
  })

  it('limits recent boards to 10', () => {
    for (let i = 0; i < 12; i++) {
      useBoardStore.getState().addRecentBoard({
        id: `b${i}`,
        name: `Board ${i}`,
        url: `https://miro.com/board/${i}`,
        templateId: 't1',
        templateName: 'Kanban',
        createdAt: new Date().toISOString(),
      })
    }
    expect(useBoardStore.getState().recentBoards).toHaveLength(10)
  })

  it('removes recent board', () => {
    useBoardStore.getState().addRecentBoard({
      id: 'b1',
      name: 'Test',
      url: 'url',
      templateId: 't1',
      templateName: 'Kanban',
      createdAt: new Date().toISOString(),
    })
    useBoardStore.getState().removeRecentBoard('b1')
    expect(useBoardStore.getState().recentBoards).toHaveLength(0)
  })

  it('increments total', () => {
    useBoardStore.getState().incrementTotal()
    useBoardStore.getState().incrementTotal()
    expect(useBoardStore.getState().totalBoardsCreated).toBe(2)
  })

  it('sets creation state', () => {
    useBoardStore.getState().setCreating(true)
    expect(useBoardStore.getState().isCreating).toBe(true)
    useBoardStore.getState().setProgress(50, 'Building diagrams')
    expect(useBoardStore.getState().creationProgress).toBe(50)
    expect(useBoardStore.getState().creationStep).toBe('Building diagrams')
  })
})

describe('Settings Store', () => {
  beforeEach(() => {
    useSettingsStore.setState({
      miroConnected: false,
      githubConnected: false,
      miroUsername: null,
      githubUsername: null,
      githubAvatarUrl: null,
      theme: 'dark',
      accentColor: '#FFD600',
      onboardingComplete: false,
      filesImported: 0,
      templatesUsed: [],
    })
  })

  it('initializes with correct defaults', () => {
    const state = useSettingsStore.getState()
    expect(state.miroConnected).toBe(false)
    expect(state.githubConnected).toBe(false)
    expect(state.theme).toBe('dark')
    expect(state.accentColor).toBe('#FFD600')
    expect(state.onboardingComplete).toBe(false)
    expect(state.filesImported).toBe(0)
    expect(state.templatesUsed).toEqual([])
  })

  it('sets Miro connection', () => {
    useSettingsStore.getState().setMiroConnected(true, 'testuser')
    expect(useSettingsStore.getState().miroConnected).toBe(true)
    expect(useSettingsStore.getState().miroUsername).toBe('testuser')
  })

  it('sets GitHub connection', () => {
    useSettingsStore.getState().setGithubConnected(true, 'ghuser', 'https://avatar.url')
    expect(useSettingsStore.getState().githubConnected).toBe(true)
    expect(useSettingsStore.getState().githubUsername).toBe('ghuser')
    expect(useSettingsStore.getState().githubAvatarUrl).toBe('https://avatar.url')
  })

  it('sets theme', () => {
    useSettingsStore.getState().setTheme('light')
    expect(useSettingsStore.getState().theme).toBe('light')
  })

  it('completes onboarding', () => {
    useSettingsStore.getState().completeOnboarding()
    expect(useSettingsStore.getState().onboardingComplete).toBe(true)
  })

  it('records template usage with dedup and limit', () => {
    useSettingsStore.getState().recordTemplateUsed('t1')
    useSettingsStore.getState().recordTemplateUsed('t2')
    useSettingsStore.getState().recordTemplateUsed('t1') // duplicate moves to front
    const used = useSettingsStore.getState().templatesUsed
    expect(used[0]).toBe('t1')
    expect(used[1]).toBe('t2')
    expect(used).toHaveLength(2)
  })
})

describe('Template Store', () => {
  beforeEach(() => {
    useTemplateStore.setState({
      selectedCategory: 'all',
      searchQuery: '',
      selectedTemplate: null,
      previewTemplate: null,
    })
  })

  it('initializes with correct defaults', () => {
    const state = useTemplateStore.getState()
    expect(state.selectedCategory).toBe('all')
    expect(state.searchQuery).toBe('')
    expect(state.selectedTemplate).toBeNull()
    expect(state.previewTemplate).toBeNull()
  })

  it('sets category', () => {
    useTemplateStore.getState().setCategory(TemplateCategory.Agile)
    expect(useTemplateStore.getState().selectedCategory).toBe(TemplateCategory.Agile)
  })

  it('sets search query', () => {
    useTemplateStore.getState().setSearch('kanban')
    expect(useTemplateStore.getState().searchQuery).toBe('kanban')
  })

  it('clears selection', () => {
    useTemplateStore.getState().setSearch('test')
    useTemplateStore.getState().clearSelection()
    expect(useTemplateStore.getState().selectedTemplate).toBeNull()
    expect(useTemplateStore.getState().searchQuery).toBe('')
  })
})

describe('Import Store', () => {
  beforeEach(() => {
    useImportStore.setState({
      activeTab: 'file',
      uploadedFiles: [],
      importAnalysis: null,
      isAnalyzing: false,
      urlInput: '',
    })
  })

  it('initializes with correct defaults', () => {
    const state = useImportStore.getState()
    expect(state.activeTab).toBe('file')
    expect(state.uploadedFiles).toEqual([])
    expect(state.importAnalysis).toBeNull()
    expect(state.isAnalyzing).toBe(false)
    expect(state.urlInput).toBe('')
  })

  it('sets active tab', () => {
    useImportStore.getState().setTab('github')
    expect(useImportStore.getState().activeTab).toBe('github')
  })

  it('adds and removes files', () => {
    const file = {
      id: 'f1',
      name: 'test.pdf',
      size: 1024,
      type: 'application/pdf',
      path: '/path/test.pdf',
      status: 'ready' as const,
      importedAt: new Date(),
    }
    useImportStore.getState().addFile(file)
    expect(useImportStore.getState().uploadedFiles).toHaveLength(1)

    useImportStore.getState().removeFile('f1')
    expect(useImportStore.getState().uploadedFiles).toHaveLength(0)
  })

  it('updates file', () => {
    const file = {
      id: 'f1',
      name: 'test.pdf',
      size: 1024,
      type: 'application/pdf',
      path: '/path/test.pdf',
      status: 'parsing' as const,
      importedAt: new Date(),
    }
    useImportStore.getState().addFile(file)
    useImportStore.getState().updateFile('f1', { status: 'ready' })
    expect(useImportStore.getState().uploadedFiles[0]!.status).toBe('ready')
  })

  it('clears all files', () => {
    useImportStore.getState().addFile({
      id: 'f1', name: 'a.pdf', size: 0, type: 'pdf', path: '/a', status: 'ready', importedAt: new Date(),
    })
    useImportStore.getState().clearFiles()
    expect(useImportStore.getState().uploadedFiles).toHaveLength(0)
    expect(useImportStore.getState().importAnalysis).toBeNull()
  })
})
