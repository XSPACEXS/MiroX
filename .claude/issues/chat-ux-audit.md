# MiroX Chat Interface UX Audit
## Comprehensive Visual & Interaction Design Document

**Date:** March 7, 2026
**Auditor:** UI/UX Specialist
**Status:** DETAILED TEXT MOCKUPS FOR ALL STATES

---

## A. INPUT BAR — IDLE STATE (PER MODE)

### A.1 Chat Mode
```
┌─ Agent Command Center ──────────────────────────────── [Running] [Abort] ─┐
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [Mode Tabs: Chat | Mission | Scan | Debug] [Collapse ⌃]                  │
│  [Config Strip or Panel]                                                   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ CHAT CONTENT AREA (scrollable)                                      │  │
│  │                                                                     │  │
│  │ Recent Sessions:                                                    │  │
│  │ ┌─────────────────────────────────────────────────────────────┐   │  │
│  │ │ 🕐 Recent Sessions                                          │   │  │
│  │ │                                                             │   │  │
│  │ │ Explain the architecture and key patterns                  │   │  │
│  │ │ [done] 2h ago • 1 agent                          [🔄]     │   │  │
│  │ │                                                             │   │  │
│  │ │ Fix the auth bug in login.ts                               │   │  │
│  │ │ [failed] 4h ago • 2 agents                        [🔄]     │   │  │
│  │ │                                                             │   │  │
│  │ │ Add tests for utils/parser.ts                              │   │  │
│  │ │ [done] 5h ago • 1 agent                          [🔄]     │   │  │
│  │ └─────────────────────────────────────────────────────────────┘   │  │
│  │                                                                     │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  ┌──── Quick Actions ────────────────────────────────────────────────────┐ │
│  │ [🔍 Scan Project] [🐛 Fix Bugs] [🧪 Add Tests]                      │ │
│  │ [🔒 Security Audit] [📖 Explain Codebase]                           │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │ Ask about the codebase...                                       [↑] │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│  project: /Users/space/Desktop/MiroX                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Input Bar Dimensions:**
- Border: top 1px solid black-600
- Padding: 12px (p-3)
- Textarea: w-full, rows=1 (initial ~32px height)
- Container: flex items-end gap-2

**Textarea Styling:**
- Background: #1a1a1a (black-700)
- Border: 1px solid #3a3a3a (black-500)
- Border radius: 20px (rounded-xl)
- Text color: white
- Padding: 12px 16px (px-4 py-3)
- Font size: 14px (text-sm)
- Placeholder color: #888 (gray-500)

**Placeholder Text:** "Ask about the codebase..."

**Send Button:**
- Size: 36×36px (w-9 h-9)
- Background: #FFD600 (yellow-400)
- Icon: ArrowUp, 16px, strokeWidth 2.5
- Border radius: 50% (rounded-full)
- Color: #0A0A0A (text-black-900)
- Hover: bg-yellow-300
- Transition: all colors smooth
- Aria label: "Send message"

**Focus Ring:**
- On focus: 2px ring of yellow-400/50
- Border also becomes yellow-400/50

**Project Path Display:**
- Below textarea, text-xs, gray-500, mt-1, px-1
- Format: "project: /Users/space/Desktop/MiroX"
- If no project: "No project set"
- NOT clickable, NOT interactive, display only

**Keyboard Shortcut:**
- Cmd+Enter sends message
- NOT displayed as hint anywhere visible

---

### A.2 Mission Mode
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Config Strip]                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ CHAT CONTENT AREA (empty or previous missions)                  │  │
│  │                                                                 │  │
│  │                 ∙ ∙ ∙                                          │  │
│  │  Describe your mission and press ⌘⏎ to launch                  │  │
│  │                 ∙ ∙ ∙                                          │  │
│  │                                                                 │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌──── Quick Actions (Mission-specific) ──────────────────────────────┐ │
│  │ [🐛 Fix Bugs] [🧪 Add Tests] [🔨 Refactor] [🔒 Security Audit]  │ │
│  │ [⚡ Performance Audit]                                            │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ Describe your mission...                                    [↑] │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│  project: /Users/space/Desktop/MiroX                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Placeholder Text:** "Describe your mission..."

**Hint in Chat Area (when empty):**
- Centered, light gray text, text-sm
- "Describe your mission and press ⌘⏎ to launch"

**Quick Actions (Mission Mode Only):**
1. [🐛 Fix Bugs] → Sets input to "Find and fix all bugs, type errors, and broken functionality."
2. [🧪 Add Tests] → Sets input to "Write comprehensive tests for all untested code."
3. [🔨 Refactor] → NOT IMPLEMENTED YET (suggested: "Refactor code for clarity and performance")
4. [🔒 Security Audit] → Sets input to "Perform a comprehensive security audit for OWASP top-10 vulnerabilities."
5. [⚡ Performance Audit] → NOT IMPLEMENTED YET (suggested: "Optimize performance bottlenecks")

**Expected behavior:** Clicking quick action pre-fills textarea and does NOT auto-submit.

---

### A.3 Scan Mode
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Config Strip]                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ CHAT CONTENT AREA (empty)                                       │  │
│  │                                                                 │  │
│  │                 ∙ ∙ ∙                                          │  │
│  │  Press ⌘⏎ or click Scan Project to begin                       │  │
│  │                 ∙ ∙ ∙                                          │  │
│  │                                                                 │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌──── Quick Actions (Scan-specific) ────────────────────────────────┐ │
│  │ [🔍 Full Scan] [⚡ Quick Scan] [🔒 Security Only]                │ │
│  │ [📘 Type Safety Only]                                            │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ Customize scan focus or press ⌘⏎...                         [↑] │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│  project: /Users/space/Desktop/MiroX                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Placeholder Text:** "Customize scan focus or press ⌘⏎..."

**CRITICAL BEHAVIOR:** In scan mode, submitting with empty text still works.
- Line 52 of ChatInputBar.tsx: `if (!text && mode !== 'scan') return`
- So empty submit IS allowed in scan mode
- Runs `runProjectScan(config)` which ignores text anyway
- Send button should be always enabled in scan mode

**Hint in Chat Area (when empty):**
- "Press ⌘⏎ or click Scan Project to begin"

**Quick Actions (Scan Mode Only):**
1. [🔍 Full Scan] → NOT IMPLEMENTED (would customize scan depth)
2. [⚡ Quick Scan] → NOT IMPLEMENTED (quick/light scan)
3. [🔒 Security Only] → NOT IMPLEMENTED (focus scan on security)
4. [📘 Type Safety Only] → NOT IMPLEMENTED (focus on TS errors)

**Current implementation:** Only "Scan Project" quick action exists globally.

---

### A.4 Debug Mode
```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Config Strip]                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ CHAT CONTENT AREA (empty)                                       │  │
│  │                                                                 │  │
│  │                 ∙ ∙ ∙                                          │  │
│  │  Paste an error message to start debugging                      │  │
│  │                 ∙ ∙ ∙                                          │  │
│  │                                                                 │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌──── Quick Actions (Debug-specific) ────────────────────────────────┐ │
│  │ [📋 Check Console] [🧪 Run Tests] [🔍 Trace Error]              │ │
│  │ [🔄 Reproduce Issue]                                             │ │
│  └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │ Paste an error or describe the bug...                       [↑] │  │
│  │                                                                 │  │
│  │                                                                 │  │
│  │                                                                 │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│  project: /Users/space/Desktop/MiroX                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Placeholder Text:** "Paste an error or describe the bug..."

**Hint in Chat Area (when empty):**
- "Paste an error message to start debugging"

**Quick Actions (Debug Mode Only):**
1. [📋 Check Console] → NOT IMPLEMENTED (launch with console logs)
2. [🧪 Run Tests] → NOT IMPLEMENTED (run test suite)
3. [🔍 Trace Error] → NOT IMPLEMENTED (trace through code)
4. [🔄 Reproduce Issue] → NOT IMPLEMENTED (reproduce the bug)

**Default textarea height:** Could be taller by default (multiline with ~3-4 visible rows initially) to accommodate large error traces, but currently is rows=1 and auto-grows. **RECOMMENDATION:** Keep rows=1 but maybe hint that it expands.

**Send button:** Enabled always (debug mode doesn't have empty-text restrictions).

---

## B. INPUT BAR — TYPING STATE

### B.1 Textarea Auto-Growth
```
INITIAL (1 row):
┌─────────────────────────────────────────────────────────────────────┐
│ Ask about the codebase...                                       [↑] │
└─────────────────────────────────────────────────────────────────────┘

AFTER ONE LINE OF TEXT:
┌─────────────────────────────────────────────────────────────────────┐
│ Explain the architecture and design patterns of this codebase  [↑] │
└─────────────────────────────────────────────────────────────────────┘

AFTER TWO LINES:
┌─────────────────────────────────────────────────────────────────────┐
│ Explain the architecture and design patterns of this codebase,  [↑] │
│ focusing on module boundaries and dependency injection        [↑] │
└─────────────────────────────────────────────────────────────────────┘

AFTER FOUR LINES (approaching max):
┌─────────────────────────────────────────────────────────────────────┐
│ Explain the architecture and design patterns of this codebase,  [↑] │
│ focusing on module boundaries and dependency injection.        [↑] │
│ Identify any circular dependencies and suggest refactoring    [↑] │
│ priorities. Also explain the state management strategy.       [↑] │
└─────────────────────────────────────────────────────────────────────┘

AFTER SIX LINES (MAX REACHED, STARTS SCROLLING):
┌─────────────────────────────────────────────────────────────────────┐
│ ↑ Identify any circular dependencies and suggest refactoring    [↑] │
│ priorities. Also explain the state management strategy.            │
│ How should we optimize the bundle size?                            │
│ Should we add more type guards?                                    │
│ Is the current folder structure optimal?                           │
│ What's the testing strategy?                                   [↑] │
└─────────────────────────────────────────────────────────────────────┘
```

**Auto-grow algorithm (ChatInputBar.tsx:26-31):**
```typescript
const autoResize = useCallback(() => {
  const el = textareaRef.current
  if (!el) return
  el.style.height = 'auto'  // Reset to natural height
  const maxHeight = 6 * 24  // 144px (6 lines × 24px line-height)
  el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`
}, [])
```

**Behavior:**
- Initial rows=1 (~32px with padding)
- On each keystroke, resets height to 'auto', measures scrollHeight
- Caps at 144px (6 lines)
- When content exceeds 6 lines, textarea scrolls internally (overflow-y: auto)
- Focus ring and borders adjust dynamically

**Max Height:** 144px exactly
**Line Height:** ~24px per line
**Max Lines:** 6 visible lines
**Overflow:** Internal scroll (not page scroll)

---

### B.2 Character Count & Word Count

**CURRENT IMPLEMENTATION:** None.

**RECOMMENDATION:**
- No visual counter currently shown
- Consider: When textarea has 500+ characters, show subtle counter in bottom right
- Format: "450/1000 chars" or just "450 chars"
- Style: text-xs, gray-600, position absolute bottom-2 right-2

---

### B.3 Cmd+Enter vs Enter Behavior

**Current behavior (ChatInputBar.tsx:43-47):**
```typescript
function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
  if (e.key === 'Enter' && e.metaKey) {  // Cmd+Enter on Mac, Ctrl+Enter on Windows
    e.preventDefault()
    handleSubmit()
  }
}
```

**CRITICAL:** Raw `Enter` does NOT submit. Only Cmd+Enter (metaKey) submits.
- This means Enter creates a newline and grows the textarea
- Cmd+Enter is the only way to send

**UX Issue #1:** No visual indication that Cmd+Enter is required.
- Placeholder in mission/scan modes says "press ⌘⏎" but chat/debug don't mention it
- New users might spam Enter and get frustrated

**UX Issue #2:** No hint displayed next to send button
- Could add small kbd-style hint: "⌘⏎" aligned right inside the textarea (very subtle, text-xs, gray-600)
- Or tooltip on send button showing "Cmd+Enter"

**Paste Behavior:**
- Pasting large amounts of text (e.g., stack traces, code blocks) works fine
- Auto-grow handles it up to 6 lines
- Beyond that, internal scroll kicks in
- Images are NOT handled (paste image → nothing happens)

---

## C. INPUT BAR — STREAMING STATE

### C.1 Disabled Textarea Appearance
```
WHEN STREAMING:
┌─────────────────────────────────────────────────────────────────────┐
│ (Read-only, 50% opacity)                                        [⬛] │
│ Previous message still visible above                                 │
└─────────────────────────────────────────────────────────────────────┘
```

**Disabled styling (ChatInputBar.tsx:74):**
```jsx
disabled={isStreaming}
className="... disabled:opacity-50"
```

**Effect:**
- Input is completely disabled (cannot type)
- Textarea becomes 50% opacity (grayed out, indicates disabled state)
- Border and text color are darkened automatically
- Cursor is not-allowed (OS default disabled cursor)
- User cannot interact with the textarea

---

### C.2 Stop Button (Red Circle)
```
┌─────────────────────────────────────────────────────────────────────┐
│ (disabled textarea)                                             [⬛] │
└─────────────────────────────────────────────────────────────────────┘
```

**Stop button styling (ChatInputBar.tsx:77-83):**
```jsx
<button
  onClick={handleStop}
  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
  aria-label="Stop streaming"
>
  <Square size={14} />  // Red stop square icon
</button>
```

**Dimensions:** 36×36px (w-9 h-9)
**Background:** red-500/20 (transparent red, 20% opacity)
**Icon:** Square (stop icon), 14px, red-400 color
**Hover:** bg-red-500/30 (slightly more opaque)
**Border radius:** 50% (rounded-full)
**Aria label:** "Stop streaming"

**Behavior on click:**
- Calls `cancelStream()` from chatService
- Calls `window.electronAPI.agent.kill(agentId)` to terminate the running agent
- Sets `isStreaming = false` immediately
- Textarea becomes enabled again

---

### C.3 No "AI is Responding..." Message

**CURRENT:** The input bar shows nothing special during streaming. No text like "AI is responding..." or "Generating response...".

**Instead:**
- ChatContent area shows "Thinking..." indicator initially (ThinkingIndicator component)
- As response streams in, the thinking message updates with accumulated output
- User sees the response being built in real-time in the chat area above

**RECOMMENDATION:** This is fine. The chat area provides context. No need to add text to input bar.

---

### C.4 Can User Queue Messages While Streaming?

**CURRENT:** No. The textarea is disabled during streaming.

**Expected behavior:** User cannot queue messages. They must stop the current response and then send another message. This is intentional to prevent message queueing issues.

---

## D. INPUT BAR — MODE-SPECIFIC BEHAVIOR

### D.1 Button Labeling
```
CHAT MODE:          MISSION MODE:        SCAN MODE:           DEBUG MODE:
[↑] Send            [↑] Send             [↑] Send             [↑] Send
```

**CURRENT:** All modes show just the arrow icon (ArrowUp, 16px).

**UX Issue:** Button doesn't change labels per mode. Consider:
- Mission: Maybe "↑ Launch" instead of just ↑
- Scan: Maybe "↑ Scan" instead of just ↑
- Debug: Maybe "↑ Analyze" instead of just ↑

**RECOMMENDATION:** Currently icon-only is clean and consistent. If changing, use tooltips on hover rather than changing the button label, since space is tight.

---

### D.2 Empty Text Submission Rules

**CHAT MODE:**
- Empty text cannot be submitted
- Send button disabled for empty input
- Line 52: `if (!text && mode !== 'scan') return`

**MISSION MODE:**
- Empty text cannot be submitted
- Must provide mission description

**SCAN MODE:**
- Empty text CAN be submitted (special case)
- "Scan Project" quick action sends empty text
- Line 52: `if (!text && mode !== 'scan') return` (skips return for scan)
- Allows customization but also allows direct scan with no custom focus

**DEBUG MODE:**
- Empty text cannot be submitted
- Must provide error or bug description

---

### D.3 Textarea Height Defaults

**CURRENT:** All modes use rows=1 (single line initially).

**RECOMMENDATION FOR DEBUG MODE:**
- Consider defaulting to rows=3 or rows=4 to make it clear that large stack traces are expected
- Would make it feel more welcoming for pasting big error blocks
- But might waste space in other modes

**Recommended compromise:** Keep rows=1 for all, but add tooltip on the textarea or nearby that says "Paste or describe errors. Text expands up to 6 lines."

---

### D.4 No File Attachment/Upload Button

**CURRENT:** No file picker, no attachment button, no image upload.

**MISSING UX:** Users might expect to attach files (especially in debug mode).

**Current workaround:** User must paste text content or code directly.

**RECOMMENDATION:**
- Add a paperclip icon button next to send button?
- Or allow file drag-drop into textarea?
- Or just document in help that files can't be attached via UI?

**For MVP:** Probably skip this. The chat modes (chat, mission, scan, debug) all work with text prompts and code reading via AI tools.

---

## E. QUICK ACTIONS ROW

### E.1 Buttons Layout & Styling
```
┌──────────────────────────────────────────────────────────────────────┐
│ [🔍 Scan Project] [🐛 Fix Bugs] [🧪 Add Tests] [🔒 Security Audit] │
│ [📖 Explain Codebase]                                                │
└──────────────────────────────────────────────────────────────────────┘
```

**Container (QuickActions.tsx:60):**
- `flex flex-wrap gap-2 px-4 py-2`
- Wraps horizontally, flows to next line if needed
- Gap between buttons: 8px

**Button styling (QuickActions.tsx:65):**
```jsx
className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black-700 border border-black-600 hover:border-yellow-400/30 hover:bg-yellow-400/5 text-xs text-gray-400 hover:text-gray-200 transition-colors"
```

**Button dimensions:**
- Height: ~28-32px (py-1.5 = 6px top+bottom + line-height)
- Padding: 12px left/right (px-3), 6px top/bottom (py-1.5)
- Font size: 12px (text-xs)

**Colors:**
- Background: black-700 (#1a1a1a)
- Border: black-600 (#2a2a2a)
- Text: gray-400 (#888)
- Icon: gray-400

**On hover:**
- Border: yellow-400/30 (subtle yellow border)
- Background: yellow-400/5 (barely visible yellow wash)
- Text: gray-200 (lighter gray)
- Icon: lighter gray

**Gap between icon and label:** 6px (gap-1.5)

**Icon size:** 12px (Lucide icons, size={12})

---

### E.2 Which Quick Actions Per Mode?

**CURRENT IMPLEMENTATION:**
All 5 actions show regardless of mode:
1. Scan Project (icon: Search, mode: scan)
2. Fix Bugs (icon: Bug, mode: mission)
3. Add Tests (icon: FlaskConical, mode: mission)
4. Security Audit (icon: Shield, mode: mission)
5. Explain Codebase (icon: BookOpen, mode: chat)

**ISSUE:** Quick actions don't change based on current mode. All 5 always show.

**EXPECTED BEHAVIOR:**
- Chat mode: Explain Codebase, Scan Project, maybe one more
- Mission mode: Fix Bugs, Add Tests, Security Audit, maybe Refactor + Perf Audit
- Scan mode: Only Scan Project, or variant scans
- Debug mode: Debug-specific actions

**UX Problem:** Too many buttons if every mode shows the same 5. Users might get confused.

**RECOMMENDATION:** Filter quick actions by current mode.

```typescript
// In QuickActions.tsx
const actions: QuickAction[] = mode === 'chat'
  ? [
      { label: 'Explain Codebase', ... },
      { label: 'Scan Project', ... },
    ]
  : mode === 'mission'
  ? [
      { label: 'Fix Bugs', ... },
      { label: 'Add Tests', ... },
      { label: 'Security Audit', ... },
      // { label: 'Refactor', ... },
      // { label: 'Performance Audit', ... },
    ]
  : mode === 'scan'
  ? [
      { label: 'Full Scan', ... },
      // { label: 'Quick Scan', ... },
      // { label: 'Security Only', ... },
    ]
  : [
      // Debug-specific actions
      { label: 'Trace Error', ... },
      { label: 'Check Console', ... },
    ]
```

---

### E.3 When Quick Actions Disappear

**Current behavior (ChatPanel.tsx:90):**
```typescript
const showQuickActions = messages.length === 0 || !isStreaming
```

**Logic:**
- Show quick actions if chat is empty (messages.length === 0)
- Show quick actions if NOT currently streaming
- Hide quick actions if any messages exist AND streaming

**CORRECT INTERPRETATION:**
- On first load (empty chat): Quick actions visible
- After first user message sent: Quick actions DISAPPEAR (messages.length > 0)
- While streaming: Quick actions hidden
- After streaming completes: Quick actions still hidden (because messages exist)

**UX Note:** Once you send a message, quick actions never reappear. This might be intentional to keep the interface clean, but users can't easily jump to preset actions later.

**RECOMMENDATION:** Maybe show quick actions again when chat is cleared, or add a "Reset" button to clear chat and re-show quick actions.

---

### E.4 Handler Behavior

**When clicking a quick action (QuickActions.tsx:64):**

1. **Scan Project:**
   - Sets mode to 'scan'
   - Calls `runProjectScan(config)` immediately
   - Does NOT pre-fill input
   - Launches scan right away

2. **Fix Bugs, Add Tests, Security Audit, Explain Codebase:**
   - Sets mode appropriately
   - Pre-fills textarea with a helpful prompt
   - Does NOT submit automatically
   - User must press Cmd+Enter to send

**Current pre-fill texts:**
- Fix Bugs: "Find and fix all bugs, type errors, and broken functionality."
- Add Tests: "Write comprehensive tests for all untested code."
- Security Audit: "Perform a comprehensive security audit for OWASP top-10 vulnerabilities."
- Explain Codebase: "Explain the architecture and key patterns of this codebase."

**UX Note:** Scan Project is special because it works without text input. Others require user confirmation (Cmd+Enter).

---

## F. RECENT SESSIONS / WELCOME SCREEN

### F.1 Welcome/First-Load Screen

**When app first opens (empty chat, chat mode selected):**

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                 🕐 Recent Sessions                                  │
│                                                                     │
│                                                                     │
│                No past sessions yet.                               │
│            Start by chatting or launching a mission.               │
│                                                                     │
│                                                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Icon:** History icon (lucide-react), 28px, text-gray-600

**Heading text:** "No past sessions yet."

**Subtext:** "Start by chatting or launching a mission."

**Font sizes:**
- Heading: text-sm, text-gray-500
- Subtext: text-xs, text-gray-600, mt-1

**Alignment:** Center, flex items-center justify-center py-12 text-center

**No bot avatar, no welcome message beyond the above text.**

---

### F.2 Recent Sessions List

**When missionHistory has entries (RecentSessions.tsx):**

```
┌───────────────────────────────────────────────────────────────────┐
│ 🕐 Recent Sessions                                                │
│                                                                   │
│ ┌─────────────────────────────────────────────────────────────┐  │
│ │ Explain the architecture and key patterns                   │  │
│ │ [done] 2h ago • 1 agent                           [🔄]     │  │
│ └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│ ┌─────────────────────────────────────────────────────────────┐  │
│ │ Fix the auth bug in login.ts (truncated if long...)         │  │
│ │ [failed] 4h ago • 2 agents                       [🔄]     │  │
│ └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
│ ┌─────────────────────────────────────────────────────────────┐  │
│ │ Add tests for utils/parser.ts                              │  │
│ │ [done] 5h ago • 1 agent                           [🔄]     │  │
│ └─────────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────────┘
```

**Header:**
- Icon: History, 12px
- Text: "Recent Sessions", text-xs, font-medium, text-gray-400

**Entry container:**
- Background: black-800/50
- Border: 1px solid black-600
- Border radius: rounded-xl
- Padding: p-3
- Hover: border becomes black-500
- Transition: smooth

**Entry layout:**
- Grid: icon area + flex-1 content + action button
- Gap: 12px (gap-3)

**Prompt text:**
- Font size: text-xs
- Color: text-gray-200
- Truncate: truncate (overflow hidden, text-overflow ellipsis, white-space nowrap)

**Status + metadata row:**
- Font size: text-[10px]
- Gap: gap-2
- Padding top: mt-1

**Status badge:**
- Padding: px-1.5 py-0.5
- Border radius: rounded-full
- Font weight: font-medium
- Colors depend on status:
  - **done:** text-green-400, bg-green-400/10
  - **failed:** text-red-400, bg-red-400/10
  - **aborted:** text-orange-400, bg-orange-400/10
  - **default:** text-gray-400, bg-gray-400/10

**Time ago text:**
- Color: text-gray-600
- Examples: "just now", "2m ago", "1h ago", "3d ago"

**Agent count:**
- Format: "1 agent" or "2 agents"
- Color: text-gray-600

**Relaunch button (rightmost):**
- Icon: RotateCcw, 14px
- Background: transparent, hover bg-yellow-400/10
- Text color: text-gray-500, hover text-yellow-400
- Padding: p-1.5
- Border radius: rounded-lg
- Aria label: "Relaunch mission"
- Only shown if `entry.prompt` exists (not empty)

**Click behavior:**
- Clicking entry area: Does NOT do anything (no click handler)
- Clicking relaunch button: Calls `handleRelaunch(entry.prompt)`
  - Sets mode to 'mission'
  - Pre-fills textarea with the original prompt
  - User must press Cmd+Enter to re-launch

---

### F.3 Session Entry Data Format

**Data from missionHistory (one entry):**
```typescript
{
  id: string                 // Unique ID
  prompt: string             // User's original prompt (truncated to 1 line in UI)
  status: 'done' | 'failed' | 'aborted' | 'in-progress'
  startedAt: number          // Timestamp
  agentCount: number         // Number of agents used
  completedAt?: number       // When it finished
  filesChanged?: number      // How many files were modified
  qualityScore?: number      // 0-100 rating
}
```

**Display logic:**
- Prompt: First line only (truncate)
- Status: Colored badge
- Time: "timeAgo()" function converts timestamp to relative text
- Agents: "X agent(s)"
- No file count shown in UI currently

---

### F.4 "What Can I Do?" Section

**CURRENT:** No "What can I do?" or "Examples" section.

**RECOMMENDATION:** Could add below empty state or next to quick actions:
```
┌──────────────────────────────────────────────────────────────────┐
│ Try asking:                                                      │
│ • "Explain the project structure"                               │
│ • "Find potential bugs"                                          │
│ • "Write tests for main.ts"                                     │
│ • "What are the performance bottlenecks?"                       │
└──────────────────────────────────────────────────────────────────┘
```

Would help new users understand the AI's capabilities.

---

## G. PAGE HEADER INTEGRATION

### G.1 Full Page Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Header: Agent Command Center page                                       │
│  [Wrench icon]  Agent Command Center                                    │
│                 Launch AI agents, monitor progress, and test the app    │
│                                                                 [Abort]  │
│                                           [Running agents] [1 agent] 🟢 │
│ Gap: 16px                                                               │
├─────────────────────────────────────────────────────────────────────────┤
│ Main Content Area (flex flex-col h-full):                              │
│                                                                         │
│  ┌────────────────── Chat Panel ──────────────────┐                   │
│  │ [Mode Tabs: Chat | Mission | Scan | Debug]    │                   │
│  │ [Config Strip]                                │                   │
│  │ ┌──────────────────────────────────────────┐  │                   │
│  │ │ Chat Content (flex-1, scrollable)        │  │                   │
│  │ │                                          │  │                   │
│  │ │ [Messages rendered here]                 │  │                   │
│  │ └──────────────────────────────────────────┘  │                   │
│  │ [Quick Actions]                               │                   │
│  │ [Input Bar]                                   │                   │
│  │ project: /Users/space/Desktop/MiroX           │                   │
│  └────────────────────────────────────────────────┘                   │
│                                                                         │
│  [Celebration Overlay when mission completes]                         │
│  [ReStyle Wizard when open]                                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Page Container:**
- flex flex-col h-full p-6 gap-4
- Padding on all sides: 24px

**Header:**
- flex items-center gap-3
- Icon box: w-10 h-10, bg-yellow-400/10, rounded-xl
- Icon: Wrench, 22px, yellow-400
- Title: h1, font-display, font-bold, text-3xl, text-white
- Subtitle: p, text-sm, text-gray-400, mt-0.5
- Right side (conditionally):
  - Running agent indicator (animated green dot + text)
  - Abort button (if mission in progress)

**Chat Panel:**
- flex flex-col h-full rounded-2xl border border-black-600 bg-black-800/40
- Overflow: hidden

**Height:** The panel takes up all remaining space (flex-1 on parent, h-full on panel)

---

### G.2 Header State: Idle (No Mission)

```
┌─────────────────────────────────────────────────────────────────────┐
│ [🔧] Agent Command Center                                           │
│     Launch AI agents, monitor progress, and test the app            │
└─────────────────────────────────────────────────────────────────────┘
```

- Icon visible
- Title visible
- Subtitle visible
- NO running indicator
- NO abort button

---

### G.3 Header State: Mission Running

```
┌──────────────────────────────────────────────────────────────────────┐
│ [🔧] Agent Command Center                                            │
│     Launch AI agents, monitor progress, and test the app             │
│                                                  🟢 2 agent(s) running│
│                                                          [Abort] [✕] │
└──────────────────────────────────────────────────────────────────────┘
```

**Running indicator:**
- Position: ml-auto (right side)
- Display: flex items-center gap-2
- Icon: Animated green dot (w-2 h-2, bg-green-400, animate-ping opacity-75)
- Text: text-xs text-green-400
- Format: "X agent(s) running"

**Abort button:**
- ml-2 (gap from indicator)
- variant="secondary", size="sm"
- Icon: Octagon, 14px
- Text: "Abort Mission"
- onClick: handleAbort
- Only shown if `pageState !== 'idle' && pageState !== 'done'`

**Running agent dot animation:**
```jsx
<div className="relative">
  <div className="w-2 h-2 rounded-full bg-green-400" />  // Static dot
  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-75" />  // Pulsing overlay
</div>
```

---

### G.4 Header State: Mission Complete

```
┌──────────────────────────────────────────────────────────────────────┐
│ [🔧] Agent Command Center                                            │
│     Launch AI agents, monitor progress, and test the app             │
└──────────────────────────────────────────────────────────────────────┘
```

- Running indicator disappears
- Abort button disappears
- Celebration overlay shows in background
- User can dismiss celebration and continue chatting

---

### G.5 Mode & Model Indicator

**CURRENT:** No mode or model indicator in the header.

**RECOMMENDATION:** Could show in header or in a small chip near the tabs:
- Current mode badge: "Chat" | "Mission" | "Scan" | "Debug"
- Current primary model: "Sonnet", "Opus", "Haiku"
- Example: [Chat] [Sonnet]

Would help users know what they're working with without looking at the tab bar.

---

## H. OVERALL LAYOUT & SPACING

### H.1 Full Page Dimensions

**Electron window (macOS hiddenInset titlebar):**
- Full screen recommended
- Minimum width: 800px (chat panel gets cramped below this)
- Minimum height: 600px

**Page padding:** 24px on all sides (p-6)

**Header height:** ~100px (icon + title + subtitle + gap)

**Chat panel:** Takes remaining space (grows with window)

---

### H.2 Chat Panel Internal Layout

```
┌────────────────────────────────────────────────┐
│ [ModeTabBar] Height ~40px                      │
├────────────────────────────────────────────────┤
│ [ConfigStrip or ConfigPanel]                   │
├────────────────────────────────────────────────┤
│ [ChatContent] flex-1 (grows to fill)           │
│                                                │
│                                                │
│                                                │
├────────────────────────────────────────────────┤
│ [QuickActions] Height ~40px                    │
├────────────────────────────────────────────────┤
│ [ChatInputBar] Height ~60-150px (varies)       │
└────────────────────────────────────────────────┘
```

**ModeTabBar:** Height ~40px, sticky tab selector

**ConfigStrip/Panel:**
- Strip: ~40px (compact mode)
- Panel: ~150-200px (expanded mode, full settings)
- Toggle via ConfigPanel's collapse button

**ChatContent:** flex-1, grows to fill available space

**QuickActions:** Conditional, ~40px when shown

**ChatInputBar:** ~60-90px initially, grows up to ~150px with text

---

### H.3 Mobile / Small Window Behavior

**CURRENT:** No responsive design. Layout assumes wide screen.

**Recommendations for small windows (<800px):**
- Sidebar (if exists) should collapse or drawer mode
- Chat panel stays full-width
- Input bar text might wrap awkwardly (but grows correctly)
- Header might stack vertically

**For this audit:** Assume desktop only, no mobile optimization needed.

---

## I. KEYBOARD NAVIGATION & ACCESSIBILITY

### I.1 Keyboard Shortcut Map

| Shortcut | Action | Mode |
|----------|--------|------|
| Cmd+Enter | Send message | All modes |
| Escape | Close config panel (if open) | All modes |
| Escape | Cancel streaming (optional) | While streaming |
| Tab | Cycle through form fields | All modes |
| Shift+Tab | Cycle backwards | All modes |
| Enter | In textarea: new line | All modes |
| Cmd+K | Clear chat history (optional) | All modes |
| Cmd+? | Show keyboard help (optional) | All modes |
| Up arrow | Edit last message (optional) | Chat only |
| Cmd+1 | Switch to Chat mode (optional) | All modes |
| Cmd+2 | Switch to Mission mode (optional) | All modes |
| Cmd+3 | Switch to Scan mode (optional) | All modes |
| Cmd+4 | Switch to Debug mode (optional) | All modes |

**CURRENT IMPLEMENTATION:**
- Cmd+Enter: YES (working)
- Escape: NO (not implemented)
- Tab: Default browser behavior (should work)
- Others: All NO

**RECOMMENDATIONS:**
- Implement Escape to cancel streaming (better UX)
- Implement Cmd+K to clear chat
- Consider Cmd+1-4 for mode switching (power users)
- Document Cmd+Enter in placeholder text or tooltips

---

### I.2 Focus Management

**Tab order (expected):**
1. Mode tabs
2. Config collapse/expand button
3. Config fields (if expanded)
4. Textarea
5. Send/Stop button
6. Quick action buttons (if visible)

**Current implementation:** Default tab order should work, but not explicitly tested.

**Recommendation:** Audit with screen reader, ensure focus is visible (yellow ring present), and tab order makes sense.

---

### I.3 ARIA Labels

**Current ARIA attributes:**
- Input bar send button: `aria-label="Send message"`
- Input bar stop button: `aria-label="Stop streaming"`
- Quick action buttons: No aria-labels
- Recent sessions relaunch: `aria-label="Relaunch mission"`

**Missing:**
- ModeTabBar: No aria-label on tabs or role="tablist"
- ChatContent: No aria-live region for new messages (should be live=polite)
- ConfigStrip/Panel: No aria-labels on form fields
- Quick actions: Should have aria-labels

**Recommendations:**
- Add `aria-label` to quick action buttons
- Add `role="tablist"` and `role="tab"` to mode tabs
- Add `aria-live="polite"` to chat message area
- Ensure form fields have associated labels or aria-labels

---

### I.4 Focus Indicators

**Current focus ring:**
- Textarea: 2px ring-yellow-400/50 on focus
- Buttons: Default browser outline (browser's blue ring)

**Issue:** Buttons don't have the yellow ring like textarea.

**Recommendation:**
```css
button:focus-visible {
  outline: 2px solid #FFD600;
  outline-offset: 2px;
}
```

Apply to all buttons for consistency.

---

## J. ERROR STATES & EDGE CASES

### J.1 Agent Launch Failure

**When `api.agent.launch()` returns `!ok`:**

```
User sends message:
├── "Thinking..." appears
├── Agent launch fails (network issue, API error, etc.)
└── Message replaced with error:
    "Failed to launch agent: Connection timeout"
    Status: error (red icon)
```

**Current behavior (chatService.ts:51-60):**
```typescript
if (!result.ok) {
  store.replaceLastThinking({
    id: thinkingId,
    role: 'assistant',
    type: 'error',
    mode: 'chat',
    content: `Failed to launch agent: ${result.error}`,
    timestamp: Date.now(),
  })
  return
}
```

**Visual:** Error message shows inline in chat with error styling.

**User experience:** Clear error message, user can try again. Input bar is already enabled for next message.

---

### J.2 Project Directory Not Set

**When `config.projectDir === null`:**

- Indicator shows: "No project set" (instead of project path)
- Agent still launches, but prompts include: "No project directory is set."
- Agent can still read files if user provides full paths in mission

**UX Issue:** User should be guided to set a project before using advanced features.

**Recommendation:**
- Show warning banner if no project set in mission/scan modes
- Or disable quick actions that require a project
- Or show guided onboarding to set project

---

### J.3 Electron API Not Available

**When `window.electronAPI` is undefined:**

- All chat operations will fail
- Launch buttons won't work
- No error boundary currently

**Recommendation:** Add error boundary around ChatPanel that catches this and shows friendly message: "Please reload the app. Electron API is not available."

---

### J.4 Network Timeout During Streaming

**When agent stops responding mid-stream:**

- Accumulated output pauses
- No automatic retry
- User must click Stop button
- User can then try again

**Recommended enhancement:**
- Add timeout handler (if no output for 10+ seconds, show "Connection lost, please retry")
- Auto-stop after 5 minutes of inactivity
- Show network status indicator

---

### J.5 Very Long Messages

**User pastes 10,000 lines of code:**

- Textarea grows to 144px (max)
- Internal scroll handles the rest
- Submission works fine
- Agent receives full text

**Visual:** No truncation warning, but scroll bar indicates there's more.

**Recommendation:** Show character count when exceeding 2000 chars (e.g., "2,450 / 5,000 chars").

---

### J.6 Empty Responses from AI

**When agent returns no output:**

- replaceLastThinking sets content to: "No response received." (chat mode) or similar per mode
- Message shows as text type (not error)

**Current messages:**
- Chat: "No response received."
- Debug: "No analysis produced."
- Scan: "Scan produced no output."

---

### J.7 Mission Streaming State

**When in mission mode and streaming:**

- Input bar disabled
- Stop button shows
- User can abort
- If abort: mission cancels, agents terminate
- Chat shows: (updates from orchestrator via missionAdapter)

**No special edge cases noted.**

---

## K. DETAILED INTERACTION FLOWS

### K.1 "Ask About Codebase" Flow

```
1. User enters app (chat mode, empty)
   → Sees "Recent Sessions" and quick actions
   → Sees placeholder: "Ask about the codebase..."

2. User types: "What is the purpose of the Settings page?"
   → Textarea expands if needed
   → Send button stays enabled (yellow)

3. User presses Cmd+Enter
   → Input bar clears
   → User message appears in chat
   → "Thinking..." indicator shown
   → Agent launches with chat prompt

4. Agent streams response
   → Input bar disabled (grayed, 50% opacity)
   → Stop button visible (red)
   → Response accumulates in chat

5. Agent finishes
   → Input bar enabled again
   → Stop button hidden, send button visible
   → Full response shown
   → Quick actions hidden (messages exist now)

6. User asks follow-up: "Which components use Redux?"
   → Input bar re-enabled, can type
   → Same flow repeats
```

---

### K.2 "Fix Bugs" Mission Flow

```
1. User clicks "Fix Bugs" quick action
   → Mode switches to mission
   → Textarea pre-filled: "Find and fix all bugs, type errors, and broken functionality."
   → Cursor in textarea, ready to edit

2. User can:
   a) Press Cmd+Enter to send as-is
   b) Modify text and press Cmd+Enter
   c) Clear and write custom mission

3. User presses Cmd+Enter
   → Input bar clears
   → User message appears
   → Config locked (cannot change project/model during mission)
   → "Planning..." phase starts

4. Orchestrator creates plan
   → Plan message shown in chat
   → Agents spawned

5. Agents execute
   → Progress messages show (active agents, completed tasks)
   → Input bar still disabled
   → Stop button visible

6. Mission completes
   → "Mission Complete" message with summary
   → Celebration overlay appears
   → Input bar enabled
   → User can dismiss overlay and chat more

7. User can relaunch by:
   → Looking in recent sessions
   → Clicking relaunch button
   → Mission pre-filled in textarea
   → Same flow repeats
```

---

### K.3 "Scan Project" Flow

```
1. User clicks "Scan Project" quick action OR switches to scan mode
   → Quick action immediately calls runProjectScan(config)
   → Does NOT pre-fill input
   → Does NOT require user action

2. Scan starts
   → "Scanning project..." message shown
   → Agent launches with scan prompt

3. Agent scans
   → Taxonomy of issues reported (type safety, security, etc.)
   → JSON results parsed and displayed as ScanResultsCard

4. Scan complete
   → Results shown with category breakdown
   → User can review findings
   → Input bar enabled for follow-up questions

5. User can ask: "How do I fix the type safety issues?"
   → Sends as chat message
   → Agent provides guidance
```

---

### K.4 "Debug Error" Flow

```
1. User switches to debug mode
   → Placeholder: "Paste an error or describe the bug..."
   → Hint below: "Paste an error message to start debugging"

2. User pastes stack trace or error:
   ```
   TypeError: Cannot read property 'map' of undefined
     at AgentCenter.tsx:63:15
     at processQueue (index.js:45:21)
   ```

3. User presses Cmd+Enter
   → Input bar clears
   → Error message shown in chat
   → "Analyzing error..." indicator

4. Agent analyzes
   → Reads relevant files
   → Traces root cause

5. Analysis completes
   → DebugAnalysisCard shown with:
     - Root cause explanation
     - Affected files list
     - Suggested fix
     - Optional diff preview

6. User can follow up:
   → Ask for clarification
   → Ask to apply the fix (switches to mission mode)
   → Ask to test the fix
```

---

## L. MISSING FEATURES & RECOMMENDATIONS

| Feature | Priority | Notes |
|---------|----------|-------|
| Keyboard shortcut to clear chat (Cmd+K) | Medium | Would help power users reset conversation |
| Mode-specific quick actions | Medium | Currently all 5 actions show regardless of mode |
| Character count hint | Low | Show when >500 chars, e.g., "450 chars" |
| File attachment/upload | Low | Might be needed later for file-based tasks |
| Escape to cancel streaming | Medium | More intuitive than clicking button |
| Persistent chat history | Medium | Sessions stored but chat content not persisted per session |
| Search past sessions | Low | Filter sessions by keyword |
| Keyboard shortcuts reference | Low | Cmd+? to show help modal |
| "Edit last message" (Up arrow) | Low | Common in chat UIs, saves retyping |
| Mode switcher shortcut (Cmd+1-4) | Low | Quick access to modes |
| Tooltip on send button | Medium | Show "Cmd+Enter to send" on hover |
| Breadcrumb/status bar | Low | Show current state more clearly |
| Dark/light theme toggle | N/A | Already dark-only in design |

---

## M. ACCESSIBILITY CHECKLIST

- [ ] Textarea focus ring is visible (yellow, 2px)
- [ ] Send button focus ring is visible (should be 2px outline, yellow)
- [ ] Stop button focus ring is visible
- [ ] All quick action buttons have focus rings
- [ ] Aria labels on buttons (send, stop, relaunch)
- [ ] Quick action buttons need aria-labels
- [ ] Chat messages have aria-live region (polite)
- [ ] Tab order is logical (tabs → config → textarea → buttons)
- [ ] Mode tabs have role="tablist" and role="tab"
- [ ] Color contrast: yellow-400 on black-900 ✓ (good)
- [ ] Color contrast: gray-500 placeholder on black-700 background ✓ (acceptable)
- [ ] Error messages are readable (red text on black)
- [ ] Loading/thinking indicator is clear
- [ ] Disabled state is visually distinct (50% opacity)
- [ ] No keyboard traps (can tab out of every element)

---

## N. DESIGN SYSTEM CONSISTENCY

### Color Palette (Current)
- **Primary accent:** yellow-400 (#FFD600)
- **Background:** black-900 (#0A0A0A)
- **Dark panel:** black-800/40 or black-700
- **Borders:** black-600
- **Text:** white, gray-400, gray-500, gray-600
- **Success:** green-400
- **Error:** red-400, red-500
- **Warning:** orange-400

### Spacing
- Gap between header and panel: 16px (gap-4)
- Padding inside panel: 12px (p-3)
- Gap between input and project path: 4px (mt-1)
- Button padding: 12px × 6px (px-3 py-1.5)

### Typography
- Display font: Space Grotesk (h1, h2, titles)
- Body font: Inter (normal text, labels)
- Code font: JetBrains Mono (file paths, code)

### Shadows & Borders
- Panels: 1px solid border (black-600)
- No box shadows (flat design)
- Border radius: rounded-xl (20px) for large elements, rounded-full for circular buttons

### Animations
- Message fade in: opacity 0→1, y 12→0, 200ms ease
- Button hover: color transition (smooth)
- Loader animation: ping (CSS keyframes)
- Tab focus: no explicit animation, just color change

---

## O. SUMMARY OF ISSUES FOUND

### Critical Issues
1. **Mode-specific quick actions:** All 5 always show regardless of mode. Should filter by mode.
2. **No keyboard hint for Cmd+Enter:** Users might not know the shortcut exists. Placeholder says it in mission/scan but not chat/debug.

### Medium Issues
3. **No escape key to cancel:** User must click stop button to abort streaming.
4. **Missing quick action handlers:** Refactor, Perf Audit, Scan variants not implemented.
5. **Quick actions disappear after first message:** Might want to show them again or add reset button.
6. **No file project set warning:** Should warn user before launching mission if no project set.

### Low Issues
7. **No character count:** Would be helpful for long prompts.
8. **No file attachment UI:** Might be needed later.
9. **No persistent chat history:** Chats are cleared when navigating.
10. **No keyboard mode switcher:** Cmd+1-4 for quick mode access.
11. **Button labels don't change per mode:** Always just arrow icon, could say "Launch" in mission, "Scan" in scan, etc.

---

## P. FINAL RECOMMENDATIONS

### Must-Do (Ship Blockers)
- Add keyboard hint tooltip/help for Cmd+Enter
- Fix quick actions to be mode-specific
- Implement Escape to cancel streaming

### Should-Do (Next Sprint)
- Add character count when >500 chars
- Show warning if project not set before mission
- Add aria-labels to all interactive elements
- Document keyboard shortcuts (Cmd+? modal)

### Nice-To-Have
- Persistent chat history per session
- Edit last message (Up arrow)
- Mode switcher shortcuts (Cmd+1-4)
- Search past sessions

---

**End of Audit Document**
