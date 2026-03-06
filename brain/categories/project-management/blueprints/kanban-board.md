# Kanban Board

## Overview

- **Purpose**: Visualize team workflow using a column-based card system that tracks work items from initial request through completion. This template implements a full-featured kanban system with swim lanes for multiple teams, WIP (Work in Progress) limits, card details (assignee, priority, tags), and a metrics sidebar for flow monitoring. It supports both physical-board simplicity and digital-board richness.
- **Best For**: Engineering teams managing daily workflow, support teams tracking tickets, marketing teams managing content pipelines, any team that needs visual task management without the overhead of sprint ceremonies
- **Complexity**: Simple
- **Board Size**: 5000x3000px (wide landscape to accommodate 5 columns with swim lanes)

## Color Scheme

| Role               | Color       | Hex     |
| ------------------ | ----------- | ------- |
| Primary            | Navy Blue   | #0D47A1 |
| Backlog Column     | Cool Gray   | #78909C |
| To Do Column       | Steel Blue  | #1565C0 |
| In Progress Column | Amber       | #F9A825 |
| Review Column      | Deep Purple | #6A1B9A |
| Done Column        | Emerald     | #2E7D32 |
| Priority High      | Crimson     | #C62828 |
| Priority Medium    | Orange      | #EF6C00 |
| Priority Low       | Teal        | #00796B |
| Background         | Off-White   | #FAFAFA |
| Card Background    | White       | #FFFFFF |
| Swimlane Border    | Light Gray  | #E0E0E0 |

## Board Layout

Five columns with horizontal swim lanes for two teams. A header row contains column titles and WIP limits. A metrics sidebar sits on the far right.

```
+--------+--------+-----------+--------+--------+  +----------+
| BACK-  | TO DO  |    IN     | REVIEW |  DONE  |  | METRICS  |
| LOG    |        | PROGRESS  |        |        |  | SIDEBAR  |
+--------+--------+-----------+--------+--------+  +----------+
|        |        |           |        |        |  |          |
| TEAM A — Frontend & Design                    |  | Cycle    |
|        |        |           |        |        |  | Time     |
+--------+--------+-----------+--------+--------+  |          |
|        |        |           |        |        |  | Through- |
| TEAM B — Backend & Infrastructure             |  | put      |
|        |        |           |        |        |  |          |
+--------+--------+-----------+--------+--------+  +----------+

Positions:
  Header Row:    (50, 50) to (4200, 200)
  Team A Lane:   (50, 210) to (4200, 1550)
  Team B Lane:   (50, 1560) to (4200, 2900)
  Metrics:       (4300, 50) to (4950, 2900)
  Column widths: ~830px each across 5 columns
```

## Frames & Sections

### Frame 0: Column Headers

- **Position**: Top row, spanning columns
- **Size**: 4150x150px
- **Background**: Navy Blue (#0D47A1)
- **Elements**:
  - Column headers (white text, font 18, bold), evenly spaced:
    1. "BACKLOG" with count badge "14"
    2. "TO DO" with count badge "6" and WIP limit "Limit: 8"
    3. "IN PROGRESS" with count badge "5" and WIP limit "Limit: 5" (amber warning — at limit)
    4. "REVIEW" with count badge "3" and WIP limit "Limit: 4"
    5. "DONE (This Week)" with count badge "7"
  - Horizontal progress indicator: shows cards flowing left to right with arrow icons

### Frame 1: Team A Swim Lane — Frontend & Design

- **Position**: Upper row across all columns
- **Size**: 4150x1340px
- **Background**: White (#FFFFFF) with subtle top border (2px, Teal #00796B)
- **Elements**:
  - Lane header: "Frontend & Design — Sarah, Alex, Ravi" (font 14, bold, Teal #00796B, vertical left-side label)

  - **Backlog column** (3 cards):
    1. Card: "Redesign notification center" | Priority: Medium (orange dot) | Tag: UI | Requested: Feb 28 | Requester: Product
    2. Card: "Dark mode support for dashboard" | Priority: Low (teal dot) | Tag: UI | Requested: Mar 1 | Requester: Customer
    3. Card: "Accessibility improvements for screen readers" | Priority: High (red dot) | Tag: A11y | Requested: Feb 15 | Requester: Compliance

  - **To Do column** (3 cards):
    1. Card: "Build subscription upgrade modal" | Priority: High (red dot) | Assignee: Sarah | Tag: Feature | Due: Mar 12 | Story Points: 5
    2. Card: "Create empty state illustrations" | Priority: Medium (orange dot) | Assignee: Alex | Tag: Design | Due: Mar 14 | Story Points: 3
    3. Card: "Implement responsive table component" | Priority: Medium (orange dot) | Assignee: Ravi | Tag: Component | Due: Mar 13 | Story Points: 5

  - **In Progress column** (3 cards):
    1. Card: "Account dashboard redesign" | Priority: High (red dot) | Assignee: Sarah | Tag: Feature | Started: Mar 3 | Day 3 | Story Points: 8 | Progress: 60%
    2. Card: "Mobile navigation overhaul" | Priority: High (red dot) | Assignee: Alex | Tag: Feature | Started: Mar 4 | Day 2 | Story Points: 5 | Progress: 35%
    3. Card: "Design system button variants" | Priority: Medium (orange dot) | Assignee: Ravi | Tag: Component | Started: Mar 5 | Day 1 | Story Points: 3 | Progress: 15%

  - **Review column** (2 cards):
    1. Card: "Search results page layout" | Priority: Medium (orange dot) | Assignee: Sarah | Reviewer: Priya | Tag: Feature | In Review Since: Mar 4 | Story Points: 5
    2. Card: "Date picker component" | Priority: Low (teal dot) | Assignee: Alex | Reviewer: Ravi | Tag: Component | In Review Since: Mar 5 | Story Points: 2

  - **Done column** (4 cards, dimmed opacity 70%):
    1. Card: "Login page redesign" | Completed: Mar 3 | Cycle Time: 4 days | Story Points: 8
    2. Card: "Password reset flow" | Completed: Mar 4 | Cycle Time: 3 days | Story Points: 3
    3. Card: "Profile settings page" | Completed: Mar 2 | Cycle Time: 5 days | Story Points: 5
    4. Card: "Error page illustrations" | Completed: Mar 5 | Cycle Time: 2 days | Story Points: 2

### Frame 2: Team B Swim Lane — Backend & Infrastructure

- **Position**: Lower row across all columns
- **Size**: 4150x1340px
- **Background**: White (#FFFFFF) with subtle top border (2px, Deep Purple #6A1B9A)
- **Elements**:
  - Lane header: "Backend & Infrastructure — Priya, Jordan, Maria" (font 14, bold, Deep Purple #6A1B9A, vertical left-side label)

  - **Backlog column** (4 cards):
    1. Card: "Implement rate limiting on public API" | Priority: Medium | Tag: Security | Requester: Engineering
    2. Card: "Database query optimization for reports" | Priority: High | Tag: Performance | Requester: Support
    3. Card: "Set up staging environment for EU region" | Priority: Low | Tag: Infrastructure | Requester: Sales
    4. Card: "Webhook retry mechanism" | Priority: Medium | Tag: Feature | Requester: Integration Partners

  - **To Do column** (3 cards):
    1. Card: "Migrate payment API to Stripe v3" | Priority: High (red dot) | Assignee: Jordan | Tag: Integration | Due: Mar 15 | Story Points: 8 | BLOCKED badge (dependency on Stripe API key)
    2. Card: "Build user activity audit log" | Priority: Medium (orange dot) | Assignee: Priya | Tag: Feature | Due: Mar 14 | Story Points: 5
    3. Card: "Configure CDN for static assets" | Priority: Low (teal dot) | Assignee: Maria | Tag: Infrastructure | Due: Mar 16 | Story Points: 3

  - **In Progress column** (2 cards):
    1. Card: "SSO integration with Okta" | Priority: High (red dot) | Assignee: Priya | Tag: Feature | Started: Mar 2 | Day 4 | Story Points: 8 | Progress: 70%
    2. Card: "API endpoint for subscription management" | Priority: High (red dot) | Assignee: Jordan | Tag: API | Started: Mar 3 | Day 3 | Story Points: 5 | Progress: 50%

  - **Review column** (1 card):
    1. Card: "Database schema migration script" | Priority: High (red dot) | Assignee: Maria | Reviewer: Priya | Tag: Database | In Review Since: Mar 4 | Story Points: 5

  - **Done column** (3 cards, dimmed opacity 70%):
    1. Card: "User authentication refactor" | Completed: Mar 1 | Cycle Time: 6 days | Story Points: 8
    2. Card: "Email notification service" | Completed: Mar 3 | Cycle Time: 4 days | Story Points: 5
    3. Card: "CI/CD pipeline optimization" | Completed: Mar 4 | Cycle Time: 3 days | Story Points: 3

### Frame 3: Metrics Sidebar

- **Position**: Right side
- **Size**: 650x2850px
- **Background**: Light Gray (#F5F5F5) with Navy left border (4px, #0D47A1)
- **Elements**:
  - Header: "Flow Metrics" (font 18, bold, #0D47A1)
  - **Cycle Time** (metric card):
    - Label: "Avg Cycle Time"
    - Value: "3.8 days" (font 22, bold, #0D47A1)
    - Trend: "Down from 4.5 days last week" (green arrow)
    - Mini bar chart: Last 4 weeks: 5.2, 4.8, 4.5, 3.8
  - **Throughput** (metric card):
    - Label: "Weekly Throughput"
    - Value: "7 cards" (font 22, bold, #0D47A1)
    - Trend: "Up from 5 cards last week" (green arrow)
    - Mini bar chart: Last 4 weeks: 4, 6, 5, 7
  - **WIP Status** (metric card):
    - Label: "WIP Health"
    - In Progress: "5/5 — AT LIMIT" (Amber badge)
    - Review: "3/4 — Healthy" (Green badge)
    - To Do: "6/8 — Healthy" (Green badge)
  - **Blocked Items** (metric card):
    - Label: "Currently Blocked"
    - Value: "1 item" (font 18, bold, Crimson)
    - Detail: "Stripe API v3 migration — waiting on API key from finance (3 days blocked)"
  - **Cumulative Flow** (simplified diagram):
    - Stacked area showing card counts over 4 weeks for each column
    - Labels: Backlog (gray), To Do (blue), In Progress (amber), Review (purple), Done (green)
    - Visual should show Done growing steadily, In Progress staying stable
  - **Team Velocity** (summary):
    - Team A: "18 pts completed this week"
    - Team B: "16 pts completed this week"
    - Total: "34 pts (matches sprint target)"

## Connectors & Flow

**Card flow direction**: Implied left-to-right across columns. No explicit connectors between cards.

**Blocked item connector** (red dashed line, 2px):

- From "Migrate payment API to Stripe v3" (Team B, To Do) to Metrics sidebar "Blocked Items" section

**Cross-team dependency** (purple dotted line, 1px):

- From Team A "Search results page layout" (Review) to Team B "SSO integration with Okta" (In Progress) — labeled "search depends on auth tokens from SSO"

**WIP limit warning** (visual indicator):

- In Progress column header turns Amber when at WIP limit (5/5)
- A subtle amber glow outline surrounds the In Progress column

## Example Content

The board represents a mid-size product team (6 people split into two sub-teams) working on a customer portal redesign. Week of March 3-7, 2026.

**Team composition**:

- Team A (Frontend & Design): Sarah (Senior Designer), Alex (Frontend Dev), Ravi (UI Engineer)
- Team B (Backend & Infrastructure): Priya (Senior Backend), Jordan (Full-Stack), Maria (DevOps)

**Board cadence**: Cards are reviewed in a daily 10-minute standup. The board is refreshed at the start of each week with new cards moved from Backlog to To Do. Done cards are archived weekly.

**Card detail standard**: Every card includes priority (High/Medium/Low), assignee, tag (Feature/Bug/Component/Infrastructure/etc.), story points, and creation date. In Progress cards additionally show days active and completion percentage.

## Variations

1. **Support Ticket Kanban**: Columns become New, Triaged, In Progress, Waiting on Customer, Resolved. Swim lanes divide by severity (Critical, High, Normal). Cards include ticket numbers, customer names, and SLA timers.

2. **Content Pipeline**: Columns become Ideas, Brief, Writing, Editing, Design, Published. Cards represent blog posts, social media assets, or videos. Tags include content type and target audience.

3. **Personal Kanban (Solo)**: Remove swim lanes. Reduce to 3 columns: To Do, Doing (WIP: 3), Done. Add an "Urgent" row at top for time-sensitive items. Simpler card format with just title and due date.

4. **DevOps Pipeline**: Columns become Planned, Development, CI/Build, Staging, Production. Cards represent deployments. Add color-coded status indicators for build health (green/red).

## Build Instructions

1. **Create canvas**: 5000x3000px, background #FAFAFA.
2. **Build column headers**: Create a full-width header row (4150x150px). Navy background. Add 5 evenly spaced column titles with count badges and WIP limits.
3. **Create swim lanes**: Two horizontal lanes, each spanning all 5 columns. Add team labels on the left edge. Add subtle colored top borders.
4. **Build card templates**: Each card is a white rectangle (180x120px) with: colored left border (3px, matches priority), title (font 12, bold), assignee avatar circle, tag pill, story points badge. Arrange cards vertically within their column/lane intersection.
5. **Add blocked indicator**: Place a red "BLOCKED" badge on the Stripe migration card. Add a red dashed connector to the metrics sidebar.
6. **Build metrics sidebar**: Create a 650x2850px frame on the right. Add metric cards for Cycle Time, Throughput, WIP Status, Blocked Items, Cumulative Flow, and Team Velocity.
7. **Apply WIP limit visuals**: Add amber glow to In Progress column when at limit. Show limit numbers in column headers.
8. **Add cross-team dependency line**: Draw a purple dotted line between the two specified cards.
9. **Style Done cards**: Reduce opacity to 70% for completed cards to visually de-emphasize them.
10. **Review**: Verify card counts match column headers. Verify WIP limits are correctly displayed. Ensure all cards have required fields.

## Tips & Best Practices

- **Respect WIP limits**: When a column hits its limit, the team must finish existing work before pulling new cards. This prevents context-switching and improves flow.
- **Pull, don't push**: Team members pull cards from the previous column when they have capacity, rather than being assigned work.
- **Measure cycle time, not effort**: How long a card takes from "To Do" to "Done" matters more than estimated hours. Track and optimize this.
- **Archive Done cards weekly**: A cluttered Done column hides the team's flow. Move completed cards to an archive at the end of each week.
- **Make blockers visible immediately**: Blocked cards should be visually loud (red badges, connectors to root cause). The team's priority is unblocking.
- **Limit swim lanes to 2-3**: More than 3 lanes makes the board too complex to scan quickly. Group related people into lanes.
- **Review the cumulative flow diagram weekly**: If the "In Progress" band is growing while "Done" is flat, work is piling up and not finishing. This is the earliest signal of trouble.
