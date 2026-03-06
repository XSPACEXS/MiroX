# Investment Analysis Board

## Overview

- **Purpose**: Structured evaluation and comparison of two or more investment opportunities — whether acquisitions, venture investments, capital projects, or strategic partnerships — using a consistent framework of risk/return analysis, due diligence tracking, and decision criteria.
- **Best For**: CFOs, corporate development teams, venture capital analysts, private equity associates, and founders evaluating strategic investments.
- **Complexity**: Advanced
- **Board Size**: 5000 x 3400px

## Color Scheme

| Role                 | Color        | Hex     |
| -------------------- | ------------ | ------- |
| Primary              | Navy Blue    | #1B3A5C |
| Secondary            | Steel Gray   | #607D8B |
| Accent               | Rich Gold    | #F9A825 |
| Opportunity/Positive | Forest Green | #2E7D32 |
| Risk/Negative        | Crimson      | #C62828 |
| Warning              | Burnt Orange | #E65100 |
| Background           | Warm White   | #FAFAFA |
| Text                 | Dark Gray    | #212121 |

## Board Layout

The board uses a top-to-bottom flow: opportunity overview at top, deep-dive comparison in the middle, and decision framework at the bottom.

```
+----------------------------------------------------------------------+
|              HEADER: Investment Opportunity Analysis                   |
+----------------------------------------------------------------------+
|                                                                      |
|  Frame 1: Opportunity Overview (3 opportunity cards side by side)     |
|                                                                      |
+----------------------+-------------------+---------------------------+
|                      |                   |                           |
|  Frame 2:            |  Frame 3:         |  Frame 4:                 |
|  Financial           |  Risk/Return      |  Strategic                |
|  Comparison          |  Matrix           |  Fit Assessment           |
|  Table               |  (Scatter Plot)   |                           |
|                      |                   |                           |
+----------------------+-------------------+---------------------------+
|                                          |                           |
|  Frame 5:                                |  Frame 6:                 |
|  Due Diligence Checklist                 |  Decision                 |
|  (by opportunity)                        |  Framework &              |
|                                          |  Recommendation           |
+------------------------------------------+---------------------------+
```

## Frames & Sections

### Header

- **Position**: Top, full-width
- **Size**: 5000 x 180px
- **Background**: #1B3A5C
- **Elements**:
  - Text block: "Investment Opportunity Analysis — Q1 2026 Pipeline" (font size 30, bold, white)
  - Text block: "Corporate Development | Lead: Marcus Wong, VP Corp Dev | Last Updated: February 18, 2026" (font size 13, #B0BEC5)

### Frame 1: Opportunity Overview

- **Position**: Below header, full-width
- **Size**: 4900 x 700px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "Opportunities Under Evaluation" (font size 24, bold, #1B3A5C)
  - **Card A — DataStream Analytics** (1500 x 550px, #FFFFFF fill, #1B3A5C top border 4px):
    - Text: "DataStream Analytics" (font size 20, bold, #1B3A5C)
    - Text: "Series B SaaS analytics company" (font size 13, #607D8B)
    - Sticky note (blue, #BBDEFB): "Founded 2019 | 85 employees | San Francisco, CA"
    - Text: "Ask: $28M for 100% acquisition" (font size 16, bold, #212121)
    - Text: "ARR: $8.2M | Growth: 45% YoY | NRR: 118%" (font size 13, #2E7D32)
    - Text: "Rationale: Acqui-hire ML team (12 engineers) + customer data platform" (font size 12, #607D8B)
  - **Card B — CloudVault Inc.** (1500 x 550px, #FFFFFF fill, #F9A825 top border 4px):
    - Text: "CloudVault Inc." (font size 20, bold, #1B3A5C)
    - Text: "Late-stage cloud security platform" (font size 13, #607D8B)
    - Sticky note (blue, #BBDEFB): "Founded 2017 | 210 employees | Austin, TX"
    - Text: "Ask: $62M for 100% acquisition" (font size 16, bold, #212121)
    - Text: "ARR: $18.5M | Growth: 32% YoY | NRR: 108%" (font size 13, #2E7D32)
    - Text: "Rationale: Adjacent market entry into security vertical + enterprise customer base" (font size 12, #607D8B)
  - **Card C — Nexus AI (Minority Stake)** (1500 x 550px, #FFFFFF fill, #2E7D32 top border 4px):
    - Text: "Nexus AI" (font size 20, bold, #1B3A5C)
    - Text: "Pre-revenue AI infrastructure startup" (font size 13, #607D8B)
    - Sticky note (blue, #BBDEFB): "Founded 2024 | 22 employees | London, UK"
    - Text: "Ask: $5M for 15% equity stake" (font size 16, bold, #212121)
    - Text: "ARR: $0 (pre-revenue) | Growth: N/A | Pipeline: $1.2M" (font size 13, #E65100)
    - Text: "Rationale: Strategic technology partnership + first-mover in AI infra layer" (font size 12, #607D8B)

### Frame 2: Financial Comparison Table

- **Position**: Middle-left
- **Size**: 1800 x 1100px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Financial Comparison" (font size 22, bold, #1B3A5C)
  - Table with columns: Metric | DataStream | CloudVault | Nexus AI
  - Row 1: Revenue (TTM) | $7.4M | $16.8M | $0
  - Row 2: ARR | $8.2M | $18.5M | N/A
  - Row 3: Revenue Growth (YoY) | 45% | 32% | N/A
  - Row 4: Gross Margin | 78% | 71% | N/A
  - Row 5: EBITDA Margin | -12% | +4% | -100%
  - Row 6: Burn Rate (Monthly) | $320K | $0 (profitable) | $180K
  - Row 7: Cash on Hand | $4.1M | $8.3M | $2.8M
  - Row 8: Enterprise Value/Revenue | 3.8x | 3.7x | N/A
  - Row 9: Customer Count | 142 | 380 | 0
  - Row 10: Net Revenue Retention | 118% | 108% | N/A
  - Row 11: CAC Payback (months) | 11 | 16 | N/A
  - Row 12: Estimated Integration Cost | $2.5M | $6.0M | $0
  - Color coding: Best value in each row highlighted with green (#C8E6C9 background), worst in red (#FFCDD2 background)
  - Sticky note (yellow, #FFF9C4): "DataStream's EV/Revenue multiple is below market median (4.5x) for analytics SaaS — potential value opportunity"

### Frame 3: Risk/Return Matrix

- **Position**: Middle-center
- **Size**: 1500 x 1100px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Risk-Return Assessment" (font size 22, bold, #1B3A5C)
  - Scatter plot area (1300 x 800px):
    - X-axis: "Risk Level" (Low to High), labeled 1-10
    - Y-axis: "Expected Return (3-Year IRR)", labeled 0% to 80%
  - **Dot A — DataStream**: Position (4, 35%), blue circle (#1B3A5C), size medium
    - Label: "DataStream: Moderate risk, 35% IRR"
  - **Dot B — CloudVault**: Position (5, 22%), gold circle (#F9A825), size large
    - Label: "CloudVault: Moderate risk, 22% IRR"
  - **Dot C — Nexus AI**: Position (8, 65%), green circle (#2E7D32), size small
    - Label: "Nexus AI: High risk, 65% potential IRR"
  - Quadrant labels (light text, #B0BEC5):
    - Top-left: "Sweet Spot: Low Risk, High Return"
    - Top-right: "Venture Bets: High Risk, High Return"
    - Bottom-left: "Safe Bets: Low Risk, Low Return"
    - Bottom-right: "Avoid: High Risk, Low Return"
  - Shape: Dashed circle around "Sweet Spot" quadrant (#2E7D32, dashed border)
  - Sticky note (green, #C8E6C9): "DataStream sits closest to the sweet spot — best risk-adjusted return of the three"

### Frame 4: Strategic Fit Assessment

- **Position**: Middle-right
- **Size**: 1500 x 1100px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Strategic Fit Scorecard" (font size 22, bold, #1B3A5C)
  - Text block: "Scored 1-5 by Corp Dev team (avg of 4 evaluators)" (font size 12, #607D8B)
  - Table with columns: Criteria | Weight | DataStream | CloudVault | Nexus AI
  - Row 1: Product Synergy | 25% | 4.5 | 3.0 | 2.5
  - Row 2: Team Quality | 20% | 4.8 | 3.5 | 4.2
  - Row 3: Customer Overlap | 15% | 3.2 | 4.1 | 1.0
  - Row 4: Technology Moat | 15% | 4.0 | 3.8 | 4.6
  - Row 5: Cultural Alignment | 10% | 4.2 | 2.8 | 3.5
  - Row 6: Speed to Integrate | 10% | 3.8 | 2.5 | 5.0
  - Row 7: Market Timing | 5% | 4.0 | 3.5 | 4.8
  - **Weighted Total**: — | — | **4.12** | **3.32** | **3.22**
  - Scores color-coded: >=4.0 green (#C8E6C9), 3.0-3.9 yellow (#FFF9C4), <3.0 red (#FFCDD2)
  - Sticky note (yellow, #FFF9C4): "CloudVault cultural alignment score (2.8) is a red flag — their VP Eng left in Sept and two more seniors followed"
  - Sticky note (pink, #F8BBD0): "Nexus AI customer overlap scored 1.0 — but this is expected for a strategic/adjacent investment"

### Frame 5: Due Diligence Checklist

- **Position**: Bottom-left
- **Size**: 2800 x 1000px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "Due Diligence Tracker" (font size 22, bold, #1B3A5C)
  - Three columns, one per opportunity:
  - **Column A — DataStream Due Diligence**:
    - Checkbox (checked, green): "Financial audit — completed Dec 15, clean opinion"
    - Checkbox (checked, green): "IP review — 3 patents, no infringement claims"
    - Checkbox (checked, green): "Customer reference calls — 5/5 completed, NPS 72"
    - Checkbox (checked, green): "Technical architecture review — scalable, AWS-native"
    - Checkbox (unchecked, yellow): "Employment agreements review — in progress, expect Feb 22"
    - Checkbox (unchecked, yellow): "Key person retention packages — draft terms sent"
    - Checkbox (unchecked, gray): "Regulatory compliance check — scheduled Feb 25"
    - Progress bar: 57% complete (#2E7D32 fill)
  - **Column B — CloudVault Due Diligence**:
    - Checkbox (checked, green): "Financial audit — completed Jan 8, one restatement noted"
    - Checkbox (checked, green): "IP review — 7 patents, one pending dispute with competitor"
    - Checkbox (checked, yellow): "Customer reference calls — 3/5 completed, mixed feedback on support"
    - Checkbox (unchecked, yellow): "Technical architecture review — in progress, concerns about legacy monolith"
    - Checkbox (unchecked, gray): "Employment agreements review — not started"
    - Checkbox (unchecked, gray): "Key person retention — blocked on leadership instability"
    - Checkbox (unchecked, gray): "Regulatory compliance check — not started"
    - Progress bar: 33% complete (#F9A825 fill)
  - **Column C — Nexus AI Due Diligence**:
    - Checkbox (checked, green): "Team background checks — all clear"
    - Checkbox (checked, green): "Technology demo — impressive prototype, production-ready in 6 months"
    - Checkbox (checked, green): "Cap table review — clean, standard SAFE notes"
    - Checkbox (unchecked, yellow): "Market sizing validation — third-party report commissioned"
    - Checkbox (unchecked, gray): "Reference calls with pilot customers — 2 pilots in progress"
    - Progress bar: 50% complete (#F9A825 fill)
  - Sticky note (pink, #F8BBD0): "CloudVault IP dispute could take 12-18 months to resolve — need to quantify liability exposure before proceeding"

### Frame 6: Decision Framework & Recommendation

- **Position**: Bottom-right
- **Size**: 2000 x 1000px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Decision Framework" (font size 22, bold, #1B3A5C)
  - Text block: "Investment Thesis Requirements (all must be TRUE to proceed):" (font size 14, bold, #212121)
  - Checklist shape:
    - "1. Strategic fit score >= 3.5" — DataStream: YES (green), CloudVault: NO (red), Nexus AI: NO (red)
    - "2. 3-year IRR > cost of capital (12%)" — DataStream: YES, CloudVault: YES, Nexus AI: YES
    - "3. Due diligence > 50% complete with no blockers" — DataStream: YES, CloudVault: NO, Nexus AI: YES
    - "4. Integration cost < 15% of deal value" — DataStream: YES (8.9%), CloudVault: YES (9.7%), Nexus AI: YES (0%)
    - "5. Key person retention > 80% probability" — DataStream: YES, CloudVault: NO, Nexus AI: YES
  - Score summary: DataStream 5/5, CloudVault 2/5, Nexus AI 3/5
  - Shape: Large rounded rectangle (#2E7D32 border, 3px), label "RECOMMENDATION":
    - Text block (font size 16, bold, #212121): "Primary: Proceed with DataStream Analytics acquisition ($28M)"
    - Text block (font size 14, #607D8B): "DataStream scores highest on both financial metrics and strategic fit. The ML engineering team (12 people) directly accelerates our AI roadmap by 12-18 months. Risk-adjusted IRR of 35% exceeds our 12% hurdle rate. Recommend board approval at March meeting."
    - Text block (font size 16, bold, #212121): "Secondary: Pursue Nexus AI minority stake ($5M)"
    - Text block (font size 14, #607D8B): "Low capital outlay with optionality. Revisit for full acquisition in 18-24 months once product-market fit is validated."
    - Text block (font size 16, bold, #C62828): "Hold: CloudVault — revisit in Q3 after leadership stabilizes and IP dispute resolves"
  - Sticky note (yellow, #FFF9C4): "Next steps: (1) DataStream LOI by Feb 28, (2) Nexus AI term sheet by Mar 7, (3) CloudVault monitoring monthly check-in"

## Connectors & Flow

- Arrow from Frame 1 (Overview) to Frame 2 (Financial): solid line, #607D8B, label "Financial drill-down"
- Arrow from Frame 1 (Overview) to Frame 3 (Risk/Return): solid line, #607D8B, label "Risk assessment"
- Arrow from Frame 1 (Overview) to Frame 4 (Strategic Fit): solid line, #607D8B, label "Strategic scoring"
- Arrow from Frame 2 to Frame 6: dashed line, #1B3A5C, label "Quantitative input"
- Arrow from Frame 3 to Frame 6: dashed line, #1B3A5C, label "Risk-adjusted view"
- Arrow from Frame 4 to Frame 6: dashed line, #1B3A5C, label "Strategic input"
- Arrow from Frame 5 to Frame 6: solid line, #C62828, label "DD gates"

## Example Content

All example content is embedded above. The scenario models a mid-stage SaaS company (NovaTech Inc.) evaluating three investment opportunities:

- **DataStream Analytics**: $28M full acquisition of an analytics SaaS company for team and technology
- **CloudVault Inc.**: $62M full acquisition of a cloud security platform for market expansion
- **Nexus AI**: $5M minority stake in a pre-revenue AI infrastructure startup for strategic positioning

The board demonstrates how to compare fundamentally different types of investments (full acquisitions vs. minority stakes, profitable vs. pre-revenue) using a consistent framework.

## Variations

1. **VC Deal Flow Board**: Replace the due diligence section with a pipeline funnel (Sourced → First Meeting → Deep Dive → Term Sheet → Closed), add a portfolio construction frame showing sector/stage diversification.
2. **Capital Project Evaluation**: Replace company metrics with project-specific data (NPV, payback period, resource requirements), add a project timeline and dependency mapping frame.
3. **Partnership Evaluation**: Replace financial acquisition metrics with partnership terms (revenue share, exclusivity, co-development commitments), add a relationship mapping frame.

## Build Instructions

1. Create the board at 5000 x 3400px with #FAFAFA background.
2. Build the header banner at position (0, 0), full width, 180px tall, #1B3A5C background.
3. Create Frame 1 (Opportunity Overview) at position (50, 200) with size 4900 x 700px. Place three opportunity cards side by side with 50px spacing.
4. Create Frame 2 (Financial Comparison) at position (50, 950) with size 1800 x 1100px. Build the 12-row comparison table with conditional color formatting.
5. Create Frame 3 (Risk/Return Matrix) at position (1900, 950) with size 1500 x 1100px. Draw the scatter plot with labeled axes, three positioned dots, and quadrant labels.
6. Create Frame 4 (Strategic Fit) at position (3450, 950) with size 1500 x 1100px. Build the weighted scorecard table with color-coded scores.
7. Create Frame 5 (Due Diligence) at position (50, 2100) with size 2800 x 1000px. Create three checklist columns with progress bars.
8. Create Frame 6 (Decision Framework) at position (2900, 2100) with size 2000 x 1000px. Build the go/no-go checklist and recommendation box.
9. Add all connectors between frames as specified.
10. Verify scoring consistency (e.g., strategic fit scores in Frame 4 must match the pass/fail in Frame 6).

## Tips & Best Practices

- **Use the same criteria for every opportunity**: Even if one is an acquisition and another is a minority stake, consistent criteria enable fair comparison.
- **Update due diligence weekly**: The checklist should be a living tracker. Assign owners to each line item and set deadlines.
- **Separate facts from opinions**: Financial data is factual; strategic fit scores are subjective. Label them accordingly and note who scored what.
- **Red flags are not disqualifiers**: A low score in one area (like CloudVault's cultural alignment) warrants deeper investigation, not automatic rejection.
- **Document the "why not"**: For opportunities you pass on, record the reasoning. You may revisit them later, and institutional memory matters.
- **Involve cross-functional stakeholders**: Engineering should evaluate technical architecture, Sales should evaluate customer overlap, and HR should assess cultural fit.
