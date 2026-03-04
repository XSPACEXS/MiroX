import Store from 'electron-store'

interface AppSettings {
  windowBounds?: { x: number; y: number; width: number; height: number }
  windowMaximized?: boolean
  onboardingComplete?: boolean
  theme?: 'dark' | 'light'
  accentColor?: string
  recentBoards?: Array<{
    id: string
    name: string
    url: string
    createdAt: string
    templateId: string
  }>
  totalBoardsCreated?: number
}

const store = new Store<AppSettings>({
  name: 'mirox-settings',
  defaults: {
    theme: 'dark',
    accentColor: '#FFD600',
    onboardingComplete: false,
    recentBoards: [],
    totalBoardsCreated: 0,
  },
})

export { store }
export type { AppSettings }
