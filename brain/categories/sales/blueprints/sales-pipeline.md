# Sales Pipeline Board

## Overview

- **Purpose**: Visualize and manage the entire sales pipeline from initial lead through close, giving reps and managers a shared view of deal flow, stage health, and revenue potential at a glance.
- **Best For**: Sales teams running weekly pipeline reviews, AEs managing personal deal boards, sales managers coaching reps on deal progression.
- **Complexity**: Medium
- **Board Size**: 5000x3000px

## Color Scheme

| Role       | Color       | Hex     |
| ---------- | ----------- | ------- |
| Primary    | Navy Blue   | #1B2A4A |
| Secondary  | Steel Blue  | #4A6FA5 |
| Accent     | Emerald     | #2E7D32 |
| Background | Light Slate | #F0F2F5 |
| Text       | Charcoal    | #1A1A2E |

## Board Layout

The board uses a horizontal Kanban-style layout with six stage columns flowing left to right, plus a summary header row and a bottom analytics strip.

```
+============================================================+
|                   PIPELINE SUMMARY HEADER                    |
|  [Total Pipeline $] [Weighted $] [Avg Cycle] [Win Rate]     |
+============================================================+
|  LEAD    | QUALIFIED | PROPOSAL | NEGOTIATION | WON  | LOST |
|          |           |          |             |      |      |
| [card]   | [card]    | [card]   | [card]      |[card]|[card]|
| [card]   | [card]    | [card]   | [card]      |[card]|[card]|
| [card]   | [card]    | [card]   |             |[card]|      |
| [card]   |           | [card]   |             |      |      |
| [card]   |           |          |             |      |      |
+============================================================+
|              PIPELINE ANALYTICS STRIP                        |
|  [Stage Conversion] [Velocity Chart] [Aging Deals]          |
+============================================================+
```

## Frames & Sections

### Frame 1: Pipeline Summary Header

- **Position**: Top, spanning full width
- **Size**: 4800x400px
- **Background**: #1B2A4A (Navy Blue)
- **Elements**:
  - Text block: "Q1 2026 Sales Pipeline — North America Team" (font size 36, bold, white #FFFFFF)
  - Text block: "Last updated: March 4, 2026" (font size 14, #A0AEC0)
  - KPI Card 1 — Rectangle shape (200x120px, white #FFFFFF, rounded corners)
    - Label: "Total Pipeline" (font size 12, #6B7280)
    - Value: "$2,847,000" (font size 28, bold, #1A1A2E)
    - Subtext: "47 deals" (font size 11, #6B7280)
  - KPI Card 2 — Rectangle shape (200x120px, white #FFFFFF)
    - Label: "Weighted Value" (font size 12, #6B7280)
    - Value: "$1,192,500" (font size 28, bold, #2E7D32)
    - Subtext: "42% weighted" (font size 11, #6B7280)
  - KPI Card 3 — Rectangle shape (200x120px, white #FFFFFF)
    - Label: "Avg Cycle Length" (font size 12, #6B7280)
    - Value: "34 days" (font size 28, bold, #1A1A2E)
    - Subtext: "vs. 38 day target" (font size 11, #2E7D32)
  - KPI Card 4 — Rectangle shape (200x120px, white #FFFFFF)
    - Label: "Win Rate" (font size 12, #6B7280)
    - Value: "28%" (font size 28, bold, #F9A825)
    - Subtext: "vs. 32% target" (font size 11, #C62828)

### Frame 2: Lead Column

- **Position**: Left column, below header
- **Size**: 750x2000px
- **Background**: #BBDEFB (Light Blue, 20% opacity)
- **Elements**:
  - Column header: "LEAD" (font size 20, bold, #1B2A4A)
  - Stage indicator: Circle shape (12px, #BBDEFB) + "15 deals | $487,000" (font size 12, #6B7280)
  - Deal Card 1 — Sticky note (Light Blue #BBDEFB, 220x140px):
    - "Acme Corp — Website Redesign" (bold, 14px)
    - "$45,000 | 10%" (font size 12)
    - "Contact: Sarah Mitchell, VP Marketing"
    - "Source: Inbound — Webinar attendee"
    - "Next: Discovery call March 7"
  - Deal Card 2 — Sticky note (Light Blue #BBDEFB, 220x140px):
    - "TechFlow Inc — API Integration" (bold, 14px)
    - "$28,000 | 10%"
    - "Contact: James Park, CTO"
    - "Source: Partner referral — DataSync"
    - "Next: Send intro email by March 6"
  - Deal Card 3 — Sticky note (Light Blue #BBDEFB, 220x140px):
    - "GreenLeaf Retail — POS Upgrade" (bold, 14px)
    - "$62,000 | 10%"
    - "Contact: Maria Gonzalez, COO"
    - "Source: Outbound — LinkedIn sequence"
    - "Next: Awaiting response to cold email #2"
  - Deal Card 4 — Sticky note (Light Blue #BBDEFB, 220x140px):
    - "Meridian Health — Patient Portal" (bold, 14px)
    - "$120,000 | 10%"
    - "Contact: Dr. Robert Chen, CMIO"
    - "Source: Conference lead — HIMSS 2026"
    - "Next: Schedule intro with champion"
  - Deal Card 5 — Sticky note (Light Blue #BBDEFB, 220x140px):
    - "FastTrack Logistics — Route Optimizer" (bold, 14px)
    - "$35,000 | 10%"
    - "Contact: David Kim, Ops Manager"
    - "Source: Inbound — Free trial signup"
    - "Next: Qualify budget and timeline"

### Frame 3: Qualified Column

- **Position**: Second column from left
- **Size**: 750x2000px
- **Background**: #D1C4E9 (Light Purple, 20% opacity)
- **Elements**:
  - Column header: "QUALIFIED" (font size 20, bold, #1B2A4A)
  - Stage indicator: Circle (12px, #D1C4E9) + "12 deals | $624,000" (font size 12, #6B7280)
  - Deal Card 1 — Sticky note (Light Purple #D1C4E9, 220x160px):
    - "NovaBuild Construction — Project Mgmt Suite" (bold, 14px)
    - "$85,000 | 25%"
    - "Contact: Lisa Warren, Director of Ops"
    - "Budget: Confirmed $100K allocation"
    - "Timeline: Decision by end of April"
    - "Next: Demo scheduled March 10"
  - Deal Card 2 — Sticky note (Light Purple #D1C4E9, 220x160px):
    - "Pinnacle Financial — Compliance Dashboard" (bold, 14px)
    - "$150,000 | 30%"
    - "Contact: Mark Thompson, Head of Compliance"
    - "Budget: Pre-approved, needs final sign-off"
    - "Timeline: Implement by Q2"
    - "Next: Technical deep-dive March 12"
  - Deal Card 3 — Sticky note (Light Purple #D1C4E9, 220x160px):
    - "BrightEdge Media — Content Platform" (bold, 14px)
    - "$55,000 | 25%"
    - "Contact: Amy Zhang, Content Director"
    - "Budget: Pulling from existing SaaS line"
    - "Timeline: Renewal window in May"
    - "Next: Send case study from similar client"

### Frame 4: Proposal Column

- **Position**: Third column from left
- **Size**: 750x2000px
- **Background**: #FFE0B2 (Light Orange, 20% opacity)
- **Elements**:
  - Column header: "PROPOSAL" (font size 20, bold, #1B2A4A)
  - Stage indicator: Circle (12px, #FFE0B2) + "9 deals | $782,000" (font size 12, #6B7280)
  - Deal Card 1 — Sticky note (Light Orange #FFE0B2, 220x170px):
    - "Atlas Manufacturing — ERP Migration" (bold, 14px)
    - "$210,000 | 50%"
    - "Contact: Tom Bradley, VP of IT"
    - "Proposal sent: Feb 28, 2026"
    - "Competing with: SAP, Oracle NetSuite"
    - "Differentiator: Implementation speed"
    - "Next: Follow up on pricing questions March 8"
  - Deal Card 2 — Sticky note (Light Orange #FFE0B2, 220x170px):
    - "ClearView Analytics — BI Platform" (bold, 14px)
    - "$95,000 | 50%"
    - "Contact: Priya Sharma, Head of Data"
    - "Proposal sent: March 1, 2026"
    - "Competing with: Looker, Tableau"
    - "Differentiator: Embedded analytics API"
    - "Next: Executive sponsor meeting March 11"
  - Deal Card 3 — Sticky note (Light Orange #FFE0B2, 220x170px):
    - "Summit Education — LMS Overhaul" (bold, 14px)
    - "$78,000 | 45%"
    - "Contact: Dr. Karen Osei, Dean of Online"
    - "Proposal sent: Feb 25, 2026"
    - "Competing with: Canvas, Blackboard"
    - "Differentiator: Accessibility features"
    - "Next: Revised SOW after feedback"
  - Deal Card 4 — Sticky note (Light Orange #FFE0B2, 220x170px):
    - "Redwood Insurance — Claims Automation" (bold, 14px)
    - "$165,000 | 55%"
    - "Contact: Kevin Nguyen, SVP Claims"
    - "Proposal sent: March 3, 2026"
    - "Competing with: Guidewire"
    - "Differentiator: AI claim triage"
    - "Next: Legal review of MSA terms"

### Frame 5: Negotiation Column

- **Position**: Fourth column from left
- **Size**: 750x2000px
- **Background**: #FFF9C4 (Light Yellow, 20% opacity)
- **Elements**:
  - Column header: "NEGOTIATION" (font size 20, bold, #1B2A4A)
  - Stage indicator: Circle (12px, #FFF9C4) + "6 deals | $654,000" (font size 12, #6B7280)
  - Deal Card 1 — Sticky note (Light Yellow #FFF9C4, 220x180px):
    - "Horizon Telecom — Network Monitoring" (bold, 14px)
    - "$195,000 | 75%"
    - "Contact: Angela Rossi, CIO"
    - "Sticking point: Multi-year discount"
    - "Champion: Internal IT director advocating"
    - "Procurement involved: Yes, legal reviewing MSA"
    - "Next: Final pricing call March 9"
  - Deal Card 2 — Sticky note (Light Yellow #FFF9C4, 220x180px):
    - "Pacific Brands — E-Commerce Replatform" (bold, 14px)
    - "$280,000 | 70%"
    - "Contact: Steve Morgan, CDO"
    - "Sticking point: Data migration timeline"
    - "Champion: Head of E-Commerce pushing for us"
    - "Procurement involved: Yes, awaiting PO"
    - "Next: Migration plan review March 10"
  - Deal Card 3 — Sticky note (Light Yellow #FFF9C4, 220x180px):
    - "Evergreen Health Systems — Telehealth" (bold, 14px)
    - "$145,000 | 80%"
    - "Contact: Dr. Amir Hassan, VP Digital"
    - "Sticking point: HIPAA BAA addendum wording"
    - "Champion: Chief Medical Officer"
    - "Procurement involved: Legal final review"
    - "Next: Redline BAA by March 7"

### Frame 6: Closed-Won Column

- **Position**: Fifth column from left
- **Size**: 400x2000px
- **Background**: #E8F5E9 (Soft Green, 20% opacity)
- **Elements**:
  - Column header: "CLOSED WON" (font size 20, bold, #2E7D32)
  - Stage indicator: Checkmark icon + "5 deals | $412,000" (font size 12, #2E7D32)
  - Won Card 1 — Sticky note (Soft Green #C8E6C9, 200x120px):
    - "BlueSky Aviation — Fleet Dashboard" (bold, 14px)
    - "$95,000 | Closed Feb 14"
    - "AE: Rachel Torres"
  - Won Card 2 — Sticky note (Soft Green #C8E6C9, 200x120px):
    - "Metro City Gov — Citizen Portal" (bold, 14px)
    - "$130,000 | Closed Feb 22"
    - "AE: Marcus Johnson"
  - Won Card 3 — Sticky note (Soft Green #C8E6C9, 200x120px):
    - "Orion Pharma — Trial Mgmt System" (bold, 14px)
    - "$187,000 | Closed March 1"
    - "AE: Rachel Torres"

### Frame 7: Closed-Lost Column

- **Position**: Rightmost column
- **Size**: 400x2000px
- **Background**: #FFEBEE (Soft Red, 20% opacity)
- **Elements**:
  - Column header: "CLOSED LOST" (font size 20, bold, #C62828)
  - Stage indicator: X icon + "3 deals | $188,000" (font size 12, #C62828)
  - Lost Card 1 — Sticky note (Soft Pink #FFCDD2, 200x130px):
    - "Titan Automotive — Dealer Portal" (bold, 14px)
    - "$72,000 | Lost Feb 18"
    - "Reason: Chose incumbent vendor"
    - "Lesson: Engage champion earlier"
  - Lost Card 2 — Sticky note (Soft Pink #FFCDD2, 200x130px):
    - "Lakeside Hospitality — Booking Engine" (bold, 14px)
    - "$58,000 | Lost March 2"
    - "Reason: Budget cut — project shelved"
    - "Lesson: Confirm budget stability sooner"
  - Lost Card 3 — Sticky note (Soft Pink #FFCDD2, 200x130px):
    - "Apex Sports — Fan Engagement App" (bold, 14px)
    - "$58,000 | Lost Feb 26"
    - "Reason: Lost to lower-cost competitor"
    - "Lesson: Quantify ROI earlier in cycle"

### Frame 8: Pipeline Analytics Strip

- **Position**: Bottom, spanning full width
- **Size**: 4800x500px
- **Background**: #FFFFFF
- **Elements**:
  - Section title: "Pipeline Analytics" (font size 24, bold, #1B2A4A)
  - Chart Area 1 — Rectangle (1400x400px, border #E0E0E0):
    - Title: "Stage Conversion Rates" (font size 16, bold)
    - Bar chart representation with text labels:
    - "Lead to Qualified: 62% (target 65%)"
    - "Qualified to Proposal: 58% (target 60%)"
    - "Proposal to Negotiation: 47% (target 50%)"
    - "Negotiation to Won: 72% (target 75%)"
  - Chart Area 2 — Rectangle (1400x400px, border #E0E0E0):
    - Title: "Deal Velocity by Stage" (font size 16, bold)
    - "Lead avg: 8 days (target: 7)"
    - "Qualified avg: 12 days (target: 10)"
    - "Proposal avg: 9 days (target: 8)"
    - "Negotiation avg: 14 days (target: 12)"
  - Chart Area 3 — Rectangle (1400x400px, border #E0E0E0):
    - Title: "Aging Deals (Stalled 14+ Days)" (font size 16, bold)
    - Warning sticky (#FFF9C4): "BrightEdge Media — 18 days in Qualified"
    - Warning sticky (#FFF9C4): "Summit Education — 16 days in Proposal"
    - Text: "Action: Schedule pipeline hygiene review for March 7"

## Connectors & Flow

- Horizontal arrows between each stage column (Lead --> Qualified --> Proposal --> Negotiation --> Won/Lost), dashed line style, #4A6FA5, with conversion percentages as labels on each arrow.
- Vertical connector from Pipeline Summary Header down to the first row of columns, solid line, #1B2A4A.
- Diagonal dotted connectors from aging deals in the Analytics Strip pointing up to their respective deal cards in the columns above.

## Example Content

All deal cards above contain realistic, pre-filled content. Additional context for the pipeline:

**Pipeline Owner**: Rachel Torres (Sr. AE) & Marcus Johnson (AE)
**Review Cadence**: Every Monday at 9:00 AM ET
**CRM System**: Synced from HubSpot — last sync March 4, 2026
**Quota**: $1,200,000 (Q1 combined team target)
**Current Attainment**: $412,000 closed (34.3%) + $1,192,500 weighted pipeline

**Deal Movement This Week**:

- Evergreen Health moved from Proposal to Negotiation (March 3)
- Apex Sports moved to Closed-Lost (Feb 26)
- Orion Pharma moved to Closed-Won (March 1)
- 3 new leads added from HIMSS conference

## Variations

1. **Individual Rep View**: Remove team summary metrics; add personal quota tracker and activity log (calls made, emails sent, meetings booked) as a sidebar frame.
2. **Enterprise Pipeline**: Add additional columns for "Security Review" and "Procurement" between Negotiation and Won; increase card detail to include multi-threading score and executive sponsor status.
3. **Monthly Forecast View**: Replace the analytics strip with a monthly revenue forecast broken down by commit, best case, and upside categories with weighted totals.

## Build Instructions

1. Set the board background to #F0F2F5 and board dimensions to 5000x3000px.
2. Create the Pipeline Summary Header frame (4800x400px) at the top with navy background (#1B2A4A). Add the title text and four white KPI card rectangles with rounded corners.
3. Create six vertical column frames side by side below the header, each 750px wide (400px for Won/Lost columns), 2000px tall. Apply the stage-specific background colors at 20% opacity.
4. Add column header text blocks at the top of each column with the stage name in bold.
5. Add the stage indicator (colored circle + deal count + dollar value) below each header.
6. Create deal cards as sticky notes in each column. Use the stage color for sticky note fill. Include all fields: company name, deal value, probability, contact, and next step.
7. Create the Pipeline Analytics Strip frame (4800x500px) at the bottom with white background.
8. Add three chart area rectangles inside the analytics strip with light borders.
9. Populate chart areas with conversion rates, velocity metrics, and aging deal warnings.
10. Draw horizontal arrows between columns with conversion percentages. Use dashed lines in #4A6FA5.
11. Connect header to columns with a vertical solid line.
12. Add dotted diagonal connectors from aging deal warnings to the relevant cards in columns above.

## Tips & Best Practices

- **Update weekly**: Move cards between stages every Monday before pipeline review. Stale pipelines lose credibility with leadership.
- **Be honest about probability**: Round-trip every deal's probability against your historical win rate. Inflated probabilities distort forecasts.
- **Color-code urgency**: Add a small red dot shape to any deal that has been in the same stage for more than 14 days.
- **Include loss reasons**: Every Closed-Lost card should have a reason and a lesson. Review these monthly to identify systemic gaps.
- **Link to CRM**: Note the CRM deal ID on each card so teammates can click through for full history.
- **Limit WIP**: If any single stage has more than 15 deals, the rep may be spreading too thin. Focus on advancing high-value deals.
