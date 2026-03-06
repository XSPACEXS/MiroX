# Financial Dashboard

## Overview

- **Purpose**: Executive-level financial performance dashboard that visualizes revenue, expenses, profit margins, cash flow, and key financial ratios in a single board — designed for board meetings, investor updates, and leadership reviews.
- **Best For**: CFOs, CEOs, board members, investors, and finance teams who need a comprehensive yet scannable financial overview.
- **Complexity**: Medium
- **Board Size**: 4200 x 3000px

## Color Scheme

| Role             | Color        | Hex     |
| ---------------- | ------------ | ------- |
| Primary          | Navy Blue    | #1B3A5C |
| Secondary        | Steel Gray   | #607D8B |
| Accent           | Rich Gold    | #F9A825 |
| Positive/Revenue | Forest Green | #2E7D32 |
| Negative/Expense | Crimson      | #C62828 |
| Background       | Warm White   | #FAFAFA |
| Text             | Dark Gray    | #212121 |

## Board Layout

The dashboard uses a magazine-style layout with a header banner, a row of KPI scorecards, two rows of chart frames, and a commentary strip at the bottom.

```
+------------------------------------------------------------------+
|            HEADER: Q4 2025 Financial Dashboard                    |
+--------+--------+--------+--------+--------+--------+------------+
| KPI 1  | KPI 2  | KPI 3  | KPI 4  | KPI 5  | KPI 6  |           |
| Rev    | Gross  | EBITDA | Net    | Cash   | ARR    |           |
+--------+--------+--------+--------+--------+--------+           |
|                          |                           |           |
|  Frame 1:                |  Frame 2:                 |  Frame 5: |
|  Revenue Trend           |  Expense Breakdown        |  Key      |
|  (12-month bar chart)    |  (Category pie chart)     |  Ratios   |
|                          |                           |  Panel    |
+--------------------------+---------------------------+           |
|                          |                           |           |
|  Frame 3:                |  Frame 4:                 |           |
|  Profit & Loss           |  Cash Flow Waterfall      |           |
|  Summary Table           |                           |           |
|                          |                           |           |
+--------------------------+---------------------------+-----------+
|                                                                  |
|  Frame 6: CFO Commentary & Outlook                               |
|                                                                  |
+------------------------------------------------------------------+
```

## Frames & Sections

### Header: Q4 2025 Financial Dashboard

- **Position**: Top, full-width
- **Size**: 4200 x 200px
- **Background**: #1B3A5C
- **Elements**:
  - Text block: "NovaTech Inc. — Q4 2025 Financial Dashboard" (font size 32, bold, white #FFFFFF)
  - Text block: "Period: October 1 — December 31, 2025 | Prepared by: Finance Team | Confidential" (font size 14, #B0BEC5)
  - Shape: Small green circle indicator, label "All systems reporting" (font size 12, #2E7D32)

### KPI Scorecards Row

- **Position**: Below header
- **Size**: 3500 x 250px (6 cards, each ~560 x 200px)
- **Background**: #FAFAFA
- **Elements**:
  - **Card 1 — Revenue**: Rounded rectangle (#F5F5F5 fill, #2E7D32 left border 4px)
    - Label: "Total Revenue" (font size 12, #607D8B)
    - Value: "$9,420,000" (font size 28, bold, #212121)
    - Subtext: "+18.3% vs. Q4 2024" (font size 12, #2E7D32) with upward arrow icon
  - **Card 2 — Gross Margin**: Rounded rectangle (#F5F5F5 fill, #2E7D32 left border)
    - Label: "Gross Margin" (font size 12, #607D8B)
    - Value: "74.2%" (font size 28, bold, #212121)
    - Subtext: "+1.8pp vs. prior quarter" (font size 12, #2E7D32)
  - **Card 3 — EBITDA**: Rounded rectangle (#F5F5F5 fill, #F9A825 left border)
    - Label: "EBITDA" (font size 12, #607D8B)
    - Value: "$1,580,000" (font size 28, bold, #212121)
    - Subtext: "16.8% margin (target: 18%)" (font size 12, #F9A825)
  - **Card 4 — Net Income**: Rounded rectangle (#F5F5F5 fill, #2E7D32 left border)
    - Label: "Net Income" (font size 12, #607D8B)
    - Value: "$920,000" (font size 28, bold, #212121)
    - Subtext: "9.8% net margin" (font size 12, #2E7D32)
  - **Card 5 — Cash Position**: Rounded rectangle (#F5F5F5 fill, #2E7D32 left border)
    - Label: "Cash & Equivalents" (font size 12, #607D8B)
    - Value: "$5,840,000" (font size 28, bold, #212121)
    - Subtext: "+$640K vs. Q3 end" (font size 12, #2E7D32)
  - **Card 6 — ARR**: Rounded rectangle (#F5F5F5 fill, #2E7D32 left border)
    - Label: "Annual Recurring Revenue" (font size 12, #607D8B)
    - Value: "$34,200,000" (font size 28, bold, #212121)
    - Subtext: "+22.1% YoY" (font size 12, #2E7D32)

### Frame 1: Revenue Trend (12-Month)

- **Position**: Middle-left
- **Size**: 1900 x 1000px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Monthly Revenue — Trailing 12 Months" (font size 20, bold, #1B3A5C)
  - Bar chart representation (12 bars, labeled by month):
    - Jan: $2,580K | Feb: $2,620K | Mar: $2,810K | Apr: $2,750K | May: $2,890K | Jun: $3,040K
    - Jul: $2,970K | Aug: $2,920K | Sep: $3,150K | Oct: $3,050K | Nov: $3,120K | Dec: $3,250K
  - Line overlay: Trend line showing upward trajectory (#F9A825, dashed)
  - Y-axis labels: $2.0M to $3.5M in $0.5M increments
  - Text block: "Total FY2025 Revenue: $35,150,000" (font size 14, bold, #2E7D32)
  - Text block: "Q4 Revenue: $9,420,000 (26.8% of annual)" (font size 12, #607D8B)
  - Sticky note (yellow, #FFF9C4): "Dec spike driven by two enterprise deals closing ($420K combined) pulled forward from Jan"

### Frame 2: Expense Breakdown

- **Position**: Middle-right
- **Size**: 1900 x 1000px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Q4 2025 Operating Expenses by Category" (font size 20, bold, #1B3A5C)
  - Circle shape representing pie chart with segments:
    - Personnel & Benefits: 68% ($5,340K) — #1B3A5C
    - Software & Infrastructure: 12% ($940K) — #607D8B
    - Sales & Marketing: 9% ($710K) — #F9A825
    - Professional Services: 5% ($390K) — #2E7D32
    - Office & Facilities: 4% ($310K) — #E65100
    - Other: 2% ($160K) — #C62828
  - Legend with colored squares, category names, percentages, and dollar amounts
  - Text block: "Total OpEx: $7,850,000 | vs. Budget: -2.1% ($160K under)" (font size 14, #2E7D32)
  - Sticky note (green, #C8E6C9): "Infrastructure costs down 8% QoQ from reserved instance migration. Annualized saving: $320K."

### Frame 3: Profit & Loss Summary

- **Position**: Lower-left
- **Size**: 1900 x 1000px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Condensed P&L — Q4 2025" (font size 20, bold, #1B3A5C)
  - Table with columns: Line Item | Q4 2025 | Q3 2025 | QoQ Change | Q4 2024 | YoY Change
  - Row 1: Revenue | $9,420K | $9,040K | +4.2% | $7,960K | +18.3%
  - Row 2: COGS | ($2,430K) | ($2,410K) | +0.8% | ($2,260K) | +7.5%
  - Row 3: **Gross Profit** | **$6,990K** | **$6,630K** | **+5.4%** | **$5,700K** | **+22.6%**
  - Row 4: Operating Expenses | ($5,410K) | ($5,280K) | +2.5% | ($4,720K) | +14.6%
  - Row 5: **Operating Income** | **$1,580K** | **$1,350K** | **+17.0%** | **$980K** | **+61.2%**
  - Row 6: Interest & Other | ($120K) | ($110K) | +9.1% | ($90K) | +33.3%
  - Row 7: Tax Provision | ($540K) | ($460K) | +17.4% | ($330K) | +63.6%
  - Row 8: **Net Income** | **$920K** | **$780K** | **+17.9%** | **$560K** | **+64.3%**
  - Positive changes in #2E7D32, negative in #C62828
  - Text block: "Gross margin expanded 1.8pp QoQ driven by pricing optimization and lower hosting costs" (font size 12, italic, #607D8B)

### Frame 4: Cash Flow Waterfall

- **Position**: Lower-right
- **Size**: 1900 x 1000px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Q4 2025 Cash Flow Waterfall" (font size 20, bold, #1B3A5C)
  - Waterfall chart representation (stacked bar segments):
    - Starting Cash (Q3 End): $5,200K (gray bar, #607D8B)
    - - Cash from Operations: +$1,420K (green bar, #2E7D32)
    - - Customer Collections: +$9,180K (green bar, #2E7D32)
    - - Payroll & Benefits: -$5,340K (red bar, #C62828)
    - - Vendor Payments: -$2,110K (red bar, #C62828)
    - - Capital Expenditures: -$380K (red bar, #C62828)
    - - Debt Service: -$220K (red bar, #C62828)
    - - Other Income: +$90K (green bar, #2E7D32)
    - = Ending Cash: $5,840K (blue bar, #1B3A5C)
  - Text block: "Net cash change: +$640K | Days Sales Outstanding: 42 days (target: <45)" (font size 14, #2E7D32)
  - Sticky note (blue, #BBDEFB): "DSO improved from 48 to 42 days after implementing automated invoice reminders in October"

### Frame 5: Key Ratios Panel

- **Position**: Right sidebar
- **Size**: 600 x 2200px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Key Financial Ratios" (font size 18, bold, #1B3A5C)
  - Vertical stack of ratio cards (each 540 x 160px):
  - **Ratio 1**: Shape (#FFFFFF fill)
    - Label: "Current Ratio" | Value: "2.8x" | Status: Green dot | Benchmark: ">2.0x"
  - **Ratio 2**: Shape (#FFFFFF fill)
    - Label: "Quick Ratio" | Value: "2.4x" | Status: Green dot | Benchmark: ">1.5x"
  - **Ratio 3**: Shape (#FFFFFF fill)
    - Label: "Debt-to-Equity" | Value: "0.3x" | Status: Green dot | Benchmark: "<1.0x"
  - **Ratio 4**: Shape (#FFFFFF fill)
    - Label: "Revenue per Employee" | Value: "$188K" | Status: Yellow dot | Benchmark: ">$200K"
  - **Ratio 5**: Shape (#FFFFFF fill)
    - Label: "Rule of 40" | Value: "38.9" | Status: Yellow dot | Benchmark: ">40"
    - Subtext: "Growth (22.1%) + Margin (16.8%)" (font size 11, #607D8B)
  - **Ratio 6**: Shape (#FFFFFF fill)
    - Label: "LTV:CAC Ratio" | Value: "4.2x" | Status: Green dot | Benchmark: ">3.0x"
  - **Ratio 7**: Shape (#FFFFFF fill)
    - Label: "Net Revenue Retention" | Value: "112%" | Status: Green dot | Benchmark: ">110%"
  - **Ratio 8**: Shape (#FFFFFF fill)
    - Label: "CAC Payback" | Value: "14 months" | Status: Yellow dot | Benchmark: "<12 months"
  - Status dots: Green (#2E7D32) = meets target, Yellow (#F9A825) = near target, Red (#C62828) = below target

### Frame 6: CFO Commentary & Outlook

- **Position**: Full-width bottom strip
- **Size**: 4200 x 400px
- **Background**: #1B3A5C
- **Elements**:
  - Text block: "CFO Commentary — Sarah Chen" (font size 20, bold, white)
  - Text block (white, font size 14): "Q4 was our strongest quarter on record. Revenue crossed $9.4M driven by enterprise deal momentum and strong net retention. Gross margins expanded as we realized infrastructure savings from our cloud optimization initiative. We enter FY2026 with $5.8M cash, 22% ARR growth, and a clear path to profitability. Key focus areas for Q1: (1) close the Meridian Corp deal ($2.1M ARR), (2) onboard 8 new engineering hires to support the AI roadmap, (3) implement the new FP&A tool to improve forecasting accuracy."
  - Text block: "FY2026 Outlook: Revenue $38M (+8% vs. initial target) | EBITDA margin 15-18% | Cash positive all quarters" (font size 14, bold, #F9A825)
  - Sticky note (yellow, #FFF9C4): "Board Q: What is our sensitivity to losing 2 enterprise customers? Answer: ~$1.8M ARR impact, still cash positive. Scenario modeled in revenue-model.md"

## Connectors & Flow

- Arrow from KPI Scorecards to Frame 1: dashed line, #607D8B, label "Revenue detail"
- Arrow from KPI Scorecards to Frame 5: dashed line, #607D8B, label "Ratio drill-down"
- Arrow from Frame 1 to Frame 3: solid line, #1B3A5C, label "Flows into P&L"
- Arrow from Frame 2 to Frame 3: solid line, #1B3A5C, label "Expense detail"
- Arrow from Frame 3 to Frame 4: solid line, #1B3A5C, label "Profit drives cash"
- Arrow from Frame 4 to Frame 5: dashed line, #607D8B, label "Cash ratios"

## Example Content

All example content is embedded in the Frames & Sections above. The dashboard models NovaTech Inc.'s Q4 2025 performance:

- $9.42M quarterly revenue (+18.3% YoY)
- 74.2% gross margin, 16.8% EBITDA margin
- $5.84M cash position, improving DSO
- $34.2M ARR with 112% net revenue retention
- 8 financial ratios with status indicators against benchmarks
- Full condensed P&L with quarterly and annual comparisons
- Cash flow waterfall showing sources and uses

## Variations

1. **Monthly Dashboard**: Replace quarterly aggregates with monthly data. Shrink the P&L to current month only and add a month-over-month trend line to each KPI card.
2. **Investor Update Board**: Add a "Cap Table & Dilution" frame, replace CFO Commentary with "Fundraising Status" frame showing round details, and include a competitive landscape section.
3. **Departmental P&L**: Replace the single P&L with a side-by-side comparison of 3-4 department-level P&Ls, useful for business unit leaders.

## Build Instructions

1. Create the board at 4200 x 3000px with #FAFAFA background.
2. Build the header banner at position (0, 0), full width, 200px tall, #1B3A5C background. Add the title and subtitle text in white.
3. Create the KPI scorecards row at position (50, 220). Build 6 rounded rectangles, each 560 x 200px, spaced 20px apart. Add the value, label, and trend text to each.
4. Create Frame 1 (Revenue Trend) at position (50, 500) with size 1900 x 1000px. Draw 12 bars for monthly revenue and add the trend overlay line.
5. Create Frame 2 (Expense Breakdown) at position (2000, 500) with size 1900 x 1000px. Draw the pie chart circle with labeled segments and legend.
6. Create Frame 5 (Key Ratios) at position (3550, 500) with size 600 x 2200px. Stack 8 ratio cards vertically with color-coded status dots.
7. Create Frame 3 (P&L Summary) at position (50, 1550) with size 1900 x 1000px. Build the table with 8 rows and 6 columns. Color-code the change percentages.
8. Create Frame 4 (Cash Flow Waterfall) at position (2000, 1550) with size 1900 x 1000px. Draw the waterfall bars with green (positive) and red (negative) segments.
9. Create Frame 6 (CFO Commentary) at position (0, 2600) with size 4200 x 400px. Use #1B3A5C background with white text.
10. Add all connectors between frames as specified.
11. Verify all numbers are consistent (e.g., Revenue in KPI card matches Revenue in P&L).

## Tips & Best Practices

- **Consistency is everything**: Make sure every number that appears in multiple places (e.g., revenue in KPI card, P&L, and commentary) is identical. One discrepancy destroys credibility.
- **Use conditional color coding**: Green for metrics meeting or exceeding targets, yellow for within 10% of target, red for missing by more than 10%.
- **Keep it scannable**: An executive should be able to understand the story in 30 seconds by reading the KPI cards and the CFO commentary alone.
- **Update cadence**: Refresh within 5 business days of quarter close. Stale dashboards are worse than no dashboard.
- **Add context, not just numbers**: The CFO commentary section is the most important frame — it tells the "so what" behind the numbers.
- **Link to detail**: Each chart frame should link to the underlying spreadsheet or BI dashboard for users who want to drill deeper.
