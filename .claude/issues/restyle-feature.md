# Re-Style Feature — Complete Build Specification

## PRIORITY ORDER (most critical first, in case you run low on time)

1. Types + Store (foundation everything depends on)
2. ReStyleWizard.tsx modal shell + all 6 step components
3. Wire into AgentLauncher.tsx (the Re-Style button)
4. Typecheck + build must pass
5. Rebuild MiroX.app and copy to Desktop

## What Re-Style Is

A purple-accented button in AgentLauncher that opens a 6-step wizard modal. The user provides design inspiration (screenshots, website URLs, free text), answers a visual style quiz, then Claude + Gemini work together to analyze the codebase and redesign the app's visual identity.

## Visual Reference

The interactive HTML mockup is at `/Users/space/Desktop/MiroX-ReStyle-Mockup.html`. Open it and study every step. Match the visual design closely — dark theme, purple (#A78BFA) accent for Re-Style UI, glass cards, step indicators, etc.

---

## FILE-BY-FILE BUILD PLAN

### File 1: `src/types/restyle.ts`

```typescript
// Define all interfaces:
// - ScanReport: { components, pages, colorTokens, borderRadii, fonts, spacingValues, inconsistencies }
// - InspirationImage: { id, dataUrl, selected, fileName }
// - URLReference: { id, url, title, domain, tags, selected, fetchedHtml? }
// - StyleQuizAnswers: { corners, surfaceEffect, density, animationIntensity, selectedPalette, selectedExtractedColors }
// - StyleProposal: { name, description, tokens (accent, background, surface, etc.), tailwindOverrides, recommended, reasoning }
// - RestyleStep: 1 | 2 | 3 | 4 | 5 | 6
```

### File 2: `src/stores/restyleStore.ts`

Zustand store with immer middleware (follow pattern from `src/stores/agentStore.ts`). State:
```
- currentStep: RestyleStep (default 1)
- isOpen: boolean
- scanReport: ScanReport | null
- scanAgentId: string | null
- isScanRunning: boolean
- inspirationImages: InspirationImage[]
- urlReferences: URLReference[]
- freeTextVision: string
- extractedColors: string[] (hex codes from Gemini)
- quizAnswers: StyleQuizAnswers
- proposals: StyleProposal[]
- selectedProposalIndex: number | null
- isGeneratingProposals: boolean
- applyAgentId: string | null
- isApplying: boolean
- applyProgress: { step: string, done: boolean }[]
```

Actions: setStep, openWizard, closeWizard, setScanReport, addImage, removeImage, toggleImageSelection, addUrl, removeUrl, toggleUrlSelection, setFreeText, setExtractedColors, updateQuizAnswer, setProposals, selectProposal, setApplyProgress, reset.

Do NOT persist this store — no `persist` middleware.

### File 3: `src/components/agent-center/restyle/RestyleIntro.tsx`

Step 1 of the wizard. Shows:
- Centered icon (palette emoji or Paintbrush from lucide)
- Title: "Re-Style MiroX"
- Subtitle: "Show us what you like, and we'll redesign the entire app to match your vision."
- Two badges: "Claude Opus" (yellow) + "Gemini 2.5 Pro" (blue)
- 2x2 grid of flow steps: Scan, Inspire, Choose, Apply
- Purple "Start Design Audit" button

Use existing components: `Button`, `Badge`, `Card` from `@components/ui/`.
Use Framer Motion for entrance animation (see `listItemVariants` from `@design-system/animations`).

### File 4: `src/components/agent-center/restyle/RestyleScan.tsx`

Step 2. The REAL scanning step. When this step mounts:

1. Launch a Claude agent via `window.electronAPI.agent.launch()` with:
   - model: `'haiku'` (fast and cheap for scanning)
   - prompt: A prompt that tells Claude to scan the codebase and output a JSON report
   - allowedTools: `['Read', 'Glob', 'Grep']`

2. Subscribe to agent logs via `useAgentStore` — watch for the agent's stdout
3. Parse the stdout looking for the JSON report (it will be in the logs)
4. Show: spinning ring animation, progress bar, real-time file names from logs
5. Once JSON report is parsed, store it in `restyleStore.setScanReport()`
6. Show stat cards with REAL numbers from the report (components, pages, tokens)
7. "Continue" button to go to Step 3

Important: Use `useEffect` to subscribe to the agent logs. The agent ID is stored in `restyleStore.scanAgentId`. Watch `agentStore.agents` for log updates matching that ID.

### File 5: `src/components/agent-center/restyle/RestyleInspiration.tsx`

Step 3. Three sections:

**A. Screenshot Upload:**
- Drag & drop zone (styled like the mockup — dashed border, upload icon)
- On drop/click, use `window.electronAPI.files.openDialog({ filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp'] }], properties: ['openFile', 'multiSelections'] })` to get file paths
- Read each file with `window.electronAPI.files.readFile(path)` to get base64
- Show as grid of thumbnail cards, click to toggle selection, X to remove
- Max 8 images

**B. Website URLs:**
- Text input + "Add" button
- On add, call `window.electronAPI.files.fetchUrl(url)` to fetch the page HTML
- Parse the HTML string to extract `<title>` text
- Extract domain from URL with `new URL(url).hostname`
- Auto-detect style tags: check fetched HTML for keywords (dark, light, minimal, glass, gradient, etc.)
- Show as list of cards with: domain, title, detected tags, remove button
- Click card to toggle selection
- Optional: double-click opens a preview overlay (Modal with the fetched HTML summary or just the URL info enlarged)

**C. Free Text:**
- Textarea with placeholder: "e.g. I want something like Linear's clean feel but with warmer colors..."
- Value stored in `restyleStore.freeTextVision`

Back/Next buttons at bottom.

### File 6: `src/components/agent-center/restyle/RestylePreferences.tsx`

Step 4. Visual quiz.

**Extracted Colors (if images were uploaded):**
When this step mounts and there are uploaded images, launch a Gemini session via `window.electronAPI.gemini.launch()` with:
- model: `'gemini-flash'`
- prompt: "Look at the following design context and suggest 8 UI colors that would work well for a dark-themed desktop app. Return ONLY a JSON array of hex color strings, nothing else. Example: [\"#A78BFA\", \"#1a1a2e\", ...]"

Parse Gemini's stdout for the JSON array. Show as clickable color swatches.

**Quiz questions — render actual visual previews:**
- Q1: Corners — two clickable cards, each containing a rendered div showing the radius
- Q2: Surface — Glass (with backdrop-blur CSS) vs Solid (opaque bg)
- Q3: Density — range input slider, Compact to Spacious
- Q4: Animation — range input slider, Subtle to Playful
- Q5: Accent palette — 4 palette cards with color swatches. One should say "Based on your inspiration" and use colors from the extracted set

Store all answers in `restyleStore.updateQuizAnswer()`.

### File 7: `src/components/agent-center/restyle/RestyleProposals.tsx`

Step 5. Launch Gemini to generate proposals.

When step mounts, call `window.electronAPI.gemini.launch()` with:
- model: `'gemini-pro'` (needs the smart one for this)
- prompt: Build a detailed prompt that includes:
  - The scan report JSON
  - Description of uploaded images (filenames, or "user uploaded N design screenshots")
  - The URL references and their detected tags
  - The free text vision
  - All quiz answers
  - Ask Gemini to return EXACTLY this JSON structure:
    ```
    { "proposals": [ { "name": string, "description": string, "tokens": { "accent": hex, "accentDim": rgba, "background": hex, "surface": hex, "surfaceBorder": hex, "borderRadius": string, "cardStyle": "glass" | "solid" }, "recommended": boolean, "reasoning": string } ] }
    ```

Parse Gemini's stdout for the JSON. Store via `restyleStore.setProposals()`.

Display 3 proposal cards, each with:
- A mini UI mockup preview (render actual divs with inline styles using the proposal's tokens — a small sidebar, header bar, 3 cards, accent bar)
- Name, description, tags ("Gemini Generated", "Best Match", "From your inspo")
- Click to select

### File 8: `src/components/agent-center/restyle/RestyleApply.tsx`

Step 6. Launch Claude to apply changes.

When user confirms, call `window.electronAPI.agent.launch()` with:
- model: `'opus'` (needs the best for multi-file edits)
- prompt: Include the full selected proposal JSON and explicit step-by-step instructions:
  1. Update `src/design-system/tokens.ts` with new colors
  2. Update `tailwind.config.js` with new theme values
  3. Update `src/index.css` global styles
  4. Replace all Tailwind color classes across all components/pages (yellow-400 → new accent, etc.)
  5. Update border-radius if changed
  6. If glass style, add backdrop-blur to card components
  7. Run `npm run typecheck` — fix errors
  8. Run `npm run build` — fix errors
  9. Run `npx electron-builder --mac --dir --config electron-builder.json`
  10. Run `cp -R release/mac-arm64/MiroX.app /Users/space/Desktop/MiroX.app`
- allowedTools: `['Read', 'Edit', 'Glob', 'Grep', 'Bash']`

Show progress list with steps. Subscribe to agent logs to detect completion keywords (like "typecheck", "build", "electron-builder") and check them off. Show live log at the bottom.

### File 9: `src/components/agent-center/ReStyleWizard.tsx`

The wrapper modal component:
- Uses `Modal` from `@components/ui/Modal` with `size="lg"`
- Reads `restyleStore.isOpen` and `restyleStore.currentStep`
- Renders step indicator dots at the top (purple themed)
- Shows "Step X of 6 — StepName" in header
- Renders the correct step component based on currentStep
- Close button calls `restyleStore.closeWizard()`

### File 10: Modify `src/components/agent-center/AgentLauncher.tsx`

In the bottom row (the `<div className="flex items-center justify-between">` at line ~373), add the Re-Style button BEFORE the "+ Add Collaborator" button:

```tsx
import { Sparkles } from 'lucide-react'
import { ReStyleWizard } from './ReStyleWizard'
import { useRestyleStore } from '@stores/restyleStore'

// Inside the component:
const openRestyle = useRestyleStore((s) => s.openWizard)

// In the JSX, before the Add Collaborator button:
<button
  onClick={openRestyle}
  className="relative overflow-hidden flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-purple-400/30 bg-purple-400/[0.08] text-purple-400 text-sm font-semibold transition-all hover:bg-purple-400/[0.15] hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]"
>
  <Sparkles size={16} />
  <div>
    <div>Re-Style</div>
    <div className="text-[11px] font-normal text-purple-400/60">Claude + Gemini redesign</div>
  </div>
</button>

// After the Card closing tag, add:
<ReStyleWizard />
```

---

## PATTERNS TO FOLLOW (copy these exactly)

**Zustand store pattern** — see `src/stores/agentStore.ts`:
```
create<State>()(immer((set) => ({ ... })))
```

**Component pattern** — see any component in `src/components/agent-center/`:
```
export function ComponentName(): JSX.Element { ... }
```

**IPC usage** — see `src/components/agent-center/AgentLauncher.tsx` lines 150-155:
```
const result = await window.electronAPI.agent.launch({ model, prompt, allowedTools })
```

**Modal usage** — see `src/components/agent-center/ModelPicker.tsx`:
```
<Modal isOpen={isOpen} onClose={onClose} title="..." size="lg">
```

**Animation** — see `src/design-system/animations.ts` for existing presets. Use `fadeInVariants`, `listContainerVariants`, `listItemVariants`.

---

## VERIFICATION CHECKLIST (must all pass before done)

1. `npm run typecheck` — zero errors
2. `npm run build` — clean build
3. `npm run lint` — no new errors
4. The ReStyleWizard modal opens when clicking the purple button
5. All 6 steps render without crashes
6. `npx electron-builder --mac --dir --config electron-builder.json` succeeds
7. `rm -rf /Users/space/Desktop/MiroX.app && cp -R release/mac-arm64/MiroX.app /Users/space/Desktop/MiroX.app`
