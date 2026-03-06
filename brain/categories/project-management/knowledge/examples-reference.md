# Project Management — Examples & Reference

## Overview

This document presents detailed breakdowns of excellent project management boards, common anti-patterns to avoid, and before/after transformations that demonstrate how thoughtful design elevates a basic tracking board into a genuine management instrument.

---

## Example 1: Engineering Sprint Board (Scrum)

### Context

A 6-person engineering team at a B2B SaaS company uses this sprint board for their biweekly sprints. The board is reviewed daily in 15-minute standups and weekly by the VP of Engineering.

### What Makes It Great

**Sprint Header Design**:
A full-width header bar (5500x120px) with a navy background (#0D47A1) contains four information clusters arranged horizontally:

- Left: Sprint name and dates ("Sprint 8 — Mar 18-29, 2026")
- Center-left: Sprint goal in italic ("Complete payment integration MVP")
- Center-right: Capacity gauge showing 40/42 points committed (green, since <100%)
- Right: Burndown sparkline (small, 150x40px) showing the team is on track

This header answers "What sprint are we in? What are we trying to accomplish? Are we on track?" in a single horizontal scan.

**Five-Column Workflow**:
The columns follow the team's actual process:

1. **Backlog** (gray, no WIP limit) — Prioritized but not committed to this sprint
2. **Ready** (blue, WIP: 8) — Sprint-committed, ready to pick up
3. **In Progress** (teal, WIP: 6) — Someone is actively working on it
4. **In Review** (purple, WIP: 3) — PR submitted, awaiting review
5. **Done** (green, no WIP limit) — Merged, tested, verified

Each column header shows the current count vs. limit: "In Progress (4/6)." When the In Review column hit 4/3, the header turned amber and the number turned red — immediately visible to the team.

**Card Design Excellence**:
Each card (300x130px) uses a consistent internal layout:

- 4px left border colored by priority (red P1, orange P2, yellow P3, gray P4)
- Title in bold 14px (left-aligned, truncated with "..." if too long)
- Assignee avatar (24px circle) and name in the bottom-left
- Story point badge (24px circle, blue outline) in the bottom-right
- Due date in gray 12px, turning red if overdue
- Tag pills at the bottom: "frontend" (blue), "api" (green), "infra" (purple)

**Blocked Item Treatment**:
When Alice flagged a task as blocked, the card changed dramatically:

- Full red border (2px on all sides, not just left)
- Subtle red tint background (#FFF5F5)
- "BLOCKED" badge in the top-right (red pill with white text)
- A 1-line blocker reason below the title: "Waiting on Stripe sandbox access (ticket #4521)"

This made blocked items impossible to ignore at any zoom level.

**Metrics Footer**:
A 200px-tall footer zone contains three mini-widgets:

- Sprint burndown chart (200x80px sparkline)
- Task distribution pie (120px diameter): 3 ready, 4 in progress, 2 in review, 9 done
- Velocity comparison: "Sprint 7: 38pts | Sprint 8: 18pts (in progress)"

### Design Decisions to Learn From

- WIP limits with visual enforcement prevent bottlenecks before they form
- Card left-border priority coloring is visible even at medium zoom
- Blocked items get three distinct visual signals (border, tint, badge) ensuring they cannot be overlooked
- Sprint header compresses all critical context into one scan line

---

## Example 2: Product Roadmap (Quarterly View)

### Context

A product team created this roadmap to communicate the 2026 plan to the entire company (150 people). It was embedded in an all-hands presentation and needed to work without a presenter explaining it.

### What Makes It Great

**Clean Temporal Structure**:
Four quarter columns of equal width (2400px each) stretch across a 10000x4000px board. The current quarter (Q1) has a subtle blue tint background, making it instantly distinguishable from future quarters. A "TODAY" marker (vertical red dashed line) sits at the current week within Q1.

**Three Swim Lanes by Theme**:

1. **Platform** (blue row, 800px tall) — Infrastructure, API, and core system work
2. **Product** (green row, 1000px tall) — User-facing features and improvements
3. **Growth** (orange row, 700px tall) — Marketing, partnerships, and business development

Each swim lane has a left-side label with an icon and the team lead's name. Row heights are proportional to the number of initiatives, giving a visual sense of resource allocation.

**Initiative Card Design**:
Each initiative is a rounded rectangle that spans the appropriate number of weeks within a quarter:

- Width: Proportional to estimated duration (a 6-week initiative is half a quarter wide)
- Height: 70px
- Background: Swim lane color
- Content: Initiative name (bold, 14px) + one metric ("Target: 30% faster API response")
- Status dot: Top-right corner (green/amber/red, 10px circle)
- Confidence badge: "Committed" (solid fill), "Planned" (dashed outline), "Exploratory" (dotted outline)

Initiatives that span multiple quarters extend across the column boundary — visually demonstrating their duration and cross-quarter impact.

**Dependency Arrows**:
Four dependency arrows connect initiatives across swim lanes:

- "API v3.0 Migration" (Platform) arrows to "New Dashboard" (Product) — labeled "requires"
- "SOC2 Certification" (Platform) arrows to "Enterprise Self-Serve" (Growth) — labeled "enables"

These arrows are subtle (2px gray, curved) but become the most discussed part of the roadmap because they reveal hidden constraints.

### Design Decisions to Learn From

- Proportional card width encodes duration visually (no need to read dates)
- Confidence badges (Committed/Planned/Exploratory) set realistic expectations
- Cross-lane dependencies reveal constraints that text-based roadmaps hide
- Today marker provides an instant "where are we" reference

---

## Example 3: Kanban Board with Swim Lanes

### Context

A 12-person cross-functional team (engineering, design, QA) uses this Kanban board to manage a continuous delivery workflow. The team needed to track work by discipline without losing sight of the overall flow.

### What Makes It Great

**Horizontal Swim Lanes by Discipline**:
Each column is subdivided into three horizontal lanes:

1. **Engineering** (blue background tint) — 60% of lane height
2. **Design** (purple background tint) — 20% of lane height
3. **QA** (green background tint) — 20% of lane height

Lane heights are proportional to team size (7 engineers, 3 designers, 2 QA), visually encoding capacity.

**Cross-Lane Dependencies**:
When a design task in "Done" unblocks an engineering task in "Ready," a subtle dashed connector links the two cards. This shows the handoff flow: Design completes, Engineering begins.

**Aging Indicators**:
Cards that have been in the same column for more than 3 days get a small amber clock icon. More than 5 days: red clock icon. This prevents cards from silently stalling.

**Cumulative Flow Diagram**:
A small stacked area chart (300x100px) in the footer shows how many cards are in each column over the past 30 days. The team can see if In Progress is growing (bad — bottleneck forming) or Done is growing (good — flow is healthy).

### Design Decisions to Learn From

- Swim lane heights proportional to team size immediately shows capacity allocation
- Aging indicators surface stalled work that would otherwise go unnoticed
- Cross-lane connectors make handoff flows visible
- Cumulative flow diagram provides trend data beyond the current snapshot

---

## Example 4: Gantt Timeline for Waterfall Project

### Context

A construction company's project manager created this Gantt chart for a 6-month office renovation. The audience is the general contractor, subcontractors, and the client. The board needs to communicate dependencies clearly because sequencing errors mean rework.

### What Makes It Great

**Proportional Time Scale**:
The horizontal axis spans 26 weeks (6 months) with each week represented by 350px. The total board is 9100px wide and 4000px tall. Weekends are shaded in light gray, and public holidays are shaded in light blue.

**Seven Swim Lanes by Trade**:

1. **Architecture/Design** — Blue, weeks 1-6
2. **Demolition** — Red, weeks 3-5
3. **Electrical** — Yellow, weeks 5-12
4. **Plumbing** — Green, weeks 5-10
5. **Framing/Drywall** — Brown, weeks 8-16
6. **Finishes** — Purple, weeks 14-22
7. **Inspection/Handover** — Gold, weeks 22-26

**Task Bar Design**:
Each task bar contains:

- Task name (inside the bar, white text on colored background)
- Assigned subcontractor (below the bar, gray text)
- Progress overlay: Darker shade filling from left (e.g., 60% of "Electrical Rough-In" bar is filled)
- Planned vs. actual: The original planned bar is shown as a thin outline behind the actual bar. When actual extends beyond planned, the overshoot is shown in red.

**Critical Path Highlighting**:
The critical path (the longest sequence of dependent tasks that determines the project end date) is highlighted with thicker task bars (50px vs. 30px for non-critical) and bold connector arrows. The critical path is explicitly labeled: "CRITICAL PATH — Any delay here delays the project."

**Milestone Diamonds**:
Key milestones are placed on the timeline as gold diamonds:

- Week 6: "Design Complete — Permits Submitted"
- Week 12: "Rough-In Inspection"
- Week 22: "Final Walkthrough"
- Week 26: "Client Handover"

### Design Decisions to Learn From

- Planned vs. actual overlay on task bars makes schedule slippage visible
- Critical path highlighting focuses attention on what truly matters for the deadline
- Weekend/holiday shading provides realistic time representation
- Subcontractor names on bars clarify accountability without a separate table

---

## Example 5: Executive Dashboard

### Context

The CEO of a 200-person company reviews this dashboard every Monday to assess the health of three major projects simultaneously. She spends approximately 2 minutes on the board.

### What Makes It Great

**Three-Project Summary in One View**:
The dashboard is a 2x3 grid of widgets, but the top row has three "project health cards" — one per project:

| Project Alpha    | Project Beta    | Project Gamma    |
| ---------------- | --------------- | ---------------- |
| ON TRACK (Green) | AT RISK (Amber) | ON TRACK (Green) |
| 78% complete     | 45% complete    | 92% complete     |
| On budget        | 15% over budget | Under budget     |
| Apr 15 launch    | Jun 1 launch    | Mar 30 launch    |

Each project card is 1500x400px with a large status badge (100px circle), the project name, a progress bar, and three key metrics (schedule, budget, quality).

**The "Attention Required" Section**:
The bottom-left widget (3000x600px) lists exactly the items the CEO needs to act on:

1. "Project Beta: Budget approval needed for additional contractor ($45K)"
2. "Project Alpha: Client requested scope change — 3 new features (Decision needed by Mar 12)"
3. "Project Gamma: QA found 2 critical bugs — team assessing impact"

Each item has a severity badge, a responsible PM's name, and a requested decision date. This section converts the dashboard from a "look at it" tool to a "do something about it" tool.

**Trend Arrows**:
Every metric has a small trend arrow showing the change from last week:

- Schedule: "3 days ahead" with a green up-arrow
- Budget: "15% over" with a red up-arrow
- Quality: "97% pass rate" with a green sideways-arrow (stable)

### Design Decisions to Learn From

- Multi-project comparison in a single view enables portfolio-level decisions
- "Attention Required" section converts passive dashboard into an action list
- Trend arrows provide velocity (direction of change), not just position
- 2-minute time budget forces ruthless prioritization of displayed information

---

## Anti-Patterns

### Anti-Pattern 1: The Zombie Board

**What it looks like**: Cards have not moved in weeks. The "In Progress" column shows tasks that were started a month ago. Due dates in the past are everywhere. No one updates it.

**Why it fails**: A stale board is worse than no board. It actively misleads — stakeholders think work is happening when it is not. The board becomes wallpaper.

**Fix**: Establish a daily update ritual. Add aging indicators. Conduct a weekly "board hygiene" session where stale cards are updated, completed, or removed. If the board is not updated, it should not exist.

### Anti-Pattern 2: The Kitchen Sink

**What it looks like**: 12 columns, 8 swim lanes, 200+ cards, tags in 15 colors, dependencies everywhere. The board is a masterpiece of comprehensiveness and completely unusable.

**Why it fails**: A board that requires a 30-minute orientation session has failed its primary purpose: quick visual comprehension. Complexity does not equal utility.

**Fix**: Simplify ruthlessly. 5-7 columns maximum. 3-4 swim lanes maximum. If the project is truly that complex, break it into sub-boards linked together.

### Anti-Pattern 3: The Vanity Board

**What it looks like**: Beautiful design with custom illustrations, gradients, decorative borders, and branded elements. But the cards have no assignees, no due dates, and the columns don't match the team's actual workflow.

**Why it fails**: Form without function. The board looks great in screenshots but is useless as a management tool.

**Fix**: Start with function. Build the board around the team's real workflow, real tasks, and real data. Add visual polish only after the board is operationally accurate.

### Anti-Pattern 4: The Single-View Trap

**What it looks like**: The board only has a Kanban view. There is no way to see timelines, no way to see team workload, no dashboard summary. Everything is viewed through a single lens.

**Why it fails**: Different stakeholders need different views. A developer needs card-level detail. A PM needs timeline visibility. An executive needs a health summary.

**Fix**: Create complementary views. A Kanban board paired with a timeline and a dashboard gives every stakeholder what they need.

---

## Before/After Transformations

### Transformation 1: From Flat Kanban to Rich Sprint Board

**Before**:

- 3 columns: "To Do," "Doing," "Done"
- All cards are yellow sticky notes with just a title
- No assignees, no due dates, no story points
- No sprint header, no metrics, no WIP limits
- 25 items in "Doing" column (team of 5)

**After**:

- 5 columns with WIP limits: Backlog (none), Ready (8), In Progress (5), Review (3), Done (none)
- Rich cards with title, assignee, due date, story points, priority border, and tags
- Sprint header with goal, dates, capacity bar, and burndown sparkline
- Footer with status legend and velocity comparison
- In Progress reduced to 5 items (one per person), with 3 in Review queue

**What changed**: The content (tasks) was mostly the same. What changed was the structure (proper columns matching real workflow), the card design (rich metadata), and the guardrails (WIP limits). The board went from a passive list to an active management tool.

### Transformation 2: From Spreadsheet to Visual Roadmap

**Before**:

- A Miro board with a screenshot of an Excel spreadsheet embedded
- 100 rows x 12 columns of tiny text
- Color coding only in the spreadsheet cells (invisible at any reasonable zoom)
- No visual timeline, no dependencies, no status indicators

**After**:

- A proper roadmap with 4 quarter columns and 3 swim lanes
- 18 initiative cards with proportional widths, status dots, and confidence badges
- 6 dependency arrows showing cross-team connections
- A Today marker and milestone diamonds
- A summary zone with initiative counts and key metrics per quarter

**What changed**: The same information was restructured from a tabular format into a visual spatial format. The spreadsheet contained more detail but communicated less. The roadmap contained less text but communicated more — because spatial position, color, and connection do what cells and rows cannot.

---

## Design Elements to Steal

### The "Sprint Goal Banner"

A colored banner across the top of the sprint column that states the sprint goal in bold. Every day the team sees what they are trying to accomplish, not just what they are doing.

### The "Blocking Chain"

When item A blocks item B which blocks item C, show all three connected with red arrows and a "3 items in chain" badge on the first card. This surfaces cascading blockers.

### The "Done Celebration Row"

A thin green bar at the bottom of the Done column that grows as items complete. Reaching the sprint goal fills the bar completely, creating a visual "level up" moment.

### The "Risk Radar"

A small (150x150px) radar/spider chart in the dashboard showing risk across 5 dimensions: Schedule, Budget, Scope, Quality, Team. Each dimension is scored 1-5, creating a shape that visually communicates overall project health.

### The "Capacity Thermometer"

A vertical bar (30x200px) in each team member's swim lane showing their capacity utilization. The bar fills from bottom to top: green at 50%, yellow at 80%, red at 100%+.
