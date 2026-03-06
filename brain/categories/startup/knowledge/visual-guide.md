# Startup Board Visual Guide

## Introduction

Startup boards communicate under extreme conditions: compressed timelines, high-stakes investor meetings, diverse audiences from technical co-founders to non-technical advisors, and content that changes weekly. The visual design must convey both confidence and honesty — polished enough to impress investors, transparent enough to drive real decisions. This guide covers the complete visual system for startup boards.

---

## Color Palettes

### Palette 1: Electric Blue Founder (Primary)

The default startup palette. Electric blue signals innovation and forward momentum. Slate grounds the ambition in seriousness. Orange accents draw attention to calls-to-action and critical metrics.

| Role              | Color Name    | Hex Code | Usage                                           |
| ----------------- | ------------- | -------- | ----------------------------------------------- |
| Primary           | Electric Blue | #1565C0  | Headers, primary frames, key labels             |
| Primary Light     | Sky Blue      | #BBDEFB  | Background fills, hypothesis status "TESTING"   |
| Secondary         | Slate         | #37474F  | Body text, secondary frames, section dividers   |
| Secondary Light   | Light Slate   | #78909C  | Muted labels, placeholder text, "HYPOTHESIS"    |
| Accent            | Bright Orange | #EF6C00  | CTAs, critical alerts, competitive elements     |
| Accent Light      | Soft Orange   | #FFE0B2  | Warning backgrounds, attention zones            |
| Validated         | Forest Green  | #2E7D32  | Validated hypotheses, revenue, positive signals |
| Validated Light   | Mint          | #C8E6C9  | Validated hypothesis backgrounds                |
| Invalidated       | Signal Red    | #C62828  | Invalidated hypotheses, costs, blockers         |
| Invalidated Light | Soft Red      | #FFCDD2  | Invalidated hypothesis backgrounds              |
| Partial           | Amber         | #F9A825  | Partially validated, in-progress experiments    |
| Partial Light     | Light Amber   | #FFF9C4  | Partial validation backgrounds                  |
| Surface           | Near White    | #FAFAFA  | Board background                                |
| Canvas Block      | White         | #FFFFFF  | Block interiors on Lean Canvas                  |
| Border            | Medium Gray   | #E0E0E0  | Grid lines, canvas block borders                |

### Palette 2: Midnight Stealth

For deep-tech, cybersecurity, or AI startups where a darker, more technical aesthetic communicates domain credibility.

| Role          | Color Name    | Hex Code | Usage                                     |
| ------------- | ------------- | -------- | ----------------------------------------- |
| Primary       | Deep Navy     | #0D1B2A  | Headers, primary frames                   |
| Primary Light | Navy Blue     | #1B3A5C  | Section backgrounds, panel fills          |
| Secondary     | Steel         | #415A77  | Body text, secondary elements             |
| Accent        | Cyan          | #00BCD4  | Highlights, validated status, data points |
| Accent Alt    | Amber         | #FFC107  | Warnings, in-progress experiments         |
| Validated     | Neon Green    | #00E676  | Validated hypotheses                      |
| Invalidated   | Hot Red       | #FF1744  | Invalidated hypotheses                    |
| Surface       | Dark Charcoal | #1A1A2E  | Board background                          |
| Card          | Dark Slate    | #2A2A3E  | Card and block interiors                  |
| Text Primary  | Off White     | #E0E0E0  | Primary text on dark background           |
| Border        | Dark Gray     | #333355  | Grid lines, canvas block borders          |

### Palette 3: Clean Startup

For consumer-facing, lifestyle, or health-tech startups where approachability matters more than technical gravitas.

| Role          | Color Name  | Hex Code | Usage                              |
| ------------- | ----------- | -------- | ---------------------------------- |
| Primary       | Warm Indigo | #3949AB  | Headers, primary frames            |
| Primary Light | Lavender    | #C5CAE9  | Backgrounds, section fills         |
| Secondary     | Charcoal    | #424242  | Body text, labels                  |
| Accent        | Coral       | #FF7043  | CTAs, attention points, highlights |
| Accent Alt    | Teal        | #26A69A  | Positive metrics, validated status |
| Validated     | Green       | #43A047  | Validated hypotheses               |
| Invalidated   | Rose        | #E53935  | Invalidated hypotheses             |
| Partial       | Gold        | #FFB300  | Partial validation, testing status |
| Surface       | Warm White  | #FAFAF6  | Board background                   |
| Card          | Pure White  | #FFFFFF  | Card and block interiors           |
| Border        | Light Gray  | #E8E8E8  | Grid lines, canvas block borders   |

### Palette 4: Investor-Ready

Designed specifically for boards that will be shared with investors. Conservative, professional, confidence-inspiring.

| Role          | Color Name | Hex Code | Usage                                       |
| ------------- | ---------- | -------- | ------------------------------------------- |
| Primary       | Dark Blue  | #1A237E  | Headers, primary frames, titles             |
| Primary Light | Soft Blue  | #E8EAF6  | Background fills, section shading           |
| Secondary     | Dark Gray  | #37474F  | Body text, secondary information            |
| Accent        | Gold       | #F57F17  | Key metrics, call-to-action, "The Ask"      |
| Validated     | Rich Green | #1B5E20  | Validated, traction metrics, revenue growth |
| Invalidated   | Muted Red  | #B71C1C  | Risks, invalidated assumptions              |
| Surface       | Off White  | #FAFAFA  | Board background                            |
| Card          | White      | #FFFFFF  | Card interiors                              |
| Border        | Silver     | #BDBDBD  | Frame borders, grid lines                   |

---

## Typography Hierarchy

### Font Stack

Miro boards use Miro's built-in font rendering. All size specifications assume Miro's default font.

### Size Hierarchy

| Level | Size | Weight | Color                   | Usage                                                |
| ----- | ---- | ------ | ----------------------- | ---------------------------------------------------- |
| H1    | 36px | Bold   | Primary (#1565C0)       | Board title, canvas name, "LEAN CANVAS v2.3"         |
| H2    | 28px | Bold   | Secondary (#37474F)     | Section titles: "PROBLEM", "SOLUTION", "UVP"         |
| H3    | 22px | Bold   | Secondary (#37474F)     | Sub-section labels, "EXISTING ALTERNATIVES"          |
| H4    | 18px | Bold   | Secondary (#37474F)     | Card titles, hypothesis labels, investor names       |
| Body  | 14px | Normal | Slate (#546E7A)         | Descriptions, content, evidence statements           |
| Small | 12px | Normal | Light Slate (#78909C)   | Metadata, dates, version numbers, source citations   |
| Badge | 11px | Bold   | White (#FFFFFF) on fill | Status badges: "VALIDATED", "TESTING", "HYPOTHESIS"  |
| KPI   | 42px | Bold   | Primary or contextual   | Large metric values: "$2.4M", "47%", "1,200 users"   |
| Sub   | 14px | Normal | Light Slate (#78909C)   | KPI labels: "Monthly Recurring Revenue", "NPS Score" |

### Typography Rules for Startup Boards

1. **Canvas block headers**: Always UPPERCASE, 28px bold, centered within the block. This follows Lean Canvas convention and provides scannability at zoom levels from 25% to 100%.

2. **Hypothesis text**: Normal case, 14px, with validation badge inline or adjacent. The hypothesis text should read as a complete statement: "Users in the 25-34 segment will pay $29/month for automated reporting."

3. **Metric values**: 42px bold for primary KPIs, 28px bold for secondary metrics. Always include units (%, $, users) adjacent to the number.

4. **Investor-facing text**: Slightly larger body text (16px) on boards shared with investors. Investors often view boards at lower zoom levels and on projectors.

5. **Version labels**: 12px, positioned in the header area. Format: "v2.3 | Updated 2024-03-15 | Pre-seed | 4th iteration"

---

## Validation Status Badge System

The validation badge is the most important visual element unique to startup boards. It transforms every assumption into an explicit, trackable hypothesis.

### Badge Specifications

| Status              | Background | Text Color | Text        | Border | Width | Height |
| ------------------- | ---------- | ---------- | ----------- | ------ | ----- | ------ |
| VALIDATED           | #2E7D32    | #FFFFFF    | VALIDATED   | None   | 120px | 28px   |
| PARTIALLY VALIDATED | #F9A825    | #1A1A2E    | PARTIAL     | None   | 100px | 28px   |
| TESTING             | #1565C0    | #FFFFFF    | TESTING     | None   | 100px | 28px   |
| HYPOTHESIS          | #78909C    | #FFFFFF    | HYPOTHESIS  | None   | 120px | 28px   |
| INVALIDATED         | #C62828    | #FFFFFF    | INVALIDATED | None   | 130px | 28px   |

### Badge Placement Rules

- **On Lean Canvas blocks**: Top-right corner of each block, 10px from edges
- **On sticky notes**: Below the hypothesis text, left-aligned
- **On pitch deck slides**: Adjacent to any claim that is an assumption
- **On feature cards**: Right side, vertically centered
- **On investor cards**: Not applicable (pipeline status is different from hypothesis status)

### Evidence Annotation Format

Every VALIDATED or INVALIDATED badge should have an evidence annotation nearby:

```
[VALIDATED badge]
Evidence: 23 customer interviews, 78% expressed willingness to pay $29/mo
Date validated: 2024-02-15
Confidence: High (n=23, consistent across segments)
```

```
[INVALIDATED badge]
Evidence: MVP launched to 150 beta users, only 3% converted to paid
Date invalidated: 2024-03-01
Implication: Pricing model needs restructuring — testing freemium next
```

---

## Lean Canvas Visual Construction

### Block Anatomy

Each Lean Canvas block is a self-contained visual unit:

```
+------------------------------------------+
| PROBLEM                     [HYPOTHESIS]  |  <- Header: 28px bold, UPPERCASE
|------------------------------------------|
|                                          |
| 1. Primary problem statement             |  <- Numbered list, 14px
|    "Supporting detail or evidence"       |  <- Quote format, italic, 12px
|                                          |
| 2. Secondary problem statement           |
|    "Supporting detail or evidence"       |
|                                          |
| 3. Tertiary problem statement            |
|                                          |
|------------------------------------------|
| EXISTING ALTERNATIVES                    |  <- Sub-section: 18px bold
| • Alternative 1 (market leader)          |  <- Bullet list, 14px
| • Alternative 2 (workaround)             |
| • Alternative 3 (status quo)             |
|                                          |
| Internal padding: 20px all sides         |
+------------------------------------------+
```

### Unique Value Proposition Block (Center)

The UVP block is the visual anchor of the entire canvas. It deserves special treatment:

```
+------------------------------------------+
| UNIQUE VALUE PROPOSITION    [TESTING]     |
|------------------------------------------|
|                                          |
| "Single, clear, compelling message       |
|  that states why you are different        |
|  and worth buying"                        |
|                                          |  <- Centered, 18px, italic, quoted
| High-Level Concept:                      |
| "YouTube for enterprise training"        |  <- 16px, bold, centered
|                                          |
| Internal padding: 30px (more breathing   |
| room because this is the focal point)    |
+------------------------------------------+
```

### Cost Structure and Revenue Streams (Bottom Row)

These blocks span the full width and use a columnar internal layout:

```
+--------------------------------------------------+---------------------------------------------+
| COST STRUCTURE                                    | REVENUE STREAMS                             |
|--------------------------------------------------|---------------------------------------------|
|                                                  |                                             |
| FIXED COSTS          | VARIABLE COSTS            | MODEL: SaaS subscription                   |
| • Salaries: $45K/mo  | • Cloud: ~$3K/mo          | PRICING: $29/mo (starter), $99/mo (pro)     |
| • Office: $5K/mo     | • Marketing: ~$8K/mo      | LTV: $870 (est.)                            |
| • Tools: $2K/mo      | • Support: ~$1K/mo        | CURRENT: $4.2K MRR (47 paying customers)    |
|                      |                           |                                             |
| BURN RATE: $64K/mo   | RUNWAY: 14 months         | TARGET: $50K MRR by month 18               |
+--------------------------------------------------+---------------------------------------------+
```

---

## Pitch Deck Slide Card Visual Design

### Slide Card Anatomy

Each pitch deck slide card is a mini design workspace:

```
+-----------------------------------+
| SLIDE 3: SOLUTION          [3/10] |  <- Slide number, 22px bold
|-----------------------------------|
|                                   |
| CONTENT:                          |  <- 14px bold label
| "Our platform uses AI to..."      |  <- 14px body text
| • Key feature 1                   |
| • Key feature 2                   |
| • Key feature 3                   |
|                                   |
|-----------------------------------|
| VISUAL DIRECTION:                 |  <- 14px bold label
| Product screenshot, full-screen   |  <- 14px body text
| Annotated with feature callouts   |
| Dark background, product glows    |
|                                   |
|-----------------------------------|
| TALKING POINTS:                   |  <- 14px bold label
| 1. Start with the pain point      |  <- 14px body text
| 2. Show the product in action     |
| 3. Highlight the "aha moment"     |
| 4. Transition: "And it works..."  |
|                                   |
| TIME: 90 seconds                  |  <- 12px, right-aligned
+-----------------------------------+
```

### Slide Card Color Coding

Different slide types use different accent colors on the left border:

| Slide Type       | Left Border Color | Rationale                  |
| ---------------- | ----------------- | -------------------------- |
| Hook / Opening   | #EF6C00 (Orange)  | Energy, attention-grabbing |
| Problem          | #C62828 (Red)     | Pain, urgency              |
| Solution         | #1565C0 (Blue)    | Innovation, capability     |
| Market / Why Now | #2E7D32 (Green)   | Growth, opportunity        |
| Traction         | #2E7D32 (Green)   | Proof, validation          |
| Business Model   | #37474F (Slate)   | Structure, seriousness     |
| Team             | #1565C0 (Blue)    | Trust, competence          |
| Financials       | #37474F (Slate)   | Rigor, detail              |
| The Ask          | #EF6C00 (Orange)  | Action, call to commit     |

---

## Investor Pipeline Card Design

### Investor Card Anatomy

```
+-----------------------------------+
| [VC LOGO placeholder]             |
| Sequoia Capital                   |  <- 16px bold
| Partner: Alfred Lin               |  <- 14px normal
|-----------------------------------|
| Check Size: $500K-$2M             |  <- 14px
| Focus: AI/ML, Enterprise SaaS    |
| Stage: Seed / Series A            |
|-----------------------------------|
| Status: 2nd meeting scheduled     |  <- 14px, color-coded
| Next: March 22 partner meeting    |
| Warm Intro: Via [name]            |
| Sentiment: ●●●○○ (Interested)    |  <- Visual indicator
|-----------------------------------|
| Notes: Asked about CAC payback,   |
| wants to see Q2 cohort data       |  <- 12px, italic
+-----------------------------------+
  Width: 280px | Height: ~160px
```

### Pipeline Stage Color Headers

| Stage           | Header Background | Header Text |
| --------------- | ----------------- | ----------- |
| Research        | #78909C           | #FFFFFF     |
| Outreach        | #BBDEFB           | #1A1A2E     |
| First Meeting   | #1565C0           | #FFFFFF     |
| Partner Meeting | #0D47A1           | #FFFFFF     |
| Due Diligence   | #F9A825           | #1A1A2E     |
| Term Sheet      | #2E7D32           | #FFFFFF     |
| Closed          | #1B5E20           | #FFFFFF     |
| Passed          | #C62828           | #FFFFFF     |

---

## MVP Feature Card Design

### Feature Card Anatomy

```
+-----------------------------------+
| ☑ User Authentication     [MVP]   |  <- 16px bold, priority badge
|-----------------------------------|
| Users can sign up, log in, and    |
| manage their profile              |  <- 14px
|-----------------------------------|
| Effort: M (2 sprints)             |  <- 12px
| Value: High (blocking activation) |
| Status: In Progress (Week 2)      |
| Owner: @sarah                     |
+-----------------------------------+
  Width: 350px | Height: ~100px
```

### Priority Badge Colors

| Priority     | Badge Background | Badge Text |
| ------------ | ---------------- | ---------- |
| MVP          | #C62828          | #FFFFFF    |
| MUST HAVE    | #EF6C00          | #FFFFFF    |
| NICE TO HAVE | #F9A825          | #1A1A2E    |
| NEXT VERSION | #78909C          | #FFFFFF    |
| SKIP         | #E0E0E0          | #37474F    |

### Prioritization Matrix Visual

The 2x2 prioritization matrix uses color-coded quadrants:

```
+---------------------------+---------------------------+
|                           |                           |
|   HIGH VALUE              |   HIGH VALUE              |
|   LOW EFFORT              |   HIGH EFFORT             |
|                           |                           |
|   Background: #C8E6C9     |   Background: #BBDEFB     |
|   Label: "MVP"            |   Label: "NEXT"           |
|   (Do first)              |   (Plan carefully)        |
|                           |                           |
+---------------------------+---------------------------+
|                           |                           |
|   LOW VALUE               |   LOW VALUE               |
|   LOW EFFORT              |   HIGH EFFORT             |
|                           |                           |
|   Background: #FFF9C4     |   Background: #FFCDD2     |
|   Label: "NICE TO HAVE"   |   Label: "SKIP"           |
|   (If time allows)        |   (Do not build)          |
|                           |                           |
+---------------------------+---------------------------+
```

---

## Connector and Arrow Styles

### Cross-Reference Connectors

When linking between related boards or sections:

| Connection Type                | Line Style  | Color   | Arrow  |
| ------------------------------ | ----------- | ------- | ------ |
| Lean Canvas → Pitch Deck       | Dashed, 2px | #78909C | Single |
| Pitch Deck → Investor Pipeline | Dashed, 2px | #78909C | Single |
| MVP Plan → Lean Canvas         | Dashed, 2px | #78909C | Single |
| Hypothesis → Experiment        | Solid, 2px  | #1565C0 | Single |
| Experiment → Evidence          | Solid, 2px  | #2E7D32 | Single |
| Invalidated → Pivot            | Solid, 3px  | #C62828 | Single |

### Narrative Flow Arrows (Pitch Deck)

On the pitch deck storyboard, arrows show the narrative progression:

- **Style**: Solid, 3px, with arrowhead
- **Color**: #1565C0 (primary blue)
- **Placement**: Connecting the right edge of one slide card to the left edge of the next
- **Arc**: Slight curve (Miro's default curved connector), not straight lines

### Fundraise Pipeline Flow

In the investor pipeline kanban, flow arrows are implicit (left-to-right column order) and should NOT use explicit connectors. The spatial arrangement communicates the flow.

---

## Sticky Note Color System

### Lean Canvas Sticky Notes

| Canvas Block      | Sticky Color | Hex     | Rationale                  |
| ----------------- | ------------ | ------- | -------------------------- |
| Problem           | Red/Pink     | #FFCDD2 | Pain, urgency              |
| Solution          | Blue         | #BBDEFB | Innovation, capability     |
| Key Metrics       | Green        | #C8E6C9 | Measurement, growth        |
| UVP               | Yellow       | #FFF9C4 | Core value, attention      |
| Unfair Advantage  | Orange       | #FFE0B2 | Differentiation, moat      |
| Customer Segments | Purple       | #E1BEE7 | People, personas           |
| Channels          | Light Blue   | #B3E5FC | Distribution, reach        |
| Cost Structure    | Red/Pink     | #FFCDD2 | Financial obligation, burn |
| Revenue Streams   | Green        | #C8E6C9 | Financial positive, income |

### Experiment Sticky Notes

| Experiment Phase | Sticky Color | Hex     |
| ---------------- | ------------ | ------- |
| Hypothesis       | Gray         | #CFD8DC |
| Build            | Blue         | #BBDEFB |
| Measure          | Yellow       | #FFF9C4 |
| Learn            | Green        | #C8E6C9 |
| Pivot            | Orange       | #FFE0B2 |

---

## Frame and Section Design

### Frame Specifications

| Board Type         | Frame Background | Frame Border | Border Width | Corner Radius |
| ------------------ | ---------------- | ------------ | ------------ | ------------- |
| Lean Canvas        | #FFFFFF          | #E0E0E0      | 2px          | 0 (sharp)     |
| Pitch Deck         | #FAFAFA          | #1565C0      | 2px          | 8px           |
| Investor Pipeline  | #FAFAFA          | #E0E0E0      | 1px          | 8px           |
| MVP Planning       | #FAFAFA          | #E0E0E0      | 1px          | 8px           |
| Validation Tracker | #F5F5F5          | #1565C0      | 2px          | 4px           |

### Header Bar Design

Every startup board begins with a header bar that establishes context:

```
+=================================================================+
|  [ICON] LEAN CANVAS v2.3                                         |
|  Startup: DataSight AI | Stage: Pre-seed | Updated: 2024-03-15  |
|  Iteration: 4th pivot from original idea                         |
|  Author: @founder | Team: @cto, @designer                       |
|                                                                   |
|  Background: #1565C0 | Text: #FFFFFF | Height: 320px             |
+=================================================================+
```

Header bars use the primary color as background with white text. This creates a strong visual anchor at the top of the board and immediately communicates context.

---

## Accessibility and Readability

### Contrast Requirements

All text must meet WCAG AA contrast ratios (4.5:1 for body text, 3:1 for large text):

| Combination        | Contrast Ratio | Passes |
| ------------------ | -------------- | ------ |
| #37474F on #FFFFFF | 10.2:1         | Yes    |
| #FFFFFF on #1565C0 | 5.8:1          | Yes    |
| #FFFFFF on #2E7D32 | 5.1:1          | Yes    |
| #FFFFFF on #C62828 | 5.6:1          | Yes    |
| #1A1A2E on #F9A825 | 8.7:1          | Yes    |
| #78909C on #FFFFFF | 4.6:1          | Yes    |
| #FFFFFF on #78909C | 4.6:1          | Yes    |

### Color-Blind Safety

Validation badges use both color AND text labels ("VALIDATED", "INVALIDATED") to ensure accessibility for color-blind users. Never rely solely on green vs. red to communicate hypothesis status.

### Zoom Level Optimization

Startup boards are viewed at multiple zoom levels during different activities:

| Zoom Level | Activity                       | What Must Be Readable             |
| ---------- | ------------------------------ | --------------------------------- |
| 25%        | Full canvas overview           | Block titles, validation badges   |
| 50%        | Section scanning               | Headers, key metrics, card titles |
| 75%        | Working zoom                   | All body text, sticky notes       |
| 100%       | Detailed reading               | Everything including small text   |
| 150%       | Focused editing on single card | Card details, evidence notes      |

Design the board so that the most critical information (block titles, validation badges, key metrics) is readable at 25% zoom. This means these elements must be at least 28px font size.

---

## Visual Anti-Patterns

### Anti-Pattern 1: Rainbow Canvas

Using a different color for every element, creating visual chaos. The canvas should use a restrained palette with semantic color assignments (green = validated, red = invalidated, blue = testing, gray = hypothesis).

### Anti-Pattern 2: Wall of Text Blocks

Filling canvas blocks with paragraphs of text. Use bullet points, numbered lists, and sticky notes. Keep text concise — the canvas is a map, not a document.

### Anti-Pattern 3: Missing Validation Badges

A Lean Canvas without validation badges is just a prettier version of a Word document. Every block should carry a hypothesis status.

### Anti-Pattern 4: Inconsistent Card Sizes

Investor cards, feature cards, and slide cards should all be consistent within their type. A pipeline where every card is a different size signals disorganization.

### Anti-Pattern 5: No Visual Hierarchy in Metrics

Displaying all numbers at the same size. Primary KPIs (MRR, users, runway) should be 42px. Secondary metrics should be 28px. Supporting data should be 14px. The hierarchy tells the viewer what matters most.

### Anti-Pattern 6: Static Presentation Without Frames

A board designed for presentation but without Miro frames configured for presentation mode. Every presentation-facing board (pitch deck, investor update) should have frames that create a guided walkthrough.

---

## Element Selection Guide

### When to Use Each Miro Element

| Element      | Use For                                        | Do Not Use For                       |
| ------------ | ---------------------------------------------- | ------------------------------------ |
| Frame        | Canvas blocks, slide cards, pipeline columns   | Decorative grouping with no content  |
| Shape (rect) | Headers, KPI cards, badges, section dividers   | Content that changes frequently      |
| Sticky Note  | Hypotheses, features, problems, ideas          | Permanent labels or headers          |
| Text         | Labels, descriptions, evidence, annotations    | Content that should be movable       |
| Connector    | Explicit relationships, narrative flow         | Implicit spatial relationships       |
| Image        | Logos, product screenshots, charts             | Decorative backgrounds               |
| Card         | Investor profiles, team bios, experiment cards | Simple labels or single-line content |

### Sticky Note vs. Text Block Decision

- **Sticky note**: Use when the content represents an individual idea, hypothesis, or item that might be moved, grouped, or re-prioritized. Sticky notes are the atoms of startup thinking.
- **Text block**: Use when the content is a label, description, or annotation that is fixed in position and provides context for other elements.

### Frame vs. Shape for Blocks

- **Frame**: Use for major sections that will contain other elements (canvas blocks, slide cards, pipeline columns). Frames clip their children and create natural grouping.
- **Shape**: Use for visual elements that are self-contained (headers, badges, KPI cards). Shapes display their content directly.
