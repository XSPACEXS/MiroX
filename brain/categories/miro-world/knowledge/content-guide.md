# Content Guide — Miro World Product Showcase

## Domain Knowledge: What Goes Into a Product World

### The Product Ecosystem Mental Model

A Product World Showcase board maps an entire product ecosystem. The content must span multiple dimensions of the product — not just features, but the full context in which those features exist.

**The six content pillars of a product world:**

1. **Product Architecture**: What the product is — features, modules, capabilities, tiers
2. **Team Structure**: Who builds it — teams, leads, headcount, specializations
3. **Business Metrics**: How it performs — revenue, usage, growth, retention
4. **Strategic Direction**: Where it is going — vision, OKRs, roadmap, priorities
5. **Technical Infrastructure**: What powers it — databases, APIs, integrations, uptime
6. **Ecosystem & Community**: Who uses it — customers, partners, community, marketplace

Every zone on the board should contain content from at least 3 of these pillars. A zone that only covers features without metrics, team, or strategy feels hollow.

---

## Content Templates by Zone Type

### Product Zone Content Template

```
Zone Title: [Product Area Name]
Zone Description: [One sentence explaining what this area covers]

Buildings (3-5 per zone):
- Building 1: [Feature/Module Name] — [Brief description] | [Key metric]
- Building 2: [Feature/Module Name] — [Brief description] | [Key metric]
- Building 3: [Feature/Module Name] — [Brief description] | [Key metric]

Status Stickies (2-4 per zone):
- Priority: [Current quarter initiative] — [why it matters]
- New: [Recent launch or update] — [impact so far]
- Risk: [Known issue or blocker] — [mitigation plan]
- Shipped: [Recently completed item] — [measured outcome]

Team Info:
- Team Lead: [Name] | [Headcount] engineers | [Sprint velocity or cadence]
```

### Central Hub Content Template

```
Title: [Product Vision or Mission]
Tagline: [Product-level mission statement]

Key Elements:
- Vision Statement: [1-2 sentence aspirational statement]
- North Star Metric: [Primary metric name]: [Value] ([Trend])
- Roadmap Summary: Q[current]: [X] shipped | Q[next]: [Y] planned | Q[future]: [Z] in discovery
- OKR Status: [X of Y] key results on track | [A] at risk | [B] behind
- Leadership: [CPO/CEO Name] | Product Managers: [count] | Total headcount: [count]
```

### Legend/Footer Content Template

```
Color Legend:
- [Color 1] = [Zone 1 Name]
- [Color 2] = [Zone 2 Name]
- [Color N] = [Zone N Name]

Status Key:
- Green sticky = Shipped
- Yellow sticky = At Risk
- Pink sticky = Blocked
- Blue sticky = In Progress

Board Metadata:
- Version: [Quarter Year]
- Last Updated: [Date]
- Next Review: [Date]
- Board Owner: [Team/Person]
```

---

## Metric Standards

### How to Present Metrics

Every metric on the board should follow the VTCT format:

- **V**alue: The current number (e.g., "124,000")
- **T**rend: Direction and magnitude (e.g., "+22% QoQ")
- **C**ontext: What the number means (e.g., "Weekly Active Collaborators")
- **T**arget: The benchmark (e.g., "Target: 150,000 by Q3")

### Common Metrics by Product Area

| Product Area  | Metric Examples                                   |
| ------------- | ------------------------------------------------- |
| Core Platform | Uptime %, API latency, Error rate, DAU            |
| Growth        | Signup rate, Activation %, Conversion %, CAC      |
| Analytics     | Data freshness, Query latency, Report accuracy    |
| Integrations  | Connected instances, API calls/day, Partner count |
| Community     | Forum members, Template count, NPS score          |

---

## Writing Style Guide

### Tone

- **Confident but not arrogant**: "We shipped X" not "We merely released X"
- **Data-driven**: Include numbers wherever possible. "Improved performance" becomes "Reduced latency by 40%"
- **Forward-looking**: Every zone should mention what is coming next, not just what exists
- **Team-oriented**: Credit teams, not just features

### Length

- **Zone titles**: 2-4 words maximum ("Core Platform District")
- **Zone descriptions**: 1 sentence, 10-20 words
- **Building labels**: Feature name + 1-line description (under 15 words)
- **Sticky notes**: 1-2 sentences, under 30 words
- **Connector labels**: 3-6 words ("Data flows to Intelligence")

### Things to Avoid

- Jargon that only insiders understand
- Vague language without specifics ("improving performance" — improving what? by how much?)
- Negative framing without mitigation ("This is broken" — better: "Known issue — fix planned for Q2")
- Outdated information — if a metric is from last quarter, label it explicitly

---

## Content Refresh Cadence

| Content Type                             | Update Frequency      | Owner            |
| ---------------------------------------- | --------------------- | ---------------- |
| Sticky notes (status, priorities)        | Weekly                | Zone owners      |
| Metrics (numbers, trends)                | Bi-weekly or monthly  | Data team        |
| Building labels (features, descriptions) | Quarterly             | Product managers |
| Zone structure (add/remove zones)        | Annually or at reorgs | Board owner      |
| Decorative elements                      | Never (locked)        | Board owner      |
| Legend and metadata                      | At every update       | Board owner      |

---

## Example Content: Fictitious Products

For demonstration purposes, use one of these fictitious products:

### ACME Platform

- Collaborative workspace SaaS
- 48,000 WAU, 2,400 teams, $3.2M ARR
- Districts: Core Platform, Growth, Analytics, Integrations, Community
- Key people: CEO Yuki Tanaka, CTO James O'Brien, CPO Sarah Chen

### NovaTech

- Enterprise AI tools platform
- 12,000 DAU, 890 enterprise customers, $18M ARR
- Districts: AI Engine, Developer Tools, Enterprise Admin, Marketplace, Support
- Key people: CEO Dr. Lin Wei, CTO Marcus Rivera, CPO Priya Sharma

### FlowBoard

- Visual collaboration tool
- 48,000 WAU, multi-platform (web, desktop, mobile, tablet)
- Districts: Canvas Engine, Templates, AI Assistant, Integrations, Community

Use these consistently across templates to create a coherent knowledge base.

---

## Content Depth by Board Type

| Board Type          | Content Depth                | Example                                              |
| ------------------- | ---------------------------- | ---------------------------------------------------- |
| Product World Map   | Deep (all 6 pillars)         | Full product ecosystem with metrics, teams, strategy |
| What's New Showcase | Medium (features + metrics)  | Quarterly release highlights organized by zone       |
| Feature Landscape   | Medium (features + maturity) | Feature catalog with maturity levels and gaps        |
| Department Campus   | Deep (teams + processes)     | Organizational structure with cross-functional flows |
