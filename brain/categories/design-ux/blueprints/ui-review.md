# UI Review Board

## Overview

- **Purpose**: Run structured design reviews by presenting UI screenshots or mockups for feedback, collecting targeted comments, tracking approval status, and documenting revisions across iterations. Replaces scattered Slack threads and email chains with a single, organized review space.
- **Best For**: Design teams presenting work for critique, product managers providing feedback, engineering leads reviewing feasibility, and stakeholders approving designs before development begins.
- **Complexity**: Medium
- **Board Size**: 5000x3200px

## Color Scheme

| Role       | Color    | Hex     |
| ---------- | -------- | ------- |
| Primary    | Hot Pink | #E91E63 |
| Secondary  | Cerulean | #0288D1 |
| Accent     | Mint     | #00BFA5 |
| Background | Canvas   | #FAFAFA |
| Text       | Ink      | #1B1B1B |

## Board Layout

The board is organized with a review header at top, screenshot frames in the center (one per screen/variant), and a revision tracker at the bottom. Each screenshot frame has attached comment zones.

```
+--------------------------------------------------------------+
|  UI REVIEW — Sprint Planning Feature (Round 2)               |
|                                                              |
|  +------------------+  +------------------+                   |
|  | Screen 1:        |  | Screen 2:        |                   |
|  | Sprint Creation  |  | Sprint Board +   |                   |
|  | [Screenshot]     |  | AI Suggestions   |                   |
|  | [Comments]       |  | [Comments]       |                   |
|  +------------------+  +------------------+                   |
|                                                              |
|  +------------------+  +------------------+                   |
|  | Screen 3:        |  | Screen 4:        |                   |
|  | Workload View    |  | Mobile Task      |                   |
|  | [Screenshot]     |  | Detail           |                   |
|  | [Comments]       |  | [Comments]       |                   |
|  +------------------+  +------------------+                   |
|                                                              |
|  +------------------------------------------------------+   |
|  | Revision Tracker & Approval Status                     |   |
|  +------------------------------------------------------+   |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Review Header

- **Position**: top full-width
- **Size**: 4900x300px
- **Background**: #E91E63
- **Elements**:
  - Text block: "UI Review: Sprint Planning Feature" (font size 36, bold, #FFFFFF)
  - Text block: "Review Round: 2 of 3 | Designer: Priya Tandon | Reviewers: Jake R. (PM), Marcus W. (Eng), David K. (VP Product)" (font size 14, #FCE4EC)
  - Text block: "Date Submitted: March 4, 2026 | Feedback Due: March 6, 2026 | Status: In Review" (font size 14, #FCE4EC)
  - Shape (rectangle, #AD1457, 800x60):
    - Text: "Review Goal: Validate layout, interaction patterns, and AI suggestion UI. Not reviewing visual polish or copy." (font size 14, #FFFFFF)
  - Shape (table, 600x60):
    - Row: "Approved: 1/4 screens | Changes Requested: 2/4 | Pending: 1/4"

### Frame 2: Screen 1 — Sprint Creation

- **Position**: top-left
- **Size**: 2300x1200px
- **Background**: #FFFFFF with #0288D1 left border (4px)
- **Elements**:
  - Text block: "Screen 1: Sprint Creation (Desktop)" (font size 24, bold, #1B1B1B)
  - Shape (tag, #00BFA5, 120x30): "APPROVED" (text #FFFFFF, bold)
  - Shape (rectangle, #F5F5F5, 1400x700): **Screenshot Placeholder**
    - Text: "[High-fidelity mockup of Sprint Creation screen: left sidebar with project nav, main content area with sprint name input, date pickers, sprint goal textarea, backlog task list with drag handles, and 'Create Sprint' primary button]"
  - Text block: "Comments" (font size 18, bold, #E91E63)
  - Sticky note (green #E8F5E9, 350x100): "Jake R. (PM): Layout is clean and intuitive. Sprint goal field is a great addition — teams will use this to stay focused. APPROVED."
  - Sticky note (green #E8F5E9, 350x100): "Marcus W. (Eng): Date picker component matches our design system. Drag-and-drop from backlog is feasible with the React DnD library we already use. No concerns."
  - Sticky note (blue #E3F2FD, 350x100): "David K. (VP): Looks good. Consider adding a character count on the sprint goal field so teams keep it concise (suggest 200 char max). Minor suggestion, not blocking."
  - Text block: "Design Response" (font size 14, bold, #607D8B)
  - Text block: "Added 200-character limit with counter to sprint goal field. See Round 3 for updated mockup." (font size 14, #607D8B)

### Frame 3: Screen 2 — Sprint Board with AI Suggestions

- **Position**: top-right
- **Size**: 2300x1200px
- **Background**: #FFFFFF with #E91E63 left border (4px)
- **Elements**:
  - Text block: "Screen 2: Sprint Board with AI Suggestions (Desktop)" (font size 24, bold, #1B1B1B)
  - Shape (tag, #FFC400, 200x30): "CHANGES REQUESTED" (text #1B1B1B, bold)
  - Shape (rectangle, #F5F5F5, 1400x700): **Screenshot Placeholder**
    - Text: "[High-fidelity mockup of Kanban board: 3 columns (To Do, In Progress, Done), task cards with titles and priority badges, AI Suggestion overlay on an unassigned task showing 'Suggested: Aisha K. (92% match)' with Approve/Dismiss buttons]"
  - Text block: "Comments" (font size 18, bold, #E91E63)
  - Sticky note (red #FFEBEE, 350x120): "Jake R. (PM): The AI suggestion overlay is too small — at current size, the skill match percentage and workload info are hard to read. Can we make the overlay 20% larger? Also, 'Dismiss' is ambiguous — does it dismiss this suggestion or all suggestions? Rename to 'Show Next.'"
  - Sticky note (amber #FFF8E1, 350x120): "Marcus W. (Eng): Concern about overlay positioning. If the task card is near the right edge of the column, the overlay will be cut off. Can it flip direction (show to the left) when near the edge? Also, what happens on touch devices where there is no hover?"
  - Sticky note (blue #E3F2FD, 350x100): "David K. (VP): Love the concept. The 92% match score is compelling. Can we show what drives the score (e.g., 'Skills: React, TypeScript | Capacity: 65%') so managers trust it?"
  - Text block: "Design Response" (font size 14, bold, #607D8B)
  - Text block: "1. Increased overlay size from 250px to 300px wide. 2. Renamed 'Dismiss' to 'Next Suggestion'. 3. Added edge-detection logic to flip overlay direction. 4. On mobile, overlay is replaced by embedded card (see Screen 4). 5. Added score breakdown tooltip on hover over the percentage. See Round 3." (font size 14, #607D8B)

### Frame 4: Screen 3 — Workload Dashboard

- **Position**: bottom-left
- **Size**: 2300x1200px
- **Background**: #FFFFFF with #E91E63 left border (4px)
- **Elements**:
  - Text block: "Screen 3: Workload Dashboard (Desktop)" (font size 24, bold, #1B1B1B)
  - Shape (tag, #FFC400, 200x30): "CHANGES REQUESTED" (text #1B1B1B, bold)
  - Shape (rectangle, #F5F5F5, 1400x700): **Screenshot Placeholder**
    - Text: "[High-fidelity mockup of workload dashboard: full-width layout (no sidebar), team member rows with avatar, name, capacity bar (colored), task count, and estimated hours. Below: burndown chart and velocity chart side by side. Sprint selector dropdown at top.]"
  - Text block: "Comments" (font size 18, bold, #E91E63)
  - Sticky note (red #FFEBEE, 350x120): "Jake R. (PM): The capacity bar needs clearer thresholds. Right now, 80% and 95% look similar. Add distinct visual breaks: green 0-79%, yellow 80-94%, red 95-100%. Also, add a team-level summary at the top (e.g., 'Team capacity: 78% utilized, 2 members overloaded')."
  - Sticky note (amber #FFF8E1, 350x120): "Marcus W. (Eng): Burndown chart: can we show the ideal burndown line as a dotted overlay on the actual burndown? Standard practice and easy to implement. Velocity chart looks good."
  - Sticky note (green #E8F5E9, 350x100): "David K. (VP): This is exactly what I have been asking for. One request: can I click on a team member to drill into their task list? If so, approved from my side with that addition."
  - Text block: "Design Response" (font size 14, bold, #607D8B)
  - Text block: "1. Added distinct color thresholds to capacity bars with numerical labels. 2. Added team summary banner at top of dashboard. 3. Added ideal burndown dotted line. 4. Clicking a team member row expands inline to show their task list. See Round 3." (font size 14, #607D8B)

### Frame 5: Screen 4 — Mobile Task Detail

- **Position**: bottom-right
- **Size**: 2300x1200px
- **Background**: #FFFFFF with #0288D1 left border (4px)
- **Elements**:
  - Text block: "Screen 4: Mobile Task Detail with AI Suggestion" (font size 24, bold, #1B1B1B)
  - Shape (tag, #607D8B, 120x30): "PENDING" (text #FFFFFF, bold)
  - Shape (rectangle, #F5F5F5, 375x812): **Screenshot Placeholder** (iPhone frame)
    - Text: "[High-fidelity mobile mockup: task detail view with header, task title, priority badge, description, and embedded AI Suggestion card showing suggested assignee with match score, current workload, and Approve/Next Suggestion buttons]"
  - Text block: "Comments" (font size 18, bold, #E91E63)
  - Sticky note (blue #E3F2FD, 350x100): "Jake R. (PM): Looks good overall. Need to review after the desktop AI overlay changes are applied — the mobile embedded version should stay consistent. Holding feedback until Round 3."
  - Sticky note (gray #ECEFF1, 350x80): "Marcus W. (Eng): No comments yet. Will review with mobile team."
  - Sticky note (gray #ECEFF1, 350x80): "David K. (VP): Will review after desktop screens are finalized."
  - Text block: "Design Response" (font size 14, bold, #607D8B)
  - Text block: "Awaiting feedback. Will update in Round 3 after desktop changes are incorporated." (font size 14, #607D8B)

### Frame 6: Revision Tracker & Approval Status

- **Position**: full-width bottom
- **Size**: 4900x600px
- **Background**: #FAFAFA with #E91E63 top border (4px)
- **Elements**:
  - Text block: "Revision Tracker" (font size 28, bold, #1B1B1B)
  - Shape (table, 4700x300):
    - Header: "Screen | Round 1 Status | Round 1 Changes | Round 2 Status | Round 2 Changes | Round 3 Status"
    - Row: "Sprint Creation | Changes Requested | Added sprint goal field, fixed date picker alignment | Approved | Add character count (minor) | Pending"
    - Row: "Sprint Board + AI | Major Revision | Redesigned AI overlay from bottom-sheet to inline card | Changes Requested | Enlarge overlay, rename Dismiss, add score breakdown, edge detection | Pending"
    - Row: "Workload Dashboard | Changes Requested | Added capacity colors, fixed chart sizing | Changes Requested | Add thresholds, team summary, ideal burndown, drill-down | Pending"
    - Row: "Mobile Task Detail | Not Reviewed | N/A (not designed in Round 1) | Pending | Awaiting desktop finalization | Pending"
  - Text block: "Approval Status Summary" (font size 20, bold, #E91E63)
  - Shape (table, 2000x150):
    - Header: "Reviewer | Screens Approved | Outstanding Items | Final Approval"
    - Row: "Jake R. (PM) | 1/4 | AI overlay size, dashboard thresholds | Pending Round 3"
    - Row: "Marcus W. (Eng) | 1/4 | Overlay edge detection, mobile review | Pending Round 3"
    - Row: "David K. (VP) | 1/4 | Dashboard drill-down confirmation | Pending Round 3"
  - Text block: "Target: All 4 screens approved by March 10, 2026. Design handoff to engineering: March 11, 2026." (font size 16, bold, #607D8B)
  - Sticky note (pink #FCE4EC, 600x80): "NEXT STEPS: Priya to incorporate all Round 2 feedback and post Round 3 by March 7. Reviewers to provide final approval/feedback by March 9."

## Connectors & Flow

- No directional flow between screen frames — each screen is reviewed independently.
- Color-coded left borders on screen frames indicate status: blue (#0288D1) = Approved, pink (#E91E63) = Changes Requested.
- Numbered comment sticky notes within each frame are referenced in the Design Response section.
- Dashed arrows from each screen frame to the corresponding row in the Revision Tracker (dashed, #BDBDBD, 1px).

## Example Content

The board presents a realistic Round 2 design review for 4 screens of the Sprint Planning feature: Sprint Creation (Approved), Sprint Board with AI Suggestions (Changes Requested), Workload Dashboard (Changes Requested), and Mobile Task Detail (Pending). Each screen includes a screenshot placeholder, 3 reviewer comments with specific and actionable feedback, and a designer response section documenting changes made. The Revision Tracker shows the progression from Round 1 through Round 2 with Round 3 pending.

## Variations

1. **A/B Design Comparison**: Place two variants side-by-side for each screen (Option A / Option B). Add a voting sticky for each reviewer. Good for deciding between design directions.
2. **Accessibility Review**: Add an accessibility checklist per screen (contrast ratios, keyboard navigation, screen reader support). Include a11y-specific comment sticky notes in a different color.
3. **Design-to-Code Handoff**: Add a "Specs" column next to each screenshot with exact measurements, CSS values, and component names. Include redline annotations.

## Build Instructions

1. Create board at 5000x3200px with background #FAFAFA.
2. Place Frame 1 (Header) at (50, 50), size 4900x300, background #E91E63.
3. Place Frame 2 (Screen 1) at (50, 400), size 2300x1200. Place Frame 3 (Screen 2) at (2400, 400), size 2300x1200.
4. Place Frame 4 (Screen 3) at (50, 1650), size 2300x1200. Place Frame 5 (Screen 4) at (2400, 1650), size 2300x1200.
5. Place Frame 6 (Revision Tracker) at (50, 2900), size 4900x600.
6. Add left-border color accents based on approval status (blue = approved, pink = changes, gray = pending).
7. Add status tags in the top-right of each screen frame.
8. Place screenshot placeholders and comment sticky notes within each frame.
9. Build the revision tracker table and approval status table in Frame 6.
10. Add dashed connectors from screen frames to tracker rows.

## Tips & Best Practices

- Set clear review goals at the top — tell reviewers what to focus on (layout? interaction? visual polish?) so feedback is targeted, not scattered.
- Use color-coded sticky notes for feedback types: green = approval, amber = suggestion (non-blocking), red = required change (blocking).
- The designer should respond to every comment, even if the response is "Will address in Round 3." This closes the feedback loop.
- Never go past 3 review rounds on the same screens. If consensus is not reached by Round 3, schedule a live review meeting to resolve disagreements.
- Archive completed review boards (after final approval) and link them from the feature planning board for documentation.
