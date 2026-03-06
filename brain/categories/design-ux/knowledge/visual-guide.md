# Design & UX Boards — Visual Guide

## Overview

Design boards hold themselves to a higher visual standard than any other category. The
board itself is a design artifact — it represents the team's visual taste, attention to
detail, and design philosophy. Every color choice, font pairing, and spacing decision on
the board communicates the team's design values. This guide provides the complete visual
toolkit for creating design boards that are themselves exemplary design work.

---

## Color Palettes

### Palette 1: Studio Pink (Default)

**Personality**: Creative, modern, design-forward
**Best for**: General design boards, wireframes, UI reviews, cross-functional design work

| Role           | Color Name  | Hex     | Usage                                        |
| -------------- | ----------- | ------- | -------------------------------------------- |
| Primary        | Hot Pink    | #E91E63 | Headers, primary frames, title accents       |
| Secondary      | Ocean Blue  | #0288D1 | Flow connectors, secondary sections          |
| Accent         | Mint Teal   | #00BFA5 | Success states, approved designs, highlights |
| Surface        | White       | #FFFFFF | Wireframe backgrounds, card surfaces         |
| Background     | Snow        | #FAFAFA | Board background                             |
| Wireframe Gray | Medium Gray | #9E9E9E | Wireframe placeholder elements               |
| Wireframe Fill | Light Gray  | #E0E0E0 | Wireframe content blocks, image placeholders |
| Annotation     | Amber       | #FF8F00 | Annotation callouts, numbered markers        |
| Error/Issue    | Red         | #D32F2F | Design issues, usability problems            |
| Text Primary   | Ink Black   | #212121 | Headers, labels, body text                   |
| Text Secondary | Cool Gray   | #757575 | Metadata, annotations, captions              |

### Palette 2: Minimal Mono

**Personality**: Clean, sophisticated, editorial
**Best for**: Design system documentation, typography-focused boards, minimal aesthetic

| Role           | Color Name | Hex     | Usage                       |
| -------------- | ---------- | ------- | --------------------------- |
| Primary        | Charcoal   | #263238 | Headers, primary containers |
| Secondary      | Warm Gray  | #78909C | Supporting text, borders    |
| Accent         | Signal Red | #FF1744 | Single accent for emphasis  |
| Surface        | Pure White | #FFFFFF | All content surfaces        |
| Background     | Paper      | #F5F5F0 | Board background            |
| Text Primary   | Black      | #1A1A1A | All text                    |
| Text Secondary | Mid Gray   | #9E9E9E | Captions, labels            |
| Border         | Light Gray | #E0E0E0 | All borders and dividers    |

### Palette 3: Creative Warmth

**Personality**: Approachable, playful, human-centered
**Best for**: Mood boards, design thinking workshops, user research synthesis

| Role           | Color Name | Hex     | Usage                        |
| -------------- | ---------- | ------- | ---------------------------- |
| Primary        | Terracotta | #E64A19 | Headers, primary emphasis    |
| Secondary      | Sage Green | #558B2F | Supporting sections, success |
| Accent         | Mustard    | #F9A825 | Highlights, attention points |
| Tertiary       | Dusty Blue | #5C6BC0 | Complementary sections       |
| Surface        | Cream      | #FFF8E1 | Content surfaces             |
| Background     | Warm White | #FFFDE7 | Board background             |
| Text Primary   | Dark Brown | #3E2723 | Headings                     |
| Text Secondary | Warm Gray  | #795548 | Body, captions               |

### Palette 4: System Blue

**Personality**: Systematic, trustworthy, technical
**Best for**: Design system boards, component libraries, technical design documentation

| Role            | Color Name      | Hex     | Usage                            |
| --------------- | --------------- | ------- | -------------------------------- |
| Primary         | System Blue     | #1976D2 | Headers, primary system elements |
| Secondary       | Deep Purple     | #7B1FA2 | Component categories, variants   |
| Accent          | Teal            | #00897B | Token values, active states      |
| Success         | Green           | #388E3C | Approved states, correct usage   |
| Error           | Red             | #D32F2F | Incorrect usage, anti-patterns   |
| Warning         | Orange          | #F57C00 | Deprecated components, caution   |
| Surface         | White           | #FFFFFF | Component specimens              |
| Background      | Light Blue Gray | #ECEFF1 | Board background                 |
| Code Background | Dark Gray       | #37474F | Code snippet backgrounds         |
| Text Primary    | Ink             | #212121 | All text                         |

---

## Typography Scale

### Design Board Typography Hierarchy

Design boards need an expanded typography scale because they display type AT MULTIPLE
ROLES — as board structure (headers, labels) AND as design content (type specimens,
wireframe copy, UI text).

| Level          | Size    | Weight    | Use Case                                  |
| -------------- | ------- | --------- | ----------------------------------------- |
| Board Title    | 48-56pt | Bold      | Board name only                           |
| Section Title  | 32-36pt | Bold      | Frame titles ("Wireframes", "User Flow")  |
| Subsection     | 24-28pt | Semi-bold | Sub-headers ("Desktop Screens", "Mobile") |
| Component Name | 20pt    | Bold      | Component labels in design systems        |
| Screen Title   | 18pt    | Semi-bold | Wireframe/screen name labels              |
| Annotation     | 16pt    | Regular   | Design notes, callout text                |
| Body           | 14pt    | Regular   | Descriptions, trade-offs, rationale       |
| Caption        | 12pt    | Regular   | Metadata, version numbers, timestamps     |
| Wireframe Text | 10-12pt | Regular   | Placeholder text inside wireframes        |
| Token Value    | 12pt    | Mono      | Hex codes, spacing values, font specs     |

### Typography Rules for Design Boards

1. **Use a monospaced font for technical values**: Hex codes (#E91E63), spacing values
   (16px), font specifications (Inter, 14/20, Regular) should be in a monospaced font
   to distinguish them from descriptive text.
2. **Typography specimens must be rendered in the actual typeface**: When documenting
   a type scale, show each size rendered in the typeface being documented, not in the
   board's default font.
3. **Wireframe text should be realistic**: Use real copy, not lorem ipsum. "Dashboard
   Overview" not "Lorem Ipsum Dolor." Real copy helps evaluate layout and hierarchy.
4. **Annotation text should be visually distinct**: Use a different color (amber, blue)
   or a numbered marker system so annotations do not blend with design content.

---

## Element Selection Guide

### Wireframe Elements

| UI Element        | Miro Representation             | Color                   | Size                              |
| ----------------- | ------------------------------- | ----------------------- | --------------------------------- |
| Text heading      | Rectangle with text             | #9E9E9E border, no fill | Height: proportional to font size |
| Body text         | Rectangle with horizontal lines | #E0E0E0 fill            | 3-5 lines                         |
| Image placeholder | Rectangle with X diagonal       | #E0E0E0 fill, dashed X  | Maintains target aspect ratio     |
| Button            | Rounded rectangle with label    | #9E9E9E fill            | 120-200px wide, 40px tall         |
| Input field       | Rectangle with bottom border    | #E0E0E0 border bottom   | 200-300px wide, 40px tall         |
| Icon placeholder  | Small circle or square          | #BDBDBD fill            | 24-32px                           |
| Navigation bar    | Full-width rectangle            | #E0E0E0 fill            | 40-56px tall                      |
| Card              | Rounded rectangle               | 1px #E0E0E0 border      | Variable                          |
| Avatar            | Circle                          | #BDBDBD fill            | 32-48px diameter                  |
| Toggle/switch     | Pill shape                      | #9E9E9E                 | 48x24px                           |
| Checkbox          | Small square                    | #9E9E9E border          | 20x20px                           |

### Annotation Elements

| Annotation Type       | Miro Element                | Styling                                   |
| --------------------- | --------------------------- | ----------------------------------------- |
| Numbered callout      | Circle with number          | Amber (#FF8F00) fill, white text, 28-32px |
| Text annotation       | Text block with leader line | 14pt, secondary text color                |
| Interaction note      | Sticky note (small)         | Light yellow, 12pt                        |
| "Tap/Click here"      | Small arrow or hand icon    | Accent color                              |
| Scroll indicator      | Vertical dashed line        | Gray, labeled "Scroll below fold"         |
| Responsive breakpoint | Vertical solid line         | Blue, labeled "768px"                     |

### Flow Diagram Elements

| Flow Element           | Miro Shape                   | Styling                                    |
| ---------------------- | ---------------------------- | ------------------------------------------ |
| Screen/Page            | Rounded rectangle            | 2px border, white fill, screen name at top |
| Decision point         | Diamond                      | 1px border, light fill                     |
| Action/Process         | Rectangle                    | 1px border, no fill                        |
| Start/End              | Stadium/pill shape           | Solid fill, white text                     |
| Connector (happy path) | Arrow                        | 3px, primary color, solid                  |
| Connector (alt path)   | Arrow                        | 1.5px, secondary color, dashed             |
| Connector (error)      | Arrow                        | 1.5px, red, dashed                         |
| External system        | Rectangle with double border | Gray, dashed double border                 |

---

## Contrast and Emphasis

### Wireframe Emphasis Techniques

In wireframe boards, emphasis must be created without color (since wireframes are
typically grayscale):

1. **Line weight**: Important elements get 2-3px borders, secondary elements get 1px
2. **Fill value**: Higher contrast (darker gray) for more important elements
3. **Size**: Primary CTAs are larger than secondary actions
4. **Position**: Important elements positioned in the optical center or top-left
5. **Annotation density**: More annotations around complex or novel interactions

### Design Review Emphasis

In UI review boards, use emphasis to guide reviewer attention:

1. **Red highlight borders (4px)**: Around areas with known issues
2. **Green highlight borders (4px)**: Around areas that are approved/finalized
3. **Yellow highlight borders (4px)**: Around areas that need discussion
4. **Numbered markers**: Sequential numbers guiding the review order
5. **"Changed" badges**: Small markers showing what changed since last review

---

## Icons and Visual Markers for Design Boards

### Design-Specific Markers

| Marker       | Visual                   | Meaning                                 |
| ------------ | ------------------------ | --------------------------------------- |
| New          | Blue circle with "N"     | New screen/component since last version |
| Changed      | Orange circle with delta | Modified since last version             |
| Removed      | Red circle with "X"      | Removed in this version                 |
| Approved     | Green checkmark          | Design approved by stakeholders         |
| Needs Review | Yellow warning           | Awaiting feedback                       |
| In Progress  | Gray clock               | Still being designed                    |
| Figma Link   | Purple diamond           | Links to Figma file                     |
| Prototype    | Play button icon         | Links to interactive prototype          |
| Research     | Magnifying glass         | Linked to user research finding         |

### Wireframe Annotation Markers

Use numbered circle markers (1, 2, 3...) in a consistent accent color (amber #FF8F00)
to annotate wireframes. Each number corresponds to a note in the annotation panel:

```
[Wireframe with markers]          [Annotation Panel]
                                   1. Primary CTA — should be above
   +--[1]---Header---+               the fold on mobile
   |  [Nav Bar]      |            2. Search defaults to recent items
   |                  |            3. Card layout switches to list
   |  [2]-Search-+   |               view below 768px
   |  [3]-Cards--|   |            4. Loading state shows skeleton
   |  [4]-Load---|   |               screens, not spinners
   +--[5]---Footer---+            5. Footer is sticky on desktop,
                                      hidden on mobile
```

---

## Decorative Elements for Design Boards

### The Polished Minimalism Approach

Design boards should look like a well-curated portfolio, not a decorated scrapbook:

**Appropriate**:

- Clean frame borders (1-2px, consistent color)
- Subtle shadows on elevated elements (2px offset, 8% opacity)
- Consistent rounded corners on all containers (8px or 12px, choose one)
- A single accent color stripe in the title banner
- Dot grid background (5% opacity) for alignment guidance

**Inappropriate**:

- Decorative icons that do not carry information
- Gradient backgrounds on content areas
- Multiple border styles (solid, dashed, dotted) without meaning
- Background textures or patterns that compete with wireframe content
- Emoji in annotation labels (use numbered markers instead)

### The "Design Studio" Aesthetic

The best design boards look like a well-organized design studio wall:

- Clean white surfaces for presenting work
- Consistent spacing that shows intentionality
- Clear labeling that shows organization
- Empty space that shows restraint
- A touch of craft in the title and section headers

---

## Accessibility for Design Boards

### Critical Accessibility Requirements

Design boards must model good accessibility practice — it would be contradictory for a
UX team's board to fail accessibility standards:

1. **Text contrast**: All text must meet WCAG AA contrast ratios
   - Dark text on white: Use #212121 minimum (ratio: 16.1:1)
   - White text on colored backgrounds: Verify each combination
   - Annotation text on yellow (#FFF9C4): Use #5D4037 (ratio: 7.2:1)

2. **Wireframe labels**: Every wireframe element should have a text label, not just
   visual representation. A gray box that looks like a button should be labeled "Button."

3. **Color-blind safe flow diagrams**: Error paths should be distinguished by line style
   (dashed) AND color (red), not color alone. Add "Error" labels to error paths.

4. **Screen reader considerations**: When exporting boards for documentation, ensure
   alt text is added to images and all visual information has a text equivalent.

5. **Zoom readability**: Screen names and flow labels should be readable at 50% zoom.
   Annotation text should be readable at 80% zoom.

---

## Visual Consistency Checklist for Design Boards

1. All wireframe elements use the same gray scale (#E0E0E0 fills, #9E9E9E borders)
2. All annotation markers use the same numbering system and color
3. All frames use consistent corner radius (either 0, 8px, or 12px — pick one)
4. All connectors in flow diagrams use consistent arrow styles
5. Screen mockups maintain correct aspect ratios (do not stretch/distort)
6. Typography specimens are rendered in the correct typeface
7. Component states are displayed in a consistent order (default → hover → active → disabled)
8. Version labels use consistent format ("v1.0", "v1.1", "v2.0")
9. Feedback zones have consistent size and positioning across all options
10. Decision log entries follow a consistent format (date, decision, decision-maker, rationale)
11. The board itself would pass the design team's own quality bar
