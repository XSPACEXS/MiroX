# Visual Guide — Customer Journey Boards

## Overview

Customer journey boards carry an unusual visual burden: they must simultaneously feel empathetic (this is about a real person), analytical (this is backed by data), and actionable (this is driving decisions). The visual design must serve all three masters without favoring one over the others.

This guide covers color palettes, typography, element choices, contrast strategies, decorative elements, and accessibility considerations for all four customer journey board types.

---

## Color Palettes

### Palette 1: Ocean & Coral (The Classic)

The default palette for customer journey boards. Ocean blue signals professionalism and trust. Warm coral signals human emotion and urgency. Gold signals opportunity and attention.

| Role       | Color       | Hex     | Usage                                         |
| ---------- | ----------- | ------- | --------------------------------------------- |
| Primary    | Ocean Blue  | #0D47A1 | Headers, stage banners, primary borders       |
| Secondary  | Warm Coral  | #FF7043 | Pain points, negative emotions, alerts        |
| Accent     | Sunny Gold  | #FFB300 | Opportunities, highlights, call-to-action     |
| Positive   | Sage Green  | #4CAF50 | Satisfaction, delight moments, resolved items |
| Neutral    | Pewter Gray | #757575 | Metadata, secondary text, dividers            |
| Background | Cloud White | #F5F5F5 | Board background, card backgrounds            |
| Text       | Graphite    | #212121 | Primary text, labels, data                    |
| Subtle     | Soft Sky    | #E1F5FE | Persona card background, subtle highlights    |

**When to use**: General-purpose journey maps, B2B SaaS products, professional services, healthcare.

**Why it works**: Blue is the world's most universally liked color and signals competence. Coral creates immediate emotional contrast against the blue backdrop — pain points literally "warm up" the board. Gold draws the eye to opportunities without clashing with either blue or coral.

**Emotional logic**:

- Blue areas = "this is the system" (stages, structure, headers)
- Coral areas = "this is the pain" (problems, friction, drop-off)
- Gold areas = "this is the opportunity" (improvements, innovations)
- Green areas = "this is working" (satisfaction, delight)

### Palette 2: Earth & Ember (The Warm Palette)

A warmer palette suited for consumer products, lifestyle brands, and contexts where emotional warmth matters more than corporate authority.

| Role       | Color         | Hex     | Usage                                     |
| ---------- | ------------- | ------- | ----------------------------------------- |
| Primary    | Deep Espresso | #3E2723 | Headers, labels, structural elements      |
| Secondary  | Burnt Sienna  | #D84315 | Pain points, frustrations, urgent moments |
| Accent     | Amber Gold    | #FF8F00 | Opportunities, highlights, CTA            |
| Positive   | Forest Sage   | #2E7D32 | Satisfaction, positive moments            |
| Neutral    | Warm Stone    | #8D6E63 | Secondary text, supporting elements       |
| Background | Cream         | #FFF8E1 | Board background                          |
| Text       | Dark Walnut   | #1B1B1B | Primary text                              |
| Subtle     | Light Sand    | #FFECB3 | Card backgrounds, subtle fills            |

**When to use**: Consumer products, retail, hospitality, food & beverage, lifestyle brands.

**Why it works**: The warm palette removes corporate sterility and creates an inviting atmosphere. Espresso and sienna feel organic and human. The cream background softens the overall tone.

### Palette 3: Violet & Mint (The Modern Palette)

A contemporary palette for tech-forward products, digital-native audiences, and brands that want to feel fresh and innovative.

| Role       | Color         | Hex     | Usage                              |
| ---------- | ------------- | ------- | ---------------------------------- |
| Primary    | Deep Violet   | #4A148C | Headers, stage banners, structural |
| Secondary  | Hot Rose      | #E91E63 | Pain points, negative emotions     |
| Accent     | Electric Teal | #00BFA5 | Opportunities, positive highlights |
| Positive   | Bright Lime   | #76FF03 | Delight moments, success states    |
| Neutral    | Cool Gray     | #90A4AE | Secondary text, metadata           |
| Background | Off White     | #FAFAFA | Board background                   |
| Text       | Near Black    | #1A1A1A | Primary text                       |
| Subtle     | Lavender      | #E8EAF6 | Card backgrounds                   |

**When to use**: Tech products, apps, digital platforms, fintech, gaming, social media.

**Why it works**: Violet signals innovation and premium quality. Hot rose creates urgency for pain points. Electric teal brings a fresh, digital-native energy to opportunities.

### Palette 4: Monochrome & Signal (The Data Palette)

A restrained palette for analytical boards (especially touchpoint analysis) where data readability matters more than emotional warmth.

| Role       | Color       | Hex     | Usage                   |
| ---------- | ----------- | ------- | ----------------------- |
| Primary    | Charcoal    | #37474F | All structural elements |
| Score 5    | Deep Green  | #1B5E20 | Excellent performance   |
| Score 4    | Light Green | #66BB6A | Good performance        |
| Score 3    | Amber       | #FFA726 | Needs attention         |
| Score 2    | Orange Red  | #E64A19 | Poor performance        |
| Score 1    | Deep Red    | #B71C1C | Critical failure        |
| Background | Pure White  | #FFFFFF | Clean data backdrop     |
| Text       | Dark        | #212121 | All text                |
| Grid       | Light Gray  | #E0E0E0 | Grid lines, dividers    |

**When to use**: Touchpoint analysis, satisfaction heatmaps, performance matrices, data-heavy boards.

**Why it works**: By stripping away decorative color, the heatmap scoring becomes the only color signal. The eye immediately finds red cells (problems) and green cells (strengths) without distraction.

---

## Typography

### Type Hierarchy

Customer journey boards are text-heavy. Without a strict type hierarchy, the board collapses into an unreadable wall of similar-looking text.

| Level             | Size | Weight    | Color                  | Used For                                       |
| ----------------- | ---- | --------- | ---------------------- | ---------------------------------------------- |
| Board Title       | 42pt | Bold      | White on Primary       | The main title banner                          |
| Subtitle          | 18pt | Regular   | Light tint on Primary  | Persona name, date, scope                      |
| Stage Header      | 22pt | Bold      | Primary color          | Stage names (Awareness, Consideration...)      |
| Layer Label       | 14pt | Bold      | Dark gray              | Row labels (Actions, Touchpoints, Emotions...) |
| Sticky Note Title | 13pt | Semi-bold | Per sticky color rules | First line of a sticky note                    |
| Sticky Note Body  | 12pt | Regular   | Dark                   | Content within sticky notes                    |
| Metadata          | 11pt | Regular   | Pewter gray            | Dates, sources, version numbers                |
| Score Number      | 24pt | Bold      | Varies by score        | Satisfaction scores in touchpoint matrix       |
| Quote             | 14pt | Italic    | Secondary color        | Customer quotes                                |
| Annotation        | 10pt | Regular   | Light gray             | Small contextual notes                         |

### Typography Rules

1. **Maximum three font sizes visible at any zoom level** — if you can see four different sizes simultaneously, the hierarchy is too complex
2. **Bold is for labels and numbers only** — body text should never be bold, or everything looks like a label
3. **Italic is reserved for quotes** — when italic text appears, the viewer should immediately think "this is a real person speaking"
4. **Color reinforces hierarchy** — titles are white-on-color, headers are colored-on-white, body text is dark-on-white. Never invert this.
5. **Score numbers are the largest element in data cells** — in touchpoint analysis, the number comes first, the annotation second

---

## Element Choices

### When to Use Sticky Notes

Sticky notes are the primary content element for customer journey boards. They imply "this was observed" or "this was said" — which aligns perfectly with research-driven journey mapping.

**Use sticky notes for**:

- Customer actions at each stage
- Touchpoints
- Pain points
- Opportunities
- Direct quotes
- Workshop-generated insights

**Sticky note sizing**:

- Standard: 200x200px (for short items like a single action)
- Wide: 300x150px (for longer text like quotes or detailed pain points)
- Compact: 150x100px (for supplementary items or annotations)

**Sticky note color coding** (using Palette 1):

| Color        | Hex Fill | Use Case                       |
| ------------ | -------- | ------------------------------ |
| Sky Blue     | #E1F5FE  | Customer actions and behaviors |
| White        | #FFFFFF  | Touchpoints and channels       |
| Warm Pink    | #FFEBEE  | Pain points and frustrations   |
| Light Gold   | #FFF9C4  | Opportunities and improvements |
| Light Green  | #E8F5E9  | Delight moments and strengths  |
| Light Purple | #F3E5F5  | Internal/backstage notes       |

### When to Use Shapes

Shapes replace sticky notes when you need structure, containment, or visual weight that sticky notes cannot provide.

**Use shapes for**:

- Persona cards (rounded rectangle with photo placeholder)
- Stage banners and headers (rectangle with colored fill)
- Score containers in touchpoint matrix (circle or rounded square)
- Emotion curve data points (small circles connected by lines)
- Summary panels (large rounded rectangle)
- Status badges ("In Progress," "Critical," "Resolved")

**Shape sizing guidelines**:

- Persona card: 500-600px wide, 200-350px tall
- Stage banner: Full column width, 40-50px tall
- Score circle: 60-80px diameter
- Status badge: 100x30px

### When to Use Lines and Connectors

Lines serve three purposes on customer journey boards:

1. **The emotion curve** — a continuous line connecting emotion data points across all stages. This is the most visible line on the board. Use 3px weight, with color changing based on sentiment (green above neutral, coral below).

2. **Grid dividers** — subtle lines (1px, #E0E0E0) separating stages and layers. They provide structure without visual weight.

3. **Connection arrows** — occasional arrows showing causal relationships (e.g., "high wait time" → "abandoned cart"). Use sparingly — 2px weight, secondary color, with arrowhead.

### When to Use Icons

Use icons sparingly and consistently:

- **Channel icons**: Phone, email, web, app, in-person (in touchpoint rows)
- **Emotion icons**: Simple faces (happy, neutral, sad) to supplement the emotion curve
- **Priority icons**: Star, flag, or exclamation mark for high-priority items
- **Status icons**: Check (resolved), warning triangle (at risk), X (critical)

Keep icons to 24-32px size. They should supplement text, never replace it.

---

## Contrast and Readability

### The 3:1 Rule for Backgrounds

Every text element must have at least 3:1 contrast ratio against its background. For customer journey boards, this means:

- Dark text (#212121) on white/light backgrounds (#F5F5F5, #FFFFFF): ~15:1 — excellent
- White text on Primary blue (#0D47A1): ~8:1 — excellent
- Dark text on light yellow (#FFF9C4): ~14:1 — excellent
- Dark text on light pink (#FFEBEE): ~14:1 — excellent

### Problem Areas

- **Coral text on white background**: #FF7043 on white = 3.3:1 — barely passes. Use coral for fills, not text.
- **Gold text on white background**: #FFB300 on white = 2.5:1 — FAILS. Never use gold for text on white.
- **Light gray text on white**: #BDBDBD on white = 1.8:1 — FAILS. Use #757575 minimum for secondary text.

### Visual Weight Distribution

The board should have a balanced visual weight:

- **Top**: Heavy (title banner with strong color fill)
- **Left**: Medium (persona card with background tint)
- **Center**: Dense but structured (the journey grid)
- **Bottom**: Grounded (summary strip with clear boundaries)
- **Right edge**: Light (white space buffer)

This creates a stable composition that feels anchored rather than floating.

---

## Decorative Elements

### The Emotion Curve

The emotion curve is the signature visual element of customer journey boards. It transforms a grid of data into a story with a dramatic arc.

**Construction**:

1. Define emotion values at each stage (1-5 scale, where 3 is neutral)
2. Plot points at the center of each stage column, at the Y position corresponding to their value
3. Connect points with a smooth bezier curve (not straight line segments)
4. Color the curve: green (#4CAF50) when above 3, coral (#FF7043) when below 3
5. Add small circular data points (10px) at each stage
6. Label each point with the emotion descriptor ("Excited," "Frustrated," "Relieved")

**Visual rules**:

- The curve should span the full width of all stage columns
- Vertical range: 150px minimum (100px feels cramped)
- Neutral line (value 3) should be a subtle dashed line (#E0E0E0)
- The highest point and lowest point should have enlarged circles (15px) and bold labels

### Stage Transition Markers

Between stages, subtle visual markers can signal the transition:

- A thin vertical gradient line (10px wide) that fades from one stage's background to the next
- A small "duration" label between stages: "~2 weeks" or "~3 days"
- An optional small icon representing the transition trigger

### Persona Card Visual Treatment

The persona card deserves special visual attention because it grounds the entire board in human reality:

- **Photo placeholder**: 80-100px circle with a light border in the primary color. Use a generic silhouette or initial letter.
- **Name in large type**: 22-24pt, bold. This is the most prominent text on the card.
- **Quote callout**: The persona's defining quote should have a left border bar (4px, secondary color) and italic text. It should feel like a pull-quote in a magazine article.
- **Background**: Subtle tint of the primary color (5-8% opacity) to distinguish it from the grid area.

---

## Accessibility Considerations

### Color Blindness

The most common form of color blindness (deuteranopia) makes red and green indistinguishable. Since customer journey boards heavily rely on red=bad, green=good:

1. **Always pair color with a second signal**: Use shapes (triangle for pain, circle for neutral, star for opportunity) alongside color
2. **In the touchpoint matrix**: Add the numerical score prominently — do not rely solely on cell background color
3. **For the emotion curve**: Use solid line for positive and dashed line for negative, in addition to color change
4. **Test with a color blindness simulator** before finalizing palette choices

### Text Size Minimums

- No text smaller than 10pt anywhere on the board
- Primary reading text (sticky notes, labels): 12pt minimum
- At 50% zoom, the smallest readable text should be stage headers (22pt displays as ~11pt)

### Cognitive Load

- Maximum 8 sticky notes per cell (beyond this, summarize)
- Maximum 6-7 stages on a journey map (beyond this, consolidate)
- Maximum 6-8 channels on a touchpoint matrix
- Use progressive disclosure: the board should be scannable at low zoom and detailed at high zoom

---

## Element Combinations

### The Perfect Sticky Note

```
+----------------------------------+
|  [Channel Icon] Website          |  <- 13pt semi-bold, dark
|                                  |
|  Visits pricing page 3 times     |  <- 12pt regular, dark
|  over 2 weeks, compares plans,   |
|  downloads PDF comparison sheet  |
|                                  |
|  Source: Hotjar session #1247    |  <- 10pt, gray
+----------------------------------+
    Background: #E1F5FE (sky blue)
    Border: none
    Size: 250x180px
```

### The Perfect Score Cell (Touchpoint Matrix)

```
+----------------------------------+
|                                  |
|           [3.1]                  |  <- 24pt bold, orange
|                                  |
|   Wait time: 12 min avg         |  <- 11pt, dark gray
|   NPS dropped 15pts in Q4       |  <- 11pt, dark gray
|   Action: Reduce to <5 min      |  <- 11pt, bold coral
|                                  |
+----------------------------------+
    Background: #FFF3E0 (light orange, score=3)
    Border: 1px #E0E0E0
```

### The Perfect Pain Point Sticky

```
+----------------------------------+
|  !! CRITICAL                     |  <- 12pt bold, white on red badge
|                                  |
|  "I had to explain my issue      |  <- 13pt italic, dark
|   to three different people"     |
|                                  |
|  47% of support tickets          |  <- 12pt, dark
|  involve transfer-related        |
|  complaints                      |
|                                  |
|  Impact: -18 NPS points          |  <- 11pt bold, coral
+----------------------------------+
    Background: #FFEBEE (light pink)
    Border: 2px left border, #C62828
    Size: 280x200px
```

---

## Cross-References

- **06-Design-UX**: Visual patterns for user flow boards share DNA with journey boards
- **14-Data-Analytics**: Dashboard visual patterns apply to the touchpoint analysis matrix
- **08-Workshops**: Workshop board visual language (organic sticky placement) influences empathy maps
- **04-Marketing**: Funnel visualization colors and hierarchy patterns
