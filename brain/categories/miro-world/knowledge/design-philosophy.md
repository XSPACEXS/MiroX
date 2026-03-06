# Design Philosophy — Miro World Product Showcase

## The Vision: Products as Living Worlds

The Miro World Product Showcase category represents the pinnacle of visual communication on Miro. It transforms abstract product portfolios, feature sets, and organizational structures into navigable isometric worlds — cities, campuses, landscapes, and terrains where every building, road, and park has meaning. This is not decoration. This is cognitive architecture.

The philosophy behind these boards draws from a single profound insight: **people understand spaces better than lists**. A product roadmap in a spreadsheet is data. A product roadmap as a city with districts, roads connecting them, and buildings representing features is a _place_ — and places are remembered, explored, and discussed in fundamentally different ways than data.

---

## Core Principles

### 1. Spatial Metaphor as Primary Language

The most important design decision in a World Product Showcase board is the choice of spatial metaphor. The metaphor is not a skin applied over information — it IS the information architecture.

**Why spatial metaphors work:**

- Human brains evolved to navigate physical spaces. We have dedicated neural circuits (hippocampal place cells, grid cells) for spatial reasoning. When you map information to space, you activate these circuits, making the information more memorable and navigable.
- Spatial layouts encode relationships implicitly. Two buildings close together are related. A road connecting two districts means flow between them. A building that is larger is more important. These relationships would require explicit labels in a flat layout but are automatic in a spatial one.
- Spatial metaphors invite exploration. A list says "read me top to bottom." A world says "explore me." This shift from passive consumption to active exploration changes how stakeholders engage with product information.

**Choosing the right metaphor:**

| Metaphor            | Best For                                             | Why It Works                                                                             |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| City / Metropolis   | Large product portfolios with many teams             | Cities have districts, buildings, roads — natural hierarchy and connection               |
| University Campus   | Organization structures with departments             | Campuses have buildings (departments), paths (processes), common areas (shared services) |
| Landscape / Terrain | Feature sets that evolve over time                   | Mountains = mature features, valleys = gaps, rivers = user flows                         |
| Island Archipelago  | Products/services that are independent but connected | Each island = a product, bridges = integrations, ocean = the market                      |
| Theme Park          | Customer-facing product showcases                    | Zones = product areas, rides = features, pathways = user journeys                        |
| Space Station       | Technical infrastructure                             | Modules = services, corridors = APIs, power systems = databases                          |

**The cardinal rule:** The metaphor must serve the information, not the other way around. If you find yourself distorting the information to fit the metaphor, choose a different metaphor.

### 2. Isometric Perspective as Design Language

Isometric projection (a form of axonometric projection where all three coordinate axes are equally foreshortened) is the visual signature of World Product Showcase boards. It creates a 3D appearance without vanishing points, which means every element on the board is the same scale regardless of position — critical for accurate information representation.

**Why isometric, not flat:**

- **Depth without distortion**: Isometric gives the feeling of a 3D world without the perceptual distortion of true perspective. Far objects are the same size as near objects, so information hierarchy is not corrupted by position.
- **Consistent scale**: Every building, road, and element occupies a proportionally accurate space. A large feature looks large everywhere on the board.
- **Nostalgia and delight**: Isometric perspective evokes beloved video games (SimCity, RollerCoaster Tycoon, Monument Valley). This triggers positive emotional associations — the board becomes a place people want to visit.
- **Miro compatibility**: Miro is a 2D canvas. True 3D would require a different tool. Isometric is the sweet spot — it feels 3D but is built with 2D shapes, rectangles, and connectors.

**Achieving isometric in Miro:**

You cannot draw true isometric in Miro natively (no isometric grid). Instead, you simulate it:

- Use parallelogram shapes rotated to 30-degree angles for "building" faces
- Stack rectangles with offset to create depth
- Use color gradients (lighter top, darker sides) to suggest 3D surfaces
- Place elements on a consistent diagonal grid (elements align on 30-degree lines)
- Use shadows (dark rectangles with low opacity, offset down-right) to ground elements
- Decorative elements (clouds, trees, people) are placed flat but styled to match the isometric feel

**When to break isometric:**

- Text should always be horizontal and readable — never rotated to match the isometric angle
- Data-heavy sections (tables, charts, metrics) should be flat and clear
- Legend and navigation elements are flat UI
- If the board needs to be quickly scannable (e.g., a status dashboard overlay), flat sections are acceptable within the isometric world

### 3. Color as Zoning System

In a physical city, districts are recognized by their architecture and character. In a Miro world, districts are recognized by color. Color is not decoration — it is the primary wayfinding system.

**Color zoning principles:**

- **One dominant color per district/zone**: Each product area, department, or feature cluster gets a single identifying color. This color appears in the zone's background tint, building shapes, sticky notes, and connectors.
- **Background tints, not solid fills**: Zone backgrounds use the zone color at 8-12% opacity over a shared base color (usually white or dark navy). This creates subtle territory markers without visual clashing.
- **Color consistency across all elements**: If the Core Platform district is blue, then its buildings are blue, its sticky notes are light blue, its connectors leaving the zone are blue, and any reference to Core Platform elsewhere on the board uses blue.
- **Neutral connectors for cross-zone paths**: Roads and pathways connecting zones should be a neutral color (golden yellow is the standard for Miro-style worlds) to avoid visual confusion about which zone they belong to.
- **A limited palette (5-7 zone colors max)**: More than 7 zones and the brain cannot maintain distinct color associations. If you have more than 7 zones, group them into meta-zones with shared color families (e.g., two shades of blue for two related departments).

**The Miro World standard palette:**

| Zone Role            | Suggested Color           | Hex                |
| -------------------- | ------------------------- | ------------------ |
| Primary / Hero zone  | Deep Navy or Charcoal     | #1A1A2E or #2D3436 |
| Pathway / Connectors | Golden Yellow             | #FFD166 or #F1C40F |
| Accent / Highlights  | Mint Green or Bright Teal | #06D6A0 or #00CEC9 |
| Zone 1               | Electric Blue             | #118AB2            |
| Zone 2               | Coral Red                 | #EF476F            |
| Zone 3               | Purple                    | #7B2CBF            |
| Zone 4               | Teal                      | #0DB39E            |
| Zone 5               | Warm Orange               | #F78C6B            |
| Zone 6               | Emerald                   | #27AE60            |

### 4. Decorative Elements as Atmosphere

World Product Showcase boards use decorative elements extensively — clouds, stars, trees, small human figures, vehicles, animals. These elements are not informational. They serve three critical purposes:

**Purpose 1: Emotional tone setting**

A board full of rectangles and text is a diagram. A board with trees along the pathways, clouds drifting across the sky, and tiny people walking between buildings is a _world_. The decorative elements signal to the viewer: "This is not a typical document. This is something special that deserves your attention and exploration."

**Purpose 2: Scale and context**

Tiny human figures near a building instantly communicate the building's relative size. Trees along a pathway tell you the pathway is a walkable road, not an abstract connector. These elements provide visual anchors that make the metaphor feel real.

**Purpose 3: Visual breathing room**

Dense information needs gaps. Decorative elements fill the spaces between districts and zones, preventing the board from feeling like a crowded spreadsheet. They are visual padding that makes the board comfortable to explore.

**Rules for decorative elements:**

- They should NEVER overlap or obstruct informational elements
- They should be locked (not editable) so collaborators don't accidentally move them
- They should use muted colors (low opacity or light tints) so they stay in the background
- They should be consistent in style — if you use flat icon-style trees, all trees should be flat icon-style
- A few well-placed decorative elements are better than a hundred scattered ones
- Clouds go at the top or floating. Trees go at ground level. Stars go in the sky (if the background is dark)

### 5. Narrative Flow Through Physical Pathways

In a traditional board, flow is implied by reading order (left-to-right, top-to-bottom) or explicit arrows. In a World Product Showcase, flow is communicated through **pathways** — visual roads, bridges, and corridors that connect zones.

**Pathway design principles:**

- **Main pathways** (the primary navigation routes) should be wide (4-5px), prominently colored (golden yellow is standard), and connect the major zones in a logical sequence
- **Secondary pathways** (cross-zone connections) should be thinner (2px), a different color (mint green or light gray), and often dashed to distinguish from main roads
- **Every pathway should be labeled**: "Data flows to Intelligence", "Core APIs power bridges", "Growth metrics to Hub" — the label tells you what travels along that road
- **Pathways should form a coherent network**: If you trace the main pathways, they should form a route that visits every major zone. This route becomes the presentation path — the order in which you "tour" the board
- **Dead ends are intentional**: A zone with one entrance and no exit is a destination, not a waypoint. This communicates that this zone is a terminal point (e.g., a reporting dashboard — data flows in but nothing flows out)

### 6. Information Density Gradient

World boards have a gradient of information density: sparse at the overview level, dense within individual zones.

**The zoom-level mental model:**

- **Zoomed out (see the whole board)**: You should see colored zones, major pathways, and large titles. No detail text should be readable. The board should look like a beautiful city map.
- **Medium zoom (see a zone)**: You should see building labels, zone descriptions, and pathway connections to other zones. Some sticky notes become readable.
- **Zoomed in (see a building)**: You should see all details — feature descriptions, metrics, team info, status stickies, and fine-grain connectors.

This gradient is achieved through font size discipline:

| Zoom Level             | Text Type                   | Font Size |
| ---------------------- | --------------------------- | --------- |
| Board title            | Main headline               | 56-64pt   |
| Zone/district title    | Section header              | 32-42pt   |
| Zone subtitle          | Section description         | 16-22pt   |
| Building/element label | Item title                  | 18-24pt   |
| Building detail        | Description text            | 12-14pt   |
| Metadata               | Dates, versions, team names | 10-12pt   |

### 7. Living Document, Not Static Poster

Unlike a presentation deck that is created once and delivered, a World Product Showcase board is a **living document** that evolves over time.

**Designed for evolution:**

- **Sticky notes are the update mechanism**: The permanent structures (buildings, roads, zones) represent stable architecture. Sticky notes represent current state — they can be added, moved, and removed as things change.
- **Status indicators**: Each building or element should have a visual status (green = stable, yellow = in progress, red = needs attention). These indicators are the part of the board that changes most frequently.
- **Version and date markers**: Always include "Last updated: [date]" and "Version: [quarter]" on the board. This signals to viewers whether the information is current.
- **Quarterly refresh cycle**: The recommended cadence is a full board refresh quarterly (update all districts, metrics, and status) with weekly sticky note updates by zone owners.

---

## Anti-Patterns: What Makes a World Board Fail

### Anti-Pattern 1: Metaphor Overcorrection

Forcing every piece of information into the spatial metaphor. Not everything needs to be a "building." Sometimes a table or chart within a zone is the right way to present data.

### Anti-Pattern 2: Decoration Over Information

So many decorative elements that the actual information is hard to find. The world should enhance information access, not bury it. If someone cannot extract the key insight from a zone within 10 seconds of looking at it, the decoration is too heavy.

### Anti-Pattern 3: No Navigation Story

Zones scattered randomly without clear pathways between them. The board looks pretty but has no flow — viewers do not know where to start or where to go next. Every world needs a front door and a guided tour.

### Anti-Pattern 4: Inconsistent Scale

Buildings of wildly different sizes that do not reflect their actual importance. A minor feature as a giant building and a critical feature as a small box breaks the spatial metaphor's implicit meaning.

### Anti-Pattern 5: Text Overload

Every building crammed with paragraphs of text. Buildings should have titles and brief labels. Detailed descriptions belong in linked sub-boards or documents.

### Anti-Pattern 6: Static Cemetery

A beautifully designed board that was never updated after creation. The board becomes a museum piece — impressive but useless. Build update mechanisms into the design from day one.

---

## The Emotional Impact

A great World Product Showcase board achieves something that no other format can: it makes people **proud** of the product. When a team sees their work represented as a thriving city with growing districts, connected pathways, and measurable outcomes, they feel a sense of ownership and accomplishment that a Jira backlog never provides.

This emotional resonance is not a side effect — it is a design goal. These boards are shown at all-hands meetings, printed as posters for office walls, shared with investors, and used in recruiting presentations. They are the showpiece of the product organization.

**The ultimate test**: Would someone who has never seen your product understand its scope, structure, and ambition by exploring this board for 5 minutes? If yes, the board succeeds.

---

## Inspiration Sources

- **Miro's "What's New" showcase boards**: The original inspiration. Miro's own isometric product update boards set the standard for this category.
- **SimCity and city-builder games**: The visual language of top-down city views with zoned districts.
- **Theme park maps**: Disney and Universal Studios maps that transform complex venues into explorable illustrated worlds.
- **Illustrated campus maps**: University campus maps that make institutional complexity feel approachable and navigable.
- **Monument Valley (game)**: Isometric perspective used to create beautiful, impossible architectural spaces.
- **Information architecture diagrams**: The structural thinking behind how information is organized and connected.

---

## Summary: The Three Tests

Every Miro World Product Showcase board should pass three tests:

1. **The Glance Test**: At full zoom-out, does the board look like a beautiful, organized world with clear zones and pathways? (Tests visual design)
2. **The Tour Test**: Can a presenter "walk through" the board zone by zone, following pathways, and tell a coherent story? (Tests narrative flow)
3. **The Update Test**: Can a zone owner update their area in under 5 minutes without breaking the overall design? (Tests maintainability)

If the board passes all three, it is ready to be the crown jewel of your product organization's communication.
