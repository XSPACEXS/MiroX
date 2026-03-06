# Visual Guide — Finance Boards

## Overview

Finance boards walk a razor's edge between beauty and precision. Too decorative, and stakeholders distrust the data. Too sterile, and the board fails to communicate its story. The visual design must signal credibility (I can trust these numbers), clarity (I understand what they mean), and urgency (I know what to do about them).

---

## Color Palettes

### Palette 1: Corporate Navy (The Standard)

The default palette for corporate finance boards. Navy signals authority and stability. Steel gray provides a professional backdrop. Gold highlights demand attention.

| Role       | Color        | Hex     | Usage                                   |
| ---------- | ------------ | ------- | --------------------------------------- |
| Primary    | Navy Blue    | #1B3A5C | Headers, structural frames, borders     |
| Secondary  | Steel Gray   | #607D8B | Supporting text, secondary panels       |
| Accent     | Rich Gold    | #F9A825 | Highlights, alerts, call-to-action      |
| Positive   | Forest Green | #2E7D32 | Revenue, on-target, positive variance   |
| Negative   | Crimson Red  | #C62828 | Expenses over budget, negative variance |
| Warning    | Amber        | #FF8F00 | Approaching threshold, needs review     |
| Background | Warm White   | #FAFAFA | Board and card backgrounds              |
| Text       | Dark Gray    | #212121 | Primary text and data                   |
| Muted      | Light Gray   | #BDBDBD | Grid lines, subtle borders, disabled    |

**When to use**: Budget planning, financial dashboards, quarterly reviews, board presentations.

**Why it works**: Navy conveys institutional credibility — this is the color of serious money. The green/red financial convention is immediately understood. Gold draws attention without breaking the professional tone.

### Palette 2: Dark Mode Finance (The Executive)

A dark-background palette suited for wall displays, executive war rooms, and high-impact presentations.

| Role      | Color         | Hex     | Usage                               |
| --------- | ------------- | ------- | ----------------------------------- |
| Primary   | Slate Black   | #1A1A2E | Background panels, primary surfaces |
| Secondary | Dark Blue     | #16213E | Secondary panels, card backgrounds  |
| Accent    | Electric Gold | #FFC107 | Key metrics, highlights             |
| Positive  | Neon Green    | #00E676 | Positive indicators                 |
| Negative  | Signal Red    | #FF1744 | Negative indicators                 |
| Warning   | Hot Amber     | #FF9100 | Warnings                            |
| Surface   | Charcoal      | #2C2C3E | Elevated surfaces                   |
| Text      | Off White     | #E8E8E8 | All text on dark backgrounds        |
| Muted     | Dim Gray      | #4A4A5A | Subtle borders, disabled text       |

**When to use**: Executive dashboards displayed on screens, investor presentations, board meeting displays.

**Why it works**: Dark backgrounds create a "command center" feel and make data points pop. The neon green/red signals are visible from across a conference room.

### Palette 3: Clean Analytics (The Data-First)

A minimal, high-contrast palette for analytical boards where data density is high and decoration is minimal.

| Role        | Color          | Hex     | Usage                 |
| ----------- | -------------- | ------- | --------------------- |
| Primary     | Ink Blue       | #0A3D62 | Headers, axis labels  |
| Secondary   | Cool Gray      | #78909C | Supporting elements   |
| Chart Blue  | Bright Blue    | #1976D2 | Primary data series   |
| Chart Teal  | Medium Teal    | #00897B | Secondary data series |
| Chart Amber | Warm Amber     | #FFA000 | Tertiary data series  |
| Positive    | Standard Green | #388E3C | Positive values       |
| Negative    | Standard Red   | #D32F2F | Negative values       |
| Background  | Pure White     | #FFFFFF | Clean backdrop        |
| Text        | Near Black     | #1A1A1A | Data, labels          |
| Grid        | Whisper Gray   | #EEEEEE | Grid lines, dividers  |

**When to use**: Investment analysis, revenue modeling, data-heavy comparison boards.

**Why it works**: By removing visual decoration, the data itself becomes the visual story. The three chart colors (blue, teal, amber) differentiate data series without conflicting with the green/red financial health indicators.

### Palette 4: Startup Finance (The Modern)

A contemporary palette for startup environments where finance meets product thinking.

| Role       | Color       | Hex     | Usage                        |
| ---------- | ----------- | ------- | ---------------------------- |
| Primary    | Deep Indigo | #283593 | Headers, structural elements |
| Secondary  | Violet      | #5C6BC0 | Supporting elements, cards   |
| Accent     | Coral       | #FF7043 | Highlights, key metrics      |
| Positive   | Teal Green  | #009688 | Positive indicators          |
| Negative   | Rose Red    | #E53935 | Negative indicators          |
| Background | Soft Gray   | #F5F5F5 | Board background             |
| Text       | Dark        | #212121 | All text                     |
| Card       | White       | #FFFFFF | Card backgrounds             |
| Muted      | Medium Gray | #9E9E9E | Secondary text               |

**When to use**: Startup budget planning, investor board presentations, revenue model canvases for seed/Series A.

**Why it works**: Indigo signals ambition and innovation while maintaining professionalism. Coral replaces corporate gold with a warmer, more approachable accent.

---

## Typography

### Type Hierarchy for Finance Boards

Finance typography must balance data density with readability. Numbers dominate, so they need careful treatment.

| Level          | Size    | Weight    | Color                 | Used For                             |
| -------------- | ------- | --------- | --------------------- | ------------------------------------ |
| Board Title    | 32-36pt | Bold      | White on Primary      | Main header banner                   |
| Section Title  | 24pt    | Bold      | Primary               | Panel/frame headers                  |
| KPI Value      | 36pt    | Bold      | Varies (health color) | Headline numbers ($38.2M)            |
| KPI Label      | 14pt    | Regular   | Secondary gray        | What the number measures ("Revenue") |
| KPI Comparison | 14pt    | Semi-bold | Green or Red          | Variance text ("+8.3% YoY")          |
| Table Header   | 13pt    | Bold      | Primary               | Column headers in data tables        |
| Table Data     | 12pt    | Regular   | Dark text             | Numbers in table cells               |
| Annotation     | 11pt    | Regular   | Muted gray            | Sources, notes, assumptions          |
| Status Badge   | 11pt    | Bold      | White on color        | "On Track," "At Risk," "Over Budget" |

### Typography Rules

1. **Numbers use tabular (monospaced) figures when possible** — this ensures columns of numbers align vertically. If Miro does not support tabular figures, right-align all numbers.
2. **Dollar signs and currency symbols share the same size as the number** — never make them smaller. "$24.5M" not "$24.5M" with a tiny dollar sign.
3. **Variance text is always bold and colored** — "+8.3%" in green or "-2.1%" in red. This is the most scanned text on the board.
4. **Use commas in large numbers** — $24,500,000 not $24500000. Or abbreviate with M/B: $24.5M, $1.2B.
5. **One decimal place for percentages, two for ratios** — "+8.3% YoY" and "LTV/CAC: 7.11x". Consistency builds trust.

---

## Element Choices

### KPI Cards

The KPI card is the fundamental building block of finance boards. It packages a single metric with context.

**Anatomy of a KPI card**:

```
+--------------------------------------+
|  [4px top border — health color]     |
|                                      |
|  Revenue                       [14pt]|
|  $38,200,000               [36pt]   |
|  +8.3% vs FY2025    [14pt, green]   |
|  Target: $37,000,000  [11pt, gray]  |
|                                      |
|  Source: GL, March 2026  [10pt]     |
+--------------------------------------+
   Background: #FFFFFF
   Border: 1px #E0E0E0
   Top border: 4px green (#2E7D32)
   Size: 350x250px
```

**KPI card rules**:

- The **value** is the largest text (36pt bold)
- The **label** sits above the value (14pt, muted)
- The **comparison** sits below the value (14pt, colored green/red)
- The **target** sits below the comparison (11pt, gray)
- The **top border** color indicates health (green/amber/red)
- Cards in a row must be exactly the same width and height

### Data Tables

Tables on finance boards must follow accounting conventions:

| Principle             | Implementation                                      |
| --------------------- | --------------------------------------------------- |
| Right-align numbers   | All numerical columns are right-aligned             |
| Left-align labels     | Row headers and text columns are left-aligned       |
| Alternate row shading | Light gray (#F5F5F5) on every other row             |
| Bold totals           | Sum rows use bold text and a top border             |
| Color variances       | Positive variances in green, negative in red        |
| Consistent decimals   | All numbers in a column use the same decimal places |
| Header separation     | Table headers have a 2px bottom border              |

### Charts (Simulated in Miro)

Miro is not a charting tool, but chart-like visualizations can be constructed using shapes:

**Bar charts**: Use rectangular shapes with heights proportional to values. Minimum 5 bars to show a meaningful trend. Label each bar with the value above it.

**Pie/donut charts**: Use Miro's pie chart shape or construct from arc shapes. Maximum 6 segments. Label each segment with both category name and percentage.

**Waterfall charts**: Use stacked positive (green) and negative (red) rectangles with connecting lines. Perfect for cash flow visualization.

**Trend lines**: Use Miro lines connecting data point circles. Minimum 6 data points. Add a dashed target line for comparison.

### Status Badges

Small colored labels that communicate financial health at a glance:

| Badge        | Background | Text  | Usage               |
| ------------ | ---------- | ----- | ------------------- |
| On Track     | #2E7D32    | White | Within 5% of budget |
| At Risk      | #FF8F00    | White | 5-15% off budget    |
| Over Budget  | #C62828    | White | >15% off budget     |
| Under Review | #607D8B    | White | Pending approval    |
| Approved     | #1B3A5C    | White | Signed off          |
| Draft        | #BDBDBD    | Dark  | Work in progress    |

Badge size: 100-130px wide, 28px tall, 4px border radius.

---

## Contrast and Readability

### Critical Contrast Pairs

Finance boards contain dense data, so contrast must be excellent:

| Combination                       | Ratio | Status                                  |
| --------------------------------- | ----- | --------------------------------------- |
| Dark (#212121) on White (#FFFFFF) | 16:1  | Excellent                               |
| White on Navy (#1B3A5C)           | 9.5:1 | Excellent                               |
| Green (#2E7D32) on White          | 5.9:1 | Good                                    |
| Red (#C62828) on White            | 6.5:1 | Good                                    |
| Amber (#FF8F00) on White          | 3.1:1 | Marginal — use on backgrounds only      |
| White on Amber (#FF8F00)          | 3.1:1 | Marginal — increase to #E65100 for text |

### Number Readability Rules

- Minimum font size for data: 12pt
- Minimum font size for KPI values: 28pt
- Maximum numbers per visible screen area: 30-40 (beyond this, cognitive overload)
- Minimum row height in tables: 35px (to prevent crowding)

---

## Decorative Elements

### Variance Indicators

The signature decorative element of finance boards. Small visual signals that communicate direction:

**Arrow indicators**: Small up/down arrows (12px) in green/red next to variance values

```
Revenue: $38.2M  ▲ +8.3%
Expenses: $24.5M  ▲ +15.6%  (red because expenses up is bad)
EBITDA:   $5.7M   ▲ +2.1%
```

**Sparklines**: Tiny inline line charts (60px wide, 20px tall) showing 6-12 period trend, placed next to the current value. These communicate trend without consuming space.

**Threshold markers**: Thin horizontal lines on bar charts showing the target or budget level. When the bar exceeds the threshold, the excess portion is colored differently (amber or red).

### Cash Flow Waterfall

A specialized visual element for showing how cash flows from starting balance to ending balance:

```
Starting    Revenue    Expenses    CapEx    Financing    Ending
Balance                                                  Balance
[$12.0M]   [+$38.2M]  [-$24.5M]  [-$3.2M]  [-$1.5M]   [$21.0M]
  |           |           |          |          |           |
  |           |           |          |          |           |
  +---[green]-+---[red]---+---[red]--+---[red]--+-----[navy]+
```

Green bars go up (positive). Red bars go down (negative). The waterfall structure visually explains the math.

### Allocation Treemap

For budget allocation visualization, a treemap uses area to represent proportion:

```
+---------------------------+------------------+
|                           |                  |
|    Engineering            |   Sales &        |
|    40%                    |   Marketing      |
|    $9.8M                  |   25%            |
|                           |   $6.2M          |
+---------------------------+------------------+
|  Product  |  CS     |  G&A    |  IT          |
|  13%      |  9%     |  9%     |  4%          |
|  $3.1M    |  $2.3M  |  $2.2M  |  $900K       |
+-----------+---------+---------+--------------+
```

Larger areas mean larger budget allocations. The treemap communicates proportionality instantly.

---

## Accessibility Considerations

### Color Blindness

Finance boards rely heavily on green/red signaling, which is problematic for color-blind users:

1. **Always include the +/- sign** alongside color — "+8.3%" is readable even without green
2. **Add directional arrows** (up/down) as a secondary signal
3. **Use blue for positive instead of green** on boards where color blindness is a known concern (#1976D2 replaces #2E7D32)
4. **Use orange instead of red** for negative (#E65100 replaces #C62828) — more distinguishable from blue

### Screen Display

Finance boards are often displayed on wall screens at 50-70% zoom:

- KPI values must be readable at 50% zoom (minimum 36pt at 100% = 18pt at 50%)
- Status badges must be visible at 50% zoom
- Chart labels should not drop below 8pt effective size

### Print Readiness

Finance boards are sometimes printed for board meetings:

- Ensure sufficient contrast for grayscale printing
- Avoid relying on color alone — all variance indicators should include text labels
- Test the board at 50% scale on a standard letter-size printout

---

## Element Combinations

### The Perfect KPI Row

```
+----------+  +----------+  +----------+  +----------+
| Revenue  |  | COGS     |  | Gross    |  | Net      |
| $38.2M   |  | $14.3M   |  | Margin   |  | Income   |
| ▲ +8.3%  |  | ▲ +12.1% |  | 62.5%    |  | $3.8M    |
| Target:  |  | Target:  |  | Target:  |  | Target:  |
| $37.0M   |  | $13.5M   |  | 64.0%    |  | $4.2M    |
| [GREEN]  |  | [AMBER]  |  | [AMBER]  |  | [RED]    |
+----------+  +----------+  +----------+  +----------+
```

The four cards tell a story left-to-right: Revenue is strong, but COGS grew faster, compressing margins, resulting in below-target net income. The color coding (green → amber → amber → red) makes this narrative visible before reading any text.

### The Perfect Variance Table Row

```
| Department | Budget    | Actual    | Variance  | Status      |
| Engineering| $9,800,000| $10,200,000| -$400,000 | [AT RISK]  |
|            |           |            | -4.1%     |             |
```

- Department: left-aligned, 13pt regular
- Numbers: right-aligned, 12pt regular
- Variance: right-aligned, 12pt bold, red (negative) or green (positive)
- Status: badge with appropriate color

---

## Cross-References

- **14-Data-Analytics**: Dashboard visual patterns (KPI cards, charts, sparklines)
- **03-Strategy-Planning**: Color coding for strategic health indicators
- **13-Sales**: Revenue visualization and pipeline chart patterns
- **15-Startup**: Investor deck visual language for startup finance boards
