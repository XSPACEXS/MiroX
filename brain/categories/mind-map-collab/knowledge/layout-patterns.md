# Layout Patterns — Mind Map Product Collaboration

## Pattern Overview

Mind Map Product Collaboration boards use radial, organic, and hybrid layout patterns that differ significantly from the grid-based patterns of other MiRoX categories. These patterns support the natural branching structure of mind maps while accommodating real-time multi-user collaboration. The layouts must balance organic growth (ideas expanding unpredictably) with structural clarity (patterns that remain navigable as complexity increases).

---

## Pattern 1: The Classic Radial Mind Map

The foundational pattern. A central node with branches radiating outward in all directions, like a tree viewed from above.

### Structure

```
                    [Branch A]
                   /    |    \
              [A1] [A2] [A3]

[Branch F]                      [Branch B]
  / | \                          / | \
[F1][F2]     [ CENTRAL ]     [B1][B2][B3]
              [ NODE   ]
[Branch E]                      [Branch C]
  / | \                          / | \
[E1][E2]                     [C1][C2][C3]

                    [Branch D]
                   /    |    \
              [D1] [D2] [D3]
```

### Radial Layout Specifications

| Element          | Size               | Distance from Center | Notes                                 |
| ---------------- | ------------------ | -------------------- | ------------------------------------- |
| Central node     | 500-600px diameter | 0                    | Largest element, gravitational center |
| Level 1 branches | 350x180px          | 800-1000px           | First ring, evenly distributed        |
| Level 2 nodes    | 250x120px          | 1400-1600px          | Second ring                           |
| Level 3 nodes    | 200x100px          | 1800-2200px          | Third ring                            |
| Level 4 nodes    | 150x80px           | 2400-2800px          | Outermost ring                        |

### Angular Distribution

For N first-level branches, each branch occupies 360/N degrees:

- 4 branches: 90 degrees each (N, E, S, W positions)
- 5 branches: 72 degrees each
- 6 branches: 60 degrees each (clock positions: 12, 2, 4, 6, 8, 10)
- 8 branches: 45 degrees each

**Asymmetric allowance**: If branches have unequal numbers of sub-nodes, branches with more content should receive wider angular allocations. A branch with 12 sub-nodes needs more angular space than one with 3.

### Connector Styles

- **Level 0 to Level 1**: Thick (4px), branch color, slight curve
- **Level 1 to Level 2**: Medium (3px), branch color at 70% saturation, gentle curve
- **Level 2 to Level 3**: Thin (2px), branch color at 40% saturation, slight curve
- **Level 3 to Level 4**: Very thin (1px), branch color at 20% saturation
- **Cross-branch connections**: 1px dashed, neutral gray (#B2BEC3)

---

## Pattern 2: The Half-Radial (Right-Side) Mind Map

A mind map that grows primarily to the right, used when the board has a left-side panel (personal zones, reference material) or when the content flows from a starting point to expanding detail.

### Structure

```
+-----------------------------------------------------------------------+
|                                                                        |
| [REF PANEL]     [ CENTRAL ]---[Branch A]---[A1]                      |
| or               [ NODE   ]                [A2]                       |
| [PERSONAL                  |                [A3]                      |
|  ZONES]                    +---[Branch B]---[B1]                      |
|                            |                [B2]                      |
|                            +---[Branch C]---[C1]                      |
|                            |                [C2]                      |
|                            +---[Branch D]---[D1]                      |
|                                             [D2]                      |
+-----------------------------------------------------------------------+
```

### When to Use

- When combined with personal ideation zones on the left
- When the mind map represents a sequential exploration (central question leads to answers)
- When the board will be presented in reading order (left to right)

### Specifications

- Central node positioned at x=1200, y=center (leaving ~1000px on the left for panels)
- Branches fan out at angles from -60 to +60 degrees (right hemisphere only)
- Sub-branches can grow further right or slightly up/down
- Maximum recommended depth: 4 levels before horizontal space runs out on a standard board

---

## Pattern 3: The Brainstorm Convergence Layout

Designed specifically for collaborative brainstorming sessions. Combines personal ideation zones with a shared synthesis area.

### Structure

```
+-----------------------------------------------------------------------+
|                    [ QUESTION / PROMPT ]                               |
+-----------------------------------------------------------------------+
|                                                                        |
| +------+ +------+ +------+                                            |
| |ZONE 1| |ZONE 2| |ZONE 3|    +-------------------------------+      |
| |      | |      | |      |    |                               |      |
| |      | |      | |      |    |    SYNTHESIS CENTER            |      |
| +------+ +------+ +------+    |    (Shared Mind Map)           |      |
| +------+ +------+ +------+    |                               |      |
| |ZONE 4| |ZONE 5| |ZONE 6|    |    [Central] --> [Clusters]   |      |
| |      | |      | |      |    |                               |      |
| |      | |      | |      |    +-------------------------------+      |
| +------+ +------+ +------+                                            |
|                                                                        |
| [ VOTING ]  [ PRIORITY MATRIX ]  [ ACTIONS ]                         |
+-----------------------------------------------------------------------+
```

### Zone Specifications

| Element              | Size          | Position            | Background                |
| -------------------- | ------------- | ------------------- | ------------------------- |
| Question banner      | 4800 x 300px  | Top, full width     | Primary color             |
| Personal zone (each) | 700 x 600px   | Left side, 3x2 grid | Participant color at 8%   |
| Synthesis center     | 2200 x 1300px | Right side          | White with primary border |
| Voting panel         | 1500 x 400px  | Bottom left         | Light tint                |
| Priority matrix      | 1500 x 600px  | Bottom center       | White                     |
| Action items         | 1800 x 400px  | Bottom right        | Accent color tint         |

### Flow Arrows

```
Personal Zones -----> Synthesis Center -----> Voting -----> Priority -----> Actions
  (Diverge)            (Cluster)         (Converge)    (Evaluate)     (Commit)
```

Each flow arrow is a thick (3px) primary-colored connector with a label indicating the phase transition.

---

## Pattern 4: The Research Cluster Layout

Optimized for research synthesis where raw data flows into thematic clusters that generate insights.

### Structure

```
+-----------------------------------------------------------------------+
|                    [ RESEARCH HEADER ]                                 |
+-----------------------------------------------------------------------+
|                                                                        |
| +------------------------------------------------------------------+  |
| |                    RAW DATA WALL                                  |  |
| | [quote] [stat] [quote] [obs] [stat] [quote] [stat] [obs] [quote]|  |
| +------------------------------------------------------------------+  |
|        |           |           |           |           |               |
|        v           v           v           v           v               |
|   +---------+ +---------+ +---------+ +---------+ +---------+        |
|   |CLUSTER 1| |CLUSTER 2| |CLUSTER 3| |CLUSTER 4| |CLUSTER 5|       |
|   |         | |         | |         | |         | |         |        |
|   |[evidence]| |[evidence]| |[evidence]| |[evidence]| |[evidence]|   |
|   |[evidence]| |[evidence]| |[evidence]| |[evidence]| |[evidence]|   |
|   |         | |         | |         | |         | |         |        |
|   |[INSIGHT]| |[INSIGHT]| |[INSIGHT]| |[INSIGHT]| |[INSIGHT]|       |
|   +---------+ +---------+ +---------+ +---------+ +---------+        |
|        |           |           |           |           |               |
|        v           v           v           v           v               |
| +------------------------------------------------------------------+  |
| |              INSIGHTS SUMMARY — Ranked by Impact                  |  |
| +------------------------------------------------------------------+  |
|                              |                                         |
|                              v                                         |
| +------------------------------------------------------------------+  |
| |              RECOMMENDATIONS & ACTION PLAN                        |  |
| +------------------------------------------------------------------+  |
+-----------------------------------------------------------------------+
```

### Research Layout Specifications

- **Vertical flow**: Top to bottom represents the synthesis pipeline: Raw Data --> Clusters --> Insights --> Recommendations
- **Cluster columns**: 5 equal-width columns (900-1000px each), allowing horizontal comparison between themes
- **Evidence cards within clusters**: Stacked vertically, each 800x100px with left-side color bar indicating evidence type (blue=interview, green=quantitative, orange=observation)
- **Insight nodes**: Dark-colored circles at the bottom of each cluster, summarizing the cluster's key finding
- **Cross-cluster connections**: Thin dashed lines between clusters that share related evidence

---

## Pattern 5: The Decision Tree Layout

A top-down branching layout that maps decision points and their outcomes.

### Structure

```
+-----------------------------------------------------------------------+
|                  [ DECISION CONTEXT ]                                  |
+-----------------------------------------------------------------------+
|                                                                        |
|                    +==============+                                    |
|                    | ROOT         |                                    |
|                    | DECISION     |                                    |
|                    +==============+                                    |
|                   /       |        \                                   |
|                  /        |         \                                  |
|         +-------+   +--------+   +-------+                           |
|         |PATH A |   |PATH B  |   |PATH C |                           |
|         +-------+   +--------+   +-------+                           |
|         /     \       /     \       /     \                            |
|     +---+ +---+   +---+ +---+   +---+ +---+                          |
|     |A1 | |A2 |   |B1 | |B2 |   |C1 | |C2 |                         |
|     +---+ +---+   +---+ +---+   +---+ +---+                          |
|       |     |       |     |       |     |                              |
|     [OUT] [OUT]   [OUT] [OUT]   [OUT] [OUT]                          |
|                                                                        |
| [ CRITERIA MATRIX ]  [ RISK REGISTER ]  [ RECOMMENDATION ]           |
+-----------------------------------------------------------------------+
```

### Decision Tree Specifications

| Element                | Shape                   | Size      | Color                                   |
| ---------------------- | ----------------------- | --------- | --------------------------------------- |
| Root decision          | Diamond                 | 400x250px | Primary color (#6C5CE7)                 |
| Path nodes (Level 1)   | Rounded rectangle       | 350x200px | Branch color                            |
| Sub-decision (Level 2) | Diamond                 | 250x150px | Branch color, lighter                   |
| Outcome nodes          | Rectangle               | 300x180px | Green/Yellow/Red based on assessment    |
| Recommended path       | All elements along path | +10% size | Bright teal highlight + thick connector |

### Connector Styling for Decision Trees

- **Decision to options**: Thick (4px) gray lines branching downward
- **Option to sub-decision**: Medium (3px) branch-colored lines
- **Sub-decision to outcome**: Thin (2px) outcome-colored lines (green for positive, red for negative, yellow for neutral)
- **Recommended path**: Highlighted in bright teal, 5px width, overriding default colors

---

## Pattern 6: The Product Ecosystem Radial

A specialized radial layout for product mind maps with branches for features, personas, integrations, and platform.

### Structure

```
                    [ PERSONAS ]
                    (top, 12 o'clock)
                         |
                         |
[ COLLABORATION ]   [ PRODUCT ]   [ FEATURES ]
(10 o'clock)         [ VISION ]    (2 o'clock)
                      (center)
                         |
[ FAQ & SUPPORT ]        |        [ INTEGRATIONS ]
(8 o'clock)              |         (4 o'clock)
                         |
                    [ PLATFORM ]
                    (6 o'clock, with mockups)
```

### Ecosystem Layout Specifications

- **Central node**: 600x600px circle, primary color
- **Branch spacing**: 60 degrees between branches (6 branches)
- **Asymmetric sizing**: Features and Personas branches get more angular space (90 degrees each) because they contain more content; FAQ and Platform branches get 45 degrees each
- **Mockup zone**: The Platform branch extends into a flat strip along the bottom of the board showing device mockups
- **Cross-connections zone**: The area between branches is used for thin dashed lines showing relationships (e.g., Persona "Engineering Emma" connects to Integration "Jira")

---

## Advanced Technique: The Sticky Note Cluster

The organic clustering of sticky notes that forms naturally during brainstorming sessions, then gets structured into the mind map.

### Clustering Process Visual

**Before clustering (divergent phase):**

```
  [s] [s]    [s]
[s]    [s] [s]    [s]
  [s][s]  [s]
    [s]  [s] [s]
  [s]    [s]    [s]
[s]  [s]    [s] [s]
```

**After clustering (convergent phase):**

```
  +----------+    +----------+    +----------+
  | Theme A  |    | Theme B  |    | Theme C  |
  | [s] [s]  |    | [s] [s]  |    | [s] [s]  |
  | [s] [s]  |    | [s]      |    | [s] [s]  |
  | [s]      |    | [s] [s]  |    | [s]      |
  +----------+    +----------+    +----------+
```

### Clustering Guidelines

- **Minimum cluster size**: 3 stickies (fewer than 3 = merge with another cluster)
- **Maximum cluster size**: 8 stickies (more than 8 = split into sub-clusters)
- **Cluster spacing**: 100-150px between cluster boundaries
- **Cluster label**: Bold text block above the cluster naming the theme
- **Outliers**: Stickies that don't fit any cluster get placed in an "Uncategorized" area for later review

---

## Advanced Technique: Zoom-Level Design

Mind maps must work at three distinct zoom levels. Each level reveals different information.

### Zoom Level 1: Full Board (Bird's Eye)

**What is visible**: Central node label, first-level branch labels, overall map shape, color distribution
**What is NOT visible**: Sub-node text, evidence details, action items
**Design goal**: The viewer understands the map's structure and scope

### Zoom Level 2: Branch Level

**What is visible**: All nodes within one branch, sub-branch labels, brief descriptions, connection lines to neighboring branches
**What is NOT visible**: Fine detail text, metadata, deep sub-branches of OTHER branches
**Design goal**: The viewer understands one branch in depth and its relationships to adjacent branches

### Zoom Level 3: Node Level

**What is visible**: Full node content, evidence text, comments, action items, metadata
**What is NOT visible**: Most of the rest of the map
**Design goal**: The viewer reads and interacts with specific content

### Font Size Guide for Zoom Levels

| Element              | Font Size | Visible at Zoom Level |
| -------------------- | --------- | --------------------- |
| Central node title   | 42-56pt   | 1, 2, 3               |
| Branch label         | 28-36pt   | 1, 2, 3               |
| Sub-branch label     | 18-24pt   | 2, 3                  |
| Node description     | 14-16pt   | 2, 3                  |
| Evidence/detail text | 12-14pt   | 3 only                |
| Metadata             | 10-12pt   | 3 only                |

---

## Responsive Board Sizing

### Small Mind Map (3000 x 2500px)

- 3-4 first-level branches
- 2 levels of depth
- Good for quick brainstorms and focused topics
- Personal zones: 3-4 (small workshop)

### Standard Mind Map (5000 x 3500px)

- 5-7 first-level branches
- 3 levels of depth
- Good for product mind maps and research synthesis
- Personal zones: 6-8 (full workshop)

### Large Mind Map (7000 x 5000px)

- 8-10 first-level branches
- 4 levels of depth
- Good for comprehensive product ecosystem maps
- Personal zones: 10-12 (large workshop or async collaboration)

---

## Layout Composition Checklist

Before finalizing a Mind Map Product Collaboration layout, verify:

- [ ] Central node is the visual focal point of the board
- [ ] First-level branches are evenly distributed (or intentionally weighted)
- [ ] Color coding is consistent within each branch
- [ ] Connector thickness decreases with depth
- [ ] Cross-branch connections are visually distinct from within-branch connections
- [ ] Personal zones (if used) are clearly separated from the shared map
- [ ] Voting results are visually prominent
- [ ] Action items are extractable as a standalone view
- [ ] The map is readable at 3 zoom levels
- [ ] There is room for growth (the board is not already at maximum density)
- [ ] Cluster labels are clear and meaningful
- [ ] The diverge-to-converge flow is visually trackable
