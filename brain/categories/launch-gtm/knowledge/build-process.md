# Project Overview & Launch GTM — Build Process

## Introduction

Building a Launch GTM board is a collaborative process that unfolds over the project lifecycle. Unlike boards that are built in a single session, the Launch GTM board is assembled in phases that mirror the project itself: research populates the Insights quadrant, planning populates the Mapping quadrant, execution populates the Tasks quadrant, and creation populates the Design quadrant. This guide covers the complete workflow.

---

## Phase 1: Discovery — Defining the Launch Scope

### Duration: 45-60 minutes

### Key Questions

**Launch Context**:

- What is being launched? (Feature, product, campaign, market entry)
- What is the target launch date?
- Which teams are involved? (Engineering, Design, Marketing, Sales, Support, Legal)
- Who is the launch owner / PM?
- What is the launch tier? (P0/critical, P1/important, P2/routine)

**Audience**:

- Who will use this board? (Team members, PM, executives, stakeholders)
- Will it be used for daily standups, weekly reviews, or executive presentations?
- How many people will have edit access vs. view access?

**Content Readiness**:

- Has user research been conducted?
- Does a customer journey map exist?
- Is there a project plan or task list in another tool (Jira, Linear)?
- Are there existing design artifacts (Figma, wireframes)?
- What data or metrics are available?

**Board Type Selection**:

| Primary Need                         | Board Pattern              | Complexity |
| ------------------------------------ | -------------------------- | ---------- |
| Full launch coordination             | 2x2 Launch Command Center  | Advanced   |
| Multi-team milestone tracking        | Cross-Functional Swim Lane | Advanced   |
| Research → planning → execution flow | Insights-to-Execution Flow | Medium     |
| End-of-quarter review                | Quarterly Review Dashboard | Medium     |
| Final launch readiness check         | Launch Readiness Checklist | Medium     |

### Discovery Output

- Board type selected
- Teams and stakeholders identified
- Launch date and phase timeline
- List of existing artifacts to incorporate (research reports, journey maps, Jira projects, Figma files)
- Initial content plan for each quadrant

---

## Phase 2: Structure — Setting Up the Board Architecture

### Duration: 30-45 minutes

### Architecture Definition

#### For 2x2 Launch Command Center

```
Level 1: Launch Header (identity + readiness dashboard)
Level 2: Four Quadrants
  - Insights (top-left): Research findings, market data, competitive intel
  - Mapping (top-right): Customer journey, personas, experience gaps
  - Tasks (bottom-left): Kanban execution tracking, dependencies
  - Design (bottom-right): Mockups, assets, review status
Level 3: Shared Timeline (bottom footer)
Level 4: Cross-quadrant connectors and traceability matrix
```

#### For Cross-Functional Swim Lane Board

```
Level 1: Launch Header (identity + overall status)
Level 2: Milestone Column Headers (vertical markers)
Level 3: Team Swim Lanes (horizontal tracks)
  - Each lane: phase cells with tasks for that team
Level 4: Dependency Map & Risk Register (footer)
```

#### For Insights-to-Execution Flow

```
Level 1: Project Header (identity + phase)
Level 2: Four Columns (left-to-right flow)
  - Insights → Journey Map → Task Breakdown → Deliverables
Level 3: Traceability Matrix (footer)
```

### Zone Planning

Define what is visible at each zoom level:

| Zoom | Content Visible                             | Design Requirement               |
| ---- | ------------------------------------------- | -------------------------------- |
| 25%  | Board title, launch date, RAG indicators    | H1 at 36px, RAG dots at 24px     |
| 50%  | Quadrant titles, phase markers, key metrics | H2 at 28px, phase labels at 14px |
| 75%  | Card titles, task status, owners, dates     | H4 at 18px, body at 14px         |
| 100% | Full content, annotations, evidence, links  | Body at 14px, small at 12px      |

---

## Phase 3: Skeleton — Building the Visual Framework

### Duration: 30-45 minutes

### Step-by-Step: 2x2 Launch Command Center

1. **Set board size**: 6000 x 3800px
2. **Place header bar**: Full width (6000px), 350px height, positioned at (0, 0)
   - Background: #1565C0
   - Content: Project name, launch date, phase indicator, readiness indicators
3. **Place Insights quadrant**: 2700px wide, 1500px tall, positioned at (0, 380)
   - Left border accent: 4px #7B1FA2
   - Label: "INSIGHTS" at 28px bold
4. **Place Mapping quadrant**: 2900px wide, 1500px tall, positioned at (2730, 380)
   - Left border accent: 4px #1565C0
   - Label: "MAPPING" at 28px bold
5. **Place Tasks quadrant**: 2700px wide, 1400px tall, positioned at (0, 1910)
   - Left border accent: 4px #00897B
   - Label: "TASKS" at 28px bold
6. **Place Design quadrant**: 2900px wide, 1400px tall, positioned at (2730, 1910)
   - Left border accent: 4px #EF6C00
   - Label: "DESIGN" at 28px bold
7. **Place timeline bar**: Full width, 300px height, positioned at (0, 3340)
   - Phase segments with phase colors
8. **Add internal structure**: Kanban columns within Tasks quadrant (To Do | In Progress | Done | Blocked). Sub-sections within other quadrants.

### Step-by-Step: Cross-Functional Swim Lane Board

1. **Set board size**: 5800 x 3800px
2. **Place header**: Full width, 300px height
3. **Place milestone headers**: Full width, 100px height, with vertical dividers at each milestone date
4. **Place team swim lanes**: 5 lanes, each 500px tall, with 300px team label column
5. **Place dependency section**: Full width, 500px height
6. **Add grid borders**: 1px #E0E0E0 between all cells

### Skeleton Validation Checklist

- [ ] Board title, launch date, and team readiness visible at 25% zoom
- [ ] All quadrant/section headers visible at 50% zoom
- [ ] Internal structure (kanban columns, journey stages) visible at 75% zoom
- [ ] Consistent padding (20px) throughout
- [ ] Quadrant boundaries are clearly defined (border accents, background tints)
- [ ] Timeline positioned at bottom with correct phase divisions

---

## Phase 4: Content Population — Filling the Quadrants

### Duration: 2-4 hours (incremental, not all at once)

### Population Sequence

Fill the quadrants in this order, which follows the project lifecycle:

#### Week 1-2: Insights First

The Insights quadrant is populated first because research findings drive everything else.

1. Import key research findings (3-5 synthesized insights)
2. Add competitive intelligence
3. Add market data and sizing
4. Add customer quotes or voice-of-customer data
5. Assign confidence levels to each insight

#### Week 2-3: Mapping Second

With insights in hand, map the customer journey.

1. Build the current-state journey map (stages, touchpoints, pain points)
2. Identify pain points and experience gaps
3. Draft the future-state journey map (how it will work after launch)
4. Add persona cards
5. Connect insights to journey gaps (cross-quadrant connectors)

#### Week 3-4: Tasks Third

With the journey gaps identified, break down the work.

1. Create epics from journey gaps
2. Break epics into tasks
3. Assign owners, dates, and team labels
4. Identify dependencies between tasks and across teams
5. Set up kanban columns (To Do | In Progress | Done | Blocked)
6. Connect tasks back to insights and journey gaps (cross-quadrant connectors)

#### Week 4+: Design Ongoing

Design artifacts populate throughout the project.

1. Add initial wireframes or mockups (thumbnail + Figma link)
2. Track design review feedback
3. Update with revised versions
4. Add marketing assets as they are created
5. Track approval status

### Content Quality Gates

Before moving to the next phase, verify:

**Insights**:

- [ ] Each finding cites source, method, and sample size
- [ ] Confidence level assigned (High / Medium / Low)
- [ ] Implications stated (not just data — what does this mean?)
- [ ] Links to journey map sections identified

**Mapping**:

- [ ] All journey stages have touchpoints, pain points, and metrics
- [ ] Current-state and future-state are distinguished
- [ ] Personas are specific (not generic "busy professional")
- [ ] Experience gaps are explicitly identified

**Tasks**:

- [ ] Each task has owner, due date, and team label
- [ ] Dependencies are mapped (both within-team and cross-team)
- [ ] Blocked items have blocker description and resolution plan
- [ ] Each epic links to the insight or journey gap that generated it

**Design**:

- [ ] Each artifact has version number and review status
- [ ] Feedback is documented (not just "approved" but what changed)
- [ ] Links to source files (Figma, etc.) are included

---

## Phase 5: Visual Polish

### Duration: 30-45 minutes

### Polish Checklist

**Header and Readiness**:

- [ ] Launch readiness indicators are accurate and current
- [ ] RAG indicators include text labels alongside colors
- [ ] Launch date and phase marker are correct
- [ ] "Last Updated" timestamp is current

**Quadrant Identity**:

- [ ] Each quadrant has a distinct left-border accent color
- [ ] Background tints are subtle (30% opacity)
- [ ] Quadrant headers are UPPERCASE, 28px bold
- [ ] Content within quadrants is consistently formatted

**Cards and Elements**:

- [ ] All cards follow the card design system (consistent widths, padding)
- [ ] Team color coding is consistent throughout
- [ ] Status badges use the standard RAG system
- [ ] Dates are formatted consistently (Month Day, Year)

**Connectors**:

- [ ] Cross-quadrant connectors use the prescribed styles
- [ ] Dependency connectors are labeled with the dependency description
- [ ] Connector colors match the prescribed system

**Timeline**:

- [ ] Current phase is highlighted (full opacity)
- [ ] "We Are Here" marker is positioned at today's date
- [ ] Milestone diamonds are labeled

**Presentation Mode**:

- [ ] Frames configured for presentation (if board will be presented)
- [ ] Frame order follows the narrative: Header → Insights → Mapping → Tasks → Design → Readiness
- [ ] Each frame fills the screen at presentation resolution

---

## Phase 6: Review

### Duration: 20-30 minutes

### The Executive Test

At 25% zoom, can an executive in 15 seconds determine:

- What project this is?
- When it launches?
- Is it on track? (RAG indicators)

### The PM Test

At 50% zoom, can a PM in 2 minutes determine:

- What are the key insights driving this launch?
- Where are the customer journey pain points?
- What is the status of each team's work?
- What are the dependencies and blockers?

### The Team Member Test

At 75% zoom, can a team member in 30 seconds find:

- Their tasks and status?
- What they are blocked on?
- When their deliverables are due?
- Who to talk to about dependencies?

### The Traceability Test

Can you trace any task back to the insight that generated it?

- Pick a random task → what journey gap does it address? → what insight drove it?
- If this chain is broken, add the missing cross-references.

---

## Phase 7: Maintenance

### Update Cadence

| Board Section    | Update Frequency     | Owner         |
| ---------------- | -------------------- | ------------- |
| Readiness Header | Daily (launch week)  | PM            |
| Insights         | As new data arrives  | Research / PM |
| Mapping          | At phase transitions | PM / Design   |
| Tasks            | Daily or per standup | Team leads    |
| Design           | Per design review    | Design lead   |
| Timeline         | Weekly               | PM            |

### Phase Transitions

As the project moves through phases, the board focus shifts:

| Phase         | Primary Quadrant | Board Activity                           |
| ------------- | ---------------- | ---------------------------------------- |
| Research      | Insights         | Populate findings, begin journey mapping |
| Planning      | Mapping + Tasks  | Finalize journey, create task breakdown  |
| Build         | Tasks + Design   | Track execution, review deliverables     |
| Test          | Tasks + Design   | Bug tracking, design iteration           |
| Pre-Launch    | Readiness Header | Daily readiness assessment               |
| Launch        | Readiness Header | Go/no-go decision, monitoring            |
| Retrospective | All quadrants    | Full board becomes learning artifact     |

---

## API Translation Guide

### Creating the Launch Readiness Header

```
Step 1: Create the header frame
POST /boards/{board_id}/frames
{
  "data": { "title": "Launch Readiness", "type": "freeform" },
  "position": { "x": 0, "y": 0 },
  "geometry": { "width": 6000, "height": 350 },
  "style": { "fillColor": "#1565C0" }
}

Step 2: Add project title
POST /boards/{board_id}/texts
{
  "data": { "content": "LAUNCH COMMAND CENTER — ProjectX Feature Launch" },
  "position": { "x": 100, "y": 40 },
  "style": {
    "fontSize": "36",
    "fontWeight": "bold",
    "color": "#FFFFFF"
  }
}

Step 3: Add RAG indicator (per team)
POST /boards/{board_id}/shapes
{
  "data": { "content": "ENG\nGREEN", "shape": "round_rectangle" },
  "position": { "x": 100, "y": 200 },
  "geometry": { "width": 120, "height": 60 },
  "style": {
    "fillColor": "#2E7D32",
    "fontSize": "12",
    "fontWeight": "bold",
    "color": "#FFFFFF",
    "borderWidth": "0",
    "textAlign": "center"
  }
}
```

### Creating a Task Card

```
POST /boards/{board_id}/cards
{
  "data": {
    "title": "Redesign Onboarding Wizard",
    "description": "Team: DESIGN + ENG\nOwner: @sarah_design\nDue: March 8, 2026\nStatus: IN PROGRESS\n\nLinked to: Insight #2, Journey Stage 3"
  },
  "position": { "x": 500, "y": 2100 },
  "geometry": { "width": 350, "height": 160 },
  "style": { "cardTheme": "#00897B" }
}
```

### Creating a Cross-Quadrant Connector

```
POST /boards/{board_id}/connectors
{
  "startItem": { "id": "insight_card_2_id" },
  "endItem": { "id": "task_card_2_3_id" },
  "style": {
    "strokeColor": "#7B1FA2",
    "strokeWidth": "2",
    "strokeStyle": "dashed"
  },
  "captions": [
    { "content": "Drives", "position": "50%" }
  ]
}
```

---

## Quick-Start Sequences

### 30-Minute Launch Board Setup

For a PM who needs to set up the board framework quickly:

1. (3 min) Create board, set size to 6000x3800, add header with project name and date
2. (5 min) Create 4 quadrant frames with labels: INSIGHTS, MAPPING, TASKS, DESIGN
3. (3 min) Add quadrant border accents and background tints
4. (5 min) Add placeholder content in each quadrant (3 empty cards each)
5. (5 min) Set up kanban columns in Tasks quadrant (To Do | In Progress | Done | Blocked)
6. (3 min) Add timeline bar with phase labels
7. (3 min) Add readiness indicators (all set to NOT STARTED initially)
8. (3 min) Share board with team and assign quadrant owners

### 2-Hour Full Board Population

For a board that has been framed and now needs content:

1. (30 min) Populate Insights with 3-5 research findings and competitive intel
2. (30 min) Build customer journey map in Mapping with 5-6 stages
3. (30 min) Create task epics and individual tasks in Tasks, link to insights
4. (15 min) Add design artifacts in Design with review status
5. (10 min) Add cross-quadrant connectors and traceability matrix
6. (5 min) Update readiness indicators based on current status

### Daily Launch Standup Board Update (10 minutes)

1. (2 min) Update readiness indicators for each team
2. (3 min) Move task cards to correct status columns
3. (2 min) Update or add blocker cards
4. (2 min) Advance the "We Are Here" marker on the timeline
5. (1 min) Update "Last Updated" timestamp on the header
