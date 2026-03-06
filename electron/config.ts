import Store from 'electron-store'

interface AppSettings {
  _version?: number
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
  projectPath?: string
}

const defaults: AppSettings = {
  _version: 1,
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

// Validate all required keys exist
for (const [key, value] of Object.entries(defaults)) {
  if (store.get(key as keyof AppSettings) === undefined) {
    store.set(key as keyof AppSettings, value as AppSettings[keyof AppSettings])
  }
}

// Config versioning — migrate if needed
const currentVersion = 1
if ((store.get('_version') ?? 0) < currentVersion) {
  store.set('_version', currentVersion)
}

export { store }
export type { AppSettings }
