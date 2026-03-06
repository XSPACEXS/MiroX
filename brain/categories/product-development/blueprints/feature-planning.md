# Feature Planning Board

## Overview

- **Purpose**: Create a comprehensive feature specification that includes user stories, acceptance criteria, wireframe sketches, technical requirements, dependencies, and delivery timeline. Serves as the definitive source of truth for what a feature does, why it exists, who it serves, and how it should be built.
- **Best For**: Product managers writing feature specs, engineering leads evaluating technical feasibility, designers preparing wireframes, and QA engineers defining test criteria.
- **Complexity**: Advanced
- **Board Size**: 5000x3600px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Deep Purple   | #6200EA |
| Secondary  | Azure         | #2979FF |
| Accent     | Rose          | #F50057 |
| Background | Lavender Mist | #F3E5F5 |
| Text       | Charcoal      | #212121 |

## Board Layout

The board is organized into seven frames: an overview header, then three columns (Product, Design, Engineering) spanning two rows.

```
+--------------------------------------------------------------+
|  FEATURE SPEC: AI Task Routing                               |
|                                                              |
|  +------------------------------------------------------+   |
|  | Feature Overview & Context                            |   |
|  +------------------------------------------------------+   |
|                                                              |
|  +----------------+  +----------------+  +----------------+  |
|  | User Stories   |  | Wireframe      |  | Technical      |  |
|  | & Acceptance   |  | Sketches       |  | Requirements   |  |
|  | Criteria       |  |                |  |                |  |
|  +----------------+  +----------------+  +----------------+  |
|                                                              |
|  +----------------+  +----------------+  +----------------+  |
|  | Dependencies   |  | Edge Cases     |  | Delivery       |  |
|  | & Risks        |  | & Open         |  | Timeline       |  |
|  |                |  | Questions      |  |                |  |
|  +----------------+  +----------------+  +----------------+  |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Feature Overview & Context

- **Position**: top full-width
- **Size**: 4900x600px
- **Background**: #6200EA
- **Elements**:
  - Text block: "Feature Spec: AI Task Routing" (font size 40, bold, #FFFFFF)
  - Text block: "Version 1.2 | Last Updated: March 4, 2026 | Owner: Jake Reynolds (PM)" (font size 16, #D1C4E9)
  - Shape (rectangle, #7C4DFF, 1200x200): **Problem Statement**
    - Text: "Engineering managers spend 4-6 hours per week manually assigning tasks to team members. They rely on mental models of who has capacity and relevant skills, leading to uneven workload distribution, bottlenecked specialists, and delayed sprints."
  - Shape (rectangle, #7C4DFF, 1200x200): **Proposed Solution**
    - Text: "An AI-powered task routing engine that automatically suggests the optimal assignee for each task based on skills, current workload, availability, and historical performance. Managers review and approve suggestions with one click."
  - Shape (rectangle, #7C4DFF, 600x200): **Success Metrics**
    - Text: "Primary: Reduce sprint planning time by 40%. Secondary: Decrease task reassignment rate from 23% to 8%. Tertiary: Manager satisfaction score > 4.2/5."
  - Shape (rectangle, #7C4DFF, 600x200): **Scope**
    - Text: "In scope: Task suggestion engine, skill tagging, workload visibility, one-click approve/reject. Out of scope: Auto-assignment without approval, cross-org routing, API access (v2)."

### Frame 2: User Stories & Acceptance Criteria

- **Position**: middle-left
- **Size**: 1550x1400px
- **Background**: #F3E5F5 with #6200EA left border (6px)
- **Elements**:
  - Text block: "User Stories" (font size 28, bold, #212121)
  - Sticky note (purple #E1BEE7, 700x180): **US-1**: "As an engineering manager, I want to see AI-suggested assignees for each unassigned task so that I can plan sprints in less time."
    - Text below: "AC1: When a task is unassigned, the system displays up to 3 suggested assignees ranked by fit score. AC2: Each suggestion shows the team member's name, skill match %, current workload (tasks in progress), and estimated availability. AC3: Suggestions appear within 2 seconds of task creation."
  - Sticky note (purple #E1BEE7, 700x180): **US-2**: "As an engineering manager, I want to approve or reject a suggested assignee with one click so that I maintain control without extra steps."
    - Text below: "AC1: Each suggestion has 'Approve' and 'Dismiss' buttons. AC2: Approving assigns the task and notifies the team member. AC3: Dismissing removes the suggestion and the next-best option moves up. AC4: The manager can still manually assign instead."
  - Sticky note (purple #E1BEE7, 700x180): **US-3**: "As a team member, I want to update my skill tags so that the AI routes relevant work to me."
    - Text below: "AC1: Skill tags are editable in profile settings. AC2: There is a predefined skill taxonomy (e.g., 'React,' 'Python,' 'DevOps,' 'QA') plus custom tags. AC3: Changes take effect in the next routing cycle (within 1 hour)."
  - Sticky note (purple #E1BEE7, 700x180): **US-4**: "As an engineering manager, I want to see a team workload dashboard so that I can understand capacity before approving assignments."
    - Text below: "AC1: Dashboard shows each team member with task count, estimated hours remaining, and a red/yellow/green capacity indicator. AC2: Data refreshes in real time. AC3: Can filter by sprint, project, or date range."
  - Sticky note (purple #E1BEE7, 700x180): **US-5**: "As a product analyst, I want to see routing accuracy metrics so that we can improve the AI model over time."
    - Text below: "AC1: Admin dashboard shows suggestion acceptance rate, reassignment rate, and average sprint planning duration. AC2: Data is available from the first sprint using the feature. AC3: Export to CSV available."

### Frame 3: Wireframe Sketches

- **Position**: middle-center
- **Size**: 1550x1400px
- **Background**: #FFFFFF with #F50057 left border (6px)
- **Elements**:
  - Text block: "Wireframes" (font size 28, bold, #212121)
  - Shape (rectangle, #F5F5F5, 1400x400): **Screen 1: Task Card with AI Suggestion**
    - Text: "[Wireframe placeholder] Task card showing: task title, description, labels, due date. Below: 'Suggested Assignees' section with 3 avatar+name rows, each showing skill match %, workload bar, and Approve/Dismiss buttons. Bottom: 'Assign manually' link."
    - Text (annotation, #F50057): "Note: Suggestion section collapses if manager has 'auto-approve' enabled in settings"
  - Shape (rectangle, #F5F5F5, 1400x400): **Screen 2: Team Workload Dashboard**
    - Text: "[Wireframe placeholder] Grid view: rows = team members, columns = Mon-Fri. Each cell shows task count + hours. Right column: capacity indicator (green <80%, yellow 80-100%, red >100%). Top: sprint selector dropdown, date range filter."
    - Text (annotation, #F50057): "Note: Clicking a team member row expands to show their individual task list"
  - Shape (rectangle, #F5F5F5, 1400x400): **Screen 3: Skill Tag Editor**
    - Text: "[Wireframe placeholder] Profile settings page. Section: 'My Skills.' Tag cloud of current skills with 'x' to remove. Search/add field below with autocomplete from taxonomy. Toggle: 'Available for routing' on/off. Save button."
    - Text (annotation, #F50057): "Note: Skills added by admin appear with a lock icon and cannot be removed by the user"

### Frame 4: Technical Requirements

- **Position**: middle-right
- **Size**: 1550x1400px
- **Background**: #F3E5F5 with #2979FF left border (6px)
- **Elements**:
  - Text block: "Technical Requirements" (font size 28, bold, #212121)
  - Text block: "Architecture" (font size 20, bold, #2979FF)
  - Sticky note (blue #BBDEFB, 700x120): "Routing Engine: Python microservice running a weighted scoring model. Inputs: skill tags (from user profiles), current workload (from task DB), availability (from calendar API), historical assignment-to-completion data."
  - Sticky note (blue #BBDEFB, 700x120): "Data Pipeline: Real-time event stream from task creation/update events (Kafka) -> Routing Engine -> suggestion stored in Redis (TTL 24h) -> served via REST API to frontend."
  - Sticky note (blue #BBDEFB, 700x120): "Frontend: React component embedded in existing task card. Fetches suggestions via GET /api/v1/tasks/{id}/suggestions. Approve/Dismiss via PATCH /api/v1/tasks/{id}/assign."
  - Text block: "Performance Requirements" (font size 20, bold, #2979FF)
  - Sticky note (blue #BBDEFB, 700x100): "Suggestion latency: <2 seconds (p95) for teams up to 50 members"
  - Sticky note (blue #BBDEFB, 700x100): "Dashboard load time: <3 seconds for 30-day view with 20 team members"
  - Sticky note (blue #BBDEFB, 700x100): "Routing engine uptime: 99.9% (can degrade gracefully — if engine is down, manual assignment works normally)"
  - Text block: "Data & Privacy" (font size 20, bold, #2979FF)
  - Sticky note (blue #BBDEFB, 700x100): "No PII sent to external services — routing model runs on our infrastructure"
  - Sticky note (blue #BBDEFB, 700x100): "Skill data and workload data retained for 12 months for model improvement, then anonymized"
  - Sticky note (blue #BBDEFB, 700x100): "SOC 2 compliant — all data encrypted at rest (AES-256) and in transit (TLS 1.3)"

### Frame 5: Dependencies & Risks

- **Position**: bottom-left
- **Size**: 1550x1200px
- **Background**: #FFF8E1 with #FFD600 left border (6px)
- **Elements**:
  - Text block: "Dependencies & Risks" (font size 28, bold, #212121)
  - Text block: "Dependencies" (font size 20, bold, #F57F17)
  - Sticky note (amber #FFF9C4, 700x100): "DEP-1: Calendar API integration (Google Calendar + Outlook) must be complete before availability data is available — owned by Integrations team, ETA March 20"
  - Sticky note (amber #FFF9C4, 700x100): "DEP-2: Skill taxonomy must be defined and approved by HR/Engineering leadership — owned by Jake R., ETA March 12"
  - Sticky note (amber #FFF9C4, 700x100): "DEP-3: Kafka event stream for task creation/update must include new event fields (priority, estimated_hours) — owned by Platform team, ETA March 15"
  - Sticky note (amber #FFF9C4, 700x100): "DEP-4: Design system update for capacity indicator component (red/yellow/green bar) — owned by Design Systems team, ETA March 18"
  - Text block: "Risks" (font size 20, bold, #E65100)
  - Sticky note (orange #FFE0B2, 700x120): "RISK-1 (High): AI suggestions may have low accuracy in the first 2 weeks due to insufficient historical data. Mitigation: Seed the model with 6 months of historical assignment data from existing task DB."
  - Sticky note (orange #FFE0B2, 700x120): "RISK-2 (Medium): Managers may distrust AI suggestions and default to manual assignment. Mitigation: Show confidence scores and allow feedback loop ('Was this suggestion helpful?')."
  - Sticky note (orange #FFE0B2, 700x120): "RISK-3 (Low): Calendar API rate limits may throttle availability checks for large teams. Mitigation: Cache calendar data with 15-min TTL; batch requests."

### Frame 6: Edge Cases & Open Questions

- **Position**: bottom-center
- **Size**: 1550x1200px
- **Background**: #FFFFFF with #607D8B left border (6px)
- **Elements**:
  - Text block: "Edge Cases & Open Questions" (font size 28, bold, #212121)
  - Text block: "Edge Cases" (font size 20, bold, #607D8B)
  - Sticky note (gray #ECEFF1, 700x100): "EC-1: Team member has no skill tags set -> Show a prompt: 'Add skills to your profile to receive AI-routed tasks' instead of including them in suggestions."
  - Sticky note (gray #ECEFF1, 700x100): "EC-2: All team members are at >100% capacity -> Show all suggestions with a warning: 'All team members are at full capacity. Consider adjusting deadlines or scope.'"
  - Sticky note (gray #ECEFF1, 700x100): "EC-3: Task has no labels or context for skill matching -> Fall back to workload-only routing (assign to person with most availability)."
  - Sticky note (gray #ECEFF1, 700x100): "EC-4: New team member with no historical data -> Weight skill tags and availability more heavily; reduce historical performance weight to 0."
  - Sticky note (gray #ECEFF1, 700x100): "EC-5: Manager dismisses all 3 suggestions -> Log as 'AI miss,' show manual assignment, and include in model retraining dataset."
  - Text block: "Open Questions" (font size 20, bold, #607D8B)
  - Sticky note (yellow #FFF9C4, 700x100): "OQ-1: Should the routing engine factor in time zones for distributed teams? (Decision needed by Mar 10 — Jake R.)"
  - Sticky note (yellow #FFF9C4, 700x100): "OQ-2: Do we allow team members to opt out of AI routing? (Discuss with HR — potential fairness concern)"
  - Sticky note (yellow #FFF9C4, 700x100): "OQ-3: Should we expose the routing confidence score to managers or keep it internal? (A/B test planned)"

### Frame 7: Delivery Timeline

- **Position**: bottom-right
- **Size**: 1550x1200px
- **Background**: #F3E5F5 with #6200EA left border (6px)
- **Elements**:
  - Text block: "Delivery Timeline" (font size 28, bold, #212121)
  - Shape (table, 1400x800):
    - Header: "Phase | Dates | Deliverables | Owner | Status"
    - Row: "Design | Mar 3–14 | Wireframes, design spec, prototype | Priya T. (Design) | In Progress"
    - Row: "Backend: Routing Engine | Mar 10–28 | Scoring model, API endpoints, Kafka consumer | Marcus W. (BE Lead) | Not Started"
    - Row: "Backend: Data Pipeline | Mar 10–21 | Event stream updates, Redis cache, historical data seed | Aisha K. (Platform) | Not Started"
    - Row: "Frontend: Task Card UI | Mar 17–28 | Suggestion component, approve/dismiss flow | Leo C. (FE) | Not Started"
    - Row: "Frontend: Workload Dashboard | Mar 17–Apr 4 | Dashboard view, capacity indicators, filters | Leo C. (FE) | Not Started"
    - Row: "Integration Testing | Mar 31–Apr 7 | End-to-end tests, performance benchmarks | QA Team | Not Started"
    - Row: "Beta Release | Apr 8 | Release to 50 beta teams, feedback collection | Jake R. (PM) | Not Started"
    - Row: "GA Release | Apr 22 | General availability, documentation, support training | Jake R. (PM) | Not Started"
  - Text block: "Total Engineering Estimate: 6.5 engineer-weeks" (font size 16, bold, #6200EA)
  - Sticky note (green #C8E6C9, 500x100): "Milestone: Beta launch coincides with AutoPilot 3.0 campaign launch (April 8)"
  - Sticky note (purple #E1BEE7, 500x100): "Review checkpoints: Design review (Mar 14), Backend review (Mar 28), Feature freeze (Apr 4)"

## Connectors & Flow

- Solid arrow from Frame 1 (Overview) down to Frame 2 (User Stories): labeled "What does the user need?"
- Solid arrow from Frame 2 to Frame 3 (Wireframes): labeled "What does it look like?"
- Solid arrow from Frame 2 to Frame 4 (Technical Reqs): labeled "How do we build it?"
- Dashed arrow from Frame 4 to Frame 5 (Dependencies): labeled "What are we waiting on?"
- Dashed arrow from Frame 3 to Frame 6 (Edge Cases): labeled "What could go wrong?"
- Solid arrow from all bottom frames to Frame 7 (Timeline): labeled "When does it ship?"
- Connectors: solid = #6200EA 2px; dashed = #607D8B 2px

## Example Content

The entire board documents a realistic feature specification for "AI Task Routing" — a core feature of the fictional AutoPilot 3.0 product. It includes 5 detailed user stories with acceptance criteria, 3 wireframe sketch descriptions, architecture and performance requirements, 4 dependencies with owners and ETAs, 3 risks with mitigations, 5 edge cases, 3 open questions, and an 8-row delivery timeline with specific dates, owners, and statuses.

## Variations

1. **Lightweight Feature Spec**: Remove the Wireframes and Edge Cases frames for smaller features that do not need visual design. Keep User Stories, Technical Requirements, and Timeline.
2. **API Feature Spec**: Replace Wireframes with API Contract (endpoints, request/response schemas, authentication). Add a Backwards Compatibility frame.
3. **Mobile Feature Spec**: Add a frame for platform-specific requirements (iOS vs Android differences, offline behavior, push notification handling).

## Build Instructions

1. Create board at 5000x3600px with background #F3E5F5.
2. Place Frame 1 at (50, 50), size 4900x600, background #6200EA.
3. Place Frame 2 at (50, 700), size 1550x1400. Place Frame 3 at (1650, 700), size 1550x1400. Place Frame 4 at (3250, 700), size 1550x1400.
4. Place Frame 5 at (50, 2150), size 1550x1200. Place Frame 6 at (1650, 2150), size 1550x1200. Place Frame 7 at (3250, 2150), size 1550x1200.
5. Add colored left-border accents to each frame (purple for product, pink for design, blue for engineering, amber for dependencies, gray for edge cases).
6. Populate user stories as large sticky notes with acceptance criteria text below each.
7. Create wireframe placeholder rectangles with descriptive text and pink annotation callouts.
8. Build the delivery timeline as a table with status column.
9. Draw connectors with labels between frames.
10. Group all elements within each frame.

## Tips & Best Practices

- Write user stories from the actual user's perspective, not the team's. "As a manager, I want..." not "The system shall..."
- Every acceptance criterion should be testable — if QA cannot verify it, rewrite it.
- Mark open questions with a decision deadline and owner. Do not let them linger unresolved past the design phase.
- Update the status column in the Delivery Timeline weekly. This board should be the first thing reviewed in sprint planning.
- After the feature ships, archive the board and link it from the product changelog for historical context.
