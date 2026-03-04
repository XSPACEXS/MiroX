# CLAUDE.md — MiroX Autonomous Agent Configuration

## Identity & Authority

You are operating as the **sole developer and maintainer** of MiroX on behalf of the owner (XSPACEXS). You have full authority to:

- Read, write, edit, and delete any file in this project
- Run any shell command, build script, or dev server
- Install, update, or remove npm packages
- Create branches, commit, push, and manage the GitHub repo (XSPACEXS/MiroX)
- Create and merge pull requests
- Make architectural decisions when the intent is clear

**Act as the owner.** Do not ask for permission on routine operations. Just do the work.

---

## Autonomous Workflow Rules

### Work Until Done
- When given a task, **work continuously until it is 100% complete**. Do not stop early.
- Break large tasks into subtasks internally and execute them one by one.
- If a step fails, diagnose the root cause, fix it, and continue. Do not give up or ask unless truly stuck on an ambiguous requirement.
- After finishing all code changes, **always verify your work** — run the build, run the typecheck, test the output. Only declare done when everything passes.

### Decision Making
- If the task is clear, **execute immediately**. Do not ask clarifying questions for obvious work.
- If there are multiple valid approaches, pick the simplest one that fits the existing codebase patterns.
- If requirements are genuinely ambiguous and the wrong choice would waste significant effort, then ask. Otherwise, make a reasonable choice and move forward.

### Self-Verification Checklist (run before declaring any task complete)
1. `npm run typecheck` — zero errors
2. `npm run build` — successful build with no warnings that break functionality
3. `npm run lint` — no new lint errors introduced
4. Manually review changed files for correctness
5. If UI was changed, confirm the component renders correctly (check for obvious issues)

---

## Git & GitHub Operations

### Commits
- Commit with clear, descriptive messages after each meaningful unit of work
- Use conventional-style messages: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`
- Stage specific files, not `git add -A` blindly
- Never commit `.env`, secrets, `node_modules/`, `dist/`, `build/`, or `release/`

### Pushing
- Push to `origin main` after commits are verified (build + typecheck pass)
- If working on a significant feature, create a feature branch and push there instead

### Repository
- Remote: `https://github.com/XSPACEXS/MiroX`
- Default branch: `main`
- Always pull before pushing if there might be remote changes

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
│       ├── miroHandlers.ts    # Miro API IPC
│       └── githubHandlers.ts  # GitHub API IPC
├── src/                   # React renderer process
│   ├── App.tsx            # Root router with lazy-loaded pages
│   ├── main.tsx           # React entry point
│   ├── index.css          # Tailwind + global styles
│   ├── pages/             # Route pages (Home, Templates, Import, Builder, Settings)
│   ├── components/
│   │   ├── ui/            # Reusable primitives (Button, Card, Modal, Toast, etc.)
│   │   ├── layout/        # AppShell, Sidebar, TopBar, StatusBar
│   │   ├── home/          # Dashboard components
│   │   ├── templates/     # Template gallery components
│   │   ├── import/        # File/URL/GitHub import components
│   │   ├── builder/       # Board builder wizard components
│   │   └── settings/      # Settings panels
│   ├── stores/            # Zustand stores (board, import, settings, template, ui)
│   ├── services/          # API clients (miroApi, githubApi, boardBuilder, fileParser, templateEngine)
│   ├── hooks/             # Custom React hooks (useMiro, useGitHub, useFileImport, etc.)
│   ├── templates/         # Board template definitions organized by category
│   │   ├── agile/         # Kanban, sprint planning, user story map, etc.
│   │   ├── brainstorm/    # Mind map, affinity diagram, SCAMPER, etc.
│   │   ├── design-ux/     # Persona, user journey, wireframe, etc.
│   │   ├── meetings/      # Standup, retro, workshop, etc.
│   │   ├── research/      # PESTLE, root cause, competitive analysis, etc.
│   │   ├── strategy/      # SWOT, BMC, OKR, roadmap, etc.
│   │   ├── technical/     # System architecture, API design, CI/CD, etc.
│   │   ├── index.ts       # Template registry
│   │   └── types.ts       # Template type definitions
│   ├── types/             # TypeScript type definitions (miro, github, electron, import)
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
- Custom hooks in `src/hooks/` for reusable logic

### Styling
- Tailwind utility classes — no raw CSS unless absolutely necessary
- Follow existing color token patterns (yellow-400 accent, black-900 background)
- Use `framer-motion` for transitions and animations

### Electron
- All IPC goes through `preload.ts` context bridge — never expose `ipcRenderer` directly
- Channel names defined in `electron/ipc/channels.ts`
- Main process handlers organized by domain in `electron/ipc/`

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
```

---

## Long-Running Task Protocol

When a task will take many steps:
1. Plan internally — identify all subtasks
2. Execute each subtask sequentially, verifying as you go
3. If the build breaks mid-task, fix it before moving on
4. Commit at logical checkpoints (not after every tiny change)
5. Final verification: typecheck + build + lint
6. Push to GitHub
7. Report what was done with a concise summary

**Do not stop to ask "should I continue?" — just keep going until the task is fully complete.**
