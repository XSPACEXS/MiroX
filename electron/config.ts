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

const defaults: AppSettings = {
  theme: 'dark',
  accentColor: '#FFD600',
  onboardingComplete: false,
  recentBoards: [],
  totalBoardsCreated: 0,
}

let store: Store<AppSettings>
try {
  store = new Store<AppSettings>({ name: 'mirox-settings', defaults })
  // Validate the store is readable
  store.get('theme')
} catch (err) {
  console.error('[MiroX] Config store corrupted, resetting:', err)
  store = new Store<AppSettings>({
    name: 'mirox-settings',
    clearInvalidConfig: true,
    defaults,
  })
}

export { store }
export type { AppSettings }
