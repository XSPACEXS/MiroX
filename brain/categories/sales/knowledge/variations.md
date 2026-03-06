# Sales Board Variations

## Introduction

No two sales organizations are identical. The stage names, deal sizes, team structures, methodologies, and cadences vary dramatically between a 3-person startup sales team and a 200-person enterprise sales organization. This guide provides specific adaptation guidance for different industries, team sizes, complexity levels, and sales motions.

---

## Industry Variations

### SaaS / Software

**Pipeline Stages**: Lead → MQL → SQL → Discovery → Demo → Proposal → Negotiation → Closed Won/Lost
**Key Differences**:

- Add an MQL/SQL handoff stage between marketing and sales
- Include product-led indicators: free trial conversions, feature usage during trial
- Show ARR and MRR alongside deal value (total contract value vs. annualized)
- Add NRR (Net Revenue Retention) as a portfolio KPI for expansion tracking
- Track "Time to First Value" for demo-to-close velocity

**Additional Board Sections**:

- Product Usage Dashboard: For PLG companies, overlay product analytics on deal cards
- Integration Requirements: Technical evaluation checklist per deal
- Implementation Timeline: Post-sale handoff plan visible during negotiation

### Professional Services / Consulting

**Pipeline Stages**: Lead → Qualification → Scoping → Proposal → Negotiation → SOW Signed → Staffing → Kickoff
**Key Differences**:

- Add "Staffing" and "Kickoff" as post-close stages — closing the deal is not the end
- Track billable hours and utilization alongside pipeline
- Deal cards need "Team Composition" field (who will deliver the work)
- Include profitability analysis per deal (not just revenue)
- Track project duration and resource availability

**Additional Board Sections**:

- Resource Availability Grid: Which consultants are available for new engagements
- Profitability Calculator: Revenue minus delivery cost for each deal
- Client Reference Map: Which completed projects can be referenced for this prospect

### Manufacturing / Industrial

**Pipeline Stages**: Inquiry → Technical Review → Sample/Trial → Quote → Negotiation → Purchase Order → Fulfillment
**Key Differences**:

- Add "Sample/Trial" stage where physical product evaluation occurs
- Include lead time and delivery schedule on deal cards
- Track RFP/RFQ response deadlines prominently
- Bill of Materials (BOM) and pricing structure is complex — link to external spec sheets
- Longer sales cycles (6-18 months) require quarterly pipeline views

**Additional Board Sections**:

- RFP Response Tracker: Deadlines, requirements, submission status
- Technical Specification Status: Engineering review and approval workflow
- Supply Chain Considerations: Material availability, lead time risks

### Healthcare / Life Sciences

**Pipeline Stages**: Lead → Clinical Review → Compliance Check → Proposal → Committee Review → Procurement → Contract → Implementation
**Key Differences**:

- Add "Compliance Check" stage — regulatory requirements before proposal
- Track committee review cycles (these can take months)
- Include compliance documentation status on deal cards
- HIPAA/regulatory requirements as mandatory fields
- Group Purchasing Organization (GPO) contract alignment

**Additional Board Sections**:

- Regulatory Compliance Checklist: Per deal, per product
- Clinical Evidence Library: Studies and data supporting clinical efficacy
- Implementation Readiness: EHR integration requirements, training plans

### Financial Services

**Pipeline Stages**: Lead → Compliance Pre-Screen → Discovery → Due Diligence → Proposal → Legal Review → Board Approval → Signed
**Key Differences**:

- Add "Compliance Pre-Screen" and "Due Diligence" as mandatory stages
- Extended legal review cycles with specific MSA requirements
- KYC (Know Your Customer) requirements on every deal
- Track regulatory jurisdiction per deal
- Multi-level approval chains (department → risk committee → board)

**Additional Board Sections**:

- Due Diligence Tracker: Document collection status
- Regulatory Matrix: Requirements by jurisdiction and product type
- Risk Assessment: Per-deal risk score based on client profile

---

## Team Size Variations

### Solo Founder / 1-2 Person Sales Team

**Adaptations**:

- Simplify to 4 pipeline stages: Lead → Qualified → Proposal → Closed
- Remove "Owner" field from deal cards (it is always you)
- Add "Activity Log" frame to track personal productivity (calls, emails, meetings)
- Combine pipeline and forecast into a single board
- Add "Weekly Goal" frame with specific activity targets
- Board size: 3500x2000px (smaller, faster to scan)

**Remove**:

- Team leaderboard (not applicable)
- Territory assignment (not applicable)
- Complex conversion analytics (not enough data for statistical significance)

**Add**:

- Personal CRM substitute: Board becomes the primary deal management tool
- Follow-up reminders: Prominent "This Week's Follow-ups" frame
- Learning log: "What I learned this week" sticky notes for self-coaching

### Small Team (3-10 Reps)

**Adaptations**:

- Standard 5-6 stage pipeline
- Include rep assignment on deal cards
- Add a simple leaderboard (top 5 reps by closed revenue)
- Weekly pipeline review cadence
- One manager coaches from the board during 1:1s
- Board size: 5000x3000px (standard)

**Key Focus**:

- Consistency: Ensure all reps use the same stage definitions and card format
- Coaching: Manager should annotate specific deals with coaching notes via sticky notes
- Friendly competition: Leaderboard motivates without being punitive at this size

### Mid-Market Team (10-30 Reps)

**Adaptations**:

- Split pipeline by team, territory, or segment
- Create separate boards per team/territory with a master dashboard linking to all
- Add team-level KPIs alongside individual metrics
- Include territory management frame showing geographic/segment coverage
- Add forecast committee workflow (each manager submits, VP consolidates)
- Board size: 6000x3500px per team board; 5500x3000px for master dashboard

**Key Focus**:

- Standardization: Playbooks and processes must be codified (this size is too large for tribal knowledge)
- Analytics: Enough data for meaningful conversion rates, velocity analysis, and win/loss patterns
- Scalability: Board design must accommodate adding reps without redesigning

### Enterprise Team (30+ Reps)

**Adaptations**:

- Separate boards for: Team pipelines, territory dashboards, manager coaching boards, executive forecast, QBR presentations
- Pipeline boards aggregated to manager view (individual deals visible only when zoomed in)
- Forecast boards with multi-level rollups (rep → manager → director → VP)
- Account planning boards for Top 20 strategic accounts
- Territory planning boards for annual go-to-market alignment
- Board size: Varies by purpose (see board type recommendations)

**Key Focus**:

- Governance: Who can edit which boards? Role-based access matters at this scale.
- Integration: Boards should sync with CRM data (consider Miro API automation)
- Consistency: Template enforcement across all teams (everyone uses the same deal card format)
- Executive layer: Boards designed for C-suite consumption must be polished and presentation-ready

---

## Complexity Variations

### Simple Deal Boards (Transactional Sales)

For sales motions with short cycles (< 14 days), low ACVs (< $5K), high volume:

- Use simplified 3-stage pipeline: New → Working → Closed
- Deal cards need only: Company, Value, Next Step, Days Open
- Focus on volume metrics: Deals per day, conversion rate, average time to close
- Board size: 3000x2000px
- Update frequency: Daily (or real-time if API-connected)

### Medium Complexity (Consultative Sales)

For sales motions with 30-90 day cycles, $10K-$100K ACVs:

- Standard 5-6 stage pipeline
- Full deal card anatomy (company, value, probability, contact, next step, source, age)
- Include conversion rates and velocity analytics
- Coaching notes and annotations on high-value deals
- Board size: 5000x3000px
- Update frequency: Weekly

### High Complexity (Enterprise Sales)

For sales motions with 90-365 day cycles, $100K+ ACVs, multi-threaded deals:

- Extended pipeline: 7-9 stages including Security Review, Procurement, Legal
- Each deal deserves its own Deal Room board for large enough opportunities
- Stakeholder mapping is essential — multiple contacts per deal
- Competitive intelligence must be deal-specific
- Mutual action plans with prospect task tracking
- Board size: 6000x4000px for pipeline; 5600x3000px per deal room
- Update frequency: After every interaction

---

## Sales Methodology Variations

### MEDDPICC-Based Boards

Add a MEDDPICC score to every deal card (total score out of 40 or a grade A/B/C/D):

- Color-code cards by MEDDPICC score: A (green), B (yellow), C (orange), D (red)
- Include a MEDDPICC breakdown panel showing aggregate scores by category
- Identify the weakest MEDDPICC dimension across the pipeline (e.g., "Champion identification is the team's biggest gap — 62% of deals have no identified champion")

### Challenger-Based Boards

Add teaching/tailoring/control indicators to deal cards:

- Teaching: Has the rep delivered a commercial insight? (Y/N)
- Tailoring: Is messaging customized for the prospect's business? (Y/N)
- Taking Control: Has the rep reframed the prospect's thinking? (Y/N)
- Include an "Insight Library" frame on the playbook board with commercial insights by industry

### SPIN-Based Boards

Structure the discovery framework column around SPIN:

- Situation questions asked (Y/N)
- Problem questions asked (Y/N)
- Implication questions asked (Y/N)
- Need-Payoff questions asked (Y/N)
- Track progression through SPIN stages on each deal card

### Sandler-Based Boards

Add "Pain/Budget/Decision" indicators to deal cards:

- Pain level: 1-10 (how acute is the problem?)
- Budget: Identified / Not Identified / Insufficient
- Decision process: Mapped / Partially Mapped / Unknown
- Include "Up-Front Contract" templates in the playbook

---

## Cadence-Based Variations

### Daily Stand-up Board

- Stripped-down pipeline showing only today's action items
- "Deals Moving Today" frame with cards that have scheduled activities
- "Blockers" frame for deals that are stuck and need help
- Board size: 2500x1500px (fast to load, fast to scan)
- Time to review: 5 minutes

### Weekly Pipeline Review Board

- Full pipeline Kanban with all active deals
- Analytics strip with conversion rates and velocity
- Aging deal alerts
- Board size: 5000x3000px
- Time to review: 30-45 minutes

### Monthly Forecast Board

- Dashboard grid with KPIs, forecast breakdown, pipeline movement, win/loss analysis
- Emphasis on forward-looking metrics and gap analysis
- Board size: 5500x3000px
- Time to review: 60 minutes

### Quarterly Business Review Board

- Multi-section narrative board designed for presentation mode
- Results, trends, team performance, market analysis, forward plan
- Designed for executive audience
- Board size: 6000x4000px
- Time to present: 45-60 minutes

### Annual Planning Board

- Territory maps, quota allocation, hiring plan, playbook roadmap, tech stack assessment
- Designed for collaborative planning sessions
- Board size: 7000x5000px (large, multiple work sessions)
- Time to complete: Multiple sessions over 1-2 weeks

---

## Geographic and Cultural Variations

### Multi-Region Boards

For global sales teams, create region-specific pipeline boards that roll up to a global dashboard:

- AMER pipeline board (Americas)
- EMEA pipeline board (Europe, Middle East, Africa)
- APAC pipeline board (Asia Pacific)
- Global dashboard with regional KPI comparison

Currency handling: Show all deal values in both local currency and USD equivalent.
Time zones: Note the pipeline review cadence in each region's local time.

### Localization Considerations

- Date formats: US (Mar 6, 2026) vs. EU (6 Mar 2026) vs. ISO (2026-03-06)
- Currency symbols: $, EUR, GBP, JPY placement conventions
- Stage terminology: "Qualified" is universal; "Proposal" vs. "Quotation" vs. "Offer" varies by region
- Color associations: Red means danger universally, but green does not mean "money" in all cultures

---

## Variation Selection Matrix

| Factor                 | Recommendation                                                 |
| ---------------------- | -------------------------------------------------------------- |
| Team size < 5          | Solo/Small Team variation — simplified stages, combined boards |
| Team size 5-15         | Standard variation — full pipeline, team analytics             |
| Team size 15+          | Enterprise variation — separate boards, rollup dashboards      |
| ACV < $5K              | Simple/Transactional — 3 stages, volume metrics                |
| ACV $5K-$100K          | Medium/Consultative — standard pipeline, coaching tools        |
| ACV > $100K            | Complex/Enterprise — deal rooms, stakeholder maps, MAPs        |
| Cycle < 14 days        | Daily cadence, simplified cards, activity focus                |
| Cycle 30-90 days       | Weekly cadence, full cards, conversion analytics               |
| Cycle > 90 days        | Multiple cadences, deep deal intelligence, quarterly reviews   |
| PLG motion             | Add product usage data, trial conversion tracking              |
| Outbound motion        | Add activity metrics, sequence tracking, ICP scoring           |
| Channel/partner motion | Add partner pipeline, co-sell boards, partner leaderboard      |
