# Layout Patterns — Customer Journey Boards

## Overview

Customer journey boards are among the most layout-critical board types in Miro. The arrangement of elements is not decorative — it IS the meaning. A misplaced stage, a cramped pain point row, or a missing whitespace gap can fundamentally break how the board communicates. This guide covers the five core layout patterns for customer journey boards, with specific dimensions, spacing rules, and ASCII diagrams for each.

---

## Pattern 1: The Horizontal Journey Grid (Journey Map)

The flagship layout for full customer journey maps. Time flows left to right. Analysis depth flows top to bottom. Every intersection of stage and layer creates a cell that holds specific content.

### Structure

```
+------------------------------------------------------------------------+
|                        TITLE BANNER (full width)                        |
|  Journey name, persona, date, scope, methodology                       |
+------------------------------------------------------------------------+
|         |         |         |         |         |         |             |
| PERSONA | STAGE 1 | STAGE 2 | STAGE 3 | STAGE 4 | STAGE 5 | STAGE 6   |
| CARD    |         |         |         |         |         |             |
|         +---------+---------+---------+---------+---------+-------------|
| [Photo] | Actions | Actions | Actions | Actions | Actions | Actions     |
| [Name]  |         |         |         |         |         |             |
| [Goals] +---------+---------+---------+---------+---------+-------------|
| [Pain]  | Touch-  | Touch-  | Touch-  | Touch-  | Touch-  | Touch-      |
| [Quote] | points  | points  | points  | points  | points  | points      |
|         +---------+---------+---------+---------+---------+-------------|
|         |         [  EMOTION CURVE — continuous line across  ]          |
|         +---------+---------+---------+---------+---------+-------------|
|         | Pain    | Pain    | Pain    | Pain    | Pain    | Pain        |
|         | Points  | Points  | Points  | Points  | Points  | Points      |
|         +---------+---------+---------+---------+---------+-------------|
|         | Opps    | Opps    | Opps    | Opps    | Opps    | Opps        |
+---------+---------+---------+---------+---------+---------+-------------|
|  KEY METRICS STRIP           |  PRIORITY ACTIONS & OWNERS              |
+------------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element       | Width      | Height    | Notes                                   |
| ------------- | ---------- | --------- | --------------------------------------- |
| Total board   | 5000px     | 3000px    | Standard for advanced boards            |
| Title banner  | 4900px     | 300px     | Full width minus 50px margin each side  |
| Persona card  | 600px      | 2200px    | Left column, spans all rows             |
| Stage column  | 650-700px  | 2200px    | Equal width, 6 columns                  |
| Layer row     | Full width | 350-450px | 5-6 rows within stages                  |
| Emotion curve | 4200px     | 150px     | Spans all stages, centered vertically   |
| Bottom strip  | 4900px     | 400px     | Split 40/60 between metrics and actions |

### Spacing Rules

- **Between stages**: 20px gap (tight, to show continuity)
- **Between layers**: 15px gap (tight, to show they belong to same stage)
- **Persona to first stage**: 30px gap (slight separation of context from content)
- **Title to grid**: 25px gap
- **Grid to bottom strip**: 30px gap
- **Internal cell padding**: 15px on all sides
- **Between sticky notes within a cell**: 10px

### Key Layout Principles

1. **Stage columns must be equal width** — unequal columns imply unequal importance, which may be misleading
2. **The persona card spans full height** — it is the anchor that the eye returns to
3. **The emotion curve gets its own dedicated row** — it should not be crammed into another layer
4. **Row labels appear on the left edge** — either on the persona card or as small labels in the leftmost margin
5. **Stage headers use colored banners** — each stage gets a top banner (40px tall) in the primary color

### Visual Hierarchy

- Stage headers: 22pt bold, primary color, on colored banner
- Layer labels: 14pt bold, dark gray
- Sticky note content: 12pt regular
- Metadata (dates, sources): 11pt, light gray
- Emotion curve: 3px line weight, color changes with sentiment

---

## Pattern 2: The Four-Quadrant Empathy Map

A centered, symmetrical layout that divides the board into four equal quadrants with the persona at the center. Each quadrant represents a different lens on the persona's inner and outer experience.

### Structure

```
+------------------------------------------------------------------+
|                    TITLE BANNER (full width)                      |
+------------------------------------------------------------------+
|                         |                                        |
|                         |                                        |
|      SAYS               |              THINKS                    |
|                         |                                        |
|   (Direct quotes,       |   (Internal monologue,                 |
|    verbatim language,    |    assumptions, beliefs,               |
|    social media posts)   |    worries, hopes)                    |
|                         |                                        |
+-----------+    +--------+---------+    +-------------------------|
|           |    |   [PERSONA]      |    |                         |
|           |    |   Name, Photo    |    |                         |
|           |    |   Context        |    |                         |
+-----------+    +--------+---------+    +-------------------------|
|                         |                                        |
|      DOES               |              FEELS                     |
|                         |                                        |
|   (Observable actions,   |   (Emotions, frustrations,            |
|    behaviors, habits,    |    delights, anxieties,               |
|    workarounds)          |    confidence levels)                 |
|                         |                                        |
+------------------------------------------------------------------+
|                    INSIGHTS & ACTIONS STRIP                       |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element        | Width      | Height    | Notes                              |
| -------------- | ---------- | --------- | ---------------------------------- |
| Total board    | 3500px     | 2800px    | Smaller than journey map — focused |
| Title banner   | 3400px     | 200px     | Centered                           |
| Each quadrant  | 1650px     | 1050px    | Equal size, critical               |
| Center persona | 500px      | 350px     | Circular or rounded rectangle      |
| Divider lines  | 2px weight | Full span | Light gray (#E0E0E0)               |
| Bottom strip   | 3400px     | 300px     | Insights and next steps            |

### Spacing Rules

- **Between quadrants**: 20px channel (the "cross" divider)
- **Persona to quadrant edge**: 40px clearance on all sides
- **Title to quadrants**: 25px
- **Quadrants to bottom strip**: 25px
- **Sticky notes within quadrant**: 12px apart, scattered organically (not grid-aligned)

### Key Layout Principles

1. **Perfect symmetry** — all four quadrants must be exactly equal. The brain expects balance.
2. **The center persona anchors everything** — it sits at the intersection of the dividers, overlapping all four quadrants slightly
3. **Organic placement within quadrants** — unlike the grid-strict journey map, empathy map sticky notes should feel slightly scattered, as if placed during a workshop. This communicates authenticity.
4. **Color-coded quadrants** — each quadrant gets a very subtle background tint (5-8% opacity) of its category color
5. **The divider cross is real** — use actual line elements, not just spacing, to create the four-quadrant division

---

## Pattern 3: The Character Sheet (Persona Board)

A top-to-bottom layout that progressively reveals deeper information about a single persona. The metaphor is "getting to know someone" — surface identity at the top, deep motivations at the bottom.

### Structure

```
+------------------------------------------------------------------+
|                    TITLE / PERSONA HEADER                         |
|  Photo placeholder | Name | Role | Company | Location            |
+------------------------------------------------------------------+
|                                                                    |
|  +-------------------+  +---------------------+                   |
|  |  DEMOGRAPHICS     |  |  TECH PROFILE       |                   |
|  |  Age, education,  |  |  Tools, comfort,    |                   |
|  |  income, family   |  |  digital habits     |                   |
|  +-------------------+  +---------------------+                   |
|                                                                    |
|  +-------------------+  +---------------------+                   |
|  |  GOALS            |  |  FRUSTRATIONS       |                   |
|  |  What they want   |  |  What blocks them   |                   |
|  |  to achieve       |  |  from achieving it  |                   |
|  +-------------------+  +---------------------+                   |
|                                                                    |
|  +----------------------------------------------------------+     |
|  |  A DAY IN THE LIFE                                       |     |
|  |  Morning → Workday → Evening timeline                    |     |
|  +----------------------------------------------------------+     |
|                                                                    |
|  +-------------------+  +---------------------+                   |
|  |  BEHAVIORS &      |  |  DECISION           |                   |
|  |  HABITS           |  |  DRIVERS            |                   |
|  +-------------------+  +---------------------+                   |
|                                                                    |
|  +----------------------------------------------------------+     |
|  |  KEY QUOTES (3-5 real quotes from research)              |     |
|  +----------------------------------------------------------+     |
|                                                                    |
|  +----------------------------------------------------------+     |
|  |  DESIGN IMPLICATIONS — What this persona means for us    |     |
|  +----------------------------------------------------------+     |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element           | Width       | Height    | Notes                      |
| ----------------- | ----------- | --------- | -------------------------- |
| Total board       | 3800px      | 3200px    | Portrait-oriented          |
| Header            | 3700px      | 350px     | Prominent persona identity |
| 2-column panels   | 1750px each | 400-500px | Paired information         |
| Full-width panels | 3600px      | 300-400px | Day-in-the-life, quotes    |
| Margin            | 50px        | —         | Consistent on all sides    |

### Spacing Rules

- **Between paired panels**: 40px horizontal gap
- **Between rows**: 35px vertical gap
- **Header to first row**: 40px
- **Internal padding**: 20px on all sides of each panel
- **Between sticky notes in a panel**: 10px

### Key Layout Principles

1. **Progressive depth** — identity at top, implications at bottom. The viewer "gets to know" the persona as they scroll down.
2. **Two-column pairing creates natural comparison** — Goals vs. Frustrations, Demographics vs. Tech Profile, Behaviors vs. Decision Drivers. These pairs invite comparison thinking.
3. **Full-width sections break the rhythm** — "Day in the Life" and "Key Quotes" span full width to signal they are synthesis elements, not data points.
4. **The header is magazine-style** — large photo placeholder, name in 28pt+ type, role and context as secondary text. It should feel like a profile page.
5. **Quotes get special treatment** — larger font, italic, with attribution. They are the most human element.

---

## Pattern 4: The Channel-Stage Matrix (Touchpoint Analysis)

A rigorous grid layout where rows represent channels and columns represent journey stages. Each cell contains a satisfaction score and annotations. The most analytical of all customer journey layouts.

### Structure

```
+------------------------------------------------------------------------+
|                        TITLE BANNER                                     |
+--------+---------+---------+---------+---------+---------+---------+----+
|        | AWARE   | CONSIDER| PURCHASE| ONBOARD | USE     | RENEW   |AVG |
+--------+---------+---------+---------+---------+---------+---------+----+
| WEB    | [4.2]   | [3.8]   | [3.1]   | [2.9]   | [4.0]   | [3.5]  |3.6 |
+--------+---------+---------+---------+---------+---------+---------+----+
| EMAIL  | [3.5]   | [4.1]   | [4.3]   | [3.7]   | [2.8]   | [3.9]  |3.7 |
+--------+---------+---------+---------+---------+---------+---------+----+
| APP    | [—]     | [—]     | [—]     | [3.2]   | [4.5]   | [4.0]  |3.9 |
+--------+---------+---------+---------+---------+---------+---------+----+
| PHONE  | [—]     | [3.5]   | [4.0]   | [2.1]   | [2.5]   | [3.0]  |3.0 |
+--------+---------+---------+---------+---------+---------+---------+----+
| SOCIAL | [4.0]   | [3.2]   | [—]     | [—]     | [3.8]   | [3.5]  |3.6 |
+--------+---------+---------+---------+---------+---------+---------+----+
| IN-    | [—]     | [4.5]   | [4.8]   | [—]     | [—]     | [—]    |4.6 |
| PERSON |         |         |         |         |         |         |    |
+--------+---------+---------+---------+---------+---------+---------+----+
| STAGE  | 3.9     | 3.8     | 3.6     | 2.7     | 3.5     | 3.6    |    |
| AVG    |         |         |         |         |         |         |    |
+--------+---------+---------+---------+---------+---------+---------+----+

+------------------------------------------------------------------------+
|  PRIORITY IMPROVEMENTS (sorted by impact)                              |
+------------------------------------------------------------------------+
|  HEATMAP LEGEND: [5.0 Green] [4.0 Light Green] [3.0 Yellow]           |
|                  [2.0 Orange] [1.0 Red]                                |
+------------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element              | Width        | Height | Notes                    |
| -------------------- | ------------ | ------ | ------------------------ |
| Total board          | 4500px       | 3000px | Landscape                |
| Title banner         | 4400px       | 250px  | Full width               |
| Channel label column | 350px        | —      | Left-most column         |
| Stage column         | 550-600px    | —      | Equal width, 6-7 columns |
| Row height           | 300-350px    | —      | Equal for all channels   |
| Summary row/column   | Same as data | 200px  | Averages                 |
| Priority strip       | 4400px       | 500px  | Below matrix             |

### Spacing Rules

- **Cell-to-cell**: 4px gap (tight grid, dashboard feel)
- **Grid to title**: 20px
- **Grid to priority strip**: 30px
- **Score number to annotation**: 15px vertical gap within cell
- **Internal cell padding**: 12px

### Key Layout Principles

1. **Rigid grid alignment** — every cell must be exactly the same size. This is a data visualization, not an organic layout.
2. **Color fills communicate before text** — each cell's background color reflects its score (green = 4+, yellow = 3, orange = 2, red = 1). The heatmap should be readable at 30% zoom.
3. **Summary row and column** — averages on the right edge and bottom edge create a T-shaped summary that frames the data.
4. **Annotations live inside cells** — small sticky notes or text blocks beneath the score number provide qualitative context (e.g., "NPS dropped 15 pts after redesign").
5. **The priority strip is sorted** — improvements listed by impact score, not by channel or stage order.

---

## Pattern 5: The Service Blueprint Extension

An advanced layout that extends the journey map downward to include "backstage" organizational processes. This is the most complex pattern and should only be used for service design contexts.

### Structure

```
+------------------------------------------------------------------------+
|                        TITLE BANNER                                     |
+------------------------------------------------------------------------+
|                    FRONTSTAGE (Customer-Visible)                        |
+---------+---------+---------+---------+---------+---------+------------|
| PERSONA | STAGE 1 | STAGE 2 | STAGE 3 | STAGE 4 | STAGE 5 | STAGE 6  |
|         | Actions | Actions | Actions | Actions | Actions | Actions   |
|         | Touch-  | Touch-  | Touch-  | Touch-  | Touch-  | Touch-    |
|         | points  | points  | points  | points  | points  | points    |
+---------+---------+---------+---------+---------+---------+------------|
|         |         [  EMOTION CURVE  ]                                  |
+========================================================================+
|                 LINE OF VISIBILITY (dashed line)                       |
+========================================================================+
|                    BACKSTAGE (Organization-Internal)                    |
+---------+---------+---------+---------+---------+---------+------------|
|         | Internal| Internal| Internal| Internal| Internal| Internal  |
|         | Process | Process | Process | Process | Process | Process   |
|         +---------+---------+---------+---------+---------+------------|
|         | Systems | Systems | Systems | Systems | Systems | Systems   |
|         | & Tools | & Tools | & Tools | & Tools | & Tools | & Tools   |
|         +---------+---------+---------+---------+---------+------------|
|         | Owner   | Owner   | Owner   | Owner   | Owner   | Owner     |
|         | & Team  | & Team  | & Team  | & Team  | & Team  | & Team    |
+---------+---------+---------+---------+---------+---------+------------|
|  PAIN POINTS (customer + org)  |  OPPORTUNITY MATRIX                  |
+------------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element            | Width  | Height | Notes                             |
| ------------------ | ------ | ------ | --------------------------------- |
| Total board        | 5500px | 4000px | Largest pattern                   |
| Frontstage section | 5400px | 1600px | Customer-visible layers           |
| Line of visibility | 5400px | 40px   | Dashed, bold, labeled             |
| Backstage section  | 5400px | 1200px | Organization layers               |
| Bottom analysis    | 5400px | 500px  | Split pain points / opportunities |

### Spacing Rules

- **Frontstage to line of visibility**: 30px
- **Line of visibility to backstage**: 30px
- **All other spacing**: Same as Pattern 1
- **The line of visibility is thick and prominent** — 4px dashed line in dark gray with "LINE OF VISIBILITY" label centered

### Key Layout Principles

1. **The line of visibility is the most important design element** — it physically separates what the customer sees from what the organization does. It should be impossible to miss.
2. **Frontstage and backstage columns align perfectly** — Stage 3 in frontstage sits directly above Stage 3 in backstage. This vertical alignment reveals the customer-org relationship at each stage.
3. **Backstage is visually cooler** — use slightly muted colors and smaller type to signal that this is "behind the scenes."
4. **The board is tall** — this pattern requires significantly more vertical space. Plan for at least 4000px height.

---

## Universal Layout Rules

### Alignment

- All stage columns must be exactly the same width
- All layer rows must start at the same X position
- Sticky notes within a cell should be left-aligned with consistent margins
- Numbers (scores, metrics) should be right-aligned or center-aligned within their containers

### Grid Snapping

- Use an invisible 50px grid for major element placement
- Use a 10px sub-grid for fine-tuning within cells
- All frames should snap to grid edges

### Responsive Considerations

- At 30% zoom: Only colored banners, stage headers, and the emotion curve should be legible
- At 70% zoom: Layer labels, sticky note titles, and score numbers should be readable
- At 100% zoom: All text including metadata and annotations should be clear
- Ensure minimum 11pt font for the smallest text elements

### Scroll and Navigation

- Place a mini-map legend in the top-right corner showing board sections
- Use Miro frames to enable frame-by-frame navigation
- Name every frame descriptively (e.g., "Stage 3: Purchase — Pain Points" not "Frame 12")

---

## Choosing the Right Pattern

| Pattern                 | Best For                     | Complexity | Board Size |
| ----------------------- | ---------------------------- | ---------- | ---------- |
| Horizontal Journey Grid | Full lifecycle understanding | Advanced   | 5000x3000  |
| Four-Quadrant Empathy   | Single-persona deep dive     | Simple     | 3500x2800  |
| Character Sheet         | Persona documentation        | Medium     | 3800x3200  |
| Channel-Stage Matrix    | Touchpoint optimization      | Advanced   | 4500x3000  |
| Service Blueprint       | End-to-end service design    | Expert     | 5500x4000  |

### Decision Framework

1. **"We need to understand the whole customer experience"** → Horizontal Journey Grid
2. **"We need to build empathy for a specific user"** → Four-Quadrant Empathy Map
3. **"We need to document who our customer is"** → Character Sheet
4. **"We need to optimize our channels"** → Channel-Stage Matrix
5. **"We need to connect customer experience to internal processes"** → Service Blueprint Extension

---

## Common Layout Mistakes

### 1. Unequal Stage Widths

When one stage gets more content, the temptation is to make its column wider. Resist this. Equal widths maintain the visual rhythm. If content overflows, summarize or use a linked detail frame.

### 2. Missing Row Labels

Without clear row labels (Actions, Touchpoints, Emotions, etc.), the vertical organization breaks down. Labels should be visible at 50% zoom and positioned consistently on the left edge.

### 3. Cramped Emotion Curve

The emotion curve needs its own dedicated row with at least 150px height. When it is squeezed into another row, it becomes unreadable and loses its dramatic impact.

### 4. No Visual Hierarchy in Pain Points

If all pain points look the same (same size sticky, same color), critical issues blend with minor annoyances. Use color intensity, size, or icons to signal severity.

### 5. Forgetting the Bottom Strip

The "Now What?" section at the bottom is not optional. Without it, the board is a diagnosis without a treatment plan.
