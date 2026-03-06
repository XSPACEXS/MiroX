# Project Overview

## Overview

- **Purpose**: Provide a comprehensive at-a-glance view of a project's status, inspired by Miro's official "Project Overview" template. The board uses a 2x2 grid layout with four key quadrants: Insights (data and metrics), Mapping (process flows), Tasks (kanban-style tracking), and Design (wireframes and mockups). This board is the single source of truth that stakeholders reference for project health.
- **Best For**: Project managers presenting to leadership, cross-functional teams aligning on scope and progress, product managers running project kickoffs, program managers coordinating multi-team initiatives
- **Complexity**: Medium
- **Board Size**: 4000x3000px (landscape, optimized for 2x2 grid)

## Color Scheme

| Role              | Color       | Hex     |
| ----------------- | ----------- | ------- |
| Primary           | Navy Blue   | #0D47A1 |
| Insights Quadrant | Teal        | #00796B |
| Mapping Quadrant  | Deep Purple | #4A148C |
| Tasks Quadrant    | Amber       | #F9A825 |
| Design Quadrant   | Coral       | #E64A19 |
| On Track          | Emerald     | #2E7D32 |
| At Risk           | Orange      | #EF6C00 |
| Off Track         | Crimson     | #C62828 |
| Background        | Off-White   | #FAFAFA |
| Text              | Charcoal    | #212121 |

## Board Layout

The board uses a 2x2 grid with a title bar at top and a status bar at bottom. Each quadrant has a distinct purpose and color identity.

```
+--------------------------------------------------------------------+
|                       PROJECT TITLE BAR                             |
+----------------------------------+----------------------------------+
|                                  |                                  |
|         INSIGHTS                 |          MAPPING                 |
|     (Metrics & Charts)           |     (Process & Flow)             |
|                                  |                                  |
+----------------------------------+----------------------------------+
|                                  |                                  |
|          TASKS                   |          DESIGN                  |
|     (Kanban Columns)             |     (Wireframes & Mockups)       |
|                                  |                                  |
+----------------------------------+----------------------------------+
|                       STATUS BAR / TIMELINE                         |
+--------------------------------------------------------------------+

Positions:
  Title Bar:  (50, 50) to (3950, 200)
  Insights:   (50, 250) to (1975, 1500)
  Mapping:    (2025, 250) to (3950, 1500)
  Tasks:      (50, 1550) to (1975, 2750)
  Design:     (2025, 1550) to (3950, 2750)
  Status Bar: (50, 2800) to (3950, 2950)
```

## Frames & Sections

### Frame 0: Title Bar

- **Position**: Top, full width
- **Size**: 3900x150px
- **Background**: Navy Blue (#0D47A1)
- **Elements**:
  - Project name: "Project Atlas — Customer Portal Redesign" (font 26, bold, white)
  - Status badge: "ON TRACK" (pill shape, Emerald #2E7D32, white text, positioned right)
  - Meta info: "PM: Jordan Lee | Sprint 8 of 12 | Target Launch: June 15, 2026" (font 12, #B0BEC5, below title)
  - Progress bar: 67% filled (Emerald #2E7D32 fill on white track, 8px height)

### Frame 1: Insights (Top-Left Quadrant)

- **Position**: Top-left
- **Size**: 1925x1250px
- **Background**: White with Teal left border (5px, #00796B)
- **Elements**:
  - Quadrant header: "Insights & Metrics" (font 20, bold, Teal #00796B)
  - **KPI Cards** (4 cards in a row, white with colored top border):
    1. Card "Sprint Velocity": value "34 pts" (font 24, bold, Teal), subtitle "avg last 3 sprints", trend arrow UP green
    2. Card "Bug Burn-Down": value "12 open" (font 24, bold, Orange #EF6C00), subtitle "down from 28 at sprint start", trend arrow DOWN green
    3. Card "Test Coverage": value "78%" (font 24, bold, Teal), subtitle "target: 85%", trend arrow UP green
    4. Card "Team Happiness": value "4.1/5" (font 24, bold, Emerald), subtitle "retro pulse check", trend arrow STABLE
  - **Burndown Chart** (simplified visual representation):
    - Title: "Sprint 8 Burndown" (font 14, bold)
    - X-axis: "Day 1 ... Day 10" (10 tick marks)
    - Y-axis: "Story Points: 0 ... 40"
    - Ideal line: diagonal from (0, 38) to (10, 0), dashed gray
    - Actual line: from (0, 38) to (7, 14), solid Teal — tracking slightly above ideal
    - Annotation: "Day 7: 14 pts remaining. On pace to complete by Day 10."
  - **Risk Register** (small table, 3 rows):
    - Row 1: Red dot, "Third-party API migration delayed by 3 days", "High", "Jordan"
    - Row 2: Yellow dot, "Design review bottleneck — 4 screens pending", "Medium", "Sarah"
    - Row 3: Green dot, "New hire ramping slower than expected", "Low", "Alex"

### Frame 2: Mapping (Top-Right Quadrant)

- **Position**: Top-right
- **Size**: 1925x1250px
- **Background**: White with Deep Purple left border (5px, #4A148C)
- **Elements**:
  - Quadrant header: "Process Mapping" (font 20, bold, Deep Purple #4A148C)
  - **User Flow Diagram** (simplified flowchart):
    - Start node (circle, #4A148C): "User Lands on Portal"
    - Decision diamond (#7B1FA2): "Authenticated?"
      - Yes path --> Rectangle (#4A148C): "Dashboard View"
      - No path --> Rectangle (#4A148C): "Login / Register"
    - From "Dashboard View":
      - Rectangle: "View Account Summary"
      - Rectangle: "Manage Subscriptions"
      - Rectangle: "Support Center"
    - From "Manage Subscriptions":
      - Decision diamond: "Upgrade or Downgrade?"
      - Rectangle: "Payment Flow"
      - End node (circle): "Confirmation"
    - Connectors: Solid lines with arrows, #4A148C, 2px
  - **Stakeholder Map** (small cluster in corner):
    - Center circle: "Project Atlas"
    - Inner ring (3 nodes): "Product (Jordan)", "Engineering (Priya)", "Design (Sarah)"
    - Outer ring (4 nodes): "Sales (Mike)", "Support (Lisa)", "Legal (James)", "Finance (Tom)"
    - Lines connecting center to all nodes, thicker for inner ring

### Frame 3: Tasks (Bottom-Left Quadrant)

- **Position**: Bottom-left
- **Size**: 1925x1200px
- **Background**: White with Amber left border (5px, #F9A825)
- **Elements**:
  - Quadrant header: "Task Board" (font 20, bold, Amber #F9A825)
  - **Kanban columns** (4 columns within the frame):
    - **To Do** (header: gray #78909C, 4 cards):
      1. "Implement SSO integration" — 8 pts — Priya — Tag: Backend
      2. "Design subscription upgrade flow" — 5 pts — Sarah — Tag: Design
      3. "Write API documentation for partners" — 3 pts — Alex — Tag: Docs
      4. "Set up monitoring dashboards" — 3 pts — Ravi — Tag: DevOps
    - **In Progress** (header: Amber #F9A825, 3 cards):
      1. "Build account summary dashboard" — 8 pts — Priya — Tag: Frontend — Day 3
      2. "User testing for navigation redesign" — 5 pts — Sarah — Tag: Research — Day 2
      3. "Migrate payment API to Stripe v3" — 8 pts — Jordan — Tag: Backend — Day 5 (BLOCKED badge)
    - **In Review** (header: Purple #6A1B9A, 2 cards):
      1. "Password reset flow redesign" — 3 pts — Alex — Tag: Frontend — Reviewer: Priya
      2. "Help center article migration" — 2 pts — Lisa — Tag: Content — Reviewer: Jordan
    - **Done** (header: Emerald #2E7D32, 3 cards):
      1. "New login page design + implementation" — 8 pts — Sarah + Ravi
      2. "Database schema migration for v2" — 5 pts — Priya
      3. "Accessibility audit — WCAG compliance" — 3 pts — Alex
  - WIP Limits shown: To Do (no limit), In Progress (limit: 4), In Review (limit: 3), Done (no limit)

### Frame 4: Design (Bottom-Right Quadrant)

- **Position**: Bottom-right
- **Size**: 1925x1200px
- **Background**: White with Coral left border (5px, #E64A19)
- **Elements**:
  - Quadrant header: "Design & Wireframes" (font 20, bold, Coral #E64A19)
  - **Wireframe thumbnails** (4 mockup placeholders arranged in 2x2):
    1. "Dashboard — Desktop" (rectangle with placeholder layout: header bar, sidebar nav, main content area with 4 metric cards, chart area)
    2. "Subscription Manager — Desktop" (rectangle with: header, plan comparison table with 3 columns, CTA button)
    3. "Login Screen — Mobile" (portrait rectangle with: logo, email field, password field, login button, SSO options)
    4. "Support Center — Desktop" (rectangle with: search bar, category grid, recent tickets list)
  - Each wireframe has a status label:
    1. Dashboard: "APPROVED" (green badge)
    2. Subscription: "IN REVIEW" (purple badge)
    3. Login: "APPROVED" (green badge)
    4. Support: "DRAFT" (gray badge)
  - **Design System Snapshot** (small section below wireframes):
    - Color swatches: Primary Blue, Secondary Teal, Accent Coral, Neutral Gray
    - Typography: "Heading: Inter Bold 24px | Body: Inter Regular 14px | Caption: Inter Medium 12px"
    - Component count: "47 components in Figma library"

### Frame 5: Status Bar

- **Position**: Bottom, full width
- **Size**: 3900x150px
- **Background**: Light Gray (#F5F5F5) with Navy top border (3px, #0D47A1)
- **Elements**:
  - **Timeline** (horizontal bar):
    - 12 sprint markers: S1 through S12
    - Current sprint (S8) highlighted with Navy marker
    - Milestones (diamond shapes):
      - S3: "Alpha Release" (completed, green)
      - S6: "Beta Launch" (completed, green)
      - S9: "UAT Start" (upcoming, purple)
      - S12: "Production Launch" (upcoming, purple)
    - Phase labels above the bar: "Foundation (S1-S3)" | "Core Build (S4-S8)" | "Polish & Launch (S9-S12)"
  - **Last updated**: "Board updated: March 5, 2026 at 2:30 PM" (font 11, italic, #9E9E9E, right-aligned)

## Connectors & Flow

**Quadrant relationships** (dashed lines between quadrants, Light Gray #BDBDBD, 1px):

1. Insights burndown chart --> Tasks "In Progress" column (labeled "current sprint work")
2. Mapping user flow "Manage Subscriptions" --> Design wireframe "Subscription Manager" (labeled "flow maps to this screen")
3. Tasks "Build account summary dashboard" --> Design wireframe "Dashboard" (labeled "implementing this design")
4. Insights risk "API migration delayed" --> Tasks "Migrate payment API" BLOCKED badge (labeled "this is the blocked item")

**Status bar connections** (vertical dotted lines from status bar milestones up to relevant quadrant items):

1. S9 milestone --> Tasks quadrant (labeled "UAT sprint starts here")
2. S12 milestone --> Insights "Sprint Velocity" card (labeled "need 34+ velocity to hit launch")

## Example Content

The board depicts "Project Atlas," a customer portal redesign for a B2B SaaS company. The project is in Sprint 8 of 12, with a target launch date of June 15, 2026.

**Project context**:

- Team: 6 people (1 PM, 2 engineers, 1 designer, 1 content specialist, 1 DevOps)
- Budget: $420,000 total, $312,000 spent to date (74%)
- Scope: Redesign the customer-facing portal including login, dashboard, subscription management, and support center
- Tech stack: React frontend, Node.js API, PostgreSQL, Stripe for payments

**Status narrative**: The project is on track overall but has one high-risk item (third-party API migration delay). The team velocity is stable at 34 story points per sprint, and 67% of the total scope is complete. Design is ahead of engineering, with all critical screens approved or in review.

## Variations

1. **Software Project Overview**: Replace the Design quadrant with a "Technical Architecture" quadrant showing system diagrams, API endpoints, and infrastructure components. Add deployment pipeline status to the Insights quadrant.

2. **Marketing Project Overview**: Replace Mapping with "Campaign Flow" showing the customer journey. Replace Design with "Creative Assets" showing ad mockups and copy. Tasks become campaign deliverables.

3. **Construction Project Overview**: Insights shows budget burn rate and material costs. Mapping shows site plan and phase diagrams. Tasks shows trade contractor schedules. Design shows architectural drawings.

4. **Simplified (3-quadrant)**: Remove the Design quadrant and expand Tasks to full bottom width. Useful for non-design projects where visual deliverables aren't applicable.

## Build Instructions

1. **Create canvas**: 4000x3000px, background #FAFAFA.
2. **Build title bar**: Full-width frame at top (3900x150px). Navy background. Add project name, status badge, meta info, and progress bar.
3. **Create 2x2 grid**: Four frames of equal size (1925x1250px for top row, 1925x1200px for bottom row) with 50px gutters. Apply colored left borders.
4. **Populate Insights**: Add 4 KPI cards in a row. Build simplified burndown chart below. Add 3-row risk register.
5. **Populate Mapping**: Draw user flow as a flowchart with shapes and connectors. Add stakeholder map in the corner.
6. **Populate Tasks**: Create 4 kanban columns. Add task cards with points, assignees, and tags. Add WIP limits. Mark one card as BLOCKED.
7. **Populate Design**: Add 4 wireframe placeholder rectangles with simplified UI layouts inside. Add status badges. Add design system snapshot.
8. **Build status bar**: Full-width frame at bottom (3900x150px). Draw horizontal timeline with sprint markers and milestone diamonds.
9. **Draw connectors**: Add dashed lines between related items across quadrants. Add dotted lines from status bar milestones up to relevant items.
10. **Final review**: Verify all numbers are consistent (velocity, sprint count, story points in columns should add up). Ensure status badge reflects the actual board state.

## Tips & Best Practices

- **Update weekly**: This board loses value if it goes stale. Schedule a 15-minute "board refresh" every Monday.
- **Keep the Insights quadrant data-driven**: Use real numbers, not subjective assessments. Burndown charts and velocity are objective.
- **Use the Mapping quadrant for context, not detail**: The user flow should be high-level. Link to detailed documentation for specifics.
- **Limit the Tasks quadrant to current sprint**: Don't show the full backlog. This is a snapshot, not a comprehensive tracker.
- **Status bar tells the timeline story**: Stakeholders look here first to understand where the project is in its lifecycle.
- **Color-code status consistently**: Green = on track, Yellow/Orange = at risk, Red = off track. This convention should be universal across the board.
- **Print-friendly**: Design this board to look good when exported as a PDF for stakeholders who don't use Miro.
