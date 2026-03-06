# Data & Analytics Board Variations

## Introduction

Analytics boards must adapt to wildly different contexts: a startup tracking 5 metrics is different from an enterprise monitoring 500. A product analytics dashboard is different from a financial reporting board. An NPS survey is different from a 100-question employee engagement survey. This guide covers specific adaptations for different industries, team types, data maturity levels, and use cases.

---

## Industry Variations

### SaaS / Software Product Analytics

**Focus Metrics**: MRR, MAU, DAU/MAU ratio, activation rate, retention cohorts, feature adoption, NPS
**Special Considerations**:

- Include product usage data alongside revenue data
- Track free-to-paid conversion funnel
- Show feature adoption by cohort (which features do long-tenured users use that new users do not?)
- Include experiment results (A/B test outcomes)
- Link product metrics to revenue impact

### E-Commerce / Retail Analytics

**Focus Metrics**: GMV, AOV, cart abandonment rate, conversion rate, CAC by channel, ROAS, LTV
**Special Considerations**:

- Seasonal patterns are critical — always show year-over-year comparisons
- Track cart abandonment funnel separately from main conversion funnel
- Include channel-level ROAS (return on ad spend) — not just aggregate
- Show product category performance (which categories drive growth?)
- Include inventory/supply chain metrics alongside demand metrics

### Healthcare Analytics

**Focus Metrics**: Patient outcomes, readmission rates, wait times, satisfaction scores, compliance rates
**Special Considerations**:

- Strict attention to patient privacy — no PII on boards shared with broad audiences
- Include confidence intervals on all clinical metrics (small sample sizes are common)
- Benchmark against CMS quality measures
- Include regulatory compliance status alongside operational metrics
- Use careful language for health outcomes (avoid causal claims without clinical evidence)

### Financial Services Analytics

**Focus Metrics**: AUM, revenue per advisor, client acquisition cost, client retention, portfolio performance
**Special Considerations**:

- Include risk-adjusted performance metrics (Sharpe ratio, alpha)
- Regulatory compliance dashboard elements
- Show performance relative to benchmarks (S&P 500, bond indices)
- Include client segmentation by AUM tier
- Time-sensitive data — refresh daily or intra-day for trading-related metrics

### Media / Content Analytics

**Focus Metrics**: Subscribers, engagement (time spent, pages/session), content performance, ad revenue, churn
**Special Considerations**:

- Track content-level performance (which articles/videos drive engagement?)
- Show subscriber growth vs. content production volume
- Include ad performance separately from subscription metrics
- Track audience demographics and segment engagement accordingly
- Show trending content with recency weighting

---

## Team Type Variations

### Data Team Internal Dashboard

**Purpose**: Monitor data infrastructure health and data quality
**Key Adaptations**:

- Include data pipeline status (success/failure/latency by pipeline)
- Track data freshness across all tables (when was each table last updated?)
- Monitor query performance (slow queries, resource utilization)
- Show data quality scores (null rates, schema drift, validation failures)
- Track data team velocity (tickets closed, SLA compliance)

### Executive Dashboard

**Purpose**: High-level business health for C-suite consumption
**Key Adaptations**:

- Maximum 6-8 KPIs (absolute maximum)
- Larger font sizes for KPI values (36px minimum)
- Simplified chart types (no cohort grids, no scatter plots)
- Annotations written for non-technical audience
- Presentation mode optimized (each frame fills the screen)
- Include a 1-2 sentence "Executive Summary" at the top

### Product Team Dashboard

**Purpose**: Track feature adoption, experiment results, user behavior
**Key Adaptations**:

- Include feature flags and experiment status
- Show adoption curves for recent feature launches
- Track user flows and drop-off points
- Include qualitative feedback alongside quantitative metrics
- Show metrics segmented by user persona or plan tier

### Marketing Team Dashboard

**Purpose**: Campaign performance, channel ROI, funnel health
**Key Adaptations**:

- Track spend alongside performance (efficiency, not just volume)
- Include attribution modeling (first touch, last touch, multi-touch)
- Show content performance ranked by engagement
- Include SEO metrics (rankings, organic traffic, domain authority)
- Track marketing-to-sales handoff metrics (MQL to SQL conversion)

### Customer Success Dashboard

**Purpose**: Account health, renewal risk, expansion opportunities
**Key Adaptations**:

- Include health score breakdown per account
- Show renewal calendar with risk indicators
- Track product adoption per account
- Include NPS/CSAT at the account level
- Show expansion pipeline and cross-sell progress

---

## Data Maturity Variations

### Early Stage (No Data Infrastructure)

For teams with spreadsheets, manual tracking, and basic analytics:

**Adaptations**:

- Simple KPI tracker with 5-8 manually updated metrics
- Data entered directly into Miro (no API integration)
- Focus on trends, not absolute precision
- Include "Data Source: Manual calculation from [spreadsheet]" documentation
- Refresh cadence: Weekly or bi-weekly (manual process)
- Board size: 3000x2000px (compact)

**Priority Metrics** (pick 5):
MRR, Customer Count, Churn, Burn Rate, Runway

### Growing Stage (Basic BI Tools)

For teams with Mixpanel/Amplitude, basic dashboards, growing data function:

**Adaptations**:

- Standard executive dashboard with 6 KPIs and 4-6 chart panels
- Data pulled from BI tools and manually entered into Miro
- Include comparison to targets and last period
- Add anomaly logging
- Refresh cadence: Weekly
- Board size: 5000x3000px (standard)

### Mature Stage (Data Warehouse + BI Stack)

For teams with Snowflake/BigQuery, Looker/Tableau, data engineering team:

**Adaptations**:

- Full dashboard grid with 6-8 KPIs and 6 chart panels
- Consider API automation for metric updates
- Include cross-source synthesis (combining product, revenue, support data)
- Add cohort analysis and funnel metrics
- Include data source documentation with refresh schedules
- Refresh cadence: Weekly (automated) or daily for critical metrics
- Board size: 6000x3500px (full dashboard)

### Advanced Stage (Real-Time + ML)

For teams with real-time data pipelines, ML models, predictive analytics:

**Adaptations**:

- Include predictive metrics (churn prediction scores, revenue forecasts)
- Show model confidence intervals alongside predictions
- Include anomaly detection alerts (automated, not just logged)
- Track model performance metrics (accuracy, precision, recall)
- Consider real-time or near-real-time data refresh via API
- Board size: 6000x4000px+ (extended with model monitoring)

---

## Complexity Variations

### Simple Scorecard (5-10 metrics)

For small teams or focused monitoring:

- Single-row or double-row KPI cards
- No chart panels (just KPIs and corrective actions)
- RAG status drives all attention allocation
- Board size: 3000x1500px
- Refresh time: 20 minutes

### Standard Dashboard (10-20 metrics, 4-6 charts)

For most organizations and use cases:

- KPI row + 2 rows of chart panels
- Documentation section
- Board size: 6000x3500px
- Refresh time: 1-2 hours

### Comprehensive Analytics Center (20-30 metrics, 8-10 charts)

For data-mature organizations with dedicated analytics teams:

- KPI row + 3 rows of chart panels
- Extended documentation
- Links to deeper-dive boards for each metric area
- Board size: 6000x5000px
- Refresh time: 2-3 hours

### Investigation / Deep Dive (Unlimited)

For ad-hoc analysis of specific questions:

- No fixed metric count — driven by the investigation
- Hypothesis-evidence-conclusion structure
- May spawn sub-boards for specific evidence threads
- Board size: 5800x3700px (standard investigation layout)
- One-time creation, not recurring refresh

---

## Use Case Variations

### Board-of-Directors Reporting

**Special requirements**:

- Absolute maximum 6 KPIs
- Large font sizes (36-42px for values)
- Polished visual design (presentation-quality)
- Narrative annotations that a non-operator can understand
- Include strategic context (market trends, competitive landscape)
- No jargon in metric names ("Monthly Recurring Revenue" not "MRR")
- Presentation mode mandatory (each frame fills screen)

### Incident Post-Mortem

**Special requirements**:

- Timeline-centric layout (event timeline is the backbone)
- Impact quantification (users affected, revenue impact, duration)
- Root cause analysis with contributing factors
- Clear distinction between root cause and contributing factors
- Action items with prevention focus (not just remediation)
- Include "detection time" and "resolution time" metrics

### A/B Test Results

**Special requirements**:

- Side-by-side comparison layout (Control vs. Variant)
- Statistical significance indicators (p-value, confidence interval)
- Effect size with practical significance assessment
- Segment-level results (does the effect hold across all segments?)
- Decision recommendation with confidence level
- Impact projection if rolled out to 100% of users

### Competitive Intelligence Dashboard

**Special requirements**:

- Comparison grid: Us vs. Competitor A vs. Competitor B
- Pricing comparison table
- Feature comparison matrix
- Market share estimates with sources cited
- Traffic/usage estimates from third-party tools (SimilarWeb, Sensor Tower)
- Strategic implications (opportunities and threats)

---

## Refresh Cadence Variations

| Board Type                 | Recommended Cadence     | Refresh Method         | Time Required |
| -------------------------- | ----------------------- | ---------------------- | ------------- |
| Real-time operations       | Hourly or real-time     | API automation         | Automated     |
| Weekly executive dashboard | Weekly (Monday morning) | Semi-automated         | 1-2 hours     |
| Monthly business review    | Monthly (first week)    | Manual with data pull  | 3-4 hours     |
| Quarterly board report     | Quarterly               | Manual, fully polished | 8-10 hours    |
| One-time investigation     | Once (then archived)    | Manual                 | 4-8 hours     |
| Research synthesis         | Per study (static)      | Manual                 | 3-5 hours     |
| Survey analysis            | Per survey (static)     | Manual                 | 4-6 hours     |

---

## Variation Selection Matrix

| Factor                 | Recommendation                                                |
| ---------------------- | ------------------------------------------------------------- |
| Non-technical audience | Simplified charts, text annotations, no cohorts/scatter plots |
| Technical audience     | Full chart library, include methodology notes                 |
| Board of Directors     | Max 6 KPIs, large fonts, polished, narrative annotations      |
| Weekly review          | Standard dashboard, KPI cards + charts, anomaly log           |
| One-time analysis      | Investigation board, hypothesis-testing framework             |
| Qualitative data       | Research synthesis flow with quote-theme-insight chain        |
| Survey data            | Survey analysis dashboard with cross-tabulation heat map      |
| No data infrastructure | Simple KPI tracker, manually updated, 5-8 metrics             |
| Mature data stack      | Full dashboard with API automation, cross-source synthesis    |
| Real-time needs        | API-automated updates, operational dashboard focus            |
