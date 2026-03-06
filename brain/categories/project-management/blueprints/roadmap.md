# Roadmap

## Overview

- **Purpose**: Visualize a quarterly or annual product/project plan across multiple teams or workstreams using horizontal swim lanes and time-based columns. The roadmap shows what each team is working on, when key milestones will be reached, and how workstreams depend on each other. This is the strategic planning artifact that bridges vision to execution.
- **Best For**: Product leaders presenting quarterly plans, program managers coordinating multi-team initiatives, CTOs aligning engineering investment across workstreams, executives reviewing portfolio priorities
- **Complexity**: Advanced
- **Board Size**: 6000x3500px (extra-wide landscape to fit quarterly columns and multiple swim lanes)

## Color Scheme

| Role                    | Color      | Hex     |
| ----------------------- | ---------- | ------- |
| Primary                 | Navy Blue  | #0D47A1 |
| Workstream: Product     | Teal       | #00796B |
| Workstream: Engineering | Steel Blue | #1565C0 |
| Workstream: Design      | Coral      | #E64A19 |
| Workstream: Marketing   | Amber      | #F9A825 |
| Milestone               | Violet     | #6A1B9A |
| Dependency              | Crimson    | #C62828 |
| Completed               | Emerald    | #2E7D32 |
| At Risk                 | Orange     | #EF6C00 |
| Background              | Off-White  | #FAFAFA |
| Text                    | Charcoal   | #212121 |
| Grid Lines              | Light Gray | #E0E0E0 |

## Board Layout

The board uses a horizontal timeline with quarterly columns (Q1-Q4 2026) and four horizontal swim lanes for different workstreams. A header bar shows the time axis, and a legend/key panel sits in the top-right.

```
+----------+------------------+------------------+------------------+------------------+
| SWIM     |     Q1 2026      |     Q2 2026      |     Q3 2026      |     Q4 2026      |
| LANES    | Jan  Feb  Mar    | Apr  May  Jun    | Jul  Aug  Sep    | Oct  Nov  Dec    |
+----------+------------------+------------------+------------------+------------------+
|          |                  |                  |                  |                  |
| PRODUCT  | [===bar===]      |    [====bar====] |        [==bar==] |                  |
|          |                  |                  |                  |                  |
+----------+------------------+------------------+------------------+------------------+
|          |                  |                  |                  |                  |
| ENGINEER |     [====bar====]|[===bar===]       |            [====bar====]           |
|          |                  |                  |                  |                  |
+----------+------------------+------------------+------------------+------------------+
|          |                  |                  |                  |                  |
| DESIGN   | [==bar==]        |  [==bar==]       |   [==bar==]      |   [==bar==]      |
|          |                  |                  |                  |                  |
+----------+------------------+------------------+------------------+------------------+
|          |                  |                  |                  |                  |
| MARKETING|        [==bar==] |         [=======bar=======]          |   [==bar==]      |
|          |                  |                  |                  |                  |
+----------+------------------+------------------+------------------+------------------+
|  MILESTONES:  *Alpha   *Beta         *GA Launch       *V2 Kickoff                    |
+----------+------------------+------------------+------------------+------------------+

Positions:
  Time Header:  (50, 50) to (5950, 200)
  Product:      (50, 210) to (5950, 950)
  Engineering:  (50, 960) to (5950, 1700)
  Design:       (50, 1710) to (5950, 2450)
  Marketing:    (50, 2460) to (5950, 3200)
  Milestones:   (50, 3210) to (5950, 3450)
  Lane labels:  (50, y) to (350, y) for each lane (left-side)
  Legend:        (4800, 50) to (5950, 200) — within time header
```

## Frames & Sections

### Frame 0: Time Axis Header

- **Position**: Top, full width
- **Size**: 5900x150px
- **Background**: Navy Blue (#0D47A1)
- **Elements**:
  - Year label: "2026 Product Roadmap — Customer Platform" (font 22, bold, white, left-aligned)
  - Quarter columns (evenly spaced, white text):
    - "Q1 2026" with month labels "Jan | Feb | Mar" below
    - "Q2 2026" with "Apr | May | Jun"
    - "Q3 2026" with "Jul | Aug | Sep"
    - "Q4 2026" with "Oct | Nov | Dec"
  - Current month indicator: Vertical line at March 2026 position (dashed, white, labeled "TODAY")
  - Legend (top-right corner): Color-coded dots for Completed (green), In Progress (blue), Planned (gray), At Risk (orange)

### Frame 1: Product Workstream

- **Position**: First swim lane
- **Size**: 5900x740px
- **Background**: White with Teal left border (6px, #00796B)
- **Elements**:
  - Lane label: "Product" (font 16, bold, Teal #00796B, vertical, left side)
  - Team members: "Jordan (PM), Lisa (Analyst)" (font 11, gray, below lane label)
  - **Initiative bars** (horizontal bars spanning time ranges):
    1. "Subscription Management — Discovery & Scoping" | Jan 5 - Feb 28 | Status: Completed (Emerald) | Width spans Q1 Jan-Feb
    2. "Subscription Management — Requirements & User Stories" | Mar 1 - Apr 15 | Status: In Progress (Teal, 60% fill) | Spans Q1 Mar to mid-Q2 Apr
    3. "Admin Dashboard — Discovery" | Apr 1 - May 30 | Status: Planned (Gray) | Spans Q2 Apr-May
    4. "Self-Service Analytics — Research" | Jun 15 - Aug 30 | Status: Planned (Gray) | Spans late Q2 to Q3
    5. "V2 Platform Strategy & Roadmapping" | Sep 1 - Oct 31 | Status: Planned (Gray) | Spans Q3-Q4
  - **Detail cards** (small cards attached below each bar):
    - Bar 1 detail: "15 user interviews completed. 3 competitor analyses. Opportunity sizing: $420K ARR impact."
    - Bar 2 detail: "42 user stories written. 12 in refinement. Sprint 14 starts Apr 1."

### Frame 2: Engineering Workstream

- **Position**: Second swim lane
- **Size**: 5900x740px
- **Background**: White with Steel Blue left border (6px, #1565C0)
- **Elements**:
  - Lane label: "Engineering" (font 16, bold, Steel Blue #1565C0)
  - Team members: "Priya (Lead), Alex, Ravi, Maria" (font 11, gray)
  - **Initiative bars**:
    1. "Infrastructure Modernization — Cloud Migration" | Jan 15 - Mar 31 | Status: In Progress (Blue, 85% fill) | Spans Q1
    2. "Subscription Management — Backend & API" | Apr 1 - Jun 15 | Status: Planned (Gray) | Spans Q2
    3. "Subscription Management — Frontend" | Apr 15 - Jun 30 | Status: Planned (Gray) | Overlaps with backend, offset by 2 weeks
    4. "Performance Optimization Sprint" | Jul 1 - Jul 31 | Status: Planned (Gray) | Q3 first month
    5. "Admin Dashboard — Full Stack" | Aug 1 - Oct 31 | Status: Planned (Gray) | Spans Q3-Q4
    6. "Self-Service Analytics — Data Pipeline" | Sep 15 - Dec 15 | Status: Planned (Gray) | Spans Q3-Q4
  - **Detail cards**:
    - Bar 1: "Migrated 14/18 services to Kubernetes. Remaining: payment service, notification service, reporting, auth."
    - Bar 2: "Depends on product requirements (Bar 2 in Product lane). 8 API endpoints planned."

### Frame 3: Design Workstream

- **Position**: Third swim lane
- **Size**: 5900x740px
- **Background**: White with Coral left border (6px, #E64A19)
- **Elements**:
  - Lane label: "Design" (font 16, bold, Coral #E64A19)
  - Team members: "Sarah (Lead), Wei (UX Researcher)" (font 11, gray)
  - **Initiative bars**:
    1. "Subscription Management — UX Design" | Jan 20 - Mar 15 | Status: Completed (Emerald) | Q1
    2. "Subscription Management — UI Polish & Handoff" | Mar 16 - Apr 30 | Status: In Progress (Coral, 40% fill) | Late Q1 to Q2
    3. "Admin Dashboard — UX Research & Design" | May 1 - Jul 15 | Status: Planned (Gray) | Q2-Q3
    4. "Design System v2.0 — Component Library Refresh" | Jul 15 - Sep 30 | Status: Planned (Gray) | Q3
    5. "Self-Service Analytics — Data Visualization UX" | Oct 1 - Nov 30 | Status: Planned (Gray) | Q4
  - **Detail cards**:
    - Bar 1: "Delivered: 12 screens, 3 user flows, usability test report (8 participants, 92% task success rate)."
    - Bar 2: "Remaining: 4 edge-case screens, responsive variants, accessibility audit."

### Frame 4: Marketing Workstream

- **Position**: Fourth swim lane
- **Size**: 5900x740px
- **Background**: White with Amber left border (6px, #F9A825)
- **Elements**:
  - Lane label: "Marketing" (font 16, bold, Amber #F9A825)
  - Team members: "Mike (PMM), Dana (Content)" (font 11, gray)
  - **Initiative bars**:
    1. "Subscription Feature Positioning & Messaging" | Feb 15 - Apr 15 | Status: In Progress (Amber, 55% fill) | Late Q1 to Q2
    2. "GA Launch Campaign" | May 1 - Jul 31 | Status: Planned (Gray) | Q2-Q3
    3. "Customer Success Enablement — Training Materials" | Jun 1 - Jul 15 | Status: Planned (Gray) | Q2-Q3
    4. "Admin Dashboard — GTM Strategy" | Sep 1 - Nov 15 | Status: Planned (Gray) | Q3-Q4
    5. "Annual Customer Conference Content" | Oct 15 - Dec 15 | Status: Planned (Gray) | Q4
  - **Detail cards**:
    - Bar 1: "Competitive positioning matrix complete. Landing page copy in review. Blog series (4 posts) drafted."
    - Bar 2: "Launch plan: email campaign (35K subscribers), webinar series, product hunt launch, press outreach."

### Frame 5: Milestone Track

- **Position**: Bottom row, full width
- **Size**: 5900x240px
- **Background**: Light Gray (#F5F5F5) with Violet top border (4px, #6A1B9A)
- **Elements**:
  - Header: "Key Milestones" (font 16, bold, Violet #6A1B9A)
  - Milestone diamonds (positioned on timeline):
    1. Diamond: "Alpha Release" | Mar 31, 2026 | Status: On Track (green) | "Internal testing of subscription management"
    2. Diamond: "Beta Launch" | May 15, 2026 | Status: Planned (gray) | "Selected customers get early access"
    3. Diamond: "GA Launch" | Jul 1, 2026 | Status: Planned (gray) | "Public launch of subscription self-service"
    4. Diamond: "Admin Dashboard Beta" | Oct 15, 2026 | Status: Planned (gray) | "Admin features available to enterprise clients"
    5. Diamond: "V2 Platform Kickoff" | Nov 1, 2026 | Status: Planned (gray) | "Begin next-gen platform planning"
  - Vertical dashed lines extend upward from each milestone through all swim lanes

## Connectors & Flow

**Cross-workstream dependencies** (Crimson #C62828 dashed arrows, 2px):

1. Product "Requirements & User Stories" --> Engineering "Backend & API" (labeled "requirements hand-off")
2. Design "UX Design" --> Engineering "Frontend" (labeled "design hand-off")
3. Engineering "Backend & API" --> Marketing "GA Launch Campaign" (labeled "feature complete before launch")
4. Product "Admin Dashboard Discovery" --> Design "Admin Dashboard UX" (labeled "discovery informs design")
5. Design "Admin Dashboard UX" --> Engineering "Admin Dashboard Full Stack" (labeled "design before build")

**Milestone connections** (Violet dotted lines extending vertically):

- Each milestone connects to the initiative bars that must be complete for that milestone
- Alpha milestone connects to: Product bar 2, Design bar 1, Engineering bar 1
- GA Launch milestone connects to: Engineering bars 2+3, Design bar 2, Marketing bar 2

**"Today" indicator** (white dashed vertical line at March 2026 position spanning all lanes)

## Example Content

The roadmap depicts a 2026 annual plan for a B2B SaaS company's Customer Platform team. The primary initiative is building self-service subscription management, followed by an admin dashboard for enterprise clients.

**Company context**:

- Series B SaaS company, $8M ARR, 450 customers
- Engineering team: 4 developers + 1 DevOps
- Product team: 1 PM + 1 analyst
- Design team: 1 lead designer + 1 UX researcher
- Marketing team: 1 PMM + 1 content marketer
- Total team investment: ~$1.2M annual cost

**Strategic rationale**:

- Subscription management: Reduces 240 support tickets/month ($22K/month savings) and enables self-serve upsells (projected $420K ARR)
- Admin dashboard: Top-requested enterprise feature; 12 enterprise prospects blocked on this
- Performance optimization: Customer satisfaction scores flagged speed as #2 concern
- Self-service analytics: Differentiator vs. competitors; reduces "custom report" requests

## Variations

1. **Now/Next/Later Roadmap**: Replace quarterly columns with three columns: Now (current quarter), Next (next quarter), Later (beyond). Less date-specific, better for communicating strategy without committing to specific timelines. Popular with product teams.

2. **Theme-Based Roadmap**: Instead of workstream swim lanes, use strategic theme lanes (e.g., "Growth," "Retention," "Platform Health," "Innovation"). Each initiative is tagged to a theme regardless of which team does it. Better for executive communication.

3. **Technology Roadmap**: Swim lanes represent architectural layers (Frontend, Backend, Data, Infrastructure). Initiative bars represent technical migrations, upgrades, and capabilities. Milestones are technical readiness gates.

4. **Portfolio Roadmap**: Multiple products or projects on a single roadmap. Each swim lane is a different product. Milestones are cross-product integration points. Used by CPOs managing a product portfolio.

## Build Instructions

1. **Create canvas**: 6000x3500px, background #FAFAFA.
2. **Build time axis**: Full-width frame at top (5900x150px). Navy background. Divide into 4 equal quarterly sections with month labels. Add "TODAY" indicator line at March 2026.
3. **Create swim lanes**: Four horizontal frames of equal height (740px each). Add colored left borders and lane labels. Add team member names.
4. **Draw grid lines**: Vertical Light Gray lines (#E0E0E0, 1px) at each month boundary, creating a visible grid across all lanes.
5. **Add initiative bars**: For each swim lane, create horizontal rounded rectangles positioned according to their date ranges. Fill with workstream color at the specified opacity (full for completed, partial for in-progress, outlined for planned).
6. **Attach detail cards**: Small white cards below key initiative bars with specific metrics and context.
7. **Build milestone track**: Bottom frame (5900x240px). Place diamond shapes at milestone dates. Add milestone names and status badges. Draw vertical dashed lines upward through all lanes.
8. **Draw dependency arrows**: Red dashed arrows between dependent initiatives across lanes. Label each with the dependency type.
9. **Add TODAY marker**: White dashed vertical line at March 2026, spanning all lanes and the milestone track.
10. **Review**: Verify all date ranges are realistic (no initiative starts before its dependency completes). Check that milestone dates align with initiative end dates. Ensure the workload across lanes looks balanced.

## Tips & Best Practices

- **Roadmaps are living documents**: Update monthly at minimum. A roadmap that doesn't change is either wrong or aspirational fiction.
- **Show dependencies explicitly**: The dependency arrows are the most valuable part of the roadmap. They reveal sequencing risks that aren't obvious from the bars alone.
- **Use the "Today" line ruthlessly**: Everything to the left should be completed or in progress. If planned items are to the left of "Today," the roadmap needs updating.
- **Don't overcommit Q3/Q4**: Confidence decreases with distance. Q1 should be detailed and committed. Q4 should be directional and flexible.
- **Keep bars at initiative level, not task level**: A roadmap bar should represent 4-12 weeks of work. If a bar is shorter than 2 weeks, it belongs on a sprint board, not a roadmap.
- **Milestones are communication tools**: They mark moments that matter to stakeholders (launches, demos, reviews). Not every initiative needs a milestone.
- **Review in monthly leadership meetings**: Walk through the roadmap lane by lane. Focus on: what shipped, what's at risk, what changed, and what's coming next.
