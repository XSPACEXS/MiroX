# Data & Analytics Board Layout Patterns

## Introduction

Analytics boards have unique layout demands. They must accommodate charts, tables, KPI cards, annotation layers, and data documentation — all while maintaining a clear narrative flow. This guide presents four layout patterns optimized for different analytics use cases, plus a research synthesis pattern for qualitative data.

---

## Pattern 1: Executive Dashboard Grid

### When to Use

Weekly or monthly metric reviews, C-suite reporting, performance monitoring, stakeholder updates.

### Design Rationale

The dashboard grid is the most familiar analytics layout. Stakeholders understand it intuitively because it mirrors BI tool dashboards. The top-down flow moves from summary (KPIs) through supporting evidence (charts) to documentation (sources). The grid structure allows each panel to be an independent unit while contributing to a coherent whole.

### ASCII Diagram

```
+================================================================+
|                    DASHBOARD HEADER                               |
|  [Title] [Period] [Source] [Refresh] [Owner] [Cadence]           |
|  Height: 280px | Full width | Primary dark color                 |
+================================================================+
| KPI 1    | KPI 2    | KPI 3    | KPI 4    | KPI 5    | KPI 6    |
| Label    | Label    | Label    | Label    | Label    | Label    |
| Value    | Value    | Value    | Value    | Value    | Value    |
| Trend    | Trend    | Trend    | Trend    | Trend    | Trend    |
| Target   | Target   | Target   | Target   | Target   | Target   |
| Height: 280px | Full width row                                   |
+================================================================+
|                    |                    |                          |
|  CHART PANEL 1     |  CHART PANEL 2     |  CHART PANEL 3          |
|  (Trend / Time     |  (Comparison /     |  (Breakdown /            |
|   Series)          |   Table)           |   Composition)           |
|                    |                    |                          |
|  Width: 1900px     |  Width: 1900px     |  Width: 1900px          |
|  Height: 1200px    |  Height: 1200px    |  Height: 1200px         |
+--------------------+--------------------+--------------------------+
|                    |                    |                          |
|  CHART PANEL 4     |  CHART PANEL 5     |  CHART PANEL 6          |
|  (Deep Dive /      |  (Funnel /         |  (Anomaly Log /          |
|   Cohort)          |   Process)         |   Events)                |
|                    |                    |                          |
|  Width: 1900px     |  Width: 1900px     |  Width: 1900px          |
|  Height: 1000px    |  Height: 1000px    |  Height: 1000px         |
+--------------------+--------------------+--------------------------+
|                                                                    |
|  DATA SOURCE DOCUMENTATION                                         |
|  [Sources] [Definitions] [Refresh Schedule] [Limitations]          |
|  Height: 450px | Full width                                        |
+================================================================+
```

### Grid Specifications

| Element             | Width               | Height | Gap                 |
| ------------------- | ------------------- | ------ | ------------------- |
| Header Strip        | Full board width    | 280px  | 0                   |
| KPI Card            | ~960px (1/6 of row) | 240px  | 20px between cards  |
| Chart Panel (Row 1) | 1900px              | 1200px | 30px between panels |
| Chart Panel (Row 2) | 1900px              | 1000px | 30px between panels |
| Documentation Strip | Full board width    | 450px  | 0                   |

### Recommended Board Size

6000 x 3500px

### Eye Flow

1. Header establishes identity and freshness (what data, how current)
2. KPI row delivers the headlines in 3 seconds
3. Chart Row 1 provides primary evidence (trend, comparison, breakdown)
4. Chart Row 2 provides secondary analysis (deep dive, funnel, anomalies)
5. Documentation strip provides traceability (sources, definitions, limitations)

### Chart Panel Allocation Guide

The 3x2 grid has six panels. Here is how to assign them for different dashboard types:

**Product Analytics Dashboard**:
| Position | Panel | Chart Type |
|---|---|---|
| Row 1, Left | MRR Trend | Line chart (12 months) |
| Row 1, Center | Month-over-Month Comparison | Table with RAG indicators |
| Row 1, Right | Revenue by Channel | Horizontal bar chart |
| Row 2, Left | User Retention Cohorts | Cohort grid (color-coded) |
| Row 2, Center | Activation Funnel | Descending-width rectangles |
| Row 2, Right | Anomaly & Events Log | Color-coded event cards |

**Marketing Dashboard**:
| Position | Panel | Chart Type |
|---|---|---|
| Row 1, Left | Campaign Performance Trend | Line chart (multi-series) |
| Row 1, Center | Channel Comparison | Table with spend vs. ROI |
| Row 1, Right | Lead Source Breakdown | Horizontal bar chart |
| Row 2, Left | Content Performance | Ranked list with engagement metrics |
| Row 2, Center | Marketing Qualified Lead Funnel | Funnel representation |
| Row 2, Right | SEO / Organic Trends | Line chart with annotations |

---

## Pattern 2: Research Synthesis Flow

### When to Use

Qualitative research readouts, interview synthesis, usability test reports, survey open-end analysis, ethnographic research presentations.

### Design Rationale

Research synthesis follows a specific cognitive flow: raw data (quotes, observations) → pattern recognition (themes, clusters) → insight generation (what it means) → action (what to do about it). The left-to-right flow mirrors this analytical progression. Each column represents a step in the synthesis process.

### ASCII Diagram

```
+================================================================+
|                   RESEARCH CONTEXT HEADER                        |
| [Study] [Method] [Participants] [Timeline] [Team] [Confidence] |
| Height: 300px | Full width | Primary color                      |
+================================================================+
|                    |                    |                         |
|  RAW QUOTES &      |  THEME CLUSTERS    |  INSIGHT CARDS          |
|  OBSERVATIONS      |                    |                         |
|                    |  [Theme A]         |  Insight 1:             |
|  "Quote 1..."     |    • pattern       |  [Summary]              |
|   — P1, role       |    • pattern       |  [Evidence]             |
|                    |    • pattern       |  [Confidence: HIGH]     |
|  "Quote 2..."     |                    |                         |
|   — P2, role       |  [Theme B]         |  Insight 2:             |
|                    |    • pattern       |  [Summary]              |
|  "Quote 3..."     |    • pattern       |  [Evidence]             |
|   — P3, role       |                    |  [Confidence: MEDIUM]   |
|                    |  [Theme C]         |                         |
|  Obs: [detail]     |    • pattern       |  Insight 3:             |
|                    |    • pattern       |  [Summary]              |
|                    |                    |  [Evidence]             |
|  Width: 1800px     |  Width: 1800px     |  Width: 1600px         |
|  Height: 2000px    |  Height: 2000px    |  Height: 2000px        |
+--------------------+--------------------+-------------------------+
|                                          |                        |
|  RECOMMENDATIONS & ACTIONS               |  METHODOLOGY &          |
|                                          |  LIMITATIONS            |
|  Rec 1: [action] — Owner, Priority      |                         |
|  Rec 2: [action] — Owner, Priority      |  Research questions     |
|  Rec 3: [action] — Owner, Priority      |  Participant criteria   |
|  Rec 4: [action] — Owner, Priority      |  Sampling method        |
|                                          |  Analysis approach      |
|  Width: 3600px                           |  Known biases           |
|  Height: 700px                           |  Width: 2200px          |
|                                          |  Height: 700px          |
+------------------------------------------+------------------------+
```

### Grid Specifications

| Element               | Width            | Height | Gap  |
| --------------------- | ---------------- | ------ | ---- |
| Context Header        | Full board width | 300px  | 0    |
| Quotes Column         | 1800px           | 2000px | 30px |
| Themes Column         | 1800px           | 2000px | 30px |
| Insights Column       | 1600px           | 2000px | 30px |
| Recommendations Panel | 3600px           | 700px  | 30px |
| Methodology Panel     | 2200px           | 700px  | 30px |
| Quote Card            | 350x120px        | -      | 15px |
| Theme Cluster         | 400x300px        | -      | 20px |
| Insight Card          | 400x200px        | -      | 20px |

### Recommended Board Size

5800 x 3400px

### Eye Flow

1. Header establishes research context (what study, who participated)
2. Eye scans left: raw quotes create empathy and grounding in real user words
3. Eye moves center: themes reveal patterns across individual quotes
4. Eye moves right: insights synthesize themes into actionable understanding
5. Bottom row translates insights into recommendations and documents methodology

### Connective Tissue

Draw dashed connectors from individual quotes to the theme clusters they belong to. Draw solid connectors from themes to the insights they support. This traceability chain (quote → theme → insight → recommendation) is the backbone of credible research synthesis.

---

## Pattern 3: KPI Tracker Scoreboard

### When to Use

Weekly/monthly performance tracking, OKR reviews, team health scorecards, SLA monitoring, operational dashboards.

### Design Rationale

KPI trackers need to communicate status at a glance. The scoreboard pattern arranges metrics in a compact, uniform grid where RAG status indicators create an instant visual map of what is on track and what needs attention. Unlike the Executive Dashboard (which tells a story with charts), the KPI Tracker is a status board — it answers "what needs attention right now?"

### ASCII Diagram

```
+================================================================+
|                    SCOREBOARD HEADER                              |
|  [Team/Department] [Period] [Owner] [Overall Health: 7/10]       |
|  Height: 250px | Full width | Primary color                      |
+================================================================+
|                                                                   |
|  KPI ROW 1: Revenue Metrics                                      |
|  +----------+----------+----------+----------+----------+         |
|  | MRR      | NRR      | Churn    | ARPU     | LTV      |         |
|  | $2.47M   | 112%     | 2.1%    | $72.20   | $866     |         |
|  | ● GREEN  | ● GREEN  | ● RED   | ● YELLOW | ● GREEN  |         |
|  | +8.3%    | +2pp     | +0.3pp  | -1.4%    | +5.2%    |         |
|  +----------+----------+----------+----------+----------+         |
|                                                                   |
|  KPI ROW 2: Growth Metrics                                       |
|  +----------+----------+----------+----------+----------+         |
|  | MAU      | Signups  | Act.Rate | Conv.%   | Referral |         |
|  | 34,200   | 1,780    | 62%     | 19%      | 8.2%     |         |
|  | ● GREEN  | ● GREEN  | ● YELLOW| ● YELLOW | ● GREEN  |         |
|  | +12.1%   | +9.8%    | -2pp    | -1pp     | +1.1pp   |         |
|  +----------+----------+----------+----------+----------+         |
|                                                                   |
|  KPI ROW 3: Quality Metrics                                      |
|  +----------+----------+----------+----------+----------+         |
|  | NPS      | CSAT     | Tickets  | MTTR     | Uptime   |         |
|  | 47       | 4.1/5    | 411     | 4.2hrs   | 99.97%   |         |
|  | ● YELLOW | ● YELLOW | ● RED   | ● GREEN  | ● GREEN  |         |
|  | +3 pts   | -0.2     | +20.2%  | -12%     | +0.02pp  |         |
|  +----------+----------+----------+----------+----------+         |
|                                                                   |
|  Height: ~1600px total for 3 rows                                |
+================================================================+
|                                                                   |
|  CORRECTIVE ACTIONS                                               |
|                                                                   |
|  RED: Churn 2.1% — Investigate Feb pricing change impact          |
|       Owner: Product | Due: March 15 | Status: In Progress        |
|  RED: Tickets 411 — Surge correlates with new feature bugs        |
|       Owner: Engineering | Due: March 10 | Status: In Progress     |
|  YELLOW: ARPU $72.20 — Enterprise downtier after renewal          |
|       Owner: CS | Due: March 20 | Status: Not Started              |
|                                                                   |
|  Height: 500px | Full width                                       |
+================================================================+
```

### Grid Specifications

| Element                  | Width                | Height | Gap                |
| ------------------------ | -------------------- | ------ | ------------------ |
| Scoreboard Header        | Full board width     | 250px  | 0                  |
| KPI Category Row         | Full board width     | 200px  | 30px between rows  |
| Individual KPI Cell      | ~1100px (1/5 of row) | 180px  | 15px between cells |
| RAG Indicator            | 16px diameter circle | -      | inline             |
| Corrective Actions Strip | Full board width     | 500px  | 0                  |
| Action Item Card         | Full width           | 80px   | 10px between cards |

### Recommended Board Size

5800 x 2800px

### Eye Flow

1. Header shows overall health score and context
2. Eye scans KPI rows — RAG indicators create an instant heat map (green = skip, red/yellow = focus)
3. Red indicators pull attention first (pre-attentive processing)
4. Corrective actions section translates red/yellow indicators into specific plans

---

## Pattern 4: Survey Analysis Dashboard

### When to Use

NPS/CSAT results, employee engagement surveys, market research results, customer feedback analysis, post-event surveys.

### Design Rationale

Survey analysis requires presenting both quantitative (scaled responses, demographics) and qualitative (open-ended responses) data together. The layout separates these two data types while connecting them through thematic analysis.

### ASCII Diagram

```
+================================================================+
|                    SURVEY OVERVIEW HEADER                         |
| [Survey Name] [Period] [N=XXX] [Response Rate: XX%] [Owner]     |
| Height: 280px | Full width | Primary color                       |
+================================================================+
|                          |                                        |
|  HEADLINE METRICS        |  RESPONSE SUMMARY                      |
|  (NPS / CSAT / Score)   |  (Demographics, response rate by       |
|                          |   segment, completion funnel)           |
|  [Large score display]   |                                        |
|  [Trend over time]       |  [Bar chart of responses by segment]  |
|  [Benchmark comparison]  |  [Completion rate waterfall]           |
|                          |                                        |
|  Width: 2200px           |  Width: 3400px                         |
|  Height: 900px           |  Height: 900px                         |
+--------------------------+----------------------------------------+
|                          |                          |             |
|  QUESTION-BY-QUESTION    |  CROSS-TABULATIONS       | TREND       |
|  BREAKDOWN               |                          | ANALYSIS    |
|                          |  Response by:             |             |
|  Q1: [dist bar] 4.2     |  - Department             | [Sparklines |
|  Q2: [dist bar] 3.8     |  - Tenure                 |  for key    |
|  Q3: [dist bar] 4.5     |  - Role level             |  metrics    |
|  Q4: [dist bar] 3.1     |  - Location               |  over       |
|  Q5: [dist bar] 4.0     |                           |  time]      |
|                          |  [Heat map grid]          |             |
|  Width: 2000px           |  Width: 2200px            | W: 1400px  |
|  Height: 1000px          |  Height: 1000px           | H: 1000px  |
+--------------------------+--------------------------+-------------+
|                                                                   |
|  OPEN-ENDED RESPONSE THEMES                                       |
|                                                                   |
|  [Theme 1: "XX"]    [Theme 2: "XX"]    [Theme 3: "XX"]           |
|  XX mentions (XX%)   XX mentions (XX%)   XX mentions (XX%)        |
|  "representative     "representative     "representative          |
|   quote..."           quote..."           quote..."               |
|  "quote..."          "quote..."          "quote..."               |
|                                                                   |
|  Height: 800px | Full width                                       |
+================================================================+
|  ACTIONS & FOLLOW-UP                                              |
|  [Action items based on findings] [Owner] [Priority] [Timeline]  |
|  Height: 400px | Full width                                       |
+================================================================+
```

### Grid Specifications

| Element                  | Width            | Height | Gap  |
| ------------------------ | ---------------- | ------ | ---- |
| Survey Header            | Full board width | 280px  | 0    |
| Headline Panel           | 2200px           | 900px  | 30px |
| Response Summary Panel   | 3400px           | 900px  | 30px |
| Question Breakdown Panel | 2000px           | 1000px | 30px |
| Cross-Tabulation Panel   | 2200px           | 1000px | 30px |
| Trend Panel              | 1400px           | 1000px | 30px |
| Open-Ended Themes Strip  | Full board width | 800px  | 0    |
| Actions Strip            | Full board width | 400px  | 0    |

### Recommended Board Size

5800 x 3800px

---

## Pattern 5: Data Investigation Board

### When to Use

Root cause analysis, ad-hoc metric investigation, incident post-mortems, "why did X change?" explorations.

### Design Rationale

Unlike dashboards (which monitor ongoing metrics), investigation boards explore a specific question. The layout follows the scientific method: question → hypothesis → evidence → conclusion → action.

### ASCII Diagram

```
+================================================================+
|                    INVESTIGATION HEADER                           |
| "Why did [metric] [change] in [period]?"                        |
| [Investigator] [Start Date] [Status: In Progress / Concluded]   |
| Height: 250px | Full width | Primary color                      |
+================================================================+
|                                                                   |
|  THE SIGNAL                           |  TIMELINE OF EVENTS       |
|  [Chart showing the metric change]    |  [Chronological list of   |
|  [Before vs. After comparison]        |   events that may have    |
|  [Magnitude and impact statement]     |   contributed]            |
|                                       |                           |
|  Width: 2800px                        |  Width: 2800px            |
|  Height: 1000px                       |  Height: 1000px           |
+---------------------------------------+---------------------------+
|                                                                   |
|  HYPOTHESES                                                       |
|  +-------------------+-------------------+-------------------+    |
|  | H1: [hypothesis]  | H2: [hypothesis]  | H3: [hypothesis]  |    |
|  | Status: CONFIRMED | Status: RULED OUT | Status: TESTING   |    |
|  | Evidence: [data]  | Evidence: [data]  | Evidence: [data]  |    |
|  +-------------------+-------------------+-------------------+    |
|  Height: 600px | Full width                                       |
+================================================================+
|                                                                   |
|  SUPPORTING EVIDENCE                                              |
|  [Segment breakdowns] [Cohort comparisons] [Correlated metrics]  |
|  Height: 1000px | Full width                                      |
+================================================================+
|  CONCLUSION & ACTIONS                                             |
|  [Root cause statement] [Impact quantification] [Action items]   |
|  Height: 400px | Full width                                       |
+================================================================+
```

### Grid Specifications

| Element              | Width                   | Height | Gap  |
| -------------------- | ----------------------- | ------ | ---- |
| Investigation Header | Full board width        | 250px  | 0    |
| Signal Panel         | 2800px                  | 1000px | 40px |
| Timeline Panel       | 2800px                  | 1000px | 40px |
| Hypothesis Cards     | ~1800px each (3 across) | 500px  | 30px |
| Evidence Strip       | Full board width        | 1000px | 0    |
| Conclusion Strip     | Full board width        | 400px  | 0    |

### Recommended Board Size

5800 x 3700px

---

## Universal Layout Rules for Analytics Boards

### Chart Panel Standards

Every chart panel on an analytics board must contain:

1. **Title**: What metric, what dimension, what time period (font size 18, bold)
2. **Chart area**: The actual data visualization (takes 60-70% of panel height)
3. **Annotation**: Key insight or takeaway from this chart (1-2 sentences, font size 12)
4. **Source note**: Data source and last refresh (font size 10, gray)

### KPI Card Standards

Every KPI card must contain:

1. **Label**: What the metric is (font size 11, gray)
2. **Value**: The current number (font size 28-36, bold)
3. **Change indicator**: Direction and magnitude vs. last period (font size 13, colored)
4. **Target**: What we are aiming for (font size 10, gray)
5. **RAG indicator**: Visual status (16px circle, colored)

### Data Documentation Standards

Every analytics board must include a documentation section with:

1. **Data sources**: Name, type, refresh schedule, owner for each source
2. **Metric definitions**: Precise definition of every metric shown
3. **Known limitations**: Data quality issues, gaps, biases, or caveats
4. **Date ranges**: Explicit statement of what time period is covered
5. **Methodology notes**: How derived metrics are calculated

### Spacing Rules

| Relationship                       | Spacing |
| ---------------------------------- | ------- |
| Between zones                      | 0px     |
| Between chart panels               | 30-40px |
| Between KPI cards                  | 20px    |
| Panel internal padding             | 30px    |
| Between chart and annotation       | 15px    |
| Between annotation and source note | 10px    |

### Color Assignment for Data

| Data Type                   | Color Strategy                                                       |
| --------------------------- | -------------------------------------------------------------------- |
| Time series (single metric) | Single color, varying intensity                                      |
| Comparison (multi-metric)   | Distinct colors, 3-5 max                                             |
| Status (RAG)                | Green (#2E7D32), Yellow (#F9A825), Red (#C62828)                     |
| Positive change             | Green (#2E7D32)                                                      |
| Negative change             | Red (#D32F2F) for bad, Green for good (e.g., churn decrease = green) |
| Neutral/informational       | Blue (#1976D2) or Gray (#78909C)                                     |
| Highlighted                 | Accent color (bright blue or orange)                                 |
| De-emphasized               | Light gray (#BDBDBD)                                                 |
