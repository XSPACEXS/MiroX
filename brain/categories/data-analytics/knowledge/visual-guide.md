# Data & Analytics Board Visual Guide

## Introduction

Analytics boards occupy the intersection of information design and data visualization. They must represent numerical precision while remaining accessible to non-technical audiences. This guide covers the complete visual language: palettes optimized for data clarity, typography for metric display, chart construction techniques on Miro's canvas, and the specific visual vocabulary of KPIs, RAG indicators, trend lines, and cohort grids.

---

## Color Palettes

### Palette 1: Teal Analytical (Default Analytics Palette)

The flagship palette for analytics boards. Teal conveys precision and intelligence without the coldness of pure blue. The accent blue provides data-dense clarity. Warm accent colors (orange, red) are reserved exclusively for alerts and negative indicators.

| Role           | Color Name   | Hex     | Usage                                          |
| -------------- | ------------ | ------- | ---------------------------------------------- |
| Primary        | Deep Teal    | #006064 | Headers, primary backgrounds, axis labels      |
| Secondary      | Slate Blue   | #455A64 | Supporting text, borders, grid lines           |
| Accent         | Bright Blue  | #1976D2 | Data highlights, links, primary chart color    |
| Positive       | Forest Green | #2E7D32 | On-target KPIs, growth indicators, good trends |
| Warning        | Warm Orange  | #EF6C00 | Near-miss KPIs, cautionary trends              |
| Negative       | Deep Red     | #D32F2F | Off-target KPIs, negative trends, alerts       |
| Background     | Off White    | #FAFBFC | Board background                               |
| Surface        | White        | #FFFFFF | Chart panels, KPI cards                        |
| Text Primary   | Near Black   | #1A1A1A | Headlines, metric values                       |
| Text Secondary | Cool Gray    | #78909C | Labels, annotations, metadata                  |

**Reasoning**: Teal provides sufficient contrast for white text in headers while feeling analytical rather than corporate. The warm orange/red signals stand out against the cool teal/blue spectrum, ensuring alerts demand attention.

### Palette 2: Navy Data (Corporate Analytics)

For analytics boards presented to boards of directors, investors, or clients. Navy adds gravitas while maintaining data clarity.

| Role         | Color Name | Hex     | Usage                        |
| ------------ | ---------- | ------- | ---------------------------- |
| Primary      | Navy       | #1B2A4A | Headers, primary backgrounds |
| Secondary    | Steel Blue | #4A6FA5 | Supporting elements          |
| Data Color 1 | Cerulean   | #0288D1 | Primary data series          |
| Data Color 2 | Amber      | #FFA000 | Secondary data series        |
| Data Color 3 | Teal       | #00897B | Tertiary data series         |
| Positive     | Emerald    | #2E7D32 | Success indicators           |
| Negative     | Crimson    | #C62828 | Failure indicators           |
| Background   | Light Gray | #F5F5F5 | Board background             |
| Surface      | White      | #FFFFFF | Panels                       |
| Text         | Charcoal   | #1A1A2E | Body text                    |

### Palette 3: Light Minimal (Product Analytics)

For modern SaaS product analytics dashboards. Clean, airy, with data as the visual hero.

| Role         | Color Name | Hex     | Usage                    |
| ------------ | ---------- | ------- | ------------------------ |
| Primary      | Indigo     | #3F51B5 | Headers, primary accents |
| Secondary    | Cool Gray  | #607D8B | Supporting elements      |
| Data Color 1 | Blue       | #2196F3 | Primary data series      |
| Data Color 2 | Purple     | #7C4DFF | Secondary data series    |
| Data Color 3 | Teal       | #009688 | Tertiary data series     |
| Positive     | Green      | #43A047 | Growth, on-track         |
| Negative     | Red        | #E53935 | Decline, off-track       |
| Background   | Snow       | #FAFAFA | Board background         |
| Surface      | White      | #FFFFFF | Panels                   |
| Text         | Dark Gray  | #212121 | Body text                |

### Palette 4: Research Warm (Qualitative Research)

For research synthesis and survey analysis boards. Warmer tones create empathy and approachability for human-centered data.

| Role          | Color Name  | Hex     | Usage            |
| ------------- | ----------- | ------- | ---------------- |
| Primary       | Warm Slate  | #37474F | Headers          |
| Secondary     | Warm Gray   | #78909C | Supporting text  |
| Quote Color   | Soft Blue   | #BBDEFB | Quote cards      |
| Theme Color 1 | Soft Green  | #C8E6C9 | Theme cluster 1  |
| Theme Color 2 | Soft Purple | #E1BEE7 | Theme cluster 2  |
| Theme Color 3 | Soft Orange | #FFE0B2 | Theme cluster 3  |
| Theme Color 4 | Soft Yellow | #FFF9C4 | Theme cluster 4  |
| Insight Color | Warm Yellow | #FFF8E1 | Insight cards    |
| Background    | Warm White  | #FAFBFC | Board background |
| Text          | Dark Ink    | #1A1A2E | Body text        |

**Reasoning**: Research boards benefit from warmer tones because the content is human-centered (quotes from real people). The pastel theme colors enable distinct clusters without the harshness of saturated hues.

---

## Typography for Data

### Metric Display Hierarchy

| Level              | Size    | Weight  | Usage                               |
| ------------------ | ------- | ------- | ----------------------------------- |
| Dashboard Title    | 34px    | Bold    | Board title in header               |
| Section Title      | 20px    | Bold    | Chart panel titles, frame titles    |
| KPI Value (Large)  | 32-36px | Bold    | Hero metric numbers                 |
| KPI Value (Medium) | 24-28px | Bold    | Supporting metric numbers           |
| Chart Title        | 18px    | Bold    | Individual chart titles             |
| Table Header       | 14px    | Bold    | Column headers in tables            |
| Table Body         | 13px    | Regular | Data rows                           |
| KPI Label          | 11px    | Regular | Metric name above the value         |
| KPI Change         | 13px    | Medium  | "+8.3% MoM" indicators              |
| KPI Target         | 10px    | Regular | "Target: $2.6M"                     |
| Annotation         | 12px    | Regular | Chart insights and notes            |
| Source Note        | 10px    | Regular | "Source: Mixpanel, refreshed Mar 5" |
| Methodology Note   | 10px    | Italic  | "N=1,240, 95% CI"                   |

### Number Formatting for Analytics

| Type        | Format                         | Example              |
| ----------- | ------------------------------ | -------------------- |
| Large count | Comma-separated or abbreviated | 34,200 or 34.2K      |
| Currency    | $ + abbreviated                | $2.47M               |
| Percentage  | Number + %                     | 28.3%                |
| Change      | Sign + Number + Unit           | +8.3% MoM            |
| Ratio       | Number + x                     | 3.2x                 |
| Score       | Number / Max                   | 4.1/5 or 47/100      |
| Duration    | Number + unit                  | 4.2 hrs or 34 days   |
| Sample size | N= + number                    | N=1,240              |
| Confidence  | Percentage or range            | 95% CI or +-2.3pp    |
| Date range  | Start — End                    | Jan 1 — Feb 28, 2026 |

### Annotation Writing Style

Annotations are the most important text on an analytics board. They translate data into insight.

**Do**: "Revenue grew 62% YoY, accelerating from 45% in Q1 to 78% in Q4. The November surge (+14%) was driven by the annual plan migration campaign."

**Do not**: "The chart shows revenue over 12 months." (This adds no value — the viewer can see that.)

Every annotation should state:

1. What happened (the fact)
2. How significant it is (magnitude and context)
3. Why it happened (cause or hypothesis, if known)

---

## Chart Construction on Miro

Since Miro lacks native chart widgets, analytics boards construct charts from primitive shapes. Here are precise construction guides for each chart type.

### Line Chart Construction

```
Components needed:
- Background rectangle (chart area): White fill, 1px #E0E0E0 border
- Y-axis line: 1px solid #78909C
- X-axis line: 1px solid #78909C
- Grid lines (horizontal): 1px dashed #E0E0E0, 4-5 lines
- Data points: 10px circles, filled with data color (#1976D2)
- Trend line: 3px solid connector between data points
- Target line: 2px dashed #EF6C00
- Axis labels: 10px, #78909C
- Data labels: 11px, bold, data color (at key inflection points only)
- Chart title: 18px, bold, #1A1A1A
- Annotation: 12px, #78909C, positioned below chart

Layout:
- Y-axis labels on the left, 40px from chart edge
- X-axis labels at bottom, centered under each data point
- Data points evenly spaced horizontally
- Annotation text box below x-axis, full chart width
```

### Bar Chart Construction (Horizontal)

```
Components needed:
- Background rectangle: White fill
- Bars: Rectangles of varying width, 30px height, 10px gap between bars
- Category labels: 12px, right-aligned, to the left of bars
- Value labels: 12px, bold, to the right of bars
- Color: Single color for simple comparison, multiple colors for categories

Layout:
- Categories listed top to bottom
- Longest bar = full chart width
- Other bars proportional to longest
- Value labels positioned 10px after bar end
```

### Cohort Grid Construction

```
Components needed:
- Header row: 14px bold, #455A64
- Data cells: Rectangles 100x40px
- Cell text: 12px, centered
- Color coding: Green (#C8E6C9) for high retention, Yellow (#FFF9C4) for medium,
  Orange (#FFE0B2) for low, Red (#FFCDD2) for very low

Layout:
- Rows = cohorts (e.g., Sep 2025, Oct 2025, Nov 2025)
- Columns = time periods (Month 0, Month 1, Month 2, etc.)
- Values = percentages
- Color intensity increases as retention drops

Color scale:
  >60%: #C8E6C9 (green)
  40-60%: #FFF9C4 (yellow)
  25-39%: #FFE0B2 (orange)
  <25%: #FFCDD2 (red)
```

### Funnel Construction

```
Components needed:
- Rectangles of decreasing width, stacked vertically
- Stage labels: 14px, white text on colored bars
- Count/percentage labels: 12px, positioned to the right of each bar
- Drop-off labels: 11px, positioned between stages with downward arrows

Layout:
- Top bar = 100% width
- Each subsequent bar = proportional to conversion percentage
- 5px gap between bars
- Color gradient from cool (top) to warm (bottom), or single color with opacity

Color:
  Top stages: #1976D2 (Bright Blue)
  Middle stages: #FB8C00 (Orange)
  Bottom stage: #2E7D32 (Green) — represents conversion goal
```

### Pie / Donut Construction

```
Components needed:
- Large circle (or ring for donut): 300-400px diameter
- Colored segments: Approximate with overlapping arc shapes or use
  pre-made images if precision matters
- Legend: Colored squares (16x16px) + label + percentage, aligned vertically
- Center text (donut only): Total or key metric, 24px bold

Rules:
- Maximum 6 segments
- Ordered largest to smallest, clockwise from 12 o'clock
- Always include a legend (never rely on slice labels alone)
- Use sparingly — bar charts usually communicate the same data more clearly
```

### Sparkline Construction

```
Components needed:
- Small connected line shapes, 100-150px wide, 30-40px tall
- No axis labels, no grid lines, no data point markers
- Single color: #1976D2 for neutral, #2E7D32 for positive trend, #D32F2F for negative

Purpose:
Sparklines go inside KPI cards to show trend direction without
taking significant space. They are a "shape of the data" indicator,
not a precise chart.
```

---

## KPI Card Visual Anatomy

### Standard KPI Card

```
+---------------------------+
|                           |
| Monthly Recurring Revenue [11px, #78909C, label]
|                           |
| $2.47M                    [32px, bold, #1A1A1A, value]
| +8.3% MoM ▲              [13px, #2E7D32, change]
|                           |
| ▁▂▃▄▅▆▇█                 [sparkline, 30px tall]
|                           |
| Target: $2.6M             [10px, #78909C, target]
| ● ON TRACK                [10px, #2E7D32, RAG status]
|                           |
+---------------------------+
Card size: 280x240px
Background: #FFFFFF
Shadow: 0 2px 8px rgba(0,0,0,0.06)
Border radius: 8px
Padding: 20px
```

### RAG Status Specifications

| Status        | Circle Color | Label Color | Label Text  |
| ------------- | ------------ | ----------- | ----------- |
| On Track      | #2E7D32      | #2E7D32     | "ON TRACK"  |
| Watch         | #F9A825      | #F57F17     | "WATCH"     |
| Off Track     | #D32F2F      | #D32F2F     | "OFF TRACK" |
| No Target     | #78909C      | #78909C     | "NO TARGET" |
| Not Available | #BDBDBD      | #BDBDBD     | "N/A"       |

### Change Direction Indicators

| Direction       | Color   | Symbol       | Example                                  |
| --------------- | ------- | ------------ | ---------------------------------------- |
| Positive (good) | #2E7D32 | Up arrow ▲   | "+8.3% MoM ▲"                            |
| Positive (bad)  | #D32F2F | Up arrow ▲   | "+36.8% churn ▲" (churn going up is bad) |
| Negative (good) | #2E7D32 | Down arrow ▼ | "-12% response time ▼"                   |
| Negative (bad)  | #D32F2F | Down arrow ▼ | "-1.4% ARPU ▼"                           |
| Flat            | #78909C | Dash —       | "0.0% MoM —"                             |

Important: Color indicates whether the direction is good or bad, not whether the number went up or down. Churn going up is red (bad), even though the number increased.

---

## Table Construction

### Standard Data Table

```
Header row:
  Background: #F0F2F5
  Text: 14px, bold, #455A64
  Height: 45px

Data rows:
  Background: #FFFFFF (alternating #FAFBFC for zebra striping)
  Text: 13px, regular, #1A1A1A
  Height: 40px

Status column:
  Use 12px colored circles (RAG) + 10px text label

Number columns:
  Right-aligned
  Use consistent decimal places within a column

Column width:
  Metric name: 200px (left-aligned)
  Numbers: 120-150px (right-aligned)
  Status: 100px (center-aligned)

Table border:
  1px solid #E0E0E0
  No internal vertical lines (clean modern style)
  Horizontal lines between rows only
```

---

## Accessibility Standards for Analytics Boards

### Color-Blind Safe Data Colors

When using multiple data series, use these color-blind friendly combinations:

| Series Count | Colors                                 | Hex Values                                  |
| ------------ | -------------------------------------- | ------------------------------------------- |
| 2 series     | Blue + Orange                          | #1976D2, #EF6C00                            |
| 3 series     | Blue + Orange + Green                  | #1976D2, #EF6C00, #2E7D32                   |
| 4 series     | Blue + Orange + Purple + Green         | #1976D2, #EF6C00, #7B1FA2, #2E7D32          |
| 5 series     | Blue + Orange + Purple + Green + Brown | #1976D2, #EF6C00, #7B1FA2, #2E7D32, #795548 |

### Non-Color Encoding

Never use color as the sole carrier of information. Pair every color indicator with:

- Text label ("ON TRACK", "OFF TRACK")
- Shape variation (circle for on-track, triangle for warning, square for off-track)
- Pattern or icon (checkmark, warning triangle, X)

### Text Contrast Requirements

- All text on white backgrounds: minimum #424242
- All text on colored backgrounds: white #FFFFFF only
- Annotation text: minimum 12px font size
- Source notes: minimum 10px font size
- Never use light gray text on white backgrounds for critical information

---

## Visual Anti-Patterns for Analytics Boards

### The Chartjunk Board

Decorative 3D charts, gradient fills, drop shadows on every element, ornamental borders.
**Fix**: Flat design, minimal borders, data-ink ratio discipline.

### The Rainbow Chart

Using 8-10 different bright colors in a single chart.
**Fix**: Maximum 5 distinct data colors per chart. Use shades of one color for sequential data.

### The Dual Y-Axis Trap

Two different scales on left and right y-axes that create false visual correlations.
**Fix**: Use two separate panels side by side instead of dual axes.

### The Unlabeled Chart

A chart with no title, no axis labels, and no annotation.
**Fix**: Every chart gets a title, axis labels, and a one-sentence annotation explaining the takeaway.

### The Precision Theater

Showing numbers to 4 decimal places ("$2,473,291.4782").
**Fix**: Use appropriate precision. KPI display: "$2.47M". Detailed analysis: "$2,473K". Never more than 2 decimal places.

---

## Board Finishing Standards

### Pre-Share Checklist for Analytics Boards

1. **Accuracy**: Do all numbers add up? Do percentages sum correctly? Are date ranges consistent?
2. **Freshness**: Is the "Last Refreshed" timestamp current? Is the data period clearly stated?
3. **Sources**: Is every metric traceable to a named data source?
4. **Definitions**: Are all metrics defined in the documentation section?
5. **Annotations**: Does every chart have a text summary of its key takeaway?
6. **RAG consistency**: Are green/yellow/red used consistently across all indicators?
7. **Contrast**: Is all text readable on its background?
8. **Alignment**: Are all panels aligned on a grid? Are elements within panels consistently spaced?
9. **Actionability**: Does the board conclude with specific actions or next steps?
10. **Limitations**: Are known data caveats documented?
