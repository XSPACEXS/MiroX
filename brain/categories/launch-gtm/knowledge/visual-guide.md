# Project Overview & Launch GTM — Visual Guide

## Introduction

Launch GTM boards are unique among all Miro board types because they combine four fundamentally different content types on a single canvas: data visualizations (Insights), process diagrams (Mapping), task cards (Tasks), and design artifacts (Design). The visual system must unify these disparate elements into a coherent whole while allowing each quadrant to maintain its functional identity. This guide covers the complete visual system.

---

## Color Palettes

### Palette 1: Command Center (Primary)

The default Launch GTM palette. Blue anchors authority and structure. Teal accents signal the go-to-market focus. The palette is deliberately neutral to avoid clashing with embedded design mockups or chart colors.

| Role               | Color Name   | Hex Code | Usage                                         |
| ------------------ | ------------ | -------- | --------------------------------------------- |
| Primary            | Command Blue | #1565C0  | Headers, quadrant borders, milestone markers  |
| Primary Light      | Sky Blue     | #BBDEFB  | Section backgrounds, active phase highlight   |
| Secondary          | Slate        | #37474F  | Body text, labels, secondary frames           |
| Secondary Light    | Light Slate  | #78909C  | Muted labels, timestamps, metadata            |
| Accent             | Teal         | #00897B  | GTM highlights, success metrics, launch ready |
| Accent Light       | Soft Teal    | #B2DFDB  | GTM section backgrounds                       |
| RAG Green          | Forest Green | #2E7D32  | On track, complete, ready                     |
| RAG Green Light    | Mint         | #C8E6C9  | Green status backgrounds                      |
| RAG Amber          | Amber        | #F9A825  | At risk, needs attention                      |
| RAG Amber Light    | Light Amber  | #FFF9C4  | Amber status backgrounds                      |
| RAG Red            | Signal Red   | #C62828  | Blocked, critical, not ready                  |
| RAG Red Light      | Soft Red     | #FFCDD2  | Red status backgrounds                        |
| Insight Purple     | Deep Purple  | #7B1FA2  | Insights quadrant accent, research elements   |
| Insight Purp Light | Lavender     | #E1BEE7  | Insight card backgrounds                      |
| Surface            | Near White   | #FAFAFA  | Board background                              |
| Card               | White        | #FFFFFF  | Card and frame interiors                      |
| Border             | Medium Gray  | #E0E0E0  | Frame borders, grid lines, dividers           |

### Palette 2: Enterprise Launch

For enterprise product launches and corporate GTM initiatives. More conservative, higher contrast, boardroom-appropriate.

| Role          | Color Name     | Hex Code | Usage                                  |
| ------------- | -------------- | -------- | -------------------------------------- |
| Primary       | Dark Navy      | #0D47A1  | Headers, primary frames                |
| Primary Light | Soft Blue      | #E3F2FD  | Section backgrounds                    |
| Secondary     | Charcoal       | #37474F  | Body text, labels                      |
| Accent        | Corporate Teal | #00695C  | Success indicators, completion markers |
| RAG Green     | Rich Green     | #1B5E20  | On track                               |
| RAG Amber     | Dark Amber     | #E65100  | At risk                                |
| RAG Red       | Deep Red       | #B71C1C  | Blocked                                |
| Surface       | Off White      | #FAFAFA  | Board background                       |
| Border        | Silver         | #BDBDBD  | Frame borders                          |

### Palette 3: Startup Launch

For startup product launches with a more energetic, modern feel. Higher energy colors signal momentum and excitement.

| Role          | Color Name    | Hex Code | Usage                                 |
| ------------- | ------------- | -------- | ------------------------------------- |
| Primary       | Electric Blue | #2979FF  | Headers, primary elements             |
| Primary Light | Ice Blue      | #E3F2FD  | Section backgrounds                   |
| Secondary     | Dark Gray     | #424242  | Body text                             |
| Accent        | Coral         | #FF7043  | Launch highlights, urgency indicators |
| Accent Alt    | Emerald       | #00C853  | Success, completion, go indicators    |
| RAG Green     | Bright Green  | #00C853  | On track                              |
| RAG Amber     | Warm Orange   | #FF9100  | At risk                               |
| RAG Red       | Hot Red       | #FF1744  | Blocked                               |
| Surface       | Clean White   | #FFFFFF  | Board background                      |
| Border        | Light Gray    | #E8E8E8  | Frame borders                         |

---

## Typography Hierarchy

### Size Hierarchy

| Level     | Size | Weight | Color                 | Usage                                                   |
| --------- | ---- | ------ | --------------------- | ------------------------------------------------------- |
| H1        | 36px | Bold   | Primary (#1565C0)     | Board title: "Launch Command Center"                    |
| H2        | 28px | Bold   | Secondary (#37474F)   | Quadrant titles: "INSIGHTS", "MAPPING", "TASKS"         |
| H3        | 22px | Bold   | Secondary (#37474F)   | Sub-sections: "Key Findings", "Pain Points", "Blockers" |
| H4        | 18px | Bold   | Secondary (#37474F)   | Card titles, task names, insight labels                 |
| Body      | 14px | Normal | Slate (#546E7A)       | Descriptions, annotations, content                      |
| Small     | 12px | Normal | Light Slate (#78909C) | Metadata, dates, sources, update timestamps             |
| RAG Badge | 12px | Bold   | White on RAG color    | Status badges: "ON TRACK", "AT RISK", "BLOCKED"         |
| KPI Value | 36px | Bold   | Primary or contextual | Metrics: "87%", "12 days", "$240K"                      |
| KPI Label | 12px | Normal | Light Slate (#78909C) | Metric labels: "Sprint Velocity", "Days to Launch"      |
| Phase     | 14px | Bold   | Phase color           | Phase labels: "RESEARCH", "BUILD", "LAUNCH"             |

### Typography Rules

1. **Quadrant headers**: UPPERCASE, 28px bold, positioned at the top-left of each quadrant with the quadrant's accent color as a left-border indicator.

2. **Cross-functional labels**: Team names (ENG, DESIGN, MKTG, SALES, SUPPORT) should be UPPERCASE, 14px bold, and use a consistent color per team throughout the board.

3. **Readiness indicators**: 12px bold, white text on RAG-colored background (rounded rectangle badge). Always include the text label alongside the color for accessibility.

4. **Dates and timestamps**: 12px, #78909C, positioned consistently (top-right of cards or bottom-right of sections). Format: "Updated Mar 15" or "Due: Mar 22".

5. **Dependency labels**: 12px, italic, positioned on connector lines. Format: "Blocked by: [team] [item]"

---

## Quadrant Visual Identity

Each quadrant has a subtle visual identity to help users orient themselves on the board:

### Insights Quadrant (Top-Left)

| Element            | Specification                         |
| ------------------ | ------------------------------------- |
| Left border accent | 4px solid #7B1FA2 (Deep Purple)       |
| Background tint    | #F3E5F5 at 30% opacity                |
| Sticky note color  | #E1BEE7 (Lavender)                    |
| Icon suggestion    | Magnifier or chart icon               |
| Content types      | Data cards, chart images, quote cards |

### Mapping Quadrant (Top-Right)

| Element            | Specification                         |
| ------------------ | ------------------------------------- |
| Left border accent | 4px solid #1565C0 (Command Blue)      |
| Background tint    | #E3F2FD at 30% opacity                |
| Sticky note color  | #BBDEFB (Sky Blue)                    |
| Icon suggestion    | Path or journey icon                  |
| Content types      | Journey maps, flow diagrams, personas |

### Tasks Quadrant (Bottom-Left)

| Element            | Specification                          |
| ------------------ | -------------------------------------- |
| Left border accent | 4px solid #00897B (Teal)               |
| Background tint    | #E0F2F1 at 30% opacity                 |
| Sticky note color  | #B2DFDB (Soft Teal)                    |
| Icon suggestion    | Checkbox or kanban icon                |
| Content types      | Task cards, kanban columns, checklists |

### Design Quadrant (Bottom-Right)

| Element            | Specification                     |
| ------------------ | --------------------------------- |
| Left border accent | 4px solid #EF6C00 (Bright Orange) |
| Background tint    | #FFF3E0 at 30% opacity            |
| Sticky note color  | #FFE0B2 (Soft Orange)             |
| Icon suggestion    | Paintbrush or screen icon         |
| Content types      | Mockups, wireframes, screenshots  |

---

## Card Design System

### Insight Card

```
+-------------------------------------------+
| [PURPLE DOT] KEY FINDING                   |
|-------------------------------------------|
|                                           |
| "67% of users abandon onboarding at       |
|  the data connection step"                 |
|                                           |
| Source: User Research Study (n=340)        |
| Date: Feb 2026                            |
| Confidence: High                          |
|                                           |
| Implication: Simplify data connection UX  |
| → Links to: Journey Map Pain Point #3     |
+-------------------------------------------+
  Background: #F3E5F5 | Border-left: 4px #7B1FA2
  Width: 400px | Height: ~180px
```

### Journey Stage Card

```
+-------------------------------------------+
| CONSIDERATION                    [Stage 2] |
|-------------------------------------------|
|                                           |
| Touchpoints:                              |
| • Website pricing page                    |
| • Comparison blog posts                   |
| • Free trial sign-up                      |
|                                           |
| Pain Points:                              |
| ⚠ Pricing confusion (3 tiers unclear)    |
| ⚠ No competitor comparison on site       |
|                                           |
| Metrics:                                  |
| Conversion: 12% → 8% (declining)         |
| Avg time in stage: 4.2 days              |
+-------------------------------------------+
  Background: #E3F2FD | Border-left: 4px #1565C0
  Width: 350px | Height: ~200px
```

### Task Card

```
+-------------------------------------------+
| [TEAL DOT] Simplify Pricing Page    [ENG] |
|-------------------------------------------|
|                                           |
| Reduce from 3 tiers to 2, add comparison |
| table, improve CTA clarity               |
|                                           |
| Owner: @sarah_design                     |
| Due: March 8, 2026                       |
| Status: ● IN PROGRESS                    |
|                                           |
| Linked to: Journey Stage 2, Insight #3   |
| Dependencies: Design mockup complete     |
+-------------------------------------------+
  Background: #E0F2F1 | Border-left: 4px #00897B
  Width: 350px | Height: ~160px
```

### Design Review Card

```
+-------------------------------------------+
| [ORANGE DOT] Pricing Page Redesign v2     |
|-------------------------------------------|
|                                           |
| [IMAGE: Design mockup or screenshot]      |
|                                           |
| Status: In Review                        |
| Reviewer: @product_lead                  |
| Feedback deadline: March 5               |
|                                           |
| Feedback:                                |
| ✓ CTA hierarchy is clear                |
| ⚠ Feature comparison table needs icons  |
| ✗ Mobile responsive version missing      |
+-------------------------------------------+
  Background: #FFF3E0 | Border-left: 4px #EF6C00
  Width: 450px | Height: variable (depends on image)
```

### Readiness Card

```
+-------------------------------------------+
| ENGINEERING                     [● GREEN]  |
|-------------------------------------------|
|                                           |
| ☑ Feature deployed to staging            |
| ☑ All unit tests passing                 |
| ☑ Integration tests complete             |
| ☑ Performance tested (2x load)           |
| ☑ Rollback plan documented              |
| ☑ Monitoring and alerts configured       |
|                                           |
| Owner: @eng_lead                         |
| Last updated: March 12, 2026            |
| Notes: "Ready. Monitoring is live."       |
+-------------------------------------------+
  Background: #C8E6C9 (green tint for GREEN status)
  Width: 350px | Height: ~200px
```

---

## Launch Readiness Dashboard Design

The readiness dashboard is the most critical visual element on a Launch GTM board. It must be readable at 25% zoom and serve as the go/no-go decision artifact.

### Dashboard Anatomy

```
+=================================================================+
|  LAUNCH READINESS — ProjectX Feature Launch                      |
|  Target: March 15, 2026 | Days Remaining: 5 | Phase: PRE-LAUNCH |
|-----------------------------------------------------------------|
|                                                                   |
|  ● ENG      ● DESIGN    ● MKTG      ● SALES    ● SUPPORT       |
|  GREEN      GREEN       AMBER       GREEN      RED              |
|  Ready      Ready       2 items     Ready      Training         |
|                         pending                 incomplete       |
|                                                                   |
|  OVERALL: NOT READY — 4 of 5 teams GREEN                        |
|  DECISION: CONDITIONAL GO — Support training must complete by    |
|  March 13 or launch delays to March 22                           |
|                                                                   |
|  Background: #1565C0 | Text: #FFFFFF | Height: 350px             |
+=================================================================+
```

### RAG Indicator Specifications

| Element         | Green             | Amber               | Red                 |
| --------------- | ----------------- | ------------------- | ------------------- |
| Dot fill        | #2E7D32           | #F9A825             | #C62828             |
| Dot size        | 24px diameter     | 24px diameter       | 24px diameter       |
| Label color     | #2E7D32           | #E65100             | #C62828             |
| Label text      | "GREEN" / "Ready" | "AMBER" / "[issue]" | "RED" / "[blocker]" |
| Card background | #C8E6C9           | #FFF9C4             | #FFCDD2             |

---

## Timeline Design

### Shared Timeline Bar

The timeline bar at the bottom of the 2x2 layout shows the project phases and current position:

```
+------------------------------------------------------------------+
| RESEARCH   | PLANNING   | BUILD      | TEST    | LAUNCH  | RETRO |
| Jan 6-17   | Jan 20-31  | Feb 3-28   | Mar 3-7 | Mar 10  | Mar 17|
|            |            |     ▲      |         |         |       |
|            |            |  WE ARE    |         |         |       |
|            |            |  HERE      |         |         |       |
+------------------------------------------------------------------+
```

**Phase colors**: Each phase cell uses the corresponding phase color (see layout-patterns.md Phase Indicator Standards) at 30% opacity, with the current phase at full opacity.

**"We Are Here" marker**: A vertical line with a triangle marker in #C62828 (red) showing the current date position relative to the timeline.

**Milestone diamonds**: Diamond shapes positioned on the timeline at key dates, with labels above: "Beta Start", "Campaign Live", "Launch Day."

---

## Connector Styles

### Within-Quadrant Connectors

| Connection Type               | Line Style | Color   | Weight |
| ----------------------------- | ---------- | ------- | ------ |
| Insight to insight (sequence) | Solid      | #7B1FA2 | 1px    |
| Journey stage to stage        | Solid      | #1565C0 | 2px    |
| Task dependency               | Dashed     | #00897B | 1px    |
| Design iteration              | Dotted     | #EF6C00 | 1px    |

### Cross-Quadrant Connectors

| Connection Type                  | Line Style | Color   | Weight | Arrow  |
| -------------------------------- | ---------- | ------- | ------ | ------ |
| Insight → Journey Gap            | Dashed     | #7B1FA2 | 2px    | Single |
| Journey Gap → Task               | Solid      | #1565C0 | 2px    | Single |
| Task → Design Deliverable        | Solid      | #00897B | 2px    | Single |
| Design → Insight (feedback loop) | Dotted     | #EF6C00 | 2px    | Single |
| Cross-team dependency            | Dashed     | #C62828 | 3px    | Double |

### Swim Lane Connectors

| Connection Type        | Line Style | Color      | Weight | Arrow  |
| ---------------------- | ---------- | ---------- | ------ | ------ |
| Same-team sequential   | Solid      | Team color | 1px    | Single |
| Cross-team dependency  | Dashed     | #C62828    | 2px    | Single |
| Milestone to milestone | Dotted     | #E0E0E0    | 1px    | None   |

---

## Team Color System

When multiple teams appear on the same board, use consistent colors:

| Team             | Color      | Hex     | Usage                                     |
| ---------------- | ---------- | ------- | ----------------------------------------- |
| Engineering      | Teal       | #00897B | ENG labels, task cards, swim lane header  |
| Design           | Orange     | #EF6C00 | DESIGN labels, review cards, swim lane    |
| Marketing        | Purple     | #7B1FA2 | MKTG labels, campaign cards, swim lane    |
| Sales            | Blue       | #1565C0 | SALES labels, enablement cards, swim lane |
| Customer Success | Green      | #2E7D32 | CS labels, support cards, swim lane       |
| Product          | Dark Slate | #37474F | PM labels, strategy cards, swim lane      |
| Legal/Compliance | Gray       | #78909C | LEGAL labels, compliance cards            |

---

## Accessibility and Readability

### Contrast Requirements

| Combination        | Contrast Ratio | Passes |
| ------------------ | -------------- | ------ |
| #37474F on #FFFFFF | 10.2:1         | Yes    |
| #FFFFFF on #1565C0 | 5.8:1          | Yes    |
| #FFFFFF on #2E7D32 | 5.1:1          | Yes    |
| #FFFFFF on #C62828 | 5.6:1          | Yes    |
| #1A1A2E on #F9A825 | 8.7:1          | Yes    |
| #FFFFFF on #7B1FA2 | 6.3:1          | Yes    |
| #FFFFFF on #00897B | 4.6:1          | Yes    |

### Color-Blind Safety

RAG indicators always include text labels alongside colors: "GREEN / Ready", "AMBER / At Risk", "RED / Blocked." Quadrant identity uses both color borders AND text headers. Team colors are supplemented by team name labels.

### Zoom Level Optimization

| Zoom Level | Audience    | What Must Be Readable                           |
| ---------- | ----------- | ----------------------------------------------- |
| 25%        | Executive   | Board title, launch date, RAG status indicators |
| 50%        | PM / Lead   | Quadrant titles, team readiness, phase markers  |
| 75%        | Team member | Card titles, task status, dates, owners         |
| 100%       | Contributor | Full card content, annotations, links           |

---

## Visual Anti-Patterns

### Anti-Pattern 1: Design Mockup Domination

Embedding large design mockups that visually overpower the other quadrants. The Design quadrant becomes 70% of the visual weight.
**Fix**: Use thumbnail-sized mockup previews (300-400px wide) with links to the full Figma file. The board shows the summary, Figma shows the detail.

### Anti-Pattern 2: Rainbow Team Colors

Using bright, saturated colors for every team, creating a visually chaotic board. When 6 teams each have a saturated primary color, nothing stands out.
**Fix**: Use the prescribed team colors at reduced saturation for backgrounds and full saturation only for labels and indicators.

### Anti-Pattern 3: Missing Quadrant Boundaries

No visual distinction between the four quadrants, making it impossible to orient at low zoom levels.
**Fix**: Each quadrant has a subtle background tint and a 4px left-border accent in its identity color. At 25% zoom, the four quadrants should be visually distinct.

### Anti-Pattern 4: Timeline Without "Now" Marker

A timeline that shows phases but does not indicate where the project currently stands.
**Fix**: Always include a "We Are Here" marker — a red vertical line with date label — on the timeline. This is the single most important element for orientation.

### Anti-Pattern 5: Readiness Without Reasoning

RAG indicators that show GREEN/AMBER/RED without explaining why. "Marketing: AMBER" tells you there is a problem but not what the problem is.
**Fix**: Every RAG indicator should include a 1-line explanation: "AMBER — Social media calendar not confirmed, 2 items pending." This transforms the indicator from a signal into actionable information.
