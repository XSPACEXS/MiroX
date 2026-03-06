# Visual Guide — Miro World Product Showcase

## Premium Palette System

### The Dark World Palette (Night Mode)

The signature look of Miro's original showcase boards. Deep navy backgrounds with vibrant zone colors create a dramatic, premium feel.

| Role             | Color Name    | Hex     | Usage                               |
| ---------------- | ------------- | ------- | ----------------------------------- |
| Background       | Deep Navy     | #1A1A2E | Board background, title banner      |
| Primary Pathway  | Golden Yellow | #FFD166 | Main roads, key connectors          |
| Accent Highlight | Mint Green    | #06D6A0 | Call-to-action elements, highlights |
| Zone 1           | Electric Blue | #118AB2 | Core/primary product areas          |
| Zone 2           | Coral Red     | #EF476F | Growth, marketing, urgent items     |
| Zone 3           | Purple        | #7B2CBF | Integrations, developer tools       |
| Zone 4           | Teal          | #0DB39E | Analytics, data, intelligence       |
| Zone 5           | Warm Orange   | #F78C6B | Community, ecosystem, social        |
| Zone 6           | Emerald       | #27AE60 | Success, completion, stable areas   |
| Text on Dark     | White         | #FFFFFF | All text on dark backgrounds        |
| Text on Light    | Charcoal      | #212121 | Text on zone tints                  |
| Ground/Base      | Soft Slate    | #E8E8E8 | Footer, legend backgrounds          |
| Decorative Cloud | White         | #FFFFFF | At 15-20% opacity                   |
| Decorative Star  | Pale Yellow   | #FFF9C4 | At 40-60% opacity                   |

### The Light World Palette (Day Mode)

For boards intended for print or projection in bright environments.

| Role            | Color Name   | Hex     | Usage            |
| --------------- | ------------ | ------- | ---------------- |
| Background      | Warm White   | #FAFAF8 | Board background |
| Primary Pathway | Amber Gold   | #F9A825 | Main roads       |
| Accent          | Deep Teal    | #00897B | Highlights       |
| Zone 1          | Royal Blue   | #1565C0 | Core areas       |
| Zone 2          | Deep Red     | #C62828 | Urgent areas     |
| Zone 3          | Indigo       | #4527A0 | Technical areas  |
| Zone 4          | Dark Teal    | #00695C | Data areas       |
| Zone 5          | Burnt Orange | #E65100 | Community areas  |
| Zone 6          | Forest Green | #2E7D32 | Stable areas     |
| Text            | Charcoal     | #212121 | All primary text |
| Subtle Text     | Medium Gray  | #757575 | Metadata, dates  |

### Zone Background Tint Formula

Zone backgrounds use the zone color at LOW opacity to create subtle territory markers:

- **Dark World**: Zone color at 10-15% opacity over Deep Navy
- **Light World**: Zone color at 6-10% opacity over Warm White
- **Test**: When two adjacent zones have their tints applied, the boundary should be visible but not jarring. The tints should blend at the edge, not create a hard line.

---

## Typography System

### Font Hierarchy

| Level   | Usage                     | Size    | Weight   | Color                            |
| ------- | ------------------------- | ------- | -------- | -------------------------------- |
| H1      | Board title               | 56-64pt | Bold     | White (dark) or Charcoal (light) |
| H2      | Zone/district title       | 32-42pt | Bold     | Zone color                       |
| H3      | Zone subtitle/description | 16-22pt | Regular  | Secondary text color             |
| H4      | Building/element label    | 18-24pt | Semibold | Zone color or Charcoal           |
| Body    | Building descriptions     | 12-14pt | Regular  | Charcoal or White                |
| Caption | Metadata, dates, teams    | 10-12pt | Regular  | Gray (#757575)                   |

### Text Placement Rules

- **Titles are always horizontal**: Never rotate text to match isometric angles
- **Zone titles**: Positioned at the top-left of each zone frame, with 20px padding
- **Building labels**: Centered within the building shape, or placed immediately above/below
- **Metric values**: Large (24-32pt) bold numbers with smaller (12-14pt) context labels
- **Sticky note text**: Standard Miro sticky note formatting (14pt default)

---

## Decorative Element Catalog

### Clouds

**Style**: Soft, rounded blob shapes using Miro's shape tool (circles overlapped to create cloud shapes) or simple rounded rectangles.

| Size   | Dimensions  | Opacity | Placement                |
| ------ | ----------- | ------- | ------------------------ |
| Large  | 400 x 200px | 15-20%  | Top corners, above title |
| Medium | 250 x 120px | 20-25%  | Between upper zones      |
| Small  | 150 x 80px  | 25-30%  | Scattered sky area       |

**Construction**: Overlap 3-4 circles of varying sizes, group them, set fill to white, and adjust opacity.

### Trees

**Style**: Simple triangular or circular shapes on a thin rectangle trunk.

| Type         | Construction                      | Size      | Usage                        |
| ------------ | --------------------------------- | --------- | ---------------------------- |
| Evergreen    | Green triangle on brown rectangle | 30 x 50px | Along pathways, formal areas |
| Round tree   | Green circle on brown rectangle   | 40 x 55px | Parks, casual areas          |
| Bush         | Small green oval, no trunk        | 25 x 20px | Edge decoration, dense areas |
| Tree cluster | 3-5 trees grouped                 | 80 x 60px | Open spaces between zones    |

### Human Figures

**Style**: Extremely simplified — a circle (head) connected to a small triangle or rectangle (body). Solid color, no facial features.

| Type            | Construction                | Size      | Placement                         |
| --------------- | --------------------------- | --------- | --------------------------------- |
| Standing figure | Circle + rectangle          | 10 x 25px | Near buildings, at zone entrances |
| Walking figure  | Circle + angled rectangle   | 12 x 22px | Along pathways                    |
| Seated figure   | Circle + wider rectangle    | 12 x 18px | In meeting areas, benches         |
| Group (3-4)     | Cluster of standing figures | 30 x 25px | Community zones, gathering areas  |

### Stars and Sparkles

Used exclusively on dark backgrounds.

| Type            | Shape                      | Size      | Opacity | Quantity              |
| --------------- | -------------------------- | --------- | ------- | --------------------- |
| Four-point star | Diamond rotated 45 degrees | 15 x 15px | 50-70%  | 8-12 scattered        |
| Sparkle         | Very small circle          | 5 x 5px   | 30-50%  | 15-20 scattered       |
| Feature star    | Larger five-point star     | 30 x 30px | 80%     | 2-3 near key features |

### Pathway Decorations

Elements placed alongside pathways to make them feel like real roads:

| Element         | Placement                    | Size       | Notes                           |
| --------------- | ---------------------------- | ---------- | ------------------------------- |
| Street light    | Every 400px along main paths | 8 x 30px   | Small rectangle + circle on top |
| Bench           | Near intersections or parks  | 20 x 10px  | Small rectangle                 |
| Arrow marker    | At pathway curves or forks   | 15 x 15px  | Directional arrow shape         |
| Distance marker | Along pathways               | Text block | "200m", "3 min walk"            |

---

## Building Design System

### Standard Building Shape

```
+------------------+
|  BUILDING LABEL   |
|  (Zone Color)     |
|                   |
|  Description text |
|  here in smaller  |
|  font size        |
|                   |
|  Metric: 42       |
+------------------+
```

- **Shape**: Rounded rectangle (4-8px border radius)
- **Fill**: Zone color at 100% saturation
- **Border**: Darker shade of zone color, 2px
- **Text**: Building name in bold, description in regular weight, white or charcoal depending on fill darkness
- **Size**: 400-600px wide, 200-350px tall (varies by content)
- **Shadow**: Optional dark gray rectangle at 15% opacity, offset 10px down and 5px right

### Isometric Building Enhancement

To give a flat rectangle an isometric "3D" feel:

1. **Main face** (the rectangle above) — standard treatment
2. **Top face** (optional): A parallelogram shape placed at the top of the rectangle, 20% lighter fill, creating the illusion of a roof. Height: 30-50px.
3. **Side face** (optional): A narrow rectangle on the right side of the main face, 20% darker fill, creating the illusion of depth. Width: 20-40px.

The three-face treatment should be used sparingly — on 2-3 key buildings per board, not on every element.

### Building Status Indicators

Each building can have a small colored circle (15px diameter) in its top-right corner indicating status:

| Color  | Status                 | Hex     |
| ------ | ---------------------- | ------- |
| Green  | Stable / Complete      | #27AE60 |
| Yellow | In Progress            | #F1C40F |
| Red    | Needs Attention        | #E74C3C |
| Blue   | New / Recently Updated | #3498DB |
| Gray   | Deprecated / Planned   | #95A5A6 |

---

## Connector & Pathway Visual System

### Main Pathways (Roads)

- **Width**: 4-5px
- **Color**: Golden Yellow (#FFD166 dark mode, #F9A825 light mode)
- **Style**: Solid line
- **Ends**: Rounded caps
- **Arrows**: Bidirectional arrows on major pathways
- **Labels**: 14pt text, zone color or charcoal, positioned at the midpoint of the connector

### Secondary Pathways (Sidewalks)

- **Width**: 2-3px
- **Color**: Light Gray (#BDC3C7) or Mint Green (#06D6A0)
- **Style**: Solid or dashed
- **Arrows**: Single-directional or none
- **Labels**: 12pt text, gray

### Cross-Zone Connections (Dependencies)

- **Width**: 1-2px
- **Color**: Mint Green (#06D6A0) or light purple (#A29BFE)
- **Style**: Dashed
- **Arrows**: Single-directional showing dependency direction
- **Labels**: 10-12pt text, italicized, describing the relationship

---

## Illustration Guidance for AI-Generated Content

When generating board descriptions for Miro World Product Showcases, the visual language should be described precisely enough that a builder can recreate it using Miro's native tools. Every visual element must be achievable with:

- Miro's built-in shapes (rectangles, circles, triangles, diamonds, stars)
- Text blocks with standard fonts
- Sticky notes
- Connectors (straight, curved, elbow)
- Frames
- Images (when embedding logos or photos)
- Color fills and borders

**What NOT to describe:**

- Complex illustrations that require external tools
- Gradients (Miro does not support gradient fills)
- Custom icons beyond what Miro's icon library provides
- Animations or interactive elements beyond Miro's native features
- 3D renderings that cannot be approximated with flat shapes

---

## Color Accessibility

### Contrast Requirements

- Text on dark backgrounds: Minimum 4.5:1 contrast ratio (WCAG AA)
- Text on colored zone backgrounds: Minimum 4.5:1 for body text, 3:1 for large text
- Status indicators: Must be distinguishable by shape or label in addition to color (for color-blind users)

### Color-Blind Safe Alternatives

If the board will be used by teams with known color vision deficiency:

- Replace red/green status indicators with red (x shape) / green (checkmark shape)
- Add text labels to all color-coded elements
- Use patterns (solid vs dashed vs dotted) in addition to colors for connector types
- Test the palette with a color-blindness simulator before finalizing

---

## Board Background Treatments

### Dark World Background

- Base: Deep Navy (#1A1A2E) solid fill
- Optional: Subtle grid pattern at 3-5% opacity (gray lines, 100px spacing) for alignment reference
- Sky area (top 30%): Slightly lighter (#22224E) to suggest atmosphere
- Ground area (bottom 70%): Base color with zone tints applied

### Light World Background

- Base: Warm White (#FAFAF8) solid fill
- Optional: Dot grid at 5% opacity (gray dots, 50px spacing)
- No sky/ground differentiation needed — zones provide all the structure

---

## Quality Checklist

Before considering a World Product Showcase board visually complete:

- [ ] Color palette uses 5-7 zone colors maximum
- [ ] Every zone has a consistent color applied to its background, buildings, stickies, and connectors
- [ ] Text hierarchy is correct (H1 > H2 > H3 > H4 > Body > Caption)
- [ ] All text is horizontal and readable
- [ ] Decorative elements are locked and do not obscure information
- [ ] Pathways are labeled and visually distinct (main vs secondary vs cross-zone)
- [ ] Buildings have consistent shapes and sizing within each zone
- [ ] Status indicators are present on key elements
- [ ] The board looks stunning at full zoom-out
- [ ] The board is functional at medium zoom
- [ ] Version and date markers are visible
- [ ] Legend explains all color codes and symbols
