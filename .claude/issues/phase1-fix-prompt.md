# MiroX Phase 1+ — Fix Every Audit Finding

You are fixing every issue from the Phase 1 audit. This prompt is self-contained — all findings and exact fixes are below. Read CLAUDE.md for project methodology.

**Classification: LARGE** (55 fixes across 35+ files)

**Process:** `EnterPlanMode` → read files mentioned below → build plan around these groups → `ExitPlanMode` → create team → assign tasks → execute → verify → commit per group.

---

## GROUP A — Critical Resilience (5 fixes, 4 files)
**Priority: HIGHEST — do first, blocks nothing**

### A1. Main process crash handlers
**File:** `electron/main.ts`
**Insert at line 12 (after `const isDev = ...`):**
```typescript
// Global crash handlers — must be registered before anything else
process.on('uncaughtException', (error) => {
  console.error('[MiroX] Uncaught exception:', error)
  try {
    const { dialog } = require('electron')
    dialog.showErrorBox('MiroX — Unexpected Error', `${error.message}\n\nThe app will attempt to continue, but you may want to restart.`)
  } catch {
    // dialog may not be available during shutdown
  }
})

process.on('unhandledRejection', (reason) => {
  console.error('[MiroX] Unhandled rejection:', reason)
})
```

### A2. Fetch timeouts — shared utility
**Create new file:** `electron/utils/fetchWithTimeout.ts`
```typescript
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = 30_000
): Promise<Response> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetch(url, { ...options, signal: controller.signal })
    return response
  } catch (err) {
    if ((err as Error).name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs / 1000}s`)
    }
    throw err
  } finally {
    clearTimeout(timeout)
  }
}
```

**File:** `electron/ipc/miroHandlers.ts` — replace `fetch(` with `fetchWithTimeout(` in:
- `miroRequest()` at line 32: `const response = await fetchWithTimeout(\`${MIRO_BASE_URL}${path}\`, {...})`
- `testConnection` handler at line 59: `const response = await fetchWithTimeout(\`${MIRO_BASE_URL}/boards?limit=1\`, {...})`
- Add import: `import { fetchWithTimeout } from '../utils/fetchWithTimeout'`

**File:** `electron/ipc/githubHandlers.ts` — same replacement:
- `githubRequest()` at line 21: `const response = await fetchWithTimeout(\`${GITHUB_BASE_URL}${path}\`, {...})`
- Add import: `import { fetchWithTimeout } from '../utils/fetchWithTimeout'`

**File:** `electron/ipc/handlers.ts` — at line 189:
- Replace `const response = await fetch(url)` with `const response = await fetchWithTimeout(url)`
- Add import: `import { fetchWithTimeout } from '../utils/fetchWithTimeout'`

### A3. Fix production logger
**File:** `src/utils/logger.ts` — replace entire content:
```typescript
const isDev = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.DEV : true

/* eslint-disable no-console -- Logger is the designated console wrapper for the app */
export const logger = {
  error: (...args: unknown[]): void => { console.error('[MiroX]', ...args) },
  warn: (...args: unknown[]): void => { if (isDev) console.warn('[MiroX]', ...args) },
  info: (...args: unknown[]): void => { if (isDev) console.info('[MiroX]', ...args) },
}
/* eslint-enable no-console */
```
**Key change:** `logger.error` always logs. Only `warn` and `info` gated behind isDev.

### A4. Wrap Miro IPC handlers in try/catch
**File:** `electron/ipc/miroHandlers.ts`
These 9 handlers currently `return miroRequest(...)` without try/catch. Wrap each one:
- `MIRO_CREATE_BOARD` (line 88)
- `MIRO_LIST_BOARDS` (line 94)
- `MIRO_CREATE_FRAME` (line 137)
- `MIRO_CREATE_SHAPE` (line 158)
- `MIRO_CREATE_STICKY` (line 185)
- `MIRO_CREATE_TEXT` (line 203)
- `MIRO_CREATE_CONNECTOR` (line 225)
- `MIRO_DELETE_ITEM` (line 246)
- `MIRO_REPOSITION_ITEM` (line 256)

For each, change from:
```typescript
return miroRequest('POST', `/boards/${boardId}/...`, body)
```
To:
```typescript
try {
  return await miroRequest('POST', `/boards/${boardId}/...`, body)
} catch (err) {
  const message = err instanceof Error ? err.message : String(err)
  if (message.includes('401')) {
    return { ok: false, error: 'Miro token expired — please reconnect in Settings' }
  }
  return { ok: false, error: message }
}
```

### A5. Fix useGitHub useEffect — no try/catch
**File:** `src/hooks/useGitHub.ts` lines 62-84
Wrap the `load()` function body:
```typescript
useEffect(() => {
  if (!isElectronRef.current) return
  const load = async () => {
    try {
      const t = await window.electronAPI.github.getToken()
      if (t && t.hasToken) {
        setTokenState('stored')
        const status = await window.electronAPI.github.testConnection()
        if (status.ok) {
          setIsConnected(true)
          setUser(status.user ? {
            id: 0,
            login: status.user.login,
            name: status.user.name || '',
            avatar_url: status.user.avatarUrl,
            public_repos: 0,
            html_url: '',
          } : null)
          loadReposInternal()
        }
      }
    } catch (err) {
      logger.error('Failed to load GitHub state:', err)
    }
  }
  load()
}, [loadReposInternal])
```

Also fix `loadReposInternal` at line 57 — change from silent catch to:
```typescript
} catch (err) {
  logger.error('Failed to load repos:', err)
} finally { setIsLoadingRepos(false) }
```

---

## GROUP B — State & Persistence (6 fixes, 4 files)
**Priority: HIGH — do second**
**Depends on: nothing**

### B1. Resolve dual persistence
**File:** `src/stores/settingsStore.ts`
The zustand `persist` middleware writes to `localStorage` under key `mirox-settings`. Electron-store in `electron/config.ts` also writes to disk under the same name. They never sync.

**Fix:** Remove `persist` from settingsStore entirely. Load settings from electron-store via IPC on app start. Save to electron-store via IPC on changes. Replace the store with:

```typescript
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
    window.electronAPI.settings.save({ theme, accentColor, onboardingComplete })
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
```

**IMPORTANT:** After creating this store, find every component that uses `useSettingsStore` and verify selectors still work. The interface is unchanged except `_loaded` is new and `persist` is gone. Call `loadFromDisk()` once in `App.tsx` or the root layout on mount.

### B2. settingsStore partialize (SKIP if B1 is implemented — B1 removes persist entirely)

### B3. Remove duplicated connection state (INCLUDED in B1 — connection fields stay but are transient, not persisted)

### B4. Remove dead boardStore state
**File:** `src/stores/boardStore.ts`
Remove `isCreating`, `creationProgress`, `creationStep` from state and their actions `setCreating`, `setProgress`:
```typescript
interface BoardStore {
  recentBoards: RecentBoard[]
  totalBoardsCreated: number
  lastCreatedBoard: RecentBoard | null
  addRecentBoard: (board: RecentBoard) => void
  removeRecentBoard: (id: string) => void
  clearRecentBoards: () => void
  setLastCreated: (board: RecentBoard) => void
  incrementTotal: () => void
}
```
Remove the corresponding implementations from the `create` call. Keep `partialize` as-is (it already only persists `recentBoards` and `totalBoardsCreated`).

### B5. Fix useMiro.ts setToken
**File:** `src/hooks/useMiro.ts` lines 105-110 — wrap in try/catch:
```typescript
const setToken = useCallback(async (newToken: string) => {
  if (!isElectronRef.current) return
  try {
    await window.electronAPI.miro.setToken(newToken)
    setTokenState(newToken)
    await testConnectionInternal()
  } catch (err) {
    logger.error('Failed to set Miro token:', err)
  }
}, [testConnectionInternal])
```

### B6. Electron-store schema versioning
**File:** `electron/config.ts` — add version:
```typescript
const defaults: AppSettings = {
  _version: 1,
  theme: 'dark',
  accentColor: '#FFD600',
  onboardingComplete: false,
  recentBoards: [],
  totalBoardsCreated: 0,
}
```
Add `_version?: number` to `AppSettings` interface. Add after store creation:
```typescript
// Schema migration — bump _version when schema changes
const currentVersion = 1
if ((store.get('_version') ?? 0) < currentVersion) {
  store.set('_version', currentVersion)
}
```

---

## GROUP C — Error Surfacing & Data Flows (7 fixes, 5 files)
**Priority: HIGH**
**Depends on: A (logger fix, Miro handler try/catch)**

### C1. Toast notifications for workflow errors
Find every catch block in `useMiro.ts`, `useGitHub.ts`, and `useFileImport.ts` that calls `logger.error()`. After the logger call, also show a toast. Import the toast store or use whatever toast mechanism exists in `src/components/ui/Toast.tsx`.

If there's a `useUIStore` or similar with a `addToast` action, use it. If not, the simplest fix is to add error state to each hook's return value so components can show it.

### C2. Fix boardBuilder partial failures
**File:** `src/services/boardBuilder.ts`
Change the section creation loop (lines 37-49):
```typescript
let failedSections = 0
const sectionErrors: string[] = []

for (let i = 0; i < manifest.sections.length; i++) {
  const section = manifest.sections[i]!
  const progress = 15 + ((i / totalSections) * 70)
  onProgress?.(`Building ${template.sections[Math.min(i, template.sections.length - 1)]?.name || 'section'}...`, progress)

  try {
    await createBoardSection(boardId, section, api)
    await delay(200)
  } catch (err) {
    failedSections++
    sectionErrors.push(`Section ${i}: ${err instanceof Error ? err.message : String(err)}`)
    logger.error(`Error creating section ${i}:`, err)
  }
}
```
Update `BuildResult` type:
```typescript
export interface BuildResult {
  boardId: string
  boardUrl: string
  boardName: string
  failedSections: number
  sectionErrors: string[]
}
```
Return: `return { boardId, boardUrl, boardName, failedSections, sectionErrors }`

### C3. Fix fileParser suggestTemplate unreachable
**File:** `src/services/fileParser.ts` line 25
Change: `suggestedTemplate: 'brainstorm-session',`
To: `suggestedTemplate: '',`

This makes the empty string falsy, so `useFileImport.ts` line 38 will actually call `suggestTemplate(content)`:
```typescript
const suggested = content.suggestedTemplate || suggestTemplate(content)
```

### C4. Fix multi-file selection
**File:** `src/hooks/useFileImport.ts` lines 85-111
The `openDialog` handler currently returns a single string from the IPC bridge. The issue is in two places:

First, `electron/ipc/handlers.ts` line 72 returns only `result.filePaths[0]` — change to:
```typescript
return result.filePaths
```

Second, `src/types/electron.ts` line 124 — update the return type:
```typescript
openDialog: (options?: unknown) => Promise<string[] | null>
```

Third, `src/hooks/useFileImport.ts` lines 97-99 — fix to:
```typescript
if (result && Array.isArray(result)) {
  result.forEach((filePath: string) => {
```
(Remove the `const filePaths: string[] = [result]` line)

Also update `electron/preload.ts` line 53 — the type already returns what invoke returns, so no change needed there.

### C5. Call incrementFilesImported
**File:** `src/hooks/useFileImport.ts`
Add import: `import { useSettingsStore } from '../stores/settingsStore'`
Inside `processFile`, after the successful parse (line 44, after `setFiles` update in the try block):
```typescript
useSettingsStore.getState().incrementFilesImported()
```

### C6. Fix useGitHub repo mapping
**File:** `src/hooks/useGitHub.ts` lines 42-55
The IPC response from `githubHandlers.ts` `list-repos` doesn't return `default_branch`, `topics`, or `private`. These fields need to be added to the IPC bridge.

**File:** `electron/ipc/githubHandlers.ts` lines 99-109 — add missing fields to the `as` cast:
```typescript
const repos = (await githubRequest(token, '/user/repos?sort=updated&per_page=50')) as Array<{
  id: number
  name: string
  full_name: string
  description: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  html_url: string
  owner: { login: string; avatar_url: string }
  default_branch: string
  topics: string[]
  private: boolean
}>
```

Then in the map (lines 113-126), add:
```typescript
defaultBranch: r.default_branch,
topics: r.topics || [],
isPrivate: r.private,
```

**File:** `src/types/electron.ts` — update the `listRepos` response type to include these fields.

**File:** `src/hooks/useGitHub.ts` — update the mapping:
```typescript
default_branch: r.defaultBranch || '',
topics: r.topics || [],
private: r.isPrivate ?? false,
```

### C7. Fix fileParser empty fields
**File:** `src/services/fileParser.ts` line 22
The `keyPhrases`, `dataRows`, `structure` fields are always empty arrays/undefined. For now, implement basic keyPhrases extraction:
```typescript
// Extract key phrases from headings
keyPhrases: headings.slice(0, 10),
```

---

## GROUP D — Security Hardening (7 fixes, 5 files)
**Priority: HIGH**
**Depends on: nothing**

### D1. Import IPC_CHANNELS in preload.ts
**File:** `electron/preload.ts`
Replace all ~40 hardcoded string literals with constants from channels.ts.

**IMPORTANT:** The preload script runs in a special context. It CAN import from other electron files because it's compiled together. Add at top:
```typescript
import { IPC_CHANNELS } from './ipc/channels'
```
Then replace every string:
```typescript
// Before:
ipcRenderer.invoke('system:info')
// After:
ipcRenderer.invoke(IPC_CHANNELS.SYSTEM_INFO)
```

Do this for ALL 40 strings. Also add `'navigate'` to `IPC_CHANNELS` in `channels.ts`:
```typescript
NAVIGATE: 'navigate',
```
And in `electron/main.ts` line 123, replace `'navigate'` with `IPC_CHANNELS.NAVIGATE` (import needed).

### D2. Single-instance locking
**File:** `electron/main.ts`
Add before `app.whenReady()` (around line 270):
```typescript
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}
```
Then wrap the existing `app.whenReady()` inside the `else` block.

### D3. File:parse size limit
**File:** `electron/ipc/handlers.ts` — inside `FILE_PARSE` handler (line 101), after `validateFilePath` check:
```typescript
// Check file size before parsing (max 50 MB — same as file:read)
const stat = await fs.stat(filePath)
if (stat.size > 50 * 1024 * 1024) {
  return { ok: false, error: 'File too large (max 50 MB)' }
}
```

### D4. Fix SSRF range check
**File:** `electron/ipc/handlers.ts` line 179
Replace:
```typescript
hostname.startsWith('172.')
```
With:
```typescript
/^172\.(1[6-9]|2\d|3[01])\./.test(hostname)
```

### D5. Gate selftest:run-all behind dev check
**File:** `electron/ipc/selfTestHandlers.ts`
Wrap the `SELFTEST_RUN_ALL` handler (lines 77-164) inside `if (!app.isPackaged)`:
```typescript
if (!app.isPackaged) {
  ipcMain.removeHandler(IPC_CHANNELS.SELFTEST_RUN_ALL)
  ipcMain.handle(IPC_CHANNELS.SELFTEST_RUN_ALL, async () => {
    // ... existing code
  })
}
```

### D6. Fix agent git tag validation
**File:** `electron/ipc/agentHandlers.ts` line 216
Replace:
```typescript
if (!/^[a-zA-Z0-9._\-/~^]+$/.test(tag)) {
```
With:
```typescript
if (!/^[a-zA-Z0-9._\-/]+$/.test(tag)) {
```
(Removed `~` and `^` — these allow `HEAD~10` which enables unintended data loss via `git reset --hard HEAD~10`)

### D7. Whitelist file:open-dialog options
**File:** `electron/ipc/handlers.ts` line 60-68
Replace the spread with explicit whitelist:
```typescript
ipcMain.handle(IPC_CHANNELS.FILE_OPEN_DIALOG, async (_event, options?: Record<string, unknown>) => {
  const safeOptions: Electron.OpenDialogOptions = {
    properties: ['openFile'],
    filters: [
      { name: 'Documents', extensions: ['pdf', 'docx', 'doc', 'txt', 'md', 'csv', 'xlsx', 'xls', 'json'] },
      { name: 'All Files', extensions: ['*'] },
    ],
  }
  // Only allow safe overrides
  if (options) {
    if (Array.isArray(options.properties)) {
      safeOptions.properties = options.properties.filter(
        (p: unknown) => typeof p === 'string' && ['openFile', 'multiSelections'].includes(p)
      ) as Electron.OpenDialogOptions['properties']
    }
    if (Array.isArray(options.filters)) {
      safeOptions.filters = options.filters as Electron.FileFilter[]
    }
  }
  const result = await dialog.showOpenDialog(mainWindow, safeOptions)
  if (result.canceled || result.filePaths.length === 0) {
    return null
  }
  return result.filePaths  // ← Also fixes C4 (return all paths, not just first)
})
```

---

## GROUP E — Agent Center Hardening (5 fixes, 2 files)
**Priority: MEDIUM**
**Depends on: nothing**

### E1. Agent execution timeout + SIGKILL escalation
**File:** `electron/ipc/agentHandlers.ts`
After the `child` is spawned (line 86), add timeout:
```typescript
const MAX_AGENT_DURATION = 30 * 60 * 1000 // 30 minutes

const executionTimeout = setTimeout(() => {
  const agentRef = agents.get(id)
  if (agentRef && agentRef.status === 'running') {
    agentRef.status = 'killed'
    agentRef.process.kill('SIGTERM')
    sendLog(mainWindow, id, 'system', 'Agent killed: exceeded 30 minute timeout')

    // Escalate to SIGKILL after 10s if still running
    setTimeout(() => {
      try { agentRef.process.kill('SIGKILL') } catch { /* already dead */ }
    }, 10_000)
  }
}, MAX_AGENT_DURATION)
```
In the `child.on('close')` handler, add: `clearTimeout(executionTimeout)`
In the `child.on('error')` handler, add: `clearTimeout(executionTimeout)`

### E2. SIGKILL escalation on manual kill
**File:** `electron/ipc/agentHandlers.ts` line 194
After `agent.process.kill('SIGTERM')`, add:
```typescript
setTimeout(() => {
  try { agent.process.kill('SIGKILL') } catch { /* already dead */ }
}, 10_000)
```
Same for `kill-all` handler.

### E3. Concurrent agent limit
**File:** `electron/ipc/agentHandlers.ts`
At the top of the AGENT_LAUNCH handler, before spawning:
```typescript
const MAX_CONCURRENT_AGENTS = 5
const runningCount = [...agents.values()].filter(a => a.status === 'running').length
if (runningCount >= MAX_CONCURRENT_AGENTS) {
  return { ok: false, error: `Maximum ${MAX_CONCURRENT_AGENTS} concurrent agents reached` }
}
```

### E4. Remove updateAgentCost
**File:** `src/stores/agentStore.ts`
Remove `updateAgentCost` from the interface (line 25) and implementation (lines 118-130). It's dead code — never called from any component.

### E5. Guard selfTestHandlers double registration
**File:** `electron/ipc/selfTestHandlers.ts` line 6
Change module-level mutable:
```typescript
let consoleErrors: string[] = []
let consoleListenerRegistered = false
```
Inside `registerSelfTestHandlers`, guard:
```typescript
if (!consoleListenerRegistered) {
  mainWindow.webContents.on('console-message', (_event, level, message) => {
    // ... existing code
  })
  consoleListenerRegistered = true
}
```

---

## GROUP F — Dead Code Cleanup (10 fixes, 10+ files)
**Priority: MEDIUM**
**Depends on: nothing — can run in parallel with everything**

### F1. Remove jszip
```bash
npm uninstall jszip
```

### F2. Remove vite-plugin-electron
```bash
npm uninstall vite-plugin-electron
```

### F3. Delete dead Tabs.tsx
```bash
rm src/components/ui/Tabs.tsx
```

### F4. Remove unused type exports
**File:** `src/types/miro.ts` — remove these 6 interfaces (lines 17-125): `MiroItem`, `CreateShapeOptions`, `CreateStickyNoteOptions`, `CreateTextOptions`, `CreateConnectorOptions`, `CreateFrameOptions`. Keep `MiroBoard` and `MiroConnectionStatus`.

**File:** `src/types/github.ts` — remove `GitHubFile` (lines 29-36) and `GitHubConnectionStatus` (lines 38-42). Keep `GitHubUser` and `GitHubRepo`.

### F5. Remove FEATURED_TEMPLATES
**File:** `src/templates/index.ts` — delete lines 85-87:
```typescript
export const FEATURED_TEMPLATES: TemplateDefinition[] = [
  kanban, businessPlan, systemArchitecture, userJourney, brainstormSession, sprintRetro,
]
```

### F6. Remove dead boardStore actions
**File:** `src/stores/boardStore.ts` — already covered by B4.

### F7. Remove .text-balance CSS
**File:** `src/index.css` — delete lines 61-63:
```css
.text-balance {
  text-wrap: balance;
}
```

### F8. Remove spin-slow animation (unused)
**File:** `tailwind.config.js` — delete line 42:
```javascript
'spin-slow': 'spin 3s linear infinite',
```

### F9. Handle empty Startup category
**File:** `src/templates/index.ts` line 82 — remove the empty entry:
```typescript
// Delete this line:
[TemplateCategory.Startup]: [],
```
Also remove `Startup` from the `TemplateCategory` enum in `src/templates/types.ts` if it exists there.

### F10. Remove templateEngine.ts interpolate (if unused in app)
Verify `interpolate` in `src/services/templateEngine.ts` is only used in tests. If so, leave it (test utilities are fine) but add a comment: `// Used by tests only`

---

## GROUP G — UI & Accessibility (8 fixes, 7 files)
**Priority: MEDIUM**
**Depends on: nothing**

### G1. Focus trap in Modal
```bash
npm install focus-trap-react
```
**File:** `src/components/ui/Modal.tsx` — wrap modal content:
```typescript
import { FocusTrap } from 'focus-trap-react'

// Inside the AnimatePresence, wrap the outer motion.div:
<FocusTrap focusTrapOptions={{ allowOutsideClick: true, escapeDeactivates: false }}>
  <motion.div
    variants={modalVariants} initial="initial" animate="animate" exit="exit"
    // ... rest of existing props
  >
    {/* ... existing content */}
  </motion.div>
</FocusTrap>
```
Set `escapeDeactivates: false` because the existing Escape handler already calls `onClose`.

**File:** `src/components/home/WelcomeModal.tsx` — apply the same pattern (wrap the modal overlay div in FocusTrap), OR refactor to use the `<Modal>` primitive.

### G2. Keyboard navigation for Dropdown
**File:** `src/components/ui/Dropdown.tsx`
Add to the trigger button `onKeyDown` handler:
```typescript
const [highlightedIndex, setHighlightedIndex] = useState(-1)

const handleKeyDown = (e: React.KeyboardEvent) => {
  if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault()
    setIsOpen(true)
    setHighlightedIndex(options.findIndex(o => o.value === value) ?? 0)
    return
  }
  if (!isOpen) return

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      setHighlightedIndex(prev => Math.min(prev + 1, options.length - 1))
      break
    case 'ArrowUp':
      e.preventDefault()
      setHighlightedIndex(prev => Math.max(prev - 1, 0))
      break
    case 'Enter':
    case ' ':
      e.preventDefault()
      if (highlightedIndex >= 0 && options[highlightedIndex]) {
        onChange(options[highlightedIndex].value)
        setIsOpen(false)
      }
      break
    case 'Escape':
      e.preventDefault()
      setIsOpen(false)
      break
  }
}
```
Add `onKeyDown={handleKeyDown}` to the trigger button. Add visual highlight to the highlighted option.

### G3. Keyboard activation for Card
**File:** `src/components/ui/Card.tsx` line 24-33
Add `onKeyDown` to the hoverable motion.div:
```typescript
onKeyDown={(e: React.KeyboardEvent) => {
  if ((e.key === 'Enter' || e.key === ' ') && onClick) {
    e.preventDefault()
    onClick(e as unknown as React.MouseEvent<HTMLDivElement>)
  }
}}
```

### G4. Replace inline buttons in import components
**Files:** Components in `src/components/import/` that have one-off `<button>` or `<div onClick>` elements.
Replace with `<Button>` from `src/components/ui/Button.tsx`. Identify ~10 instances across:
- `URLImporter.tsx`
- `GitHubPicker.tsx`
- `FileDropZone.tsx`
- `ImportAnalysis.tsx`

### G5. Fix StepIndicator hardcoded colors
**File:** `src/components/builder/StepIndicator.tsx` lines 29-30
Replace hardcoded hex in Framer Motion animate props with CSS variable references or Tailwind token values.

### G6. Replace WelcomeModal inline input with Input primitive
**File:** `src/components/home/WelcomeModal.tsx` — find the one-off `<input>` and replace with `<Input>` from `src/components/ui/Input.tsx`.

### G7. Replace RecentBoards inline badge with Badge primitive
**File:** `src/components/home/RecentBoards.tsx` — find inline badge styling and replace with `<Badge>` from `src/components/ui/Badge.tsx`.

### G8. Add text-2xs to Tailwind config
**File:** `tailwind.config.js` — inside `theme.extend`, add:
```javascript
fontSize: {
  '2xs': ['10px', { lineHeight: '14px' }],
},
```
Then across 5 files (`URLImporter.tsx`, `GitHubPicker.tsx`, `FileDropZone.tsx`, `StatusBar.tsx`, `SearchBar.tsx`, `ImportAnalysis.tsx`), replace all `text-[10px]` with `text-2xs`.

---

## GROUP H — Config & Lint (4 fixes, 2 files)
**Priority: LOW**
**Depends on: nothing**

### H1. ESLint type-aware rules
**File:** `.eslintrc.json`
Add to `parserOptions`:
```json
"project": ["./tsconfig.json", "./electron/tsconfig.json"]
```
Add rules:
```json
"@typescript-eslint/no-floating-promises": "error"
```
**WARNING:** This will likely surface new lint errors (unhandled promises). Fix each one by adding `await` or `void` prefix as appropriate.

### H2. Change no-explicit-any to error
**File:** `.eslintrc.json` line 25
Change: `"@typescript-eslint/no-explicit-any": "warn"`
To: `"@typescript-eslint/no-explicit-any": "error"`

### H3. Extract FileDropZone variants
**File:** `src/components/import/FileDropZone.tsx` — move the `variants` object from inside the component to module level:
```typescript
// Move OUTSIDE the component function:
const dropzoneVariants = {
  idle: { /* ... */ },
  dragging: { /* ... */ },
}

// Inside component, reference: variants={dropzoneVariants}
```

### H4. Inline animations → design system presets
**Files:** `src/components/settings/Settings.tsx`, `src/components/builder/BoardWizard.tsx`
Move inline Framer Motion animation objects to `src/design-system/animations.ts` and import them.

---

## GROUP I — Hook Cleanup (4 fixes, 5 files)
**Priority: LOW**
**Depends on: nothing**

### I1. AbortController in useMiro useEffect
**File:** `src/hooks/useMiro.ts` lines 45-59
```typescript
useEffect(() => {
  if (!isElectronRef.current) return
  let cancelled = false
  const loadToken = async () => {
    try {
      const savedToken = await window.electronAPI.miro.getToken()
      if (cancelled) return
      if (savedToken && savedToken.hasToken) {
        setTokenState(savedToken.masked)
        await testConnectionInternal()
      }
    } catch (err) {
      if (!cancelled) logger.error('Failed to load Miro token:', err)
    }
  }
  loadToken()
  return () => { cancelled = true }
}, [testConnectionInternal])
```

### I2. AbortController in useGitHub useEffect
**File:** `src/hooks/useGitHub.ts` — same pattern with `let cancelled = false` and cleanup.

### I3. Mounted guards for config components
**Files:** `src/components/settings/MiroConfig.tsx`, `GitHubConfig.tsx`, `AboutPanel.tsx`
Add `useRef(true)` mounted guard:
```typescript
const mountedRef = useRef(true)
useEffect(() => () => { mountedRef.current = false }, [])

// In async then callbacks:
if (!mountedRef.current) return
```

### I4. Extract URLImporter parsing logic
**File:** `src/components/import/URLImporter.tsx` lines 26-93
Move the URL fetching + HTML parsing logic into a service function in `src/services/urlParser.ts`:
```typescript
export async function fetchAndParseUrl(url: string): Promise<{ title: string; text: string; ... }> {
  // moved from URLImporter
}
```
Component just calls the service and handles the result.

---

## GROUP J — Type Improvements (4 fixes, 3 files)
**Priority: LOWEST — do last if time permits**

### J1. Type miroRequest return
**File:** `electron/ipc/miroHandlers.ts` line 27
Change `Promise<unknown>` to generic or typed wrappers. Simplest:
```typescript
async function miroRequest(method: string, path: string, body?: object): Promise<Record<string, unknown>> {
```

### J2. Type githubRequest return
**File:** `electron/ipc/githubHandlers.ts` line 20 — same approach.

### J3. Runtime validation on GitHub API casts
**File:** `electron/ipc/githubHandlers.ts` lines 70-170
Before each `as Type` cast, verify the response has expected shape:
```typescript
if (!data || typeof data !== 'object' || !('login' in data)) {
  return { ok: false, error: 'Unexpected API response' }
}
```
(Already done for testConnection, but not for listRepos or analyzeRepo)

### J4. Remove index signatures from electron.ts
**File:** `src/types/electron.ts` lines 8, 16
Remove `[key: string]: unknown` from `MiroItemResponse` and `MiroBoardResponse`. Define explicit known fields instead.

---

## VERIFICATION CHECKLIST (co-lead runs after ALL groups complete)

```bash
npm run typecheck    # 0 errors
npm run build        # success
npm run lint         # 0 errors (may have new ones from H1/H2 — fix them)
npm run test         # 343+ tests passing
```

Manual verification:
- [ ] `process.on('uncaughtException')` exists at top of main.ts
- [ ] Every `fetch()` in electron/ uses `fetchWithTimeout()`
- [ ] `logger.error()` logs unconditionally (not gated on isDev)
- [ ] All 9 Miro handlers have try/catch with 401 detection
- [ ] settingsStore no longer uses zustand `persist`
- [ ] `loadFromDisk()` is called on app mount
- [ ] Modal.tsx has FocusTrap wrapper
- [ ] `jszip` and `vite-plugin-electron` gone from package.json
- [ ] `Tabs.tsx` deleted
- [ ] Single-instance lock before `app.whenReady()`
- [ ] Agent timeout (30min) and SIGKILL escalation in agentHandlers
- [ ] Max 5 concurrent agents enforced
- [ ] `selftest:run-all` gated behind `!app.isPackaged`
- [ ] Git tag validation rejects `~` and `^`
- [ ] `file:parse` has 50MB size check
- [ ] SSRF check uses proper 172.16-31 range
- [ ] `file:open-dialog` returns full array, not just first path
- [ ] preload.ts uses IPC_CHANNELS constants (no hardcoded strings)
- [ ] `text-[10px]` replaced with `text-2xs` everywhere
- [ ] No `spin-slow` or `.text-balance` in config/CSS
- [ ] `FEATURED_TEMPLATES` export removed
- [ ] Dead types removed from miro.ts and github.ts

---

## COMMIT STRATEGY (one per group, conventional messages)

```
fix: add crash handlers and fetch timeouts across all IPC (Group A)
refactor: unify settings persistence, remove dead store state (Group B)
fix: surface errors to users, fix partial board failures and multi-file import (Group C)
security: harden IPC — channel constants, instance lock, SSRF fix, input validation (Group D)
fix: add agent timeouts, concurrent limits, SIGKILL escalation (Group E)
chore: remove jszip, dead Tabs component, unused types and exports (Group F)
a11y: add focus traps, keyboard navigation, use UI primitives consistently (Group G)
chore: eslint type-aware rules, extract variants, add text-2xs token (Group H)
fix: add cancellation guards to async hooks, extract URL parsing (Group I)
refactor: type IPC request functions, add runtime validation (Group J)
```

---

## AGENT ASSIGNMENT (no file overlaps)

| Agent | Model | Groups | Owned Files |
|-------|-------|--------|-------------|
| **electron-agent** | sonnet | A, D, E | `electron/**` (main.ts, all ipc/, config.ts, new utils/) |
| **state-agent** | sonnet | B | `src/stores/**`, `src/hooks/useMiro.ts` (setToken only) |
| **flow-agent** | sonnet | C | `src/services/**`, `src/hooks/useGitHub.ts`, `src/hooks/useFileImport.ts`, `src/types/electron.ts` |
| **ui-agent** | sonnet | G | `src/components/**` |
| **cleanup-agent** | haiku | F, H | `package.json`, `.eslintrc.json`, `tailwind.config.js`, `src/index.css`, `src/types/miro.ts`, `src/types/github.ts`, `src/templates/index.ts` |
| **hooks-agent** | sonnet | I | `src/hooks/useMiro.ts` (useEffect only), `src/components/settings/*Config.tsx`, `src/components/import/URLImporter.tsx` |
| **co-lead** | opus | J + review all | Reviews everything, commits, runs verification |

**CONFLICT NOTES:**
- `src/hooks/useMiro.ts` is touched by state-agent (B5: setToken) and hooks-agent (I1: useEffect). **Serialize:** B5 first, then I1.
- `src/hooks/useGitHub.ts` is touched by flow-agent (A5, C6) and hooks-agent (I2). **Serialize:** A5+C6 first, then I2.
- `electron/ipc/handlers.ts` is touched by electron-agent (A2, D3, D4, D7) — all one agent, no conflict.
- `src/types/electron.ts` is touched by flow-agent (C4) and cleanup-agent potentially — assign to flow-agent only.

**Start now. Enter plan mode.**
