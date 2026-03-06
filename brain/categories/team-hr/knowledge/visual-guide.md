# Visual Guide — Team & HR Boards

## Overview

Team and HR boards must balance corporate professionalism with human warmth. The visual language needs to feel structured enough for C-suite presentations and warm enough for a new hire's first day. This guide provides four palettes, a complete typography hierarchy, element choice rules, and accessibility standards for all Team/HR board types.

---

## Color Palettes

### Palette 1: Corporate Modern (Default)

The default palette for org charts, performance reviews, and any board that will be shared with leadership or used in formal HR processes.

| Role            | Color          | Hex     | Usage                                       |
| --------------- | -------------- | ------- | ------------------------------------------- |
| Primary         | Corporate Blue | #1565C0 | Headers, primary actions, key labels        |
| Engineering     | Sage Green     | #388E3C | Engineering department, positive indicators |
| Sales/Marketing | Warm Amber     | #EF6C00 | Sales department, attention, early phases   |
| Product         | Deep Purple    | #7B1FA2 | Product department, strategy, values        |
| Finance         | Dark Teal      | #00695C | Finance department, development, growth     |
| People/HR       | Signal Red     | #D32F2F | People department, alerts, critical flags   |
| Executive       | Navy           | #0D47A1 | Executive level, highest authority          |
| Highlight       | Warm Gold      | #F9A825 | Compensation, recognition, special callouts |
| Background      | Soft White     | #FAFAFA | Board and frame backgrounds                 |
| Text Primary    | Charcoal       | #212121 | All body text                               |
| Text Secondary  | Medium Gray    | #6D6D6D | Supporting text, metadata                   |
| Text Muted      | Light Gray     | #757575 | Timestamps, attributions, footnotes         |
| Connector       | Dark Slate     | #37474F | Reporting lines, flow connections           |
| Border          | Fog Gray       | #E0E0E0 | Card borders, table gridlines               |

**Light tints for frame backgrounds** (40-50% opacity):

| Department      | Tint Color    | Hex     | Usage                                |
| --------------- | ------------- | ------- | ------------------------------------ |
| Engineering     | Mint Wash     | #E8F5E9 | Engineering frames, positive zones   |
| Sales/Marketing | Peach Wash    | #FFF3E0 | Sales frames, warm attention zones   |
| Product         | Lavender Wash | #F3E5F5 | Product frames, values sections      |
| Finance         | Seafoam Wash  | #E0F2F1 | Finance frames, development sections |
| People/HR       | Blush Wash    | #FCE4EC | People frames, fun/social sections   |
| Neutral         | Smoke         | #F5F5F5 | Summary panels, action items         |

### Palette 2: Warm & Approachable

For team building workshops, onboarding boards, and boards designed for employee-facing use rather than leadership presentations.

| Role           | Color        | Hex     | Usage                              |
| -------------- | ------------ | ------- | ---------------------------------- |
| Primary        | Ocean Blue   | #1976D2 | Headers, structural elements       |
| Values         | Rich Purple  | #7B1FA2 | Team values, culture elements      |
| Strengths      | Growth Green | #2E7D32 | Strengths, positive contributions  |
| Agreements     | Warm Amber   | #EF6C00 | Working agreements, commitments    |
| Fun            | Coral Pink   | #E91E63 | Ice breakers, social elements      |
| Preferences    | Dark Teal    | #00695C | Collaboration preferences, systems |
| Background     | Soft White   | #FAFAFA | Board background                   |
| Sticky Default | Warm Yellow  | #FFF9C4 | General sticky notes               |
| Text           | Charcoal     | #212121 | Body text                          |

### Palette 3: Executive Dashboard

For boards that will be presented to the board of directors, investors, or used in executive offsites. More muted, more formal, with data-heavy styling.

| Role            | Color        | Hex     | Usage                            |
| --------------- | ------------ | ------- | -------------------------------- |
| Primary         | Deep Navy    | #0D47A1 | Headers, primary elements        |
| Secondary       | Steel Blue   | #546E7A | Section titles, secondary labels |
| Positive        | Forest Green | #1B5E20 | Positive metrics, achievements   |
| Caution         | Dark Amber   | #E65100 | Attention items, moderate risks  |
| Critical        | Deep Red     | #B71C1C | Critical flags, failures         |
| Neutral         | Warm Gray    | #78909C | Supporting text, metadata        |
| Background      | Ice White    | #ECEFF1 | Board background                 |
| Card Background | True White   | #FFFFFF | Card fills                       |
| Text            | Near Black   | #1A1A1A | All text                         |

### Palette 4: People-First (Inclusive)

Designed for diverse teams with attention to accessibility, warmth, and avoiding color combinations that may have unintended cultural associations.

| Role       | Color         | Hex     | Usage                             |
| ---------- | ------------- | ------- | --------------------------------- |
| Primary    | Calm Blue     | #1E88E5 | Headers, structure                |
| Growth     | Soft Green    | #43A047 | Development, positive momentum    |
| Action     | Warm Orange   | #FB8C00 | Action items, next steps          |
| Culture    | Gentle Purple | #8E24AA | Values, culture, identity         |
| Connection | Soft Coral    | #EF5350 | Social, interpersonal elements    |
| Stability  | Sea Teal      | #00897B | Established processes, agreements |
| Background | Cream White   | #FFFDE7 | Board background (warm tone)      |
| Text       | Soft Black    | #263238 | Body text                         |

---

## Department Color System

For org charts and any board that references departments, use a consistent color system across all boards. This is critical — if Engineering is green in the org chart, it must be green in every board that references Engineering.

```
Engineering:       #388E3C  (green family)
Sales & Marketing: #EF6C00  (amber/orange family)
Product:           #7B1FA2  (purple family)
Finance & Legal:   #00695C  (teal family)
People & Culture:  #D32F2F  (red family)
Executive:         #0D47A1  (navy family)
Operations:        #5D4037  (brown family)
Customer Success:  #00838F  (cyan family)
```

Each department color has three intensity levels:

| Level  | Usage                         | Example (Engineering) |
| ------ | ----------------------------- | --------------------- |
| Full   | C-Suite card fills, badges    | #388E3C               |
| Medium | VP/Director card fills        | #C8E6C9               |
| Light  | Team cards, frame backgrounds | #E8F5E9               |

---

## Typography Hierarchy

### Org Chart Typography

| Element              | Size    | Weight  | Color   | Notes                         |
| -------------------- | ------- | ------- | ------- | ----------------------------- |
| Header title         | 28pt    | Bold    | White   | On primary background         |
| Header metadata      | 13pt    | Regular | #B3D4FC | Effective date, headcount     |
| CEO name             | 18pt    | Bold    | White   | On navy card                  |
| CEO title            | 12pt    | Regular | #B3D4FC | Above name on card            |
| C-Suite name         | 16pt    | Bold    | White   | On department color card      |
| C-Suite metadata     | 11pt    | Regular | Tint    | Department, headcount, tenure |
| VP/Director name     | 14pt    | Bold    | #212121 | On light tint card            |
| VP/Director metadata | 11pt    | Regular | #6D6D6D | Team size                     |
| Team name            | 12pt    | Bold    | Dept    | Department color text         |
| Team lead            | 11pt    | Regular | #212121 | "Lead: [Name]"                |
| Team count           | 10pt    | Regular | #6D6D6D | "X engineers/designers/etc."  |
| Sidebar title        | 22pt    | Bold    | #1565C0 | Section header in sidebar     |
| Sidebar data         | 12-13pt | Regular | #212121 | Table content, metrics        |

### Onboarding Typography

| Element           | Size | Weight  | Color   | Notes                     |
| ----------------- | ---- | ------- | ------- | ------------------------- |
| Welcome message   | 30pt | Bold    | White   | Personalized with name    |
| Role/team info    | 14pt | Regular | #B3D4FC | Below welcome message     |
| Phase title       | 20pt | Bold    | Phase   | Color matches phase color |
| Phase date range  | 12pt | Regular | #6D6D6D | "March 10-14"             |
| Checklist item    | 13pt | Regular | #212121 | With checkbox             |
| Manager note      | 13pt | Italic  | Phase   | In sticky note, warm tone |
| Contact name      | 14pt | Bold    | #212121 | In contact card           |
| Contact details   | 11pt | Regular | #6D6D6D | Slack, office, schedule   |
| Value title       | 16pt | Bold    | #7B1FA2 | Company value name        |
| Value description | 12pt | Regular | #6D6D6D | Value explanation         |

### Performance Review Typography

| Element                | Size | Weight  | Color   | Notes                           |
| ---------------------- | ---- | ------- | ------- | ------------------------------- |
| Employee name/role     | 28pt | Bold    | White   | In header                       |
| Review period          | 14pt | Regular | #B3D4FC | Period, type, date              |
| Confidentiality notice | 11pt | Italic  | #FFCDD2 | Red-tinted for visibility       |
| Section title          | 24pt | Bold    | Section | Color matches section color     |
| Goal title             | 16pt | Bold    | #212121 | Goal name                       |
| Key result             | 12pt | Regular | #212121 | KR description                  |
| Status badge           | 11pt | Bold    | White   | On colored badge background     |
| Competency label       | 13pt | Regular | #212121 | In table row                    |
| Rating number          | 28pt | Bold    | White   | Overall rating (large, central) |
| Rating label           | 18pt | Regular | White   | "EXCEEDS EXPECTATIONS"          |
| Manager narrative      | 14pt | Regular | #212121 | Paragraph text                  |
| Feedback quote         | 13pt | Regular | #212121 | In sticky note                  |
| Feedback attribution   | 11pt | Regular | #6D6D6D | "— Name, Title"                 |
| Dev action item        | 13pt | Regular | #212121 | In sticky note                  |
| Career level label     | 14pt | Bold    | #212121 | In ladder card                  |
| Career status          | 12pt | Regular | #6D6D6D | "Alex is here"                  |

---

## Element Choice Rules

### Role Cards (Org Chart)

Role cards are rounded rectangles with department-colored fills. They are the primary building block of org charts.

**Structure**:

```
+---------------------------+
| TITLE (small caps, tint)  |
| NAME (bold, white)        |
| Department | X people     |
| Joined YEAR               |
+---------------------------+
```

**Rules**:

- Corner radius: 8px
- Padding: 16px all sides
- Shadow: none (flat design — shadows clutter at org chart scale)
- Border: none for filled cards, 1px #E0E0E0 for light-tint cards
- Card sizes decrease by level: L1 = 400x200, L2 = 350x180, L3 = 300x160, L4 = 250x120

### Connector Lines (Reporting Relationships)

**Solid lines** = Direct reporting relationship
**Dashed lines** = Dotted-line/matrix reporting

**Rules**:

- Solid line color: #37474F (dark slate)
- Dashed line color: department color of the dotted-line manager
- Thickness by level: L1→L2 = 3px, L2→L3 = 2px, L3→L4 = 1px
- Start point: bottom-center of parent card
- End point: top-center of child card
- No arrowheads on direct reports (the hierarchy is implied by position)
- Arrowheads on dotted-line reports (to clarify direction of the relationship)

### Checklist Items (Onboarding)

Checkboxes with text labels, arranged vertically in timeline lanes.

**Rules**:

- Checkbox size: 18x18px
- Gap between checkbox and text: 10px
- Gap between checklist items: 8px
- Checked state: green fill (#4CAF50) with white checkmark
- Unchecked state: gray outline (#BDBDBD)
- Text color changes when checked: from #212121 to #9E9E9E (subtle dimming to show completion)

### Sticky Notes (Workshops, Feedback, Notes)

Sticky notes are used for participant contributions, manager notes, feedback quotes, and informal content.

**Color mapping by context**:

| Context             | Sticky Color | Hex     |
| ------------------- | ------------ | ------- |
| Manager/leader note | Yellow       | #FFF9C4 |
| Positive/strength   | Green        | #C8E6C9 |
| Growth area         | Orange       | #FFE0B2 |
| Alert/flag          | Pink         | #F8BBD0 |
| Resource/link       | Blue         | #BBDEFB |
| Value/culture       | Purple       | #E1BEE7 |
| Development         | Teal         | #B2DFDB |
| Action item         | Green        | #C8E6C9 |
| Fun/social          | Pink         | #F8BBD0 |

**Rules**:

- Default size: 200 x 120px (workshops), 300 x 100px (feedback), 250 x 100px (notes)
- Font size: 12-13pt
- Attribution text: 11pt, #6D6D6D, at the bottom of the note
- No rotation in formal boards (org charts, reviews); slight rotation allowed in workshop boards for a more organic feel

### Status Badges

Small colored rectangles used to indicate status in performance reviews and OKR tracking.

| Status        | Background | Text    | Shape               |
| ------------- | ---------- | ------- | ------------------- |
| Exceeded      | #2E7D32    | White   | Rounded rect, 8px r |
| Met           | #388E3C    | White   | Rounded rect, 8px r |
| Partially Met | #F9A825    | #212121 | Rounded rect, 8px r |
| Not Met       | #D32F2F    | White   | Rounded rect, 8px r |
| In Progress   | #1565C0    | White   | Rounded rect, 8px r |
| Planned       | #BDBDBD    | #212121 | Dashed outline rect |

**Rules**:

- Size: 120 x 28px (compact) or 160 x 32px (with space)
- Font size: 11pt, bold, uppercase
- Position: immediately after the KR or status it describes
- Consistent use: if one KR has a badge, all KRs must have badges

### Data Tables

Used in competency assessments, headcount summaries, promotion readiness, and collaboration preference matrices.

**Rules**:

- Header row: department or section color background, white text, 13pt bold
- Data rows: alternating #FFFFFF and #F5F5F5 for readability
- Cell padding: 12px horizontal, 8px vertical
- Column alignment: text left-aligned, numbers right-aligned, status center-aligned
- Row height: 40-45px
- Border: 1px #E0E0E0 between cells
- Color-coded cells: green tint for above-target, white for on-target, red tint for below-target

---

## Accessibility Standards

### Color Contrast

All text must meet WCAG AA standards:

| Text Type    | Minimum Contrast | Verified Combinations       |
| ------------ | ---------------- | --------------------------- |
| Body text    | 4.5:1            | #212121 on #FAFAFA = 15.4:1 |
| Header text  | 4.5:1            | White on #1565C0 = 5.1:1    |
| Card title   | 4.5:1            | White on #388E3C = 4.6:1    |
| Metadata     | 4.5:1            | #6D6D6D on #FAFAFA = 5.7:1  |
| Status badge | 4.5:1            | White on #2E7D32 = 5.3:1    |
| Muted text   | 3:1 (large text) | #757575 on #FAFAFA = 4.6:1  |
| Alert text   | 4.5:1            | White on #D32F2F = 4.6:1    |

### Color-Blind Safety

- **Never use color alone** to communicate status. Always pair color with text labels, badges, or icons. "Exceeded" is written in text AND shown with a green badge — not just green.
- **Red-green differentiation**: For competency tables, use green tint (#C8E6C9) and red tint (#FFCDD2) BUT also include text labels ("Above level," "Below level") and consider using a pattern (diagonal lines on below-level cells) for users with protanopia.
- **Department colors**: The department color system uses green, orange, purple, teal, red, and navy — which are distinguishable in most forms of color vision deficiency. Avoid relying solely on green vs red for any critical distinction.

### Text Readability

- Minimum text size: 10pt (used only for metadata that is not critical)
- Recommended minimum for readable content: 12pt
- Line spacing: 1.4-1.5x for paragraph text (manager narratives, feedback quotes)
- Maximum line length: 80 characters for paragraph text
- Sticky note text should never be smaller than 12pt

---

## Visual Anti-Patterns

### 1. The Rainbow Org Chart

**What it looks like**: Every card is a different bright color with no departmental logic. Colors are chosen for variety rather than meaning.

**Why it fails**: Color loses its informational value. Viewers cannot scan the chart and quickly identify which department a role belongs to.

**Fix**: Use the department color system strictly. Limit the palette to 6-8 department colors with consistent meaning.

### 2. The Wall of Text Review

**What it looks like**: A performance review where every frame is filled with dense paragraph text, no badges, no tables, no visual hierarchy.

**Why it fails**: The review becomes a document, not a visual board. The viewer must read everything linearly rather than scanning for key information.

**Fix**: Use status badges for goal outcomes, tables for competency ratings, sticky notes for feedback quotes, and reserve paragraph text only for the manager narrative.

### 3. The Empty Onboarding Board

**What it looks like**: A beautifully designed template with placeholder text like "[Insert task here]" and "[Manager name]."

**Why it fails**: Generic onboarding feels impersonal. The new hire receives the message that nobody took the time to customize their experience.

**Fix**: Every onboarding board must be personalized with the new hire's name, role, manager, buddy, specific team details, and role-relevant tasks.

### 4. The Surveillance Dashboard

**What it looks like**: An org chart or team board that includes individual performance ratings, productivity metrics, or tracking data visible to the entire organization.

**Why it fails**: It creates a culture of surveillance rather than support. Public performance data shames low performers and can create toxic comparison.

**Fix**: Aggregate metrics (headcount, attrition rate) are appropriate for public org charts. Individual performance data belongs only on confidential review boards shared between the employee and their manager.

---

## Cross-Reference Map

| Visual Element    | Also Reference                                                          |
| ----------------- | ----------------------------------------------------------------------- |
| Color palettes    | `10-Finance/visual-guide.md` for corporate/dashboard color systems      |
| Typography        | `02-Project-Management/visual-guide.md` for professional type hierarchy |
| Data tables       | `14-Data-Analytics/visual-guide.md` for table styling best practices    |
| Sticky note usage | `08-Workshops/visual-guide.md` for collaborative sticky note patterns   |
| Status badges     | `02-Project-Management/visual-guide.md` for project status indicators   |
| Accessibility     | `06-Design-UX/visual-guide.md` for comprehensive accessibility guidance |
