# Mind Maps — Build Process

## Overview

Building a mind map board is a creative act with an engineering backbone. This document outlines a six-phase workflow that transforms a vague request into a polished, professional mind map. Each phase includes specific steps, decision points, and guidance on translating design decisions into Miro API calls.

---

## Phase 1: Discovery — Understanding the Request

Before placing a single element, gather the information needed to make smart design decisions.

### Questions to Ask (or Infer from Context)

**About the topic**:

- What is the central question, topic, or challenge?
- How specific is the scope? (Broad "Product Strategy" vs. narrow "Q3 Mobile App Feature Priorities")
- Is there an existing framework to follow? (SWOT, 5 Whys, AARRR, etc.)

**About the content**:

- How many major themes or categories exist? (This determines the number of branches)
- What level of detail is needed? (High-level overview vs. deep dive)
- Is there existing content to incorporate? (Research data, brainstorm notes, survey results)
- What domain vocabulary should be used? (Technical terms, business jargon, plain language)

**About the audience**:

- Who will view this board? (Internal team, client, executive, workshop participants)
- What is their familiarity with the topic? (Expert vs. newcomer)
- Will they interact with it or just view it? (Collaborative vs. presentation)

**About the style**:

- Preferred visual tone? (Corporate/professional, creative/playful, minimal/clean, bold/impactful)
- Dark mode or light mode?
- Any brand colors or style guidelines to follow?
- Should it match existing boards in a series?

### Decision Outputs from Discovery

By the end of Phase 1, you should know:

1. The exact central topic statement (verbatim)
2. The number and names of primary branches (4-8)
3. The layout pattern to use (Radial, Hemispheric, Cluster, Cascade, or Dual-Core)
4. The color palette to use
5. The approximate content density (Simple, Standard, or Advanced)
6. The board dimensions

---

## Phase 2: Structure — Defining the Skeleton

### Step 2.1: Choose Board Dimensions

Based on content density:

| Density                               | Board Size  | Center Position |
| ------------------------------------- | ----------- | --------------- |
| Simple (3-4 branches, <25 items)      | 4000x4000px | (2000, 2000)    |
| Standard (5-6 branches, 25-60 items)  | 6000x6000px | (3000, 3000)    |
| Advanced (7-8 branches, 60-120 items) | 8000x8000px | (4000, 4000)    |

### Step 2.2: Define Zones

Map out the major spatial zones before placing any elements:

```
┌────────────────────────────────────────────────┐
│  [Meta Zone]              [Title Zone]          │
│  (top-left corner)        (top-center)          │
│                                                 │
│                                                 │
│          ┌───────────────────────┐              │
│          │                       │              │
│          │    CONTENT ZONE       │              │
│          │   (80% of board)      │              │
│          │                       │              │
│          └───────────────────────┘              │
│                                                 │
│  [Legend Zone]             [Action Zone]         │
│  (bottom-left)            (bottom-right)        │
└────────────────────────────────────────────────┘
```

### Step 2.3: Calculate Branch Positions

For the Classic Radial pattern with 6 branches on a 6000x6000px board:

```
Center: (3000, 3000) — 400x300px node

Branch positions (center-to-branch-center distance: 1200px):
  Branch 1 (top):        (3000, 1800)  — angle: 270°
  Branch 2 (upper-right):(4040, 2400)  — angle: 330°
  Branch 3 (lower-right):(4040, 3600)  — angle: 30°
  Branch 4 (bottom):     (3000, 4200)  — angle: 90°
  Branch 5 (lower-left): (1960, 3600)  — angle: 150°
  Branch 6 (upper-left): (1960, 2400)  — angle: 210°
```

For other patterns, refer to the layout-patterns.md document for position calculations.

### Step 2.4: Plan Content Slots

For each branch, estimate the number of sub-items and plan their positions:

- 3-5 items: Single column or arc
- 6-8 items: Two columns or wider arc
- 9-12 items: Grid arrangement within the branch zone
- 13+: Consider splitting into sub-branches with their own sub-items

---

## Phase 3: Skeleton — Placing Empty Structures

This phase creates the visual framework with empty or placeholder content.

### Step 3.1: Create the Board Background

**Miro API approach**:

- Set board background color using board settings
- If using a frame-based approach, create a full-board frame with the background color

### Step 3.2: Create the Central Node

**Elements to create**:

1. A shape (rounded rectangle) for the center background
2. A text element for the central topic
3. A text element for the subtitle
4. Optional: A decorative border shape

**Miro API calls**:

```
createShape({
  type: "round_rectangle",
  x: centerX, y: centerY,
  width: 400, height: 300,
  style: {
    fillColor: "#1A237E",
    borderColor: "#FFFFFF",
    borderWidth: 3,
    borderRadius: 16
  }
})

createText({
  content: "Central Topic Text",
  x: centerX, y: centerY - 30,
  style: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center"
  }
})

createText({
  content: "Subtitle — Team / Date",
  x: centerX, y: centerY + 40,
  style: {
    fontSize: 16,
    color: "#B0BEC5",
    textAlign: "center"
  }
})
```

### Step 3.3: Create Branch Heading Nodes

For each primary branch, create a heading node:

```
For each branch (i = 1 to N):
  createShape({
    type: "round_rectangle",
    x: branchPositions[i].x,
    y: branchPositions[i].y,
    width: 300, height: 180,
    style: {
      fillColor: branchColors[i],
      borderColor: darken(branchColors[i], 20%),
      borderWidth: 2,
      borderRadius: 12
    }
  })

  createText({
    content: branchLabels[i],
    x: branchPositions[i].x,
    y: branchPositions[i].y,
    style: {
      fontSize: 22,
      fontWeight: "semibold",
      color: "#FFFFFF",
      textAlign: "center"
    }
  })
```

### Step 3.4: Create Connectors

Connect the center to each branch:

```
For each branch (i = 1 to N):
  createConnector({
    startItem: centerNodeId,
    endItem: branchNodeIds[i],
    style: {
      strokeColor: "#546E7A",
      strokeWidth: 4,
      strokeStyle: "normal",
      type: "curved"
    },
    captions: []  // No labels on structural connectors
  })
```

### Step 3.5: Create Zone Frames

Place invisible or subtle frames for the legend, action items, and metadata zones:

```
// Legend zone (bottom-left)
createFrame({
  x: 200, y: boardHeight - 500,
  width: 500, height: 350,
  title: "Legend",
  style: { fillColor: "transparent" }
})

// Action zone (bottom-right)
createFrame({
  x: boardWidth - 700, y: boardHeight - 500,
  width: 500, height: 350,
  title: "Action Items",
  style: { fillColor: "transparent" }
})
```

---

## Phase 4: Content — Filling the Map

### Step 4.1: Populate Branch Content

For each branch, create sticky notes or shapes for each sub-item:

```
For each branch:
  For each item in branch.items:
    createStickyNote({
      content: item.text,
      x: item.calculatedX,
      y: item.calculatedY,
      width: 200,
      style: {
        fillColor: lighten(branchColor, 60%),
        textAlign: "left",
        fontSize: 14
      }
    })
```

**Positioning sub-items**: Arrange in an arc or cluster around the branch heading:

- Calculate positions radiating outward from the branch heading
- Space evenly with 30-50px gaps
- Keep all sub-items within the branch's angular territory

### Step 4.2: Add Sub-Branch Connectors

Connect branch headings to their child items:

```
For each branch:
  For each item in branch.items:
    createConnector({
      startItem: branchHeadingId,
      endItem: itemId,
      style: {
        strokeColor: branchColor at 60% opacity,
        strokeWidth: 2,
        strokeStyle: "normal",
        type: "curved"
      }
    })
```

### Step 4.3: Add Cross-Connections

Identify and create cross-branch connections:

```
For each crossConnection:
  createConnector({
    startItem: crossConnection.fromItemId,
    endItem: crossConnection.toItemId,
    style: {
      strokeColor: "#F9A825",  // Accent color
      strokeWidth: 2,
      strokeStyle: "dashed",
      type: "curved"
    },
    captions: [{
      content: crossConnection.label,
      position: 0.5  // Midpoint of connector
    }]
  })
```

### Step 4.4: Populate the Legend

Create color swatches and labels:

```
For each branch (i = 1 to N):
  // Color swatch
  createShape({
    type: "circle",
    x: legendX,
    y: legendY + (i * 40),
    width: 20, height: 20,
    style: { fillColor: branchColors[i] }
  })

  // Label
  createText({
    content: branchLabels[i],
    x: legendX + 40,
    y: legendY + (i * 40),
    style: { fontSize: 13, color: "#616161" }
  })
```

### Step 4.5: Populate Action Items

Create a structured list of next steps:

```
For each action:
  createStickyNote({
    content: `[${action.priority}] ${action.owner} — ${action.task} — by ${action.deadline}`,
    x: actionZoneX,
    y: actionZoneY + (index * 120),
    width: 400,
    style: {
      fillColor: priorityColor(action.priority),
      fontSize: 13
    }
  })
```

---

## Phase 5: Visual Polish

### Step 5.1: Alignment Check

Verify that elements are properly aligned:

- Branch headings at equal distances from center
- Sub-items within each branch consistently spaced
- Legend items vertically aligned
- Action items vertically aligned
- No overlapping elements

### Step 5.2: Color Refinement

- Ensure all branch colors are from the chosen palette
- Verify text contrast ratios
- Check that sticky note tints are visually distinct from each other
- Verify the center node is the most visually prominent element

### Step 5.3: Typography Consistency

- All center text uses the same font and size
- All branch headings use the same font and size
- All sub-items use the same font and size
- Annotations use a smaller, consistent size

### Step 5.4: Add Decorative Polish

- **Subtle shadows**: Add drop shadows to the center node (4px blur, 2px offset, black at 10%)
- **Branch background zones**: Create very subtle, filled shapes behind each branch cluster (branch color at 5-8% opacity, large rounded rectangle)
- **Divider lines**: Add thin lines separating the content zone from the legend and action zones
- **Board title**: Add a title element at the top of the board if not already part of the center node
- **Badges**: Add "KEY INSIGHT" or "TOP VOTE" badges to standout items

### Step 5.5: Connector Cleanup

- Verify no connectors cross through unrelated nodes
- Ensure all connectors use curved paths
- Check that connector weights diminish with hierarchy level
- Verify cross-connections are visually distinct from structural connections (dashed vs. solid)

---

## Phase 6: Review — Quality Assurance

### The 30-Second Test

Zoom out to see the entire board. In 30 seconds, can you:

- [ ] Identify the central topic
- [ ] Count the number of branches
- [ ] Read at least 3 branch labels
- [ ] Distinguish branches by color
- [ ] See the overall shape and structure

If any of these fail, the visual hierarchy needs adjustment.

### The Content Audit

- [ ] Every branch has at least 3 items (no empty branches)
- [ ] No branch has more than 15 items (split if necessary)
- [ ] Items are specific and actionable (no vague platitudes)
- [ ] Cross-connections reveal non-obvious insights
- [ ] The legend accurately reflects the board's visual coding
- [ ] Action items have owners and deadlines

### The Spacing Audit

- [ ] No elements overlap
- [ ] Minimum 30px between any two non-connected elements
- [ ] Branch clusters have clear separation (at least 150px between branches)
- [ ] White space feels intentional, not accidental
- [ ] The board has expansion room (at least 10% empty periphery)

### The Accessibility Audit

- [ ] Text-to-background contrast ratio is at least 4.5:1 for body text
- [ ] Text-to-background contrast ratio is at least 3:1 for headings
- [ ] Branch colors are distinguishable without color vision (check with a simulator)
- [ ] All elements have text labels (not color-only meaning)
- [ ] Interactive elements (if any) are at least 44x44px

### The Storytelling Test

Read the board as if you are seeing it for the first time:

- Does the central topic draw you in?
- Do the branches tell a clear story about the topic?
- Can you follow the logic from center to branches to sub-items?
- Do cross-connections surprise and inform?
- Does the board make you want to explore more?

---

## Common Pitfalls by Phase

### Phase 1 Pitfalls (Discovery)

- **Skipping discovery**: Jumping to design without understanding the topic leads to generic, unhelpful boards
- **Too many branches**: Trying to cover everything results in an overwhelming, unfocused map
- **Vague scope**: "Let's brainstorm about the product" will produce a worse map than "What features should we prioritize for Q3?"

### Phase 2 Pitfalls (Structure)

- **Wrong pattern choice**: Using a radial pattern for a hierarchical topic, or a cascade for an open brainstorm
- **Board too small**: Running out of space forces cramped, unreadable content
- **Ignoring zones**: Forgetting to reserve space for legend, actions, and metadata

### Phase 3 Pitfalls (Skeleton)

- **Over-decorating the skeleton**: Adding colors and effects before the structure is solid
- **Inconsistent sizing**: Branch nodes of different sizes when they should be uniform
- **Straight connectors**: Using straight lines instead of curves (feels rigid and mechanical)

### Phase 4 Pitfalls (Content)

- **Placeholder syndrome**: Leaving "Lorem ipsum" or "Idea 1" instead of real content
- **Wall of text**: Writing paragraphs on sticky notes instead of concise phrases
- **Missing cross-connections**: Treating branches as independent silos instead of looking for relationships
- **Unbalanced branches**: One branch with 15 items and another with 2

### Phase 5 Pitfalls (Polish)

- **Over-decorating**: Adding so many visual elements that the content is obscured
- **Inconsistent styling**: Some stickies with shadows, others without; mixed fonts; random colors
- **Forgetting dark/light mode**: Designing for one mode without checking the other

### Phase 6 Pitfalls (Review)

- **Skipping review**: Considering the board "done" without the quality checks
- **Solo review only**: Not getting feedback from someone who was not involved in building the map
- **Ignoring accessibility**: Assuming all viewers have perfect color vision and large screens

---

## Miro API Element Reference

### Quick Reference for Mind Map Elements

| Design Element           | Miro API Call                | Key Parameters                                     |
| ------------------------ | ---------------------------- | -------------------------------------------------- |
| Central topic background | `createShape`                | type: "round_rectangle", large size, primary color |
| Central topic text       | `createText`                 | Large font, bold, centered, white                  |
| Branch heading           | `createShape` + `createText` | Medium size, branch color                          |
| Sub-item                 | `createStickyNote`           | Branch tint color, left-aligned text               |
| Structural connector     | `createConnector`            | Curved, solid, 3-4px                               |
| Cross-connection         | `createConnector`            | Curved, dashed, 2px, accent color, labeled         |
| Legend swatch            | `createShape`                | Small circle, branch color                         |
| Legend label             | `createText`                 | Small font, gray, left-aligned                     |
| Zone frame               | `createFrame`                | Transparent or subtle background                   |
| Action item              | `createStickyNote`           | Priority-colored, structured text                  |
| Decorative divider       | `createShape`                | Very thin rectangle, light gray                    |
| Badge/tag                | `createShape` + `createText` | Small rounded rectangle, bold label                |
| Background zone          | `createShape`                | Very large, 5-8% opacity fill, no border           |
