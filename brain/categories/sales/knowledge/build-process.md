# Sales Board Build Process

## Introduction

Building a god-level sales Miro board is not a single creative act — it is a structured workflow with distinct phases. This guide walks through the complete process from initial discovery through final polish, with specific guidance on API translation for programmatic board creation.

---

## Phase 1: Discovery (30-60 minutes)

### Objective

Understand the exact purpose, audience, and context for the board before touching Miro.

### Discovery Questions

**Purpose**

- What type of sales board is this? (Pipeline, account plan, playbook, forecast, deal room)
- What specific meeting or decision does this board serve?
- What decisions will be made while looking at this board?
- What is the single most important question this board should answer?

**Audience**

- Who is the primary user? (AE, sales manager, VP Sales, CRO, RevOps)
- Who is the secondary audience? (Executives, cross-functional partners)
- How much sales context does the audience already have?
- Will this be presented or self-served?

**Data**

- What CRM system is the source of truth? (Salesforce, HubSpot, Pipedrive, etc.)
- What specific data fields are available?
- How frequently does the data change?
- Who is responsible for keeping the data current?
- What is the current quota or target?

**Team Context**

- How many reps are on the team?
- What is the sales methodology? (MEDDPICC, BANT, Challenger, SPIN)
- How many pipeline stages does the team use?
- What is the average deal size and cycle length?
- Are there existing boards this should connect to?

### Discovery Deliverable

A one-paragraph brief that captures:

- Board type and purpose
- Primary and secondary audience
- Key metrics and data fields
- Update cadence and owner
- Connected systems and boards

**Example Brief**: "Build a horizontal pipeline board for the North America sales team (8 AEs, 2 managers) that serves the weekly Monday pipeline review meeting. Primary audience is the sales manager coaching reps on deal progression. Must show all active deals with next steps, stage conversion rates, velocity metrics, and aging deal alerts. Data sourced from HubSpot, synced weekly. Q1 quota is $1.2M per team. Sales methodology is MEDDPICC."

---

## Phase 2: Structure (30-45 minutes)

### Objective

Define the information architecture — what sections exist, how they relate, and what layout pattern to use.

### Steps

1. **Select the layout pattern** from the layout-patterns guide:
   - Pipeline board → Horizontal Pipeline Kanban pattern
   - Account plan → Account Strategy Canvas pattern
   - Playbook → Horizontal Flow pattern
   - Forecast/dashboard → Revenue Dashboard Grid pattern
   - Deal room → Deal Room / War Room pattern

2. **Define frames and sections**:
   List every frame that will appear on the board. For each frame, specify:
   - Frame name
   - Purpose (what question does it answer?)
   - Position in the layout (top-left, center, bottom strip, etc.)
   - Approximate size
   - Content type (KPIs, cards, table, chart, text)

3. **Map the information hierarchy**:
   - Level 1 (Glanceable): What can be absorbed in 5 seconds? → Summary strip / KPI cards
   - Level 2 (Scannable): What can be absorbed in 30 seconds? → Stage overviews, frame headers
   - Level 3 (Readable): What requires focused attention? → Individual deal cards, action items
   - Level 4 (Reference): What is consulted on demand? → Analytics, historical data, methodology

4. **Define connectors and flow**:
   - What arrows connect which sections?
   - What is the narrative reading order?
   - Where does the eye start and end?

### Structure Deliverable

A written outline of all frames with their positions, sizes, purposes, and content types. This becomes the blueprint for the build.

---

## Phase 3: Skeleton (45-60 minutes)

### Objective

Create the empty board structure in Miro — frames, backgrounds, headers, and layout — without filling in content.

### Steps

1. **Set board dimensions and background**:
   - Choose the recommended board size from the layout pattern
   - Set the background color (typically #F0F2F5 or #FAFBFC for sales boards)

2. **Create the header strip**:
   - Full-width frame at the top
   - Apply primary color background
   - Add placeholder title text
   - Add placeholder KPI card shapes

3. **Create main content frames**:
   - Position frames according to the layout pattern
   - Apply frame backgrounds (white or light tints)
   - Add frame headers with section names
   - Ensure consistent spacing between frames (30-40px)

4. **Create footer/analytics strip**:
   - Full-width frame at the bottom
   - Light background
   - Add placeholder chart areas

5. **Add structural connectors**:
   - Draw arrows between frames showing flow direction
   - Use dashed lines for implied relationships
   - Use solid lines for explicit flow

6. **Verify alignment**:
   - All frames are grid-aligned
   - Spacing is consistent
   - The board feels balanced and intentional

### API Translation for Skeleton Phase

When building programmatically via the Miro API:

```
Step 1: Create board
  POST /v2/boards
  - name: "Q1 2026 Sales Pipeline — North America"
  - description: "Weekly pipeline review board"

Step 2: Create frames
  POST /v2/boards/{boardId}/frames
  For each frame:
  - x, y: Position coordinates
  - width, height: Frame dimensions
  - title: Frame name
  - style.fillColor: Background color

Step 3: Create header elements
  POST /v2/boards/{boardId}/shapes
  For KPI card backgrounds:
  - type: "rectangle"
  - x, y, width, height
  - style.fillColor: "#FFFFFF"
  - style.borderRadius: 8

  POST /v2/boards/{boardId}/texts
  For header title:
  - content: Board title
  - style.fontSize: 36
  - style.fontWeight: "bold"
  - style.color: "#FFFFFF"

Step 4: Create connectors
  POST /v2/boards/{boardId}/connectors
  - startItem.id: Source frame ID
  - endItem.id: Target frame ID
  - style.strokeStyle: "dashed" or "normal"
  - style.strokeColor: "#4A6FA5"
```

---

## Phase 4: Content Population (60-120 minutes)

### Objective

Fill every frame with real, specific, actionable content.

### Steps

1. **Populate summary metrics**:
   - Pull latest numbers from CRM
   - Calculate derived metrics (coverage ratio, weighted pipeline, attainment %)
   - Apply RAG indicators based on target comparison
   - Add trend indicators (up/down arrows, MoM change)

2. **Create deal cards**:
   - One card per active deal
   - Apply stage-appropriate colors
   - Include all required fields (company, value, probability, contact, next step)
   - Sort by value within each stage
   - Flag aging deals

3. **Build analytics content**:
   - Calculate conversion rates from historical data
   - Calculate velocity metrics
   - Identify aging deals (>1.5x average stage duration)
   - Create win/loss summaries if applicable

4. **Add annotations and commentary**:
   - Sticky notes with context ("Budget approved contingent on Q2 timeline")
   - Warning flags ("Competing with incumbent — need executive sponsor")
   - Celebration notes ("Largest deal closed this quarter!")

5. **Add metadata**:
   - Last updated timestamp
   - Data source reference
   - Owner name
   - Review cadence note

### API Translation for Content Phase

```
Create deal cards as sticky notes:
  POST /v2/boards/{boardId}/sticky_notes
  - content: "<strong>Acme Corp — ERP Migration</strong>\n$210,000 | 50%\nContact: Tom Bradley, VP IT\nNext: Pricing follow-up by Mar 8"
  - style.fillColor: "#FFE0B2"  (Proposal stage color)
  - position: {x, y} within the stage frame
  - geometry: {width: 220, height: 170}

Create KPI values as text blocks:
  POST /v2/boards/{boardId}/texts
  - content: "$2,847,000"
  - style.fontSize: 28
  - style.fontWeight: "bold"
  - style.color: "#1A1A2E"
  - position: {x, y} centered on KPI card shape

Create KPI labels:
  POST /v2/boards/{boardId}/texts
  - content: "Total Pipeline"
  - style.fontSize: 12
  - style.color: "#6B7280"

Create status indicators as shapes:
  POST /v2/boards/{boardId}/shapes
  - type: "circle"
  - geometry: {width: 12, height: 12}
  - style.fillColor: "#2E7D32"  (green for on-track)
```

---

## Phase 5: Polish (30-45 minutes)

### Objective

Refine the board for visual excellence, readability, and professional presentation quality.

### Polish Checklist

**Alignment**

- [ ] All frames are on a consistent grid
- [ ] Elements within frames are aligned to left/center/right as appropriate
- [ ] KPI cards are evenly spaced
- [ ] Deal cards have consistent spacing within columns

**Typography**

- [ ] Font sizes follow the hierarchy (36 → 24 → 18 → 14 → 12 → 11 → 10)
- [ ] Bold is used consistently for emphasis (headlines, values, company names)
- [ ] No font size is used for only one element (indicates inconsistency)
- [ ] Numbers are formatted correctly ($, %, K, M)

**Color**

- [ ] All colors are from the chosen palette (no rogue colors)
- [ ] RAG indicators are consistent across the board
- [ ] Stage colors follow the same scheme everywhere they appear
- [ ] Text contrast meets WCAG AA standards on every background

**Content**

- [ ] No placeholder or "TBD" text remains
- [ ] All dates are current and accurate
- [ ] All numbers are internally consistent (totals add up, percentages sum correctly)
- [ ] Every deal card has a next step
- [ ] Every KPI has a target comparison

**Connectors**

- [ ] All arrows point in the intended direction
- [ ] Arrow styles are consistent (dashed for implied, solid for explicit)
- [ ] No orphaned connectors (arrows that do not connect to anything)
- [ ] Conversion rate labels are present on stage-to-stage arrows

**Metadata**

- [ ] Last updated date is visible and current
- [ ] Board owner/maintainer is identified
- [ ] Data source is documented
- [ ] Review cadence is noted

---

## Phase 6: Review (15-30 minutes)

### Objective

Validate the board with at least one other person before it goes live.

### Review Protocol

1. **The 10-Second Test**: Show the board to someone unfamiliar with it. After 10 seconds, ask them what the board is about, what the state of the business is, and what needs attention. If they cannot answer these questions, the hierarchy needs work.

2. **The Accuracy Test**: Have the data owner verify every number against the CRM. One wrong number destroys trust in the entire board.

3. **The Action Test**: For every frame, ask "What action does this drive?" If the answer is "none" or "I'm not sure," the frame may be unnecessary.

4. **The Navigation Test**: Ask someone to find a specific deal, a specific metric, or a specific action item. Time how long it takes. If any lookup takes more than 10 seconds, the organization needs improvement.

5. **The Presentation Test**: Walk through the board in Miro's presentation mode. Does the frame sequence tell a coherent story? Is the zoom level appropriate for each frame? Are transition points smooth?

### Review Deliverable

A list of specific changes needed, categorized as:

- Critical (must fix before sharing): Data errors, missing required sections
- Important (fix soon): Alignment issues, inconsistent formatting
- Nice to have (fix when time permits): Color refinements, additional annotations

---

## Phase 7: Maintenance Plan

### Objective

Establish the ongoing update workflow so the board stays alive and trusted.

### Maintenance Specification

| Task                                 | Frequency                       | Owner                    | Time Required      |
| ------------------------------------ | ------------------------------- | ------------------------ | ------------------ |
| Move deal cards between stages       | After every deal update         | AE who owns the deal     | 2 minutes per deal |
| Update KPI summary numbers           | Weekly (before pipeline review) | RevOps or Sales Manager  | 15 minutes         |
| Add new deal cards                   | As deals enter pipeline         | SDR or AE                | 5 minutes per deal |
| Archive closed deals (won/lost)      | Weekly                          | Sales Manager            | 10 minutes         |
| Update conversion rates and velocity | Monthly                         | RevOps                   | 30 minutes         |
| Update competitor battlecards        | Quarterly                       | Product Marketing        | 2 hours            |
| Full board review and cleanup        | Quarterly                       | Sales Manager + RevOps   | 1 hour             |
| Update the "last updated" timestamp  | Every time board is modified    | Whoever makes the change | 30 seconds         |

---

## Quick-Start Build Sequences

### Pipeline Board — Fast Track (90 minutes total)

1. Create board at 5000x3000px, background #F0F2F5 (5 min)
2. Add header strip: title, date, KPI cards (15 min)
3. Create 6 stage columns with headers and stage counts (15 min)
4. Add deal cards — top 5-8 deals per stage (30 min)
5. Add analytics strip with conversion rates and velocity (15 min)
6. Polish: alignment, colors, connectors (10 min)

### Account Plan — Fast Track (120 minutes total)

1. Create board at 6000x4000px, background #F0F2F5 (5 min)
2. Add account banner with logo, ARR, health (10 min)
3. Create stakeholder map frame and populate (25 min)
4. Create relationship matrix (15 min)
5. Create revenue landscape with current and potential (15 min)
6. Create competitive landscape cards (15 min)
7. Create opportunity cards (10 min)
8. Create quarterly action plan (15 min)
9. Polish: alignment, connectors, metadata (10 min)

### Playbook — Fast Track (180 minutes total)

1. Create board at 7000x3400px, background #F0F2F5 (5 min)
2. Add playbook header (10 min)
3. Build ICP and persona section (30 min)
4. Build outreach sequences (30 min)
5. Build discovery framework (25 min)
6. Build demo/proposal section (20 min)
7. Build closing section (15 min)
8. Build objection handling strip (25 min)
9. Build competitor battlecards (15 min)
10. Polish: alignment, flow, connectors (5 min)

---

## Common Build Mistakes

1. **Starting with content instead of structure**: Always build the skeleton first. Rearranging content is much harder than rearranging empty frames.

2. **Building from CRM exports**: Do not paste a CSV into Miro. Translate data into visual cards. The value of a Miro board is spatial reasoning, not tabular data display.

3. **Ignoring the update workflow**: If the board is hard to update, it will not be updated. Design for easy card movement, quick status changes, and simple data refresh.

4. **Over-building for the first version**: Start with the minimum viable board. Add complexity in v2 after the team has used v1 and provided feedback.

5. **Forgetting the audience test**: Never share a board without having at least one person from the target audience review it first. What is obvious to the builder is often confusing to the viewer.
