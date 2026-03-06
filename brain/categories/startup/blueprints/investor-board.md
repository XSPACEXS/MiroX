# Investor Relations Board

## Overview

- **Purpose**: Manage the entire fundraising process on a single visual board — tracking investor pipeline, organizing outreach, comparing term sheets, monitoring cap table impact, and planning milestones for the next round so founders stay organized and strategic during the high-pressure fundraise.
- **Best For**: Founders actively raising a seed or Series A round, CFOs/COOs managing investor communications, advisors coaching founders through fundraising, board members monitoring fundraise progress.
- **Complexity**: Advanced
- **Board Size**: 6500x4000px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Electric Blue | #1565C0 |
| Secondary  | Slate         | #37474F |
| Accent     | Bright Orange | #EF6C00 |
| Background | Cool White    | #F5F7FA |
| Text       | Dark Ink      | #1A1A2E |

## Board Layout

The board uses a multi-section layout with a fundraise overview at the top, an investor pipeline in the center, and comparison/planning sections at the bottom.

```
+=================================================================+
|                   FUNDRAISE OVERVIEW                              |
|  [Round] [Target] [Committed] [Timeline] [Lead Status]          |
+=================================================================+
| INVESTOR PIPELINE (Kanban)                                       |
| [Research] [Outreach] [First Mtg] [Partner Mtg] [Due Diligence] |
| [Term Sheet] [Committed] [Passed]                                |
+=================================================================+
| TERM SHEET       | CAP TABLE        | MILESTONES TO              |
| COMPARISON       | OVERVIEW         | NEXT ROUND                 |
+=================================================================+
|                   MEETING NOTES & FOLLOW-UPS                     |
+=================================================================+
```

## Frames & Sections

### Frame 1: Fundraise Overview

- **Position**: Top, spanning full width
- **Size**: 6300x400px
- **Background**: #1565C0 (Electric Blue)
- **Elements**:
  - Text block: "Seed Round Fundraise — DataBridge" (font size 34, bold, white #FFFFFF)
  - Text block: "Round opened: January 15, 2026 | Target close: April 15, 2026" (font size 14, #90CAF9)
  - KPI Card 1 — Rectangle (220x120px, white, rounded):
    - Label: "Target Raise" (font size 11, #6B7280)
    - Value: "$3,000,000" (font size 22, bold, #1A1A2E)
  - KPI Card 2 — Rectangle (220x120px, white, rounded):
    - Label: "Committed" (font size 11, #6B7280)
    - Value: "$1,200,000" (font size 22, bold, #2E7D32)
    - Progress bar: 40% filled, green
    - Subtext: "40% of target" (font size 10, #2E7D32)
  - KPI Card 3 — Rectangle (220x120px, white, rounded):
    - Label: "Remaining" (font size 11, #6B7280)
    - Value: "$1,800,000" (font size 22, bold, #EF6C00)
  - KPI Card 4 — Rectangle (220x120px, white, rounded):
    - Label: "Lead Investor" (font size 11, #6B7280)
    - Value: "Horizon Ventures" (font size 14, bold, #1A1A2E)
    - Subtext: "$750K committed" (font size 10, #2E7D32)
  - KPI Card 5 — Rectangle (220x120px, white, rounded):
    - Label: "Investors Met" (font size 11, #6B7280)
    - Value: "34" (font size 22, bold, #1A1A2E)
    - Subtext: "of 52 targeted" (font size 10, #6B7280)
  - KPI Card 6 — Rectangle (220x120px, white, rounded):
    - Label: "Days Remaining" (font size 11, #6B7280)
    - Value: "41 days" (font size 22, bold, #EF6C00)
    - Subtext: "Target: April 15" (font size 10, #6B7280)

### Frame 2: Investor Pipeline

- **Position**: Center, main area
- **Size**: 6300x1600px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Investor Pipeline" (font size 22, bold, #1A1A2E)
  - Kanban columns (8 stages):

  - **Column 1: Research** (width: 700px, bg #F5F5F5):
    - Column header: "RESEARCH (8)" (#78909C)
    - Card: "Accel — $250M Fund VI — Focus: B2B SaaS — Contact: Jenny Liu (Partner)"
    - Card: "Bessemer — $450M Cloud Fund — Focus: Cloud infra — Contact: Kent Bennett"
    - Card: "Lightspeed — $1B Fund — Focus: Enterprise — Contact: Ravi Mistry"
    - (5 more condensed cards)

  - **Column 2: Outreach Sent** (width: 700px, bg #E3F2FD):
    - Column header: "OUTREACH (6)" (#1976D2)
    - Card (#BBDEFB): "First Round Capital — Emailed Feb 20 via warm intro from advisor. Awaiting response."
    - Card (#BBDEFB): "Craft Ventures — Emailed Feb 22. David Sacks' fund. Cold but strong thesis match."
    - Card (#BBDEFB): "Index Ventures — Emailed Feb 25 via Snowflake connection. Follow-up March 5."
    - (3 more condensed cards)

  - **Column 3: First Meeting** (width: 700px, bg #FFF8E1):
    - Column header: "FIRST MEETING (5)" (#EF6C00)
    - Card (#FFE0B2): "Redpoint Ventures — Met Feb 28. Annie Chen (Principal). Strong interest in data infra. Asked for demo. Follow-up: Send product video."
    - Card (#FFE0B2): "a16z — Met March 1. Martin Casado's team. Liked the semantic layer angle. Asked about defensibility. Follow-up: Send technical architecture doc."
    - Card (#FFE0B2): "Greylock — Met March 3. Saam Motamedi. Warm but concerned about market timing. Follow-up: Send 'Why Now' memo."
    - (2 more condensed cards)

  - **Column 4: Partner Meeting** (width: 700px, bg #E8EAF6):
    - Column header: "PARTNER MTG (3)" (#6A1B9A)
    - Card (#D1C4E9): "Sequoia — Partner meeting March 10. Roelof Botha's team. Need to prepare competitive positioning deep-dive."
    - Card (#D1C4E9): "GV (Google Ventures) — Partner meeting March 12. Concerns about Google building this. Prepare differentiation deck."
    - Card (#D1C4E9): "Wing VC — Partner meeting March 14. Peter Wagner. Strong data thesis match."

  - **Column 5: Due Diligence** (width: 700px, bg #FFF3E0):
    - Column header: "DUE DILIGENCE (2)" (#EF6C00)
    - Card (#FFE0B2): "Horizon Ventures (LEAD) — Customer references requested. Technical DD call March 8. Financial model review March 10."
    - Card (#FFE0B2): "Initialized Capital — Completed customer calls. Asking for 3-month financial detail. Expected decision by March 15."

  - **Column 6: Term Sheet** (width: 700px, bg #E8F5E9):
    - Column header: "TERM SHEET (1)" (#2E7D32)
    - Card (#C8E6C9): "Horizon Ventures — Term sheet received Feb 28. $750K at $15M post. Standard NVCA terms. 1 board seat. Pro-rata rights. Reviewing with counsel."

  - **Column 7: Committed** (width: 700px, bg #C8E6C9):
    - Column header: "COMMITTED (2)" (#1B5E20)
    - Card (#A5D6A7): "Horizon Ventures — $750,000 — Lead — Term sheet signed March 2"
    - Card (#A5D6A7): "TechStars Ventures — $450,000 — Follow-on — Verbal commit March 3"

  - **Column 8: Passed** (width: 700px, bg #FFEBEE):
    - Column header: "PASSED (7)" (#C62828)
    - Card (#FFCDD2): "Andreessen Crypto Fund — Passed Feb 15. Reason: Not their thesis. Nice meeting."
    - Card (#FFCDD2): "NEA — Passed Feb 20. Reason: Check size too small for their fund."
    - Card (#FFCDD2): "Benchmark — Passed Feb 22. Reason: Already invested in competitor (ThoughtSpot)."
    - (4 more condensed cards)

### Frame 3: Term Sheet Comparison

- **Position**: Bottom-left
- **Size**: 2000x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Term Sheet Comparison" (font size 20, bold, #1A1A2E)

  - Comparison table header (#F0F2F5):
    - "Term" | "Horizon Ventures" | "Initialized (Expected)" | "Our Preference"

  - Row 1: "Investment Amount" | "$750K" | "$500K (est.)" | "$750K+ lead"
  - Row 2: "Valuation (Post)" | "$15M" | "$14M (est.)" | "$15M+"
  - Row 3: "Instrument" | "Priced Equity (Series Seed)" | "SAFE" | "Priced preferred"
  - Row 4: "Board Seat" | "1 investor seat" | "Observer only" | "1 investor max"
  - Row 5: "Pro-Rata Rights" | "Yes, major investor" | "Yes" | "Standard"
  - Row 6: "Liquidation Pref" | "1x non-participating" | "1x non-participating" | "1x non-participating"
  - Row 7: "Anti-Dilution" | "Broad-based weighted avg" | "Broad-based weighted avg" | "Broad-based"
  - Row 8: "Vesting" | "4-year, 1-year cliff (standard)" | "Same" | "Standard"
  - Row 9: "Information Rights" | "Quarterly financials, annual audit" | "Quarterly financials" | "Quarterly"
  - Row 10: "Protective Provisions" | "Standard NVCA" | "Standard" | "Minimal"

  - Recommendation sticky (#FFF8E1): "RECOMMENDATION: Proceed with Horizon Ventures as lead. Terms are market-standard, they bring data infrastructure expertise and Snowflake network. Fill remaining $1.8M with 2-3 follow-on investors at same terms."

  - Counsel note: "Legal review: Fenwick — Sarah Park. Review completed March 4. No red flags. One minor change requested: narrow most-favored-nation clause."

### Frame 4: Cap Table Overview

- **Position**: Bottom-center
- **Size**: 2000x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Cap Table — Post-Seed (Projected)" (font size 20, bold, #1A1A2E)

  - **Pre-Round Cap Table**:
  - Table header (#F0F2F5): "Shareholder" | "Shares" | "%" | "Type"
  - "Alex Torres (CEO)" | "3,500,000" | "35%" | "Common"
  - "Priya Mehta (CTO)" | "3,000,000" | "30%" | "Common"
  - "Jordan Lee (CPO)" | "2,000,000" | "20%" | "Common"
  - "ESOP (unallocated)" | "1,000,000" | "10%" | "Option Pool"
  - "Advisor Pool" | "500,000" | "5%" | "Common (vesting)"
  - "TOTAL PRE-ROUND" | "10,000,000" | "100%" | ""

  - **Post-Round Cap Table** (after $3M at $15M post):
  - "Alex Torres" | "3,500,000" | "28.0%" | "Common"
  - "Priya Mehta" | "3,000,000" | "24.0%" | "Common"
  - "Jordan Lee" | "2,000,000" | "16.0%" | "Common"
  - "ESOP (expanded)" | "1,500,000" | "12.0%" | "Option Pool"
  - "Advisors" | "500,000" | "4.0%" | "Common"
  - "Horizon Ventures" | "937,500" | "7.5%" | "Series Seed Preferred"
  - "TechStars Ventures" | "562,500" | "4.5%" | "Series Seed Preferred"
  - "Remaining Investors" | "500,000" | "4.0%" | "Series Seed Preferred"
  - "TOTAL POST-ROUND" | "12,500,000" | "100%" | ""

  - Dilution summary (#FFF8E1): "Founder dilution: 85% to 68% (17% dilution). ESOP expanded from 10% to 12% (added 500K shares). Total investor ownership: 16%."

  - Scenario note: "If Series A raises $10M at $50M post, founders would hold ~51% post-Series A. Target: founders maintain >50% through Series A."

### Frame 5: Milestones to Next Round

- **Position**: Bottom-right
- **Size**: 2000x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Milestones to Series A" (font size 20, bold, #1A1A2E)
  - Subtitle: "What we need to achieve in 18 months to raise a strong Series A" (font size 12, #6B7280)

  - Milestone 1 — Rectangle (#E8F5E9, full width, 130px):
    - "REVENUE: $50K MRR ($600K ARR)" (#2E7D32 left border)
    - "Current: $4,200 MRR | Gap: $45,800 | Required growth: ~15% MoM sustained"
    - "Timeline: Month 12 (March 2027)"
    - Status: "ON TRACK" (green pill)

  - Milestone 2 — Rectangle (#E8F5E9, full width, 130px):
    - "CUSTOMERS: 50+ paying customers across 3+ verticals" (#2E7D32 left border)
    - "Current: 8 customers in 2 verticals | Gap: 42 customers, 1+ vertical"
    - "Timeline: Month 12"
    - Status: "ON TRACK" (green pill)

  - Milestone 3 — Rectangle (#FFF8E1, full width, 130px):
    - "PRODUCT: Query accuracy >= 90% across top 5 data warehouse schemas" (#EF6C00 left border)
    - "Current: 78% accuracy | Gap: 12pp improvement needed"
    - "Timeline: Month 9 (December 2026)"
    - Status: "AT RISK" (yellow pill) — "Requires dedicated ML engineering hire"

  - Milestone 4 — Rectangle (#E8F5E9, full width, 130px):
    - "TEAM: 12+ headcount including VP Engineering and Head of Sales" (#2E7D32 left border)
    - "Current: 5 people | Gap: 7 hires"
    - "Timeline: Month 10 (January 2027)"
    - Status: "ON TRACK" (green pill) — "Contingent on seed close"

  - Milestone 5 — Rectangle (#FFF8E1, full width, 130px):
    - "METRICS: NRR >= 120%, Gross Retention >= 90%, LTV:CAC >= 3:1" (#EF6C00 left border)
    - "Current: NRR 115%, GR 91%, LTV:CAC 4:1"
    - "Timeline: Sustained for 3+ consecutive quarters by Series A"
    - Status: "PARTIALLY MET" (yellow pill)

  - Series A target box (#1565C0, full width, 80px):
    - "SERIES A TARGET: $10-15M raise at $50-75M valuation in Q3-Q4 2027" (white, bold)
    - "Expected lead investors: Sequoia, a16z, or Greylock (based on current relationship building)"

### Frame 6: Meeting Notes & Follow-Ups

- **Position**: Bottom, spanning full width
- **Size**: 6300x500px
- **Background**: #F5F5F5
- **Elements**:
  - Frame title: "Recent Meeting Notes & Follow-Ups" (font size 18, bold, #1A1A2E)

  - Meeting Card 1 — Rectangle (#FFFFFF, 600x180px):
    - "Sequoia — Pre-Partner Prep | March 5" (bold)
    - "Internal prep meeting for March 10 partner meeting"
    - "Action: Prepare competitive teardown vs. ThoughtSpot and Mode"
    - "Action: Bring demo running on Snowflake (their portfolio)"
    - "Owner: Alex + Priya | Due: March 9"

  - Meeting Card 2 — Rectangle (#FFFFFF, 600x180px):
    - "Horizon Ventures — DD Call | March 3" (bold)
    - "Technical DD with their CTO advisor. Went well. Impressed by semantic layer architecture."
    - "Follow-up: Send technical whitepaper on schema mapping methodology"
    - "Owner: Priya | Due: March 5 | Status: SENT"

  - Meeting Card 3 — Rectangle (#FFFFFF, 600x180px):
    - "a16z — First Meeting Follow-Up | March 1" (bold)
    - "Martin Casado's team is interested but wants to see differentiation vs. built-in cloud analytics (BigQuery BI, Snowflake Cortex)"
    - "Action: Prepare 'Why independent > built-in' comparison document"
    - "Owner: Alex | Due: March 8"

  - Meeting Card 4 — Rectangle (#FFFFFF, 600x180px):
    - "TechStars Ventures — Commit Call | March 3" (bold)
    - "Verbal commit of $450K. Will invest at Horizon's terms. Docs expected by March 10."
    - "Action: Send subscription agreement via Carta"
    - "Owner: Alex + counsel | Due: March 7"

## Connectors & Flow

- Horizontal flow arrows within the investor pipeline Kanban (Research --> Outreach --> First Mtg --> Partner Mtg --> DD --> Term Sheet --> Committed, with a branch to Passed at any stage).
- Vertical connector from Fundraise Overview KPIs down to the pipeline (summary feeds from pipeline).
- Arrows from Term Sheet column to Term Sheet Comparison frame (received terms flow to analysis).
- Arrows from Committed column to Cap Table frame (commitments update the cap table).
- Dashed arrows from Meeting Notes to specific investor cards in the pipeline (meeting context).
- Connector from Milestones to Fundraise Overview (milestones contextualize the current raise).

## Example Content

All frames contain realistic pre-filled data for a DataBridge seed round raise. The board shows a fundraise in progress with $1.2M committed of $3M target, 41 days to target close, and a strong pipeline with Sequoia, a16z, and GV in partner meeting stage. The term sheet comparison evaluates Horizon Ventures' offer against an expected Initialized Capital term sheet.

**Fundraise Story**: DataBridge opened their seed round on January 15, 2026. After meeting 34 investors in 7 weeks, they secured Horizon Ventures as lead ($750K) and TechStars Ventures as first follow-on ($450K). Three firms are at the partner meeting stage and two are in due diligence. Seven firms have passed. The remaining $1.8M needs to close within 41 days.

## Variations

1. **Series A Board**: Expand Term Sheet Comparison to include liquidation preference stacks, governance terms, and information rights detail. Add a "Board Composition Planner" frame. Expand Cap Table to show full waterfall analysis.
2. **Angel Round Board**: Simplify pipeline to 3 stages (Intro, Meeting, Committed). Replace Term Sheet Comparison with "SAFE Terms Summary." Remove Cap Table detail and replace with a simple dilution calculator.
3. **Bridge/Extension Board**: Add a "Current Investor Update" frame for existing investors. Replace Milestones with "Bridge Rationale & Updated Plan." Add a "Runway Calculator" showing months remaining under different scenarios.

## Build Instructions

1. Set board background to #F5F7FA and dimensions to 6500x4000px.
2. Create the Fundraise Overview (6300x400px) at the top with #1565C0 background and 6 KPI cards.
3. Create the Investor Pipeline frame (6300x1600px) as a Kanban board with 8 columns. Use different background colors for each stage.
4. Populate investor cards in each column with firm name, fund details, contact, and status notes.
5. Create three frames at the bottom (each ~2000x1200px): Term Sheet Comparison, Cap Table, Milestones.
6. Build the Term Sheet Comparison as a comparison table with color-coded preferences.
7. Build the Cap Table with pre-round and post-round tables showing dilution.
8. Build Milestones as stacked cards with status indicators and gap analysis.
9. Create the Meeting Notes strip (6300x500px) at the very bottom with recent meeting cards.
10. Add all connectors as described.

## Tips & Best Practices

- **Run a process, not one-off meetings**: Talk to 40-60 investors in a concentrated 4-8 week window. Create competitive tension between interested parties.
- **Update this board daily during the raise**: Stale fundraise boards lead to missed follow-ups and lost momentum. Assign daily update ownership.
- **Prioritize the lead**: Once you have a lead investor with a term sheet, the round fills much faster. Focus 80% of energy on closing the lead first.
- **Track pass reasons**: Patterns in pass reasons reveal positioning problems. If 3+ VCs cite the same concern, address it in your pitch.
- **Never share this board externally**: This is your internal war room. Investor-facing communications should be polished and selective.
- **Have counsel ready before term sheets arrive**: Do not scramble for a lawyer when you receive a term sheet. Engage startup counsel (Fenwick, Cooley, Gunderson) before the first meeting.
- **Plan the next round from day one**: The milestones frame ensures every dollar raised this round is invested toward Series A readiness.
