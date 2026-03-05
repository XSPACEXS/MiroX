# MiroX Final Hardening — Complete Issue List

Every remaining issue in the codebase. Fix ALL of them. No exceptions.

---

## CRITICAL — Security

### C1. Hardcoded Miro API token in source control
- `src/services/miroApi.ts` line 4 — token `eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_1lHPl4N2tFRPuZK2z6CoFkGTsxU` hardcoded as default
- `electron/ipc/miroHandlers.ts` line 6 — same token hardcoded as fallback in `getMiroToken()`
- **Fix**: Remove the hardcoded token entirely. If no token is configured, return a clear error "No Miro API token configured. Add one in Settings." Never ship credentials in source code. After fixing, the token will still be in git history — add a note to .claude/issues/ that the token should be revoked.

### C2. GitHub API path injection (owner/repo)
- `electron/ipc/githubHandlers.ts` lines 124-206
- `owner` and `repo` are interpolated into URL paths without sanitization
- **Fix**: Add regex validation: `/^[a-zA-Z0-9._-]+$/` — reject any owner/repo that doesn't match. Return `{ ok: false, error: 'Invalid repository name' }`.

### C3. Miro API path injection (boardId/itemId)
- `electron/ipc/miroHandlers.ts` — all handlers interpolate boardId/itemId into paths
- **Fix**: Add format validation. Miro board IDs are numeric strings. Validate with `/^\d+$/` or at minimum `/^[a-zA-Z0-9_=-]+$/`.

---

## HIGH — Security & Architecture

### H1. `file:read` handler has no path restriction
- `electron/ipc/handlers.ts` lines 62-78
- Renderer can read ANY file on disk
- **Fix**: Restrict to project directory. Validate that the resolved path starts with the app's working directory. Reject paths containing `..` traversal.

### H2. `selftest:dom-check` runs arbitrary JS in production builds
- `electron/ipc/selfTestHandlers.ts` line 53
- **Fix**: Gate behind `!app.isPackaged` check. Only register this handler in dev mode.

### H3. Dead API clients that duplicate real implementations
- `src/services/miroApi.ts` (225 lines) — unused in production, all calls go through IPC
- `src/services/githubApi.ts` (152 lines) — unused in production, all calls go through IPC
- **Fix**: Delete both files. They are dead code that also contains the hardcoded token. Update any tests that import from them to mock the IPC layer instead (which is what actually runs in production).

### H4. Tests test the wrong implementation
- Tests import from `src/services/miroApi.ts` and `src/services/githubApi.ts` (deleted in H3)
- These test code that never runs in production
- **Fix**: Rewrite service tests to mock `window.electronAPI` and test the hooks (`useMiro`, `useGitHub`) or test the IPC handler logic directly. Tests should validate what actually runs.

### H5. Wrong GitHub URLs in Help menu and About panel
- `electron/main.ts` lines 224, 230 — link to `https://github.com/mirox/docs` and `https://github.com/mirox/issues`
- `src/components/settings/AboutPanel.tsx` line 57 — links to `https://github.com/mirox`
- **Fix**: Change all to `https://github.com/XSPACEXS/MiroX`

---

## MEDIUM — Type Safety & Data Integrity

### M1. `any` type on createBoardSection
- `src/services/boardBuilder.ts` line 66 — `section: any` with eslint-disable
- **Fix**: Import or define a proper `BoardSection` type from `src/templates/types.ts`. Remove the eslint-disable.

### M2. Multiple `as unknown as` casts in useGitHub
- `src/hooks/useGitHub.ts` lines 41, 57, 73, 103
- **Fix**: Define proper return types in `src/types/electron.ts` for the GitHub IPC methods so casts aren't needed. The IPC handlers in githubHandlers.ts return specific shapes — type them properly.

### M3. IPC Miro methods return `Promise<unknown>`
- `src/types/electron.ts` lines 22-65 — createBoard, listBoards, createFrame, createShape, createStickyNote, createText, createConnector, deleteItem, repositionItem all return `Promise<unknown>`
- **Fix**: Define proper return types for each (e.g., `Promise<{ ok: true; board: MiroBoard } | { ok: false; error: string }>`). Match what miroHandlers.ts actually returns.

### M4. boardDescription collected but silently dropped
- `src/hooks/useBoardBuilder.ts` line 27 — collects boardDescription
- `src/hooks/useBoardBuilder.ts` line 76 — calls buildBoard() without passing it
- `src/services/boardBuilder.ts` line 23 — hardcodes description instead of using user input
- **Fix**: Pass boardDescription through to buildBoard() and use it in the createBoard call.

### M5. Zustand store migrations are no-ops
- `src/stores/settingsStore.ts` lines 50-55
- `src/stores/boardStore.ts` lines 54-59
- **Fix**: Either implement real migration logic that fills in missing fields with defaults, or simplify: remove the migrate function and just use `merge: true` in the persist config (which auto-merges persisted state with defaults). The second option is simpler and achieves the same goal.

### M6. Shallow config corruption recovery
- `electron/config.ts` lines 28-39
- Only checks `store.get('theme')` — doesn't validate full schema
- **Fix**: Validate all required keys exist after construction. If any are missing, reset to defaults for those keys specifically (not wipe everything). Back up the corrupted file before clearing.

---

## LOW — Code Quality & Polish

### L1. IPC_CHANNELS constants not used in miroHandlers and githubHandlers
- `electron/ipc/miroHandlers.ts` and `electron/ipc/githubHandlers.ts` use hardcoded strings
- `electron/ipc/agentHandlers.ts` and `selfTestHandlers.ts` already use constants
- **Fix**: Import and use IPC_CHANNELS constants everywhere. Consistency.

### L2. console.log/error statements in production code
- `src/hooks/useMiro.ts` — 3 console.error calls
- `src/hooks/useGitHub.ts` — 1 console.error call
- `src/services/boardBuilder.ts` — 1 console.error call
- **Fix**: These are acceptable for error logging in a desktop app, but wrap them in a simple logger utility that can be disabled. Create `src/utils/logger.ts` with `logger.error()` that uses console.error in dev and is silent (or writes to file) in production.

### L3. No 404 catch-all route
- `src/App.tsx` — no `<Route path="*">` for unknown routes
- **Fix**: Add a catch-all route that redirects to Home or shows a "Page not found" view.

### L4. generateTableContent is a stub
- `src/services/templateEngine.ts` line 168 — returns static string, ignores values
- **Fix**: Either implement it properly (generate a table layout from field values) or remove the function and simplify callers.

### L5. `package.json` missing `"type": "module"`
- Build warns about postcss.config.js not being recognized as ESM
- **Fix**: Either add `"type": "module"` to package.json (test that nothing breaks) or rename postcss.config.js to postcss.config.cjs.

### L6. Vite CJS Node API deprecation warning
- **Fix**: Update vite.config.ts to use ESM import if needed, or suppress with config. This is a Vite 5 known issue.

---

## ARCHITECTURAL — End-to-End Workflow Integrity

### A1. Board creation workflow is not truly end-to-end
- The wizard collects: template + board name + board description + field values
- But: boardDescription is dropped (M4), generateTableContent is a stub (L4), field values are partially used
- **Fix**: Audit the entire flow from BoardWizard.tsx → useBoardBuilder → boardBuilder.ts → templateEngine.ts → miroHandlers.ts. Make sure every piece of user input flows through to the final API call. Remove any stubs.

### A2. Import workflow completeness
- Check: Does file drop → parse → create board work end-to-end?
- Check: Does URL import → fetch → parse → create board work end-to-end?
- Check: Does GitHub import → analyze → create board work end-to-end?
- **Fix**: Trace each flow and fix any broken links in the chain.
