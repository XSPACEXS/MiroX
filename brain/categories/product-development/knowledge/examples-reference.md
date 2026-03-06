# Product Development Boards — Examples & Reference

## Overview

This document provides detailed breakdowns of exemplary product development boards,
anti-patterns to avoid, before/after comparisons, and specific design elements worth
borrowing. Each example is analyzed for what makes it great — or what makes it fail —
so Claude can learn from the best and avoid the worst.

---

## Example 1: The God-Level Feature Spec

### Board: "AI Task Routing — Feature Specification"

**Why it is great**:

This board follows the Feature Spec Canvas pattern perfectly. It tells a complete story
from problem to solution to delivery plan. Here is what elevates it:

1. **The Problem Statement is visceral**: It does not say "managers need help with task
   assignment." It says "Engineering managers spend 4-6 hours per week manually assigning
   tasks, leading to 23% reassignment rates and bottlenecked specialists." Numbers make
   the pain real.

2. **User stories have real acceptance criteria**: Each story has 3-5 testable criteria.
   "Suggestions appear within 2 seconds of task creation" is something QA can verify.
   "Better performance" is not.

3. **Wireframes are descriptive even without images**: The wireframe frames contain
   structured text descriptions that tell you exactly what the screen looks like —
   what elements are present, their layout, and annotation callouts for non-obvious
   behaviors.

4. **Dependencies have owners and dates**: "Calendar API — owned by Integrations team,
   ETA March 20" is actionable. "Depends on another team" is not.

5. **Risks have mitigations**: Every risk includes a concrete mitigation strategy, not
   just acknowledgment of the risk.

6. **The delivery timeline is a real table**: Phases, dates, deliverables, owners, and
   status — all in one scannable table. No ambiguity about who is doing what by when.

**Design elements to steal**:

- Colored left-border accents on frames to indicate domain (purple = product, pink =
  design, blue = engineering, amber = risk, gray = questions)
- Connector labels that ask questions ("What does the user need?", "What could go wrong?")
  rather than stating facts — this draws attention to the thinking process
- Status metadata in the title banner (Owner, Last Updated, Version) keeps the board
  alive and accountable
- Scope section with explicit "In scope" and "Out of scope" — prevents scope creep

### Metrics of Excellence

| Dimension               | Score (1-5) | Notes                                                   |
| ----------------------- | ----------- | ------------------------------------------------------- |
| Strategic context       | 5           | Problem, solution, metrics, scope all present           |
| Content depth           | 5           | Real examples, quantified data, named owners            |
| Visual hierarchy        | 5           | Clear 3-level hierarchy (banner → frames → content)     |
| Actionability           | 5           | Every section has owners, dates, or testable criteria   |
| Collaboration-readiness | 4           | Good structure but could add more empty space for input |

---

## Example 2: The Exemplary Product Roadmap

### Board: "AutoPilot 3.0 — Product Roadmap Q1-Q4 2026"

**Why it is great**:

This roadmap uses the Timeline Roadmap pattern with three swimlanes (themes) and four
quarterly columns. What makes it exceptional:

1. **The vision statement is front and center**: "Make task management effortless through
   AI" sits in the title banner. Every feature on the roadmap can be traced back to this
   vision.

2. **Confidence encoding is visual and honest**: Current-quarter items have solid fills.
   Next-quarter items have 70% opacity. Items 2+ quarters out have dashed borders. This
   tells stakeholders "do not hold us to the Q4 items — they are directional."

3. **Theme labels include metrics**: Each swimlane header includes the strategic metric
   it drives ("AI/ML Theme — Target: 40% reduction in manual task actions"). This
   connects the roadmap to business outcomes.

4. **Milestones are on a dedicated row**: Beta, GA, v3.0, and Annual Review are on a
   bottom row with diamond markers. They are visually distinct from features and serve
   as coordination anchors.

5. **Dependencies are visible across lanes**: Dotted connectors between items in
   different swimlanes show cross-theme dependencies (e.g., "NLP Search" in AI/ML
   depends on "API v2" in Platform).

**Design elements to steal**:

- Confidence encoding through opacity and border style — simple, intuitive, no legend needed
- Theme-level metric in the swimlane header — keeps strategy visible at every zoom level
- "Future Ideas" parking lot to the right of Q4 — captures ideas without committing dates
- Color-coded swimlane backgrounds (very subtle, 5% opacity) — makes themes scannable at
  a distance
- Monthly gridlines with quarter boundaries bolded — gives temporal precision without clutter

---

## Example 3: The Well-Structured User Story Map

### Board: "Onboarding Flow — User Story Map"

**Why it is great**:

This story map follows the Story Map Grid pattern for a SaaS onboarding flow. Its
strengths:

1. **The backbone tells a clear user journey**: Discover → Sign Up → Configure → Learn →
   Use Core Features → Share. Each activity is a real step in the user's life, not an
   internal system concept.

2. **Release lines are labeled with release themes**: "Release 1 — MVP: Get to first
   value in under 5 minutes." This is not just a priority cut — it is a thesis about
   what the release accomplishes.

3. **Stories are sized consistently**: All stickies are 250x150px, creating a clean visual
   grid. Varying sizes would create false importance signals.

4. **Pain points are marked with red-bordered stickies**: Specific user pain points are
   called out in their position within the journey: "Users drop off after step 3 because
   the configuration wizard has 12 required fields." This connects the story map to
   user research.

5. **A persona card is pinned in the top-left**: "Alex, Engineering Manager, 34, uses
   Slack and Jira daily, new to our product" — a constant reminder of who the map serves.

**Design elements to steal**:

- Persona card pinned at top-left as a constant reference anchor
- Release line labels with a release thesis ("Release 1 — MVP: First value in < 5 min")
- Red-bordered pain point stickies embedded at their journey position
- Vertical "Opportunity" callouts — green-bordered stickies marking where the biggest
  wins live
- Numbered story IDs on each sticky (US-001, US-002) for cross-referencing with Jira

---

## Example 4: The Actionable Prioritization Matrix

### Board: "Q2 Feature Prioritization — Impact vs. Effort"

**Why it is great**:

This prioritization board uses the 2x2 matrix pattern with a full RICE scoring table
below. Its strengths:

1. **Axis definitions are explicit**: The Y-axis label reads "IMPACT (Revenue potential +
   User satisfaction uplift)" and the X-axis reads "EFFORT (Engineering weeks + Design
   weeks)." No ambiguity about what the axes measure.

2. **Items are positioned by actual score, not gut feel**: Each feature dot includes its
   Impact and Effort scores (e.g., "AI Routing — I:8, E:6"). This makes the positioning
   defensible and reproducible.

3. **Quadrant labels include actions**: Top-left says "QUICK WINS — Do First This Sprint."
   Bottom-right says "MONEY PITS — Defer or Kill." The action is built into the label.

4. **The RICE scoring table below provides transparency**: Every item's Reach, Impact,
   Confidence, and Effort scores are visible, with the final RICE score calculated. This
   lets anyone audit the prioritization logic.

5. **A "Decision Log" frame below the table**: Records which items were selected, who
   decided, and the rationale. "Selected: AI Task Routing (RICE: 1,500). Rationale: Aligns
   with Q2 theme and unblocks enterprise tier."

**Design elements to steal**:

- Score annotations on each dot in the matrix (visible when zoomed in)
- Quadrant labels with explicit action verbs (Do, Plan, Fill, Avoid)
- RICE scoring table with color-coded rows (green for selected, gray for deferred)
- Decision log with named decision-makers and dates — creates accountability
- "Contested Zone" highlight: A dashed circle in the middle of the matrix where items
  are too close to call — triggers discussion rather than false precision

---

## Example 5: The Release Plan That Ships

### Board: "AutoPilot 3.0 — Release Plan: April 22, 2026"

**Why it is great**:

This release board uses the Release Board pattern with five phase columns and three
supporting sections below. Its strengths:

1. **The header includes a health dashboard**: "ON TRACK | 14 features | 3 teams | 6
   weeks remaining | 68% complete." A 5-second status check for anyone.

2. **Feature cards have rich metadata**: Each card shows the feature name, owner (avatar
   - name), team color-bar, and a mini-status (green/yellow/red dot). You can assess
     individual feature health without clicking.

3. **Cross-cutting concerns have progress bars**: "QA Test Plan: 60% complete" shown
   as a visual fill bar, not just text. Progress is visceral.

4. **Blockers are impossible to miss**: Red background, warning icon, bold text. "Calendar
   API — Blocked on Integrations team (ETA Mar 20)." The blocker section is placed
   between the kanban columns and the checklist, forcing anyone who reads top-to-bottom
   to encounter it.

5. **The launch checklist is binary**: Each item is checkmark or empty box. "Feature
   freeze date set [x]." "Performance benchmarks pass [ ]." No wiggle room — it is done
   or it is not.

**Design elements to steal**:

- Health dashboard in the header (status, counts, percentage, weeks remaining)
- Team color-bars on feature cards (left border: blue for Platform, green for AI/ML,
  pink for UX)
- Progress bar shapes for cross-cutting concerns (visual fill, not just percentage text)
- Red blocker section positioned where it cannot be skipped
- Binary checklist format for launch readiness

---

## Anti-Patterns

### Anti-Pattern 1: The Feature Graveyard

**What it looks like**: A single board with 80+ stickies, all the same color and size,
arranged in a loose grid. No sections, no frames, no hierarchy. Occasionally a sticky
is bigger (meaning important?) or a different color (meaning... unclear).

**Why it fails**: There is no narrative, no structure, and no visual hierarchy. Finding
a specific feature requires reading every sticky. Priority is invisible. Status is
unknown. The board becomes a dumping ground that nobody maintains.

**Fix**: Split into a structured roadmap (for the big picture) and individual feature
spec boards (for detail). Use frames, color coding, and the story map or timeline
pattern.

### Anti-Pattern 2: The Beautiful But Empty Board

**What it looks like**: Gorgeous title banner, perfectly aligned frames, consistent
colors — but every frame contains 1-2 vague stickies. "Define user needs." "Plan
architecture." "Set timeline."

**Why it fails**: The structure is excellent but the content is at planning-to-plan
level. The board looks professional from a distance but provides no actionable
information up close. It is all form and no substance.

**Fix**: Follow the content guide. Populate with real user stories, real metrics, real
dates, and real risks. A slightly messy board with real content beats a beautiful
board with placeholders every time.

### Anti-Pattern 3: The Jira Screenshot Board

**What it looks like**: Miro stickies that are 1:1 copies of Jira tickets, including
ticket IDs, verbose descriptions, and internal system fields. The board is essentially
a Jira board exported to a different tool.

**Why it fails**: It adds no value over Jira. The spatial canvas of Miro is wasted on
a layout that Jira already does better (list, kanban, board). There are no
relationships, no narrative, no visual hierarchy that Jira does not provide.

**Fix**: Use Miro for what Miro does better than Jira: spatial relationships (story maps),
visual frameworks (prioritization matrices), cross-functional views (feature specs with
user stories AND wireframes AND tech reqs on one canvas), and strategic context (roadmaps
with vision and themes).

### Anti-Pattern 4: The Zoom-Level Disaster

**What it looks like**: Text in 10-12pt font throughout the entire board. At working zoom
(50-70%), everything is a blur. Users must zoom to 100-120% to read anything, meaning
they can only see one small section at a time.

**Why it fails**: The board loses its key advantage — the ability to see relationships
between sections. If you can only view one frame at a time, you might as well use a
document.

**Fix**: Apply the typography scale. Board title at 56pt, frame headers at 28-32pt,
card titles at 18-20pt, detail text at 14pt. Headers should be readable at 35-50% zoom.

---

## Before/After: Feature Spec Improvement

### Before (Mediocre)

```
+-----------------------------------------------------------+
|  Feature: Better Search (no owner, no date)               |
+-----------------------------------------------------------+
|  [Sticky] "Improve search functionality"                  |
|  [Sticky] "Add filters"                                   |
|  [Sticky] "Make it faster"                                |
|  [Sticky] "Users complained about search"                 |
|  [Sticky] "Need Elasticsearch"                            |
|  [Sticky] "2 weeks"                                       |
+-----------------------------------------------------------+
```

Problems: No frames or sections. No user stories — just vague requests. No success
metrics. No wireframes. No technical architecture. No risks. No timeline. "2 weeks" is
not a plan.

### After (God-Level)

```
+--------------------------------------------------------------+
|  Feature Spec: Intelligent Search v2.0                       |
|  Owner: Sarah K. (PM) | v1.0 | Updated: Mar 6 | IN PROGRESS |
+--------------------------------------------------------------+
|  +-------------------+  +-----------------------------+      |
|  | PROBLEM           |  | SUCCESS METRICS             |      |
|  | "Users perform    |  | - Search-to-click: 34% →    |      |
|  |  avg 3.2 searches |  |   55% in 8 weeks            |      |
|  |  before finding   |  | - Avg queries/task: 3.2 →   |      |
|  |  the right item.  |  |   1.4                        |      |
|  |  22% abandon      |  | - Guardrail: Page load      |      |
|  |  search entirely."|  |   stays < 200ms             |      |
|  +-------------------+  +-----------------------------+      |
|  +------------+  +----------+  +---------------+             |
|  |USER STORIES|  |WIREFRAMES|  |TECH REQS      |             |
|  | US-1: As a |  |Screen 1: |  |Elasticsearch  |             |
|  |  user, I   |  | Search   |  | 8.x cluster   |             |
|  |  want type-|  | results  |  | with faceted  |             |
|  |  ahead...  |  | with     |  | search,       |             |
|  | AC1: ...   |  | facet    |  | autocomplete  |             |
|  | AC2: ...   |  | sidebar  |  | pipeline...   |             |
|  +------------+  +----------+  +---------------+             |
|  +------------+  +----------+  +---------------+             |
|  |DEPENDENCIES|  |EDGE CASES|  |TIMELINE       |             |
|  | DEP-1: ....|  |EC-1: ....|  |Design: M3-14  |             |
|  | DEP-2: ....|  |EC-2: ....|  |Backend: M10-28|             |
|  | RISK-1: ...|  |OQ-1: ....|  |QA: M31-Apr7   |             |
|  +------------+  +----------+  +---------------+             |
+--------------------------------------------------------------+
```

Improvements: Structured frames with clear sections. Named owner and status. Quantified
problem statement. Measurable success metrics with baselines and guardrails. Formal user
stories with acceptance criteria. Wireframe descriptions. Technical architecture. Named
dependencies with owners. Edge cases. A real timeline with phases and dates.

---

## Design Elements Library

### Elements Worth Reusing Across All Product Boards

1. **Title Banner Pattern**: Full-width, 400-500px tall, themed dark background, white
   text with title (40-56pt), subtitle (20-24pt), and metadata row (14-16pt, reduced
   opacity).

2. **Frame Accent Border**: 4-6px colored left border on each frame to indicate domain
   or category. Simple, effective, does not compete with content.

3. **Status Badge Pattern**: Small (60x24px) rounded rectangle with status text in ALL
   CAPS. Colors: green (#00C853) = DONE, yellow (#FFD600) = IN PROGRESS, red (#D50000) =
   BLOCKED, gray (#9E9E9E) = NOT STARTED.

4. **Progress Bar Pattern**: Two overlapping rectangles — background (full width, gray
   #E0E0E0) and foreground (proportional width, green #4CAF50). Percentage text to the
   right (e.g., "72%").

5. **Connector Label Pattern**: Short question or relationship label centered on the
   connector line. 12-14pt, primary color. Use questions for narrative flow and
   relationship verbs for technical flow.

6. **Metric Display Pattern**: Large number (32-40pt, bold, primary color) with label
   below (14pt, secondary text color). Group 3-4 metrics in a horizontal row. Example:
   "14" / features, "3" / teams, "6 wks" / remaining.

7. **Blocker Card Pattern**: Red (#FFEBEE) background, red (#D50000) left border 4px,
   warning icon, bold title, description text, owner name, and ETA date.

8. **Decision Log Entry Pattern**: Numbered entry with date, decision text, decision-
   maker name, and rationale. Green left border for approved, red for rejected, gray
   for deferred.
