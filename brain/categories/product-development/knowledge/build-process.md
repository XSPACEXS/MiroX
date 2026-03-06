# Product Development Boards — Build Process

## Overview

This document describes the step-by-step creative workflow for building product
development boards — from the initial discovery conversation to the final polished
board ready for team collaboration. It also covers how to translate board designs
into Miro API calls and common pitfalls to avoid.

---

## The Six-Phase Build Process

### Phase 1: Discovery (10-15 minutes)

**Goal**: Understand the context before touching the canvas.

**Questions to ask or infer**:

1. What type of product board is needed? (Roadmap, feature spec, story map, release plan, prioritization)
2. Who is the primary audience? (Executives, PM team, engineering, cross-functional)
3. What is the product/project name and context?
4. How many items will the board contain? (5 features vs. 50 stories changes everything)
5. What is the board's lifecycle? (One-time meeting artifact vs. living document)
6. Are there existing materials to reference? (Jira backlog, PRD, strategy doc)

**Discovery outputs**:

- Board type selected
- Audience profile defined
- Content scope estimated (number of items, sections, detail level)
- Color palette selected (from visual guide)
- Layout pattern selected (from layout patterns guide)

### Phase 2: Structure (15-20 minutes)

**Goal**: Define the skeleton — frames, zones, and hierarchy — before any content.

**Steps**:

1. **Set board dimensions**: Start with the standard size for the board type:
   - Feature spec: 5000x3600px
   - User story map: 6000x3000px (wide for journey flow)
   - Roadmap: 5000x2500px (wide for timeline)
   - Release plan: 4500x3500px
   - Prioritization matrix: 3500x4000px (square-ish for the matrix + scoring table)

2. **Place the title banner**: Always first. Full-width, 400-500px tall. This anchors the
   entire board and establishes the visual language.

3. **Define frame zones**: Create empty frames with titles only. Position them according
   to the selected layout pattern. Verify alignment and spacing.

4. **Set frame backgrounds**: Apply the color palette — subtle tinted backgrounds for
   each frame, accent borders where appropriate.

5. **Add section headers**: Place header text in each frame. This verifies that the
   information architecture makes sense before populating content.

6. **Draw primary connectors**: Add the main flow arrows between frames. This confirms
   the narrative flow of the board.

**Structure checkpoint**: At this point, the board should look like a well-organized
empty house — rooms are defined, labeled, and connected, but no furniture is placed yet.
Show this structure to someone and they should be able to understand what the board
will contain.

### Phase 3: Skeleton Content (20-30 minutes)

**Goal**: Populate each frame with the correct number of elements at the right size, but
with placeholder or summary content.

**Steps**:

1. **Place sticky notes**: Add the correct number of stickies in each frame with 1-line
   placeholder titles. This establishes density and spacing.

2. **Add shape elements**: Tables, progress bars, matrix backgrounds, timeline bars.
   Content can be placeholder ("Feature name here", "TBD date").

3. **Verify spacing**: Zoom out to 30-40%. Does the board look balanced? Are sections
   roughly equal in visual weight? Adjust frame sizes and sticky positions.

4. **Check flow**: Follow the connectors. Does the board tell a logical story from
   start to finish? Is the reading order intuitive?

**Skeleton checkpoint**: The board should look "full" at 30% zoom — all sections have
content, spacing is balanced, the visual rhythm is established. Content is placeholder
but the structure is final.

### Phase 4: Content Population (30-60 minutes)

**Goal**: Replace all placeholder content with real, detailed, useful content.

**Steps**:

1. **Start with the title banner**: Final title, subtitle, metadata (owner, date, version,
   status).

2. **Fill strategic context first**: Problem statement, vision, success metrics. These
   set the tone for everything that follows.

3. **Populate the working sections**: User stories, feature cards, timeline rows,
   matrix items. Follow the content guide for writing quality.

4. **Add detail content**: Acceptance criteria, technical notes, risk descriptions,
   edge cases. This is the deep content visible only when zoomed in.

5. **Update connector labels**: Now that content is real, label the arrows with
   meaningful relationships ("blocks", "informs", "requires").

6. **Add metadata**: Owner names, dates, status indicators, version numbers,
   confidence levels.

**Content checkpoint**: Read through the entire board as if you are seeing it for the
first time. Does it answer all the questions from the content guide? Is any section
confusingly empty or overwhelmingly dense?

### Phase 5: Polish (15-20 minutes)

**Goal**: Refine visual details and ensure professional quality.

**Polish checklist**:

- [ ] All fonts are consistent (same hierarchy levels use same sizes)
- [ ] All colors match the palette (no off-brand colors crept in)
- [ ] All stickies in the same section are the same size
- [ ] All frames are aligned to the grid (no 1-2px misalignments)
- [ ] Connectors enter/exit frames at consistent points
- [ ] Status encoding is consistent (same color means the same thing everywhere)
- [ ] Text is free of typos and formatting inconsistencies
- [ ] White space is balanced (no cramped sections, no empty wastelands)
- [ ] The board passes the squint test at 25% zoom
- [ ] One decorative moment exists (title banner gradient, icon, accent stripe)

**Polish techniques**:

- Use Miro's alignment tools (distribute horizontally/vertically)
- Lock background elements and frame borders
- Group elements within each frame
- Set up Miro presentation frames for stakeholder walkthroughs

### Phase 6: Review and Handoff (10 minutes)

**Goal**: Verify the board is ready for its audience.

**Review actions**:

1. **Walk-through test**: Use Miro's presentation mode to walk through the board frame by
   frame. Does the narrative flow smoothly?
2. **Audience filter**: For each frame, ask "Does my primary audience need this?"
3. **Collaboration readiness**: Are stickies unlocked for editing? Are comment anchors
   placed at discussion points? Is there empty space for team additions?
4. **Link check**: Do all cross-board links work? Do external links (Jira, Figma, Docs)
   resolve?
5. **Export test**: Export as PNG at high resolution to verify that text is readable and
   layout is correct.

---

## Miro API Translation Guide

### Creating the Board

```
POST /v2/boards
{
  "name": "AutoPilot 3.0 — Product Roadmap Q1-Q4 2026",
  "description": "The single source of truth for our 2026 product direction.",
  "policy": {
    "permissionsPolicy": { "collaborationToolsStartAccess": "all_editors" },
    "sharingPolicy": { "access": "team_members_only" }
  }
}
```

### Element Creation Order

Build Miro boards in this order to maintain proper layering:

1. **Frames first**: Create all frames with position, size, and background color. Frames
   are the containers — everything else goes inside them.
2. **Text blocks**: Headers and labels within frames.
3. **Shapes**: Rectangles, progress bars, table structures, matrix backgrounds.
4. **Sticky notes**: User stories, feature cards, risk items, action items.
5. **Connectors**: Arrows between frames and between items within frames.
6. **Images/icons**: Any embedded images, avatars, or icon elements.

### Key API Patterns

**Creating a frame**:

```
POST /v2/boards/{board_id}/frames
{
  "data": { "title": "User Stories & Acceptance Criteria", "format": "custom" },
  "style": { "fillColor": "#F3E5F5" },
  "position": { "x": 50, "y": 700 },
  "geometry": { "width": 1550, "height": 1400 }
}
```

**Creating a sticky note**:

```
POST /v2/boards/{board_id}/sticky_notes
{
  "data": { "content": "US-1: As an engineering manager, I want to see AI-suggested assignees for each unassigned task so that I can plan sprints in less time.", "shape": "square" },
  "style": { "fillColor": "light_pink", "textAlign": "left", "textAlignVertical": "top" },
  "position": { "x": 200, "y": 850 },
  "geometry": { "width": 700, "height": 180 }
}
```

**Creating a connector**:

```
POST /v2/boards/{board_id}/connectors
{
  "startItem": { "id": "frame_1_id" },
  "endItem": { "id": "frame_2_id" },
  "style": { "strokeColor": "#6200EA", "strokeWidth": "2.0", "strokeStyle": "normal" },
  "captions": [{ "content": "What does the user need?" }]
}
```

### Coordinate System Notes

- Miro uses a coordinate system where (0,0) is the center of the board.
- Positive X goes right, positive Y goes down.
- When placing multiple frames, start from the top-left and work right and down.
- Frame positions reference the center of the frame, not the top-left corner.
- Account for half the width and height when calculating positions from edges.

---

## Common Pitfalls

### Pitfall 1: Building Bottom-Up Instead of Top-Down

**Symptom**: Starting by creating individual stickies and grouping them later.
**Problem**: The board lacks structure, items drift into odd positions, and the overall
narrative is missing.
**Fix**: Always create frames and structure first, then fill with content. Structure
before substance.

### Pitfall 2: Inconsistent Sizing

**Symptom**: Stickies in the same section are different sizes. Frames have random
dimensions.
**Problem**: The board looks unprofessional and creates false visual hierarchy (a
larger sticky looks more important even if it is not).
**Fix**: Define standard sizes before starting. All stickies in a section use the
same width and height. All frames at the same level use the same height.

### Pitfall 3: Color Chaos

**Symptom**: More than 6-7 distinct colors on the board, with no consistent meaning.
**Problem**: Color becomes noise instead of signal. Users cannot decode what colors mean.
**Fix**: Choose a palette of 4-5 meaningful colors upfront. Document the meaning in a
legend. Never introduce a new color without a purpose.

### Pitfall 4: Connector Spaghetti

**Symptom**: Arrows crossing, overlapping, and creating a tangled web.
**Problem**: Dependencies and flows become unreadable. The board looks chaotic.
**Fix**: Limit connectors to major relationships only (not every possible connection).
Route arrows around frames rather than through them. Use consistent entry/exit points
(midpoint of the nearest frame edge).

### Pitfall 5: Over-Detailing at the Wrong Level

**Symptom**: Technical acceptance criteria on an executive roadmap. High-level vision
statements on a sprint board.
**Problem**: The content does not match the audience. Too much detail overwhelms; too
little frustrates.
**Fix**: Match content depth to audience need (see content guide audience matrix).

### Pitfall 6: Forgetting the Narrative

**Symptom**: All sections are well-designed individually, but there is no story connecting
them. The board is a collection of well-formatted fragments.
**Problem**: Users cannot follow the board's logic or derive decisions from it.
**Fix**: Add connectors with labels between sections. Use the title banner to set the
narrative frame. Ensure the board answers "why, what, when, who" in that order.

### Pitfall 7: Not Leaving Room for Collaboration

**Symptom**: Every pixel is accounted for. There is no empty space.
**Problem**: Team members cannot add stickies, comments, or annotations during live
sessions. The board feels like a read-only document.
**Fix**: Leave 20-30% expansion room in each section. Include explicit "Add your
thoughts here" zones near discussion points.

### Pitfall 8: Ignoring Mobile and Zoom Readability

**Symptom**: Text is readable at 100% zoom but invisible at 50%.
**Problem**: Stakeholders viewing the board on a laptop or tablet cannot read section
headers. Remote participants in a screen-share see a blur.
**Fix**: Use the typography scale from the visual guide. Test readability at 30%, 50%,
and 100% zoom levels.

---

## Build Time Estimates

| Board Type                     | Discovery | Structure | Skeleton | Content | Polish | Total    |
| ------------------------------ | --------- | --------- | -------- | ------- | ------ | -------- |
| Feature Spec (Advanced)        | 15 min    | 20 min    | 25 min   | 45 min  | 20 min | ~2 hrs   |
| User Story Map (Medium)        | 10 min    | 15 min    | 20 min   | 30 min  | 15 min | ~1.5 hrs |
| Product Roadmap (Medium)       | 10 min    | 15 min    | 15 min   | 25 min  | 15 min | ~1.3 hrs |
| Release Plan (Advanced)        | 15 min    | 20 min    | 20 min   | 40 min  | 15 min | ~1.8 hrs |
| Prioritization Matrix (Simple) | 10 min    | 10 min    | 15 min   | 20 min  | 10 min | ~1 hr    |

These estimates are for creating a fully realized board with real content examples.
Skeleton-only boards (structure + placeholders) take roughly 40% of these times.
