# Agent Command Center — Code Review Issues

Found during deep code review on 2026-03-05. Fix all of these.

## Moderate Issues (fix these first)

### M1. Dual type definitions will drift apart
- `electron/preload.ts` exports `type ElectronAPI = typeof electronAPI`
- `src/types/electron.ts` declares a separate `interface ElectronAPI`
- These must be kept in sync manually — if one changes, the other breaks silently
- **Fix**: Pick one source of truth. Either derive the renderer type from preload, or keep the manual interface but add a comment warning

### M2. AppSelfCheck.tsx subscribes to entire store
- `src/components/agent-center/AppSelfCheck.tsx` calls `useAgentStore()` without a selector
- This means it re-renders on EVERY store update (every log line from every agent)
- **Fix**: Use individual selectors: `useAgentStore((s) => s.lastScreenshot)`, `useAgentStore((s) => s.consoleErrors)`, etc.

### M3. Rollback wastes tokens by launching a Claude agent
- `src/components/agent-center/RunHistory.tsx` lines 45-57 launch a Claude agent with model haiku just to run `git reset --hard`
- This costs tokens for a simple shell command
- **Fix**: Add a direct IPC handler `agent:rollback` in `electron/ipc/agentHandlers.ts` that runs `child_process.execSync('git reset --hard <tag>')`. Update RunHistory.tsx to call this instead.

### M4. selftest:dom-check executes arbitrary JS from renderer
- `electron/ipc/selfTestHandlers.ts` line 47 runs arbitrary JavaScript from the renderer in the main process
- Accepted risk for a dev tool, but add a comment documenting the security implication

## Minor Issues

### m1. Hardcoded channel strings
- `electron/ipc/agentHandlers.ts` and `electron/ipc/selfTestHandlers.ts` use raw strings like `'agent:launch'` instead of `IPC_CHANNELS.AGENT_LAUNCH` from `channels.ts`
- **Fix**: Import and use the constants everywhere

### m2. process.cwd() wrong in packaged app
- `electron/ipc/agentHandlers.ts` line 47 uses `process.cwd()` as the working directory
- In a packaged .app, this could be `/` or home directory
- **Fix**: Use `app.isPackaged ? path.dirname(app.getAppPath()) : process.cwd()`

### m3. No user-friendly error when claude binary missing
- If `claude` CLI is not installed, spawn fires an ENOENT error
- **Fix**: Catch ENOENT specifically and send a clear error: "Claude CLI not found. Install it from https://claude.ai/download"

### m4. --dangerously-skip-permissions always passed
- `electron/ipc/agentHandlers.ts` always adds this flag with no user awareness
- **Fix**: Add a comment explaining why, or make it configurable in settings

### m5. No error feedback when agent launch fails
- `src/components/agent-center/AgentLauncher.tsx` — if `agent.launch()` returns `{ ok: false }`, nothing happens in the UI
- **Fix**: Show an error toast or inline error message

### m6. allTools duplicates DEFAULT_TOOLS
- `src/components/agent-center/AgentLauncher.tsx` line 72 redefines the same list
- **Fix**: Derive from DEFAULT_TOOLS

### m7. Tool toggle buttons use raw HTML instead of UI primitives
- `src/components/agent-center/AgentLauncher.tsx` lines 108-119 use `<button>` instead of the `Button` component
- **Fix**: Use `Button` with appropriate variant, or accept as intentional chip-style toggle

### m8. No error feedback on kill/killAll
- `src/components/agent-center/ActiveAgents.tsx` — IPC failures are silent
- **Fix**: Add error handling feedback

### m9. History persistence could grow large
- `src/stores/agentStore.ts` persists history with up to 50 entries x 2000 logs each
- **Fix**: In `partialize`, only persist the last 100 log entries per history item

### m10. updateAgentCost is dead code
- `src/stores/agentStore.ts` line 118 — defined but never called
- **Fix**: Either implement cost parsing from stream-json output or remove

### m11. Unused types
- `src/types/agent.ts`: `SelfTestResult` is defined but never used anywhere
- `src/types/agent.ts`: `AgentConfig.fileScope` is defined but never used
- **Fix**: Remove them

### m12. Agent launch return type should be discriminated union
- `src/types/electron.ts` lines 138-143 use optional fields
- **Fix**: Change to `{ ok: true; id: string; model: string; startedAt: number } | { ok: false; error: string }`

### m13. MODEL_COLORS defined inside component body
- `src/components/agent-center/RunHistory.tsx` lines 66-70
- Recreated on every render
- **Fix**: Move to module level

### m14. window.confirm() instead of design-system modal
- `src/components/agent-center/RunHistory.tsx` line 48
- **Fix**: Use Modal from `@components/ui/Modal`

### m15. Console errors array never cleared
- `electron/ipc/selfTestHandlers.ts` — `consoleErrors` grows to 500 but never resets
- **Fix**: Add a `selftest:clear-console-errors` IPC channel

### m16. onNavigate uses removeAllListeners
- `electron/preload.ts` line 99 — removes ALL navigate listeners instead of the specific one
- **Fix**: Store the handler reference and use `removeListener` with it

### m17. No Agent Center in Navigate menu
- `electron/main.ts` — the menu has Cmd+1-4 for Home/Templates/Import/Settings but no entry for Agent Center
- **Fix**: Add Cmd+5 for Agent Center

### m18. icon type too loose
- `src/types/agent.ts` — `icon` field is `string` but only 6 values are valid
- **Fix**: Use literal union: `'bug' | 'alert' | 'paintbrush' | 'package' | 'shield' | 'hammer'`
