# Data & Analytics Board Content Guide

## Introduction

The content on an analytics board is not data — it is the interpretation, context, and action layer that transforms raw numbers into organizational intelligence. This guide covers what content belongs on each type of analytics board, how to write effective annotations, how to structure metric displays, and how to present both quantitative and qualitative data with precision and clarity.

---

## Essential Content by Board Type

### Executive Dashboard Content

1. **Header Context**
   - Dashboard title (what this dashboard covers)
   - Reporting period (explicit date range)
   - Data sources (list all systems feeding the dashboard)
   - Last refresh date and time
   - Owner (person responsible for accuracy)
   - Review cadence ("Weekly executive review, Tuesdays 10 AM")

2. **KPI Cards (6-8 maximum)**
   Each KPI card must include:
   - Metric name (label)
   - Current value
   - Change vs. last period (MoM, WoW, or QoQ)
   - Direction indicator (arrow + color)
   - Sparkline showing trend shape
   - Target or benchmark
   - RAG status indicator

   Example set for a SaaS product dashboard:
   - Monthly Recurring Revenue: $2.47M (+8.3% MoM, target $2.6M)
   - Active Users (MAU): 34,200 (+12.1% MoM, target 35,000)
   - Net Revenue Retention: 112% (+2pp MoM, target 110%)
   - Customer Churn Rate: 2.1% (+0.3pp MoM, target <1.8%)
   - Average Revenue Per User: $72.20 (-1.4% MoM, target $75)
   - NPS Score: 47 (+3 pts MoM, target 50)

3. **Chart Panels**
   - Trend Chart: Primary metric over time (12-month trailing minimum)
   - Comparison Table: Month-over-month comparison of 8-12 key metrics with RAG status
   - Breakdown Chart: Primary metric segmented by dimension (channel, segment, geography)
   - Cohort Analysis: Retention or behavior by acquisition cohort
   - Funnel: Conversion funnel from acquisition through value moment
   - Anomaly Log: Notable data events with dates and impact descriptions

4. **Data Documentation**
   - Source cards: One card per data source (name, type, metrics provided, refresh schedule, owner)
   - Metric definitions: Precise definition of every metric on the board
   - Known limitations: Data quality issues, gaps, caveats
   - Methodology notes: How derived metrics are calculated

### Research Synthesis Content

1. **Research Context Header**
   - Study name and research question
   - Methodology: Interviews / Usability tests / Diary study / Survey / Ethnography
   - Participant count and criteria
   - Research timeline (when conducted)
   - Research team
   - Confidence level: How confident are we in these findings?

2. **Raw Data Column**
   Direct quotes and observations from research sessions:
   - Verbatim quotes with attribution: "I spend 3-5 days waiting for a simple data query" — P4, Marketing Manager
   - Behavioral observations: "4 of 6 participants abandoned the data source connection wizard at step 3"
   - Include participant demographics for context: role, tenure, technical proficiency

3. **Theme Clusters**
   Patterns identified across multiple participants:
   - Theme name (2-4 words)
   - Theme description (1-2 sentences)
   - Supporting evidence count ("mentioned by 8 of 12 participants")
   - Strength assessment (Strong / Moderate / Emerging)
   - Color-coded for visual grouping

4. **Insight Cards**
   Synthesized understanding that goes beyond what any single data point shows:
   - Insight statement (1-2 sentences)
   - Supporting evidence summary (which themes and quotes support this)
   - Confidence level (High / Medium / Low)
   - Implication for product/business (what this means)

5. **Recommendations**
   Actions based on insights:
   - Recommendation statement
   - Priority (High / Medium / Low)
   - Owner (person or team)
   - Effort estimate (Small / Medium / Large)
   - Supporting insight reference

6. **Methodology & Limitations**
   - Research questions
   - Sampling approach and potential biases
   - Analysis method (affinity mapping, thematic analysis, etc.)
   - What we did NOT study (explicit scope boundaries)
   - Recommended follow-up research

### KPI Tracker Content

1. **Scoreboard Metrics** (organized by category)
   Revenue: MRR, NRR, Churn, ARPU, LTV, CAC, LTV:CAC
   Growth: MAU, Signups, Activation Rate, Conversion %, Referral Rate
   Quality: NPS, CSAT, Support Tickets, MTTR, Uptime
   Engineering: Deploy Frequency, Change Failure Rate, Cycle Time
   People: Headcount, Attrition, eNPS, Time to Hire

2. **For each metric, display**:
   - Current value
   - Target or threshold
   - RAG status
   - Change vs. last period
   - Trend direction
   - Accountable owner

3. **Corrective Action Cards**
   For every RED or YELLOW metric:
   - Metric name and current status
   - Root cause hypothesis
   - Corrective action plan
   - Owner
   - Due date
   - Current status of the action

### Survey Analysis Content

1. **Survey Summary**
   - Survey name and purpose
   - Distribution date and close date
   - Total sent, total completed, response rate
   - Demographic breakdown of respondents
   - Confidence interval based on sample size

2. **Headline Score**
   - Primary metric in large format (NPS, CSAT, engagement score)
   - Historical trend (quarterly or annual)
   - Benchmark comparison (industry, company average, previous survey)
   - Promoter/Passive/Detractor breakdown (for NPS)

3. **Question-Level Results**
   For each question:
   - Question text
   - Response distribution (bar chart or likert scale)
   - Mean score
   - Comparison to previous survey
   - Significance flag (is the change statistically significant?)

4. **Cross-Tabulation Results**
   Break down key metrics by:
   - Department / team
   - Tenure band (0-1yr, 1-3yr, 3-5yr, 5+yr)
   - Role level (IC, Manager, Director, VP+)
   - Location / office
   - Highlight segments with statistically significant differences

5. **Open-Ended Theme Analysis**
   For each identified theme:
   - Theme name
   - Mention count and percentage of respondents
   - Sentiment (Positive / Negative / Mixed)
   - 2-3 representative quotes
   - Connection to quantitative results

---

## Real Content Examples

### Example: KPI Card Content

```
KPI: Customer Churn Rate

Value: 2.1%
Change: +0.3pp MoM ▲ (BAD)
Trend: [sparkline showing uptick in Feb]
Target: <1.8%
Status: OFF TRACK (RED)

Annotation: "Churn spiked from 1.8% to 2.1% in February.
87% of churned users were on the Starter plan, correlating
with the Feb 1 pricing change ($29→$39/mo). Investigating
with retention team. A/B test of grandfather pricing
launching March 10."
```

### Example: Chart Annotation

```
Chart: Monthly Recurring Revenue — Trailing 12 Months

Annotation: "MRR grew from $1.52M (Mar 2025) to $2.47M
(Feb 2026), representing 62.5% year-over-year growth. Growth
accelerated in Q4 due to the annual plan migration campaign
in November (+14% MoM uplift). Current trajectory puts us
on track for $3.0M MRR by June 2026, assuming 5-8% monthly
growth. Key risk: the February churn spike, if sustained,
could reduce projected growth by 2-3pp per month."

Source: Stripe billing data, refreshed daily at 06:00 UTC.
Owner: Data Team — Priya Sharma.
```

### Example: Anomaly Log Entry

```
Date: February 1, 2026
Event: Pricing Change
Severity: HIGH (Red dot)

Description: "Increased Starter plan price from $29 to $39/mo.
Impact observed: 36.8% churn spike in February. 87% of churned
users were on the Starter plan. 52 customers churned (up from
38 in January). Estimated MRR impact: -$48K."

Affected Metrics:
- Churn Rate (2.1% vs. 1.8% prev month)
- Customer Count (net -14 vs. +52 prev month)
- ARPU ($72.20 vs. $73.20 prev month)
- NPS (47 vs. 44 prev month — lagging indicator expected)

Status: Under investigation. Retention team running
outreach to churned customers for exit interviews.
```

### Example: Research Insight Card

```
INSIGHT: Non-technical users value speed of answer over
precision of query.

Confidence: HIGH

Evidence:
- 10 of 12 interview participants prioritized "get an
  approximate answer quickly" over "get the exact answer
  after learning SQL"
- Theme: "Good enough data now beats perfect data later"
  (mentioned by 83% of participants)
- Behavioral observation: Users who received an approximate
  answer within 30 seconds asked 3x more follow-up queries
  than users who waited 2+ minutes for a precise answer

Implication: Our product should optimize for response speed
even at the cost of some precision. Offer a "quick estimate"
mode alongside a "precise query" mode.

Connected Recommendation: R2 — Implement approximate query
mode with <5 second response time.
```

### Example: Survey Open-End Theme

```
THEME: "Communication gaps between leadership and ICs"
Mentions: 47 of 156 respondents (30.1%)
Sentiment: NEGATIVE

Representative quotes:
- "I learn about company strategy changes from LinkedIn
  posts, not from my manager." — IC, Engineering, 2yr tenure
- "There is a significant gap between what leadership says
  in all-hands and what actually happens on the ground."
  — Manager, Customer Success, 4yr tenure
- "I would rate communication higher if I understood WHY
  decisions are made, not just WHAT was decided."
  — IC, Product, 1yr tenure

Connection to quantitative: This theme correlates with the
low score on Q7 ("I feel well-informed about company
direction" — 3.1/5, lowest scored question). Particularly
acute for Engineering ICs (2.7/5 vs. company average 3.1/5).
```

---

## Writing Annotations and Insights

### The Three-Sentence Annotation Formula

Every chart annotation should follow this structure:

**Sentence 1 — The What**: State the key finding in plain language with a number.
"MRR grew 62.5% year-over-year, from $1.52M to $2.47M."

**Sentence 2 — The Why**: Explain what caused the trend or what it means.
"Growth accelerated in Q4 due to the annual plan migration campaign."

**Sentence 3 — The So What**: State the implication or next step.
"Current trajectory projects $3.0M MRR by June if monthly growth sustains 5-8%."

### Confidence Language

| Confidence Level | Language to Use                                   | When to Use                                         |
| ---------------- | ------------------------------------------------- | --------------------------------------------------- |
| High             | "This shows..." "The data confirms..."            | Large sample, consistent across segments, validated |
| Medium           | "This suggests..." "The data indicates..."        | Moderate sample, most segments agree                |
| Low              | "This may suggest..." "Initial data hints..."     | Small sample, mixed signals, early data             |
| Speculative      | "We hypothesize..." "One possible explanation..." | No direct data, logical inference                   |

### Precision vs. Readability

| Context             | Precision Level               | Example    |
| ------------------- | ----------------------------- | ---------- |
| KPI card value      | Abbreviated                   | $2.47M     |
| Chart annotation    | Rounded                       | $2.5M      |
| Detailed table      | Full with thousands separator | $2,473,000 |
| Percentage in KPI   | One decimal                   | 2.1%       |
| Percentage in text  | Rounded to whole              | ~2%        |
| Sample size         | Exact                         | N=1,240    |
| Confidence interval | One decimal                   | +-2.3pp    |

---

## Data Visualization Content Rules

### Rule 1: Every Chart Answers One Question

A trend chart answers "how has X changed over time?" A bar chart answers "how does X compare across categories?" A funnel answers "where do users drop off?" If a chart tries to answer two questions, split it into two charts.

### Rule 2: Label the Insight, Not the Axis

Axis labels are necessary but insufficient. The most important label on any chart is the annotation that tells the viewer what to take away. "Revenue is growing at an accelerating rate" is more useful than "Revenue ($M)" as a y-axis label.

### Rule 3: Show Context, Not Just Current State

A bar showing "Churn: 2.1%" is meaningless alone. Add: the target (<1.8%), the previous month (1.8%), the trend direction (up), and the benchmark (industry: 2.5%). Now the viewer knows: we are above target, we worsened, but we are still below industry average.

### Rule 4: Use Table for Exact Values, Charts for Patterns

If the viewer needs to look up a specific number, use a table. If they need to see a pattern (trend, comparison, distribution), use a chart. Never put a chart where a table serves better (small datasets with <5 items are often better as tables).

### Rule 5: Document Everything

The fastest way to lose stakeholder trust in a dashboard is to be unable to answer "where does this number come from?" Document every data source, every metric definition, every known limitation.

---

## Content Freshness Standards

| Board Type          | Recommended Refresh | Staleness Threshold | Action When Stale      |
| ------------------- | ------------------- | ------------------- | ---------------------- |
| Executive Dashboard | Weekly              | 14 days             | Display warning banner |
| KPI Tracker         | Weekly              | 10 days             | Display warning banner |
| Research Synthesis  | Per study (static)  | N/A                 | Date the study         |
| Survey Analysis     | Per survey (static) | N/A                 | Date the survey        |
| Investigation Board | As findings emerge  | 30 days             | Mark as "Concluded"    |

### Stale Data Warning Design

When data exceeds its staleness threshold, add a prominent banner:

- Background: #FFF3E0 (light orange)
- Border: 2px solid #EF6C00
- Text: "WARNING: Data on this board was last refreshed [X] days ago and may not reflect current state. Contact [Owner] for updated data."
- Position: Immediately below the header, full width

---

## Domain-Specific Vocabulary

| Term      | Definition                                                                              |
| --------- | --------------------------------------------------------------------------------------- |
| MAU       | Monthly Active Users — unique users with at least 1 session in trailing 30 days         |
| DAU       | Daily Active Users — unique users with at least 1 session in a single day               |
| MRR       | Monthly Recurring Revenue — sum of all active subscription amounts                      |
| NRR       | Net Revenue Retention — (Starting MRR + Expansion - Contraction - Churn) / Starting MRR |
| ARPU      | Average Revenue Per User — MRR / active paying customers                                |
| LTV       | Lifetime Value — average revenue from a customer over their entire relationship         |
| CAC       | Customer Acquisition Cost — total sales and marketing spend / new customers acquired    |
| NPS       | Net Promoter Score — % Promoters minus % Detractors (range: -100 to +100)               |
| CSAT      | Customer Satisfaction Score — typically rated 1-5 or 1-10                               |
| Cohort    | A group of users who share a common characteristic (e.g., signup month)                 |
| Funnel    | A sequence of steps users take, with drop-off measured at each step                     |
| Churn     | Customer or revenue lost in a period                                                    |
| Retention | The inverse of churn — customers or revenue kept                                        |
| RAG       | Red-Amber-Green status indicator                                                        |
| MoM       | Month-over-Month change                                                                 |
| YoY       | Year-over-Year change                                                                   |
| pp        | Percentage points (used for changes in percentages: "up 2pp" = from 10% to 12%)         |
| CI        | Confidence Interval — statistical range around an estimate                              |
