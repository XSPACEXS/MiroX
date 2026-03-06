# Project Management — Build Process

## Overview

Building a project management board requires a more structured approach than creative boards. PM boards are functional tools — they must accurately represent workflows, timelines, and team structures. This document outlines a six-phase workflow for building PM boards that work as daily management instruments.

---

## Phase 1: Discovery — Understanding the Project

### Questions to Ask

**About the project**:

- What is the project name and one-sentence description?
- What methodology does the team use? (Scrum, Kanban, Waterfall, hybrid)
- What is the project timeline? (Sprint length, total duration, key dates)
- How many total tasks/stories are there? (Current estimate)

**About the team**:

- How many people on the team?
- What roles exist? (Engineers, designers, QA, PM, etc.)
- Are there sub-teams or squads?
- Is this team co-located or distributed?

**About the workflow**:

- What stages does work flow through? (The column structure)
- Are there approval gates or review steps?
- What are the typical WIP limits?
- How are tasks prioritized? (P1-P4, MoSCoW, numerical)

**About the audience**:

- Who will use this board daily? (Team level)
- Who will review it weekly? (Management level)
- Who will glance at it monthly? (Executive level)
- Does it need to support multiple view levels?

### Decision Outputs from Discovery

1. Board type: Kanban, Sprint, Timeline, Roadmap, or Dashboard
2. Column structure and WIP limits
3. Card information requirements (what fields each card needs)
4. Swim lane structure (by team, priority, or none)
5. Color palette choice
6. Board dimensions
7. Supplementary zones (risk register, metrics, retro)

---

## Phase 2: Structure — Defining the Framework

### Step 2.1: Choose Board Dimensions

| Board Type           | Small Project | Medium Project | Large Project |
| -------------------- | ------------- | -------------- | ------------- |
| Kanban (5 columns)   | 4000x3000px   | 5500x4000px    | 7000x5000px   |
| Sprint (4 sprints)   | 5000x3500px   | 6500x4500px    | 8000x5500px   |
| Timeline (8 weeks)   | 6000x2500px   | 8000x4000px    | 12000x5000px  |
| Roadmap (4 quarters) | 8000x3000px   | 10000x4500px   | 12000x6000px  |
| Dashboard            | 5000x3500px   | 6000x4000px    | 7000x5000px   |

### Step 2.2: Define the Grid

PM boards require strict grid alignment:

**Kanban grid**:

```
┌────────────────────────────────────────────────┐
│ [Project Header - full width, 120px]            │
├────────┬────────┬────────┬────────┬────────────┤
│ Col 1  │ Col 2  │ Col 3  │ Col 4  │ Col 5      │
│ Backlog│ To Do  │In Prog │ Review │ Done       │
│        │        │        │        │            │
│ Cards  │ Cards  │ Cards  │ Cards  │ Cards      │
│ stack  │ stack  │ stack  │ stack  │ stack      │
│ here   │ here   │ here   │ here   │ here       │
│        │        │        │        │            │
├────────┴────────┴────────┴────────┴────────────┤
│ [Footer Zone - Metrics / Legend - 200px]         │
└────────────────────────────────────────────────┘
```

**Timeline grid**:

```
┌──────────────────────────────────────────────────┐
│ [Project Header - full width, 120px]              │
├──────┬───────┬───────┬───────┬───────┬───────┬───┤
│ Label│ Week1 │ Week2 │ Week3 │ Week4 │ Week5 │...│
│ Col  │       │       │       │       │       │   │
├──────┼───────┴───────┴───────┴───────┴───────┴───┤
│ Row1 │ [Task bars positioned by date]             │
├──────┤                                            │
│ Row2 │ [Task bars positioned by date]             │
├──────┤                                            │
│ Row3 │ [Task bars positioned by date]             │
├──────┴────────────────────────────────────────────┤
│ [Milestones Zone / Legend - 150px]                 │
└──────────────────────────────────────────────────┘
```

### Step 2.3: Calculate Positions

**Kanban column positions** (for 5 columns on 5500px wide board):

```
Column width: (5500 - 100) / 5 = 1080px per column
Column 1 (Backlog):    x=50,   width=1080
Column 2 (To Do):      x=1130, width=1080
Column 3 (In Progress):x=2210, width=1080
Column 4 (Review):     x=3290, width=1080
Column 5 (Done):       x=4370, width=1080

Header y: 0-120
Column header y: 120-210
First card y: 240
Card spacing: 20px vertical gap
```

---

## Phase 3: Skeleton — Building the Structure

### Step 3.1: Create Project Header

```
createFrame({
  title: "Project Name — Sprint X",
  x: 0, y: 0,
  width: boardWidth, height: 120,
  style: { fillColor: "#0D47A1" }
})

createText({
  content: "CloudSync Pro v3.0 — Payment Integration Sprint",
  x: boardWidth / 2, y: 35,
  style: { fontSize: 28, fontWeight: "bold", color: "#FFFFFF", textAlign: "center" }
})

createText({
  content: "Team: 6 | Sprint 8 | Mar 18-29, 2026 | Velocity: 42 pts",
  x: boardWidth / 2, y: 80,
  style: { fontSize: 14, color: "#B0BEC5", textAlign: "center" }
})
```

### Step 3.2: Create Columns (Kanban/Sprint)

```
For each column (i = 1 to N):
  // Column header
  createFrame({
    title: "",
    x: columnPositions[i].x, y: 120,
    width: columnWidth, height: 90,
    style: { fillColor: columnColors[i] + "20" }  // 20% opacity
  })

  // Column header text
  createText({
    content: columnNames[i],
    x: columnPositions[i].x + 20, y: 140,
    style: { fontSize: 20, fontWeight: "bold", color: columnColors[i] }
  })

  // WIP limit
  createText({
    content: `(0/${wipLimits[i]})`,
    x: columnPositions[i].x + columnWidth - 80, y: 145,
    style: { fontSize: 16, color: "#757575" }
  })

  // Column body (background)
  createShape({
    type: "rectangle",
    x: columnPositions[i].x, y: 210,
    width: columnWidth, height: boardHeight - 360,
    style: { fillColor: columnColors[i] + "08", borderWidth: 0 }
  })
```

### Step 3.3: Create Timeline Grid (for Gantt)

```
// Time columns
For each week (w = 1 to totalWeeks):
  weekX = labelColumnWidth + (w - 1) * weekWidth

  // Week header
  createText({
    content: weekDates[w],
    x: weekX + weekWidth / 2, y: 145,
    style: { fontSize: 12, color: "#757575", textAlign: "center" }
  })

  // Vertical grid line
  createShape({
    type: "rectangle",
    x: weekX, y: 170,
    width: 1, height: boardHeight - 320,
    style: { fillColor: "#E0E0E0" }
  })

// Today indicator
todayX = labelColumnWidth + (daysSinceStart * pixelsPerDay)
createShape({
  type: "rectangle",
  x: todayX, y: 120,
  width: 2, height: boardHeight - 270,
  style: { fillColor: "#F44336", borderStyle: "dashed" }
})
```

### Step 3.4: Create Footer/Legend Zone

```
createFrame({
  x: 0, y: boardHeight - 200,
  width: boardWidth, height: 200,
  title: "",
  style: { fillColor: "#F5F5F5" }
})

// Status legend
statuses = ["Not Started", "In Progress", "In Review", "Done", "Blocked"]
colors = ["#E0E0E0", "#1976D2", "#7B1FA2", "#388E3C", "#D32F2F"]

For each status (s = 1 to 5):
  createShape({
    type: "circle", x: 50 + (s-1) * 200, y: boardHeight - 130,
    width: 16, height: 16,
    style: { fillColor: colors[s] }
  })
  createText({
    content: statuses[s],
    x: 75 + (s-1) * 200, y: boardHeight - 135,
    style: { fontSize: 12, color: "#616161" }
  })
```

---

## Phase 4: Content — Populating the Board

### Step 4.1: Create Task Cards

```
For each task in taskList:
  cardY = getNextCardPosition(task.column)

  // Card background
  createShape({
    type: "round_rectangle",
    x: columnPositions[task.column].x + 30,
    y: cardY,
    width: columnWidth - 60,
    height: cardHeight,
    style: {
      fillColor: "#FFFFFF",
      borderColor: "#E0E0E0",
      borderWidth: 1,
      borderRadius: 8
    }
  })

  // Priority indicator (left border accent)
  createShape({
    type: "rectangle",
    x: columnPositions[task.column].x + 30,
    y: cardY,
    width: 4,
    height: cardHeight,
    style: { fillColor: priorityColors[task.priority] }
  })

  // Card title
  createText({
    content: task.title,
    x: columnPositions[task.column].x + 50,
    y: cardY + 15,
    width: columnWidth - 100,
    style: { fontSize: 14, fontWeight: "semibold", color: "#212121" }
  })

  // Assignee + Due date
  createText({
    content: `${task.assignee} | Due: ${task.dueDate}`,
    x: columnPositions[task.column].x + 50,
    y: cardY + 50,
    style: { fontSize: 12, color: "#757575" }
  })

  // Story points badge
  createShape({
    type: "circle",
    x: columnPositions[task.column].x + columnWidth - 70,
    y: cardY + 15,
    width: 28, height: 28,
    style: { fillColor: "#E3F2FD", borderColor: "#1976D2", borderWidth: 1 }
  })
  createText({
    content: String(task.storyPoints),
    x: columnPositions[task.column].x + columnWidth - 70,
    y: cardY + 20,
    style: { fontSize: 12, fontWeight: "bold", color: "#1976D2", textAlign: "center" }
  })

  // Tags
  For each tag in task.tags:
    createShape({...})  // Small colored pill
    createText({...})   // Tag label
```

### Step 4.2: Create Timeline Bars (for Gantt)

```
For each task in taskList:
  barStartX = labelColumnWidth + (task.startDay * pixelsPerDay)
  barWidth = task.durationDays * pixelsPerDay
  barY = swimLaneY[task.lane] + laneItemOffset

  // Full task bar
  createShape({
    type: "round_rectangle",
    x: barStartX, y: barY,
    width: barWidth, height: 36,
    style: {
      fillColor: teamColors[task.team],
      borderRadius: 4
    }
  })

  // Progress overlay
  progressWidth = barWidth * (task.percentComplete / 100)
  createShape({
    type: "round_rectangle",
    x: barStartX, y: barY,
    width: progressWidth, height: 36,
    style: {
      fillColor: darken(teamColors[task.team], 20%),
      borderRadius: 4
    }
  })

  // Task label
  createText({
    content: task.title,
    x: barStartX + 10, y: barY + 10,
    style: { fontSize: 12, color: "#FFFFFF", fontWeight: "medium" }
  })
```

### Step 4.3: Create Dependencies

```
For each dependency in dependencies:
  createConnector({
    startItem: taskElements[dependency.from],
    endItem: taskElements[dependency.to],
    style: {
      strokeColor: dependency.isBlocking ? "#F44336" : "#757575",
      strokeWidth: dependency.isBlocking ? 3 : 2,
      strokeStyle: "normal",
      type: "elbowed"  // Right-angle routing for Gantt
    },
    endCap: "arrow"
  })
```

### Step 4.4: Add Dashboard Widgets (for Dashboard view)

```
// Status badge widget
createShape({
  type: "circle",
  x: widgetPositions.status.x, y: widgetPositions.status.y,
  width: 120, height: 120,
  style: { fillColor: healthColor }
})
createText({
  content: "ON TRACK",
  x: widgetPositions.status.x, y: widgetPositions.status.y,
  style: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", textAlign: "center" }
})

// Sprint progress bar
createShape({
  type: "round_rectangle",
  x: widgetPositions.progress.x, y: widgetPositions.progress.y,
  width: 400, height: 24,
  style: { fillColor: "#E0E0E0", borderRadius: 12 }
})
createShape({
  type: "round_rectangle",
  x: widgetPositions.progress.x, y: widgetPositions.progress.y,
  width: 400 * (completedPoints / totalPoints), height: 24,
  style: { fillColor: "#4CAF50", borderRadius: 12 }
})
```

---

## Phase 5: Visual Polish

### Step 5.1: Alignment Verification

- All columns exactly equal width
- All cards aligned to column padding grid
- All timeline bars aligned to date grid
- All swim lane heights consistent
- Dashboard widgets aligned to grid

### Step 5.2: Status Color Application

- Every card has correct priority border color
- Column headers match status color system
- Overdue items flagged with red indicators
- Blocked items have clear visual distinction

### Step 5.3: Typography Consistency

- All card titles same font and size
- All column headers same font and size
- All metadata same font and size
- All metric values same font and size

### Step 5.4: Decorative Elements

- Subtle card shadows for depth
- Column separator lines (1px, light gray)
- Today indicator on timelines (red dashed line)
- Milestone diamonds on key dates
- Capacity bars in sprint headers

### Step 5.5: Interactive State Polish

- Blocked cards have red tint background
- Overdue dates displayed in red text
- WIP-exceeded column headers show warning color
- Completed cards have muted styling

---

## Phase 6: Review

### Operational Accuracy Check

- [ ] Every real task is represented on the board
- [ ] All assignments match actual team roster
- [ ] All due dates are correct
- [ ] All dependencies are mapped
- [ ] WIP limits are set appropriately
- [ ] Status indicators accurately reflect current state

### Visual Effectiveness Check

- [ ] Board health is assessable in <10 seconds
- [ ] Individual tasks findable in <15 seconds
- [ ] Top risks identifiable in <30 seconds
- [ ] Workflow direction is clear (left to right)
- [ ] Status colors are consistent and meaningful
- [ ] No orphaned cards outside the column structure

### Usability Check

- [ ] Board works at full zoom-out (structure visible)
- [ ] Board works at medium zoom (card titles readable)
- [ ] Board works at close zoom (card details readable)
- [ ] New team members can understand the board in <2 minutes
- [ ] Legend/key explains any non-obvious visual coding

---

## Common Pitfalls

### Phase 1: Discovery

- **Copying someone else's workflow**: Every team's process is different. Ask, don't assume.
- **Too many columns**: More than 7 Kanban columns usually means the workflow needs simplification, not more tracking.

### Phase 2: Structure

- **Unequal column widths**: Unless intentional, columns should be equal width.
- **Forgetting the footer**: No legend means no one understands the color coding.

### Phase 3: Skeleton

- **Skipping the header**: A board without a title and context is disorienting.
- **No grid alignment**: Cards that don't align vertically look sloppy and unprofessional.

### Phase 4: Content

- **Vague task titles**: "Work on feature" is not a card title. Be specific.
- **Missing metadata**: Cards without assignees and dates are wishes, not tasks.
- **Overloading the Done column**: Archive completed items regularly.

### Phase 5: Polish

- **Overdesigning cards**: The card style should be consistent and simple. No gradients, no 3D effects.
- **Competing color systems**: Status color and team color should not conflict.

### Phase 6: Review

- **Not testing with real users**: The PM who built the board is not the best judge of its usability.
- **Forgetting mobile viewers**: Boards viewed on small screens need to work at reduced zoom.
