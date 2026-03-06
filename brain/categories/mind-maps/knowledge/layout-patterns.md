# Mind Maps — Layout Patterns

## Overview

Layout is the skeleton of a mind map. Before any content is written, before any colors are chosen, the spatial structure must be defined. A well-chosen layout pattern determines how naturally viewers will navigate the map, how easily new ideas can be added, and how effectively the map communicates its message at every zoom level.

This document presents five distinct layout patterns for mind map boards, each suited to different content types, team sizes, and presentation contexts. Each pattern includes spacing rules, alignment principles, and guidance on how to adapt it for varying amounts of content.

---

## Pattern 1: Classic Radial (Sunburst)

The original mind map pattern. A central node radiates outward in all directions, with primary branches at roughly equal angular intervals and sub-branches extending further outward.

### When to Use

- Open brainstorming with no predetermined structure
- Topic exploration where all branches are equally important
- Creative ideation sessions where organic growth is valued
- When the central question/topic is clearly defined

### ASCII Diagram

```
                          [Branch B]
                         /    |    \
                       B1    B2    B3
                      /
           [Branch A]              [Branch C]
           /   |   \                /   |   \
         A1   A2   A3            C1   C2   C3
        /                                    \
       A1a                                   C3a

              \       [CENTER]       /
               \         |         /
                \        |        /

           [Branch F]              [Branch D]
           /   |   \                /   |   \
         F1   F2   F3            D1   D2   D3
                      \
                       [Branch E]
                      /    |    \
                    E1    E2    E3
```

### Spatial Rules

**Center Node**:

- Position: Exact geometric center of the board
- Size: 350-500px wide, 200-300px tall
- The center should occupy no more than 5% of total board area

**Primary Branches (Level 1)**:

- Count: 4-8 branches (6 is the sweet spot for most topics)
- Angular spacing: Evenly distributed (360 / N degrees apart)
- Distance from center: 600-900px from center edge to branch edge
- Branch node size: 250-350px wide, 150-200px tall
- Recommended angular positions for 6 branches:
  - 0 (right), 60, 120, 180 (left), 240, 300

**Secondary Branches (Level 2)**:

- Count: 2-5 per primary branch
- Distance from parent: 300-500px
- Node size: 180-250px wide, 100-150px tall
- Fan angle: Sub-branches spread 30-60 degrees from parent's radial line

**Tertiary Branches (Level 3)**:

- Count: 1-3 per secondary branch
- Distance from parent: 200-350px
- Node size: 150-200px wide, 80-120px tall
- These should be the outermost elements

**Connector Lines**:

- Center to Level 1: 4-6px width, solid, slightly curved (Bezier)
- Level 1 to Level 2: 3-4px width, solid, curved
- Level 2 to Level 3: 2-3px width, solid or dashed, curved
- Curve amount: 15-25% deflection from straight line (organic feel)

### Spacing Rules

| Gap Type                   | Minimum | Recommended | Maximum |
| -------------------------- | ------- | ----------- | ------- |
| Between Level 1 branches   | 150px   | 250px       | 400px   |
| Between Level 2 siblings   | 80px    | 120px       | 200px   |
| Between Level 3 siblings   | 50px    | 80px        | 150px   |
| Branch to unrelated branch | 200px   | 350px       | 500px   |

### Scaling Guidelines

- **Small map (3-4 branches, <20 nodes)**: Board size 3000x3000px, center at (1500, 1500)
- **Medium map (5-6 branches, 20-50 nodes)**: Board size 5000x5000px, center at (2500, 2500)
- **Large map (7-8 branches, 50-100 nodes)**: Board size 7000x7000px, center at (3500, 3500)
- **Massive map (8+ branches, 100+ nodes)**: Board size 10000x10000px, center at (5000, 5000)

---

## Pattern 2: Hemispheric (Right-Side Expansion)

A variation where the central topic sits on the left edge and all branches extend rightward in a tree-like pattern. This leverages the Western left-to-right reading pattern and works exceptionally well for presentations and storytelling.

### When to Use

- Presenting a mind map to an audience (screen/projector)
- When there is a natural narrative flow from general to specific
- Hierarchical topics where depth matters more than breadth
- Integration with timelines or process flows

### ASCII Diagram

```
                                          ├── A1a
                              ├── A1 ─────┤
                              │           └── A1b
               ├── Branch A ──┤
               │              ├── A2
               │              └── A3 ──── A3a
               │
               │              ├── B1
[CENTER] ──────┼── Branch B ──┤
               │              ├── B2 ──── B2a
               │              └── B3
               │
               │              ├── C1 ──── C1a
               ├── Branch C ──┤
               │              └── C2
               │
               └── Branch D ──┼── D1
                              ├── D2
                              └── D3 ─────┬── D3a
                                          └── D3b
```

### Spatial Rules

**Center Node**:

- Position: Left side of board, vertically centered
- X position: 5-10% of board width
- Size: 350-450px wide, 250-350px tall

**Primary Branches (Level 1)**:

- Stacked vertically with equal spacing
- X offset from center: 500-700px
- Vertical spacing between branches: 400-600px (scales with content)
- Node size: 280-350px wide, 120-180px tall

**Secondary Branches (Level 2)**:

- X offset from parent: 400-550px
- Vertical spacing: 150-250px
- Node size: 200-280px wide, 80-130px tall

**Tertiary Branches (Level 3)**:

- X offset from parent: 300-450px
- Vertical spacing: 100-150px
- Node size: 150-220px wide, 70-100px tall

**Total Board Dimensions**:

- Width: 4000-8000px (depth drives width)
- Height: 2500-6000px (branch count drives height)

### Eye Flow

The viewer's eye follows a modified F-pattern:

1. Fixate on center (left edge, large node)
2. Scan rightward along the first/top branch
3. Return to center column, drop down to next branch
4. Repeat

This pattern is natural for document-oriented thinkers and integrates seamlessly with presentation workflows.

---

## Pattern 3: Cluster Cloud (Affinity Groups)

Rather than hierarchical branching, this pattern organizes ideas into distinct spatial clusters (clouds) arranged around a central theme. Each cluster is a self-contained group of related items, and cross-cluster connections reveal surprising relationships.

### When to Use

- Affinity mapping / card sorting results
- Topic clustering after brainstorming
- When relationships between groups matter as much as the groups themselves
- Research synthesis with multiple themes

### ASCII Diagram

```
    ┌─────────────────┐                    ┌─────────────────┐
    │   CLUSTER A      │                    │   CLUSTER B      │
    │  ┌──┐ ┌──┐ ┌──┐ │                    │  ┌──┐ ┌──┐      │
    │  │A1│ │A2│ │A3│ │ ·  ·  ·  ·  ·  ·  │  │B1│ │B2│      │
    │  └──┘ └──┘ └──┘ │                    │  └──┘ └──┘      │
    │  ┌──┐ ┌──┐      │                    │  ┌──┐ ┌──┐ ┌──┐ │
    │  │A4│ │A5│      │                    │  │B3│ │B4│ │B5│ │
    │  └──┘ └──┘      │                    │  └──┘ └──┘ └──┘ │
    └─────────────────┘                    └─────────────────┘
              \                                   /
               \          ┌──────────┐           /
                ·  ·  ·  ·│  CENTER  │·  ·  ·  ·
               /          └──────────┘           \
              /                                   \
    ┌─────────────────┐                    ┌─────────────────┐
    │   CLUSTER C      │                    │   CLUSTER D      │
    │  ┌──┐ ┌──┐      │                    │  ┌──┐ ┌──┐ ┌──┐ │
    │  │C1│ │C2│      │                    │  │D1│ │D2│ │D3│ │
    │  └──┘ └──┘      │ ·  ·  ·  ·  ·  ·  │  └──┘ └──┘ └──┘ │
    │  ┌──┐            │                    │  ┌──┐ ┌──┐      │
    │  │C3│            │                    │  │D4│ │D5│      │
    │  └──┘            │                    │  └──┘ └──┘      │
    └─────────────────┘                    └─────────────────┘

    ·  ·  · = cross-cluster connections (dashed lines)
```

### Spatial Rules

**Center Node**:

- Position: Geometric center of the board
- Size: 300-400px wide, 200-250px tall
- Purpose: States the overall topic or question

**Cluster Frames**:

- Count: 3-8 clusters (4-6 is ideal)
- Arrangement: Roughly circular around center, or grid-based for 4+ clusters
- Frame size: 600-1200px wide, 400-800px tall (scales with item count)
- Distance from center: 700-1200px (edge of center to edge of cluster)
- Background: Subtle tinted fill (10-15% opacity of cluster color)
- Border: 2-3px, cluster color, rounded corners (12-16px radius)

**Items Within Clusters**:

- Type: Sticky notes (primary), text blocks (secondary)
- Arrangement: Grid or free-form within the cluster frame
- Sticky note size: 150-200px square
- Gap between stickies: 20-40px
- Cluster title: Top of frame, bold, 20-24px font

**Cross-Cluster Connectors**:

- Style: Dashed, 2-3px, neutral color (gray or muted)
- These connect specific items in different clusters
- Keep to 3-7 cross-connections (more becomes spaghetti)
- Label connectors with the nature of the relationship

### Scaling Guidelines

- **Small (3 clusters, <15 items)**: Board 3500x3500px
- **Medium (4-5 clusters, 15-35 items)**: Board 5000x5000px
- **Large (6-8 clusters, 35-60 items)**: Board 7000x7000px

---

## Pattern 4: Vertical Cascade (Top-Down Tree)

A gravity-driven pattern where the central topic sits at the top and branches cascade downward. Each level represents increasing depth or specificity. This pattern feels natural for hierarchical topics and reads like an organizational chart.

### When to Use

- Hierarchical knowledge structures (taxonomy, ontology)
- Concept decomposition (breaking a big idea into parts)
- Decision trees or classification systems
- When the topic has a clear top-level entry point

### ASCII Diagram

```
                    ┌──────────────────────┐
                    │       CENTER          │
                    │   "Main Topic"        │
                    └──────────┬───────────┘
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                   │
     ┌──────┴──────┐    ┌─────┴──────┐    ┌──────┴──────┐
     │  Branch A    │    │  Branch B   │    │  Branch C    │
     └──────┬──────┘    └─────┬──────┘    └──────┬──────┘
            │                  │                   │
       ┌────┼────┐        ┌───┼───┐          ┌────┼────┐
       │    │    │        │   │   │          │    │    │
      A1   A2   A3      B1  B2  B3        C1   C2   C3
       │                      │                   │
      A1a                    B2a                 C2a
      A1b                    B2b
```

### Spatial Rules

**Center Node**:

- Position: Top-center of the board
- Y position: 5-8% of board height
- Size: 400-600px wide, 200-280px tall

**Level 1 Nodes**:

- Y offset from center: 350-500px
- Horizontal spacing: Equally distributed across board width
- Minimum horizontal gap: 200px between siblings
- Node size: 280-400px wide, 150-200px tall

**Level 2 Nodes**:

- Y offset from parent: 280-400px
- Centered under their parent node
- Horizontal spread: Within parent's horizontal territory
- Node size: 200-300px wide, 100-150px tall

**Level 3 Nodes**:

- Y offset from parent: 200-300px
- Node size: 150-250px wide, 80-120px tall

**Connector Lines**:

- Vertical connectors from parent bottom-center to child top-center
- Style: Solid, 3-4px for Level 0-1, 2-3px for Level 1-2, 1-2px for Level 2-3
- For multiple children: Use a horizontal distribution bar (a horizontal line at the midpoint) with vertical drops to each child

### Board Dimensions

- Width: Driven by the widest level (usually Level 2 or 3)
- Height: Driven by depth (number of levels)
- Typical: 5000-8000px wide, 3000-6000px tall

---

## Pattern 5: Dual-Core (Comparison/Tension)

A specialized pattern for mind maps that explore two contrasting themes, compare two options, or map tensions between opposing forces. Two central nodes sit side by side, each radiating their own branches, with a shared zone in the middle for overlapping ideas.

### When to Use

- Comparing two products, strategies, or approaches
- Exploring tensions (e.g., "Short-term vs Long-term")
- Before/after analysis
- Pros vs cons at depth
- Mapping two perspectives on the same topic

### ASCII Diagram

```
     [Branch A1]                                      [Branch B1]
      /      \                                         /      \
    A1a      A1b                                     B1a      B1b

   [Branch A2]        ┌───────────────┐         [Branch B2]
    /    \            │               │          /    \
  A2a    A2b         │   OVERLAP     │        B2a    B2b
                     │   ZONE        │
  ┌─────────┐        │  (shared      │        ┌─────────┐
  │ CORE A  │◄──────►│   ideas)      │◄──────►│ CORE B  │
  └─────────┘        │               │        └─────────┘
                     └───────────────┘
   [Branch A3]                                  [Branch B3]
    /    \                                       /    \
  A3a    A3b                                   B3a    B3b

   [Branch A4]                                  [Branch B4]
```

### Spatial Rules

**Core Nodes (2)**:

- Core A position: 25% of board width, 50% of board height
- Core B position: 75% of board width, 50% of board height
- Size: 350-450px wide, 200-280px tall each
- Gap between cores: 800-1200px (to allow overlap zone)

**Overlap Zone**:

- Position: Centered between the two cores
- Size: 500-800px wide, 400-700px tall
- Background: Blended gradient or neutral color
- Frame with dashed border to indicate shared territory

**Branches**:

- Core A branches extend leftward and upward/downward
- Core B branches extend rightward and upward/downward
- Same spacing rules as Classic Radial for each half

**Cross-Core Connectors**:

- Connect specific items in Core A's branches to items in Core B's branches
- Route through or near the overlap zone
- Style: Dashed, labeled, distinct color (e.g., gold or purple)

### Board Dimensions

- Width: 6000-9000px (needs horizontal space for two hemispheres)
- Height: 4000-7000px (scales with branch count per side)

---

## Universal Layout Principles

These principles apply regardless of which pattern you choose:

### Grid Alignment

Even in organic layouts, invisible grid lines should guide placement. Use Miro's grid snapping or define a virtual grid:

- **Macro grid**: 200-500px cells for positioning major elements
- **Micro grid**: 20-50px cells for aligning edges and maintaining consistent gaps
- Elements don't need to snap to the grid perfectly, but their centers or edges should roughly align along grid lines

### Visual Hierarchy Through Size

```
Level 0 (Center):  Font 28-36px, Node 350-500px wide    ████████████
Level 1 (Branch):  Font 20-26px, Node 250-400px wide    ████████
Level 2 (Sub):     Font 16-20px, Node 180-280px wide    ██████
Level 3 (Detail):  Font 12-16px, Node 150-220px wide    ████
Level 4 (Note):    Font 10-14px, Node 120-180px wide    ███
```

### Eye Flow Patterns

Different layouts create different reading patterns:

| Pattern          | Primary Eye Flow                    | Secondary Eye Flow           |
| ---------------- | ----------------------------------- | ---------------------------- |
| Classic Radial   | Center-out spiral                   | Branch-by-branch clockwise   |
| Hemispheric      | Left-to-right sweep                 | Top-to-bottom within columns |
| Cluster Cloud    | Center then nearest cluster         | Clockwise through clusters   |
| Vertical Cascade | Top-to-bottom                       | Left-to-right within levels  |
| Dual-Core        | Left core, right core, then overlap | Branch exploration per side  |

### White Space Zones

Define explicit white space zones in your layout:

1. **Breathing Zone**: 100-200px margin around every major element group
2. **Separation Zone**: 200-400px gap between branches or clusters that should feel distinct
3. **Connection Zone**: The space where connectors run — keep it clear of overlapping elements
4. **Expansion Zone**: Empty space at the periphery reserved for future additions (at least 15% of total board area)

### Responsive Sizing

When the amount of content changes, the layout should adapt gracefully:

**Adding more branches**:

- Classic Radial: Reduce angular spacing proportionally, never below 30 degrees per branch
- Hemispheric: Increase vertical spacing, extend board height
- Cluster Cloud: Add new clusters in next available position, expand board
- Vertical Cascade: Extend width to accommodate more siblings per level

**Adding more depth (sub-branches)**:

- Classic Radial: Extend board outward from center, maintain radial proportions
- Hemispheric: Extend board rightward
- Cluster Cloud: Increase cluster frame sizes
- Vertical Cascade: Extend board downward

**Removing content**:

- Collapse empty space inward toward center
- Maintain minimum spacing rules (don't let things get too tight even with less content)
- Consider switching to a simpler pattern if content shrinks significantly

### Zone Design

Each layout should define clear zones that serve specific purposes:

1. **Title Zone**: Where the board title, date, and author info lives (typically top-left or as part of center node)
2. **Content Zone**: Where the actual mind map exists (the majority of the board)
3. **Legend Zone**: Where color-coding keys, icon explanations, and navigation guides are placed (typically bottom-left or bottom-right, 300-500px)
4. **Action Zone**: Where next steps, decisions, or action items are collected (typically bottom or right edge)
5. **Meta Zone**: For board instructions, last-updated timestamps, or facilitator notes (typically a small frame in a corner)

### Connector Routing

Connectors should never:

- Cross through the center of unrelated nodes
- Create 90-degree angles (use curves)
- Stack on top of each other without visual distinction
- Cross more than 2 other connectors

Connectors should:

- Follow the natural flow direction of the pattern
- Use curved paths (quadratic or cubic Bezier)
- Have consistent start/end attachment points (center of node edge)
- Be visually distinct from frame borders (different color or weight)

---

## Choosing the Right Pattern

Use this decision framework:

```
Is the topic hierarchical with a clear "root"?
├── Yes → Is there a natural reading direction?
│         ├── Yes, left-to-right → Pattern 2: Hemispheric
│         ├── Yes, top-to-bottom → Pattern 4: Vertical Cascade
│         └── No, explore freely → Pattern 1: Classic Radial
└── No  → Are you comparing two things?
          ├── Yes → Pattern 5: Dual-Core
          └── No  → Are items naturally in groups?
                    ├── Yes → Pattern 3: Cluster Cloud
                    └── No  → Pattern 1: Classic Radial (default)
```

### Pattern Compatibility Matrix

| Content Type              | Best Pattern     | Good Alternative | Avoid            |
| ------------------------- | ---------------- | ---------------- | ---------------- |
| Open brainstorm           | Classic Radial   | Cluster Cloud    | Vertical Cascade |
| Topic decomposition       | Vertical Cascade | Hemispheric      | Dual-Core        |
| Research synthesis        | Cluster Cloud    | Classic Radial   | Hemispheric      |
| Presentation/storytelling | Hemispheric      | Vertical Cascade | Cluster Cloud    |
| Comparison/evaluation     | Dual-Core        | Cluster Cloud    | Hemispheric      |
| Concept mapping           | Classic Radial   | Vertical Cascade | Dual-Core        |
| Affinity mapping          | Cluster Cloud    | Classic Radial   | Vertical Cascade |

---

## Advanced Layout Techniques

### Technique: Asymmetric Radial

When branches have vastly different amounts of content, the Classic Radial pattern can look lopsided. The solution is asymmetric spacing — give more angular territory to content-heavy branches:

```
Content-heavy branch (8 sub-items):  90 degrees of angular space
Content-light branch (2 sub-items):  45 degrees of angular space
```

### Technique: Nested Frames for Depth

For deep hierarchies (4+ levels), nest frames within frames:

- Level 1: Large frame with subtle background color
- Level 2: Medium frame within the Level 1 frame, slightly different shade
- Level 3: Sticky notes within the Level 2 frame
- This creates a visual Russian nesting doll effect that communicates depth

### Technique: Gravity Lanes

In the Hemispheric pattern, create invisible horizontal "swim lanes" that group related branches by theme. All branches related to "Customer" flow along one lane, all branches related to "Product" flow along another. This adds a second organizational dimension to the tree.

### Technique: Heat Mapping Through Density

In the Cluster Cloud pattern, cluster size communicates volume — a cluster with 15 items is visually larger than one with 3 items. This density-as-data technique gives viewers an instant sense of "where the action is" without reading any text.

### Technique: Temporal Radial

For mind maps that evolve over time (e.g., weekly brainstorm additions), use concentric rings:

- Inner ring: Week 1 ideas
- Middle ring: Week 2 additions
- Outer ring: Week 3 additions
  Each ring uses a different shade of the branch color, creating a visual history of when ideas were added.
