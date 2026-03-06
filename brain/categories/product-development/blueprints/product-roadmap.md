# Product Roadmap Board

## Overview

- **Purpose**: Communicate product direction using a Now/Next/Later framework with thematic groupings. Provides stakeholders, leadership, customers, and the team with a clear view of what is being built, what is coming next, and what is on the horizon — without over-committing to specific dates.
- **Best For**: Product managers presenting to leadership, cross-functional teams aligning on priorities, customer success teams sharing direction with clients, and engineering teams understanding upcoming work.
- **Complexity**: Medium
- **Board Size**: 5400x3000px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Deep Purple   | #6200EA |
| Secondary  | Teal          | #00897B |
| Accent     | Amber         | #FF8F00 |
| Background | Soft Lavender | #F5F0FF |
| Text       | Graphite      | #263238 |

## Board Layout

Three main columns (Now, Next, Later) with rows for product themes. A header spans the top with product vision. A milestone timeline runs along the bottom.

```
+--------------------------------------------------------------+
|  PRODUCT ROADMAP — AutoPilot 2026                            |
|  Vision: "AI-powered project management that manages itself" |
|                                                              |
|  +----------------+  +----------------+  +----------------+  |
|  | NOW            |  | NEXT           |  | LATER          |  |
|  | (This Quarter) |  | (Next Quarter) |  | (Future)       |  |
|  |                |  |                |  |                |  |
|  | Theme rows:    |  | Theme rows:    |  | Theme rows:    |  |
|  | - AI & Smart   |  | - AI & Smart   |  | - AI & Smart   |  |
|  | - Collaboration|  | - Collaboration|  | - Collaboration|  |
|  | - Enterprise   |  | - Enterprise   |  | - Enterprise   |  |
|  | - Platform     |  | - Platform     |  | - Platform     |  |
|  +----------------+  +----------------+  +----------------+  |
|                                                              |
|  +------------------------------------------------------+   |
|  | Milestones & Key Dates                                |   |
|  +------------------------------------------------------+   |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Vision & Header

- **Position**: top full-width
- **Size**: 5300x300px
- **Background**: #6200EA
- **Elements**:
  - Text block: "Product Roadmap 2026" (font size 44, bold, #FFFFFF)
  - Text block: "Vision: AI-powered project management that manages itself" (font size 20, italic, #D1C4E9)
  - Text block: "Last Updated: March 6, 2026 | Owner: Jake Reynolds, Head of Product | Status: Active" (font size 14, #B39DDB)
  - Shape (rounded rectangle, #7C4DFF, 300x60): "Strategy: Lead with AI differentiation, expand enterprise, deepen integrations"

### Frame 2: NOW Column (Q2 2026 — April to June)

- **Position**: left column
- **Size**: 1700x2000px
- **Background**: #FFFFFF with #00897B top border (8px)
- **Elements**:
  - Text block: "NOW — Q2 2026" (font size 32, bold, #00897B)
  - Text block: "Actively in development. Committed deliverables." (font size 14, #607D8B)
  - Text block: "AI & Automation" (font size 20, bold, #6200EA)
  - Shape (card, #EDE7F6, 1550x120, shadow):
    - Text: "AI Task Routing v1 — Suggest optimal assignee based on skills, workload, and availability. Beta Apr 8, GA Apr 22." (bold)
    - Text: "Status: In Development | Team: Backend + ML | Confidence: High"
  - Shape (card, #EDE7F6, 1550x120, shadow):
    - Text: "Smart Notifications — AI-filtered notification digest. Reduce notification noise by 60%."
    - Text: "Status: Design Complete | Team: Frontend | Confidence: High"
  - Text block: "Collaboration" (font size 20, bold, #6200EA)
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "Real-Time Dashboard — Live sprint progress, burndown chart, team workload view. No manual refresh needed."
    - Text: "Status: In Development | Team: Frontend + Backend | Confidence: High"
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "Kanban Board Improvements — Swimlanes, WIP limits, card aging indicators."
    - Text: "Status: QA Testing | Team: Frontend | Confidence: High"
  - Text block: "Enterprise" (font size 20, bold, #6200EA)
  - Shape (card, #FFF8E1, 1550x120, shadow):
    - Text: "Google SSO — One-click sign-up and login via Google Workspace accounts."
    - Text: "Status: Complete (shipping Apr 1) | Team: Platform | Confidence: Shipped"
  - Shape (card, #FFF8E1, 1550x120, shadow):
    - Text: "SOC 2 Type II Certification — Complete audit and publish compliance report."
    - Text: "Status: Audit In Progress | Team: Security | Confidence: High"
  - Text block: "Platform" (font size 20, bold, #6200EA)
  - Shape (card, #FCE4EC, 1550x120, shadow):
    - Text: "Performance Optimization — Reduce page load times by 40%. Target: <2s for dashboard, <1s for task views."
    - Text: "Status: In Development | Team: Platform | Confidence: Medium"

### Frame 3: NEXT Column (Q3 2026 — July to September)

- **Position**: center column
- **Size**: 1700x2000px
- **Background**: #FFFFFF with #FF8F00 top border (8px)
- **Elements**:
  - Text block: "NEXT — Q3 2026" (font size 32, bold, #FF8F00)
  - Text block: "Planned and scoped. High confidence but not yet started." (font size 14, #607D8B)
  - Text block: "AI & Automation" (font size 20, bold, #6200EA)
  - Shape (card, #EDE7F6, 1550x120, shadow):
    - Text: "AI Sprint Planning — Auto-suggest sprint scope based on team velocity, backlog priority, and capacity."
    - Text: "Confidence: Medium | Dependency: AI Task Routing v1 data"
  - Shape (card, #EDE7F6, 1550x120, shadow):
    - Text: "Automation Rules Engine — User-defined triggers and actions (e.g., 'When status = Done, notify stakeholder')."
    - Text: "Confidence: High | Dependency: None"
  - Text block: "Collaboration" (font size 20, bold, #6200EA)
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "Time Tracking — Start/stop timer, manual entry, weekly timesheet, project-level time reports."
    - Text: "Confidence: High | Dependency: None"
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "Built-In Retrospectives — Structured retro board (went well / improve / actions) with action item tracking across sprints."
    - Text: "Confidence: High | Dependency: None"
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "Task Dependencies — Blocked-by / Blocks relationships with visual indicators and critical path highlighting."
    - Text: "Confidence: Medium | Dependency: Timeline view (in this quarter)"
  - Text block: "Enterprise" (font size 20, bold, #6200EA)
  - Shape (card, #FFF8E1, 1550x120, shadow):
    - Text: "Microsoft SSO & SAML — Enterprise SSO via Microsoft Entra ID and generic SAML 2.0 providers."
    - Text: "Confidence: High | Dependency: None"
  - Shape (card, #FFF8E1, 1550x120, shadow):
    - Text: "Advanced Roles & Permissions — Custom roles, project-level permissions, guest access for external collaborators."
    - Text: "Confidence: Medium | Dependency: None"
  - Text block: "Platform" (font size 20, bold, #6200EA)
  - Shape (card, #FCE4EC, 1550x120, shadow):
    - Text: "Timeline (Gantt) View — Horizontal timeline with drag-to-resize tasks, dependency arrows, and milestone markers."
    - Text: "Confidence: High | Dependency: Task dependencies"

### Frame 4: LATER Column (Q4 2026 & Beyond)

- **Position**: right column
- **Size**: 1700x2000px
- **Background**: #FFFFFF with #6200EA top border (8px)
- **Elements**:
  - Text block: "LATER — Q4 2026+" (font size 32, bold, #6200EA)
  - Text block: "Exploring and validating. Direction is set, details are not." (font size 14, #607D8B)
  - Text block: "AI & Automation" (font size 20, bold, #6200EA)
  - Shape (card, #EDE7F6, 1550x120, shadow):
    - Text: "AI Project Health Prediction — Predict project delays 2 weeks before they happen using velocity trends and dependency analysis."
    - Text: "Confidence: Low | Research phase"
  - Shape (card, #EDE7F6, 1550x120, shadow):
    - Text: "Natural Language Task Creation — Create tasks via conversational input ('Create a high-priority bug for Leo about the login page, due Friday')."
    - Text: "Confidence: Low | Prototype phase"
  - Text block: "Collaboration" (font size 20, bold, #6200EA)
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "OKR Tracking — Link sprint outcomes to company-level objectives. Progress rolls up from tasks to key results to objectives."
    - Text: "Confidence: Medium | Customer demand signal strong"
  - Shape (card, #E0F2F1, 1550x120, shadow):
    - Text: "Cross-Project Views — Unified dashboard showing health across multiple projects. Portfolio-level reporting."
    - Text: "Confidence: Medium | Enterprise customer request"
  - Text block: "Enterprise" (font size 20, bold, #6200EA)
  - Shape (card, #FFF8E1, 1550x120, shadow):
    - Text: "SCIM Provisioning — Auto-sync users from Okta, Azure AD, OneLogin. Auto-deprovisioning on offboard."
    - Text: "Confidence: Medium | Top enterprise request"
  - Shape (card, #FFF8E1, 1550x120, shadow):
    - Text: "Audit Log — Comprehensive activity log for compliance. Who changed what, when, with export capability."
    - Text: "Confidence: High | Required for enterprise tier"
  - Text block: "Platform" (font size 20, bold, #6200EA)
  - Shape (card, #FCE4EC, 1550x120, shadow):
    - Text: "Public REST API — Full CRUD for tasks, projects, sprints, users. Webhooks for event-driven integrations."
    - Text: "Confidence: High | Partner demand"
  - Shape (card, #FCE4EC, 1550x120, shadow):
    - Text: "Mobile App (iOS & Android) — Native mobile experience for task management, notifications, and time tracking on the go."
    - Text: "Confidence: Medium | Significant investment"

### Frame 5: Milestones & Key Dates

- **Position**: full-width bottom
- **Size**: 5300x400px
- **Background**: #F5F0FF with #6200EA top border (4px)
- **Elements**:
  - Text block: "Key Milestones" (font size 28, bold, #263238)
  - Shape (horizontal timeline, 5000x200):
    - Marker (diamond, #00897B): "Apr 1 — Google SSO ships"
    - Marker (diamond, #00897B): "Apr 8 — AutoPilot 3.0 Launch (AI Task Routing beta)"
    - Marker (diamond, #00897B): "Apr 22 — AI Task Routing GA"
    - Marker (diamond, #00897B): "May 15 — SOC 2 Type II report published"
    - Marker (diamond, #00897B): "Jun 30 — Q2 roadmap review"
    - Marker (diamond, #FF8F00): "Jul 1 — Q3 development begins"
    - Marker (diamond, #FF8F00): "Sep 15 — Time Tracking + Retros ship"
    - Marker (diamond, #FF8F00): "Sep 30 — Q3 roadmap review"
    - Marker (diamond, #6200EA): "Oct 1 — Q4 planning begins"
    - Marker (diamond, #6200EA): "Dec — Public API beta"
  - Connector: Horizontal line connecting all markers (solid, #263238, 2px)

## Connectors & Flow

- No arrows between columns — Now/Next/Later is a time horizon, not a process flow.
- Vertical dashed lines separate the three columns (dashed, #E0E0E0, 1px).
- Theme rows within each column are visually grouped by shared background tints (purple, teal, amber, pink).
- The milestone timeline at the bottom provides the only time-specific commitments.

## Example Content

The roadmap covers four product themes (AI & Automation, Collaboration, Enterprise, Platform) across three time horizons for the fictional AutoPilot product. The NOW column contains 7 items with high confidence and specific statuses. The NEXT column contains 8 items with medium-to-high confidence. The LATER column contains 8 exploratory items. The milestone timeline tracks 10 specific dates across the year.

## Variations

1. **Quarterly Roadmap**: Replace Now/Next/Later with specific quarters (Q1, Q2, Q3, Q4). Add week-level detail within each quarter. Better for internal engineering planning.
2. **Customer-Facing Roadmap**: Remove confidence levels and internal status. Show only feature names and descriptions. Replace "Later" with "Exploring" and add a feedback voting mechanism.
3. **Theme-Based Roadmap**: Rotate the matrix — themes as columns, time as rows. Better when you want to emphasize strategic themes over timeline.

## Build Instructions

1. Create board at 5400x3000px with background #F5F0FF.
2. Place Frame 1 (Header) at (50, 50), size 5300x300, background #6200EA.
3. Place Frame 2 (NOW) at (50, 400), size 1700x2000. Place Frame 3 (NEXT) at (1800, 400), size 1700x2000. Place Frame 4 (LATER) at (3550, 400), size 1700x2000.
4. Add top-border accents: NOW = teal, NEXT = amber, LATER = purple.
5. Within each column, create theme section headers and feature cards with consistent sizing.
6. Place Frame 5 (Milestones) at (50, 2450), size 5300x400.
7. Build the horizontal timeline with diamond markers and date labels.
8. Add vertical dashed separators between columns.
9. Apply consistent card styling: white background, subtle shadow, left color bar matching the theme.
10. Group elements within each frame and column.

## Tips & Best Practices

- Update this board monthly. Remove shipped items, move NEXT items to NOW when the quarter turns, and refresh LATER with new learnings.
- Use confidence levels honestly: "High" means scoped and estimated, "Medium" means validated but not scoped, "Low" means idea stage.
- Never put dates on the LATER column. It sets expectations you cannot meet.
- Present this roadmap in all-hands meetings and customer advisory board sessions. It is a communication tool, not a project plan.
- Cross-reference with the user-story-mapping.md board to ensure roadmap items trace back to user needs.
