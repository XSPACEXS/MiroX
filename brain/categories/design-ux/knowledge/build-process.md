# Design & UX Boards — Build Process

## Overview

Building design boards requires a different mindset than building product or strategy
boards. Design boards must themselves be well-designed — they are portfolio pieces that
represent the design team's capabilities. This guide covers the creative workflow from
discovery to polish, with special attention to the unique challenges of design board
construction.

---

## The Six-Phase Build Process

### Phase 1: Discovery (10-15 minutes)

**Goal**: Understand the design context and the board's role in the design process.

**Questions to determine**:

1. What type of design board is needed? (Wireframe, user flow, design system, mood board, UI review)
2. Where is the design in its lifecycle? (Exploration, definition, refinement, handoff)
3. Who is the primary audience? (Design team, developers, PM, stakeholders, all)
4. How many screens/components/options will the board contain?
5. Is this board for a specific meeting or ongoing reference?
6. What existing design artifacts exist? (Figma files, research reports, sketches)

**Discovery outputs**:

- Board type and layout pattern selected
- Content scope defined (number of screens, options, components)
- Fidelity level determined (sketch, wireframe, high-fidelity)
- Color palette selected (Studio Pink for general, Minimal Mono for systems, etc.)
- Presentation flow planned (how will someone navigate this board?)

### Phase 2: Structure (15-20 minutes)

**Goal**: Create the frame architecture before any design content.

**Steps**:

1. **Set board dimensions**:
   - Wireframe board: 5000x3500px (gallery needs width for multiple screens)
   - User flow: 4000x5000px (flows often extend vertically)
   - Design system: 5000x6000px (component libraries are tall)
   - Mood board: 4000x3000px (horizontal, magazine-style)
   - UI review: 5000x3000px (wide for side-by-side options)

2. **Place the title banner**: Board name, design stage, version, date, designer name.
   This immediately communicates what the viewer is looking at.

3. **Create context section**: A frame for the design context — user problem, research
   insight, or creative brief. This always comes before any design work.

4. **Define content frames**: Create the primary frames where design work will go.
   For wireframes: Screen Gallery frames. For flows: empty canvas for the flow diagram.
   For systems: Component category frames.

5. **Add supporting frames**: Feedback zones, decision logs, version history, next steps.
   These come after the design content.

6. **Establish navigation flow**: Add connector arrows or numbered sequence indicators
   to guide viewers through the board in the intended order.

### Phase 3: Skeleton Content (20-30 minutes)

**Goal**: Place design elements at the correct size and position with placeholder content.

**Steps for wireframe boards**:

1. Create wireframe rectangles at the correct aspect ratio for each screen
2. Place gray-box placeholder elements inside each wireframe (nav bars, content areas,
   CTAs) without real copy or detailed layout
3. Add screen name labels above each wireframe
4. Place empty annotation sidecars next to each screen
5. Verify the gallery layout — are screens evenly spaced? Is the grid clean?

**Steps for user flow boards**:

1. Place screen nodes for every step in the flow
2. Connect them with arrows showing the primary path
3. Add branch points as diamonds
4. Place error state nodes (without detailed content)
5. Verify flow readability — can someone trace the happy path in 10 seconds?

**Steps for design system boards**:

1. Create frames for each component category
2. Place placeholder component specimens at correct size
3. Add state labels (default, hover, active, disabled) as text
4. Create the token section with placeholder values
5. Verify completeness — are all components and states represented?

**Steps for mood boards**:

1. Define cluster zones (color, typography, imagery, texture, words)
2. Place placeholder image frames at target sizes
3. Add color swatch placeholders
4. Place descriptive word text blocks
5. Verify the composition feels balanced and magazine-like

### Phase 4: Content Population (30-60 minutes)

**Goal**: Replace all placeholders with real design content.

**For wireframe boards**:

1. Build detailed wireframes inside each screen frame using shapes and text
2. Write numbered annotations for key interactions
3. Add responsive notes for breakpoint behavior
4. Include real UI copy (not lorem ipsum)
5. Mark interactive elements with interaction annotations

**For user flow boards**:

1. Label every screen node with the screen name and brief description
2. Label every connector with the user action ("clicks Submit", "selects Plan")
3. Add error state details (error message, recovery path)
4. Add metrics callouts at key steps ("Drop-off: 12% at this step")
5. Add entry/exit point descriptions

**For design system boards**:

1. Create actual component representations (buttons, inputs, cards, etc.)
2. Document every state for every component
3. Fill in token values with real design specifications
4. Write usage guidelines and anti-patterns
5. Add accessibility notes per component

**For mood boards**:

1. Place curated images (reference photos, UI screenshots, textures)
2. Create precise color swatches with hex values and role descriptions
3. Render typography specimens in the actual proposed typefaces
4. Write the descriptive and anti-descriptive word lists
5. Add the competitive landscape references if applicable

### Phase 5: Polish (15-25 minutes)

**Goal**: Elevate the board from functional to exemplary.

Design board polish is more intensive than other categories because the board represents
the design team's standards.

**Polish checklist**:

- [ ] All wireframe elements use consistent gray values
- [ ] All annotations are numbered sequentially and reference correct locations
- [ ] All screens maintain correct aspect ratios (no stretching/distortion)
- [ ] All text within wireframes is realistic copy, not placeholder
- [ ] Spacing between elements follows the 8-point grid
- [ ] The board background is clean with no stray elements
- [ ] Frame titles are consistent in size, weight, and color
- [ ] Connectors enter/exit elements at logical points (not random edges)
- [ ] The board passes the "design studio wall" aesthetic test
- [ ] Colors match the selected palette exactly (no approximate colors)
- [ ] One cohesive visual identity — the board itself looks designed
- [ ] All feedback zones are clearly marked and have enough empty space

### Phase 6: Review and Handoff (10 minutes)

**Goal**: Prepare the board for its audience.

**For presentation boards** (UI reviews, stakeholder presentations):

1. Set up Miro presentation frames in viewing order
2. Verify the narrative flow — does the story make sense sequentially?
3. Pre-populate "Review Criteria" so viewers know what to look for
4. Test the board in screen-share mode at typical laptop resolution

**For working boards** (wireframes, flows, design systems):

1. Verify all Figma/prototype links are working
2. Ensure stickies in feedback zones are unlocked
3. Add a "How to Use This Board" text block with navigation instructions
4. Set appropriate sharing permissions

**For archival boards** (mood boards after direction is chosen, older wireframe versions):

1. Add a "Status: Archived" label to the title
2. Reduce the board opacity slightly or add a watermark
3. Link to the current active board

---

## Miro API Translation for Design Elements

### Creating Wireframe Elements

**Gray-box rectangle (content placeholder)**:

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "", "shape": "rectangle" },
  "style": { "fillColor": "#E0E0E0", "borderColor": "#9E9E9E", "borderWidth": "1.0" },
  "position": { "x": 300, "y": 500 },
  "geometry": { "width": 400, "height": 80 }
}
```

**Annotation callout (numbered marker)**:

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "1", "shape": "circle" },
  "style": { "fillColor": "#FF8F00", "fontFamily": "arial", "fontSize": "14", "textAlign": "center", "color": "#FFFFFF" },
  "position": { "x": 100, "y": 200 },
  "geometry": { "width": 32, "height": 32 }
}
```

**Flow connector with label**:

```
POST /v2/boards/{board_id}/connectors
{
  "startItem": { "id": "screen_a_id" },
  "endItem": { "id": "screen_b_id" },
  "style": { "strokeColor": "#0288D1", "strokeWidth": "3.0", "strokeStyle": "normal" },
  "captions": [{ "content": "Clicks 'Sign Up'" }]
}
```

### Creating Color Swatches

Color swatches are shapes with specific fill colors and a text label below:

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "", "shape": "round_rectangle" },
  "style": { "fillColor": "#1976D2", "borderColor": "#1565C0", "borderWidth": "1.0", "borderStyle": "normal" },
  "position": { "x": 200, "y": 300 },
  "geometry": { "width": 80, "height": 80 }
}
// Follow with a text block below containing: "Primary Blue\n#1976D2"
```

---

## Common Pitfalls for Design Boards

### Pitfall 1: Screenshot Dump

**Symptom**: Dozens of Figma screenshots pasted onto the board with no annotations, no
flow connections, and no context.
**Fix**: Every screen needs (1) a label, (2) annotations for key interactions, and
(3) connectors showing how it relates to other screens.

### Pitfall 2: Wireframe Fidelity Mismatch

**Symptom**: Some wireframes are rough gray boxes while others are near-pixel-perfect.
The fidelity is inconsistent across the board.
**Fix**: Choose a consistent fidelity level for the entire board. All wireframes should
be at the same level of detail.

### Pitfall 3: Missing Error States and Edge Cases

**Symptom**: The user flow shows only the happy path. No error states, no edge cases,
no empty states, no loading states.
**Fix**: For every screen, ask: "What if the data is empty? What if the action fails?
What if the user is offline? What if the content is very long?" Add these states.

### Pitfall 4: No Feedback Structure

**Symptom**: Designs are presented but there is no structured way for reviewers to
provide input. Feedback ends up in Slack threads and gets lost.
**Fix**: Add explicit feedback zones next to each design option with prompting questions.
Include a decision log at the bottom of the board.

### Pitfall 5: Orphan Screens

**Symptom**: Screens exist on the board without any connection to the flow. Where do
they come from? Where do they lead?
**Fix**: Every screen must have at least one incoming and one outgoing connector (except
true entry and exit points, which should be labeled as such).

### Pitfall 6: Ignoring the Design System Board's Own Design

**Symptom**: A design system board documenting beautiful components is itself ugly —
inconsistent spacing, misaligned elements, random colors.
**Fix**: The design system board must be the most meticulously designed board in the
organization. It is the source of truth for visual quality.

---

## Build Time Estimates

| Board Type                       | Discovery | Structure | Skeleton | Content | Polish | Total    |
| -------------------------------- | --------- | --------- | -------- | ------- | ------ | -------- |
| Wireframe Board (5-8 screens)    | 10 min    | 15 min    | 25 min   | 40 min  | 20 min | ~1.8 hrs |
| User Flow (10-15 nodes)          | 10 min    | 15 min    | 20 min   | 30 min  | 15 min | ~1.5 hrs |
| Design System (15-20 components) | 15 min    | 25 min    | 30 min   | 60 min  | 25 min | ~2.6 hrs |
| Mood Board                       | 10 min    | 10 min    | 15 min   | 30 min  | 15 min | ~1.3 hrs |
| UI Review (3 options)            | 10 min    | 15 min    | 15 min   | 25 min  | 15 min | ~1.3 hrs |
