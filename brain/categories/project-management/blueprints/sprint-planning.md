# Sprint Planning

## Overview

- **Purpose**: Facilitate agile sprint planning ceremonies by providing a visual workspace for defining sprint goals, selecting user stories from the backlog, estimating capacity, mapping dependencies, and committing to sprint deliverables. The board supports the full planning workflow from backlog grooming through sprint commitment, and serves as the sprint's visual contract.
- **Best For**: Scrum teams planning 2-week sprints, product owners prioritizing backlogs, scrum masters facilitating planning sessions, engineering managers tracking team capacity and velocity
- **Complexity**: Medium
- **Board Size**: 5500x3500px (wide to accommodate backlog, sprint board, and capacity planning side by side)

## Color Scheme

| Role           | Color       | Hex     |
| -------------- | ----------- | ------- |
| Primary        | Navy Blue   | #0D47A1 |
| Sprint Goal    | Emerald     | #2E7D32 |
| User Story     | Soft Blue   | #BBDEFB |
| Bug            | Soft Pink   | #F8BBD0 |
| Technical Debt | Soft Amber  | #FFECB3 |
| Spike/Research | Soft Purple | #E1BEE7 |
| Committed      | Emerald     | #2E7D32 |
| Stretch        | Orange      | #EF6C00 |
| Dependency     | Crimson     | #C62828 |
| Background     | Off-White   | #FAFAFA |
| Text           | Charcoal    | #212121 |

## Board Layout

The board flows left-to-right: Product Backlog on the left, Sprint Selection in the center, and Capacity & Dependencies on the right. A Sprint Goal banner runs across the top.

```
+--------------------------------------------------------------------------+
|                         SPRINT GOAL BANNER                                |
+------------------+  +------------------------+  +-----------------------+
|                  |  |                        |  |                       |
|  PRODUCT         |  |   SPRINT BACKLOG       |  |  CAPACITY &           |
|  BACKLOG         |  |   (Selected Stories)   |  |  DEPENDENCIES         |
|                  |  |                        |  |                       |
|  (Prioritized    |  |  +-------+  +-------+  |  |  [Team Capacity]      |
|   list of all    |  |  | Story |  | Story |  |  |  [Velocity Chart]     |
|   stories)       |  |  +-------+  +-------+  |  |  [Dependency Map]     |
|                  |  |  +-------+  +-------+  |  |  [Risks & Blockers]   |
+------------------+  +------------------------+  +-----------------------+

Positions:
  Sprint Goal:   (50, 50) to (5450, 200)
  Backlog:       (50, 250) to (1400, 3450)
  Sprint Board:  (1500, 250) to (3800, 3450)
  Capacity:      (3900, 250) to (5450, 3450)
```

## Frames & Sections

### Frame 0: Sprint Goal Banner

- **Position**: Top, full width
- **Size**: 5400x150px
- **Background**: Emerald (#2E7D32)
- **Elements**:
  - Sprint label: "Sprint 14 | April 1-14, 2026" (font 14, bold, white, left-aligned)
  - Sprint goal: "Enable self-service subscription management so customers can upgrade, downgrade, and cancel without contacting support" (font 20, bold, white, centered)
  - Goal status: "PLANNING" (pill badge, white background, Emerald text, right-aligned)

### Frame 1: Product Backlog

- **Position**: Left column
- **Size**: 1350x3200px
- **Background**: White with Cool Gray left border (5px, #78909C)
- **Elements**:
  - Header: "Product Backlog" (font 20, bold, #78909C)
  - Subheader: "Ordered by priority. Drag stories right to add to sprint." (font 11, italic, #9E9E9E)
  - **Story cards** (vertically stacked, full-width cards with left color border):
    1. **US-142**: "As a customer, I want to view my current subscription plan details so I know what I'm paying for" | 5 pts | Priority: P1 | Color: Soft Blue | Tag: Feature
    2. **US-143**: "As a customer, I want to upgrade my plan with a single click so the process is frictionless" | 8 pts | Priority: P1 | Color: Soft Blue | Tag: Feature
    3. **US-144**: "As a customer, I want to downgrade my plan and see prorated billing so I understand the financial impact" | 8 pts | Priority: P1 | Color: Soft Blue | Tag: Feature
    4. **US-145**: "As a customer, I want to cancel my subscription with a clear retention offer so I have a reason to stay" | 5 pts | Priority: P2 | Color: Soft Blue | Tag: Feature
    5. **BUG-089**: "Billing page shows incorrect renewal date for annual subscribers" | 3 pts | Priority: P1 | Color: Soft Pink | Tag: Bug
    6. **TECH-034**: "Refactor payment service to support multiple payment providers" | 8 pts | Priority: P2 | Color: Soft Amber | Tag: Tech Debt
    7. **US-146**: "As an admin, I want to view all team members' subscription statuses in a dashboard" | 5 pts | Priority: P2 | Color: Soft Blue | Tag: Feature
    8. **SPIKE-012**: "Research Stripe Billing Portal SDK for potential integration shortcut" | 3 pts | Priority: P2 | Color: Soft Purple | Tag: Spike
    9. **US-147**: "As a customer, I want to receive email confirmation after any plan change" | 3 pts | Priority: P3 | Color: Soft Blue | Tag: Feature
    10. **US-148**: "As a customer, I want to pause my subscription for up to 3 months" | 5 pts | Priority: P3 | Color: Soft Blue | Tag: Feature
    11. **BUG-090**: "Payment webhook occasionally drops events under high load" | 5 pts | Priority: P2 | Color: Soft Pink | Tag: Bug
    12. **US-149**: "As an admin, I want to set spending limits for team subscriptions" | 8 pts | Priority: P3 | Color: Soft Blue | Tag: Feature
  - Total backlog points: "66 story points across 12 items" (font 12, bold, bottom of frame)

### Frame 2: Sprint Backlog (Selected Stories)

- **Position**: Center
- **Size**: 2300x3200px
- **Background**: White with Navy left border (5px, #0D47A1)
- **Elements**:
  - Header: "Sprint 14 Backlog" (font 20, bold, #0D47A1)
  - Sprint metrics bar: "Committed: 35 pts | Stretch: 8 pts | Capacity: 38 pts" (font 13, bold)
  - **Committed Stories** (section with Emerald left accent):
    - Subheader: "Committed (35 pts)" (font 16, bold, Emerald #2E7D32)
    - Story cards (arranged in a grid, larger format with acceptance criteria):
      1. **US-142** (5 pts, Priya):
         - "View current subscription plan details"
         - Acceptance Criteria:
           - "Display plan name, price, billing cycle, and next renewal date"
           - "Show usage metrics if applicable (seats used, storage consumed)"
           - "Include link to billing history"
         - Subtasks: "API endpoint (2pts)", "UI component (2pts)", "Tests (1pt)"
      2. **US-143** (8 pts, Jordan + Sarah):
         - "Upgrade plan with single click"
         - Acceptance Criteria:
           - "Show comparison table of current vs. target plan"
           - "Display prorated charge amount before confirmation"
           - "Process payment and update subscription immediately"
           - "Send confirmation email within 60 seconds"
         - Subtasks: "Payment flow (3pts)", "UI screens (3pts)", "Email trigger (2pts)"
      3. **US-144** (8 pts, Jordan + Sarah):
         - "Downgrade plan with prorated billing"
         - Acceptance Criteria:
           - "Show what features will be lost on downgrade"
           - "Calculate and display prorated credit"
           - "Schedule downgrade at end of current billing period"
           - "Confirm via email with effective date"
         - Subtasks: "Proration logic (3pts)", "UI flow (3pts)", "Scheduling (2pts)"
      4. **BUG-089** (3 pts, Maria):
         - "Fix incorrect renewal date display"
         - Root cause: "Timezone conversion bug in billing date formatter"
         - Fix: "Use UTC consistently; add timezone display to user locale"
      5. **US-145** (5 pts, Alex + Priya):
         - "Cancel subscription with retention offer"
         - Acceptance Criteria:
           - "Show 3-step cancellation flow with reason collection"
           - "Present retention offer (discount or pause) before final confirmation"
           - "Process cancellation at end of billing period"
         - Subtasks: "Cancellation flow (2pts)", "Retention logic (2pts)", "Analytics (1pt)"
      6. **SPIKE-012** (3 pts, Ravi):
         - "Research Stripe Billing Portal SDK"
         - Deliverable: "Decision document with recommendation by Day 5"
         - Time-box: "3 story points maximum"
      7. **US-147** (3 pts, Maria):
         - "Email confirmation for plan changes"
         - Acceptance Criteria:
           - "Trigger email for upgrade, downgrade, and cancellation"
           - "Include old plan, new plan, effective date, and amount"
           - "Use existing email template system"
  - **Stretch Goals** (section with Orange left accent):
    - Subheader: "Stretch (8 pts)" (font 16, bold, Orange #EF6C00)
    - Story cards (dimmed slightly):
      1. **TECH-034** (8 pts, Priya):
         - "Refactor payment service for multi-provider support"
         - Note: "Only attempt if committed stories complete by Day 8"

### Frame 3: Capacity & Dependencies

- **Position**: Right column
- **Size**: 1550x3200px
- **Background**: White with Amber left border (5px, #F9A825)
- **Elements**:
  - **Team Capacity** (top section):
    - Header: "Sprint Capacity" (font 18, bold, #F9A825)
    - Capacity table:
      | Team Member | Available Days | Capacity (pts) | Allocated |
      |-------------|---------------|----------------|-----------|
      | Priya | 9/10 (1 day PTO) | 8 | 8 (US-142 + US-145) |
      | Jordan | 10/10 | 8 | 8 (US-143 + US-144) |
      | Sarah | 8/10 (2 days workshop) | 6 | 6 (US-143 + US-144 UI) |
      | Alex | 10/10 | 6 | 5 (US-145) |
      | Ravi | 10/10 | 5 | 3 (SPIKE-012) |
      | Maria | 10/10 | 5 | 6 (BUG-089 + US-147) |
    - Total: "Capacity: 38 pts | Committed: 35 pts | Buffer: 3 pts (8%)" (bold)
    - Health indicator: Green badge "HEALTHY — 8% buffer"

  - **Velocity Chart** (middle section):
    - Header: "Historical Velocity" (font 16, bold)
    - Bar chart (last 6 sprints):
      - Sprint 8: 32 pts
      - Sprint 9: 36 pts
      - Sprint 10: 34 pts
      - Sprint 11: 30 pts (note: holiday sprint)
      - Sprint 12: 35 pts
      - Sprint 13: 34 pts
    - Average line: 33.5 pts (dashed)
    - Sprint 14 commitment marker: 35 pts (slightly above average — achievable)

  - **Dependency Map** (lower section):
    - Header: "Dependencies & Blockers" (font 16, bold, Crimson #C62828)
    - Dependency cards:
      1. "US-143 (Upgrade) depends on US-142 (View Plan) — plan details API must be complete first" | Internal | Risk: Low
      2. "US-144 (Downgrade) depends on US-143 (Upgrade) — shares payment flow components" | Internal | Risk: Low
      3. "US-143 + US-144 depend on Stripe API key from Finance team" | External | Risk: HIGH | Status: Requested Mar 1, expected by Mar 28
      4. "SPIKE-012 result may change scope of TECH-034" | Internal | Risk: Medium
    - Visual dependency chain: US-142 --> US-143 --> US-144 (sequential arrows)

  - **Sprint Risks** (bottom section):
    - Header: "Risks" (font 16, bold, Crimson)
    - Risk items:
      1. "Stripe API key delay could block all payment-related stories (US-143, US-144, US-145)" — Mitigation: "Use test/sandbox keys for development; only need production key for QA"
      2. "Sarah's limited availability (8/10 days) may bottleneck UI reviews" — Mitigation: "Alex can handle secondary UI reviews"

## Connectors & Flow

**Story selection flow** (horizontal arrows, Navy #0D47A1, 2px):

1. Product Backlog --> Sprint Backlog (labeled "selected for sprint")

**Dependency chain** (solid arrows within Sprint Backlog, Crimson #C62828, 2px):

1. US-142 --> US-143 (labeled "blocks")
2. US-143 --> US-144 (labeled "blocks")
3. SPIKE-012 --> TECH-034 (dashed, labeled "informs scope")

**External dependency** (dashed red line from Sprint Backlog to off-board):

1. US-143 --> "Finance Team: Stripe API Key" (labeled "external dependency")

**Capacity allocation lines** (thin dotted lines, gray, from Capacity table to Sprint stories):

1. Priya row --> US-142, US-145
2. Jordan row --> US-143, US-144
3. Sarah row --> US-143 UI, US-144 UI
4. Maria row --> BUG-089, US-147

## Example Content

The sprint planning board is for Sprint 14 of a product team building subscription management features for a B2B SaaS platform. The team has 6 members and a 10-day sprint cycle.

**Sprint planning ceremony context**:

- Pre-planning: Product owner has pre-prioritized the backlog based on customer interviews and revenue impact
- Planning Part 1 (1 hour): Team discusses sprint goal and selects stories from backlog
- Planning Part 2 (1 hour): Team breaks stories into subtasks, identifies dependencies, and confirms capacity
- Output: Committed sprint backlog visible on this board

**Key decisions made during planning**:

- Sprint goal focuses on self-service subscription management (revenue impact: reduces 240 support tickets/month)
- TECH-034 moved to stretch because the spike may change its scope
- US-148 (subscription pause) deferred to Sprint 15 due to capacity constraints
- BUG-089 included because it affects billing accuracy for 12% of customers

## Variations

1. **SAFe PI Planning**: Scale to a program-level view with multiple teams. Each team has its own sprint column. Add a "Program Board" section showing cross-team dependencies and integration points. Include a confidence vote section.

2. **Two-Week Sprint with Mid-Sprint Check**: Add a "Mid-Sprint Review (Day 5)" divider within the Sprint Backlog. Stories expected done by Day 5 are above the line; remainder below. Add a burndown chart that updates daily.

3. **Kanban Sprint Hybrid**: Replace the fixed sprint backlog with a continuous flow board that has a "Sprint Commitment Line" — items above the line are committed, below are available to pull. Useful for teams transitioning from kanban to scrum.

4. **Bug-Fix Sprint**: When a sprint is dedicated to quality. Backlog contains only bugs sorted by severity. Capacity section shows "Bug Velocity" instead of story velocity. Sprint goal is "Reduce critical bugs from 24 to under 5."

## Build Instructions

1. **Create canvas**: 5500x3500px, background #FAFAFA.
2. **Build Sprint Goal banner**: Full-width frame (5400x150px). Emerald background. Add sprint label, goal text, and status badge.
3. **Build Product Backlog**: Left frame (1350x3200px). Add vertically stacked story cards with color-coded left borders (blue for features, pink for bugs, amber for tech debt, purple for spikes). Include story IDs, titles, points, and priority.
4. **Build Sprint Backlog**: Center frame (2300x3200px). Create "Committed" and "Stretch" sections. Add detailed story cards with acceptance criteria and subtasks. Show sprint metrics bar at top.
5. **Build Capacity & Dependencies**: Right frame (1550x3200px). Add capacity table with team member rows. Build velocity bar chart. Create dependency cards with risk levels. Add sprint risks.
6. **Draw selection arrows**: Show flow from backlog to sprint board.
7. **Draw dependency chain**: Connect US-142 --> US-143 --> US-144 with red arrows.
8. **Draw capacity allocation lines**: Thin dotted lines from team members to their assigned stories.
9. **Add external dependency callout**: Dashed red line from payment stories to "Finance Team" off-board note.
10. **Review**: Verify total committed points match capacity. Verify dependency order is correct. Confirm all team members have balanced allocation.

## Tips & Best Practices

- **The sprint goal is not a list of stories**: It should be one sentence describing the business outcome. Stories are the HOW; the goal is the WHY.
- **Maintain an 8-15% capacity buffer**: Never commit 100% of capacity. Leave room for unplanned work, bugs, and meetings. The 35/38 ratio in this example (8% buffer) is healthy.
- **Velocity is a range, not a number**: Use the last 3-6 sprints to establish a range (e.g., 30-36 pts). Commit at the low end, set stretch goals at the high end.
- **Identify external dependencies during planning, not during the sprint**: Every external dependency should have a status and expected resolution date BEFORE the sprint starts.
- **Acceptance criteria are non-negotiable**: If a story doesn't have clear acceptance criteria during planning, it's not ready for the sprint. Send it back to refinement.
- **Time-box spikes aggressively**: Spikes should never exceed 3-5 story points. The goal is to reduce uncertainty, not to build a solution.
- **Visualize the dependency chain**: If more than 3 stories are in a sequential chain, the sprint is at high risk. Parallelize wherever possible.
