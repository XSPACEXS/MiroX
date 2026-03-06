# Lean Canvas Board

## Overview

- **Purpose**: Map a complete business model on a single canvas using the Lean Canvas framework — covering Problem, Solution, Key Metrics, Unique Value Proposition, Unfair Advantage, Channels, Customer Segments, Cost Structure, and Revenue Streams — to rapidly validate or invalidate startup hypotheses.
- **Best For**: Early-stage founders validating a business idea, product teams evaluating pivot options, innovation labs within corporations, accelerator cohorts workshopping business models.
- **Complexity**: Medium
- **Board Size**: 5000x3500px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Electric Blue | #1565C0 |
| Secondary  | Slate         | #37474F |
| Accent     | Bright Orange | #EF6C00 |
| Background | Cool White    | #F5F7FA |
| Text       | Dark Ink      | #1A1A2E |

## Board Layout

The board uses the classic Lean Canvas 3x3 grid layout with a header and a validation tracker at the bottom. The nine blocks are arranged following the standard Lean Canvas positioning.

```
+=================================================================+
|                      LEAN CANVAS HEADER                          |
|  [Startup Name] [Version] [Date] [Iteration #] [Author]         |
+=================================================================+
| PROBLEM        | SOLUTION       | UNIQUE VALUE   | UNFAIR       | CUSTOMER       |
|                |                | PROPOSITION    | ADVANTAGE    | SEGMENTS       |
|                |                |                |              |                |
|                |                |                |              |                |
| [3 top         | [Top 3         | [Single clear  | [Can't be    | [Target        |
|  problems]     |  features]     |  message]      |  copied]     |  segments]     |
|                |                |                |              |                |
| EXISTING       | KEY            |                |              | EARLY          |
| ALTERNATIVES   | METRICS        |                |              | ADOPTERS       |
+----------------+----------------+----------------+--------------+----------------+
| COST STRUCTURE                  | REVENUE STREAMS                                |
|                                 |                                                |
| [Fixed + variable costs]        | [Revenue model, pricing, LTV]                  |
+=================================================================+
|               HYPOTHESIS VALIDATION TRACKER                      |
+=================================================================+
```

## Frames & Sections

### Frame 1: Lean Canvas Header

- **Position**: Top, spanning full width
- **Size**: 4800x350px
- **Background**: #1565C0 (Electric Blue)
- **Elements**:
  - Text block: "Lean Canvas — DataBridge" (font size 36, bold, white #FFFFFF)
  - Text block: "AI-powered data integration for non-technical teams" (font size 16, #90CAF9)
  - Info pill 1: "Version 2.3" (font size 11, white on #1976D2 rounded rect)
  - Info pill 2: "March 5, 2026" (font size 11, white on #1976D2 rounded rect)
  - Info pill 3: "Iteration: 4th pivot from original idea" (font size 11, white on #1976D2 rounded rect)
  - Info pill 4: "Author: Alex Torres, Co-founder & CEO" (font size 11, white on #1976D2 rounded rect)
  - Info pill 5: "Stage: Pre-seed, validating Problem-Solution fit" (font size 11, white on #EF6C00 rounded rect)
  - Cross-reference note: "See also: [Business Model Canvas](../03-Strategy-Planning/business-model-canvas.md) for a more detailed partner/resource view after validation."

### Frame 2: Problem

- **Position**: Top-left block
- **Size**: 900x1000px
- **Background**: #FFEBEE (Soft Red tint)
- **Elements**:
  - Block header: "PROBLEM" (font size 18, bold, #C62828)
  - Subtitle: "Top 3 problems worth solving" (font size 11, #6B7280)

  - Problem sticky 1 (#FFCDD2, 350x120px):
    - "1. Non-technical teams (marketing, ops, finance) cannot access data without filing a ticket with the data team. Average wait: 3-5 business days for a simple query."
    - Validation badge: "VALIDATED" (green pill #2E7D32)

  - Problem sticky 2 (#FFCDD2, 350x120px):
    - "2. Self-service BI tools (Tableau, Looker) require SQL knowledge or training that business users lack. 72% of licenses go unused after 90 days."
    - Validation badge: "VALIDATED" (green pill #2E7D32)

  - Problem sticky 3 (#FFCDD2, 350x120px):
    - "3. Data teams spend 40%+ of their time on ad-hoc reporting requests instead of strategic analysis, creating bottlenecks and burnout."
    - Validation badge: "PARTIALLY VALIDATED" (yellow pill #F9A825)

  - **Existing Alternatives** sub-section (font size 14, bold):
  - Sticky (#FFF9C4, 350x100px):
    - "Ask a data analyst (3-5 day wait)"
    - "Export to spreadsheets (manual, error-prone)"
    - "Learn SQL (high barrier, low follow-through)"
    - "Use pre-built dashboards (rigid, never answer the real question)"

### Frame 3: Solution

- **Position**: Second column, top half
- **Size**: 900x500px
- **Background**: #E8F5E9 (Soft Green tint)
- **Elements**:
  - Block header: "SOLUTION" (font size 18, bold, #2E7D32)
  - Subtitle: "Top 3 features" (font size 11, #6B7280)

  - Solution sticky 1 (#C8E6C9, 350x100px):
    - "1. Natural language query interface — users type questions in plain English ('What were our top 10 customers by revenue last quarter?') and get instant answers."
    - Validation badge: "TESTING" (blue pill #1565C0)

  - Solution sticky 2 (#C8E6C9, 350x100px):
    - "2. Auto-generated visualizations — system automatically selects the best chart type based on the data returned. One-click export to slides or Slack."
    - Validation badge: "HYPOTHESIS" (gray pill #78909C)

  - Solution sticky 3 (#C8E6C9, 350x100px):
    - "3. Semantic data catalog — AI automatically maps business terms to database columns so users do not need to know table schemas."
    - Validation badge: "HYPOTHESIS" (gray pill #78909C)

### Frame 4: Key Metrics

- **Position**: Second column, bottom half
- **Size**: 900x500px
- **Background**: #E3F2FD (Soft Blue tint)
- **Elements**:
  - Block header: "KEY METRICS" (font size 18, bold, #1565C0)
  - Subtitle: "Numbers that matter most" (font size 11, #6B7280)

  - Metrics list (text block, 14px):
    - "Activation Rate: % of users who ask 3+ queries in first week (target: 60%)"
    - "Query Accuracy: % of natural language queries that return correct results (target: 85%)"
    - "Data Team Ticket Reduction: % decrease in ad-hoc reporting requests (target: 50%)"
    - "Weekly Active Users: # of business users querying data weekly (target: 30% of org)"
    - "Time to Insight: minutes from question to answer (target: <2 min vs. current 3-5 days)"

  - Pirate Metrics note (#FFF8E1, small):
    - "AARRR: Acquisition (signups) -> Activation (3+ queries) -> Retention (weekly usage) -> Revenue (paid conversion) -> Referral (team invites)"

### Frame 5: Unique Value Proposition

- **Position**: Center block
- **Size**: 900x1000px
- **Background**: #FFF8E1 (Warm Yellow tint)
- **Elements**:
  - Block header: "UNIQUE VALUE PROPOSITION" (font size 18, bold, #EF6C00)
  - Subtitle: "Single, clear, compelling message" (font size 11, #6B7280)

  - UVP statement — Large text block (font size 20, bold, #1A1A2E):
    - "Ask your data anything in plain English. Get answers in seconds, not days."

  - Supporting points (#FFF9C4 stickies, 3 stickies):
  - Sticky 1: "For non-technical business teams who need data to make decisions but can't write SQL."
  - Sticky 2: "Unlike Tableau or Looker, DataBridge requires zero training — if you can type a question, you can query your data."
  - Sticky 3: "We reduce the data team's ad-hoc request burden by 50%, freeing them for strategic work."

  - **High-Level Concept** (font size 14, bold):
  - Text: "'ChatGPT for your company's data' — combines LLM intelligence with enterprise data security."

  - Differentiator note (#E8EAF6, 350x80px):
    - "Positioning: We are NOT a BI tool. We are a data access layer that sits between your data warehouse and your business teams."

### Frame 6: Unfair Advantage

- **Position**: Fourth column, top
- **Size**: 900x500px
- **Background**: #F3E5F5 (Soft Purple tint)
- **Elements**:
  - Block header: "UNFAIR ADVANTAGE" (font size 18, bold, #6A1B9A)
  - Subtitle: "Can't be easily copied or bought" (font size 11, #6B7280)

  - Advantage sticky 1 (#E8EAF6, 350x80px):
    - "Proprietary semantic mapping engine trained on 10,000+ real-world business-to-database schema mappings from beta customers."

  - Advantage sticky 2 (#E8EAF6, 350x80px):
    - "Co-founder (CTO) previously built the data platform at Stripe — deep domain expertise and credibility with data teams."

  - Advantage sticky 3 (#E8EAF6, 350x80px):
    - "Early partnership with Snowflake — featured in their partner marketplace, providing distribution advantage."

  - Honest assessment note (#FFF9C4, small):
    - "Reality check: LLM-to-SQL is becoming commoditized. Our moat is the semantic layer and accumulated schema mappings, not the query engine itself."

### Frame 7: Customer Segments

- **Position**: Right column
- **Size**: 900x1000px
- **Background**: #E8EAF6 (Soft Lavender tint)
- **Elements**:
  - Block header: "CUSTOMER SEGMENTS" (font size 18, bold, #1565C0)
  - Subtitle: "Target customers" (font size 11, #6B7280)

  - Segment 1 — Sticky (#BBDEFB, 350x120px):
    - "PRIMARY: Mid-market SaaS companies (200-2,000 employees)"
    - "Have a data warehouse (Snowflake/BigQuery/Redshift)"
    - "Have a small data team (3-8 people) overwhelmed by requests"
    - "Business teams frustrated by data access bottleneck"

  - Segment 2 — Sticky (#BBDEFB, 350x100px):
    - "SECONDARY: Series B+ startups with rapid headcount growth"
    - "Data team hasn't scaled with the company"
    - "Lots of new hires who need data literacy fast"

  - **Early Adopters** sub-section (font size 14, bold):
  - Sticky (#C8E6C9, 350x120px):
    - "Marketing operations managers who run weekly campaign reports"
    - "Finance teams doing monthly close and ad-hoc board reporting"
    - "Customer success teams tracking health scores and expansion signals"
    - "Characteristics: tech-savvy but not technical, high data need, low SQL ability"

### Frame 8: Cost Structure

- **Position**: Bottom-left half
- **Size**: 2400x600px
- **Background**: #FFFFFF
- **Elements**:
  - Block header: "COST STRUCTURE" (font size 18, bold, #37474F)

  - **Fixed Costs** section:
  - Cost sticky 1 (#F5F5F5): "Team salaries: $45K/month (3 founders + 2 engineers)"
  - Cost sticky 2 (#F5F5F5): "Cloud infrastructure (AWS): $3,200/month"
  - Cost sticky 3 (#F5F5F5): "LLM API costs (OpenAI/Anthropic): $2,800/month (growing with usage)"
  - Cost sticky 4 (#F5F5F5): "Office + tools: $1,500/month (WeWork + SaaS stack)"

  - **Variable Costs** section:
  - Cost sticky 5 (#FFF9C4): "Per-query LLM cost: ~$0.03/query (target: <$0.01 with caching)"
  - Cost sticky 6 (#FFF9C4): "Customer onboarding: ~$500/customer (schema mapping setup)"
  - Cost sticky 7 (#FFF9C4): "Support: Currently founders handling; plan to hire CS at $8K/mo post-seed"

  - **Monthly Burn**: "$52,500/month | 14 months runway at current burn (pre-seed: $735K raised)"
  - **Target Unit Economics**: "LTV:CAC > 3:1 | Payback period < 12 months"

### Frame 9: Revenue Streams

- **Position**: Bottom-right half
- **Size**: 2400x600px
- **Background**: #FFFFFF
- **Elements**:
  - Block header: "REVENUE STREAMS" (font size 18, bold, #2E7D32)

  - Revenue Model — Rectangle (#E8F5E9, 600x200px):
    - "SaaS Subscription — Usage-based tiering" (bold, 16px)
    - "Starter: $499/month (up to 500 queries/month, 5 users)"
    - "Growth: $1,499/month (up to 5,000 queries/month, 25 users)"
    - "Enterprise: $4,999/month (unlimited queries, unlimited users, SSO, dedicated support)"

  - Current Revenue — Rectangle (#FFF9C4, 400x100px):
    - "Current MRR: $4,200 (8 beta customers, discounted pricing)"
    - "Pipeline: $12,000 MRR in active trials"

  - LTV Estimate — Rectangle (#E3F2FD, 400x100px):
    - "Estimated LTV: $18,000 (avg plan: $1,500/mo x 12-month avg lifespan)"
    - "Estimated CAC: $4,500 (content marketing + SDR outbound)"
    - "LTV:CAC Ratio: 4:1 (target: >3:1) — HEALTHY"

  - Revenue Target — Text block (bold, #2E7D32):
    - "12-month target: $50K MRR ($600K ARR) — requires 33 Growth-tier customers"

### Frame 10: Hypothesis Validation Tracker

- **Position**: Bottom, spanning full width
- **Size**: 4800x500px
- **Background**: #F5F7FA
- **Elements**:
  - Frame title: "Hypothesis Validation Tracker" (font size 20, bold, #1A1A2E)
  - Subtitle: "Status of core assumptions — updated after each experiment" (font size 12, #6B7280)

  - Hypothesis Row 1 — Rectangle (full width, 60px):
    - "H1: Non-technical users have an urgent, frequent need for data access" | Status: "VALIDATED" (green pill) | Evidence: "12/12 customer interviews confirmed. 8 beta signups within 2 weeks of outreach."

  - Hypothesis Row 2 — Rectangle (full width, 60px):
    - "H2: Natural language query accuracy can exceed 85% for common business queries" | Status: "TESTING" (blue pill) | Evidence: "Current accuracy: 78% on beta customer queries. Improving with semantic layer tuning."

  - Hypothesis Row 3 — Rectangle (full width, 60px):
    - "H3: Companies will pay $1,500/month for this capability" | Status: "PARTIALLY VALIDATED" (yellow pill) | Evidence: "4 of 8 beta customers converted to paid at discounted $499. 3 expressed willingness to pay full Growth tier."

  - Hypothesis Row 4 — Rectangle (full width, 60px):
    - "H4: Users will adopt without training (self-serve)" | Status: "INVALIDATED" (red pill) | Evidence: "5 of 8 beta customers needed a 30-min onboarding call. Self-serve activation rate is 35%, below 60% target."

  - Hypothesis Row 5 — Rectangle (full width, 60px):
    - "H5: Semantic layer is a defensible moat" | Status: "HYPOTHESIS" (gray pill) | Evidence: "Not yet tested. Competitors launching similar features. Need to accelerate schema mapping accumulation."

  - Action callout (#FFF8E1, full width, 60px): "NEXT EXPERIMENT: Run a guided onboarding A/B test (self-serve vs. 15-min video walkthrough) with next 20 signups to address H4 invalidation."

## Connectors & Flow

- Bidirectional arrows between Problem and Solution (problems drive solutions, solutions address problems).
- Arrow from Customer Segments to Problem (segments experience the problems).
- Arrow from Unique Value Proposition to Customer Segments (UVP targets segments).
- Arrow from Key Metrics down to Hypothesis Validation Tracker (metrics measure hypotheses).
- Dashed arrows from each canvas block to the relevant hypothesis row in the tracker (traceability).
- Dotted line from Unfair Advantage to Revenue Streams (advantage enables revenue model sustainability).

## Example Content

All frames contain realistic pre-filled content for "DataBridge," a fictional AI-powered data integration startup at the pre-seed stage. The canvas tells the story of a company that has validated the problem (non-technical teams can't access data) but is still testing the solution (natural language queries) and pricing (willingness to pay). One key hypothesis has been invalidated (self-serve adoption) which is prompting a pivot toward guided onboarding.

**Startup Context**: DataBridge has raised $735K in pre-seed funding, has 3 co-founders and 2 engineers, and has 8 beta customers generating $4,200 MRR. They are targeting $50K MRR within 12 months.

## Variations

1. **Marketplace Canvas**: Add a "Supply Side" and "Demand Side" split to Customer Segments. Add "Liquidity Metrics" to Key Metrics. Replace Channels with "Acquisition Channels — Supply" and "Acquisition Channels — Demand."
2. **Hardware/DeepTech Canvas**: Add a "Technical Risk" block. Expand Cost Structure to include BOM (bill of materials), certification costs, and manufacturing. Add longer timeline assumptions (18-36 months to market).
3. **Pivot Comparison Canvas**: Side-by-side layout showing the current canvas next to a proposed pivot canvas, with highlighted differences and a decision matrix at the bottom.

## Build Instructions

1. Set board background to #F5F7FA and dimensions to 5000x3500px.
2. Create the Lean Canvas Header (4800x350px) at the top with #1565C0 background.
3. Create a 5-column, 2-row grid for the nine Lean Canvas blocks. Apply soft tint backgrounds to each block as specified.
4. Add block headers in bold with the specified color for each block.
5. Populate Problem block with 3 problem stickies and the Existing Alternatives sub-section.
6. Populate Solution block with 3 feature stickies.
7. Populate Key Metrics block with the metrics list and AARRR note.
8. Populate UVP block with the headline statement, supporting points, and high-level concept.
9. Populate Unfair Advantage block with 3 advantage stickies and the honest assessment note.
10. Populate Customer Segments block with segment stickies and the Early Adopters sub-section.
11. Create Cost Structure and Revenue Streams as two half-width blocks at the bottom.
12. Create the Hypothesis Validation Tracker (4800x500px) at the very bottom.
13. Add validation badges (colored pills) to each hypothesis and relevant canvas elements.
14. Draw all connectors as described.

## Tips & Best Practices

- **Fill it in one sitting, then iterate**: The first version should take 20-30 minutes. Do not overthink it. The Lean Canvas is a snapshot, not a business plan.
- **Validate the problem before the solution**: Do not spend time on Solution, Channels, or Revenue until you have strong evidence that the Problem is real and urgent.
- **Use the validation tracker religiously**: Every assumption is a hypothesis until proven. Move items from "Hypothesis" to "Testing" to "Validated" or "Invalidated" as you run experiments.
- **Version your canvas**: Date each version and keep old ones. Comparing v1 to v4 shows your learning journey and is valuable for investor conversations.
- **Cross-reference with Business Model Canvas**: Once you have validated Problem-Solution fit, expand into a full Business Model Canvas for partner, resource, and activity planning.
- **Be honest about Unfair Advantage**: Most early-stage startups do not have one yet. That is okay — acknowledge it and articulate what you are building toward.
- **Invalidation is progress**: If a hypothesis is invalidated, that is a successful experiment. Update the canvas and pivot the relevant block.
