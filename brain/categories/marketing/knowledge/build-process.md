# Marketing — Build Process

## Overview

Building a marketing board follows a structured workflow that moves from strategic context through channel planning to metric accountability. The process balances creative marketing thinking with analytical rigor — the board should feel like it was built by a marketer who thinks like a strategist and measures like a data scientist.

---

## Phase 1: Marketing Brief & Board Type Selection (10 minutes)

### 1.1 Define the Marketing Objective

Before building, answer: "What business outcome does this marketing effort serve?"

**Strong marketing objectives**:

- "Generate 500 MQLs for the sales team at <$90 CPL within 8 weeks"
- "Drive 5,000 app downloads in the first 30 days post-launch with 60+ NPS"
- "Increase organic blog traffic from 45,000 to 75,000 monthly sessions by end of Q2"
- "Fill 1,200 seats for our annual conference with 40% new attendees"

**Weak marketing objectives**:

- "Increase brand awareness" (not measurable without defining the metric)
- "Engage our audience" (engagement is a means, not an end)
- "Do more content marketing" (activity is not an objective)

### 1.2 Select the Board Type

| Marketing Situation                          | Board Type              | Layout Pattern |
| -------------------------------------------- | ----------------------- | -------------- |
| Multi-channel campaign with defined timeline | Campaign Planning Board | Pattern 1      |
| Ongoing content production scheduling        | Content Calendar        | Pattern 2      |
| Understanding where prospects drop off       | Funnel Board            | Pattern 3      |
| Product or feature launch coordination       | GTM Launch Board        | Pattern 4      |
| Brand identity documentation                 | Brand Guidelines        | Pattern 5      |

### 1.3 Gather Marketing Inputs

Before building, collect:

- **Audience data**: Persona definitions, customer research, survey data, CRM segmentation
- **Channel performance**: Historical metrics per channel (email open rates, social engagement, SEO rankings)
- **Competitive context**: What competitors are doing in marketing (messaging, channels, campaigns)
- **Budget**: Total marketing budget, allocation constraints, approval process
- **Content assets**: Existing content inventory, brand guidelines, creative resources
- **Sales input**: What does the sales team need from marketing? What objections do they hear?

---

## Phase 2: Board Skeleton & Structure (15-20 minutes)

### 2.1 Create the Board Canvas

```
const boardDimensions = {
  campaign: { width: 9000, height: 6000 },
  calendar: { width: 10000, height: 7000 },
  funnel: { width: 6000, height: 8000 },
  gtm: { width: 12000, height: 6000 },
  brand: { width: 9000, height: 7000 }
};
```

### 2.2 Build the Header Zone

```
// Campaign board header
createFrame({
  x: padding, y: 20,
  width: boardWidth - 2 * padding, height: 180,
  backgroundColor: "transparent", borderWidth: 0
});

// Campaign name
createText({
  content: "SPRING COMPLIANCE BLITZ",
  x: padding + 30, y: 30,
  fontSize: 40, fontWeight: 700, color: "#B71C1C"
});

// Campaign objective
createText({
  content: "Generate 500 MQLs from mid-market SaaS | Budget: $45K | March 15 — May 10, 2026",
  x: padding + 30, y: 85,
  fontSize: 18, fontWeight: 400, color: "#546E7A"
});

// Primary KPI (large, accent color)
createText({
  content: "TARGET: 500 MQLs at <$90 CPL",
  x: boardWidth - padding - 450, y: 40,
  fontSize: 24, fontWeight: 700, color: "#F9A825"
});
```

### 2.3 Build Channel Columns (Campaign Board)

```
const channels = [
  { name: "EMAIL", icon: "📧", color: "#E65100", budget: "$8K" },
  { name: "SOCIAL", icon: "📱", color: "#1976D2", budget: "$12K" },
  { name: "CONTENT", icon: "📝", color: "#388E3C", budget: "$10K" },
  { name: "PAID ADS", icon: "💰", color: "#FFA000", budget: "$15K" }
];

const channelZoneX = audienceColumnWidth + padding;
const channelZoneWidth = boardWidth - audienceColumnWidth - 2 * padding;
const channelColumnWidth = channelZoneWidth / channels.length;

channels.forEach((ch, i) => {
  const x = channelZoneX + i * channelColumnWidth;

  // Channel column frame
  createFrame({
    x: x, y: headerHeight + 20,
    width: channelColumnWidth - 15, height: mainZoneHeight,
    title: ch.icon + " " + ch.name + " — " + ch.budget,
    titleFontSize: 16, titleFontWeight: 700,
    backgroundColor: ch.color + "08", // 5% opacity tint
    borderColor: ch.color, borderWidth: 2
  });
});
```

### 2.4 Build the Calendar Grid (Content Calendar)

```
const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const weeksInMonth = 5;
const cellWidth = (boardWidth - 2 * padding) / 7;
const cellHeight = (boardHeight - headerHeight - footerHeight) / weeksInMonth;

// Day headers
daysOfWeek.forEach((day, i) => {
  createText({
    content: day,
    x: padding + i * cellWidth + cellWidth / 2 - 20, y: headerHeight + 10,
    fontSize: 16, fontWeight: 700, color: "#1A1A2E", textAlign: "center"
  });
});

// Grid cells
for (let week = 0; week < weeksInMonth; week++) {
  for (let day = 0; day < 7; day++) {
    const x = padding + day * cellWidth;
    const y = headerHeight + 40 + week * cellHeight;

    createShape({
      type: "rectangle",
      x: x, y: y,
      width: cellWidth - 4, height: cellHeight - 4,
      fillColor: (day >= 5) ? "#F5F5F5" : "#FFFFFF",
      strokeColor: "#E0E0E0", strokeWidth: 1,
      borderRadius: 4
    });

    // Date number
    const dateNum = week * 7 + day + 1;
    if (dateNum <= 31) {
      createText({
        content: dateNum.toString(),
        x: x + 10, y: y + 8,
        fontSize: 12, fontWeight: 500, color: "#90A4AE"
      });
    }
  }
}
```

### 2.5 Build the Funnel Shape

```
const stages = [
  { name: "AWARENESS", width: 0.95, color: "#64B5F6", metric: "125,000/mo" },
  { name: "INTEREST", width: 0.75, color: "#42A5F5", metric: "5,250/mo" },
  { name: "CONSIDERATION", width: 0.55, color: "#1E88E5", metric: "945/mo" },
  { name: "DECISION", width: 0.35, color: "#1565C0", metric: "302/mo" },
  { name: "PURCHASE", width: 0.20, color: "#0D47A1", metric: "76/mo" }
];

const maxFunnelWidth = boardWidth * 0.7;
const stageHeight = 350;
const stageGap = 100;
const funnelStartX = (boardWidth - maxFunnelWidth) / 2;

stages.forEach((stage, i) => {
  const stageWidth = maxFunnelWidth * stage.width;
  const x = (boardWidth - stageWidth) / 2;
  const y = headerHeight + 80 + i * (stageHeight + stageGap);

  // Stage shape (rounded rectangle)
  createShape({
    type: "rectangle",
    x: x, y: y,
    width: stageWidth, height: stageHeight,
    fillColor: stage.color, borderRadius: 16,
    strokeWidth: 0
  });

  // Stage name
  createText({
    content: stage.name,
    x: x + 30, y: y + 20,
    fontSize: 24, fontWeight: 700, color: "#FFFFFF"
  });

  // Stage metric
  createText({
    content: stage.metric,
    x: x + stageWidth - 180, y: y + 20,
    fontSize: 28, fontWeight: 700, color: "#FFFFFF"
  });

  // Conversion arrow between stages
  if (i < stages.length - 1) {
    const convRate = ((stages[i+1].metric.replace(/[^0-9]/g,'') / stages[i].metric.replace(/[^0-9]/g,'')) * 100).toFixed(1);

    createText({
      content: "↓ " + convRate + "% conversion",
      x: boardWidth / 2 - 80, y: y + stageHeight + 30,
      fontSize: 16, fontWeight: 600, color: "#1565C0"
    });
  }
});
```

### 2.6 Build the Audience Section

```
// Persona card
function createPersonaCard(persona, x, y) {
  createFrame({
    x: x, y: y,
    width: 300, height: 400,
    title: persona.name,
    titleFontSize: 16, titleFontWeight: 700,
    backgroundColor: "#FFFFFF",
    borderColor: "#1565C0", borderWidth: 2, borderRadius: 8
  });

  // Persona avatar placeholder
  createShape({
    type: "circle",
    x: x + 120, y: y + 50,
    width: 60, height: 60,
    fillColor: "#E3F2FD"
  });

  // Persona details
  const details = [
    "Role: " + persona.role,
    "Company: " + persona.companyType,
    "Pain: " + persona.painPoint,
    "Channels: " + persona.channels,
    "Budget authority: " + persona.budget
  ];

  details.forEach((detail, i) => {
    createText({
      content: detail,
      x: x + 15, y: y + 130 + i * 45,
      fontSize: 13, fontWeight: 400, color: "#37474F",
      width: 270
    });
  });
}
```

---

## Phase 3: Content Population (20-30 minutes)

### 3.1 Populate Campaign Activities

For each channel column, add specific campaign activity cards:

```
function createCampaignCard(channel, activity, x, y) {
  const cardWidth = 220;
  const cardHeight = 160;

  // Card with channel-colored left border
  createShape({
    type: "rectangle",
    x: x, y: y,
    width: cardWidth, height: cardHeight,
    fillColor: "#FFFFFF",
    strokeColor: "#E0E0E0", strokeWidth: 1,
    borderRadius: 6
  });

  // Channel color left border
  createShape({
    type: "rectangle",
    x: x, y: y,
    width: 4, height: cardHeight,
    fillColor: channel.color, borderRadius: 0
  });

  // Activity title
  createText({
    content: activity.title,
    x: x + 15, y: y + 12,
    fontSize: 15, fontWeight: 600, color: "#1A1A2E",
    width: cardWidth - 25
  });

  // Activity details
  createText({
    content: activity.description,
    x: x + 15, y: y + 50,
    fontSize: 12, fontWeight: 400, color: "#546E7A",
    width: cardWidth - 25
  });

  // Date
  createText({
    content: activity.date,
    x: x + 15, y: y + cardHeight - 40,
    fontSize: 11, fontWeight: 500, color: "#90A4AE"
  });

  // Status badge
  const statusColors = {
    "LIVE": "#2E7D32", "IN REVIEW": "#F57F17",
    "PLANNED": "#78909C", "DRAFT": "#B0BEC5"
  };

  createShape({
    type: "rectangle",
    x: x + cardWidth - 70, y: y + cardHeight - 35,
    width: 55, height: 22,
    fillColor: statusColors[activity.status],
    borderRadius: 11
  });

  createText({
    content: activity.status,
    x: x + cardWidth - 65, y: y + cardHeight - 32,
    fontSize: 9, fontWeight: 700, color: "#FFFFFF"
  });
}
```

### 3.2 Populate Content Calendar Cards

```
function createContentCard(content, x, y) {
  const typeColors = {
    "blog": "#1565C0", "social": "#00897B",
    "email": "#E65100", "video": "#7B1FA2",
    "webinar": "#2E7D32", "case-study": "#455A64"
  };

  createStickyNote({
    x: x, y: y,
    width: 150, height: 100,
    content: content.title,
    backgroundColor: typeColors[content.type] + "15" // 8% opacity tint
  });

  // Content type indicator (colored dot)
  createShape({
    type: "circle",
    x: x + 5, y: y + 5,
    width: 10, height: 10,
    fillColor: typeColors[content.type]
  });

  // Funnel stage badge
  createText({
    content: content.funnelStage,
    x: x + 5, y: y + 80,
    fontSize: 9, fontWeight: 700, color: typeColors[content.type]
  });
}
```

### 3.3 Populate Funnel Stage Details

For each funnel stage, add activity cards and optimization tactics in side panels:

```
function createFunnelSidePanel(stage, tactics, x, y) {
  // Left panel: Activities that drive this stage
  createFrame({
    x: x - 350, y: y,
    width: 320, height: stageHeight,
    title: "ACTIVITIES",
    titleFontSize: 12, titleFontWeight: 700,
    backgroundColor: "#F5F7FA", borderColor: "#E0E0E0", borderWidth: 1
  });

  tactics.activities.forEach((act, i) => {
    createText({
      content: "• " + act,
      x: x - 340, y: y + 35 + i * 40,
      fontSize: 13, fontWeight: 400, color: "#37474F",
      width: 300
    });
  });

  // Right panel: Optimization opportunities
  createFrame({
    x: x + stageWidth + 30, y: y,
    width: 320, height: stageHeight,
    title: "OPTIMIZE",
    titleFontSize: 12, titleFontWeight: 700,
    backgroundColor: "#FFF8E1", borderColor: "#F9A825", borderWidth: 1
  });

  tactics.optimizations.forEach((opt, i) => {
    createText({
      content: "→ " + opt,
      x: x + stageWidth + 40, y: y + 35 + i * 40,
      fontSize: 13, fontWeight: 400, color: "#37474F",
      width: 300
    });
  });
}
```

---

## Phase 4: Metrics & Budget Layer (10-15 minutes)

### 4.1 Add Metric Widgets

```
function createMetricWidget(metric, x, y) {
  const widgetWidth = 200;
  const widgetHeight = 100;

  createShape({
    type: "rectangle",
    x: x, y: y,
    width: widgetWidth, height: widgetHeight,
    fillColor: "#FFFFFF",
    strokeColor: "#E0E0E0", strokeWidth: 1,
    borderRadius: 8
  });

  // Metric value (large)
  createText({
    content: metric.value,
    x: x + 15, y: y + 10,
    fontSize: 32, fontWeight: 700, color: "#0D47A1"
  });

  // Metric label
  createText({
    content: metric.label,
    x: x + 15, y: y + 50,
    fontSize: 12, fontWeight: 400, color: "#607D8B"
  });

  // Trend indicator
  const trendColor = metric.trend === "up" ? "#00C853" : metric.trend === "down" ? "#FF1744" : "#FFB300";
  const trendSymbol = metric.trend === "up" ? "▲" : metric.trend === "down" ? "▼" : "►";

  createText({
    content: trendSymbol + " " + metric.change,
    x: x + widgetWidth - 80, y: y + 15,
    fontSize: 14, fontWeight: 600, color: trendColor
  });

  // Benchmark
  createText({
    content: "vs. " + metric.benchmark,
    x: x + 15, y: y + 72,
    fontSize: 11, fontWeight: 400, color: "#90A4AE"
  });
}
```

### 4.2 Add Budget Visualization

```
// Horizontal stacked bar showing budget allocation
function createBudgetBar(channels, x, y, totalWidth) {
  let currentX = x;
  const barHeight = 40;
  const totalBudget = channels.reduce((sum, ch) => sum + ch.budget, 0);

  // Total budget label
  createText({
    content: "TOTAL BUDGET: $" + (totalBudget / 1000) + "K",
    x: x, y: y - 25,
    fontSize: 14, fontWeight: 700, color: "#1A1A2E"
  });

  channels.forEach(ch => {
    const segmentWidth = (ch.budget / totalBudget) * totalWidth;

    createShape({
      type: "rectangle",
      x: currentX, y: y,
      width: segmentWidth, height: barHeight,
      fillColor: ch.color, borderRadius: 0
    });

    createText({
      content: ch.name + " $" + (ch.budget / 1000) + "K",
      x: currentX + 10, y: y + 10,
      fontSize: 11, fontWeight: 600, color: "#FFFFFF"
    });

    currentX += segmentWidth;
  });
}
```

---

## Phase 5: Visual Polish (10 minutes)

### 5.1 Apply Color System

Verify consistency across the board:

- All channel indicators use the defined channel color map
- Campaign card left borders match their channel color
- Status badges use the green/yellow/red system consistently
- Funnel stages follow the light-to-dark progression
- Metric widgets use consistent accent colors for trends

### 5.2 Typography Verification

Walk through every text element:

- Board title: 36-48px, Bold, brand primary color
- Campaign/section headers: 22-28px, Bold
- Card titles: 16-20px, Semi-Bold
- Card descriptions: 13-16px, Regular
- Metric values: 24-36px, Bold
- Metric labels: 12-14px, Regular
- Status labels: 11-13px, Bold, ALL CAPS
- Dates: 12-14px, Medium

### 5.3 Alignment and Spacing

- Cards within columns are aligned to a grid with consistent 20px gaps
- Timeline markers are evenly spaced
- Metric widgets are in a consistent row at the bottom
- Persona cards are stacked with equal spacing
- No elements overlap or crowd section borders

---

## Phase 6: Review & Validation (10 minutes)

### 6.1 Marketing Quality Checklist

- [ ] Every campaign activity specifies audience, channel, content type, date, and expected output
- [ ] All metrics include value, label, benchmark, and trend direction
- [ ] Funnel stages are defined with clear criteria for each stage
- [ ] Budget allocation is visible and connects to specific activities
- [ ] Target personas are specific (role, company size, pain point, channels)
- [ ] Content pieces are tagged with funnel stage (TOFU/MOFU/BOFU)
- [ ] Timeline includes today-marker showing where we are in the campaign
- [ ] Cross-channel connections are drawn where activities reinforce each other

### 6.2 Visual Quality Checklist

- [ ] Channel colors are consistent across all board sections
- [ ] Status indicators use both color and text labels
- [ ] Typography hierarchy creates clear visual levels
- [ ] Cards are consistently styled within each section
- [ ] The board can be understood without a presenter explaining it
- [ ] All metrics are legible at medium zoom
- [ ] The board header clearly identifies the campaign, objective, and timeframe

### 6.3 Stakeholder Perspective Check

**CMO (30 seconds)**: Can I identify the campaign priority, target metric, and budget at a glance?

**Marketing Manager (2 minutes)**: Can I see all activities across channels, their status, and my team's deadlines?

**CEO (1 minute)**: Can I see how marketing connects to business revenue through the funnel metrics?

**Sales Team (30 seconds)**: Can I see what campaigns are generating leads and when they are launching?

---

## Phase-by-Phase Time Budget

| Phase                  | Duration      | Key Output                                                |
| ---------------------- | ------------- | --------------------------------------------------------- |
| 1. Marketing Brief     | 10 min        | Objective defined, board type selected, inputs gathered   |
| 2. Board Skeleton      | 15-20 min     | Structure built, sections labeled, header in place        |
| 3. Content Population  | 20-30 min     | All channels/stages populated with specific activities    |
| 4. Metrics & Budget    | 10-15 min     | KPI widgets, budget visualization, performance data       |
| 5. Visual Polish       | 10 min        | Colors, typography, spacing verified                      |
| 6. Review & Validation | 10 min        | Quality checks passed, stakeholder perspectives validated |
| **Total**              | **75-95 min** | **Complete, validated marketing board**                   |

---

## API Element Reference for Marketing Boards

| Element           | Miro API Call                                      | Primary Use                    |
| ----------------- | -------------------------------------------------- | ------------------------------ |
| Campaign cards    | `createStickyNote` or `createShape` + `createText` | Individual campaign activities |
| Channel columns   | `createFrame`                                      | Channel-organized sections     |
| Calendar grid     | `createShape` (rectangle)                          | Calendar cells                 |
| Content cards     | `createStickyNote`                                 | Content calendar entries       |
| Funnel stages     | `createShape` (rectangle)                          | Funnel stage shapes            |
| Metric widgets    | `createShape` + `createText`                       | KPI displays                   |
| Status badges     | `createShape` (rounded rect) + `createText`        | Status indicators              |
| Budget bar        | `createShape` (stacked rectangles)                 | Budget visualization           |
| Persona cards     | `createFrame` + `createShape` + `createText`       | Target audience profiles       |
| Timeline          | `createShape` (line) + `createText`                | Campaign timeline              |
| Channel icons     | `createText` (emoji) or `createShape`              | Channel identification         |
| Conversion arrows | `createConnector` or `createText`                  | Funnel conversion rates        |
| Today marker      | `createShape` (line)                               | Current date indicator         |
| Phase dividers    | `createShape` (dashed line)                        | GTM phase boundaries           |

---

## Common Pitfalls

### Pitfall 1: The Activity List

**Symptom**: The board is a list of marketing activities with no strategic framing. Fifty cards saying "write blog post," "send email," "post on LinkedIn."

**Fix**: Every activity must connect to an audience (who), a funnel stage (why), and a metric (how we measure). An activity without these connections is a task, not marketing.

### Pitfall 2: The Vanity Metric Board

**Symptom**: Metrics show followers, impressions, and page views — but not MQLs, pipeline, or revenue.

**Fix**: Include vanity metrics if helpful, but always connect them to business metrics. "45,000 page views → 1,890 leads (4.2% conversion) → 340 MQLs (18% qualification) → $680K pipeline."

### Pitfall 3: The Single-Channel Silo

**Symptom**: The board shows one channel in detail but ignores how channels work together.

**Fix**: Even if the board focuses on one channel, include a cross-channel integration section showing how this channel feeds and is fed by other channels.

### Pitfall 4: The Budget-Free Board

**Symptom**: Beautiful campaign plans with no budget information.

**Fix**: Every campaign and channel should show its budget allocation. Marketing without budget context is aspiration without accountability.

### Pitfall 5: The Undated Board

**Symptom**: Activities and campaigns with no dates, creating a timeless void.

**Fix**: Every card needs a date. Every campaign needs a timeline. The board should show what is past, present, and future at a glance.
