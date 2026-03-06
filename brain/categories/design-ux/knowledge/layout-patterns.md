# Design & UX Boards — Layout Patterns

## Overview

Design boards require layouts that are themselves exemplary design work. A wireframe
board with poor alignment undermines the wireframes it contains. A user flow board with
tangled connectors contradicts the clarity it aims to document. The layout IS the
message. This guide presents five layout patterns for design and UX boards, each
optimized for a different stage of the design process.

---

## Pattern 1: The Flow Canvas

**Best for**: User flow diagrams, information architecture maps, task analysis
**Design stage**: Architecture and structure

The Flow Canvas uses a directed graph layout where screens are nodes and user actions
are edges. The flow moves primarily left-to-right with vertical branches for decision
points and error states.

```
+=========================================================================+
|  USER FLOW: Onboarding — New User Sign-Up                               |
+=========================================================================+
|                                                                         |
|  [Landing]                                                              |
|     |                                                                   |
|     v                                                                   |
|  [Sign Up Form] ---error---> [Error State: Invalid Email]               |
|     |                           |                                       |
|     | success                   | retry                                 |
|     v                           v                                       |
|  [Email Verification] ----timeout---> [Resend Email]                    |
|     |                                    |                              |
|     | verified                           | resent                       |
|     v                                    v                              |
|  [Profile Setup]                    [Email Verification]                |
|     |                                                                   |
|     v                                                                   |
|  [Choose Plan] ---skip---> [Free Tier Dashboard]                        |
|     |                                                                   |
|     | selected                                                          |
|     v                                                                   |
|  [Payment] ---error---> [Payment Error] ---retry---> [Payment]          |
|     |                                                                   |
|     | success                                                           |
|     v                                                                   |
|  [Welcome Tour] ---skip---> [Dashboard]                                 |
|     |                                                                   |
|     | completed                                                         |
|     v                                                                   |
|  [Dashboard - First Time]                                               |
|                                                                         |
+=========================================================================+
```

### Key Dimensions

- **Screen nodes**: 250x180px rectangles with rounded corners (12px radius)
- **Decision diamonds**: 120x120px rotated squares for yes/no branch points
- **Error states**: Same size as screen nodes but with red (#D32F2F) dashed border
- **Success path**: Primary flow emphasized with thicker connectors (3px)
- **Alternate paths**: Secondary flows with thinner connectors (1.5px, dashed)

### Spacing Rules

| Element                                | Spacing   |
| -------------------------------------- | --------- |
| Between sequential screens (vertical)  | 80-120px  |
| Between parallel branches (horizontal) | 150-200px |
| Between error state and main flow      | 200-250px |
| Screen node internal padding           | 16-20px   |
| Connector label to connector line      | 8-12px    |
| Board margins                          | 100-120px |

### Visual Hierarchy

1. **Happy path**: Bold connectors (3px, primary color), screens with solid borders
2. **Alternate paths**: Medium connectors (2px, secondary color), screens with lighter borders
3. **Error paths**: Dashed connectors (1.5px, red), screens with dashed red borders
4. **Dead ends**: Screens with gray fill — the user flow terminates here
5. **External links**: Dotted connectors to off-board destinations (other flows, external sites)

### Eye-Flow Pattern

The dominant eye flow follows the happy path from top-left to bottom-left (or top-left
to right, depending on flow direction). Error branches pull the eye right. The user
should be able to trace the primary experience in under 10 seconds.

---

## Pattern 2: The Screen Gallery

**Best for**: Wireframe boards, UI review boards, design exploration
**Design stage**: Exploration and refinement

The Screen Gallery arranges screens in a structured grid, with annotation sidecars next
to each screen. It supports side-by-side comparison of versions or options.

```
+=========================================================================+
|  WIREFRAMES: Dashboard Redesign — Desktop & Mobile                      |
+=========================================================================+
|                                                                         |
|  +--DESKTOP SCREENS--------------------------------------------+        |
|  |                                                              |        |
|  |  +----------+  +---------+    +----------+  +---------+     |        |
|  |  | Screen 1 |  | Notes & |    | Screen 2 |  | Notes & |     |        |
|  |  | Dashboard|  | Annota- |    | Settings |  | Annota- |     |        |
|  |  | Home     |  | tions   |    | Page     |  | tions   |     |        |
|  |  |          |  |         |    |          |  |         |     |        |
|  |  | [wire-   |  | 1. Nav  |    | [wire-   |  | 1. Form |     |        |
|  |  |  frame]  |  | 2. Cards|    |  frame]  |  | 2. Tabs |     |        |
|  |  |          |  | 3. CTA  |    |          |  | 3. Save |     |        |
|  |  +----------+  +---------+    +----------+  +---------+     |        |
|  |                                                              |        |
|  +--------------------------------------------------------------+        |
|                                                                         |
|  +--MOBILE SCREENS----------------------------------------------+        |
|  |                                                              |        |
|  |  +------+  +------+    +------+  +------+    +------+       |        |
|  |  | Scrn |  | Notes|    | Scrn |  | Notes|    | Scrn |       |        |
|  |  |  1M  |  |      |    |  2M  |  |      |    |  3M  |       |        |
|  |  |      |  |      |    |      |  |      |    |      |       |        |
|  |  +------+  +------+    +------+  +------+    +------+       |        |
|  |                                                              |        |
|  +--------------------------------------------------------------+        |
|                                                                         |
|  +--DESIGN DECISIONS--------------------------------------------+        |
|  |  Decision 1: ... | Decision 2: ... | Open Question: ...       |        |
|  +--------------------------------------------------------------+        |
+=========================================================================+
```

### Key Dimensions

- **Desktop wireframe**: 400-500px wide, aspect ratio 16:10 (640x400 or similar)
- **Mobile wireframe**: 200-250px wide, aspect ratio 9:19.5 (200x430 or similar)
- **Annotation sidecar**: 250-350px wide, same height as its wireframe
- **Screen-annotation pair spacing**: 20px between screen and its annotation
- **Between screen pairs**: 60-80px

### Spacing Rules

| Element                                    | Spacing              |
| ------------------------------------------ | -------------------- |
| Between screen-annotation pairs            | 60-80px horizontally |
| Between platform sections (Desktop/Mobile) | 80-100px vertically  |
| Screen internal padding (wireframe border) | 8-12px               |
| Annotation bullet points                   | 20px between items   |
| Frame padding                              | 40px internal        |
| Board margins                              | 100px                |

### Annotation Sidecar Structure

Each annotation panel should follow a consistent format:

```
+---ANNOTATIONS---+
| Screen: [name]   |
| Status: [status] |
|                  |
| Key Interactions:|
| 1. [action]     |
| 2. [action]     |
|                  |
| Open Questions: |
| ? [question]    |
|                  |
| Feedback:       |
| [empty for      |
|  review input]  |
+------------------+
```

---

## Pattern 3: The Mood Cluster

**Best for**: Mood boards, inspiration boards, visual direction exploration
**Design stage**: Discovery and inspiration

The Mood Cluster uses an organic, magazine-style layout where images, color swatches,
typography specimens, and descriptive words are arranged in loosely grouped clusters.
Unlike other board types, mood boards benefit from a slightly informal, curated-collage
feel.

```
+=========================================================================+
|  MOOD BOARD: "Serene Precision" — Dashboard Visual Direction            |
+=========================================================================+
|                                                                         |
|  +-COLOR CLUSTER---+    +--TYPOGRAPHY-----+    +--TEXTURE---------+     |
|  | [swatch] [swtch]|    | Heading:        |    | [image: marble]  |     |
|  | [swatch] [swtch]|    |  Inter Bold     |    | [image: linen]   |     |
|  | [swatch] [swtch]|    | Body:           |    | [image: concrete]|     |
|  |                  |    |  Inter Regular  |    |                  |     |
|  | "Calm Blues &    |    | Mono:           |    | Keywords:        |     |
|  |  Warm Neutrals"  |    |  JetBrains Mono |    | Tactile, Clean, |     |
|  +-----------------+    +----------------+    | Grounded         |     |
|                                                +------------------+     |
|                                                                         |
|  +--IMAGERY CLUSTER----------------------------------------------+      |
|  |  [large hero    ] [medium    ] [small]                        |      |
|  |  [image:        ] [image:    ] [small]                        |      |
|  |  [dashboard     ] [clean UI  ] [icon ]                        |      |
|  |  [reference     ] [reference ] [set  ]                        |      |
|  |                                                               |      |
|  |  [medium       ]  [medium       ]  [small ]  [small ]        |      |
|  |  [image:       ]  [image:       ]  [detail]  [detail]        |      |
|  |  [photography  ]  [illustration ]  [crop  ]  [crop  ]        |      |
|  +---------------------------------------------------------------+      |
|                                                                         |
|  +--WORD CLOUD / DESCRIPTORS----+    +--ANTI-MOOD---------+            |
|  | Serene  Precise  Structured  |    | NOT: Playful       |            |
|  | Confident  Professional      |    | NOT: Loud          |            |
|  | Spacious  Refined  Minimal   |    | NOT: Rounded       |            |
|  +------------------------------+    | NOT: Colorful      |            |
|                                       +-------------------+            |
+=========================================================================+
```

### Key Dimensions

- **Large hero image**: 600-800px wide, 400-500px tall
- **Medium image**: 350-450px wide, 250-350px tall
- **Small image/detail crop**: 150-200px square
- **Color swatch**: 80x80px to 120x120px squares
- **Typography specimen**: 300-400px wide text blocks

### Spacing Rules

Mood boards use looser, more organic spacing than other board types:

| Element                     | Spacing                                  |
| --------------------------- | ---------------------------------------- |
| Between images in a cluster | 12-20px (tight, magazine-style)          |
| Between clusters            | 60-100px                                 |
| Image overlap (allowed!)    | Up to 10-15px overlap for collage effect |
| Board margins               | 80px                                     |
| Descriptor words            | 20-30px between words                    |

### Visual Hierarchy

1. **Hero image(s)**: The largest images set the tone. They should be the first thing
   the eye lands on. Position them top-center or center-left.
2. **Color palette**: Grouped tightly, usually top-left or left side.
3. **Typography specimens**: Show actual typeface rendering at multiple sizes.
4. **Descriptive words**: Large-format text (28-40pt) scattered across the board.
5. **Anti-mood section**: What this is NOT. Equally important as what it IS.

---

## Pattern 4: The Component Grid

**Best for**: Design system boards, component libraries, token documentation
**Design stage**: Systematic documentation

The Component Grid uses a rigid, highly structured layout — essentially a visual
spreadsheet of design building blocks. Consistency and completeness are paramount.

```
+=========================================================================+
|  DESIGN SYSTEM: Component Library v2.1                                  |
+=========================================================================+
|                                                                         |
|  +--DESIGN TOKENS---------------------------------------------------+  |
|  |  Colors:  [##] [##] [##] [##] [##] [##] [##] [##]               |  |
|  |  Type:    H1   H2   H3   Body  Small  Caption  Link             |  |
|  |  Spacing: 4  8  12  16  24  32  48  64  80                      |  |
|  |  Radius:  0  4  8  12  Full                                     |  |
|  +------------------------------------------------------------------+  |
|                                                                         |
|  +--BUTTONS------+  +--INPUTS-------+  +--CARDS--------+               |
|  | Primary:      |  | Text Input:   |  | Default Card: |               |
|  |  [default]    |  |  [default]    |  |  [default]    |               |
|  |  [hover]      |  |  [focus]      |  |  [hover]      |               |
|  |  [active]     |  |  [error]      |  |  [selected]   |               |
|  |  [disabled]   |  |  [disabled]   |  |  [loading]    |               |
|  |               |  |  [filled]     |  |               |               |
|  | Secondary:    |  |               |  | Feature Card: |               |
|  |  [default]    |  | Select:       |  |  [default]    |               |
|  |  [hover]      |  |  [closed]     |  |  [expanded]   |               |
|  |  [active]     |  |  [open]       |  |               |               |
|  |  [disabled]   |  |  [selected]   |  |               |               |
|  +---------------+  +---------------+  +---------------+               |
|                                                                         |
|  +--NAVIGATION---+  +--FEEDBACK-----+  +--LAYOUT-------+               |
|  | Top Nav:      |  | Toast:        |  | Grid:         |               |
|  |  [desktop]    |  |  [success]    |  |  [12-col]     |               |
|  |  [mobile]     |  |  [error]      |  |  [sidebar]    |               |
|  |               |  |  [warning]    |  |  [centered]   |               |
|  | Side Nav:     |  |  [info]       |  |               |               |
|  |  [expanded]   |  |               |  | Breakpoints:  |               |
|  |  [collapsed]  |  | Modal:        |  |  [mobile]     |               |
|  |               |  |  [small]      |  |  [tablet]     |               |
|  |               |  |  [large]      |  |  [desktop]    |               |
|  +---------------+  +---------------+  +---------------+               |
+=========================================================================+
```

### Key Dimensions

- **Component frame**: 400-600px wide, height varies by number of states
- **Individual component state**: 200-350px wide, 60-120px tall
- **Token row**: Full width, 100-150px tall per token type
- **Design token swatch**: 60x60px for colors, scaled text for typography
- **State label**: 12-14pt, left-aligned above each component state

### Spacing Rules

| Element                          | Spacing   |
| -------------------------------- | --------- |
| Between component frames         | 40-60px   |
| Between states within a frame    | 20-30px   |
| Between token rows               | 30px      |
| Component frame internal padding | 24-32px   |
| Component state to label         | 8px above |
| Board margins                    | 80-100px  |

### Visual Hierarchy

1. **Token section**: Full-width banner at the top — the foundation everything else builds on
2. **Component category frames**: Grouped by function (Inputs, Buttons, Feedback, Navigation)
3. **Component names**: 20-24pt bold headers within each frame
4. **State labels**: 12-14pt, gray text, consistently positioned
5. **Component specimens**: The actual component renderings at 100% scale

---

## Pattern 5: The Review Wall

**Best for**: UI review, design critique, stakeholder feedback sessions
**Design stage**: Evaluation and refinement

The Review Wall arranges design work for structured critique, with clear feedback zones
and decision-tracking.

```
+=========================================================================+
|  UI REVIEW: Dashboard Redesign v2.3 — Review Date: March 7             |
+=========================================================================+
|                                                                         |
|  +--CONTEXT------------------------------------------------------+     |
|  | User Goal: ... | Design Principles: ... | Constraints: ...     |     |
|  +----------------------------------------------------------------+     |
|                                                                         |
|  +--OPTION A-----------+  +--OPTION B-----------+  +-OPTION C----+     |
|  |  [screen mockup]    |  |  [screen mockup]    |  | [screen]    |     |
|  |                     |  |                     |  |             |     |
|  |  Trade-offs:        |  |  Trade-offs:        |  | Trade-offs: |     |
|  |  + Simpler nav      |  |  + More flexible    |  | + Boldest   |     |
|  |  - Less discoverable|  |  - Complex to build |  | - Risky     |     |
|  |                     |  |                     |  |             |     |
|  |  +--FEEDBACK-----+  |  |  +--FEEDBACK-----+  |  | +FEEDBACK+ |     |
|  |  | [sticky]      |  |  |  | [sticky]      |  |  | |[sticky]| |     |
|  |  | [sticky]      |  |  |  | [sticky]      |  |  | |        | |     |
|  |  | [empty space] |  |  |  | [empty space] |  |  | |        | |     |
|  |  +---------------+  |  |  +---------------+  |  | +--------+ |     |
|  +----------------------+  +----------------------+  +------------+     |
|                                                                         |
|  +--DECISION LOG-------------------------------------------------+     |
|  | Vote: A=2  B=5  C=1 | Decision: Option B (March 7, Sarah K.)  |     |
|  | Rationale: "B provides the flexibility needed for enterprise..." |     |
|  | Next steps: Refine B with feedback from engineering by Mar 12   |     |
|  +----------------------------------------------------------------+     |
+=========================================================================+
```

### Key Dimensions

- **Screen mockup display**: 500-700px wide, maintaining actual aspect ratio
- **Option column**: 600-800px wide per option (supports 2-4 options side by side)
- **Feedback zone**: 500-700px wide, 300-500px tall per option
- **Context bar**: Full width, 200-300px tall
- **Decision log**: Full width, 200-300px tall

### Spacing Rules

| Element                     | Spacing  |
| --------------------------- | -------- |
| Between option columns      | 40-60px  |
| Mockup to trade-offs text   | 30-40px  |
| Trade-offs to feedback zone | 30px     |
| Feedback stickies spacing   | 16-20px  |
| Context bar to options      | 60-80px  |
| Options to decision log     | 60-80px  |
| Board margins               | 80-100px |

---

## White Space for Design Boards

Design boards require MORE white space than other board types because:

1. **Visual breathing room**: Design work needs space around it to be evaluated properly.
   A wireframe jammed against other elements cannot be seen clearly.
2. **Feedback space**: Empty areas next to designs invite comments and stickies during
   review sessions.
3. **Professional credibility**: A cramped design board undermines the design team's
   credibility. If designers cannot create a well-spaced board, why trust their spacing
   decisions in the product?

### White Space Minimums for Design Boards

| Context                            | Minimum White Space                    |
| ---------------------------------- | -------------------------------------- |
| Around a wireframe/mockup          | 40-60px on all sides                   |
| Between screen and its annotations | 20-30px                                |
| Between options in a review        | 40-60px                                |
| Between sections                   | 80-100px                               |
| Board edge margins                 | 100-120px (more than other categories) |
| Inside feedback zones              | 60% empty (room for stickies)          |

---

## Grid Systems for Design Boards

### The Underlying Grid

Use a 12-column grid at the board level, but do not enforce rigid grid alignment for
all elements. Design boards benefit from a mix:

- **Grid-aligned**: Frames, section boundaries, annotation sidecars
- **Organically placed**: Mood board images, feedback stickies, inspiration elements
- **Screen-aligned**: Wireframes and mockups aligned to each other but not necessarily
  to the board grid

### Responsive to Content

Unlike product boards where content adapts to a fixed structure, design boards sometimes
let the content dictate the structure:

- A user flow with many branches needs more horizontal space than one with linear flow
- A mood board with landscape photos needs wider frames than one with portrait photos
- A design system with 20 component states needs taller frames than one with 5

Size the board and its frames to the content, not the other way around.

---

## Alignment Principles for Design Boards

### Optical Alignment Over Mathematical Alignment

Designers know that mathematical center is not always optical center. Apply this to
board layout:

- Text blocks should be optically centered, not mathematically centered (text sits
  slightly above the geometric center)
- Icons should be optically balanced within their bounding boxes
- Wireframes with heavy top sections should be positioned slightly lower in their frames

### Consistent Edge Alignment

Within each section, all elements should share either:

- Left-edge alignment (most common for lists, annotations, stickies)
- Center alignment (titles, comparison columns)
- Top-edge alignment (screens in a row, options side by side)

Mixing alignment within a single section creates visual chaos. Between sections,
alignment can differ.
