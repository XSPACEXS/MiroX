# Product Development Boards — Visual Guide

## Overview

The visual design of product development boards must accomplish two seemingly contradictory
goals: convey dense, complex information while remaining clean and approachable. This guide
provides the complete visual toolkit — color palettes, typography, element selection,
contrast principles, and accessibility guidelines — for creating product boards that look
professional and communicate effortlessly.

---

## Color Palettes

### Palette 1: Deep Tech (Default)

**Personality**: Professional, trustworthy, engineering-focused
**Best for**: Technical audiences, enterprise teams, developer-heavy organizations

| Role           | Color Name    | Hex     | Usage                                               |
| -------------- | ------------- | ------- | --------------------------------------------------- |
| Primary        | Deep Purple   | #6200EA | Headers, primary frames, title banners              |
| Secondary      | Azure Blue    | #2979FF | Technical sections, links, engineering content      |
| Accent         | Hot Rose      | #F50057 | Highlights, calls to action, design-related content |
| Success        | Emerald       | #00C853 | Completed items, approved stories, passing tests    |
| Warning        | Amber         | #FFD600 | Dependencies, risks, items needing attention        |
| Danger         | Crimson       | #D50000 | Blockers, critical risks, overdue items             |
| Background     | Lavender Mist | #F3E5F5 | Board background, frame fills                       |
| Surface        | White         | #FFFFFF | Card backgrounds, content areas                     |
| Text Primary   | Charcoal      | #212121 | Headings, body text                                 |
| Text Secondary | Slate         | #757575 | Metadata, timestamps, secondary labels              |

**Usage ratios**: Primary 20%, Secondary 15%, Accent 5%, Neutral/Background 60%

### Palette 2: Warm Product (Startup-Friendly)

**Personality**: Energetic, modern, product-forward
**Best for**: Startup teams, product-led organizations, cross-functional workshops

| Role           | Color Name      | Hex     | Usage                                 |
| -------------- | --------------- | ------- | ------------------------------------- |
| Primary        | Coral           | #FF6D00 | Headers, primary emphasis             |
| Secondary      | Deep Teal       | #00897B | Supporting sections, secondary frames |
| Accent         | Electric Violet | #7C4DFF | Special highlights, creative elements |
| Success        | Mint            | #00E676 | Done states, positive indicators      |
| Warning        | Marigold        | #FFC400 | Attention items, tentative plans      |
| Danger         | Red Orange      | #FF3D00 | Blockers, urgent items                |
| Background     | Warm Cream      | #FFF8E1 | Board background                      |
| Surface        | Snow            | #FAFAFA | Cards, content areas                  |
| Text Primary   | Dark Cocoa      | #3E2723 | Headings                              |
| Text Secondary | Warm Gray       | #8D6E63 | Secondary text                        |

### Palette 3: Corporate Clarity

**Personality**: Clean, authoritative, enterprise-grade
**Best for**: Board presentations, executive-facing roadmaps, investor updates

| Role           | Color Name | Hex     | Usage                      |
| -------------- | ---------- | ------- | -------------------------- |
| Primary        | Navy       | #1A237E | Headers, primary frames    |
| Secondary      | Steel Blue | #455A64 | Supporting content         |
| Accent         | Gold       | #FF8F00 | Key highlights, milestones |
| Success        | Forest     | #2E7D32 | Completed milestones       |
| Warning        | Ochre      | #F9A825 | Attention needed           |
| Danger         | Burgundy   | #B71C1C | Critical issues            |
| Background     | Cool Gray  | #ECEFF1 | Board background           |
| Surface        | White      | #FFFFFF | Cards, frames              |
| Text Primary   | Ink        | #263238 | All headings               |
| Text Secondary | Graphite   | #78909C | Metadata                   |

### Palette 4: Dark Mode

**Personality**: Modern, focused, developer-friendly
**Best for**: Engineering-focused boards, late-night planning sessions, demo boards

| Role             | Color Name    | Hex     | Usage                              |
| ---------------- | ------------- | ------- | ---------------------------------- |
| Primary          | Electric Blue | #448AFF | Headers, primary emphasis          |
| Secondary        | Neon Green    | #69F0AE | Secondary sections, success states |
| Accent           | Hot Pink      | #FF4081 | Highlights, critical items         |
| Background       | Charcoal      | #1E1E1E | Board background                   |
| Surface          | Dark Gray     | #2D2D2D | Card backgrounds                   |
| Surface Elevated | Medium Gray   | #383838 | Frames, elevated sections          |
| Text Primary     | Off White     | #E0E0E0 | Headings, body text                |
| Text Secondary   | Cool Gray     | #9E9E9E | Metadata, labels                   |
| Border           | Subtle Gray   | #424242 | Frame borders, dividers            |

---

## Typography Scale

### Font Size Hierarchy

Product boards require a strict typographic hierarchy to maintain readability across
zoom levels and to differentiate information layers.

| Level      | Size | Weight    | Use Case                                 | Zoom Visibility |
| ---------- | ---- | --------- | ---------------------------------------- | --------------- |
| Display    | 56pt | Bold      | Board title only                         | 25% zoom        |
| H1         | 40pt | Bold      | Major section titles (rarely used)       | 30% zoom        |
| H2         | 32pt | Bold      | Frame titles, zone headers               | 35% zoom        |
| H3         | 24pt | Bold      | Sub-section headers, card group labels   | 50% zoom        |
| H4         | 20pt | Semi-bold | Card titles, sticky headers              | 60% zoom        |
| Body Large | 18pt | Regular   | Primary content, story descriptions      | 70% zoom        |
| Body       | 16pt | Regular   | Standard content, descriptions           | 75% zoom        |
| Body Small | 14pt | Regular   | Acceptance criteria, notes, metadata     | 90% zoom        |
| Caption    | 12pt | Regular   | Timestamps, version numbers, annotations | 100% zoom       |
| Micro      | 10pt | Regular   | Legal text, footnotes (use sparingly)    | 120% zoom       |

### Typography Rules

1. **Maximum two levels of emphasis per text block**: Use bold OR italic, never both
   simultaneously. Bold for structural emphasis, italic for contextual notes.
2. **Title case for headers**: "User Stories and Acceptance Criteria"
3. **Sentence case for content**: "As an engineering manager, I want to see..."
4. **ALL CAPS only for status labels**: "IN PROGRESS", "BLOCKED", "DONE"
5. **Line length**: Maximum 60-70 characters per line for readability
6. **Line spacing**: 1.4-1.6x the font size for body text

---

## Element Selection Guide

### When to Use Sticky Notes

Sticky notes are the workhorse of product boards. Use them for:

- **User stories**: One story per sticky, color-coded by epic
- **Ideas and brainstorm output**: Quick capture, easy to rearrange
- **Feedback and comments**: Stakeholder input during reviews
- **Risks and assumptions**: Items that need discussion
- **Action items**: Tasks assigned during meetings

**Sticky note best practices**:

- Maximum 3-4 lines of text (40-50 words)
- Title on the first line, bold or larger font
- Use color to encode meaning, not decoration
- Standard size: 200x200px to 300x200px
- Never put paragraph-length text on a sticky

### When to Use Shapes (Rectangles, Rounded Rectangles)

Shapes are for structured, permanent content:

- **Feature cards**: Detailed cards with multiple fields (title, status, owner, date)
- **Wireframe placeholders**: Grey rectangles representing UI screens
- **Process steps**: Boxes in a flow diagram
- **Metric displays**: KPI boxes with numbers and labels
- **Tables**: Structured data (timeline rows, scoring matrices)

**Shape best practices**:

- Use rounded corners (8-12px radius) for a modern, approachable feel
- Use sharp corners for formal, structured content (tables, matrices)
- Consistent sizing within a group (all feature cards same size)
- Light background fill (5-15% opacity of the section color)
- Border: 1-2px solid, matching or darker than the fill

### When to Use Text Blocks

Text blocks are for labels, headers, and standalone explanations:

- **Section headers**: "User Stories", "Technical Requirements"
- **Axis labels**: "HIGH IMPACT", "LOW EFFORT"
- **Annotations**: Explanatory text that does not belong on a sticky
- **Legends**: Color key explanations
- **Board instructions**: How to use the board

**Text block best practices**:

- Left-aligned for content, center-aligned only for titles and axis labels
- No background fill (text floats on the board or frame background)
- Consistent font sizes within the same hierarchy level

### When to Use Frames

Frames are containers that group related elements:

- **Board sections**: Each major zone of the board is a frame
- **Feature spec areas**: Problem, Stories, Wireframes, Tech Reqs
- **Timeline phases**: Q1, Q2, Q3, Q4 columns
- **Prioritization quadrants**: Each quadrant is a frame within the matrix

**Frame best practices**:

- Always have a visible title (top-left corner, 24-32pt)
- Background fill at very low opacity (5-10%)
- Consistent sizing for frames at the same hierarchy level
- Locked position — frames should not be accidentally movable

### When to Use Connectors

Connectors show relationships and dependencies:

- **Dependency arrows**: Feature A blocks Feature B
- **Flow sequences**: Step 1 → Step 2 → Step 3
- **Data flows**: Input → Process → Output
- **Status flows**: Backlog → In Progress → Done (implicit in kanban, explicit in flow)

**Connector best practices**:

- Solid lines for direct dependencies and required flows
- Dashed lines for optional paths, weak relationships, or informational links
- Arrow direction indicates the direction of dependency or flow
- Label connectors when the relationship is not obvious
- Color: Use the primary or secondary color at 60-70% opacity
- Weight: 2px for standard, 3-4px for critical paths

---

## Contrast and Emphasis

### Creating Focal Points

Every board should have one or two focal points — the elements that the eye is drawn to
first. Create focal points through:

1. **Size contrast**: Make the most important element 2-3x larger than surrounding items
2. **Color contrast**: Use the accent color only on 1-2 elements (everything else is
   primary/neutral)
3. **Isolation**: Surround the focal point with more whitespace than other elements
4. **Position**: Place the focal point in the optical center (slightly above and left of
   the geometric center)

### The Squint Test

Zoom out to 25% and squint at the board. You should be able to:

- Identify the board title
- Count the major sections (3-7)
- Distinguish between section colors
- See the general flow direction

If the board looks like a uniform gray blob at 25%, the visual hierarchy has failed.

### Emphasis Techniques (Ordered by Strength)

| Technique                    | Strength  | Use For                                               |
| ---------------------------- | --------- | ----------------------------------------------------- |
| Color fill (bright accent)   | Strongest | Blockers, critical alerts, 1-2 per board              |
| Color border (thick, bright) | Strong    | Important sections, current sprint, key milestones    |
| Size increase (1.5-2x)       | Strong    | Primary features, main decisions                      |
| Bold text                    | Medium    | Card titles, status labels, key metrics               |
| Position (top-left, center)  | Medium    | Most important items float to prominence              |
| Italic text                  | Subtle    | Notes, annotations, contextual info                   |
| Opacity reduction (40-60%)   | Subtle    | Completed items, deferred features, parking lot items |

---

## Icons and Emoji

### When to Use Icons

Icons add scanability. Use them for:

- **Status indicators**: Checkmark (done), clock (in progress), warning triangle (blocked)
- **Item type markers**: Bug, feature, tech debt, experiment
- **Team/owner markers**: Avatar circles or initials
- **Priority markers**: Flame (urgent), arrow-up (high), dash (medium), arrow-down (low)

### Recommended Emoji for Product Boards

| Category | Emoji            | Meaning                 |
| -------- | ---------------- | ----------------------- |
| Status   | Green circle     | Done / Approved         |
| Status   | Yellow circle    | In Progress / Review    |
| Status   | Red circle       | Blocked / Failed        |
| Priority | Fire             | Critical / Urgent       |
| Priority | Star             | High Priority           |
| Type     | Rocket           | Feature / Launch        |
| Type     | Bug              | Bug Fix                 |
| Type     | Wrench           | Tech Debt / Maintenance |
| Type     | Lightbulb        | Idea / Experiment       |
| Type     | Chart            | Analytics / Metrics     |
| People   | Person icon      | Owner / Assignee        |
| Risk     | Warning triangle | Risk / Dependency       |
| Note     | Pin              | Pinned Note / Important |
| Date     | Calendar         | Deadline / Milestone    |

### Icon Rules

- Maximum 1 icon per card/sticky header
- Consistent positioning (always top-left or before the title text)
- Never use icons as the sole communication method — always pair with text
- Use a consistent icon set (do not mix flat icons with 3D emoji)

---

## Decorative Elements

### Minimal Decoration Philosophy

Product boards are work surfaces, not art pieces. Decoration should be minimal and
purposeful:

**Appropriate decoration**:

- Subtle background patterns (dot grid at 5% opacity) to help with alignment
- Thin divider lines between sections (1px, 10-20% opacity)
- Rounded corners on frames and cards for a polished feel
- Consistent drop shadows on elevated elements (2px offset, 10% opacity)

**Inappropriate decoration**:

- Gradients on backgrounds (distracting)
- Thick decorative borders (noisy)
- Background images (compete with content)
- Patterned fills on content elements (reduce readability)

### The One Decorative Moment Rule

Each board may have ONE decorative moment — a visual flourish that adds personality.
This is typically in the title banner. Examples:

- A gradient in the title banner (nowhere else)
- An icon or illustration next to the board title
- A colored accent stripe along the top edge

Everything else should be clean and functional.

---

## Accessibility

### Color Accessibility

1. **Never use color as the sole indicator**: Every color-coded element should also have
   a text label, icon, or positional indicator. A color-blind user must be able to read
   the board.
2. **Contrast ratios**: Text must meet WCAG AA standards:
   - Normal text: 4.5:1 contrast ratio minimum
   - Large text (24pt+ or 18pt+ bold): 3:1 contrast ratio minimum
   - White text on Deep Purple (#6200EA): 10.4:1 (passes)
   - Charcoal text on Lavender Mist (#F3E5F5): 13.7:1 (passes)
   - Dark text on yellow stickies (#FFF9C4): 12.1:1 (passes)
3. **Color-blind safe palettes**: Avoid relying on red/green distinctions alone. Add
   icons (checkmark for green, X for red) or pattern differences (solid fill for
   positive, hatched for negative).

### Text Accessibility

1. **Minimum font size**: 12pt for any text that needs to be read (not just decoration)
2. **Maximum line length**: 70 characters to prevent eye-tracking fatigue
3. **Sufficient line spacing**: 1.4x minimum for body text
4. **No text on busy backgrounds**: Text should always be on solid or near-solid fills

### Interaction Accessibility

1. **Clickable areas**: Links and interactive elements should be at least 44x44px
2. **Sticky note size**: Minimum 150x100px for any sticky that contains readable text
3. **Connector labels**: At least 14pt font on connector labels
4. **Zoom-friendly**: All critical information visible at 50% zoom or larger

---

## Visual Consistency Checklist

Before finalizing any product development board, verify:

1. All frames at the same hierarchy level use the same dimensions
2. All sticky notes within a section use the same color and size
3. All headers at the same level use the same font size and weight
4. All connectors use consistent style (solid vs dashed) for the same relationship type
5. The color palette uses no more than 5-6 distinct colors plus neutrals
6. Status encoding is consistent across all sections (same green means "done" everywhere)
7. Spacing between elements follows the 8-point grid
8. The board passes the squint test at 25% zoom
9. All text meets contrast ratio requirements
10. No element relies on color alone for meaning
