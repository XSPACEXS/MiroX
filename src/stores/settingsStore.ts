import { create } from 'zustand'

interface SettingsStore {
  // Persisted via electron-store
  theme: 'dark' | 'light'
  accentColor: string
  onboardingComplete: boolean
  filesImported: number
  templatesUsed: string[]
  // Transient — not persisted
  miroConnected: boolean
  githubConnected: boolean
  miroUsername: string | null
  githubUsername: string | null
  githubAvatarUrl: string | null
  _loaded: boolean
  // Actions
  loadFromDisk: () => Promise<void>
  saveToDisk: () => void
  setMiroConnected: (connected: boolean, username?: string) => void
  setGithubConnected: (connected: boolean, username?: string, avatarUrl?: string) => void
  setTheme: (theme: 'dark' | 'light') => void
  setAccentColor: (color: string) => void
  completeOnboarding: () => void
  incrementFilesImported: () => void
  recordTemplateUsed: (templateId: string) => void
}

export const useSettingsStore = create<SettingsStore>()((set, get) => ({
  theme: 'dark',
  accentColor: '#FFD600',
  onboardingComplete: false,
  filesImported: 0,
  templatesUsed: [],
  miroConnected: false,
  githubConnected: false,
  miroUsername: null,
  githubUsername: null,
  githubAvatarUrl: null,
  _loaded: false,

  loadFromDisk: async () => {
    if (typeof window === 'undefined' || !window.electronAPI) return
    try {
      const settings = await window.electronAPI.settings.load()
      set({
        theme: (settings.theme as 'dark' | 'light') || 'dark',
        accentColor: (settings.accentColor as string) || '#FFD600',
        onboardingComplete: !!settings.onboardingComplete,
        _loaded: true,
      })
    } catch {
      set({ _loaded: true })
    }
  },

  saveToDisk: () => {
    if (typeof window === 'undefined' || !window.electronAPI) return
    const { theme, accentColor, onboardingComplete } = get()
    void window.electronAPI.settings.save({ theme, accentColor, onboardingComplete })
  },

  setMiroConnected: (miroConnected, miroUsername) =>
    set({ miroConnected, miroUsername: miroUsername || null }),
  setGithubConnected: (githubConnected, githubUsername, githubAvatarUrl) =>
    set({ githubConnected, githubUsername: githubUsername || null, githubAvatarUrl: githubAvatarUrl || null }),
  setTheme: (theme) => { set({ theme }); get().saveToDisk() },
  setAccentColor: (accentColor) => { set({ accentColor }); get().saveToDisk() },
  completeOnboarding: () => { set({ onboardingComplete: true }); get().saveToDisk() },
  incrementFilesImported: () => set(state => ({ filesImported: state.filesImported + 1 })),
  recordTemplateUsed: (templateId) => set(state => ({
    templatesUsed: [templateId, ...state.templatesUsed.filter(t => t !== templateId)].slice(0, 20),
  })),
}))
