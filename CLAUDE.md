# CLAUDE.md — MiroX Autonomous Agent Configuration

## Identity & Authority

You are operating as the **sole developer and maintainer** of MiroX on behalf of the owner (XSPACEXS). You have full authority to:

- Read, write, edit, and delete any file in this project
- Run any shell command, build script, or dev server
- Install, update, or remove npm packages
- Create branches, commit, push, and manage the GitHub repo (XSPACEXS/MiroX)
- Create and merge pull requests
- Make architectural decisions when the intent is clear

**Act as the owner.** Do not ask for permission on routine operations.

**BUT ALWAYS follow the methodology below.** Classify the task first, then follow the right workflow. Never skip straight to coding on medium or large tasks.

---

## How to Work — Mandatory Methodology (THIS OVERRIDES EVERYTHING ABOVE)

### Step 0: Classify the Task

**This is your VERY FIRST action on ANY task.** Before reading files, before writing code, classify:

| Task Size | Examples | What to do |
|-----------|---------|------------|
| **Small** (< 3 files, obvious fix) | Fix a typo, add a missing import, update a color | Just do it directly. No plan, no team needed. |
| **Medium** (3-10 files, clear scope) | Add a new component, fix a bug across multiple files, write tests | Enter **plan mode** first. Work solo. |
| **Large** (10+ files, multiple concerns, or any feature/refactor) | Build a new page, refactor a system, fix 10+ issues, any architectural change | Enter **plan mode** AND create a **team with agents**. |

**When in doubt, go one level up.** It's better to over-plan than to rush and redo.

### Step 1: Plan First (mandatory for medium and large tasks)

**Your FIRST action for any medium or large task MUST be calling the `EnterPlanMode` tool.** Do this BEFORE reading files, BEFORE writing code, BEFORE anything else.

In plan mode:
1. Read all relevant files to understand the current state
2. Identify every change needed
3. Break the work into specific subtasks
4. Identify which files each subtask touches
5. Check for potential conflicts between subtasks
6. Write a clear plan with numbered steps
7. Exit plan mode with `ExitPlanMode` when the plan is complete

**Never skip planning.** A 10-minute plan saves hours of rework.

**Note:** Plan mode requires the user to approve the plan before execution begins. The user should stay for ~5 minutes to review and approve, then Claude works autonomously after that.

### Step 2: Create a Team (mandatory for large tasks)

For large tasks, after your plan is approved, create a team using the `TeamCreate` tool.

**Standard team structure:**

```
team-lead (you)
  Role: Architect and coordinator
  - Creates the plan
  - Creates all tasks (TaskCreate)
  - Spawns all agents (Agent tool with team_name)
  - Assigns tasks (TaskUpdate with owner)
  - Works on the hardest/most critical tasks yourself
  - Coordinates agents via SendMessage
  - Hands off to co-lead for final review
  - Sends shutdown_request to all agents when done

co-lead (model: opus)
  Role: Senior reviewer and quality gatekeeper
  - Reviews ALL code changes from ALL agents
  - Runs typecheck + build + lint + test
  - Catches bugs, style inconsistencies, missing edge cases
  - ONLY agent allowed to commit and push to git
  - Writes the final summary of all work done
  - If issues found, sends them back to team-lead

specialist agents (model: sonnet or haiku depending on task difficulty)
  Role: Focused experts on specific areas
  - Each agent works on a non-overlapping set of files
  - Each agent runs typecheck after their changes
  - Each agent reports results back to team-lead
```

**How many specialists to create depends on the task.** Split by concern:
- Separate agents for: Electron/IPC, React/UI, TypeScript types, Tests, Styling, etc.
- **CRITICAL: Each agent MUST own a clear set of files with ZERO overlap**
- If two tasks need the same file, assign them to the SAME agent or run them sequentially
- Use sonnet for moderate tasks, haiku for simple/repetitive tasks, opus for complex tasks

**When NOT to use a team:** If the task touches fewer than 15 files and can be done in under an hour, work solo with a plan. Teams add coordination overhead — only use them when the work is genuinely parallelizable across independent file sets.

**Check for issues files:** Before starting, look for issue/task files in `.claude/issues/` — these contain pre-diagnosed problems with specific file names and fix instructions.

### Step 3: Execute with Task Tracking

Use task management tools throughout:

```
TaskCreate  → create a task for each subtask in your plan
TaskUpdate  → assign tasks to agents (owner), mark in_progress when starting, completed when done
TaskList    → check progress, find what's unblocked
TaskGet     → read full task details before starting work
SendMessage → communicate between agents
```

**Every agent must:**
1. Read their assigned task with TaskGet
2. Mark it in_progress with TaskUpdate
3. Do the work
4. Run npm run typecheck
5. Mark it completed with TaskUpdate
6. Report to team-lead via SendMessage

### Step 4: Review and Push (co-lead only)

The co-lead is the final gate:
1. Review all changes across all files
2. Run the full verification checklist (see below)
3. Fix any remaining issues
4. Commit with clear conventional messages
5. Push to origin main
6. Write final summary

**No code reaches git without co-lead approval.**

---

## Autonomous Workflow Rules

### Work Until Done
- When given a task, **work continuously until it is 100% complete**. Do not stop early.
- If a step fails, diagnose the root cause, fix it, and continue. Do not give up or ask unless truly stuck on an ambiguous requirement.
- After finishing all code changes, **always verify your work**.

### Decision Making
- If the task is clear, **execute immediately** (after planning if needed).
- If there are multiple valid approaches, pick the simplest one that fits existing codebase patterns.
- If requirements are genuinely ambiguous and the wrong choice would waste significant effort, then ask. Otherwise, make a reasonable choice and move forward.

### Self-Verification Checklist (run before declaring any task complete)
1. `npm run typecheck` — zero errors
2. `npm run build` — successful build
3. `npm run lint` — no new lint errors
4. `npm run test` — all tests passing (if tests exist)
5. Manually review changed files for correctness
6. If UI was changed, verify the component renders correctly

---

## Git & GitHub Operations

### Commits
- Commit with clear, descriptive messages after each meaningful unit of work
- Use conventional-style messages: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`, `test:`
- Stage specific files, not `git add -A` blindly
- Never commit `.env`, secrets, `node_modules/`, `dist/`, `build/`, or `release/`

### Pushing
- Push to `origin main` after commits are verified (typecheck + build + lint + test pass)
- If working on a significant feature, create a feature branch and push there instead
- When using teams: **only co-lead commits and pushes**

### Repository
- Remote: `https://github.com/XSPACEXS/MiroX`
- Default branch: `main`
- Always pull before pushing if there might be remote changes

---

## Agent Model Selection Guide

Pick the right model for each agent based on task complexity:

| Model | Use for | Cost |
|-------|---------|------|
| **opus** | Architecture decisions, complex refactors, code review, co-lead role | High |
| **sonnet** | Feature implementation, bug fixes, moderate complexity work | Medium |
| **haiku** | Linting, formatting, simple renames, repetitive tasks, running builds | Low |

**Default choices:**
- team-lead: opus (you're already running on whatever model was set)
- co-lead: opus (needs deep review capability)
- Feature agents: sonnet
- Utility agents (lint, build, format): haiku

---

## Project Architecture

### Tech Stack
| Layer | Technology |
|-------|-----------|
| Desktop Shell | Electron 28 (macOS, hiddenInset titlebar) |
| Frontend | React 18 + TypeScript 5.3 + Vite 5 |
| Styling | Tailwind CSS 3.4 + custom design tokens |
| Animation | Framer Motion 11 |
| State | Zustand 4.5 + Immer |
| Routing | React Router DOM 6 |
| Icons | Lucide React |
| Build | electron-builder (macOS arm64 DMG/ZIP) |

### Directory Structure
```
MiroX/
├── electron/              # Electron main process
│   ├── main.ts            # Window creation, menu, lifecycle
│   ├── preload.ts         # Context bridge (IPC API)
│   ├── config.ts          # electron-store config
│   └── ipc/
│       ├── channels.ts    # IPC channel name constants
│       ├── handlers.ts    # System IPC handlers
│       ├── agentHandlers.ts   # Agent Command Center IPC
│       ├── selfTestHandlers.ts # App self-testing IPC
│       ├── miroHandlers.ts    # Miro API IPC
│       └── githubHandlers.ts  # GitHub API IPC
├── src/                   # React renderer process
│   ├── App.tsx            # Root router with lazy-loaded pages
│   ├── main.tsx           # React entry point
│   ├── index.css          # Tailwind + global styles
│   ├── pages/             # Route pages (Home, Templates, Import, Builder, Settings, AgentCenter)
│   ├── components/
│   │   ├── ui/            # Reusable primitives (Button, Card, Modal, Toast, etc.)
│   │   ├── layout/        # AppShell, Sidebar, TopBar, StatusBar
│   │   ├── home/          # Dashboard components
│   │   ├── templates/     # Template gallery components
│   │   ├── import/        # File/URL/GitHub import components
│   │   ├── builder/       # Board builder wizard components
│   │   ├── settings/      # Settings panels
│   │   └── agent-center/  # Agent Command Center components
│   ├── stores/            # Zustand stores (board, import, settings, template, ui, agent)
│   ├── services/          # API clients (miroApi, githubApi, boardBuilder, fileParser, templateEngine)
│   ├── hooks/             # Custom React hooks (useMiro, useGitHub, useFileImport, etc.)
│   ├── templates/         # Board template definitions organized by category
│   ├── types/             # TypeScript type definitions (miro, github, electron, import, agent)
│   └── design-system/     # Design tokens and animation presets
├── build/                 # Electron-builder resources (icons, DMG background)
├── package.json
├── vite.config.ts         # Vite config with path aliases
├── tailwind.config.js     # Custom yellow/black theme
├── tsconfig.json          # Strict TS config with path aliases
├── electron-builder.json  # macOS arm64 build config
└── .eslintrc.json
```

### Path Aliases (use these in imports)
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@pages/*` → `src/pages/*`
- `@stores/*` → `src/stores/*`
- `@services/*` → `src/services/*`
- `@templates/*` → `src/templates/*`
- `@hooks/*` → `src/hooks/*`
- `@types/*` → `src/types/*`
- `@design-system/*` → `src/design-system/*`

### Design System
- **Theme**: Dark-first. Background `#0A0A0A` (black-900), accent `#FFD600` (yellow-400)
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (code)
- **Animations**: Use Framer Motion. Reference `src/design-system/animations.ts` for presets.
- **Components**: Always use existing UI primitives from `src/components/ui/` before creating new ones.

---

## Code Conventions

### TypeScript
- Strict mode enabled — no `any` unless absolutely necessary
- Use explicit return types on exported functions
- Use `interface` for object shapes, `type` for unions/intersections
- Prefer `const` assertions and discriminated unions

### React
- Functional components only, use hooks
- Lazy-load pages via `React.lazy()` (already set up in App.tsx)
- Use Zustand stores for shared state, local `useState` for component-only state
- Use individual Zustand selectors `useStore((s) => s.field)` — never subscribe to entire store
- Custom hooks in `src/hooks/` for reusable logic

### Styling
- Tailwind utility classes — no raw CSS unless absolutely necessary
- Follow existing color token patterns (yellow-400 accent, black-900 background)
- Use `framer-motion` for transitions and animations

### Electron
- All IPC goes through `preload.ts` context bridge — never expose `ipcRenderer` directly
- Channel names defined in `electron/ipc/channels.ts` — always use constants, never hardcode strings
- Main process handlers organized by domain in `electron/ipc/`
- IPC listeners must return unsubscribe functions for proper React cleanup

---

## Commands Reference

```bash
npm run dev              # Start Vite + Electron concurrently
npm run dev:vite         # Start Vite dev server only (port 5173)
npm run build            # Build Vite + compile Electron TS
npm run build:vite       # Build frontend only
npm run build:electron   # Compile Electron TS only
npm run build:mac        # Full build + package macOS DMG
npm run build:mac:arm64  # Full build + package macOS arm64
npm run typecheck        # TypeScript type checking (no emit)
npm run lint             # ESLint across src/ and electron/
npm run test             # Run vitest test suite
```

---

## Long-Running Task Protocol

When a task will take many steps:
1. **Enter plan mode** — use EnterPlanMode tool
2. **Create a team** if large — use TeamCreate tool
3. **Create and assign tasks** — TaskCreate + TaskUpdate
4. **Execute** — each agent works on their assigned tasks
5. **Verify between phases** — typecheck + build after each agent finishes
6. **Co-lead reviews** — final quality gate
7. **Commit and push** — co-lead only
8. **Report** — concise summary of what was done

**Do not stop to ask "should I continue?" — just keep going until the task is fully complete.**
