# Build Process — Team & HR Boards

## Overview

Team and HR boards require careful orchestration because they combine structured data (headcounts, ratings, competency scores) with deeply human content (feedback quotes, personal notes, career aspirations). The build process must ensure data accuracy while preserving the warmth and humanity that makes these boards effective. This guide covers the six-phase process optimized for organizational accuracy and human-centered design.

---

## Phase 1: Discovery

### Gather Organizational Inputs

**For Org Charts**:

- Current employee roster (names, titles, departments, managers)
- Reporting relationships (direct and dotted-line)
- Headcount data (current, planned, open roles)
- Recent or upcoming organizational changes (reorgs, new hires, departures)
- Span of control guidelines (company policy on max direct reports)
- Department color conventions (if existing)

**For Onboarding Boards**:

- New hire details (name, role, team, start date, manager, buddy)
- Role-specific tasks and tools (what does this role need access to?)
- Company values, cultural norms, and communication expectations
- Pre-boarding checklist (HR responsibilities before Day 1)
- Key contacts for the new hire's department and cross-functional partners
- 30-60-90 day expectations from the hiring manager

**For Team Building Boards**:

- Team roster (names, roles, tenures)
- Workshop agenda and activities planned
- Any existing team values, agreements, or cultural artifacts
- Room setup details (in-person) or platform details (remote)
- Facilitator notes and desired outcomes

**For Performance Reviews**:

- Goals/OKRs from the review period with achievement data
- Competency framework for the role and level
- 360-degree feedback (collected and anonymized)
- Self-assessment from the employee
- Compensation guidance (merit increase ranges, equity refresh guidelines)
- Career ladder documentation (what criteria define the next level?)
- Previous review notes (for continuity)

### Define Scope

1. **What type of board?** (Org chart, onboarding, team building, performance review)
2. **Who is the audience?** (Leadership, the team itself, a specific employee, HR)
3. **What level of detail?** (Company-wide org chart vs. department-level; full review vs. simplified)
4. **Is this confidential?** (Performance data, compensation = yes; org chart, team building = usually no)
5. **Will this be interactive?** (Onboarding checkboxes, workshop sticky notes = yes; org chart = usually no)

---

## Phase 2: Structure

### Step 1: Set Up the Board

```
Org chart:           4800 x 3400px, background #FAFAFA
Onboarding board:    4600 x 3200px, background #FAFAFA
Team building board: 4000 x 3000px, background #FAFAFA
Performance review:  5200 x 3600px, background #FAFAFA
```

### Step 2: Create Frame Skeleton

**Org Chart skeleton**:

1. Header frame (full width, 150px)
2. Tree area (remaining width minus sidebar width)
3. Level guides (invisible horizontal lines at each level's y-position)
4. Sidebar frame (right side, 800px wide, full height below header)

**Onboarding Board skeleton**:

1. Header frame (full width, 180px)
2. Lane frames (4 equal-width columns for Pre-boarding, Week 1, Week 2, Weeks 3-4)
3. Panel frames (3 panels below lanes: Key Contacts, 30-60-90 Goals, Culture)

**Team Building skeleton**:

1. Header frame (full width, 160px)
2. Activity frames (2 rows x 3 columns, equal-sized cells)
3. Leave 40-60% empty space within each cell for participant contributions

**Performance Review skeleton**:

1. Header frame (full width, 180px)
2. Six content frames (2 rows x 3 columns)
3. Flow labels between columns: "PAST" | "PRESENT" | "FUTURE"

### Step 3: Verify Data Integrity (Org Charts)

Before populating any content, verify the organizational data:

```
CHECK 1: Does every person have exactly one direct manager?
  - Exception: CEO reports to Board of Directors
  - Exception: Dotted-line reports have TWO managers (one solid, one dotted)

CHECK 2: Do team headcounts sum to department totals?
  - Engineering teams (28 + 22 + 12 + 10) = 72 = CTO card headcount

CHECK 3: Do department totals sum to company total?
  - 72 + 48 + 28 + 18 + 12 + 9 = 187 = Header headcount

CHECK 4: Are open roles accounted for?
  - Open roles + current headcount = planned headcount
  - 187 + 27 = 214

CHECK 5: Does span of control fall within guidelines?
  - Flag any manager with >8 direct reports
  - Flag any department with only 1 level of management
```

---

## Phase 3: Content Population

### Org Chart Build Order

1. **Header**: Company name, effective date, total headcount, last updated by
2. **CEO card**: Name, title, direct reports summary
3. **C-Suite cards**: Name, title, department, headcount, tenure — colored by department
4. **Reporting lines**: Solid lines from CEO to C-Suite (3px)
5. **VP/Director cards**: Name, title, team size — lighter department color
6. **Reporting lines**: Solid lines from C-Suite to VPs (2px)
7. **Team cards**: Team name, lead, member count — lightest department color
8. **Reporting lines**: Solid lines from VPs to teams (1px)
9. **Dotted-line reports**: Dashed lines with context labels
10. **Sidebar**: Headcount table, key metrics, open roles by priority, org health flags

### Onboarding Build Order

1. **Header**: Personalized welcome, role/team/start date, buddy/manager
2. **Pre-boarding lane**: HR-completed items (pre-checked), Day 1 schedule (unchecked)
3. **Week 1 lane**: Learning-focused tasks with deadlines and helpers identified
4. **Week 2 lane**: Contribution-focused tasks with specific project assignments
5. **Weeks 3-4 lane**: Ownership-focused tasks with deliverables
6. **Key contacts panel**: Contact cards with communication channels
7. **30-60-90 goals panel**: Three milestone sections with success signals
8. **Culture panel**: Company values with behavioral descriptions, cultural norms
9. **Manager and buddy notes**: Personal sticky notes throughout the lanes
10. **Flow arrows**: Connect lanes in temporal sequence

### Team Building Build Order

1. **Header**: Team name, facilitator, date, participants
2. **Values frame**: Prompt text + empty space for sticky notes + voted results area
3. **Strengths frame**: Person cards (pre-populated with names, empty for strengths)
4. **Agreements frame**: Prompt text + numbered sticky note slots
5. **Fun facts frame**: Prompt text + empty space for contributions
6. **Preferences frame**: Pre-built table structure with names, columns empty
7. **Action items frame**: Empty except for prompt text (filled during workshop wrap-up)
8. **Flow connections**: Dashed arrows between related frames

### Performance Review Build Order

1. **Header**: Employee name/role, review period, manager, date, confidentiality notice
2. **Goals frame**: Goal cards with KR status badges and evidence
3. **Competency frame**: Assessment table with self/manager ratings and gap analysis
4. **Feedback frame**: Synthesized themes with representative quotes
5. **Overall rating frame**: Rating badge, manager narrative, compensation recommendation
6. **Development plan frame**: Development area cards with specific actions
7. **Career path frame**: Ladder visualization, readiness table, conversation notes
8. **Flow connectors**: Arrows showing how assessment feeds into development

---

## Phase 4: Validation Pass

### Org Chart Validation

| Check              | Question                                           | Pass? |
| ------------------ | -------------------------------------------------- | ----- |
| Headcount accuracy | Do team counts sum to department totals?           |       |
| Reporting accuracy | Does every person have exactly one direct manager? |       |
| Naming consistency | Are names spelled correctly and consistently?      |       |
| Title accuracy     | Do titles match HR records?                        |       |
| Color consistency  | Does each department use the same color?           |       |
| Span of control    | Are flags raised for spans exceeding guidelines?   |       |
| Open roles         | Are all approved open roles shown?                 |       |
| Dotted lines       | Are all matrix reporting relationships shown?      |       |
| Currency           | Is the effective date current?                     |       |

### Performance Review Validation

| Check                    | Question                                            | Pass? |
| ------------------------ | --------------------------------------------------- | ----- |
| Goal completeness        | Are all goals from the period included?             |       |
| Evidence per KR          | Does every KR status have supporting evidence?      |       |
| Competency coverage      | Are all role-level competencies assessed?           |       |
| Self-assessment included | Did the employee provide self-ratings?              |       |
| Feedback attribution     | Is manager feedback attributed, peer feedback anon? |       |
| Rating justification     | Does the narrative explain the overall rating?      |       |
| Dev plan specificity     | Does every dev area have specific, timed actions?   |       |
| Career path alignment    | Do dev areas connect to promotion criteria?         |       |
| Compensation accuracy    | Are merit/equity/bonus amounts within guidelines?   |       |
| Confidentiality          | Is the confidentiality notice present?              |       |

### Onboarding Validation

| Check              | Question                                               | Pass? |
| ------------------ | ------------------------------------------------------ | ----- |
| Personalization    | Is the new hire's name/role/team throughout?           |       |
| Contact accuracy   | Are all contact details current (Slack, email)?        |       |
| Tool access        | Are all required tools listed with setup steps?        |       |
| Calendar alignment | Do Day 1 items match the pre-populated calendar?       |       |
| Manager voice      | Do manager notes sound personal, not corporate?        |       |
| Cultural context   | Are values and norms included?                         |       |
| Escalation path    | Does the new hire know who to ask for help?            |       |
| 30-60-90 alignment | Do milestones match the hiring manager's expectations? |       |

---

## Phase 5: Visual Polish

### Step 1: Alignment Check

- All cards at the same level should share the same y-coordinate (org charts)
- All lane frames should have exactly the same width (onboarding)
- All workshop cells should be exactly the same size (team building)
- All columns should align vertically across rows (performance reviews)

### Step 2: Connector Verification

- Solid lines connect every direct report to their manager
- Dashed lines are present for all dotted-line relationships
- Line thickness decreases by level (3px → 2px → 1px)
- No lines cross card boundaries (lines connect edge-to-edge)
- Arrow labels are readable (11-12pt) and do not overlap other elements

### Step 3: Color Consistency

- Each department uses the same color across all levels (org chart)
- Phase colors progress logically (onboarding: amber → green → purple → teal)
- Sticky note colors match the content type (see visual guide: yellow = notes, green = positive, orange = growth)
- Frame background tints are distinct but not overwhelming

### Step 4: Typography Verification

- Header text: 28-30pt bold, white on primary
- Section titles: 20-24pt bold, section color
- Card titles/names: 14-18pt bold depending on level
- Body text: 12-13pt regular
- Metadata: 10-11pt regular, #6D6D6D
- No text smaller than 10pt anywhere on the board

### Step 5: Space Management

- Org charts: 80-90% fill density (structured, complete)
- Onboarding boards: 70-80% fill density (checklists fill lanes)
- Team building boards: 40-60% fill density (leave room for contributions)
- Performance reviews: 70-80% fill density (structured but with breathing room)

---

## Phase 6: Miro API Translation

### Coordinate Calculation for Org Chart

```
Header:            x = 2400, y = 75,   w = 4800, h = 150
CEO card:          x = 2000, y = 300,  w = 400,  h = 200
C-Suite cards:     y = 550,  h = 180,  distributed evenly across tree width
VP/Director cards: y = 800,  h = 160,  distributed under parent C-Suite card
Team cards:        y = 1050, h = 120,  distributed under parent VP card
Sidebar:           x = 4300, y = 500,  w = 800,  h = 2800
```

### Coordinate Calculation for Onboarding Board

```
Header:            x = 2300, y = 90,   w = 4600, h = 180
Lane 1:            x = 600,  y = 800,  w = 1100, h = 1200
Lane 2:            x = 1750, y = 800,  w = 1100, h = 1200
Lane 3:            x = 2900, y = 800,  w = 1100, h = 1200
Lane 4:            x = 4050, y = 800,  w = 1100, h = 1200
Panel A:           x = 600,  y = 2100, w = 1100, h = 1200
Panel B:           x = 2300, y = 2100, w = 2200, h = 1200
Panel C:           x = 4000, y = 2100, w = 1100, h = 1200
```

### Element Mapping

| Board Element      | Miro Type                 | Properties                                |
| ------------------ | ------------------------- | ----------------------------------------- |
| Header             | Frame + Text              | Primary background, white text            |
| Role card (filled) | Shape (rounded rectangle) | Department color fill, white text         |
| Role card (light)  | Shape (rounded rectangle) | Light tint fill, dark text                |
| Reporting line     | Line                      | Solid, #37474F, thickness varies by level |
| Dotted line        | Line                      | Dashed, department color, 1px             |
| Checklist item     | Text + Shape (checkbox)   | Checked = green fill, unchecked = gray    |
| Sticky note        | Sticky note               | Color by context, 12-13pt text            |
| Status badge       | Shape (rounded rectangle) | Small, colored per status                 |
| Data table         | Text block (formatted)    | Alternating row backgrounds               |
| Career ladder      | Shapes + Lines            | Solid/dashed borders, arrows between      |
| Contact card       | Shape (rounded rectangle) | White fill, subtle border                 |

### Build Order (API Sequence)

1. Create board with background color
2. Create all frames (header, content areas, sidebar/panels)
3. Add header text elements
4. **For org charts**: Build top-down (CEO → C-Suite → VPs → Teams → sidebar → connectors)
5. **For onboarding**: Build left-to-right (Pre-boarding → Week 1 → Week 2 → Weeks 3-4 → panels)
6. **For team building**: Build grid (frame by frame, top-left to bottom-right)
7. **For performance reviews**: Build left-to-right (Goals → Competencies → Feedback → Rating → Dev Plan → Career)
8. Add connector lines last (after all position-dependent elements are placed)
9. Add sticky notes and annotation elements
10. Final positioning adjustments (ensure no overlaps)

---

## Common Pitfalls

### 1. Headcount Does Not Add Up

The most common and most embarrassing error in org charts. If team-level headcounts do not sum to department totals, or department totals do not sum to the company total, the chart loses credibility.

**Prevention**: Calculate all sums before building. Add a validation step that checks math explicitly.

### 2. Generic Onboarding

Using the same onboarding board for every role. An engineer's first week looks nothing like a designer's or a salesperson's.

**Prevention**: Create role-family templates (Engineering, Design, Sales, etc.) and personalize each board for the specific hire.

### 3. Rating Without Evidence

Putting a "4.2 / 5.0" on a performance review without explaining how that number was derived. The rating feels arbitrary.

**Prevention**: Build the Goals frame and Competency frame BEFORE the Overall Rating frame. The rating should be the output of those inputs, not an independent judgment.

### 4. Empty Workshop Board After the Session

Running a great team building session but never filling in the digital board with the results. The physical sticky notes get thrown away and the agreements are forgotten.

**Prevention**: Assign someone (usually the facilitator) to digitize the workshop outputs to the Miro board within 48 hours. Schedule a follow-up meeting to review the board.

### 5. Stale Org Chart

An org chart that is 6 months old, missing recent hires, and showing departed employees. It is worse than no org chart because it actively misleads.

**Prevention**: Assign an owner (People Operations) and set a quarterly review cadence. Add "Last Updated" metadata to the header.

### 6. Confidentiality Leak

A performance review board that is shared with the wrong access level, making compensation data or peer feedback visible to unauthorized viewers.

**Prevention**: Set Miro board permissions to "specific people" for performance reviews. Never share review boards via public link. Include a visible confidentiality notice on the board.
