# Organization Chart

## Overview

- **Purpose**: A visual organization chart that maps reporting lines, department groupings, role cards with key responsibilities, and headcount summaries — providing a clear picture of how a company or team is structured.
- **Best For**: HR directors, people operations teams, executives communicating company structure, hiring managers planning team growth, and new employees understanding the organization.
- **Complexity**: Medium
- **Board Size**: 4800 x 3400px

## Color Scheme

| Role            | Color          | Hex     |
| --------------- | -------------- | ------- |
| Primary         | Corporate Blue | #1565C0 |
| Engineering     | Sage Green     | #388E3C |
| Sales/Marketing | Warm Amber     | #EF6C00 |
| Product         | Deep Purple    | #7B1FA2 |
| Operations/HR   | Rich Purple    | #7B1FA2 |
| Finance         | Dark Teal      | #00695C |
| Executive       | Navy           | #0D47A1 |
| Background      | Soft White     | #FAFAFA |
| Connector       | Dark Slate     | #37474F |
| Text            | Charcoal       | #212121 |

## Board Layout

The board uses a top-down hierarchical tree layout with the CEO at the top, C-suite on the second row, VPs/Directors on the third row, and teams on the fourth row. A summary sidebar sits on the right.

```
+----------------------------------------------------------------------+
|                    HEADER: Organization Chart                         |
+----------------------------------------------------------------------+
|                                                                      |
|                         [CEO]                                        |
|                           |                                          |
|          +--------+-------+-------+--------+                         |
|          |        |               |        |                         |
|        [CTO]   [CRO]          [CPO]    [CFO]          [Sidebar:    |
|          |        |               |        |            Headcount   |
|     +----+----+   +----+    +----+----+   |            Summary]    |
|     |    |    |   |    |    |    |    |    |                        |
|    [VP] [VP] [VP] [VP] [VP] [VP] [VP] [Dir]                        |
|     |    |    |   |    |    |    |    |                             |
|   [Teams]  [Teams] [Teams] [Teams] [Teams]                         |
|                                                                      |
+----------------------------------------------------------------------+
```

## Frames & Sections

### Header

- **Position**: Top, full-width
- **Size**: 4800 x 150px
- **Background**: #1565C0
- **Elements**:
  - Text block: "NovaTech Inc. — Organization Chart" (font size 28, bold, white)
  - Text block: "Effective: March 1, 2026 | Total Headcount: 187 | Last Updated by: People Operations" (font size 13, #B3D4FC)

### Level 1: CEO

- **Position**: Top-center
- **Size**: 400 x 200px card
- **Background**: #0D47A1 (dark navy)
- **Elements**:
  - **Role Card** (rounded rectangle, #0D47A1 fill, white text):
    - Text: "CEO" (font size 12, #B3D4FC)
    - Text: "Linda Park" (font size 18, bold, white)
    - Text: "Founded 2018 | Reports to: Board of Directors" (font size 11, #B3D4FC)
    - Shape: Small circle avatar placeholder (white outline)
  - Sticky note (yellow, #FFF9C4): "Linda's direct reports: CTO, CRO, CPO, CFO, VP People (5 reports)"

### Level 2: C-Suite

- **Position**: Second row, evenly spaced
- **Size**: 350 x 180px per card (5 cards)
- **Background**: Varies by department
- **Elements**:
  - **CTO Card** (rounded rectangle, #388E3C fill, white text):
    - Text: "CTO" (font size 11, #C8E6C9)
    - Text: "Marcus Wong" (font size 16, bold, white)
    - Text: "Engineering | 72 people" (font size 11, #C8E6C9)
    - Text: "Joined 2018 (co-founder)" (font size 10, #C8E6C9)
  - **CRO Card** (rounded rectangle, #EF6C00 fill, white text):
    - Text: "CRO" (font size 11, #FFE0B2)
    - Text: "James Mitchell" (font size 16, bold, white)
    - Text: "Sales & Marketing | 48 people" (font size 11, #FFE0B2)
    - Text: "Joined 2021" (font size 10, #FFE0B2)
  - **CPO Card** (rounded rectangle, #7B1FA2 fill, white text):
    - Text: "CPO" (font size 11, #E1BEE7)
    - Text: "Aisha Patel" (font size 16, bold, white)
    - Text: "Product | 28 people" (font size 11, #E1BEE7)
    - Text: "Joined 2020" (font size 10, #E1BEE7)
  - **CFO Card** (rounded rectangle, #00695C fill, white text):
    - Text: "CFO" (font size 11, #B2DFDB)
    - Text: "Sarah Chen" (font size 16, bold, white)
    - Text: "Finance & Legal | 18 people" (font size 11, #B2DFDB)
    - Text: "Joined 2019" (font size 10, #B2DFDB)
  - **VP People Card** (rounded rectangle, #D32F2F fill, white text):
    - Text: "VP People" (font size 11, #FFCDD2)
    - Text: "David Kim" (font size 16, bold, white)
    - Text: "People & Culture | 12 people" (font size 11, #FFCDD2)
    - Text: "Joined 2022" (font size 10, #FFCDD2)
  - Connectors: Solid lines from CEO card to each C-suite card (#37474F, 3px)

### Level 3: VPs & Directors (Engineering Branch)

- **Position**: Third row, under CTO
- **Size**: 300 x 160px per card (3 cards)
- **Background**: #C8E6C9 (light green)
- **Elements**:
  - **VP Backend Engineering** (rounded rectangle, #C8E6C9 fill, #212121 text):
    - Text: "VP Backend" (font size 11, #388E3C)
    - Text: "Raj Gupta" (font size 14, bold, #212121)
    - Text: "28 engineers" (font size 11, #6D6D6D)
  - **VP Frontend & Mobile** (rounded rectangle, #C8E6C9 fill):
    - Text: "VP Frontend & Mobile" (font size 11, #388E3C)
    - Text: "Yuki Tanaka" (font size 14, bold, #212121)
    - Text: "22 engineers" (font size 11, #6D6D6D)
  - **VP AI/ML** (rounded rectangle, #C8E6C9 fill):
    - Text: "VP AI/ML" (font size 11, #388E3C)
    - Text: "Dr. Fatima Al-Hassan" (font size 14, bold, #212121)
    - Text: "12 engineers (NEW TEAM)" (font size 11, #EF6C00)
  - **Director of Engineering Operations** (rounded rectangle, #C8E6C9 fill):
    - Text: "Dir. Eng Ops" (font size 11, #388E3C)
    - Text: "Carlos Rivera" (font size 14, bold, #212121)
    - Text: "10 (SRE + DevOps)" (font size 11, #6D6D6D)
  - Connectors: Solid lines from CTO to each VP/Director (#37474F, 2px)

### Level 3: VPs & Directors (Sales & Marketing Branch)

- **Position**: Third row, under CRO
- **Size**: 300 x 160px per card (3 cards)
- **Background**: #FFE0B2 (light orange)
- **Elements**:
  - **VP Sales** (rounded rectangle, #FFE0B2 fill):
    - Text: "VP Sales" (font size 11, #EF6C00)
    - Text: "Jim O'Brien" (font size 14, bold, #212121)
    - Text: "28 (AEs + SDRs)" (font size 11, #6D6D6D)
  - **VP Marketing** (rounded rectangle, #FFE0B2 fill):
    - Text: "VP Marketing" (font size 11, #EF6C00)
    - Text: "Priya Sharma" (font size 14, bold, #212121)
    - Text: "14 (Content + Growth + Brand)" (font size 11, #6D6D6D)
  - **Director of Sales Operations** (rounded rectangle, #FFE0B2 fill):
    - Text: "Dir. Sales Ops" (font size 11, #EF6C00)
    - Text: "Tomoko Ishida" (font size 14, bold, #212121)
    - Text: "6 (RevOps + Enablement)" (font size 11, #6D6D6D)
  - Connectors: Solid lines from CRO (#37474F, 2px)

### Level 3: Product Branch

- **Position**: Third row, under CPO
- **Size**: 300 x 160px per card (3 cards)
- **Background**: #E1BEE7 (light purple)
- **Elements**:
  - **VP Product Management** (rounded rectangle, #E1BEE7 fill):
    - Text: "VP Product" (font size 11, #7B1FA2)
    - Text: "Ben Torres" (font size 14, bold, #212121)
    - Text: "10 PMs" (font size 11, #6D6D6D)
  - **Head of Design** (rounded rectangle, #E1BEE7 fill):
    - Text: "Head of Design" (font size 11, #7B1FA2)
    - Text: "Mia Chen" (font size 14, bold, #212121)
    - Text: "8 designers" (font size 11, #6D6D6D)
  - **Director of Customer Success** (rounded rectangle, #E1BEE7 fill):
    - Text: "Dir. Customer Success" (font size 11, #7B1FA2)
    - Text: "Rachel Adams" (font size 14, bold, #212121)
    - Text: "10 CSMs" (font size 11, #6D6D6D)
  - Connectors: Solid lines from CPO (#37474F, 2px)

### Level 4: Team-Level Detail (Sample — Backend Engineering)

- **Position**: Fourth row, under VP Backend
- **Size**: 250 x 120px per card (4 cards)
- **Background**: #E8F5E9 (very light green)
- **Elements**:
  - **Platform Team** (rounded rectangle, #E8F5E9 fill):
    - Text: "Platform Team" (font size 12, bold, #388E3C)
    - Text: "Lead: Ana Kovacs" (font size 11, #212121)
    - Text: "8 engineers" (font size 10, #6D6D6D)
  - **API Team** (rounded rectangle, #E8F5E9 fill):
    - Text: "API Team" (font size 12, bold, #388E3C)
    - Text: "Lead: Omar Hussein" (font size 11, #212121)
    - Text: "7 engineers" (font size 10, #6D6D6D)
  - **Data Pipeline Team** (rounded rectangle, #E8F5E9 fill):
    - Text: "Data Pipeline" (font size 12, bold, #388E3C)
    - Text: "Lead: Sofia Bergman" (font size 11, #212121)
    - Text: "7 engineers" (font size 10, #6D6D6D)
  - **Security Team** (rounded rectangle, #E8F5E9 fill):
    - Text: "Security" (font size 12, bold, #388E3C)
    - Text: "Lead: Kwame Asante" (font size 11, #212121)
    - Text: "6 engineers" (font size 10, #6D6D6D)
  - Connectors: Solid lines from VP Backend to each team (#37474F, 1px)

### Sidebar: Headcount Summary

- **Position**: Right side of board
- **Size**: 800 x 2800px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Headcount Summary" (font size 22, bold, #1565C0)
  - Text block: "As of March 1, 2026" (font size 12, #757575)
  - Table with columns: Department | Current | Planned EOY | Open Roles
  - Row 1: Engineering | 72 | 85 | 13
  - Row 2: Sales & Marketing | 48 | 55 | 7
  - Row 3: Product | 28 | 32 | 4
  - Row 4: Finance & Legal | 18 | 19 | 1
  - Row 5: People & Culture | 12 | 14 | 2
  - Row 6: Executive | 9 | 9 | 0
  - **Total**: **187** | **214** | **27**
  - Horizontal bar chart showing department sizes proportionally
  - Text block: "Key Metrics" (font size 18, bold, #1565C0)
  - Shape (rounded rectangle, #FFFFFF):
    - Text: "Avg Span of Control: 6.2 reports per manager"
    - Text: "Manager-to-IC Ratio: 1:5.4"
    - Text: "Avg Tenure: 2.8 years"
    - Text: "Voluntary Attrition (TTM): 11.2%"
  - Text block: "Open Positions by Priority" (font size 16, bold, #EF6C00)
  - Sticky note (orange, #FFE0B2): "P0 (Critical): Sr. ML Engineer (x3), Enterprise AE (x2), Staff Backend Engineer (x1)"
  - Sticky note (yellow, #FFF9C4): "P1 (High): Product Designer (x2), DevOps Engineer (x2), SDR (x4)"
  - Sticky note (green, #C8E6C9): "P2 (Normal): Marketing Manager (x1), Finance Analyst (x1), People Partner (x1), remaining roles"
  - Text block: "Org Health Flags" (font size 16, bold, #D32F2F)
  - Sticky note (pink, #F8BBD0): "FLAG: AI/ML team has 12 ICs and 1 VP with no middle management layer. Hire an Engineering Manager by Q2."
  - Sticky note (pink, #F8BBD0): "FLAG: Customer Success has 10 CSMs and 1 Director. Span of control (10:1) exceeds our 8:1 guideline. Consider promoting a Senior CSM to Team Lead."
  - Sticky note (pink, #F8BBD0): "FLAG: Sales team growing 15% but Sales Ops growing 0%. Risk of operational bottleneck. Budget for 2 additional Sales Ops hires in H2."

## Connectors & Flow

- All reporting lines use solid lines (#37474F) with decreasing thickness by level:
  - CEO to C-Suite: 3px
  - C-Suite to VP/Director: 2px
  - VP/Director to Team: 1px
- Dotted line from Director of Customer Success to CRO: "Dotted-line report for revenue alignment" (#EF6C00, dashed, 1px)
- Dotted line from Dir. Eng Ops to CFO: "Dotted-line report for infrastructure budget" (#00695C, dashed, 1px)

## Example Content

All example content is embedded above. The org chart models NovaTech Inc. with:

- 187 total employees across 6 departments
- 4-level hierarchy: CEO, C-Suite (5), VPs/Directors (10+), Teams
- Detailed role cards with names, titles, and headcount
- Team-level detail for Backend Engineering (4 teams, 28 engineers)
- Headcount summary with current, planned, and open roles
- Organizational health flags identifying structural issues
- Open positions prioritized by criticality

## Variations

1. **Matrix Organization**: Add horizontal program/project lines crossing vertical reporting lines. Use dashed lines for matrix reporting and solid for direct reporting. Add a legend explaining the line types.
2. **Flat Organization**: Remove the VP layer entirely. Show CEO with Directors reporting directly, and teams reporting to Directors. Useful for startups under 50 people.
3. **Department-Focus View**: Zoom into a single department (e.g., Engineering only), showing all teams, sub-teams, individual contributors, and their skill sets.

## Build Instructions

1. Create the board at 4800 x 3400px with #FAFAFA background.
2. Build the header at position (0, 0), full width, 150px tall, #1565C0 background.
3. Place the CEO card at top-center (2000, 200), 400 x 200px.
4. Create 5 C-Suite cards at the second row (y=450), evenly distributed across the width. Color each by department.
5. Draw solid lines (#37474F, 3px) from CEO to each C-Suite card.
6. For each C-Suite card, create 2-4 VP/Director cards at the third row (y=700). Color with lighter shade of the department color.
7. Draw solid lines (#37474F, 2px) from each C-Suite to their reports.
8. For the Backend Engineering branch, create 4 team-level cards at the fourth row (y=950).
9. Draw solid lines (#37474F, 1px) from VP Backend to each team.
10. Create the Sidebar at position (3900, 170) with size 800 x 2800px. Build the headcount table, metrics, open positions, and health flags.
11. Add dotted-line reporting relationships where specified.
12. Verify all headcount numbers sum correctly (individual teams should sum to department totals).

## Tips & Best Practices

- **Keep it current**: An outdated org chart is worse than no org chart. Assign an owner (usually People Ops) to update it after every hire, departure, or reorg.
- **Show names, not just titles**: Real names make the chart human and useful for navigation. New employees especially benefit from putting faces to boxes.
- **Flag structural issues visually**: Use sticky notes or colored badges to highlight span of control issues, single points of failure, or teams that need restructuring.
- **Limit depth to 4 levels**: Beyond 4 levels, the chart becomes unreadable. Use drill-down boards for team-level detail if needed.
- **Include dotted-line reports**: Matrix reporting is reality in most organizations. Showing only solid lines gives a false picture.
- **Add open roles**: Including planned headcount and open positions makes the chart a planning tool, not just a snapshot.
