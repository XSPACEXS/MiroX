# Content Guide — Customer Journey Boards

## Overview

The visual design of a customer journey board is the container. The content is the soul. A beautifully designed journey board with weak content — vague stages, generic pain points, missing data — is worse than a rough whiteboard sketch with real insights. This guide covers the domain knowledge, essential sections, real content examples, copywriting principles, and data visualization approaches that make customer journey boards genuinely useful.

---

## Essential Sections by Board Type

### Journey Map — Required Sections

Every journey map must include these sections. Omitting any one of them creates a blind spot.

| Section           | Purpose                                  | Content Type                                           |
| ----------------- | ---------------------------------------- | ------------------------------------------------------ |
| Persona Card      | Grounds the journey in a specific person | Demographics, goals, frustrations, tech profile, quote |
| Stage Definitions | Defines the temporal structure           | Stage name, duration, trigger, success criteria        |
| Actions Row       | What the customer does at each stage     | Observable behaviors, specific steps, sequences        |
| Touchpoints Row   | Where interactions happen                | Channel names, specific platforms, physical locations  |
| Thoughts Row      | What the customer is thinking            | Internal monologue, questions, assumptions             |
| Emotions Row      | What the customer feels                  | Emotion labels, intensity, emotion curve               |
| Pain Points Row   | Where the experience breaks              | Friction moments, failures, frustrations with data     |
| Opportunities Row | What could be improved                   | Specific improvements, how-might-we questions          |
| Key Metrics       | Quantitative evidence                    | Conversion rates, NPS, time-to-X, drop-off rates       |
| Priority Actions  | What to do next                          | Prioritized improvements with owners and timelines     |

### Empathy Map — Required Sections

| Section         | Purpose                             | Content Type                                           |
| --------------- | ----------------------------------- | ------------------------------------------------------ |
| Center Persona  | Who we are empathizing with         | Name, role, context, photo placeholder                 |
| Says Quadrant   | Direct quotes and observed language | Verbatim quotes from interviews, social posts, tickets |
| Thinks Quadrant | Internal beliefs and assumptions    | Inferred thoughts, worries, hopes, mental models       |
| Does Quadrant   | Observable behaviors                | Actions, workarounds, habits, sequences                |
| Feels Quadrant  | Emotional states                    | Named emotions, intensity levels, contradictions       |
| Insights Strip  | Synthesis of the four quadrants     | Key patterns, surprising findings, tensions            |

### Persona Board — Required Sections

| Section             | Purpose                   | Content Type                                      |
| ------------------- | ------------------------- | ------------------------------------------------- |
| Identity Header     | Who this person is        | Name, age, role, company, location, photo         |
| Demographics        | Statistical profile       | Income, education, family, career stage           |
| Tech Profile        | Digital context           | Tools used, comfort level, device preferences     |
| Goals               | What they want to achieve | 3-5 specific, measurable goals                    |
| Frustrations        | What blocks them          | 3-5 specific frustrations tied to context         |
| Day in the Life     | Typical day narrative     | Morning-to-evening timeline with activities       |
| Behaviors & Habits  | How they operate          | Information sources, decision patterns, routines  |
| Decision Drivers    | What influences choices   | Trust signals, risk tolerance, social proof needs |
| Key Quotes          | Their voice               | 3-5 direct research quotes                        |
| Design Implications | What this means for us    | Specific product/service design requirements      |

### Touchpoint Analysis — Required Sections

| Section               | Purpose                                  | Content Type                             |
| --------------------- | ---------------------------------------- | ---------------------------------------- |
| Channel-Stage Matrix  | Satisfaction scores at each intersection | Numerical scores (1-5) with color coding |
| Score Annotations     | Context behind the numbers               | Qualitative notes explaining each score  |
| Channel Averages      | Overall channel performance              | Weighted averages across stages          |
| Stage Averages        | Overall stage performance                | Weighted averages across channels        |
| Priority Improvements | Ranked action items                      | Sorted by impact, with effort estimate   |
| Heatmap Legend        | Score interpretation guide               | Color-to-score mapping with definitions  |

---

## Real Content Examples

### Example 1: SaaS Product Journey — Stage Content

**Stage: Consideration (Week 2-4)**

Actions:

- "Visits pricing page 3 times over 2 weeks, always on Tuesday mornings"
- "Downloads the 'Project Management Buyer's Guide' PDF (14 pages)"
- "Starts a free trial, creates one project called 'Test Project'"
- "Invites 2 colleagues (her direct reports) to try the tool together"
- "Watches the '5-minute Product Tour' video twice — pauses at the Gantt chart feature"

Touchpoints:

- Website pricing page (organic, direct navigation)
- Email nurture sequence (3 emails over 10 days)
- In-app onboarding wizard (5-step flow)
- Help center article: "How to Import from Spreadsheets"
- Colleague's Slack message: "Hey, this is actually pretty good"

Thoughts:

- "Is this really going to work for 4 departments or is it just good for small teams?"
- "The pricing per-seat model worries me — at 150 people, this gets expensive fast"
- "I wonder if I can get IT to approve this without a formal procurement process"
- "My boss will ask about integrations with our existing Jira setup"

Emotions:

- Cautious optimism (3.5/5) — "I want this to work"
- Mild anxiety about pricing (2.5/5) — "This could blow our budget"
- Excitement when she sees the Gantt view (4.5/5) — "THIS is what I've been looking for"
- Frustration with the import process (2.0/5) — "Why can't I just drag in my spreadsheet?"

Pain Points:

- The spreadsheet import requires CSV formatting — no direct Excel support
- Pricing calculator is hidden behind a "Contact Sales" gate for teams over 50
- The free trial limits the number of projects to 3, making realistic testing impossible
- No comparison page against Jira (her boss's likely question)

Opportunities:

- Add direct Excel import with column mapping — removes the #1 friction point
- Surface pricing calculator for all team sizes without gating — builds trust
- Increase trial limit to 10 projects OR remove the limit with a 14-day window
- Create a "Switching from Jira" landing page with feature comparison table

### Example 2: E-Commerce Journey — Emotional Moments

**Key Emotion Data Points (for emotion curve)**:

| Stage         | Score | Label      | Evidence                                                          |
| ------------- | ----- | ---------- | ----------------------------------------------------------------- |
| Awareness     | 3.5   | Curious    | "Hmm, I've seen this brand a few times on Instagram"              |
| Browsing      | 4.0   | Engaged    | Session duration 8.2 min avg (3x industry norm)                   |
| Product Page  | 4.5   | Excited    | "These reviews are really convincing. I want this."               |
| Cart Add      | 4.2   | Committed  | Cart-to-checkout rate: 67%                                        |
| Checkout      | 2.5   | Frustrated | "Why do I need to create an account?" Avg form time: 4.2 min      |
| Payment       | 2.0   | Anxious    | "I don't recognize this payment processor. Is this safe?"         |
| Confirmation  | 3.8   | Relieved   | "Okay, order confirmed. But when does it ship?"                   |
| Waiting       | 2.8   | Impatient  | Only 1 tracking email. "Where is my order?" support tickets spike |
| Delivery      | 4.5   | Delighted  | Unboxing experience rated 4.7/5 on surveys                        |
| Post-Purchase | 3.0   | Abandoned  | No follow-up for 30 days. 78% never purchase again                |

### Example 3: Empathy Map — B2B Buyer

**Persona**: David Kang, 41, VP of Engineering, 300-person startup, evaluating a DevOps platform.

**Says**:

- "We need something that scales. We've outgrown our current setup."
- "I don't have time to evaluate 15 tools. Just show me the top 3."
- "My team is already drowning. I can't ask them to learn something complex."
- "The last tool we bought was a disaster. I can't afford to get this wrong."
- "If it doesn't integrate with GitHub, it's a non-starter."
- (In Slack to his team): "Anyone used [Product]? Honest thoughts?"

**Thinks**:

- "If I choose wrong, it reflects badly on me. I'm already under pressure."
- "The enterprise sales process is going to be painful. I hate procurement."
- "I wish I could just talk to another VP of Engineering who's been through this."
- "The demo looked great, but demos always look great. What about the real thing?"
- "My CTO will want to know about security compliance. I need SOC 2 docs."

**Does**:

- Reads G2 reviews filtered to "enterprise" and "engineering teams"
- Asks 3 colleagues in his YC alumni network for recommendations
- Creates a private Notion page comparing 4 options across 12 criteria
- Requests POC (proof of concept) deployment, allocates 2 engineers for 1 week
- Schedules 3 vendor demos in a single week to compare back-to-back

**Feels**:

- Pressure — "This decision affects 80 engineers' daily workflow"
- Skepticism — "Every vendor claims they're the best. I've been burned before."
- Impatience — "I need to decide by end of quarter. The clock is ticking."
- Vulnerability — "I don't know this space as deeply as my team does. I'm relying on their judgment."
- Relief (when finding a clear winner) — "Finally, one tool that checks every box."

### Example 4: Persona Board — Healthcare Patient

**Name**: Maria Gonzalez, 58
**Role**: Retired teacher, manages Type 2 diabetes
**Location**: San Antonio, TX
**Family**: Lives with husband, two adult children in other states

**Goals**:

1. Keep her A1C below 7.0 without adding more medications
2. Understand her lab results without feeling talked down to
3. Communicate with her doctor between appointments without playing phone tag
4. Track her blood sugar, diet, and exercise in one place

**Frustrations**:

1. "The patient portal is impossible to navigate. I have to call my daughter for help."
2. "I got my lab results back and half the numbers mean nothing to me."
3. "Every time I call the office, I'm on hold for 20 minutes."
4. "My insurance changed my medication and nobody told me why."

**Day in the Life**:

- 6:30 AM — Checks blood sugar (fasting). Writes it in a paper notebook.
- 7:00 AM — Breakfast. Tries to follow the meal plan her nutritionist gave her.
- 9:00 AM — Walks 30 minutes in the neighborhood. Tracks steps on her phone.
- 10:30 AM — Tries to log into the patient portal to check lab results. Fails. Calls the office.
- 11:00 AM — On hold for 15 minutes. Speaks to a nurse who reads results over the phone.
- 2:00 PM — Takes afternoon medications. Can't remember if she took the morning ones.
- 4:00 PM — Video calls her daughter, who helps her understand the lab numbers.
- 8:00 PM — Checks blood sugar (post-dinner). Writes it in the notebook. Goes to bed.

**Key Quote**: "I'm not stupid — I taught high school for 30 years. But this health system treats me like I can't learn. Just explain it to me in plain English."

---

## Copywriting Principles

### 1. Write in the Customer's Voice, Not Your Organization's

**Bad**: "Customer encounters friction in the onboarding flow due to suboptimal UX patterns in the wizard component."

**Good**: "Rachel clicks 'Next' but nothing happens. She clicks again. Still nothing. She refreshes the page and loses all her progress. She mutters 'Are you kidding me?' and considers going back to spreadsheets."

The first version is an internal diagnosis. The second is a lived experience. Journey boards should read like the second.

### 2. Be Specific About Numbers

**Bad**: "Many customers drop off at this stage."

**Good**: "47% of free trial users never create a second project. Of those who leave, 62% cite 'too complex to set up' in the exit survey."

Numbers create credibility and urgency. They also make it possible to measure improvement later.

### 3. Use Direct Quotes Liberally

Every stage should include at least one direct customer quote. These quotes:

- Come from real research (interviews, surveys, support tickets, social media)
- Are attributed (persona name, or "Interview #14")
- Are italicized and visually distinct
- Capture emotion, not just information

### 4. Pain Points Need Severity and Evidence

**Weak pain point**: "Checkout process is too long."

**Strong pain point**: "CRITICAL: Checkout requires 7 form fields plus account creation. Average completion time: 4.2 minutes. Cart abandonment rate: 73%. Exit survey top reason: 'I just wanted to buy one thing.' Estimated annual revenue loss: $2.4M."

A strong pain point includes: severity label, quantification, customer voice, and business impact.

### 5. Opportunities Need Specificity and Ownership

**Weak opportunity**: "Improve the checkout experience."

**Strong opportunity**: "Implement guest checkout (no account required). Expected impact: reduce abandonment by 25-35% based on Baymard Institute benchmarks. Owner: Emily Chen (Product). Target: Q2 sprint 3. Effort: Medium (2-week engineering sprint)."

---

## Questions Each Board Must Answer

### Journey Map Must Answer:

1. Who is this customer? (Persona)
2. What triggers their journey? (Awareness catalyst)
3. What do they do at each stage? (Actions)
4. Where do they interact with us? (Touchpoints)
5. How do they feel throughout? (Emotions)
6. Where does the experience break? (Pain points)
7. What evidence supports these findings? (Data)
8. What should we do about it? (Priorities)
9. Who owns each improvement? (Accountability)
10. How will we know it worked? (Metrics)

### Empathy Map Must Answer:

1. What does this person literally say out loud? (Says)
2. What are they thinking but not saying? (Thinks)
3. What observable behaviors do they exhibit? (Does)
4. What emotions are they experiencing? (Feels)
5. What contradictions exist between quadrants? (Tensions)
6. What insights emerge from the synthesis? (So what?)

### Persona Board Must Answer:

1. Who is this person in concrete terms? (Identity)
2. What context shapes their decisions? (Environment)
3. What are they trying to accomplish? (Goals)
4. What stands in their way? (Frustrations)
5. How do they spend their time? (Day in the life)
6. How do they make decisions? (Drivers)
7. What does this mean for our design? (Implications)

### Touchpoint Analysis Must Answer:

1. Which channels do we use at each stage? (Coverage)
2. How satisfied are customers at each intersection? (Performance)
3. Which intersections are critically failing? (Red zones)
4. Which channels are strongest overall? (Strengths)
5. Which stages are weakest overall? (Vulnerabilities)
6. What should we fix first, second, third? (Priorities)

---

## Data Visualization on Journey Boards

### Emotion Curves

The emotion curve is the primary data visualization. Best practices:

- Use a 1-5 scale (1 = extremely negative, 5 = extremely positive, 3 = neutral)
- Plot one point per stage, connected by smooth curves
- Color the line green above 3.0 and coral below 3.0
- Label each point with both the score and the emotion word
- Mark the highest and lowest points with emphasis

### Metric Callouts

At each stage, include 1-2 key metrics as prominent callout boxes:

```
+--------------------+
|  Conversion Rate   |
|      67.3%         |
|  vs. 52% industry  |
+--------------------+
```

### Heatmap Scoring (Touchpoint Matrix)

Use background color fills to create an instant visual map:

- 4.5-5.0: Deep green (#1B5E20) — Excellent
- 3.5-4.4: Light green (#66BB6A) — Good
- 2.5-3.4: Amber (#FFA726) — Needs attention
- 1.5-2.4: Orange red (#E64A19) — Poor
- 1.0-1.4: Deep red (#B71C1C) — Critical

### Pain Point Severity Scale

Categorize pain points visually by severity:

- **Critical** (red border, red badge): Causes churn, >$100K annual impact
- **High** (orange border, orange badge): Significant friction, >$50K impact
- **Medium** (yellow border, yellow badge): Notable annoyance, measurable impact
- **Low** (gray border, no badge): Minor friction, cosmetic

---

## Common Content Mistakes

### 1. Generic Stages

"Awareness → Consideration → Purchase" is a starting framework, not finished content. Customize stages to your actual customer journey. A B2B SaaS journey might be: "Problem Recognition → Vendor Research → Trial & Evaluation → Internal Advocacy → Purchase & Procurement → Onboarding & Activation."

### 2. Missing the "Backstage"

If the board only shows what happens to the customer but not what the organization does (or fails to do), it diagnoses problems without revealing root causes. Include internal handoffs, system transitions, and ownership gaps.

### 3. Equal Depth Across Stages

Not every stage deserves the same depth. The "Onboarding" stage of a SaaS product might have 15 touchpoints and 8 pain points, while "Awareness" might have 4 touchpoints and 2 pain points. Let the depth reflect reality.

### 4. Opportunities Without Evidence

Every opportunity should be supported by either customer evidence (quotes, data) or industry benchmarks. "We should improve the checkout" is an opinion. "Guest checkout reduces abandonment by 25-35% (Baymard Institute, n=4,560)" is a supported recommendation.

### 5. No Versioning

Journey boards should be living documents. Always include: version number, date last updated, data sources, and methodology. A journey map based on 24 interviews conducted in Q1 2026 is fundamentally different from one based on 6 interviews from 2024.

---

## Content Templates

### Stage Definition Template

```
Stage: [Name]
Duration: [Typical timeframe]
Trigger: [What initiates this stage]
Success Criteria: [How we know the customer has moved to the next stage]
Key Metric: [The most important number for this stage]
```

### Pain Point Template

```
Severity: [Critical / High / Medium / Low]
Description: [What happens, specifically]
Evidence: [Quote, metric, or observation]
Impact: [Business cost or customer harm]
Root Cause: [Why this happens — internal process, system, or design]
```

### Opportunity Template

```
Opportunity: [Specific improvement]
Addresses: [Which pain point(s)]
Expected Impact: [Metric improvement + confidence level]
Effort: [Low / Medium / High, with time estimate]
Owner: [Name and team]
Target Date: [Sprint, quarter, or date]
```
