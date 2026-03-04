import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsStore {
  miroConnected: boolean
  githubConnected: boolean
  miroUsername: string | null
  githubUsername: string | null
  githubAvatarUrl: string | null
  theme: 'dark' | 'light'
  accentColor: string
  onboardingComplete: boolean
  filesImported: number
  templatesUsed: string[]
  setMiroConnected: (connected: boolean, username?: string) => void
  setGithubConnected: (connected: boolean, username?: string, avatarUrl?: string) => void
  setTheme: (theme: 'dark' | 'light') => void
  setAccentColor: (color: string) => void
  completeOnboarding: () => void
  incrementFilesImported: () => void
  recordTemplateUsed: (templateId: string) => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
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
      setMiroConnected: (miroConnected, miroUsername) => set({ miroConnected, miroUsername: miroUsername || null }),
      setGithubConnected: (githubConnected, githubUsername, githubAvatarUrl) => set({ githubConnected, githubUsername: githubUsername || null, githubAvatarUrl: githubAvatarUrl || null }),
      setTheme: (theme) => set({ theme }),
      setAccentColor: (accentColor) => set({ accentColor }),
      completeOnboarding: () => set({ onboardingComplete: true }),
      incrementFilesImported: () => set(state => ({ filesImported: state.filesImported + 1 })),
      recordTemplateUsed: (templateId) => set(state => ({
        templatesUsed: [templateId, ...state.templatesUsed.filter(t => t !== templateId)].slice(0, 20),
      })),
    }),
    { name: 'mirox-settings' }
  )
)
