# Design System Board

## Overview

- **Purpose**: Document the complete component library and design token system in a visual, browsable format. Covers buttons, inputs, cards, typography scale, spacing grid, color tokens, iconography, and usage patterns. Serves as the single source of truth for design and development, ensuring visual consistency across the entire product.
- **Best For**: Design teams maintaining consistency, frontend developers implementing components, new team members learning the system, and product managers understanding available UI patterns.
- **Complexity**: Advanced
- **Board Size**: 6000x4000px

## Color Scheme

| Role       | Color    | Hex     |
| ---------- | -------- | ------- |
| Primary    | Cerulean | #0288D1 |
| Secondary  | Slate    | #455A64 |
| Accent     | Hot Pink | #E91E63 |
| Background | White    | #FFFFFF |
| Text       | Ink      | #1B1B1B |

## Board Layout

The board is organized as a visual catalog with six sections: Color Tokens, Typography Scale, Spacing & Grid, Buttons & Inputs, Cards & Containers, and Patterns & Usage.

```
+--------------------------------------------------------------+
|  DESIGN SYSTEM — AutoPilot v3.0                              |
|                                                              |
|  +-----------------+  +-----------------+  +----------------+|
|  | Color Tokens    |  | Typography      |  | Spacing &      ||
|  |                 |  | Scale           |  | Grid           ||
|  +-----------------+  +-----------------+  +----------------+|
|                                                              |
|  +-----------------+  +-----------------+  +----------------+|
|  | Buttons &       |  | Cards &         |  | Patterns &     ||
|  | Inputs          |  | Containers      |  | Usage          ||
|  +-----------------+  +-----------------+  +----------------+|
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: System Header

- **Position**: top full-width
- **Size**: 5900x250px
- **Background**: #1B1B1B
- **Elements**:
  - Text block: "AutoPilot Design System" (font size 44, bold, #FFFFFF)
  - Text block: "Version 3.0.0 | Last Updated: March 6, 2026 | Maintainers: Priya Tandon (Design Lead), Leo Chen (Frontend Lead)" (font size 14, #B0BEC5)
  - Text block: "This board documents all reusable components, design tokens, and patterns. Source of truth for Figma library and React component library." (font size 14, #78909C)

### Frame 2: Color Tokens

- **Position**: top-left
- **Size**: 1900x1500px
- **Background**: #FFFFFF with #0288D1 top border (6px)
- **Elements**:
  - Text block: "Color Tokens" (font size 28, bold, #1B1B1B)
  - Text block: "Semantic Tokens (use these in code)" (font size 18, bold, #455A64)
  - Shape (table, 1800x600):
    - Header: "Token Name | Value | Usage | Swatch"
    - Row: "--color-primary | #2962FF | Primary actions, links, active states | [blue swatch]"
    - Row: "--color-primary-hover | #1E88E5 | Primary button hover | [darker blue swatch]"
    - Row: "--color-primary-light | #E3F2FD | Selected backgrounds, highlights | [light blue swatch]"
    - Row: "--color-success | #00C853 | Success messages, completed states | [green swatch]"
    - Row: "--color-warning | #FFC400 | Warnings, attention badges | [amber swatch]"
    - Row: "--color-error | #D32F2F | Errors, destructive actions | [red swatch]"
    - Row: "--color-text-primary | #1B1B1B | Headings, body text | [near-black swatch]"
    - Row: "--color-text-secondary | #607D8B | Labels, captions, helper text | [gray swatch]"
    - Row: "--color-text-disabled | #BDBDBD | Disabled text, placeholder | [light gray swatch]"
    - Row: "--color-bg-page | #FAFAFA | Page background | [off-white swatch]"
    - Row: "--color-bg-surface | #FFFFFF | Card, modal, popover backgrounds | [white swatch]"
    - Row: "--color-bg-elevated | #F5F5F5 | Sidebar, nav backgrounds | [gray swatch]"
    - Row: "--color-border-default | #E0E0E0 | Default borders, dividers | [light gray swatch]"
    - Row: "--color-border-focus | #2962FF | Focus ring color | [blue swatch]"
  - Text block: "Dark Mode Tokens" (font size 18, bold, #455A64)
  - Shape (table, 1800x200):
    - Header: "Token | Light Mode | Dark Mode"
    - Row: "--color-bg-page | #FAFAFA | #121212"
    - Row: "--color-bg-surface | #FFFFFF | #1E1E1E"
    - Row: "--color-text-primary | #1B1B1B | #E0E0E0"
    - Row: "--color-border-default | #E0E0E0 | #424242"

### Frame 3: Typography Scale

- **Position**: top-center
- **Size**: 1900x1500px
- **Background**: #FFFFFF with #455A64 top border (6px)
- **Elements**:
  - Text block: "Typography Scale" (font size 28, bold, #1B1B1B)
  - Text block: "Font Family: Inter (primary), JetBrains Mono (code)" (font size 16, #607D8B)
  - Text block: "Display" (font size 48, bold, #1B1B1B)
  - Text block: "Inter Bold, 48px/56px, -0.5px tracking. Use for hero sections, marketing pages." (font size 13, #607D8B)
  - Text block: "Heading 1" (font size 32, font-weight 600, #1B1B1B)
  - Text block: "Inter SemiBold, 32px/40px, -0.25px tracking. Use for page titles, section headers." (font size 13, #607D8B)
  - Text block: "Heading 2" (font size 24, font-weight 600, #1B1B1B)
  - Text block: "Inter SemiBold, 24px/32px. Use for card titles, modal headers." (font size 13, #607D8B)
  - Text block: "Heading 3" (font size 20, font-weight 500, #1B1B1B)
  - Text block: "Inter Medium, 20px/28px. Use for sub-section headers." (font size 13, #607D8B)
  - Text block: "Body Large" (font size 18, #1B1B1B)
  - Text block: "Inter Regular, 18px/28px. Use for long-form content, blog posts." (font size 13, #607D8B)
  - Text block: "Body" (font size 16, #1B1B1B)
  - Text block: "Inter Regular, 16px/24px. Default body text for UI." (font size 13, #607D8B)
  - Text block: "Body Small" (font size 14, #607D8B)
  - Text block: "Inter Regular, 14px/20px. Use for secondary text, table cells." (font size 13, #607D8B)
  - Text block: "Caption" (font size 12, font-weight 500, #607D8B, uppercase, letter-spacing 1px)
  - Text block: "Inter Medium, 12px/16px, uppercase, 1px tracking. Use for labels, badges, overlines." (font size 13, #607D8B)
  - Text block: "const apiUrl = 'https://api.autopilot.io';" (font size 14, monospace, #1B1B1B)
  - Text block: "JetBrains Mono Regular, 14px/22px. Use for code snippets and technical content." (font size 13, #607D8B)

### Frame 4: Spacing & Grid

- **Position**: top-right
- **Size**: 1900x1500px
- **Background**: #FFFFFF with #E91E63 top border (6px)
- **Elements**:
  - Text block: "Spacing & Grid" (font size 28, bold, #1B1B1B)
  - Text block: "Base Unit: 4px" (font size 20, bold, #E91E63)
  - Text block: "All spacing uses multiples of 4px. The scale provides consistent rhythm across the UI." (font size 14, #607D8B)
  - Text block: "Spacing Scale" (font size 18, bold, #455A64)
  - Shape (table, 1800x400):
    - Header: "Token | Value | Pixels | Usage"
    - Row: "--space-xxs | 0.25rem | 4px | Inline icon padding"
    - Row: "--space-xs | 0.5rem | 8px | Tight component spacing, badge padding"
    - Row: "--space-sm | 0.75rem | 12px | Form field gap, button padding vertical"
    - Row: "--space-md | 1rem | 16px | Standard content spacing, card padding"
    - Row: "--space-lg | 1.5rem | 24px | Section spacing, modal padding"
    - Row: "--space-xl | 2rem | 32px | Between major sections"
    - Row: "--space-xxl | 3rem | 48px | Page-level vertical spacing"
    - Row: "--space-xxxl | 4rem | 64px | Hero section spacing"
  - Text block: "Grid System" (font size 18, bold, #455A64)
  - Text block: "12-column grid with 24px gutters. Max content width: 1200px centered." (font size 14, #607D8B)
  - Shape (rectangle, #E3F2FD, 1800x60): Visual grid — 12 equal columns with 24px gutters shown as alternating light blue/white strips
  - Text block: "Breakpoints" (font size 18, bold, #455A64)
  - Shape (table, 1800x200):
    - Header: "Name | Value | Columns | Gutter"
    - Row: "Mobile | 0-767px | 4 columns | 16px"
    - Row: "Tablet | 768-1023px | 8 columns | 20px"
    - Row: "Desktop | 1024-1439px | 12 columns | 24px"
    - Row: "Wide | 1440px+ | 12 columns | 24px (max-width: 1200px)"

### Frame 5: Buttons & Inputs

- **Position**: bottom-left
- **Size**: 1900x1500px
- **Background**: #FFFFFF with #0288D1 top border (6px)
- **Elements**:
  - Text block: "Buttons" (font size 28, bold, #1B1B1B)
  - Text block: "Primary Button" (font size 16, bold, #455A64)
  - Shape (button, #2962FF, 160x40, rounded 6px): "Create Sprint" (text #FFFFFF, Inter SemiBold 14px)
  - Shape (button, #1E88E5, 160x40, rounded 6px): "Create Sprint" (hover state)
  - Shape (button, #BDBDBD, 160x40, rounded 6px): "Create Sprint" (disabled state, text #FFFFFF)
  - Text: "Background: --color-primary. Border-radius: 6px. Padding: 10px 20px. Font: Inter SemiBold 14px."
  - Text block: "Secondary Button" (font size 16, bold, #455A64)
  - Shape (button, #FFFFFF, 160x40, rounded 6px, border #2962FF 1px): "Cancel" (text #2962FF)
  - Shape (button, #E3F2FD, 160x40, rounded 6px, border #2962FF 1px): "Cancel" (hover state)
  - Text: "Background: transparent. Border: 1px solid --color-primary. Text: --color-primary."
  - Text block: "Destructive Button" (font size 16, bold, #455A64)
  - Shape (button, #D32F2F, 160x40, rounded 6px): "Delete Project" (text #FFFFFF)
  - Text: "Background: --color-error. Use for irreversible actions. Always with confirmation dialog."
  - Text block: "Ghost Button" (font size 16, bold, #455A64)
  - Shape (button, transparent, 160x40): "Learn More" (text #2962FF, underline)
  - Text: "No background or border. Text link style. Use for low-emphasis actions."
  - Text block: "Button Sizes" (font size 16, bold, #455A64)
  - Shape (button, #2962FF, 120x32, rounded 4px): "Small" (text 12px)
  - Shape (button, #2962FF, 160x40, rounded 6px): "Medium (default)" (text 14px)
  - Shape (button, #2962FF, 200x48, rounded 8px): "Large" (text 16px)
  - Text block: "Text Inputs" (font size 28, bold, #1B1B1B)
  - Shape (input, #FFFFFF, 300x40, border #E0E0E0 1px, rounded 6px): "Default" — label "Sprint Name" above, placeholder "Enter sprint name..."
  - Shape (input, #FFFFFF, 300x40, border #2962FF 2px, rounded 6px): "Focused" — blue border, cursor visible
  - Shape (input, #FFFFFF, 300x40, border #D32F2F 1px, rounded 6px): "Error" — red border, helper text "Sprint name is required" in red below
  - Shape (input, #F5F5F5, 300x40, border #E0E0E0 1px, rounded 6px): "Disabled" — gray background, dimmed text
  - Text: "Height: 40px. Border-radius: 6px. Padding: 10px 12px. Font: Inter Regular 14px. Label: Inter Medium 14px above."

### Frame 6: Cards & Containers

- **Position**: bottom-center
- **Size**: 1900x1500px
- **Background**: #FFFFFF with #455A64 top border (6px)
- **Elements**:
  - Text block: "Cards & Containers" (font size 28, bold, #1B1B1B)
  - Text block: "Standard Card" (font size 18, bold, #455A64)
  - Shape (card, #FFFFFF, 340x200, border #E0E0E0 1px, rounded 8px, shadow 0 1px 3px rgba(0,0,0,0.12)):
    - Text: "Card Title" (Inter SemiBold 16px)
    - Text: "Card description text goes here with up to two lines of content before truncation." (Inter Regular 14px, #607D8B)
    - Shape (button, #2962FF, 80x32, rounded 4px): "Action" (text #FFFFFF, 12px)
  - Text: "Padding: 16px. Border-radius: 8px. Shadow: 0 1px 3px rgba(0,0,0,0.12). Border: 1px solid --color-border-default."
  - Text block: "Task Card" (font size 18, bold, #455A64)
  - Shape (card, #FFFFFF, 260x160, border-left #2962FF 4px, rounded 4px, shadow):
    - Text: "Fix login timeout bug" (Inter SemiBold 14px)
    - Text: "HIGH" (badge, #FFEBEE, text #D32F2F, 12px) — "Core Platform" (badge, #E3F2FD, text #0288D1, 12px)
    - Text: "Due: Apr 10 | Aisha K." (Inter Regular 12px, #607D8B)
    - Shape (avatar circle, #CE93D8, 24x24): "AK"
  - Text: "Left border indicates status color. Padding: 12px. Width: flexible (260px in Kanban, full-width in list)."
  - Text block: "Modal / Dialog" (font size 18, bold, #455A64)
  - Shape (rectangle, rgba(0,0,0,0.5), 400x300): Overlay backdrop
  - Shape (card, #FFFFFF, 340x240, rounded 12px, shadow 0 8px 24px rgba(0,0,0,0.15)):
    - Text: "Delete Project?" (Inter SemiBold 20px)
    - Text: "This action cannot be undone. All tasks and sprint data will be permanently removed." (Inter Regular 14px, #607D8B)
    - Shape (button, #D32F2F, 80x36): "Delete" | Shape (button, #FFFFFF, border, 80x36): "Cancel"
  - Text: "Max width: 480px. Padding: 24px. Border-radius: 12px. Centered in viewport with backdrop overlay."
  - Text block: "Toast / Notification" (font size 18, bold, #455A64)
  - Shape (card, #E8F5E9, 360x60, rounded 8px, shadow, border-left #00C853 4px):
    - Text: "Sprint created successfully" (Inter Medium 14px, #1B5E20)
    - Text: "[x]" close button, right-aligned
  - Text: "Appears top-right. Auto-dismiss after 5 seconds. Left border color varies: green (success), amber (warning), red (error), blue (info)."

### Frame 7: Patterns & Usage

- **Position**: bottom-right
- **Size**: 1900x1500px
- **Background**: #FFFFFF with #E91E63 top border (6px)
- **Elements**:
  - Text block: "Patterns & Usage" (font size 28, bold, #1B1B1B)
  - Text block: "Loading States" (font size 18, bold, #455A64)
  - Shape (card, #F5F5F5, 340x120, rounded 8px): Skeleton card — three gray shimmer bars representing title, subtitle, action
  - Text: "Use skeleton screens for content loading. Shimmer animation (left-to-right). Match the layout shape of the content being loaded."
  - Text block: "Empty States" (font size 18, bold, #455A64)
  - Shape (card, #FFFFFF, 340x200, rounded 8px, border dashed #E0E0E0):
    - Shape (circle, #F5F5F5, 60x60): Illustration placeholder
    - Text: "No sprints yet" (Inter SemiBold 16px, #455A64, centered)
    - Text: "Create your first sprint to get started" (Inter Regular 14px, #607D8B, centered)
    - Shape (button, #2962FF, 140x36): "Create Sprint"
  - Text: "Always include: illustration/icon + headline + description + primary CTA. Never show a blank area."
  - Text block: "Error States" (font size 18, bold, #455A64)
  - Shape (card, #FFEBEE, 340x100, rounded 8px, border-left #D32F2F 4px):
    - Text: "Something went wrong" (Inter SemiBold 14px, #D32F2F)
    - Text: "We could not load your sprints. Please try again." (Inter Regular 14px, #607D8B)
    - Shape (button outline, #D32F2F border, 80x32): "Retry"
  - Text: "Error banner: inline, above affected content. Include actionable message + retry when possible."
  - Text block: "Focus & Accessibility" (font size 18, bold, #455A64)
  - Sticky note (blue #E3F2FD, 800x100): "Focus ring: 2px solid --color-border-focus (#2962FF), 2px offset. Visible on keyboard navigation, hidden on mouse click."
  - Sticky note (blue #E3F2FD, 800x100): "All interactive elements must meet WCAG 2.1 AA: 4.5:1 contrast for text, 3:1 for large text. Tab order matches visual order."
  - Sticky note (blue #E3F2FD, 800x100): "Color is never the sole indicator. Always pair with text labels, icons, or patterns. Capacity bars use color + percentage text."
  - Text block: "Motion & Animation" (font size 18, bold, #455A64)
  - Text block: "Duration: micro-interactions 150ms, transitions 250ms, page transitions 350ms. Easing: ease-out for enter, ease-in for exit. Reduced motion: respect prefers-reduced-motion media query." (font size 14, #607D8B)

## Connectors & Flow

- No directional flow — this is a reference board, not a process.
- Visual divider lines (#E0E0E0, 1px) separate the three columns and two rows.
- Cross-references within the board: "See Color Tokens for token values" noted in Buttons section; "See Typography Scale for font specs" noted in Cards section.

## Example Content

The board documents the complete design system for AutoPilot v3.0 with 14 semantic color tokens (plus dark mode variants), a 9-step typography scale with two font families, an 8-step spacing scale with 4 breakpoints, 4 button variants with 3 sizes, 4 input states, 4 container patterns (standard card, task card, modal, toast), and 4 usage patterns (loading, empty, error, focus states). Every element includes implementation specs (CSS values, spacing, font details).

## Variations

1. **Figma Component Library Companion**: Mirror the Figma component library structure. Add a "Component Status" badge per component (Stable, Beta, Deprecated). Include Figma file links.
2. **Developer Documentation**: Add code snippets next to each component showing the React/CSS implementation. Include prop tables for component APIs.
3. **Brand Extension**: Add sections for illustration style, photography guidelines, and brand-specific patterns (charts, data viz, marketing page components).

## Build Instructions

1. Create board at 6000x4000px with background #FFFFFF.
2. Place Frame 1 (Header) at (50, 50), size 5900x250, background #1B1B1B.
3. Place Frame 2 (Colors) at (50, 350), size 1900x1500. Place Frame 3 (Typography) at (2000, 350). Place Frame 4 (Spacing) at (3950, 350).
4. Place Frame 5 (Buttons/Inputs) at (50, 1900), size 1900x1500. Place Frame 6 (Cards) at (2000, 1900). Place Frame 7 (Patterns) at (3950, 1900).
5. Add top-border color accents to each frame.
6. Build color token tables with actual color swatches as small rectangles next to each row.
7. Render typography scale as actual styled text at the specified sizes.
8. Create button and input states as shape groups that look like real UI components.
9. Build card examples with realistic content, shadows, and borders.
10. Add the grid visualization as a series of alternating columns.

## Tips & Best Practices

- This board should be the first stop for any designer or developer starting work on a new feature. Bookmark it.
- Keep the board in sync with the Figma library and the code component library. A design system is only as useful as it is accurate.
- When adding a new component, always include: visual example, all states (default, hover, focus, active, disabled, error), specs (size, spacing, colors as tokens), and usage guidelines.
- Review the system quarterly: deprecate unused components, consolidate similar patterns, and update token values if the brand evolves.
- Accessibility guidelines are not optional addenda — they are core to every component specification.
