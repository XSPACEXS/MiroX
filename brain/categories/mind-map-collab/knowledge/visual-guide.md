# Visual Guide — Mind Map Product Collaboration

## Premium Palette System

### The Vibrant Collaboration Palette

Mind Map Product Collaboration boards use the most colorful palette in the MiRoX Brain. Each branch gets a distinct, saturated color that is immediately identifiable. The palette balances vibrancy with readability.

| Role             | Color Name    | Hex     | Usage                           |
| ---------------- | ------------- | ------- | ------------------------------- |
| Primary / Center | Deep Violet   | #6C5CE7 | Central node, primary brand     |
| Secondary        | Aqua Teal     | #00CEC9 | Secondary highlights, synthesis |
| Accent           | Hot Pink      | #FD79A8 | Call-to-action, key priorities  |
| Branch 1         | Electric Blue | #0984E3 | Features, technical topics      |
| Branch 2         | Coral Orange  | #E17055 | Personas, user research         |
| Branch 3         | Emerald Green | #00B894 | Integrations, growth, success   |
| Branch 4         | Golden Yellow | #FDCB6E | FAQ, support, learning          |
| Branch 5         | Lavender      | #A29BFE | Platform, infrastructure        |
| Branch 6         | Magenta       | #E84393 | Collaboration, social features  |
| Branch 7         | Sky Blue      | #74B9FF | Data, analytics, research       |
| Branch 8         | Peach         | #FAB1A0 | Design, UX, visual              |
| Node Background  | White         | #FFFFFF | Sub-node fill color             |
| Board Background | Soft Lavender | #F3F0FF | Board base color                |
| Alt Background   | Soft Gray     | #F8F9FA | Neutral board base              |
| Text Dark        | Charcoal      | #2D3436 | Text on light backgrounds       |
| Text Light       | White         | #FFFFFF | Text on dark backgrounds        |
| Connection Lines | Medium Gray   | #B2BEC3 | Cross-branch connections        |

### The Saturation Gradient System

Within each branch, color saturation decreases with depth to create visual hierarchy:

| Depth Level      | Saturation | Example (for Blue #0984E3) | Usage                    |
| ---------------- | ---------- | -------------------------- | ------------------------ |
| Level 0 (Center) | 100%       | #0984E3                    | Central node fill        |
| Level 1          | 100%       | #0984E3                    | First-level branch nodes |
| Level 2          | 70%        | #4BA3E8                    | Second-level nodes       |
| Level 3          | 40%        | #A2CEF2                    | Third-level nodes        |
| Level 4          | 15%        | #E3F0FB                    | Fourth-level nodes       |
| Background tint  | 6-8%       | #F0F6FD                    | Zone background color    |

### Participant Color System

For collaborative sessions, each participant gets a unique color:

| Participant   | Color         | Hex     | Sticky Note Color |
| ------------- | ------------- | ------- | ----------------- |
| Participant 1 | Sunset Orange | #E17055 | #FDCFA1           |
| Participant 2 | Ocean Blue    | #0984E3 | #BBDEFB           |
| Participant 3 | Emerald Green | #00B894 | #C8E6C9           |
| Participant 4 | Golden Yellow | #FDCB6E | #FFF9C4           |
| Participant 5 | Lavender      | #A29BFE | #E1BEE7           |
| Participant 6 | Coral         | #FF7675 | #F8BBD0           |
| Participant 7 | Teal          | #00CEC9 | #B2DFDB           |
| Participant 8 | Magenta       | #E84393 | #F3C4D7           |

The participant color is used for:

- Personal zone background tint
- Sticky note fill in their zone
- Small contributor dot on nodes in the shared mind map
- Cursor/avatar color indicator

---

## Typography System

### Mind Map Font Hierarchy

Mind maps require a clear typographic hierarchy because content ranges from a single word (central concept) to full paragraphs (evidence cards).

| Level            | Usage                       | Size    | Weight         | Color            | Node Type       |
| ---------------- | --------------------------- | ------- | -------------- | ---------------- | --------------- |
| Central Title    | Product name, core question | 42-56pt | Bold           | White            | Central node    |
| Central Subtitle | Tagline or metric           | 16-20pt | Regular        | Aqua Teal        | Central node    |
| Branch Label     | First-level category        | 28-36pt | Bold           | Branch color     | Level 1 node    |
| Sub-Branch Label | Second-level topic          | 18-24pt | Semibold       | Branch color     | Level 2 node    |
| Node Title       | Individual idea/concept     | 14-18pt | Semibold       | Charcoal         | Level 3 node    |
| Node Description | Supporting text             | 12-14pt | Regular        | Charcoal         | Level 3-4 nodes |
| Evidence Text    | Quotes, stats, data         | 12-13pt | Regular/Italic | Charcoal         | Evidence cards  |
| Metadata         | Sources, dates, owners      | 10-11pt | Regular        | Gray (#636E72)   | Any node        |
| Sticky Note Text | Brainstorm ideas            | 14pt    | Regular        | Dark on light bg | Stickies        |

### Text Alignment in Nodes

- **Central node**: Center-aligned, both horizontally and vertically
- **Branch labels**: Left-aligned if nodes grow rightward, center-aligned if nodes are below
- **Node titles**: Left-aligned with 12px padding from node edge
- **Descriptions**: Left-aligned, wrapping within node width
- **Evidence text**: Left-aligned with a colored left bar (4px) for visual distinction

---

## Node Design System

### Central Node

```
+================================+
||                              ||
||        PRODUCT NAME          ||  <-- 48pt, white, bold, centered
||     "Tagline goes here"      ||  <-- 18pt, aqua teal, centered
||                              ||
||    48K WAU | $3.2M ARR       ||  <-- 14pt, white, key metrics
||                              ||
+================================+
```

- **Shape**: Circle or rounded rectangle (large corner radius, 20-30px)
- **Size**: 500-600px diameter (circle) or 600x400px (rounded rect)
- **Fill**: Primary color (Deep Violet #6C5CE7) at 100%
- **Border**: 4px, slightly lighter shade (#7D6FE9)
- **Shadow**: Subtle gray shadow (20% opacity, offset 8px down)

### Branch Node (Level 1)

```
+---------------------------+
| ● FEATURES               |  <-- 28pt, branch color, bold
|   12 total capabilities   |  <-- 14pt, gray, italic
+---------------------------+
```

- **Shape**: Rounded rectangle (12px corner radius)
- **Size**: 350x120px
- **Fill**: White (#FFFFFF)
- **Border**: 3px, branch color
- **Left accent**: 6px wide color strip on the left edge (branch color)

### Sub-Node (Level 2-3)

```
+---------------------------+
| Real-time Canvas          |  <-- 16pt, charcoal, semibold
| Infinite canvas with      |  <-- 12pt, charcoal, regular
| 60fps collaboration       |
+---------------------------+
```

- **Shape**: Rounded rectangle (8px corner radius)
- **Size**: 250x100px (Level 2) or 200x80px (Level 3)
- **Fill**: White (#FFFFFF)
- **Border**: 2px, branch color at 60% saturation
- **Left accent**: 4px color strip (branch color at 70%)

### Evidence Card

```
+--[Blue bar]-------------------+
| "Only 34% of new users        |  <-- 12pt, italic
|  complete the onboarding flow" |
| — Survey, Q1 2026, n=342      |  <-- 10pt, gray
+-------------------------------+
```

- **Shape**: Rectangle (4px corner radius)
- **Size**: 280x90px
- **Fill**: White
- **Border**: 1px, #DFE6E9
- **Left color bar**: 5px wide, cluster/branch color
- **Quote marks**: Use actual quotation marks for interview quotes

### Action Item Node

```
+--[Green]-------------------+
| ☐ Build health scoring v1  |  <-- 14pt, charcoal
| Owner: Morgan | Due: Mar 20 |  <-- 11pt, gray
+----------------------------+
```

- **Shape**: Rectangle with slight green tint
- **Size**: 250x70px
- **Fill**: #E8F5E9 (light green)
- **Border**: 1px, #27AE60
- **Checkbox**: Square (unchecked) or checkmark (completed)

---

## Connector & Line Design

### Within-Branch Connectors

Lines connecting nodes within the same branch:

| Connection         | Width | Color              | Style | Curve              |
| ------------------ | ----- | ------------------ | ----- | ------------------ |
| Center to Level 1  | 4px   | Branch color, 100% | Solid | Gentle curve       |
| Level 1 to Level 2 | 3px   | Branch color, 70%  | Solid | Gentle curve       |
| Level 2 to Level 3 | 2px   | Branch color, 40%  | Solid | Slight curve       |
| Level 3 to Level 4 | 1px   | Branch color, 20%  | Solid | Straight or slight |

**Curve specification**: Use Miro's curved connector type. The curve should be gentle (10-20% arc) to avoid making the map feel rigid. Organic curves suggest organic thinking.

### Cross-Branch Connectors

Lines connecting nodes in different branches:

- **Width**: 1px
- **Color**: Medium Gray (#B2BEC3)
- **Style**: Dashed (4px dash, 4px gap)
- **Arrows**: Single-direction arrow on the receiving end
- **Label**: Small text (10pt, gray, italic) at midpoint describing the relationship
- **Example**: "Enables" or "Requires" or "Supports"

### Flow Arrows (Brainstorm Sessions)

Showing the diverge-to-converge workflow:

- **Width**: 3px
- **Color**: Primary color (#6C5CE7) at 50%
- **Style**: Solid with rounded arrow tip
- **Labels**: Phase names ("Diverge", "Cluster", "Vote", "Prioritize", "Commit")

---

## Voting and Priority Visualization

### Dot Voting Display

After dot voting, display results visually:

```
Idea: "Predictive churn model"
●●●●● 5 votes  ████████████████████
Idea: "Personalized onboarding"
●●●●  4 votes   ████████████████
Idea: "Customer health scoring"
●●●●  4 votes   ████████████████
Idea: "Product-led growth loops"
●●●   3 votes    ████████████
```

- **Dots**: Small circles (10px), each in the voter's participant color
- **Bar**: Horizontal rectangle proportional to vote count, primary color
- **Labels**: Idea name (14pt) + vote count (12pt, bold)
- **Ranking**: Sorted highest to lowest

### Priority Matrix (2x2)

```
+===============================+
|  HIGH IMPACT                  |
|  +----------+  +----------+  |
|  |QUICK WINS|  |STRATEGIC |  |
|  |  (Green) |  | BETS     |  |
|  |          |  |  (Blue)  |  |
|  +----------+  +----------+  |
|  +----------+  +----------+  |
|  |NICE TO   |  |  AVOID   |  |
|  |HAVE      |  |  (Red    |  |
|  |  (Gray)  |  |   tint)  |  |
|  +----------+  +----------+  |
|  LOW IMPACT                   |
| LOW EFFORT ----- HIGH EFFORT |
+===============================+
```

Quadrant colors:

- Quick Wins (top-left): Green tint (#E8F5E9)
- Strategic Bets (top-right): Blue tint (#E3F2FD)
- Nice to Have (bottom-left): Gray tint (#F5F5F5)
- Avoid (bottom-right): Red tint (#FFEBEE)

---

## Collaboration Visual Indicators

### Personal Zone Design

```
+----------------------------------+
| 👤 Alex's Zone                   |  <-- Avatar placeholder + name
| [Participant color tint bg]      |
|                                  |
| [sticky] [sticky] [sticky]      |
| [sticky] [sticky] [sticky]      |
|                                  |
| "Drop your ideas here!"         |  <-- Instruction text, italic
+----------------------------------+
```

- **Border**: 2px, participant color
- **Background**: Participant color at 6-8% opacity
- **Header**: Participant name with small avatar circle
- **Instruction text**: 12pt italic, light gray

### Contributor Dots

When ideas from personal zones are moved to the shared mind map, add a small colored dot (8px diameter) showing who contributed the idea:

```
+---------------------------+
| Customer health scoring   | ●  <-- 8px dot, participant color
+---------------------------+
```

Multiple contributors on the same node show multiple dots stacked vertically.

---

## Board Background Options

### Option 1: Soft Lavender (Default)

- Background: #F3F0FF
- Best for: Collaborative brainstorms, creative sessions
- Pairs with: The Vibrant Collaboration Palette

### Option 2: Soft Gray (Professional)

- Background: #F8F9FA
- Best for: Product mind maps, research synthesis, decision trees
- Pairs with: Any palette variant

### Option 3: White (Clean)

- Background: #FFFFFF
- Best for: Presentation-ready maps, export/print
- Pairs with: Darker node colors for contrast

### Option 4: Dark (Night Mode)

- Background: #1A1A2E
- Best for: Evening workshops, dramatic presentations
- Pairs with: Bright, saturated node colors

---

## Print and Export Considerations

### Export as PNG/PDF

- Use white or light gray background (dark backgrounds waste ink)
- Ensure minimum 12pt font for all readable text
- Verify colors maintain contrast when printed (avoid very light pastels)
- Include the board title and date in a visible corner

### Presentation Mode

- Create Miro frames around key areas for frame-by-frame presentation
- Suggested frame order: Central node --> Each branch (clockwise) --> Voting results --> Actions
- Each frame should be self-contained (readable without context of other frames)

---

## Quality Checklist

Before considering a Mind Map Product Collaboration board visually complete:

- [ ] Central node is visually dominant and immediately identifiable
- [ ] Each branch has a unique, consistent color applied to all its nodes
- [ ] Color saturation decreases with node depth (gradient rule applied)
- [ ] Connector thickness decreases with depth
- [ ] Cross-branch connections are visually distinct (dashed, gray)
- [ ] Personal zones (if used) have clear participant color coding
- [ ] Voting results are visually clear and sorted
- [ ] Priority matrix uses appropriate quadrant colors
- [ ] Action items are clearly formatted with owners and dates
- [ ] Text hierarchy is correct (central > branch > sub-node > detail)
- [ ] The board reads as "organized thinking" not "random stickies"
- [ ] There is visual breathing room between branches
- [ ] The map looks meaningful at full zoom-out (structure is visible)
- [ ] Individual nodes are readable at close zoom (content is accessible)
