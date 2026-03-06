# Layout Patterns — Miro World Product Showcase

## Pattern Overview

World Product Showcase boards require advanced layout patterns that go beyond standard grid-based Miro designs. These patterns create the spatial metaphors — cities, campuses, landscapes — that make the boards memorable and navigable. This guide covers the specific layout techniques needed to build GOD-LEVEL showcase worlds.

---

## Pattern 1: The Isometric City Grid

The foundational pattern for most World Product Showcase boards. Districts are arranged on a diagonal grid that simulates an isometric bird's-eye city view.

### Structure

```
        +--------+        +--------+
       /  Zone A  \      /  Zone B  \
      /   (1500px)  \  /   (1400px)  \
     +--------+      +--------+
          \              /
           \   +----+   /
            \  |Hub |  /
             \ |    | /
              \+----+/
          /              \
         /                \
    +--------+        +--------+
   /  Zone C  \      /  Zone D  \
  /   (1500px)  \  /   (1400px)  \
 +--------+      +--------+
```

### Layout Rules

- **Diagonal alignment**: Zones are positioned on 30-degree diagonal lines from the central hub, simulating isometric perspective
- **Central hub**: The product hub or headquarters occupies the exact center of the board, slightly smaller than the surrounding zones to create a focal convergence point
- **Zone spacing**: 200-300px gaps between zones filled with pathway connectors and decorative elements
- **Staggered rows**: Zones in the same row are offset vertically by 100-200px to break rigid horizontal alignment and create depth
- **Size proportionality**: The most important zones are 10-20% larger than secondary zones

### Dimensions Guide

| Element        | Width       | Height      | Notes                    |
| -------------- | ----------- | ----------- | ------------------------ |
| Full board     | 5000-6000px | 3500-4500px | Landscape orientation    |
| Title banner   | 4800px      | 350-450px   | Full width, top of board |
| Central hub    | 1000-1200px | 700-900px   | Center of board          |
| Major zone     | 1400-1600px | 900-1100px  | Largest zones            |
| Minor zone     | 1100-1300px | 700-900px   | Smaller zones            |
| Legend/footer  | 4800px      | 250-350px   | Full width, bottom       |
| Pathway width  | 4-5px       | Variable    | Main routes              |
| Decorative gap | 200-300px   | Variable    | Between zones            |

### Building the Grid Step by Step

1. Place the board title banner spanning the full width at y=0
2. Calculate the center point of the remaining space (after title and footer)
3. Place the central hub at the center point
4. Position major zones at 4 cardinal diagonal positions (upper-left, upper-right, lower-left, lower-right)
5. Offset each zone slightly from perfect diagonal alignment for organic feel
6. Fill the gaps with decorative elements and pathway connectors
7. Place the legend/footer at the bottom spanning full width

---

## Pattern 2: The Campus Corridor Layout

Used for department campuses and organizational structures. Buildings (frames) line up along a central corridor or "main street" with branching paths to secondary areas.

### Structure

```
+-----------------------------------------------------------------------+
|                          [ TITLE ]                                     |
+-----------------------------------------------------------------------+
|                                                                        |
|  [Building A]    [Building B]    [Building C]    [Building D]         |
|      |               |               |               |                |
|  ====|===============|===============|===============|=========       |
|      |          MAIN CORRIDOR        |               |                |
|  ====|===============|===============|===============|=========       |
|      |               |               |               |                |
|  [Building E]    [Building F]    [Building G]    [Building H]         |
|                                                                        |
|                    [Central Square]                                    |
|                                                                        |
+-----------------------------------------------------------------------+
```

### Layout Rules

- **Main corridor**: A horizontal band (80-120px tall) running through the center of the board, filled with golden yellow color at 20% opacity, representing the primary walkway
- **Buildings on both sides**: Zones/frames line up above and below the main corridor, connected by perpendicular paths
- **Regular spacing**: Equal distance between buildings creates rhythm (400-500px center-to-center)
- **Central square**: An expanded area at the corridor's midpoint for a gathering space or overview zone
- **Entry point**: The left end of the corridor is the "entrance" — place the most introductory zone there
- **Exit point**: The right end is the "conclusion" — place summary or next-steps zone there

### When to Use

- Organization charts with many departments
- Process flows that follow a sequence (left to right = time/progression)
- Product lines that are peer-level (not hierarchical)

---

## Pattern 3: The Landscape Terrain Layout

Used for feature landscapes and capability maps. Instead of buildings on a grid, features are represented as terrain features (mountains, valleys, rivers, forests) on a sweeping landscape.

### Structure

```
+-----------------------------------------------------------------------+
|  ☁️    ☁️         [ FEATURE LANDSCAPE ]          ☁️     ☁️            |
|                                                                        |
|     /\    /\                          /\     /\                       |
|    /  \  /  \   Mountain Range       /  \   /  \                     |
|   / Mt \/ Mt \  (Mature Features)   / Mt \ / Mt \                    |
|  /  A   \ B   \                    /  C   \ D    \                   |
| /________\______\                 /________\______\                   |
|                                                                        |
|  ~~~ River of User Flow ~~~~~~~~~~~~~~~~~~~~~~~~~~>                   |
|                                                                        |
|   [Valley A]        [Valley B]        [Valley C]                     |
|   (Emerging         (Experimental     (Deprecated                    |
|    Features)         Features)         Features)                     |
|                                                                        |
|  🌲🌲🌲 Forest of Integrations 🌲🌲🌲                                 |
+-----------------------------------------------------------------------+
```

### Terrain Mapping

| Terrain Feature | Meaning                              | Visual Treatment                                       |
| --------------- | ------------------------------------ | ------------------------------------------------------ |
| Mountains       | Mature, stable features              | Tall triangular shapes, solid colors, detailed content |
| Hills           | Growing features                     | Smaller mounds, medium detail                          |
| Valleys         | Feature gaps or emerging areas       | Low areas between mountains, lighter colors            |
| Rivers          | User flows or data flows             | Curved blue lines flowing across the landscape         |
| Forests         | Integration ecosystems               | Clusters of tree shapes with labels                    |
| Lakes           | Data repositories or knowledge bases | Blue oval shapes with labels                           |
| Roads/Paths     | Process flows or connections         | Dashed brown lines following terrain                   |
| Bridges         | Cross-functional connections         | Arch shapes over rivers                                |

### Layout Rules

- **Horizon line at 40% from top**: The sky takes up the top 40% (clouds, title, atmospheric elements), the ground takes up the bottom 60%
- **Depth through vertical position**: Elements higher on the board appear "further away" (smaller, lighter colors). Elements lower appear "closer" (larger, more saturated)
- **Left-to-right progression**: The landscape flows from established (left) to emerging (right), like a journey from known territory to frontier
- **Natural curves**: Use curved connectors, not straight lines. Nothing in nature is perfectly straight

---

## Pattern 4: The Archipelago Island Layout

Used for products or services that are independent but connected. Each product/service is an island surrounded by "water," connected by bridges or boat routes.

### Structure

```
+-----------------------------------------------------------------------+
|                  [ PRODUCT ARCHIPELAGO ]                               |
|                                                                        |
|         🏝️ Island A          🌊🌊🌊        🏝️ Island B              |
|        (Product 1)          Bridge         (Product 2)                |
|         ~~~~~~~~~          =========        ~~~~~~~~~                 |
|                                                                        |
|    🌊🌊          🏝️ Hub Island 🌊🌊           🌊🌊                   |
|                  (Platform Core)                                      |
|                   ~~~~~~~~~~~                                         |
|                                                                        |
|         🏝️ Island C          🌊🌊🌊        🏝️ Island D              |
|        (Product 3)          Ferry          (Product 4)                |
|         ~~~~~~~~~          - - - -          ~~~~~~~~~                 |
+-----------------------------------------------------------------------+
```

### Layout Rules

- **Blue/ocean background**: The board background is ocean blue (dark blue or teal at low opacity) to establish the water metaphor
- **Islands as rounded frames**: Each product/service is a rounded-corner frame with a "shore" effect (light gradient at edges)
- **Hub island at center**: The core platform or shared service is the central island, larger than others
- **Bridges vs Ferries**: Strong integrations = solid bridges (thick connectors). Weak or planned integrations = dashed lines (ferries)
- **Island size = product importance**: Larger island = more significant product
- **Floating labels**: Connector labels float in the "water" between islands

---

## Pattern 5: The Vertical Skyline Layout

Used for hierarchical product structures where there is a clear top-to-bottom importance gradient. The board looks like a city skyline viewed from the front.

### Structure

```
+-----------------------------------------------------------------------+
|                     ☁️        ☁️       ☁️                             |
|                  +------+                                              |
|                  | CORE |                                              |
|            +-----| PROD |-----+                                       |
|            |     |      |     |                                        |
|      +-----+     +------+     +-----+                                 |
|      |FEAT |     |      |     |FEAT |                                 |
|      | A   |     | FEAT |     | C   |                                 |
|      |     |  +--| B    |--+  |     |                                 |
|  +---+     |  |  |      |  |  |     +---+                             |
|  |SUB|     |  |  +------+  |  |     |SUB|                             |
|  |FT |  +--+  +--+      +--+  +--+  |FT |                             |
|  | 1 |  |SUB|  |SUB|    |SUB|  |SUB|  | 6 |                           |
|  +---+  |FT |  |FT |    |FT |  |FT |  +---+                           |
|  ========| 2 |==| 3 |====| 4 |==| 5 |==========                       |
|          +---+  +---+    +---+  +---+                                  |
|                    [ FOUNDATION LAYER ]                                |
+-----------------------------------------------------------------------+
```

### Layout Rules

- **Tallest building = most important feature/product**: Height directly communicates importance
- **Foundation strip at bottom**: A shared infrastructure or platform layer grounds all buildings
- **Buildings touch the foundation**: Every building sits on the foundation strip, showing dependency
- **Bridges between buildings at various heights**: Cross-connections at different levels show different types of integration
- **Sky at top with decorative clouds**: The open space above the tallest building creates visual breathing room
- **Front-facing perspective**: Unlike isometric, this is a direct front view — simpler to build but less spatially immersive

---

## Pattern 6: The Hub-and-Spoke Layout

The simplest world layout. A central hub with zones radiating outward like spokes of a wheel. Used when all zones have equal relationship to the center.

### Structure

```
              [Zone A]
                 |
    [Zone F]  ---+---  [Zone B]
                 |
          [  HUB  ]
                 |
    [Zone E]  ---+---  [Zone C]
                 |
              [Zone D]
```

### Layout Rules

- **Central hub**: 800-1200px diameter, centered on the board
- **Equal spoke length**: All zones are equidistant from center (800-1200px)
- **Even angular distribution**: If 6 zones, each is 60 degrees apart. If 8, each is 45 degrees apart.
- **Spoke connectors**: Thick lines (4-5px) from hub to each zone, each colored with the zone's color
- **Zone size consistency**: All zones are the same size (or within 10% variation) to maintain the "equal importance" message
- **Outer ring for details**: A second ring of smaller detail frames can extend from each zone

---

## Pattern 7: The Timeline World Layout

Used for "What's New" showcases and roadmap presentations. The world is laid out along a timeline, with past, present, and future zones.

### Structure

```
+-----------------------------------------------------------------------+
|                    [ WHAT'S NEW — 2026 ]                              |
|                                                                        |
|  [ Q1 ZONE ]                                                          |
|  Released features                                                    |
|  as buildings on      [ Q2 ZONE ]                                     |
|  solid ground         Planned features                                |
|                       as buildings under     [ Q3 ZONE ]              |
|                       construction           Future features          |
|                                              as blueprints/           |
|                                              wireframes               |
|                                                                        |
|  ========= TIMELINE ROAD ================================>            |
|  "Past"              "Present"              "Future"                  |
+-----------------------------------------------------------------------+
```

### Layout Rules

- **Left to right = past to future**: This matches natural reading direction and time perception
- **Past zones (left)**: Solid, detailed, fully colored buildings. Checkmark indicators. "Shipped" labels.
- **Present zones (center)**: Partially built structures. Construction crane decorative elements. Active status indicators.
- **Future zones (right)**: Wireframe-style outlines. Blueprint aesthetics (white lines on blue). "Coming soon" labels.
- **Timeline road**: A thick horizontal connector spanning the full board width, with quarter/month markers
- **Diagonal staggering**: Each time period is slightly lower than the previous, creating a cascading flow that draws the eye forward

---

## Advanced Technique: Layered Depth

For the most immersive boards, create visual depth through layering:

### Layer 1 — Background (Locked)

- Board background color
- Large atmospheric elements (sky gradient, ground plane)
- Decorative clouds, distant mountains, horizon line

### Layer 2 — Infrastructure (Locked)

- Main pathways and roads (golden yellow lines)
- Zone background tints (colored rectangles at low opacity)
- Grid guides and alignment marks (hidden in final version)

### Layer 3 — Structures (Semi-locked)

- Zone frames with backgrounds
- Building shapes with labels
- Connector lines between zones

### Layer 4 — Content (Editable)

- Sticky notes with current status and updates
- Metric displays
- Comment pins and discussion threads
- Status indicators (traffic lights)

### Layer 5 — Decorative Overlay (Locked)

- Trees, people, vehicles positioned between structures
- Stars, sparkles, highlight effects
- Zone boundary decorations

**Locking strategy**: Layers 1, 2, and 5 are locked to prevent accidental editing. Layer 3 is semi-locked (only zone owners can modify). Layer 4 is fully editable by all team members.

---

## Responsive Sizing Guide

### Small Board (3000 x 2000px)

- 3-4 zones maximum
- Simplified decorative elements
- Larger relative text sizes (minimum 14pt for detail text)
- Best for: Small product showcases, department overviews

### Standard Board (5000 x 3500px)

- 5-7 zones
- Full decorative treatment
- Standard text size hierarchy
- Best for: Most product world maps, what's new showcases

### Large Board (7000 x 5000px)

- 8-12 zones
- Extensive decorative elements
- Smaller minimum text (10pt for metadata)
- Requires good use of Miro frames for navigation
- Best for: Enterprise product portfolios, multi-department campuses

### Extra Large Board (10000 x 7000px)

- 12+ zones
- Maximum decorative density
- Must use Miro's presentation mode for guided tours
- Requires section owners for maintenance
- Best for: Company-wide overviews, annual reports, conference showcases

---

## Layout Composition Checklist

Before finalizing a World Product Showcase layout, verify:

- [ ] Central/anchor zone is immediately identifiable
- [ ] All zones are connected by visible pathways
- [ ] Color zoning is clear and consistent
- [ ] Text hierarchy supports three zoom levels (full board, zone, detail)
- [ ] Decorative elements fill gaps without obstructing information
- [ ] Legend/key exists explaining color codes and status indicators
- [ ] Version/date marker is visible
- [ ] Presentation path exists (can walk through the board zone by zone)
- [ ] Nothing important is hidden behind or under other elements
- [ ] Board looks beautiful at full zoom-out
- [ ] Board is functional at medium zoom
- [ ] Board is detailed at full zoom-in
