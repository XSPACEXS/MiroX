# Visual Guide — Marketing Enablement Board

## Premium Palette System

### The Operations Palette

Marketing Enablement Boards use a deliberately restrained palette. Color is a tool for status communication, not decoration. The palette is designed to maximize information clarity and minimize visual noise.

| Role                 | Color Name    | Hex     | Usage                                  |
| -------------------- | ------------- | ------- | -------------------------------------- |
| Primary Background   | Charcoal      | #2D3436 | Dashboard header, primary banners      |
| Secondary Background | White         | #FFFFFF | Frame backgrounds, content areas       |
| Tertiary Background  | Light Gray    | #F5F5F5 | Backlog areas, inactive sections       |
| Border / Divider     | Pale Gray     | #DFE6E9 | Frame borders, table lines             |
| Status: Complete     | Emerald       | #00B894 | Completed tasks, met targets, approved |
| Status: Active       | Amber         | #FDCB6E | In progress, under review, at risk     |
| Status: Blocked      | Coral Red     | #E74C3C | Blocked, behind, rejected              |
| Status: Planned      | Ocean Blue    | #0984E3 | Planned, queued, upcoming              |
| Status: On Hold      | Medium Gray   | #B2BEC3 | Paused, deprioritized                  |
| Status: External     | Violet        | #6C5CE7 | Waiting on external party              |
| Accent               | Bright Coral  | #E17055 | Headlines, key metrics, CTAs           |
| Secondary Accent     | Teal          | #00B894 | Positive trends, good news             |
| Text Primary         | Dark Charcoal | #2D3436 | Headlines, labels                      |
| Text Secondary       | Medium Gray   | #636E72 | Descriptions, metadata                 |
| Text on Dark         | White         | #FFFFFF | Text on charcoal backgrounds           |

### Channel Color System

When tracking activities by marketing channel, use a consistent color per channel:

| Channel        | Color        | Hex     | Badge Style            |
| -------------- | ------------ | ------- | ---------------------- |
| Blog / Content | Sky Blue     | #74B9FF | Blue rectangle badge   |
| Email          | Purple       | #A29BFE | Purple rectangle badge |
| Social Media   | Hot Pink     | #FD79A8 | Pink rectangle badge   |
| Paid Ads       | Forest Green | #00B894 | Green rectangle badge  |
| Events         | Warm Orange  | #E17055 | Orange rectangle badge |
| PR / Media     | Slate Blue   | #636E72 | Gray rectangle badge   |
| Video          | Red          | #E74C3C | Red rectangle badge    |
| SEO            | Teal         | #00CEC9 | Teal rectangle badge   |

---

## Typography System

### Font Hierarchy for Dense Information

Marketing enablement boards have MORE text than showcase boards. The typography must support high-density reading without fatigue.

| Level           | Usage                      | Size    | Weight   | Color                     |
| --------------- | -------------------------- | ------- | -------- | ------------------------- |
| Dashboard Title | Board name, main header    | 36-42pt | Bold     | White on charcoal         |
| Section Header  | Frame/section titles       | 24-28pt | Bold     | Charcoal or accent        |
| Sub-Header      | Subsection labels          | 18-22pt | Semibold | Charcoal                  |
| Column Label    | Table/kanban column titles | 14-16pt | Bold     | Charcoal or gray          |
| Body Text       | Descriptions, details      | 12-14pt | Regular  | Charcoal                  |
| Metric Value    | Key numbers                | 28-36pt | Bold     | Status color (contextual) |
| Metric Label    | What the number means      | 11-12pt | Regular  | Gray (#636E72)            |
| Caption / Meta  | Dates, owners, tags        | 10-11pt | Regular  | Light gray (#95A5A6)      |

### Metric Display Format

Every metric on the board follows a standard visual format:

```
+---------------------------+
|        $3.2M              |  <-- Value: 32pt, bold, status color
|         MRR               |  <-- Label: 12pt, gray
|      +22% QoQ             |  <-- Trend: 14pt, green/red, with arrow
|  Target: $3.5M            |  <-- Context: 11pt, light gray
|  [====GREEN======]        |  <-- Progress bar: visual fill
+---------------------------+
```

- **Value**: Largest text, centered, color reflects status (green if on target, red if behind)
- **Label**: Directly below value, centered, gray
- **Trend**: With direction arrow (triangle up/down), green for positive, red for negative
- **Target**: Small text showing the benchmark or goal
- **Progress bar**: Optional horizontal bar showing % of target achieved

---

## Status Indicator System

### Traffic Light Dots

Small circles (15-20px diameter) placed in the top-right corner of frames, sticky notes, or cards to show status.

| Status           | Color  | Hex     | Shape Note                  |
| ---------------- | ------ | ------- | --------------------------- |
| On Track         | Green  | #27AE60 | Solid circle                |
| At Risk          | Yellow | #F1C40F | Solid circle                |
| Behind / Blocked | Red    | #E74C3C | Solid circle                |
| Not Started      | Gray   | #95A5A6 | Hollow circle (border only) |
| Complete         | Green  | #27AE60 | Checkmark inside circle     |

### Status Badges

Rectangular badges (80 x 24px) placed on cards to indicate workflow status:

| Badge Text | Background | Text Color |
| ---------- | ---------- | ---------- |
| DRAFT      | #F5F5F5    | #636E72    |
| IN REVIEW  | #FFF3E0    | #E65100    |
| APPROVED   | #E8F5E9    | #2E7D32    |
| LIVE       | #27AE60    | #FFFFFF    |
| PAUSED     | #ECEFF1    | #455A64    |
| DEPRECATED | #FFEBEE    | #C62828    |

### Funnel Stage Colors

For traction funnel visualizations, use a warm-to-cool gradient across stages:

| Stage         | Color       | Hex     |
| ------------- | ----------- | ------- |
| Awareness     | Light Blue  | #BBDEFB |
| Interest      | Blue        | #64B5F6 |
| Consideration | Indigo      | #5C6BC0 |
| Intent        | Purple      | #7E57C2 |
| Evaluation    | Deep Purple | #512DA8 |
| Purchase      | Emerald     | #00B894 |

---

## Frame & Card Design

### Standard Frame

```
+----------------------------------+
| SECTION TITLE              [DOT] |  <-- Header: 20pt bold, status dot
+----------------------------------+
|                                  |
|  Content area                    |
|  White background                |
|  12-14pt text                    |
|                                  |
+----------------------------------+
| Owner: Sarah K. | Updated: Mar 6 |  <-- Footer: 10pt, gray
+----------------------------------+
```

- **Border**: 1-2px, #DFE6E9
- **Border radius**: 4-8px
- **Header height**: 40-50px
- **Content padding**: 20px all sides
- **Footer height**: 30px (optional)

### Campaign Card

```
+----------------------------------+
| [CHANNEL BADGE] Q2 Product Launch |
| Status: [LIVE] [GREEN DOT]       |
+----------------------------------+
| Audience: Enterprise, 5K+ emps   |
| Budget: $48,000 ($32K spent)     |
| Start: Mar 1  |  End: Apr 30     |
| Owner: Marcus R.                  |
+----------------------------------+
| Results:                          |
| Leads: 342 (target: 400)         |
| MQLs: 89 (target: 120)          |
| Pipeline: $280K (target: $350K)  |
+----------------------------------+
```

- **Size**: 400 x 350px
- **Header**: Channel-colored top strip (4px tall)
- **Status**: Badge + dot in top-right
- **Sections**: Strategy info, Budget, Results — separated by thin gray lines

### Mockup Card

```
+----------------------------------+
| LP: Product Tour  v3  [APPROVED] |
+----------------------------------+
| +------------------------------+ |
| |                              | |
| |    [Page mockup area]        | |
| |    Desktop: 1200 x 750px    | |
| |                              | |
| +------------------------------+ |
+----------------------------------+
| A/B: Headline test — +12%       |
| Conv: 4.2%  |  Traffic: 12K/mo  |
+----------------------------------+
```

- **Size**: 500 x 600px (taller for visual mockup)
- **Mockup area**: 460 x 350px centered within card
- **Version badge**: "v3" in small rounded badge
- **Status badge**: Top-right corner

---

## Data Visualization in Miro

### Simple Bar Chart (Using Shapes)

Since Miro does not have native chart tools, approximate bar charts using rectangles:

```
Leads by Channel
|
|  ████████████████  Organic (42%)
|  ██████████       Paid (28%)
|  ██████           Email (17%)
|  ████             Social (10%)
|  █                Other (3%)
```

- Each bar: Colored rectangle, height proportional to value
- Label: To the right of each bar
- Y-axis label: At the left
- All bars start at the same left edge (left-aligned)

### Conversion Funnel (Using Shapes)

```
+====================================+
|          AWARENESS: 142K           |   <-- Full width, light blue
+================================+
|       CONSIDERATION: 8.2K      |      <-- 60% width, medium blue
+========================+
|     ACTIVATION: 4.2K    |            <-- 40% width, indigo
+==================+
|   CONVERSION: 890  |                 <-- 25% width, dark blue
+============+
| RETENTION: 720|                      <-- 18% width, emerald
+========+
```

Each stage: Rectangle with width proportional to the number, centered horizontally or left-aligned. Stage label and number centered within the rectangle.

### Progress Bars

Horizontal bars showing completion or progress:

```
[████████████░░░░░░░]  67%  Budget spent
```

- Filled portion: Status-appropriate color (green if on track, red if overspent)
- Empty portion: Light gray (#ECEFF1)
- Percentage label: Right of bar or overlaid on bar
- Context label: Below or right of bar

---

## Grid Alignment System

### The 40px Rule

All elements on a Marketing Enablement Board should snap to a 40px grid:

- Frame spacing: 40px gutters between all frames
- Internal padding: 20px (half-grid) within frames
- Element spacing: 20-40px between elements within a frame
- Text indentation: 20px from frame edge

### Visual Alignment Verification

Before finalizing, check these alignment points:

- All frame tops in the same row share the same Y coordinate
- All frame lefts in the same column share the same X coordinate
- All frames in the same row have the same height
- Sticky notes within kanban columns have consistent widths
- Metric displays in the dashboard header have consistent sizing

---

## Color Accessibility for Enablement Boards

### High Contrast Mode

For boards projected in meeting rooms or viewed on older monitors:

- Increase border weight from 1px to 2px
- Increase font size minimum from 10pt to 12pt
- Replace light gray backgrounds with white
- Add text labels to ALL status indicators (not just colored dots)

### Print-Ready Mode

For boards that will be printed:

- Switch to Light World palette
- Ensure all text is a minimum of 10pt
- Replace colored backgrounds with white + colored borders
- Convert status dots to labeled badges
- Remove transparent/low-opacity elements (they print poorly)

---

## Quality Checklist

Before considering a Marketing Enablement Board visually complete:

- [ ] Dashboard header shows 4-6 key metrics with status indicators
- [ ] All frames are grid-aligned with consistent gutters
- [ ] Status colors are used consistently across the entire board
- [ ] Every metric has: value, label, trend, and target
- [ ] Kanban columns have visible WIP limits
- [ ] Mockups have version numbers and status badges
- [ ] Channel color coding is consistent
- [ ] No decorative elements distract from information
- [ ] Text is readable at normal zoom levels (no text smaller than 10pt)
- [ ] Owner and last-updated information is visible on every section
- [ ] The board reads as "organized and dense" not "chaotic and cluttered"
