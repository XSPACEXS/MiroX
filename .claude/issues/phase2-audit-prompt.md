# MiroX Audit Phase 2 — Product, UX, Architecture & Ship-Readiness

Run this AFTER Phase 1 (code quality) audit and Phase 1+ (fixes) are complete.
This audit covers everything OUTSIDE raw code quality: user experience, feature completeness,
architectural decisions, developer experience, visual polish, and ship-readiness.

Read `CLAUDE.md` first for full project context.

**Important:** Phase 1 already covered: IPC security, crash handlers, fetch timeouts, dead code,
keyboard navigation on Dropdown/Modal/Card, focus trapping, logger fixes, type safety,
dual persistence fix, and lint hardening. Do NOT re-report those. Focus on net-new findings only.

---

## Phase 0 — Full Codebase Orientation

Before starting any run, read these files to understand the full app:

```
src/App.tsx                          # Routes: /, /templates, /import, /builder, /settings, /agent-center
src/components/layout/AppShell.tsx   # Shell: Sidebar + TopBar + main + StatusBar + ToastContainer
src/components/layout/Sidebar.tsx    # 6 nav items + Miro connection dot + collapse toggle
src/components/layout/TopBar.tsx     # 64px traffic light spacer + page title + search + settings shortcut
src/components/layout/StatusBar.tsx  # Miro connection status + static "v1.0.0"
electron/main.ts                     # Window config, menu, CSP, lifecycle, navigation guards
src/design-system/tokens.ts          # Color scales, spacing, radius, shadows, typography
src/design-system/animations.ts      # 14 Framer Motion variant presets
tailwind.config.js                   # Custom yellow/black theme, pulse-yellow animation
```

The app has 6 pages, 49 components, 6 stores, 4 services, 5 hooks, 38 templates, and 5 type files.

---

## Run 1 — Feature Completeness Audit

**Read every page file and its child components. Build the feature matrix.**

### Page-by-page checklist:

**Home (`src/pages/Home.tsx`):**
- `HeroBanner.tsx` — two CTA buttons ("Browse Templates", "Import Project"). Do they both navigate correctly?
- `StatCards.tsx` — shows "Boards Created", "Templates Available" (hardcoded "30+"), "Imports Processed". But `filesImported` and `templatesUsed` in `settingsStore.ts` are **transient** — they reset to 0 on every app restart. Are these stats meaningful or always zero?
- `QuickActions.tsx` (home) — 4 cards navigate to `/templates`, `/import?tab=file`, `/import?tab=github`, and scroll to `#recent-boards`. Does the `#recent-boards` scroll actually work? Is there an element with that ID?
- `RecentBoards.tsx` — reads `useBoardStore.recentBoards`. Each board is an `<a>` to `board.url`. But does the board URL actually get set during creation? Check `useBoardBuilder.ts` → `startCreation()` to see if `boardUrl` is populated from the Miro API response.
- `WelcomeModal.tsx` — 3-step onboarding. Step 2 lets you enter a Miro token or skip. After skip, where does the user land? Can they ever get back to this modal? Is there a way to re-trigger onboarding from Settings?

**Templates (`src/pages/Templates.tsx`):**
- `TemplateGallery.tsx` — filters 38 templates by category (8 filters) and search (debounced 200ms). Does search cover tags, description, and name? Test with edge cases: empty string, single character, special characters.
- `CategoryFilter.tsx` — shows counts per category. Are the counts accurate? Do they update when search is active?
- `TemplateCard.tsx` — hover reveals a "Use Template" button that navigates to `/builder?template={id}`. But the card itself also opens `TemplatePreview` modal via `useTemplateStore.setPreviewTemplate`. Is the click target conflict confusing? Can a user accidentally open the preview when trying to click "Use Template"?
- `TemplatePreview.tsx` — modal shows template details. "Use This Template" sets `selectedTemplate` then navigates to `/builder?template={id}`. Does the builder correctly read from BOTH the URL param AND the store? What if they conflict?

**Import (`src/pages/Import.tsx`):**
- `ImportHub.tsx` — 3 tabs (File/GitHub/URL). Tab is set from `?tab=` URL param. What happens if the URL param is invalid (e.g., `?tab=invalid`)?
- `FileDropZone.tsx` — drag-and-drop + click-to-browse. Check: does `useFileImport` hook manage files in local `useState` while `importStore` ALSO has `uploadedFiles[]`? Are these two separate file lists? Which one drives the UI? Is there a data consistency bug?
- `GitHubPicker.tsx` — PAT input → connect → repo list → analyze. The "Create a token on GitHub" button opens `https://github.com/settings/tokens/new?scopes=repo&description=MiroX`. Is this URL correct? Does it work?
- `URLImporter.tsx` — Enter key triggers fetch. What URLs actually work? Test: regular website, GitHub repo URL, invalid URL, localhost URL. Does the SSRF protection in `handlers.ts` block anything it shouldn't?
- `ImportAnalysis.tsx` — shows confidence meter and suggested template. The `templateInfo` map has hardcoded descriptions for ~8 templates. What happens when the suggested template is NOT in that map? Does it show a blank description?

**Builder (`src/pages/Builder.tsx`):**
- `BoardWizard.tsx` — 4-step wizard. Auto-reads `?template=` from URL. But what if the template ID doesn't exist? Does `getTemplate(id)` return undefined? Does the wizard crash?
- Step 2: Board name defaults to `"My ${selectedTemplate.name}"`. Description is optional. Is there any validation (min length, max length, special characters)?
- Step 3: `ContentEditor.tsx` renders fields dynamically from `template.fields`. Check field types: `text`, `textarea`, `select`, `multiselect`, `number`, `date`. Do ALL field types render correctly? Are `number` and `date` inputs actually type-constrained (`<input type="number">`, `<input type="date">`) or just text inputs?
- Step 3: `BoardPreview.tsx` shows ASCII art. This is static — it does NOT change based on field values. Is the user misled into thinking the preview reflects their input?
- Step 4: `CreationProgress.tsx` — 7 hardcoded steps. The progress percentages are hardcoded in `useBoardBuilder.ts` (5%, 15%, 30%, 50%, 65%, 80%, 88%, 100%). What happens if `buildBoard()` fails midway? Does the progress bar get stuck? Can the user cancel? Is there a timeout?
- `SuccessScreen.tsx` — "Open in Miro" button only renders if `boardUrl` is non-null. What happens if the board was created but `boardUrl` is somehow null? Does the user see no way to access their board?

**Settings (`src/pages/Settings.tsx`):**
- `MiroConfig.tsx` — "Save Token" and "Test" buttons. What happens if you save an empty token? An invalid token? A token with spaces?
- `GitHubConfig.tsx` — "Disconnect" clears the token. Is there a confirmation dialog? Can the user accidentally disconnect?
- `AppearanceConfig.tsx` — "Light" theme button says "Coming soon". But the settings store accepts `'light'` as a valid theme. What happens if you somehow set `theme: 'light'`? Does the app break or just look the same?
- `AboutPanel.tsx` — shows system info from `window.electronAPI.getSystemInfo()`. What fields are shown? Is `appVersion` dynamic or hardcoded to "v1.0.0"? (Check `StatusBar.tsx` — it has a hardcoded "v1.0.0" string.)

**Agent Center (`src/pages/AgentCenter.tsx`):**
- Gated behind `isAdmin` flag. How does a user become admin? Is `isAdmin` persisted? Can it be toggled? Is there a UI for it? (Check `agentStore.ts` — `setAdmin()` exists but WHERE is it called?)
- `AgentLauncher.tsx` — model selector shows "Opus 4.6", "Sonnet 4.6", "Haiku 4.5". Are these the correct current model names and IDs? Do they match what `electron/ipc/agentHandlers.ts` actually passes to the Claude CLI?
- `QuickActions.tsx` (agent) — 6 preset actions. Each sets a prompt, model, and tools. Are the prompts well-crafted? Would they actually work with the Claude CLI?
- `ActiveAgents.tsx` — shows elapsed time updating every 1s. When an agent finishes, is the timer stopped? Does the agent card linger or disappear immediately?
- `LiveLogs.tsx` — max 1000 lines shown. Auto-scroll detection. What happens at exactly 1000 lines — does it truncate from the top or stop rendering new ones?
- `AppSelfCheck.tsx` — screenshot capture + DOM checks. Does the screenshot actually work in production builds? Does `selfTest.screenshot()` use `webContents.capturePage()`? Is the screenshot of the WHOLE window or just the renderer?
- `RunHistory.tsx` — "Rollback" button runs `git reset --hard {tag}`. Is there ALWAYS a tag? What if `gitTagStart` is undefined? Is the confirmation dialog clear about what will be lost?

### Build the feature matrix:

```
| Feature                  | Status              | What's Missing / Broken              |
|--------------------------|---------------------|--------------------------------------|
| Home dashboard           |                     |                                      |
| Onboarding/welcome       |                     |                                      |
| Template browsing        |                     |                                      |
| Template search          |                     |                                      |
| Template preview         |                     |                                      |
| Board creation wizard    |                     |                                      |
| File import (drag/drop)  |                     |                                      |
| File import (browse)     |                     |                                      |
| GitHub import            |                     |                                      |
| URL import               |                     |                                      |
| Import analysis          |                     |                                      |
| Miro connection          |                     |                                      |
| GitHub connection        |                     |                                      |
| Appearance settings      |                     |                                      |
| About panel              |                     |                                      |
| Agent launcher           |                     |                                      |
| Agent monitoring         |                     |                                      |
| Agent self-check         |                     |                                      |
| Agent run history        |                     |                                      |
| Agent rollback           |                     |                                      |
| Keyboard shortcuts       |                     |                                      |
| Menu bar                 |                     |                                      |
```

---

## Run 2 — User Journey Walkthrough

Walk through every flow. Rate each on 4 dimensions (1-5).

### Flow 1: First Launch
- App starts. `show: false` + `ready-to-show` prevents flash. Does the sidebar appear immediately or animate in?
- `WelcomeModal` appears if `!onboardingComplete`. Read `WelcomeModal.tsx`:
  - Step 1: "Welcome to MiroX" with "Get Started" — is the copy compelling?
  - Step 2: Miro API token input. The placeholder says "Paste your Miro API token..." — does it tell the user WHERE to get one? Is there a link?
  - Step 3: "You're All Set!" with "Open MiroX" — then what? The user is on the Home page. Is the next action obvious?
- If the user SKIPs the token step: they land on Home with no Miro connection. Can they still do anything useful? Can they browse templates? Create a board? (Board creation requires Miro API.)
- **Time-to-first-value**: How many clicks from first launch to having a real Miro board? Count them.

### Flow 2: Create a Board from Template
- Navigate: Home → "Browse Templates" or Sidebar → Templates
- Filter/search → click a template → preview modal → "Use This Template" → Builder
- Builder Step 1 is skipped (template pre-selected via URL param) → Step 2: name + description → Step 3: fill fields → "Create Board"
- Step 4: creation progress → Success → "Open in Miro"
- **Total clicks from Home to board**: count them
- **What if Miro is not connected?** Does the wizard let you get all the way to Step 4 before failing? That would be frustrating. Is there an early check?
- **What if the Miro token is expired/invalid?** Where does the error appear? Is it clear?

### Flow 3: Import Content → Board
- Navigate: Home → "Import Project" or Sidebar → Import
- **File tab**: Drop a PDF → wait for analysis → see suggested template → "Use This Template" → Builder with template pre-selected
- **GitHub tab**: Enter PAT → connect → search repos → select → "Analyze" → see suggestion → "Use This Template"
- **URL tab**: Paste URL → "Fetch & Analyze" → see suggestion → "Use This Template"
- After analysis: `ImportAnalysis.tsx` shows confidence and suggested template. Is the confidence percentage meaningful? How is it calculated? (Check: `fileParser.ts` and `urlParser.ts` both hardcode `confidence: 0.6`. Is it ALWAYS 60%?)
- **What happens to the imported content?** After choosing a template, the user goes to Builder. But do the imported file contents appear anywhere in the builder fields? Or is the import just for template SUGGESTION, not for populating content?

### Flow 4: Board Builder Deep Dive
- Step 1 (template selection) vs. pre-selection via `?template=` URL param — is the transition smooth?
- Step 3: `ContentEditor.tsx` — how many fields does the average template have? Are any templates overwhelming with too many fields?
- Can the user go back from Step 3 to Step 1? Or only to Step 2?
- If the user navigates away (clicks sidebar) during Step 3, is their draft lost?
- During creation (Step 4): there is NO cancel button. What if the user wants to abort?
- After success: "Create Another" resets the wizard. Does it clear the URL param too?

### Flow 5: Settings
- Miro: save token → test → connected. Clear flow?
- GitHub: enter PAT → connect → shows username. Disconnect → confirmation? Or instant?
- Appearance: theme toggle (dark only, light "coming soon"). Color swatches (8 options). Do color changes propagate immediately to ALL components? Or only to some?
- About: version info. Is `appVersion` pulled from `package.json` or hardcoded?

### Flow 6: Agent Command Center
- First impression: would a non-developer understand what this page does?
- The admin gate: how does `isAdmin` get set to `true`? Is there a secret toggle? A settings option? Check the entire codebase for `setAdmin` calls.
- Launching an agent: type prompt → pick model → toggle tools → "Launch Agent". What happens if Claude CLI is not installed? Is there an error?
- While running: live logs with auto-scroll. Is the log viewer performant with 2000 lines?
- After completion: agent moves to history after a `setTimeout` delay. How long? Is it jarring?
- Rollback: `git reset --hard` is destructive. Is the warning sufficient? Does it mention uncommitted changes?

### Rating template per flow:
```
| Flow                    | Discoverability | Clarity | Feedback | Error Recovery |
|-------------------------|-----------------|---------|----------|----------------|
| First Launch            |     /5          |   /5    |    /5    |      /5        |
| Template → Board        |     /5          |   /5    |    /5    |      /5        |
| File Import → Board     |     /5          |   /5    |    /5    |      /5        |
| GitHub Import → Board   |     /5          |   /5    |    /5    |      /5        |
| URL Import → Board      |     /5          |   /5    |    /5    |      /5        |
| Settings                |     /5          |   /5    |    /5    |      /5        |
| Agent Command Center    |     /5          |   /5    |    /5    |      /5        |
```

---

## Run 3 — Missing Systems Audit

For each system, answer: does it exist? Where? If not, how critical?

| System | Where to look | Known status |
|--------|--------------|--------------|
| **Crash reporting** | `electron/main.ts` — `process.on('uncaughtException')` exists (Phase 1+ fix). But does it LOG to a file? Or just `console.error`? Can you debug a user's crash from this? | Partially exists |
| **Error reporting (remote)** | Is Sentry, Bugsnag, or `electron.crashReporter` configured? Search for `crashReporter` in `electron/main.ts` | Likely missing |
| **Structured logging** | `src/utils/logger.ts` exists. But does the main process (`electron/`) use it? Or just `console.log`? Search all `electron/*.ts` files for `console.log` vs. structured logging | Check |
| **Analytics/telemetry** | Any usage tracking? `settingsStore.filesImported` and `templatesUsed` exist but are transient (not persisted, reset on restart). Are there any other tracking mechanisms? | Likely broken |
| **Auto-updater** | Search for `autoUpdater`, `electron-updater`, or `update` in `electron/main.ts` and `package.json` | Likely missing |
| **First-run experience** | `WelcomeModal.tsx` exists with 3-step onboarding. But can it be re-triggered? Is `onboardingComplete` resettable from Settings? | Partially exists |
| **Offline handling** | What happens when `fetch()` fails due to no internet? Do `miroHandlers.ts` and `githubHandlers.ts` catch network errors differently from API errors? Is there a global "you're offline" banner? | Check |
| **Undo/redo** | Any action in the app reversible? Board creation? Template field edits? Agent rollback is the only "undo" mechanism. | Likely missing |
| **Keyboard shortcuts** | `electron/main.ts` has menu accelerators: Cmd+N, Cmd+I, Cmd+1-5, Cmd+,. `SearchBar.tsx` has Cmd+K. Are these documented anywhere in the app? Is there a keyboard shortcut cheat sheet? | Partially exists |
| **Data export** | Can the user export their board list, settings, or history? | Likely missing |
| **Notifications** | When an agent finishes (which could take minutes), does the user get notified if the app is in the background? Check for `Notification` API or Electron `notification` module usage | Check |
| **Help/documentation** | Menu bar has "MiroX Documentation" → GitHub repo. Is there in-app help, tooltips explaining features, or a help page? | Minimal |
| **Version display** | `StatusBar.tsx` has hardcoded `"v1.0.0"`. `AboutPanel.tsx` shows `appVersion` from `getSystemInfo()`. Do these match? Is either dynamic from `package.json`? | Check for inconsistency |

---

## Run 4 — Navigation & Information Architecture

**Read:** `src/App.tsx`, `src/components/layout/Sidebar.tsx`, `TopBar.tsx`, `StatusBar.tsx`, `electron/main.ts` (menu)

### Sidebar (`Sidebar.tsx`):
- 6 nav items: Home, Templates, Import, Builder, Settings, Agent Center
- Agent Center has a separator above it — why? Is it visually a "power user" section?
- Active state: yellow text + yellow background tint. Is it obvious which page you're on?
- Collapsed state (64px): shows `<Tooltip>` on hover. Is the tooltip accessible? (`Tooltip.tsx` has NO `aria-describedby`, NO focus trigger — only CSS hover. This was NOT fixed in Phase 1.)
- Miro connection dot at the bottom: green = connected, red = not. Is this dot discoverable? Does it have a label? Can you click it to go to Settings?
- Collapse/expand toggle: is it clear what the button does? Icon? Tooltip?

### TopBar (`TopBar.tsx`):
- Left: 64px spacer for macOS traffic lights. Is this the right width? Does it align?
- Center: page title from route mapping. Does every route have a title? What about `/builder?template=kanban` — does it show "Board Builder" or the template name?
- Right: Search button (toggles `isSearchOpen` in UI store) + Settings gear. What happens when search is opened? Is there a search overlay? Or does `isSearchOpen` do nothing visible? (Read every component that reads `isSearchOpen` from `uiStore`.)

### StatusBar (`StatusBar.tsx`):
- Shows Miro connection status + "v1.0.0". Is the status bar adding value or wasting vertical space?
- `"v1.0.0"` is hardcoded. Should this read from `package.json` or Electron's `app.getVersion()`?

### Menu bar (`electron/main.ts`):
- Navigate menu: Cmd+1 (Home), Cmd+2 (Templates), Cmd+3 (Import), Cmd+4 (Settings), Cmd+5 (Agent Center). **Builder is NOT in this list.** Is that intentional? Can you navigate to Builder from the menu?
- File menu: Cmd+N → "New Board" → navigates to `/templates`. But shouldn't "New Board" go to `/builder`?
- Help menu: links to GitHub repo and issues. No in-app help page.
- Is there a Window menu with standard minimize/zoom? (Check `electron/main.ts` createMenu)

### Navigation gaps:
- Can the user navigate back? There's no browser-style back button. React Router has history, but is there a UI for it?
- Are there orphan pages? `/builder` requires a template selection first — what happens if you navigate directly to `/builder` without a `?template=` param?
- Deep linking: can the user bookmark or share a specific page? (Hash router `#/templates` should work.)

---

## Run 5 — Empty, Loading & Error States

**Scan every page and major component. For each, verify all three states exist.**

### Specific checks:

| Component | Empty State | Loading State | Error State |
|-----------|-------------|---------------|-------------|
| `RecentBoards.tsx` | "No boards yet" + CTA — good. Does the CTA button work? | No loading state — boards come from localStorage. Should there be one? | No error state — what if localStorage is corrupt? |
| `TemplateGallery.tsx` | "No templates match" + "Clear Search" — good. | No loading state — templates are static imports. Correct. | No error state — templates can't fail to load. Correct. |
| `FileDropZone.tsx` | Shows upload zone. Good. | Per-file "Analyzing..." with Spinner. Good. | Per-file error text. But is the error message human-readable or a raw exception? |
| `GitHubPicker.tsx` | "No repositories found" when empty. But what about first-time "not connected" state? Is it clear what a PAT is and why it's needed? | Spinner while loading repos. Good. | What happens if `testConnection` fails? Is the error shown? Where? |
| `URLImporter.tsx` | Globe icon + "Enter a URL..." — good. | "Fetching..." button state. Good. But can the user cancel a slow fetch? | Red error panel with `AnimatePresence`. Good. But is the error actionable? |
| `ActiveAgents.tsx` | "No agents running" + "Launch an agent above to get started" — good. | N/A (agents are event-driven). | What if `agent.kill()` fails? Is there feedback? |
| `LiveLogs.tsx` | "Waiting for agent output..." — good. | N/A (streaming). | What if the IPC log stream disconnects? |
| `RunHistory.tsx` | "No completed runs yet" — good. | N/A (from localStorage). | What if the persisted history is corrupt JSON? |
| `BoardWizard.tsx` Step 4 | N/A. | `CreationProgress` with 7 steps. But NO cancel button. NO timeout. What if it hangs? | Error state exists in Step 2 (red panel). But what about Step 4 errors? If `buildBoard()` throws, does the progress bar freeze? Is there a retry? |
| `MiroConfig.tsx` | Shows "Not Connected". Good. | "Test" button shows Spinner. Good. | What if `setToken()` fails? Is there error feedback? |
| `AppSelfCheck.tsx` | "No screenshot captured" + "Click 'Run Checks'" — good. | Spinner during checks. Good. | What if screenshot capture fails in production? |

### Cross-cutting questions:
- Are ALL loading spinners using the same `Spinner.tsx` component? Or do some components roll their own?
- Do error messages auto-dismiss or persist until the user acts?
- Is there a global error boundary (`ErrorBoundary.tsx`)? Where is it placed in the component tree? Does it catch errors in ALL pages or just some?
- Toast notifications: are they used for errors? Or only for success? Check all `addToast()` calls across the codebase.

---

## Run 6 — Accessibility Deep Dive

Phase 1 fixed: Modal focus trapping, Dropdown keyboard nav, Card keyboard activation.
This run checks everything else.

### Known gaps to verify:

1. **`Tooltip.tsx`** — uses CSS-only `group-hover:opacity-100`. NO `aria-describedby`. NO focus trigger. Keyboard users and screen readers never see tooltips. This affects the collapsed sidebar (every nav item uses `<Tooltip>`).

2. **`StatCards.tsx`** — animated number count-up uses `useMotionValue`. When the number animates from 0 to N, does a screen reader announce the final value? Is there an `aria-live` region?

3. **Status dots** — `Sidebar.tsx`, `StatusBar.tsx`, `MiroConfig.tsx`, `GitHubConfig.tsx` all show colored dots for connection status. Are these dots accessible? Do they have text alternatives? Or is the status only communicated via color?

4. **`StepIndicator.tsx`** — wizard step circles are purely visual (`motion.div`). No ARIA roles. A screen reader has no way to know which step is active. Should use `aria-current="step"` or similar.

5. **`CategoryFilter.tsx`** — buttons have `aria-pressed` (good). But is the button group wrapped in a `role="group"` with `aria-label`?

6. **`ImportHub.tsx`** — tab bar has `role="tablist"` and `role="tab"` with `aria-selected` (good). But are the tab panels wrapped in `role="tabpanel"` with `aria-labelledby`? Check the child content areas.

7. **`FileDropZone.tsx`** — the drop zone is a `<div>` with `onClick`. Is it keyboard-accessible? Does it have `role="button"` or is it a real `<button>`? Can a keyboard user trigger the file picker?

8. **`ActiveAgents.tsx`** — pulsing green dot has `aria-hidden="true"` (good). But is the agent status text sufficient for screen readers?

9. **Icon-only buttons** — check ALL buttons that render only an icon (no text):
   - Sidebar collapse toggle
   - TopBar search button
   - TopBar settings gear
   - Toast dismiss button (has `aria-label` — good)
   - RunHistory expand/collapse (has `aria-label` — good)
   - Any others?
   Do ALL icon-only buttons have `aria-label`?

10. **`prefers-reduced-motion`** — Framer Motion is used extensively (14 animation presets, per-component `whileHover`/`whileTap`, `AnimatePresence` on every page). Is there a SINGLE `prefers-reduced-motion` media query check anywhere? Search the entire codebase. If not, users who are sensitive to motion have no escape.

11. **Color contrast** — with background `#0A0A0A` (black-900):
    - `text-gray-400` (#9CA3AF) on black-900 — contrast ratio?
    - `text-gray-300` (#D1D5DB) on black-900 — contrast ratio?
    - `text-yellow-400` (#FFD600) on black-900 — contrast ratio?
    - `text-gray-500` if used anywhere — contrast ratio?
    - Error text `text-red-400` (#F87171) on black-900?
    Calculate actual WCAG AA compliance for body text (4.5:1) and large text (3:1).

12. **Focus indicators** — most components use `focus-visible:ring-2 focus-visible:ring-yellow-400/50`. But `yellow-400/50` is 50% opacity — is this visible enough on the dark background? And do ALL interactive elements have focus indicators?

13. **Semantic HTML** — check for `<div onClick>` patterns that should be `<button>`. Check for `<div>` that should be `<section>`, `<article>`, `<nav>`, or `<main>`. Is `<main>` used in `AppShell.tsx`?

14. **Form labels** — `Input.tsx` uses `<label htmlFor>` (good). But check `ContentEditor.tsx` for `textarea` and `multiselect` — do they have proper label associations?

---

## Run 7 — Architectural Decision Review

For each technology choice, evaluate fit and identify upgrade risks.

| Decision | Specific questions |
|----------|-------------------|
| **Electron 28** | Current latest stable is 33+. Electron 28 is ~2 years old. What Chromium version does it bundle? Are there known CVEs? The `^28.0.0` in `package.json` means it can upgrade within 28.x — but is 28.x still receiving security patches? |
| **React 18** | Is the app actually using React 18 features? Check: is `createRoot` used in `main.tsx`? Is `<Suspense>` used (yes, in `App.tsx`)? Are React transitions (`useTransition`, `startTransition`) used anywhere? Or is it just React 17 patterns on React 18? |
| **Zustand + Immer** | 6 stores. Only `agentStore` uses Immer. Is Immer justified for one store? Could it be replaced with spread syntax? Is Zustand being used to its strengths (simplicity, individual selectors) or is it overloaded? The `settingsStore` now uses IPC-based persistence instead of Zustand persist — good. But `boardStore` still uses `zustand/persist` to localStorage. Should this also move to electron-store for consistency? |
| **Vite 5** | Vite config has manual chunk splitting (3 vendor chunks + page/component chunks). Is the chunk strategy optimal? What's the total bundle size? Run `npm run build` and check `dist/assets/` sizes. |
| **Tailwind 3** | Tailwind 4 is out. The config uses custom color scales, one custom animation, and a few extensions. How painful would a v4 migration be? Are there any Tailwind classes used that are deprecated in v4? |
| **Framer Motion 11** | 14 animation presets + per-component animations. Is this adding UX value or just visual noise? Would removing animations break any functionality? Is the bundle size cost worth it for a desktop app? |
| **electron-store** | Used for: settings, window bounds, onboarding status, recent boards (via boardStore localStorage). Is electron-store the right choice for ALL persistent data? What about structured queries (e.g., "find all boards created in the last week")? |
| **No database** | User data lives in: electron-store (settings), localStorage (boards, agent history). What happens if `localStorage` fills up? (5MB limit in Chromium). Agent history stores up to 50 runs × 100 log lines — how much space? |
| **keytar** | Listed as a dependency for system keychain access. Is it actually USED? Search for `keytar` in `electron/`. If tokens are stored in electron-store instead of keychain, that's a security gap. |
| **No i18n** | Every user-facing string is hardcoded in components. Count the total number of hardcoded strings. Is i18n needed for the target audience? |

---

## Run 8 — Developer Experience & Maintainability

### Specific checks:

1. **Fresh clone test:** Can a new developer run `npm install && npm run dev` successfully? Are there any peer dependency warnings? Does `electron` binary download correctly? Are there any native module compilation issues (`keytar` requires node-gyp)?

2. **Import patterns:** Check for inconsistency between `@components/`, `@stores/`, etc. (path aliases) vs. relative paths `../../`. Grep for `../` imports in `src/` — any that should use aliases?

3. **Code duplication patterns:**
   - Connection status display (green/red dot + text) — appears in `Sidebar.tsx`, `StatusBar.tsx`, `MiroConfig.tsx`. Is this extracted to a reusable component?
   - Token input + save pattern — appears in `MiroConfig.tsx`, `GitHubConfig.tsx`, `WelcomeModal.tsx`. Similar UI, different implementations.
   - Masked token display — appears in `MiroConfig.tsx` and `GitHubConfig.tsx`. Same logic?
   - File type badge/icon mapping — appears in `FileDropZone.tsx` and `ImportAnalysis.tsx`. Same map?
   - `AnimatePresence` + `motion.div` page wrapper pattern — used in every page component. Could be a `<PageTransition>` wrapper.

4. **File sizes** — list every file over 300 lines:
   - `electron/main.ts` — how many lines?
   - `electron/ipc/miroHandlers.ts` — how many lines?
   - `src/components/builder/BoardWizard.tsx` — how many lines?
   - `src/components/agent-center/RunHistory.tsx` — how many lines?
   - Any others?

5. **Missing CI/CD:** There is NO `.github/workflows/` directory. What would a minimal CI pipeline need?
   - `npm ci && npm run typecheck && npm run lint && npm run test && npm run build`
   - macOS runner for Electron tests?
   - Automated release/notarization?

6. **Environment variables:** Are there any `.env` files? Is there a `.env.example`? Are Miro/GitHub API tokens expected as env vars or entered through the UI?

7. **Test coverage:** 339 tests pass. But what is NOT tested?
   - Are there tests for `boardBuilder.ts` (the core build engine)?
   - Are there tests for `templateEngine.ts` (board layout)?
   - Are there tests for `fileParser.ts` and `urlParser.ts`?
   - Are there tests for the hooks (`useMiro`, `useGitHub`, `useFileImport`, `useBoardBuilder`)?
   - Is there any integration test that simulates a full board creation flow?

---

## Run 9 — Visual Consistency Deep Dive

**Read:** `tailwind.config.js`, `src/design-system/tokens.ts`, `src/index.css`
**Then scan ALL component files for visual patterns.**

### Specific checks:

1. **Border radius inconsistency:** `tokens.ts` defines `radius` with sm/md/lg/xl/2xl/full. Tailwind config doesn't override radius. Check: are components using `rounded-lg`, `rounded-xl`, `rounded-2xl` consistently? Or is each component picking its own? Specifically:
   - Cards: `Card.tsx` uses `rounded-2xl`. Do ALL card-like elements use the same?
   - Buttons: `Button.tsx` uses what radius? Does it match inputs?
   - Inputs: `Input.tsx` uses what radius?
   - Modals: `Modal.tsx` uses what radius?
   - Dropdowns: `Dropdown.tsx` uses what radius on trigger AND on listbox?

2. **Spacing rhythm:** Check for non-4px-grid spacing values. Look for: `p-3` (12px), `p-5` (20px), `p-7` (28px), `gap-3`, `gap-5`, `gap-7`, `mt-3`, `mb-5` — these break the 4/8px grid. Are they intentional?

3. **Icon sizing:** Lucide icons are imported throughout. Check for size consistency:
   - Nav icons in `Sidebar.tsx` — what size?
   - Action icons in buttons — what size?
   - Status icons in `Toast.tsx` — what size?
   - Decorative icons in pages — what size?
   Are they using 16/20/24 consistently or arbitrary sizes?

4. **Yellow color usage:** The accent is `yellow-400` (#FFD600). Check:
   - Is `yellow-400` used for ALL primary accents? Or do some components use `yellow-300`, `yellow-500`, etc.?
   - The `tokens.ts` yellow scale goes 400→500→600→700→800→900 but shifts from yellow to amber to orange to red. Is `yellow-500` (#FFC107) ever used as an accent? That would look amber, not yellow.
   - The 8 accent color swatches in `AppearanceConfig.tsx` — when you select a non-yellow accent, does it ACTUALLY change across the app? Or is yellow-400 hardcoded everywhere?

5. **Text truncation:** Long content scenarios:
   - Board names in `RecentBoards.tsx` — truncated? Max width?
   - Template names in `TemplateCard.tsx` — truncated? What if the name is 50 characters?
   - Agent prompts in `ActiveAgents.tsx` — truncated? The code mentions "truncated prompt."
   - File names in `FileDropZone.tsx` — truncated?
   - Repo names in `GitHubPicker.tsx` — truncated?

6. **Transition duration consistency:** The design system defines `animation.duration.fast = 150`, `normal = 250`, `slow = 400`. Check:
   - Tailwind `duration-150` — used where?
   - Tailwind `duration-200` — used where? (Not in the token system!)
   - Tailwind `duration-300` — used where?
   - Framer Motion spring settings — consistent across components?

7. **Dark theme completeness:** Search for any `bg-white`, `text-black`, `bg-gray-50`, `bg-gray-100`, or other light-theme Tailwind classes that would look wrong on the dark background.

8. **Minimum window size:** `electron/main.ts` sets `minWidth: 900, minHeight: 600`. Does the layout hold at 900×600? Does the sidebar collapse gracefully? Do cards wrap or overflow?

---

## Run 10 — Security & Privacy Beyond IPC

**(Phase 1 covered: IPC handler hardening, fetch timeouts, SSRF protection, input validation, crash handlers, CSP headers. This covers everything else.)**

### Specific checks:

1. **Token storage mechanism:**
   - `package.json` lists `keytar` as a dependency. Search `electron/` for `require('keytar')` or `import keytar`. Is it ACTUALLY used?
   - If tokens are in electron-store (plain JSON at `~/Library/Application Support/mirox-settings/config.json`), any app on the system can read them. This is 🔴 critical if keytar is NOT used.
   - Check `miroHandlers.ts` — `setToken` and `getToken` handlers. Where do they store the token?
   - Check `githubHandlers.ts` — same question.

2. **Token exposure in logs:**
   - When `testConnection` fails, does the error message include the token?
   - When an agent runs, is the Miro token passed to it? Could it appear in agent logs?
   - `console.error` in production — could tokens leak to DevTools? (DevTools is disabled in production builds, but verify.)

3. **CSP analysis (`electron/main.ts`):**
   - Production CSP: `connect-src 'self' https://api.miro.com https://api.github.com` — does this block any legitimate API calls?
   - `style-src 'self' 'unsafe-inline'` — needed for Tailwind but weakens CSP. Is there a way to use nonces instead?
   - `img-src 'self' data:` — no `blob:`. If any component uses `URL.createObjectURL()`, images would be blocked. Check for `createObjectURL` usage.
   - No `frame-src` — defaults to `'self'`. Good if no iframes are used. Verify no component uses `<iframe>` or `<webview>`.

4. **DevTools in production:**
   - `electron/main.ts` — View menu: DevTools is only included when `isDev`. Verify this check: `const isDev = !app.isPackaged` or `process.env.NODE_ENV === 'development'`?
   - Can a user still open DevTools via Ctrl+Shift+I or Cmd+Option+I even without the menu item? Check if `webContents.on('before-input-event')` blocks DevTools shortcuts.

5. **External link handling:**
   - `openExternal` in preload: `shell.openExternal(url)`. Is there any URL validation? Could a malicious board URL trigger `shell.openExternal('file:///etc/passwd')` or a custom protocol handler?
   - Check `SuccessScreen.tsx` — "Open in Miro" calls `openExternal(boardUrl)`. Where does `boardUrl` come from? Is it validated to be a miro.com URL?

6. **Agent Command Center security:**
   - `agentHandlers.ts` — launches Claude CLI as a child process. What user permissions does it run under? Can it access the full filesystem?
   - The agent prompt is user-input. Could prompt injection in the agent prompt cause the Claude CLI to perform harmful actions? (This is inherent to the feature but should be documented.)
   - Rollback: `git reset --hard` runs as the app's user. Is there any sandboxing?

7. **Data at rest inventory:**
   - `~/Library/Application Support/mirox-settings/config.json` — electron-store data
   - `localStorage` in the Electron renderer — where is this stored on disk? (`~/Library/Application Support/MiroX/Local Storage/`)
   - Any temp files from file parsing? (Check `electron/ipc/handlers.ts` file:parse handler)
   - Screenshots from `selfTest.screenshot()` — stored where? (In-memory as data URL, or written to disk?)

---

## Run 11 — Performance & Resource Management

**This was entirely missing from the original Phase 2. It matters for a desktop app.**

### Checks:

1. **Memory leaks:**
   - `useEffect` cleanup in hooks: do `useMiro`, `useGitHub`, `useFileImport` clean up all subscriptions? Check for missing return functions or missing AbortController cleanup.
   - Agent log accumulation: `agentStore.appendLog` caps at 2000 per agent. But active agents + history could hold 50 × 100 + N × 2000 lines in memory. Is this bounded?
   - `toastTimeouts` Map in `uiStore` — are timeouts always cleaned up? What if a toast is removed manually before its auto-dismiss fires?
   - `setInterval` in `ActiveAgents.tsx` (1-second timer) — is it cleared on unmount? What if multiple agents start and stop rapidly?

2. **Bundle size:**
   - Run `npm run build` and report total size of `dist/assets/`
   - Is `framer-motion` the largest dependency? What's its contribution?
   - Are all 38 template files loaded upfront via `templates/index.ts`? Or are they lazy-loaded? (They are static imports in `index.ts` — all 38 are in the main bundle.)
   - `xlsx` (SheetJS) and `mammoth` (DOCX) in dependencies — are these loaded in the renderer or only in the main process? If renderer, they bloat the bundle.
   - `pdf-parse` — same question. Is it used in the renderer or main process?

3. **Render performance:**
   - `TemplateGallery.tsx` renders 38 template cards with Framer Motion stagger animation. Each card has `whileHover` and `whileTap`. Is this 38 simultaneous `motion.div` instances? Performance impact?
   - `LiveLogs.tsx` shows up to 1000 log lines. Each is a `<div>`. Is this virtualized or does it render all 1000 DOM nodes? If not virtualized, could cause jank.
   - Zustand selectors: verify ALL stores are accessed via individual selectors (`useStore(s => s.field)`), not full-store subscriptions. A full-store subscription would cause unnecessary re-renders.

4. **IPC overhead:**
   - Board creation calls 7+ sequential IPC methods (createBoard, then createShape/createStickyNote/etc. per section with 200ms delays). For a template with 7 sections, that's ~1.4s of artificial delay alone. Is the 200ms delay necessary?
   - `settingsStore.saveToDisk()` is called on EVERY theme/color change. Is this debounced?

---

## Run 12 — Naming, Copy & Microcopy Quality

**Read every hardcoded string in every component. Check for:**

1. **Placeholder/test text:** Search for "Lorem", "TODO", "FIXME", "test", "asdf", "foo", "bar" in all `.tsx` files.

2. **Consistency:**
   - "Browse Templates" vs. "Templates" — used interchangeably?
   - "Board" vs. "Miro Board" — consistent?
   - "Import" vs. "Upload" — the sidebar says "Import", the tab says "File Upload", the hero says "Import Project"
   - "Connect" vs. "Save Token" — MiroConfig says "Save Token", GitHubConfig says "Connect". Different actions or inconsistent naming?
   - "Agent" — is this term explained anywhere? Would a non-developer know what an "agent" is?

3. **Error messages:** Collect ALL error messages from the codebase. Are they:
   - Human-readable (not raw exceptions)?
   - Actionable (tell the user what to do)?
   - Consistent in tone?

4. **Button labels:** Check every button's text. Is it clear what clicking will do?
   - "Get Started" — vague
   - "Open MiroX" — after onboarding, this just closes the modal. Is that clear?
   - "Use Template" vs. "Use This Template" — two different buttons say slightly different things

5. **Version references:** "v1.0.0" appears in `HeroBanner.tsx`, `StatusBar.tsx`, `AboutPanel.tsx`. Are all three consistent? Are any dynamic?

---

## Run 13 — Platform Convention Compliance (macOS)

### Specific checks against macOS HIG:

1. **Window chrome:**
   - `titleBarStyle: 'hiddenInset'` + `trafficLightPosition: { x: 16, y: 16 }` — is this visually correct?
   - `.drag-region` CSS class exists for `-webkit-app-region: drag`. Is it applied to the top bar? Can the user drag the window?
   - `.no-drag` class — is it applied to ALL interactive elements in the top bar? (Buttons must be `no-drag` or they can't be clicked.)

2. **Standard shortcuts:**
   - Cmd+Q — quit. Handled by Electron default? Or custom?
   - Cmd+W — close window. In the menu with `role: 'close'`? Verify.
   - Cmd+, — preferences. In the menu, navigates to `/settings`. Correct macOS convention.
   - Cmd+H — hide. System default?
   - Cmd+M — minimize. System default?
   - Cmd+Z/Cmd+Shift+Z — undo/redo. Edit menu has `role: 'undo'` and `role: 'redo'`. But do they work in text inputs?

3. **Dock behavior:**
   - Single-instance lock with `requestSingleInstanceLock()` — good.
   - `activate` event recreates window on dock click — good.
   - `window-all-closed` does NOT quit on macOS — correct.
   - Is there a dock badge for notifications?

4. **About dialog:** Is there a native "About" dialog via `app.setAboutPanelOptions()` or a custom one? The menu has "About MiroX" — does it open the native dialog or navigate to the About panel in Settings?

5. **Window state:** Position and size are persisted and restored. `wasMaximized` is checked. But what about fullscreen? If the user was in fullscreen, is it restored?

6. **Native feel:**
   - Scrollbar styling (custom 6px thin scrollbar in `index.css`) — does this match macOS native scrollbar behavior? macOS hides scrollbars by default and shows them on scroll.
   - Right-click context menus — does the app support them? Or is right-click completely custom/disabled?
   - Text selection — `.drag-region` can interfere with text selection. Can the user select and copy text in the app?

---

## Run 14 — Upgrade Path Assessment

Rate each: **Seamless** / **Moderate** / **Painful** / **Blocking**

| Upgrade | From → To | Key concerns |
|---------|-----------|--------------|
| **Electron** | 28 → 33+ | Breaking changes in Electron 29-33? `contextBridge` changes? `webPreferences` changes? Does `sandbox: false` still work? BrowserWindow API changes? |
| **React** | 18 → 19 | React 19 removes `forwardRef` (used in `Input.tsx`). Changes to `useEffect` behavior. Any other breaking patterns? |
| **Vite** | 5 → 6 | Config format changes? Plugin compatibility (`@vitejs/plugin-react`)? Build output differences? |
| **TypeScript** | 5.3 → 5.7 | Any new strict checks that would catch errors? New features to leverage? |
| **Tailwind** | 3 → 4 | Tailwind 4 uses CSS-first config. Custom config in `tailwind.config.js` would need migration. `@tailwind` directives change. Color scale changes? |
| **Framer Motion** | 11 → latest | API stability? Any deprecated patterns used? |
| **Zustand** | 4 → 5 | Middleware changes? `persist` middleware API changes? `immer` middleware changes? |
| **electron-builder** | 24 → latest | macOS notarization changes? Code signing changes? DMG config changes? |

---

## Phase 2 — Final Delivery

### Per-run format:
```
RUN [N] — [NAME]
Status: 🔴 Critical / 🟡 Needs Attention / 🟢 Healthy
Findings:
1. [file/component] — [what's wrong] — [severity] — [fix recommendation]
2. ...
```

### Final Summary:

**🔴 Top 5 Critical Product Issues**
Things that would make a real user confused, frustrated, or unable to complete their goal.

**🟡 Top 5 Polish Items**
Things that make the app feel unfinished but don't block functionality.

**🟢 Top 3 Product Strengths**
What genuinely feels good, works well, or was clearly well-thought-out.

**📋 Ship-Readiness Checklist** (up to 15 items, priority-ordered):
```
- [ ] item 1
- [ ] item 2
- [ ] ...
```

**📊 Product Health Scores (1-10):**
| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Feature Completeness | /10 | |
| User Experience | /10 | |
| Visual Quality | /10 | |
| Accessibility | /10 | |
| Performance | /10 | |
| Security (non-IPC) | /10 | |
| Developer Experience | /10 | |
| Ship-Readiness | /10 | |
| **Overall Product Score** | **/10** | |

**One-paragraph honest product assessment.**
Separate from code quality. Is this something a real person would want to use, enjoy using, and come back to? Why or why not?
