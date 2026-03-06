# Survey Analysis Board

## Overview

- **Purpose**: Visualize and analyze survey results on a collaborative Miro board — displaying response summaries, key quantitative metrics, demographic breakdowns, open-ended response themes, and actionable insights derived from the data.
- **Best For**: People teams analyzing engagement surveys, product managers reviewing NPS or CSAT data, marketing teams processing customer feedback surveys, UX teams analyzing large-scale questionnaire results.
- **Complexity**: Medium
- **Board Size**: 5500x3500px

## Color Scheme

| Role       | Color       | Hex     |
| ---------- | ----------- | ------- |
| Primary    | Deep Teal   | #006064 |
| Secondary  | Slate Blue  | #455A64 |
| Accent     | Bright Blue | #1976D2 |
| Background | Off White   | #FAFBFC |
| Text       | Near Black  | #1A1A1A |

## Board Layout

The board uses a magazine-style layout with a header, top-line metrics, detailed breakdowns in the center, and a synthesis section at the bottom.

```
+================================================================+
|                     SURVEY OVERVIEW HEADER                       |
|  [Survey Name] [Responses] [Period] [Methodology] [Confidence]  |
+================================================================+
| RESPONSE SUMMARY     | KEY METRICS                               |
| (Completion rate,    | (NPS, CSAT, CES, top-line scores          |
|  response counts)    |  with benchmarks)                         |
+================================================================+
| QUANTITATIVE         | DEMOGRAPHIC        | CROSS-TABULATION     |
| RESULTS              | BREAKDOWN          | ANALYSIS             |
| (Question-by-        | (By role, tenure,  | (Satisfaction by     |
|  question results)   |  department, etc.) |  segment)            |
+================================================================+
| OPEN-ENDED THEME     | ACTIONABLE INSIGHTS & RECOMMENDATIONS     |
| ANALYSIS             |                                           |
+================================================================+
```

## Frames & Sections

### Frame 1: Survey Overview Header

- **Position**: Top, spanning full width
- **Size**: 5300x350px
- **Background**: #006064 (Deep Teal)
- **Elements**:
  - Text block: "2026 Annual Employee Engagement Survey — Results" (font size 32, bold, white #FFFFFF)
  - Text block: "Conducted February 1-14, 2026 | Results finalized March 1, 2026" (font size 14, #B2DFDB)
  - Info Card 1 — Rectangle (200x100px, white, rounded):
    - Label: "Total Responses" (font size 11, #6B7280)
    - Value: "847 / 1,024" (font size 18, bold, #1A1A1A)
    - Subtext: "82.7% response rate" (font size 10, #2E7D32)
  - Info Card 2 — Rectangle (200x100px, white, rounded):
    - Label: "Survey Type" (font size 11, #6B7280)
    - Value: "Likert Scale + Open" (font size 14, bold, #1A1A1A)
    - Subtext: "32 questions" (font size 10, #6B7280)
  - Info Card 3 — Rectangle (200x100px, white, rounded):
    - Label: "Confidence Level" (font size 11, #6B7280)
    - Value: "95%" (font size 18, bold, #2E7D32)
    - Subtext: "Margin of error: +/- 1.8%" (font size 10, #6B7280)
  - Info Card 4 — Rectangle (200x100px, white, rounded):
    - Label: "Benchmark" (font size 11, #6B7280)
    - Value: "Tech Industry Avg" (font size 14, bold, #1A1A1A)
    - Subtext: "Source: Culture Amp 2025" (font size 10, #6B7280)
  - Info Card 5 — Rectangle (200x100px, white, rounded):
    - Label: "Survey Owner" (font size 11, #6B7280)
    - Value: "HR — Tanya Williams" (font size 14, bold, #1A1A1A)

### Frame 2: Response Summary

- **Position**: Left, below header
- **Size**: 2000x500px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Response Summary" (font size 18, bold, #1A1A1A)
  - Response rate bar chart:
    - "Engineering: 91% (182/200)" — full bar (#2E7D32)
    - "Product: 88% (88/100)" — full bar (#2E7D32)
    - "Sales: 79% (158/200)" — bar (#F9A825)
    - "Marketing: 84% (67/80)" — bar (#2E7D32)
    - "Customer Success: 86% (103/120)" — bar (#2E7D32)
    - "Operations: 72% (116/162)" — bar (#F9A825)
    - "Executive: 78% (50/64)" — bar (#F9A825)
    - "Other/Admin: 85% (83/98)" — bar (#2E7D32)
  - Note: "OVERALL: 82.7% response rate (vs. 76% in 2025 survey — +6.7pp improvement)"
  - Insight text: "Sales and Operations had lowest response rates. Consider dedicated follow-up campaigns or alternative survey distribution for frontline roles."

### Frame 3: Key Metrics

- **Position**: Right of Response Summary
- **Size**: 3100x500px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Key Engagement Metrics" (font size 18, bold, #1A1A1A)
  - Metric Card 1 — Rectangle (350x200px, #FFFFFF, #1976D2 top border):
    - "Employee NPS (eNPS)" (bold, 14px)
    - Value: "+32" (font size 36, bold, #1976D2)
    - "vs. +28 in 2025 (+4 improvement)" (font size 11, #2E7D32)
    - "Industry benchmark: +25" (font size 10, #6B7280)
    - Subtext: "Promoters: 54% | Passives: 24% | Detractors: 22%"
  - Metric Card 2 — Rectangle (350x200px, #FFFFFF, #2E7D32 top border):
    - "Overall Engagement Score" (bold, 14px)
    - Value: "4.02 / 5" (font size 36, bold, #2E7D32)
    - "vs. 3.87 in 2025 (+0.15)" (font size 11, #2E7D32)
    - "Industry benchmark: 3.90" (font size 10, #6B7280)
  - Metric Card 3 — Rectangle (350x200px, #FFFFFF, #D32F2F top border):
    - "Manager Effectiveness" (bold, 14px)
    - Value: "3.58 / 5" (font size 36, bold, #D32F2F)
    - "vs. 3.72 in 2025 (-0.14)" (font size 11, #D32F2F)
    - "Industry benchmark: 3.80" (font size 10, #6B7280)
  - Metric Card 4 — Rectangle (350x200px, #FFFFFF, #F9A825 top border):
    - "Growth & Development" (bold, 14px)
    - Value: "3.41 / 5" (font size 36, bold, #F9A825)
    - "vs. 3.38 in 2025 (+0.03)" (font size 11, #78909C)
    - "Industry benchmark: 3.55" (font size 10, #6B7280)
  - Metric Card 5 — Rectangle (350x200px, #FFFFFF, #2E7D32 top border):
    - "Belonging & Inclusion" (bold, 14px)
    - Value: "4.18 / 5" (font size 36, bold, #2E7D32)
    - "vs. 3.95 in 2025 (+0.23)" (font size 11, #2E7D32)
    - "Industry benchmark: 3.85" (font size 10, #6B7280)
  - Metric Card 6 — Rectangle (350x200px, #FFFFFF, #2E7D32 top border):
    - "Compensation Fairness" (bold, 14px)
    - Value: "3.89 / 5" (font size 36, bold, #1A1A1A)
    - "vs. 3.52 in 2025 (+0.37)" (font size 11, #2E7D32)
    - "Industry benchmark: 3.45" (font size 10, #6B7280)
    - Note: "Significant improvement after Q4 2025 comp review"

### Frame 4: Quantitative Results

- **Position**: Left, main detail row
- **Size**: 1700x1500px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Question-by-Question Results (Top & Bottom 5)" (font size 18, bold, #1A1A1A)

  - **Highest-Scoring Questions** header (#E8F5E9, 14px, bold):
  - Result Row 1: "Q7: 'I feel my work contributes to the company's mission' — 4.52/5" (green bar, 90%)
  - Result Row 2: "Q12: 'I feel respected by my colleagues' — 4.48/5" (green bar, 90%)
  - Result Row 3: "Q18: 'I understand the company's strategic direction' — 4.31/5" (green bar, 86%)
  - Result Row 4: "Q3: 'I would recommend this company to a friend' — 4.28/5" (green bar, 86%)
  - Result Row 5: "Q22: 'My team collaborates effectively' — 4.22/5" (green bar, 84%)

  - **Lowest-Scoring Questions** header (#FFEBEE, 14px, bold):
  - Result Row 6: "Q15: 'I receive regular, constructive feedback from my manager' — 3.12/5" (red bar, 62%)
  - Result Row 7: "Q16: 'My manager helps me identify growth opportunities' — 3.18/5" (red bar, 64%)
  - Result Row 8: "Q28: 'There are sufficient opportunities for career advancement' — 3.22/5" (orange bar, 64%)
  - Result Row 9: "Q14: 'I have regular 1:1 meetings with my manager' — 3.35/5" (orange bar, 67%)
  - Result Row 10: "Q29: 'I feel the promotion process is transparent' — 3.38/5" (orange bar, 68%)

  - Callout box (#FFF8E1): "Pattern: 4 of the 5 lowest-scoring questions relate to manager-employee relationship. This aligns with the Manager Effectiveness score decline."

### Frame 5: Demographic Breakdown

- **Position**: Center, main detail row
- **Size**: 1700x1500px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Engagement Score by Demographics" (font size 18, bold, #1A1A1A)

  - **By Department** section:
  - "Engineering: 4.18/5" — bar (#2E7D32)
  - "Product: 4.11/5" — bar (#2E7D32)
  - "Customer Success: 4.05/5" — bar (#2E7D32)
  - "Marketing: 3.98/5" — bar (#78909C)
  - "Executive: 3.92/5" — bar (#78909C)
  - "Sales: 3.71/5" — bar (#F9A825)
  - "Operations: 3.62/5" — bar (#D32F2F)

  - **By Tenure** section:
  - "< 1 year: 4.31/5" — bar (#2E7D32) — "Honeymoon effect"
  - "1-2 years: 3.82/5" — bar (#F9A825) — "Engagement dip"
  - "2-4 years: 3.94/5" — bar (#78909C) — "Recovery"
  - "4+ years: 4.12/5" — bar (#2E7D32) — "Deep commitment"

  - **By Level** section:
  - "Individual Contributors: 3.88/5" — bar (#78909C)
  - "Team Leads: 4.05/5" — bar (#2E7D32)
  - "Managers: 3.72/5" — bar (#F9A825)
  - "Directors+: 4.25/5" — bar (#2E7D32)

  - Insight sticky (#FFF8E1): "NOTABLE: Operations dept is 0.40 below company avg. 1-2 year tenure employees show classic 'engagement dip' — need targeted retention interventions. Managers score lower than their reports on engagement — suggests management burnout."

### Frame 6: Cross-Tabulation Analysis

- **Position**: Right, main detail row
- **Size**: 1700x1500px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Cross-Tabulation: Manager Effectiveness by Department" (font size 18, bold, #1A1A1A)

  - Heat map grid:
    - Header: "Department" | "Feedback (Q15)" | "Growth (Q16)" | "1:1s (Q14)" | "Overall Mgr"
    - "Engineering" | "3.45" (yellow) | "3.52" (yellow) | "3.88" (green) | "3.82" (green)
    - "Product" | "3.38" (yellow) | "3.41" (yellow) | "3.62" (yellow) | "3.68" (yellow)
    - "Sales" | "2.82" (red) | "2.71" (red) | "2.95" (red) | "3.15" (red)
    - "Marketing" | "3.21" (orange) | "3.15" (orange) | "3.45" (yellow) | "3.58" (yellow)
    - "Customer Success" | "3.35" (yellow) | "3.42" (yellow) | "3.72" (green) | "3.75" (green)
    - "Operations" | "2.68" (red) | "2.85" (red) | "2.88" (red) | "3.02" (red)
    - "Executive" | "3.55" (yellow) | "3.62" (yellow) | "3.95" (green) | "3.85" (green)

  - Color legend: Green >= 3.60 | Yellow 3.20-3.59 | Orange 2.90-3.19 | Red < 2.90

  - Callout box (#FFEBEE): "CRITICAL: Sales and Operations have manager effectiveness scores well below benchmark. Sales managers score 2.71/5 on 'helps identify growth opportunities' — the lowest single score in the survey."

  - Correlation note: "Correlation analysis: Departments with manager effectiveness scores below 3.20 have 2.3x higher voluntary attrition (trailing 12 months)."

### Frame 7: Open-Ended Theme Analysis

- **Position**: Bottom-left
- **Size**: 2500x800px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Open-Ended Response Themes (n=612 comments)" (font size 18, bold, #1A1A1A)
  - Subtitle: "AI-assisted theme extraction + manual review by People Analytics" (font size 12, #6B7280)

  - Theme 1 — Cluster (#FFEBEE border, 500x300px):
    - "CAREER GROWTH CONCERNS (mentioned 187 times — 31%)" (bold, 14px, #D32F2F)
    - Representative quote sticky (#FFCDD2): "'I've been in the same role for 2 years and have never had a conversation about my career path. I don't know what I need to do to get promoted.'"
    - Representative quote sticky (#FFCDD2): "'The promotion criteria feel like a black box. I see people get promoted and I can't figure out why them and not me.'"
    - Sub-themes: "Unclear promotion criteria (78), lack of mentorship (52), limited L&D budget (34), stagnant role (23)"

  - Theme 2 — Cluster (#FFF8E1 border, 500x300px):
    - "MANAGER QUALITY VARIANCE (mentioned 143 times — 23%)" (bold, 14px, #F9A825)
    - Representative quote sticky (#FFF9C4): "'My manager is amazing and I'd follow them anywhere. But I hear horror stories from other teams where people don't even get 1:1s.'"
    - Representative quote sticky (#FFF9C4): "'I switched teams last quarter and the difference in management quality is night and day. We need standards for what good management looks like here.'"
    - Sub-themes: "Inconsistent 1:1 cadence (62), feedback quality (45), micromanagement (21), absent managers (15)"

  - Theme 3 — Cluster (#E8F5E9 border, 500x300px):
    - "CULTURE & BELONGING PRAISE (mentioned 128 times — 21%)" (bold, 14px, #2E7D32)
    - Representative quote sticky (#C8E6C9): "'This is the most inclusive workplace I've ever been at. The ERGs are genuine, not performative. I feel like I can bring my whole self to work.'"
    - Representative quote sticky (#C8E6C9): "'The remote-first culture works incredibly well. I've never felt more trusted by an employer.'"
    - Sub-themes: "ERG appreciation (48), remote flexibility (42), team bonding (22), values alignment (16)"

  - Theme 4 — Cluster (#E3F2FD border, 500x250px):
    - "PROCESS & TOOLING FRICTION (mentioned 92 times — 15%)" (bold, 14px, #1976D2)
    - Representative quote sticky (#BBDEFB): "'We have too many tools. Slack, Notion, Jira, Asana, Linear — I spend 30 minutes a day just figuring out where a conversation happened.'"
    - Sub-themes: "Tool sprawl (38), meeting overload (29), documentation gaps (15), slow procurement (10)"

  - Remaining: "Other themes (62 comments, 10%): Compensation requests, office space suggestions, sustainability initiatives"

### Frame 8: Actionable Insights & Recommendations

- **Position**: Bottom-right
- **Size**: 2700x800px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Actionable Insights & Recommendations" (font size 18, bold, #1A1A1A)

  - Insight/Action 1 — Rectangle (#FFEBEE, full width, 140px):
    - Priority: "P0 — CRITICAL" (white on #D32F2F pill)
    - "Launch a Manager Excellence Program targeting Sales and Operations managers" (bold, 14px)
    - "Problem: Manager effectiveness is 0.22 below benchmark and correlates with 2.3x higher attrition. Sales and Ops are critical hotspots."
    - "Action: Q2 mandatory manager training program covering feedback delivery, 1:1 frameworks, and career coaching. Partner with external provider (BetterUp or Torch)."
    - "Owner: Tanya Williams (HR) + VP Sales + VP Ops | Timeline: Program design by April 15, launch by May 1"

  - Insight/Action 2 — Rectangle (#FFF8E1, full width, 140px):
    - Priority: "P1 — HIGH" (white on #F9A825 pill)
    - "Publish a transparent career framework with clear promotion criteria" (bold, 14px)
    - "Problem: 31% of open-ended comments cite career growth concerns. Promotion process perceived as opaque."
    - "Action: Define leveling rubrics for all roles, publish internally, and train managers on career conversation frameworks. Hold 'Promotion Process AMA' with leadership."
    - "Owner: People Ops — Maria Santos | Timeline: Framework drafted by April 30, published by May 31"

  - Insight/Action 3 — Rectangle (#FFF8E1, full width, 120px):
    - Priority: "P1 — HIGH" (white on #F9A825 pill)
    - "Address the 1-2 year tenure engagement dip with targeted retention interventions" (bold, 14px)
    - "Action: Implement 'Year 2 Check-in' program — dedicated career conversation, manager training on retention signals, and a learning stipend increase for employees at 12-18 months."
    - "Owner: Tanya Williams (HR) | Timeline: Design by March 31, pilot in Engineering April"

  - Insight/Action 4 — Rectangle (#E8F5E9, full width, 120px):
    - Priority: "P2 — REINFORCE" (white on #2E7D32 pill)
    - "Double down on Belonging & Inclusion initiatives — they are working" (bold, 14px)
    - "Action: Increase ERG budget by 25%, continue remote-first policy, and share Belonging results publicly (internal blog post) to build pride and attract talent."
    - "Owner: DEI Lead — Jordan Campbell | Timeline: Budget approved by April 1"

  - Insight/Action 5 — Rectangle (#E3F2FD, full width, 100px):
    - Priority: "P2 — IMPROVE" (white on #1976D2 pill)
    - "Conduct a tooling audit to reduce tool sprawl" (bold, 14px)
    - "Action: Inventory all SaaS tools by department, identify overlap, and consolidate to reduce daily friction. Form a cross-functional 'Tooling Simplification' working group."
    - "Owner: IT — Brandon Lee | Timeline: Audit complete by May 15"

  - **Follow-up Plan** — Rectangle (#F5F5F5, full width, 80px):
    - "NEXT STEPS: Present results at All Hands (March 15). Department-level readouts by March 30. Pulse survey in June to measure progress on P0/P1 actions."

## Connectors & Flow

- Vertical connector from Survey Header to Response Summary and Key Metrics (overview flows to summary).
- Horizontal connectors between Key Metrics cards and their detailed breakdown in Quantitative Results and Cross-Tabulation (metric drills into detail).
- Arrows from lowest-scoring questions in Quantitative Results to the corresponding themes in Open-Ended Analysis (quant confirms qual).
- Dashed arrows from each theme cluster to its corresponding recommendation in Actionable Insights (themes drive actions).
- Color-coded connector lines matching the severity of each finding (red, yellow, green).

## Example Content

All frames contain realistic pre-filled data for a 1,024-employee technology company's annual engagement survey. Key narrative:

**Survey Story**: The company shows strong overall engagement (4.02/5, above benchmark) and exceptional belonging scores (+0.23 YoY). However, manager effectiveness has declined (-0.14 YoY) and is now below industry benchmark, with Sales and Operations departments as critical hotspots. Open-ended comments confirm this: 31% mention career growth concerns and 23% cite inconsistent management quality. The recommendation is a P0 Manager Excellence Program targeting the lowest-scoring departments.

**Key Wins**: Belonging & Inclusion (+0.23), Compensation Fairness (+0.37 after comp review), Response Rate (+6.7pp).
**Key Risks**: Manager Effectiveness (-0.14), 1-2 year tenure engagement dip, Sales & Ops department scores.

## Variations

1. **Customer NPS/CSAT Survey**: Replace employee demographics with customer segments (industry, company size, product tier). Replace manager effectiveness with product satisfaction and support quality. Replace career themes with product feedback themes.
2. **Product Feedback Survey**: Replace engagement metrics with feature satisfaction scores, usability ratings, and likelihood-to-renew. Demographic breakdown by user role and usage frequency. Open-ended themes focus on feature requests and pain points.
3. **Quick Pulse Survey**: Simplified version with 5-8 questions. Remove Cross-Tabulation and Demographic Breakdown. Compress to 3 frames: Results, Trends (vs. last pulse), and Actions. Board size: 3000x1500px.

## Build Instructions

1. Set board background to #FAFBFC and dimensions to 5500x3500px.
2. Create the Survey Overview Header (5300x350px) at the top with #006064 background and info cards.
3. Create two frames below the header: Response Summary (2000x500px) and Key Metrics (3100x500px).
4. Build Response Summary with horizontal bars showing response rates by department.
5. Build Key Metrics with 6 metric cards, each with a colored top border matching RAG status.
6. Create a 3-column layout for the main detail row (each ~1700x1500px): Quantitative Results, Demographic Breakdown, Cross-Tabulation.
7. Build Quantitative Results with top/bottom 5 question results using colored bar representations.
8. Build Demographic Breakdown with bar charts for department, tenure, and level.
9. Build Cross-Tabulation as a heat map grid with color-coded cells.
10. Create two frames at the bottom: Open-Ended Themes (2500x800px) and Actionable Insights (2700x800px).
11. Build theme clusters with representative quotes and sub-theme breakdowns.
12. Build action items as priority-coded recommendation cards with owners and timelines.
13. Add all connectors as described.

## Tips & Best Practices

- **Lead with the positive**: Start presentations with what is going well (Belonging, Compensation) before diving into areas for improvement. This builds trust.
- **Always include benchmarks**: A score of 3.58 means nothing without context. Compare to industry benchmarks and year-over-year trends.
- **Protect anonymity fiercely**: Never break results down to segments smaller than 5 respondents. If a team has 4 people, roll them into the next level up.
- **Triangulate quant and qual**: The most powerful insights emerge when quantitative scores and open-ended themes tell the same story. Highlight these convergences.
- **Commit to follow-through**: The fastest way to destroy future survey response rates is to ask for feedback and then do nothing. Publish your action plan within 30 days.
- **Pulse frequently, survey annually**: Use quarterly pulse checks (5-8 questions) to track progress between annual deep-dives. This board template works for both.
