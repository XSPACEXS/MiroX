# Strategy & Planning — Build Process

## Overview

Building a strategy board is an act of strategic thinking itself. The process is not linear — it cycles between gathering evidence, structuring analysis, and refining insights. Every phase shapes the final board's intellectual quality. Unlike creative boards where aesthetics can compensate for weak content, a strategy board with beautiful design but empty analysis is worse than useless — it creates false confidence.

---

## Phase 1: Strategic Brief & Framework Selection (10-15 minutes)

### 1.1 Define the Strategic Question

Before touching the canvas, articulate what question the board must answer. This question determines everything that follows.

**Examples of strong strategic questions**:

- "What is our competitive position in the mid-market compliance segment, and where should we invest in the next 18 months?"
- "How does our business model need to evolve to reach $10M ARR?"
- "What are the biggest risks to our Q3 product launch, and how do we mitigate them?"
- "Where do we sit relative to the five competitors who entered our space in the last year?"

**Examples of weak strategic questions**:

- "What is our strategy?" (too broad — cannot be answered on a single board)
- "How do we grow?" (too vague — growth in what dimension?)
- "What should we do?" (no analytical frame — this is the output, not the input)

### 1.2 Select the Framework

Match the strategic question to the appropriate framework:

| Strategic Question Type                                        | Framework                      | Layout Pattern       |
| -------------------------------------------------------------- | ------------------------------ | -------------------- |
| Situation assessment (strengths, weaknesses, external factors) | SWOT Analysis                  | Four-Quadrant Matrix |
| Business model design or evaluation                            | Business Model Canvas          | Nine-Block Canvas    |
| Goal setting and alignment                                     | OKR Planning                   | Hierarchical Cascade |
| Competitive positioning and market landscape                   | Competitive Analysis           | Positioning Map      |
| Vision-to-action translation                                   | Vision Board + Strategy Bridge | Vision-to-Execution  |

### 1.3 Gather Inputs

Before building, collect the evidence that will populate the board:

- **Internal data**: Revenue, NPS, churn rate, team size, capacity metrics, product performance
- **External data**: Market reports, competitor pricing, industry benchmarks, regulatory timelines
- **Stakeholder input**: CEO priorities, customer feedback, team concerns, board expectations
- **Historical context**: Past strategic decisions, previous SWOT analyses, OKR performance history

**Quality gate**: Do not proceed to Phase 2 until you have at least 3 data points per framework section. A SWOT with no data is an opinion board, not a strategy board.

---

## Phase 2: Board Skeleton & Framework Structure (15-20 minutes)

### 2.1 Create the Board Canvas

```
// Set board dimensions based on framework
const frameworkDimensions = {
  swot: { width: 6000, height: 6000 },
  bmc: { width: 9000, height: 6000 },
  okr: { width: 10000, height: 5000 },
  competitive: { width: 6000, height: 6000 },
  vision: { width: 12000, height: 5000 }
};
```

### 2.2 Build Framework Structure

**SWOT — Four-Quadrant Setup**:

```
// Create the central divider lines
createShape({
  type: "line",
  startX: boardWidth / 2, startY: headerHeight,
  endX: boardWidth / 2, endY: boardHeight - footerHeight,
  strokeWidth: 4, strokeColor: "#78909C"
});

createShape({
  type: "line",
  startX: padding, startY: (boardHeight - headerHeight - footerHeight) / 2 + headerHeight,
  endX: boardWidth - padding, endY: (boardHeight - headerHeight - footerHeight) / 2 + headerHeight,
  strokeWidth: 4, strokeColor: "#78909C"
});

// Create axis labels at the cross
createText({
  content: "INTERNAL", x: boardWidth / 2 - 60, y: headerHeight + 20,
  fontSize: 14, fontWeight: 500, color: "#78909C", rotation: 0
});

createText({
  content: "EXTERNAL", x: boardWidth / 2 - 60, y: boardHeight - footerHeight - 40,
  fontSize: 14, fontWeight: 500, color: "#78909C", rotation: 0
});

createText({
  content: "POSITIVE", x: padding + 20, y: (boardHeight - headerHeight - footerHeight) / 2 + headerHeight - 10,
  fontSize: 14, fontWeight: 500, color: "#78909C"
});

createText({
  content: "NEGATIVE", x: boardWidth - padding - 100, y: (boardHeight - headerHeight - footerHeight) / 2 + headerHeight - 10,
  fontSize: 14, fontWeight: 500, color: "#78909C"
});
```

**SWOT — Quadrant background tints**:

```
const quadrants = [
  { name: "STRENGTHS", x: padding, y: headerHeight, color: "#1565C0", opacity: 0.06 },
  { name: "WEAKNESSES", x: boardWidth / 2 + 10, y: headerHeight, color: "#E65100", opacity: 0.06 },
  { name: "OPPORTUNITIES", x: padding, y: midY + 10, color: "#2E7D32", opacity: 0.06 },
  { name: "THREATS", x: boardWidth / 2 + 10, y: midY + 10, color: "#B71C1C", opacity: 0.06 }
];

quadrants.forEach(q => {
  // Background tint
  createShape({
    type: "rectangle",
    x: q.x, y: q.y,
    width: quadrantWidth, height: quadrantHeight,
    fillColor: q.color, fillOpacity: q.opacity,
    borderRadius: 8, strokeWidth: 0
  });

  // Quadrant header
  createText({
    content: q.name,
    x: q.x + 30, y: q.y + 20,
    fontSize: 24, fontWeight: 700, color: q.color
  });
});
```

**BMC — Nine-Block Setup**:

```
const bmcBlocks = [
  { name: "KEY PARTNERS", col: 0, row: 0, rowSpan: 2, colSpan: 1 },
  { name: "KEY ACTIVITIES", col: 1, row: 0, rowSpan: 1, colSpan: 1 },
  { name: "KEY RESOURCES", col: 1, row: 1, rowSpan: 1, colSpan: 1 },
  { name: "VALUE PROPOSITIONS", col: 2, row: 0, rowSpan: 2, colSpan: 1 },
  { name: "CUSTOMER RELATIONSHIPS", col: 3, row: 0, rowSpan: 1, colSpan: 1 },
  { name: "CHANNELS", col: 3, row: 1, rowSpan: 1, colSpan: 1 },
  { name: "CUSTOMER SEGMENTS", col: 4, row: 0, rowSpan: 2, colSpan: 1 },
  { name: "COST STRUCTURE", col: 0, row: 2, rowSpan: 1, colSpan: 2.5 },
  { name: "REVENUE STREAMS", col: 2.5, row: 2, rowSpan: 1, colSpan: 2.5 }
];

const colWidth = (boardWidth - 2 * padding) / 5;
const topRowHeight = (boardHeight - headerHeight - footerHeight - bottomRowHeight) / 2;
const bottomRowHeight = (boardHeight - headerHeight - footerHeight) * 0.25;

bmcBlocks.forEach(block => {
  const x = padding + block.col * colWidth;
  const y = headerHeight + block.row * topRowHeight;
  const w = block.colSpan * colWidth - gap;
  const h = block.rowSpan * topRowHeight - gap;

  createFrame({
    x: x, y: y, width: w, height: h,
    title: block.name,
    titleFontSize: 18, titleFontWeight: 700,
    backgroundColor: "#FFFFFF", borderColor: "#78909C", borderWidth: 2
  });
});
```

**OKR — Hierarchical Cascade Setup**:

```
// Level 0: Mission / Vision at the top center
createShape({
  type: "rectangle",
  x: boardWidth / 2 - 300, y: 100,
  width: 600, height: 200,
  fillColor: "#4A148C", borderRadius: 12,
  strokeWidth: 0
});

createText({
  content: "COMPANY MISSION",
  x: boardWidth / 2, y: 140,
  fontSize: 14, fontWeight: 500, color: "#FFFFFF", textAlign: "center"
});

// Level 1: Objectives row
const objectiveCount = 3;
const objectiveWidth = 400;
const objectiveGap = 150;
const totalObjectiveWidth = objectiveCount * objectiveWidth + (objectiveCount - 1) * objectiveGap;
const objectiveStartX = (boardWidth - totalObjectiveWidth) / 2;

for (let i = 0; i < objectiveCount; i++) {
  const objX = objectiveStartX + i * (objectiveWidth + objectiveGap);
  const objY = 500;

  createShape({
    type: "rectangle",
    x: objX, y: objY,
    width: objectiveWidth, height: 150,
    fillColor: "#1A237E", borderRadius: 8
  });

  // Connector from mission to objective
  createConnector({
    startX: boardWidth / 2, startY: 300,
    endX: objX + objectiveWidth / 2, endY: objY,
    strokeWidth: 3, strokeColor: "#4A148C",
    endCap: "triangle"
  });
}
```

### 2.3 Add Board Header

```
// Board title zone
createFrame({
  x: padding, y: 20,
  width: boardWidth - 2 * padding, height: 120,
  title: "",
  backgroundColor: "transparent", borderWidth: 0
});

createText({
  content: "SWOT ANALYSIS",
  x: padding + 30, y: 30,
  fontSize: 36, fontWeight: 700, color: "#1A1A2E"
});

createText({
  content: "Acme Corp — Q2 2026 Strategic Assessment",
  x: padding + 30, y: 80,
  fontSize: 18, fontWeight: 400, color: "#546E7A"
});

createText({
  content: "Last Updated: March 6, 2026 | Version 2.1",
  x: boardWidth - padding - 350, y: 80,
  fontSize: 14, fontWeight: 400, color: "#90A4AE"
});
```

### 2.4 Add Implications Zone

```
// Bottom zone for strategic implications
createFrame({
  x: padding, y: boardHeight - footerHeight - 20,
  width: boardWidth - 2 * padding, height: footerHeight,
  title: "STRATEGIC IMPLICATIONS & RECOMMENDED ACTIONS",
  titleFontSize: 20, titleFontWeight: 700,
  backgroundColor: "#FFF8E1", borderColor: "#F9A825", borderWidth: 3,
  borderRadius: 12
});
```

---

## Phase 3: Content Population (25-40 minutes)

### 3.1 Populate Each Framework Section

This is the most important phase. Every item must pass three tests:

1. **Specificity Test**: Could a competitor put the exact same statement on their board? If yes, rewrite.
2. **Evidence Test**: Is there data or evidence supporting this item? If not, note it as a hypothesis.
3. **So What Test**: Does this item have a strategic implication? If not, it is trivia, not strategy.

**Creating strategic items (SWOT example)**:

```
function createStrategicItem(quadrant, title, evidence, implication, confidence, priority) {
  const stickyWidth = 200;
  const stickyHeight = 150;

  // Determine border style from confidence
  const borderStyle = confidence === "confirmed" ? "solid"
                    : confidence === "estimated" ? "dashed"
                    : "dotted";

  // Determine border color from priority
  const borderColor = priority === "critical" ? "#F9A825"  // Gold accent for critical
                    : priority === "high" ? quadrant.color
                    : "#E0E0E0";

  const borderWidth = priority === "critical" ? 3 : 1;

  // Position within quadrant grid
  const col = itemIndex % 3;
  const row = Math.floor(itemIndex / 3);
  const x = quadrant.x + 30 + col * (stickyWidth + 20);
  const y = quadrant.y + 60 + row * (stickyHeight + 20);

  // Create sticky note
  createStickyNote({
    x: x, y: y,
    width: stickyWidth, height: stickyHeight,
    content: title,
    backgroundColor: "#FFFFFF",
    borderColor: borderColor,
    borderWidth: borderWidth,
    borderStyle: borderStyle
  });

  // Evidence annotation below the title
  createText({
    content: evidence,
    x: x + 10, y: y + 70,
    fontSize: 12, fontWeight: 400, color: "#616161",
    width: stickyWidth - 20
  });

  // Implication tag at bottom
  if (implication) {
    createText({
      content: "→ " + implication,
      x: x + 10, y: y + stickyHeight - 30,
      fontSize: 11, fontWeight: 500, color: quadrant.color,
      width: stickyWidth - 20
    });
  }
}
```

### 3.2 Content Quality Protocol

For each framework section, follow this protocol:

**Step 1**: List all candidate items (brainstorm freely).
**Step 2**: Apply the Specificity Test — remove anything generic.
**Step 3**: Apply the Evidence Test — tag remaining items as confirmed/estimated/hypothesis.
**Step 4**: Apply the So What Test — add strategic implications to each item.
**Step 5**: Prioritize — rank items within the section by strategic importance.
**Step 6**: Trim — keep 4-8 items per SWOT quadrant, 3-6 per BMC block, 3-5 objectives for OKR.

### 3.3 Add Cross-Section Connections

After populating all sections, identify relationships:

```
// Strength enables Opportunity
createConnector({
  startItemId: strength_1_id,
  endItemId: opportunity_2_id,
  strokeWidth: 2, strokeColor: "#2E7D32",
  strokeStyle: "solid",
  endCap: "triangle",
  label: "enables"
});

// Weakness amplifies Threat
createConnector({
  startItemId: weakness_3_id,
  endItemId: threat_1_id,
  strokeWidth: 2, strokeColor: "#B71C1C",
  strokeStyle: "solid",
  endCap: "triangle",
  label: "amplifies"
});

// Cross-section insight (dotted gold line)
createConnector({
  startItemId: strength_2_id,
  endItemId: threat_2_id,
  strokeWidth: 1, strokeColor: "#F9A825",
  strokeStyle: "dotted",
  label: "KEY: Our NLP patent (S2) directly counters competitor entry (T2)"
});
```

### 3.4 Populate Implications Zone

Derive 3-5 strategic implications from the analysis:

```
const implications = [
  {
    title: "PRIORITY 1: Lock in enterprise contracts before Competitor X enters mid-market (Q3 2026)",
    rationale: "Our NPS advantage (72 vs. 34 industry avg) gives us a 12-month window to convert at-risk accounts",
    action: "Launch enterprise loyalty program with 2-year contract incentives by April 2026",
    owner: "VP Sales"
  },
  {
    title: "PRIORITY 2: Close the mobile gap — 40% of enterprise evaluations require mobile demo",
    rationale: "We lost 3 enterprise deals in Q1 specifically due to lack of mobile app",
    action: "Ship MVP mobile app (iOS) by end of Q2. Android Q3.",
    owner: "VP Engineering"
  },
  {
    title: "PRIORITY 3: Diversify infrastructure to reduce AWS dependency",
    rationale: "25% API price increase directly impacts margin from 67% to 52%. Single-vendor risk.",
    action: "Evaluate multi-cloud strategy. Target: 30% workload on GCP by Q4.",
    owner: "CTO"
  }
];

implications.forEach((impl, i) => {
  const y = implicationsZoneY + 60 + i * 120;

  // Priority number badge
  createShape({
    type: "circle",
    x: implicationsZoneX + 30, y: y + 10,
    width: 40, height: 40,
    fillColor: "#F9A825"
  });

  createText({
    content: (i + 1).toString(),
    x: implicationsZoneX + 42, y: y + 18,
    fontSize: 18, fontWeight: 700, color: "#1A1A2E", textAlign: "center"
  });

  // Implication title
  createText({
    content: impl.title,
    x: implicationsZoneX + 80, y: y,
    fontSize: 18, fontWeight: 600, color: "#1A1A2E"
  });

  // Rationale
  createText({
    content: impl.rationale,
    x: implicationsZoneX + 80, y: y + 30,
    fontSize: 14, fontWeight: 400, color: "#546E7A"
  });

  // Action
  createText({
    content: "ACTION: " + impl.action + " | OWNER: " + impl.owner,
    x: implicationsZoneX + 80, y: y + 55,
    fontSize: 14, fontWeight: 600, color: "#4A148C"
  });
});
```

---

## Phase 4: Visual Refinement (10-15 minutes)

### 4.1 Apply Color System

Verify all elements follow the chosen palette consistently:

- Section backgrounds use the correct quadrant/block color at 5-8% opacity
- Header text uses the section's primary color
- Strategic items use white backgrounds with colored borders
- Implications zone has its distinctive accent background

### 4.2 Typography Check

Walk through every text element and verify:

- Board title: 32-42px, Bold
- Section headers: 22-28px, Bold, ALL CAPS or Title Case
- Strategic item titles: 16-20px, Semi-Bold
- Evidence text: 13-16px, Regular, lighter color
- Implications: 16-20px, Semi-Bold, prominent color
- Data annotations: 11-14px, Regular

### 4.3 Spacing and Alignment

- All items within a section are aligned to a grid
- Equal spacing between items (20-30px gaps)
- Section headers are consistently positioned relative to section boundaries
- No items overlap or crowd section borders
- The entire board has consistent padding from edges (40-60px)

### 4.4 Connection Line Routing

Review all connector lines:

- Lines should not cross through unrelated elements
- Use curved or orthogonal routing to avoid visual chaos
- Labels on connectors should be readable and not overlap other elements
- Color-code connectors by relationship type (green for "enables," red for "amplifies")

---

## Phase 5: Key Insight Callout (5 minutes)

### 5.1 Identify the Single Most Important Insight

After completing the analysis, step back and identify the one insight that matters most. This is the "if you read nothing else, read this" element.

```
// Key Insight Callout — placed prominently near center or top of implications
createFrame({
  x: boardWidth / 2 - 350, y: implicationsZoneY - 100,
  width: 700, height: 80,
  backgroundColor: "#FFFFFF",
  borderColor: "transparent", borderWidth: 0
});

// Left accent bar
createShape({
  type: "rectangle",
  x: boardWidth / 2 - 350, y: implicationsZoneY - 100,
  width: 6, height: 80,
  fillColor: "#F9A825", borderRadius: 0
});

createText({
  content: "KEY INSIGHT: Our NLP patent advantage (18-month lead) combined with the EU DSA deadline (Q4 2026) creates a one-time market window — we must be the established compliance leader before OpenAI enters in Q3.",
  x: boardWidth / 2 - 330, y: implicationsZoneY - 88,
  fontSize: 16, fontWeight: 600, fontStyle: "italic", color: "#1A1A2E",
  width: 660
});
```

---

## Phase 6: Review & Validation (10-15 minutes)

### 6.1 Strategic Quality Checklist

- [ ] Every item passes the Specificity Test (no generic filler)
- [ ] Every item passes the Evidence Test (data-backed or labeled as hypothesis)
- [ ] Every item passes the So What Test (strategic implication stated or implied)
- [ ] Cross-section connections are drawn where relevant
- [ ] Implications/actions zone is populated with 3-5 priorities
- [ ] Key Insight callout is present and compelling
- [ ] The board answers the strategic question defined in Phase 1

### 6.2 Visual Quality Checklist

- [ ] Framework structure is instantly recognizable (SWOT quadrants, BMC blocks, OKR tree)
- [ ] Color valence is consistent (green/blue = positive, red/orange = negative)
- [ ] Typography hierarchy creates clear visual levels
- [ ] All items are legible at medium zoom (entire framework readable)
- [ ] Connector lines are clean and well-routed
- [ ] Board header identifies the framework, company, and date
- [ ] The board can be understood without a presenter explaining it

### 6.3 Stakeholder Perspective Check

View the board from three perspectives:

**CEO / Board (30 seconds)**: Can I identify the strategic position and top 3 priorities within 30 seconds? If not, the visual hierarchy needs work.

**Strategy Team (5 minutes)**: Are all critical factors captured? What connections and gaps emerge? If the analysis feels shallow, the content needs more evidence and depth.

**Team Leaders (2 minutes)**: Can I see how my team's work connects to the strategy? If not, the cascading logic (OKR) or implications (SWOT/BMC) need clearer team-level mapping.

### 6.4 Common Mistakes to Catch

| Mistake                | Detection                                  | Fix                                                                   |
| ---------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| Generic content        | "Strong brand" or "growing market" appears | Replace with specific, measured fact                                  |
| Missing connections    | SWOT quadrants are isolated silos          | Add at least 3 cross-quadrant connectors                              |
| No implications        | Analysis exists but no "So What?"          | Add implications zone with 3-5 actions                                |
| Unbalanced sections    | One quadrant has 8 items, another has 1    | Investigate the sparse section, add items or explain why it is sparse |
| All items equal weight | No priority hierarchy visible              | Add priority borders, size variation, or scoring                      |
| Data-free board        | No numbers, percentages, or metrics        | Add at least one data point per strategic item                        |
| Wrong framework        | The question does not match the framework  | Reassess framework choice, possibly use a different pattern           |
| Stale content          | Dates reference Q4 2024 or earlier         | Update evidence to current data                                       |

---

## Phase-by-Phase Time Budget

| Phase                  | Duration       | Key Output                                                              |
| ---------------------- | -------------- | ----------------------------------------------------------------------- |
| 1. Strategic Brief     | 10-15 min      | Clear question, framework selected, evidence gathered                   |
| 2. Board Skeleton      | 15-20 min      | Framework structure built, sections labeled, header and footer in place |
| 3. Content Population  | 25-40 min      | All sections populated with specific, evidence-backed items             |
| 4. Visual Refinement   | 10-15 min      | Colors, typography, spacing, and connections polished                   |
| 5. Key Insight         | 5 min          | Single most important insight highlighted                               |
| 6. Review & Validation | 10-15 min      | Quality checks passed, stakeholder perspectives validated               |
| **Total**              | **75-110 min** | **Complete, validated strategy board**                                  |

---

## API Element Reference for Strategy Boards

| Element              | Miro API Call                                | Primary Use                              |
| -------------------- | -------------------------------------------- | ---------------------------------------- |
| Framework sections   | `createFrame`                                | Quadrants, BMC blocks, OKR levels        |
| Section backgrounds  | `createShape` (rectangle)                    | Color-tinted backgrounds at 5-8% opacity |
| Divider lines        | `createShape` (line)                         | Quadrant dividers, axis lines            |
| Section headers      | `createText`                                 | "STRENGTHS", "KEY PARTNERS", etc.        |
| Strategic items      | `createStickyNote`                           | Individual strategic factors             |
| Evidence annotations | `createText`                                 | Data points below item titles            |
| Cross-section links  | `createConnector`                            | "enables," "amplifies" relationships     |
| Board title          | `createText`                                 | Framework name, company, date            |
| Implications         | `createText` + `createShape`                 | Priority actions with numbered badges    |
| Key Insight callout  | `createFrame` + `createShape` + `createText` | Gold-accented highlight box              |
| Axis labels          | `createText`                                 | "INTERNAL/EXTERNAL," "HIGH/LOW"          |
| Competitor markers   | `createShape` (circle/star)                  | Positioning map dots                     |
| OKR connectors       | `createConnector`                            | Parent-child objective-to-KR links       |
| Scoring indicators   | `createShape` (circle)                       | Priority dots, confidence markers        |
| Timeline markers     | `createShape` (line) + `createText`          | Quarterly/monthly milestones             |

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: The Pretty But Empty Board

**Symptom**: Beautiful design, but every item says something like "Leverage our strengths" or "Capitalize on market growth."

**Fix**: Before adding any item, write the specific fact first. "NPS 72 vs. industry average 34" is a fact. "Strong customer satisfaction" is an opinion.

### Pitfall 2: The Everything Board

**Symptom**: 50+ items crammed into a SWOT, 12 items per BMC block, 8 objectives with 6 key results each.

**Fix**: Apply the priority hierarchy. Each section should have 4-8 items maximum. If you have more, you have not prioritized — everything cannot be equally strategic.

### Pitfall 3: The Isolated Analysis

**Symptom**: Each section of the framework is meticulously filled in, but there are zero connections between sections.

**Fix**: After populating all sections, spend 10 minutes drawing cross-section connections. A SWOT without connections between Strengths and Opportunities is only half-analyzed.

### Pitfall 4: The Historical Board

**Symptom**: All data references Q3 2024 or earlier. Market data is from pre-pandemic reports. Competitor information is outdated.

**Fix**: Include a "Last Updated" timestamp in the header. Refresh evidence quarterly at minimum. Flag stale items with a visual warning.

### Pitfall 5: The Leaderless Board

**Symptom**: Implications exist but no one owns them. Actions are listed but not assigned.

**Fix**: Every implication should have an OWNER and a DEADLINE. Strategy without accountability is aspiration without execution.
