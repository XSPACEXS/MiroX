# Research Synthesis Board

## Overview

- **Purpose**: Organize and synthesize qualitative research findings — such as user interviews, usability tests, field studies, or diary studies — into clustered themes, evidence-backed insights, and prioritized recommendations on a single collaborative canvas.
- **Best For**: UX researchers presenting findings to product teams, product managers synthesizing customer feedback, design teams building empathy maps from research, consultants delivering research readouts.
- **Complexity**: Medium
- **Board Size**: 5500x4000px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Deep Teal     | #006064 |
| Secondary  | Slate Blue    | #455A64 |
| Accent     | Electric Blue | #2196F3 |
| Background | Off White     | #FAFBFC |
| Text       | Near Black    | #1A1A1A |

## Board Layout

The board flows left-to-right from raw data (quotes) through analysis (themes) to synthesis (insights and recommendations), with a research context header and methodology footer.

```
+================================================================+
|                    RESEARCH CONTEXT HEADER                       |
|  [Study Name] [Method] [Participants] [Timeline] [Team]         |
+================================================================+
| RAW QUOTES &       | THEME CLUSTERS    | INSIGHT CARDS          |
| OBSERVATIONS       |                   |                        |
|                    | [Theme 1]         | [Insight 1 + evidence] |
| [Participant 1     |   [quotes]        | [Insight 2 + evidence] |
|  quotes]           |   [quotes]        | [Insight 3 + evidence] |
| [Participant 2     | [Theme 2]         |                        |
|  quotes]           |   [quotes]        |                        |
| [Participant 3     | [Theme 3]         |                        |
|  quotes]           |   [quotes]        |                        |
+--------------------+-------------------+------------------------+
| EVIDENCE STRENGTH  | RECOMMENDATIONS   | NEXT STEPS             |
| MATRIX             |                   |                        |
+================================================================+
```

## Frames & Sections

### Frame 1: Research Context Header

- **Position**: Top, spanning full width
- **Size**: 5300x400px
- **Background**: #006064 (Deep Teal)
- **Elements**:
  - Text block: "Research Synthesis: Onboarding Experience Study" (font size 32, bold, white #FFFFFF)
  - Text block: "Understanding why new users drop off before connecting their first data source" (font size 15, #B2DFDB)
  - Info Card 1 — Rectangle (200x100px, white, rounded):
    - Label: "Method" (font size 11, #6B7280)
    - Value: "Semi-structured interviews" (font size 13, bold, #1A1A1A)
  - Info Card 2 — Rectangle (200x100px, white, rounded):
    - Label: "Participants" (font size 11, #6B7280)
    - Value: "12 new users" (font size 13, bold, #1A1A1A)
    - Subtext: "Signed up in Jan 2026" (font size 10, #6B7280)
  - Info Card 3 — Rectangle (200x100px, white, rounded):
    - Label: "Duration" (font size 11, #6B7280)
    - Value: "45 min each" (font size 13, bold, #1A1A1A)
    - Subtext: "Jan 20 — Feb 7, 2026" (font size 10, #6B7280)
  - Info Card 4 — Rectangle (200x100px, white, rounded):
    - Label: "Research Lead" (font size 11, #6B7280)
    - Value: "Maya Chen, UXR" (font size 13, bold, #1A1A1A)
  - Info Card 5 — Rectangle (200x100px, white, rounded):
    - Label: "Study Type" (font size 11, #6B7280)
    - Value: "Evaluative" (font size 13, bold, #1A1A1A)
    - Subtext: "Problem discovery" (font size 10, #6B7280)

### Frame 2: Raw Quotes & Observations

- **Position**: Left column, main area
- **Size**: 1600x2400px
- **Background**: #FAFBFC
- **Elements**:
  - Frame title: "Raw Quotes & Observations" (font size 20, bold, #1A1A1A)
  - Subtitle: "Direct participant quotes organized by interview" (font size 12, #6B7280)

  - **Participant 1 — P01: Sarah, Data Analyst, 2 years exp** (text label, bold, #006064):
  - Quote sticky (#BBDEFB): "'I signed up because the landing page promised I could have a dashboard in 10 minutes. But then I hit the data connector page and it looked like I needed to be a database admin.'"
  - Quote sticky (#BBDEFB): "'I didn't know which connector to choose. Is Postgres the same as my Heroku database? I just froze and closed the tab.'"
  - Quote sticky (#BBDEFB): "'The documentation link opened in the same tab and I lost my place in the setup flow.'"

  - **Participant 2 — P02: Mike, Product Manager, 5 years exp** (text label, bold, #006064):
  - Quote sticky (#C8E6C9): "'I've connected databases before so the connector setup was fine for me. But I was surprised there was no sample data option to explore the product first.'"
  - Quote sticky (#C8E6C9): "'My first question was: what will this look like when it's working? There was no preview or example dashboard to reference.'"

  - **Participant 3 — P03: Lisa, Marketing Director, non-technical** (text label, bold, #006064):
  - Quote sticky (#FFE0B2): "'Honestly, I expected something more like Google Analytics where you just paste a tracking code. I didn't think I'd need database credentials.'"
  - Quote sticky (#FFE0B2): "'I asked my developer to help but they were busy for two weeks. By then I'd forgotten about the product.'"
  - Quote sticky (#FFE0B2): "'The email reminders felt pushy but didn't actually help me. They just said 'complete your setup' with no guidance.'"

  - **Participant 4 — P04: Raj, Startup Founder, technical** (text label, bold, #006064):
  - Quote sticky (#E8EAF6): "'The connector worked but it took me 20 minutes to figure out that I needed to whitelist your IP address. That should be step 1, not a footnote.'"
  - Quote sticky (#E8EAF6): "'Once I got connected, the empty dashboard state was confusing. I expected a suggested layout or template based on my data type.'"

  - **Participant 5 — P05: Jen, BI Analyst, 8 years exp** (text label, bold, #006064):
  - Quote sticky (#F8BBD0): "'I'm used to Tableau and Looker. Your connector setup is actually simpler, but the UI made it feel harder because there's no progress indicator.'"
  - Quote sticky (#F8BBD0): "'I would have loved a 'connect to sample data' option so I could evaluate the dashboard builder before committing to a real data connection.'"

### Frame 3: Theme Clusters

- **Position**: Center column, main area
- **Size**: 1800x2400px
- **Background**: #FAFBFC
- **Elements**:
  - Frame title: "Theme Clusters" (font size 20, bold, #1A1A1A)
  - Subtitle: "Quotes grouped into recurring themes (n = frequency count)" (font size 12, #6B7280)

  - **Theme 1: Connector Complexity Fear** — Cluster box (#BBDEFB border, 700x500px):
    - Theme label: "CONNECTOR COMPLEXITY FEAR (n=9/12)" (bold, 16px, #006064)
    - Clustered quote stickies (references to P01, P03, P04, P05 quotes about database setup fear, unfamiliar terminology, IP whitelisting confusion)
    - Summary note (#FFF8E1): "Users — especially non-technical ones — are intimidated by database terminology and credentials requirements. Even technical users find steps poorly ordered."

  - **Theme 2: Missing Preview / Sample Data** — Cluster box (#C8E6C9 border, 700x500px):
    - Theme label: "MISSING PREVIEW / SAMPLE DATA (n=7/12)" (bold, 16px, #006064)
    - Clustered quote stickies (references to P02, P04, P05 about wanting to see the product before committing data)
    - Summary note (#FFF8E1): "Users want to experience the value of the product before going through the setup effort. No sample data or preview option means they evaluate on setup friction alone."

  - **Theme 3: Poor Empty State Experience** — Cluster box (#FFE0B2 border, 700x400px):
    - Theme label: "POOR EMPTY STATE EXPERIENCE (n=6/12)" (bold, 16px, #006064)
    - Clustered quote stickies (P04, P02 quotes about blank dashboards with no guidance)
    - Summary note (#FFF8E1): "After successful connection, users land on a blank canvas with no suggested actions, templates, or guidance. Momentum from setup is lost."

  - **Theme 4: Ineffective Re-engagement** — Cluster box (#F8BBD0 border, 700x400px):
    - Theme label: "INEFFECTIVE RE-ENGAGEMENT (n=5/12)" (bold, 16px, #006064)
    - Clustered quote stickies (P03 quotes about unhelpful email reminders)
    - Summary note (#FFF8E1): "Follow-up emails remind users to complete setup but do not provide actionable help (e.g., a video walkthrough or a link to live chat). They feel generic and pushy."

### Frame 4: Insight Cards

- **Position**: Right column, main area
- **Size**: 1800x2400px
- **Background**: #FAFBFC
- **Elements**:
  - Frame title: "Insights" (font size 20, bold, #1A1A1A)
  - Subtitle: "Synthesized findings with evidence strength ratings" (font size 12, #6B7280)

  - Insight Card 1 — Rectangle (#FFFFFF, 700x350px, shadow, #2196F3 left border):
    - "INSIGHT 1" (font size 11, #2196F3)
    - "The data connector setup is the primary barrier to activation, and the barrier is psychological more than technical." (font size 15, bold, #1A1A1A)
    - "Evidence: 9 of 12 participants (75%) expressed anxiety about the connector page. Even technical users (P04, P05) found the UX confusing despite having the skills to complete it."
    - Evidence strength: "STRONG" (green pill #2E7D32)
    - "Supported by: Funnel data shows 23% drop-off at this step. Correlates with Theme 1."

  - Insight Card 2 — Rectangle (#FFFFFF, 700x350px, shadow, #2196F3 left border):
    - "INSIGHT 2" (font size 11, #2196F3)
    - "Users need to experience product value before investing effort in setup — and currently there is no way to do this." (font size 15, bold, #1A1A1A)
    - "Evidence: 7 of 12 participants (58%) wanted a preview, sample data, or example dashboard. P02 and P05 explicitly asked for a 'try before you connect' option."
    - Evidence strength: "STRONG" (green pill #2E7D32)
    - "Supported by: Competitor analysis shows Tableau and Looker both offer sample datasets."

  - Insight Card 3 — Rectangle (#FFFFFF, 700x300px, shadow, #2196F3 left border):
    - "INSIGHT 3" (font size 11, #2196F3)
    - "Post-connection empty states kill momentum. Users who successfully connect still churn because they do not know what to do next." (font size 15, bold, #1A1A1A)
    - "Evidence: 6 of 12 participants (50%) described confusion after connecting. P04: 'I expected a suggested layout.' Corroborated by support ticket analysis showing 'what do I do now?' as #3 question."
    - Evidence strength: "MODERATE" (yellow pill #F9A825)

  - Insight Card 4 — Rectangle (#FFFFFF, 700x300px, shadow, #2196F3 left border):
    - "INSIGHT 4" (font size 11, #2196F3)
    - "Re-engagement emails are not actionable enough to bring users back. Generic 'complete your setup' messaging does not address specific blockers." (font size 15, bold, #1A1A1A)
    - "Evidence: 5 of 12 participants (42%) recalled receiving emails but found them unhelpful. P03: 'They didn't actually help me.' Open rates are 34% but click-through is only 2.1%."
    - Evidence strength: "MODERATE" (yellow pill #F9A825)

### Frame 5: Evidence Strength Matrix

- **Position**: Bottom-left
- **Size**: 1600x900px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Evidence Strength Matrix" (font size 18, bold, #1A1A1A)
  - 2x2 matrix with axes:
    - X-axis: "Frequency (% of participants)" (Low --> High)
    - Y-axis: "Corroborating Data Sources" (Single --> Multiple)
  - Quadrant labels:
    - Top-right (#E8F5E9): "Strong — High frequency + multiple sources"
    - Top-left (#FFF8E1): "Emerging — Low frequency but corroborated"
    - Bottom-right (#FFF8E1): "Common but Unvalidated — High frequency, single source"
    - Bottom-left (#F5F5F5): "Anecdotal — Low frequency, single source"
  - Placed insights:
    - Insight 1 (Connector complexity): Top-right (strong) — circle #2196F3
    - Insight 2 (Sample data): Top-right (strong) — circle #2196F3
    - Insight 3 (Empty states): Top-left to center (moderate) — circle #FB8C00
    - Insight 4 (Re-engagement emails): Bottom-right (moderate) — circle #FB8C00

### Frame 6: Recommendations

- **Position**: Bottom-center
- **Size**: 1800x900px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Recommendations" (font size 18, bold, #1A1A1A)

  - Recommendation 1 — Rectangle (#E8F5E9, full width, 160px):
    - Priority badge: "P0 — HIGH IMPACT" (white on #2E7D32 pill)
    - "Add a 'Try with Sample Data' option on the connector page" (bold, 14px)
    - "Allow users to skip data connection and explore the product with a pre-built sample dashboard. Show a clear path back to 'Connect Your Own Data' when ready."
    - "Addresses: Insight 1 + Insight 2 | Effort: Medium (2-3 sprints) | Impact: High"

  - Recommendation 2 — Rectangle (#E8F5E9, full width, 160px):
    - Priority badge: "P0 — HIGH IMPACT" (white on #2E7D32 pill)
    - "Redesign the connector setup as a guided wizard with plain-language steps" (bold, 14px)
    - "Replace the current page with a step-by-step wizard. Step 1: 'What tool holds your data?' (visual icons). Step 2: 'Copy these credentials from your tool.' Include a progress indicator."
    - "Addresses: Insight 1 | Effort: Medium (2 sprints) | Impact: High"

  - Recommendation 3 — Rectangle (#FFF8E1, full width, 140px):
    - Priority badge: "P1 — MEDIUM IMPACT" (white on #F9A825 pill)
    - "Build an intelligent empty state with suggested dashboard templates" (bold, 14px)
    - "After data connection, auto-detect schema and suggest 3 dashboard templates. Include a 'Quick Start' tutorial overlay."
    - "Addresses: Insight 3 | Effort: Medium (2 sprints) | Impact: Medium"

  - Recommendation 4 — Rectangle (#FFF8E1, full width, 140px):
    - Priority badge: "P1 — MEDIUM IMPACT" (white on #F9A825 pill)
    - "Personalize re-engagement emails with specific troubleshooting content" (bold, 14px)
    - "Segment emails by drop-off point. Users stuck on connectors get a video walkthrough + live chat link. Users stuck on empty dashboard get template suggestions."
    - "Addresses: Insight 4 | Effort: Low (1 sprint) | Impact: Medium"

### Frame 7: Next Steps

- **Position**: Bottom-right
- **Size**: 1800x900px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Next Steps" (font size 18, bold, #1A1A1A)

  - Action 1 — Sticky (#C8E6C9, 600x100px):
    - "Share findings with Product and Engineering leads — March 10 readout" (bold)
    - "Owner: Maya Chen | Status: Scheduled"
  - Action 2 — Sticky (#C8E6C9, 600x100px):
    - "Kick off 'Sample Data' feature spec with PM (Jordan Lee)" (bold)
    - "Owner: Jordan Lee | Target: March 15"
  - Action 3 — Sticky (#BBDEFB, 600x100px):
    - "Design connector wizard prototype — Figma" (bold)
    - "Owner: Alex Rivera (Design) | Target: March 20"
  - Action 4 — Sticky (#BBDEFB, 600x100px):
    - "Run email A/B test: generic vs. segment-specific re-engagement" (bold)
    - "Owner: Marketing Ops — Dana Kim | Target: March 25"
  - Action 5 — Sticky (#E8EAF6, 600x100px):
    - "Follow-up study: Usability test the new connector wizard with 6 users" (bold)
    - "Owner: Maya Chen | Target: April — after wizard prototype is ready"
  - Action 6 — Sticky (#E8EAF6, 600x100px):
    - "Quantitative validation: Analyze activation funnel segments to confirm interview themes at scale" (bold)
    - "Owner: Priya Sharma (Data) | Target: March 20"

  - Timeline note: "Expected impact on activation funnel: +5-10pp at connector step within 60 days of launching Recs 1 and 2."

## Connectors & Flow

- Thick arrows from Raw Quotes to Theme Clusters (quotes flow into themes).
- Arrows from Theme Clusters to Insight Cards (themes synthesize into insights).
- Dashed arrows from Insight Cards down to Recommendations (insights drive recommendations).
- Dashed arrows from Recommendations to Next Steps (recommendations become actions).
- Thin dotted lines from specific quotes in Frame 2 to their assigned theme cluster in Frame 3 (traceability).
- Connector from Evidence Strength Matrix to Insight Cards (strength assessment references each insight).

## Example Content

All frames contain realistic pre-filled content from a hypothetical user research study on SaaS product onboarding. The research synthesizes 12 user interviews and identifies four key themes with two strong and two moderate insights, leading to four prioritized recommendations.

**Research Story**: The data team noticed a 23% funnel drop-off at the data connector step. The UX research team conducted 12 semi-structured interviews with recently signed-up users to understand why. The synthesis revealed that the barrier is largely psychological (fear of complexity) rather than technical, and that users want to see value before investing setup effort.

## Variations

1. **Usability Test Synthesis**: Replace Raw Quotes with Task Success/Failure observations. Add a "Severity Ratings" frame (Critical / Major / Minor / Cosmetic). Replace Evidence Strength with a SUS Score summary.
2. **Survey + Interview Triangulation**: Add a "Quantitative Context" frame showing survey results alongside qualitative quotes. Replace Evidence Strength with a "Triangulation Map" showing where qual and quant data converge.
3. **Competitive Research Synthesis**: Replace participant quotes with competitor observations. Themes become "Competitor Patterns." Insights become "Opportunities" and "Threats." Recommendations become "Strategic Responses."

## Build Instructions

1. Set board background to #FAFBFC and dimensions to 5500x4000px.
2. Create the Research Context Header (5300x400px) at the top with #006064 background.
3. Create a 3-column layout for the main area (Raw Quotes 1600px, Themes 1800px, Insights 1800px), each 2400px tall.
4. Populate Raw Quotes with color-coded stickies grouped by participant (each participant gets a unique color).
5. Build Theme Clusters as bordered group boxes with clustered quote stickies and summary notes.
6. Build Insight Cards as white cards with blue left border, bold insight statement, evidence text, and strength rating pill.
7. Create a 3-column bottom row (1600px, 1800px, 1800px), each 900px tall.
8. Build the Evidence Strength Matrix as a 2x2 quadrant with placed insight circles.
9. Build Recommendations as stacked priority cards with green (P0) and yellow (P1) backgrounds.
10. Build Next Steps as action stickies with owners and dates.
11. Draw all connectors: thick arrows for main flow, thin dotted for traceability.

## Tips & Best Practices

- **Quote verbatim**: Never paraphrase participant quotes. The raw words carry emotional weight that summaries strip away.
- **Count theme frequency**: Always note how many participants mentioned a theme (e.g., "9/12"). This prevents over-indexing on one articulate participant.
- **Separate insights from recommendations**: An insight is what you learned. A recommendation is what you suggest doing about it. Keep them in separate frames so stakeholders can evaluate each independently.
- **Rate evidence strength**: Not all findings are equally robust. The evidence matrix prevents the team from treating a single participant's opinion as a validated insight.
- **Link to recordings**: If you have interview recordings, add a small link icon on each participant's quote cluster that links to the video timestamp.
- **Present themes, not transcripts**: Stakeholders do not want to read 12 transcripts. Lead your readout with the Insight Cards, then drill into Theme Clusters for supporting evidence.
