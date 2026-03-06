# OKR Planning

## Overview

- **Purpose**: Visualize an OKR (Objectives and Key Results) hierarchy that cascades from company-level objectives down through team objectives to individual key results with progress tracking. The board makes strategic alignment visible, showing how every team's work connects to top-level company goals. It includes progress indicators, confidence levels, and a scoring system for end-of-quarter reviews.
- **Best For**: Leadership teams setting quarterly goals, team leads aligning their work to company strategy, HR/people teams tracking organizational performance, startups building a goal-setting discipline, coaches facilitating OKR workshops
- **Complexity**: Medium
- **Board Size**: 5500x4000px (wide and tall to accommodate multi-level OKR tree)

## Color Scheme

| Role                | Color      | Hex     |
| ------------------- | ---------- | ------- |
| Primary             | Deep Navy  | #0D47A1 |
| Company OKRs        | Violet     | #6A1B9A |
| Product Team        | Teal       | #00796B |
| Engineering Team    | Steel Blue | #1565C0 |
| Marketing Team      | Amber      | #F9A825 |
| Sales Team          | Coral      | #E64A19 |
| On Track (0.7-1.0)  | Emerald    | #2E7D32 |
| At Risk (0.4-0.6)   | Orange     | #EF6C00 |
| Off Track (0.0-0.3) | Crimson    | #C62828 |
| Background          | Warm Gray  | #F5F5F0 |
| Text                | Charcoal   | #212121 |
| Connector Lines     | Slate      | #546E7A |

## Board Layout

The board uses a top-down tree structure. Company objectives sit at the top level. Team objectives branch below, each containing their key results. A scoring legend and quarterly review section sit on the sides.

```
+--------------------------------------------------------------------------+
|                    QUARTER HEADER & CONTEXT                               |
+--------------------------------------------------------------------------+
|                                                                          |
|              [Company Objective 1]      [Company Objective 2]            |
|              /        |        \        /        |        \              |
|         [Product]  [Eng]  [Marketing] [Sales]  [Eng]  [Product]          |
|          /  |  \    / | \    / | \     / | \                             |
|        KR1 KR2 KR3 KR1 KR2  KR1 KR2  KR1 KR2                          |
|                                                                          |
+-------------------+------------------------------------------------------+
| SCORING LEGEND    |           QUARTERLY REVIEW                            |
+-------------------+------------------------------------------------------+

Positions:
  Header:       (50, 50) to (5450, 250)
  Company OKRs: (50, 300) to (5450, 1000)
  Team OKRs:    (50, 1050) to (5450, 2800)
  Key Results:  (within team OKR frames)
  Legend:        (50, 2900) to (1200, 3950)
  Review:        (1300, 2900) to (5450, 3950)
```

## Frames & Sections

### Frame 0: Quarter Header

- **Position**: Top, full width
- **Size**: 5400x200px
- **Background**: Deep Navy (#0D47A1)
- **Elements**:
  - Quarter label: "Q2 2026 OKRs — CloudSync Pro" (font 26, bold, white)
  - Date range: "April 1 — June 30, 2026" (font 14, #B0BEC5)
  - Overall health: "QUARTER HEALTH: ON TRACK" (pill badge, Emerald background, white text)
  - Week indicator: "Week 3 of 13" (font 13, #B0BEC5, right-aligned)
  - Progress bar: 23% (Emerald fill on white track)

### Frame 1: Company Objective 1

- **Position**: Top row, left half
- **Size**: 2650x700px
- **Background**: Violet tint (#F3E5F5) with Violet top border (5px, #6A1B9A)
- **Elements**:
  - Objective label: "COMPANY OBJECTIVE 1" (font 11, uppercase, Violet #6A1B9A)
  - Objective text: "Establish CloudSync as the #1 project management tool for SMB teams by delivering unmatched value and experience" (font 18, bold, #212121)
  - Owner: "CEO: Marcus Chen" (font 12, #616161)
  - Confidence: 7/10 (displayed as filled circles)
  - Status badge: "ON TRACK" (Emerald pill)
  - **Company Key Results** (3 KR cards within the frame):
    1. KR1: "Increase Net Revenue Retention from 112% to 125%" | Current: 116% | Progress: 31% | Status: On Track (green bar)
    2. KR2: "Grow active users from 12,000 to 18,000" | Current: 13,200 | Progress: 20% | Status: On Track (green bar)
    3. KR3: "Achieve customer NPS of 70 (currently 62)" | Current: 64 | Progress: 25% | Status: At Risk (orange bar)

### Frame 2: Company Objective 2

- **Position**: Top row, right half
- **Size**: 2650x700px
- **Background**: Violet tint (#F3E5F5) with Violet top border (5px, #6A1B9A)
- **Elements**:
  - Objective label: "COMPANY OBJECTIVE 2" (font 11, uppercase, Violet #6A1B9A)
  - Objective text: "Build the foundation for enterprise market entry by achieving security certification and closing 10 enterprise deals" (font 18, bold, #212121)
  - Owner: "CTO: Priya Sharma" (font 12, #616161)
  - Confidence: 5/10
  - Status badge: "AT RISK" (Orange pill)
  - **Company Key Results** (3 KR cards):
    1. KR1: "Obtain SOC 2 Type II certification by June 30" | Current: Audit Phase 1 complete | Progress: 40% | Status: At Risk (orange bar)
    2. KR2: "Close 10 enterprise deals (>$50K ACV)" | Current: 3 closed, 4 in pipeline | Progress: 30% | Status: On Track (green bar)
    3. KR3: "Reduce average enterprise sales cycle from 90 days to 60 days" | Current: 82 days | Progress: 27% | Status: At Risk (orange bar)

### Frame 3: Product Team OKRs

- **Position**: Second row, first quarter
- **Size**: 1300x1750px
- **Background**: White with Teal left border (5px, #00796B)
- **Elements**:
  - Team header: "Product Team" (font 18, bold, Teal #00796B)
  - Team members: "Jordan (PM), Lisa (Analyst)" (font 11, #616161)
  - **Team Objective A** (connected to Company Obj 1):
    - "Launch self-service subscription management that achieves 60% onboarding completion"
    - Owner: Jordan
    - Confidence: 8/10
    - Key Results:
      1. "Ship subscription upgrade/downgrade flow to 100% of users by May 15" | Progress: 15% | Status: On Track
      2. "Achieve 60% onboarding completion rate (from 34%)" | Progress: 10% | Status: On Track
      3. "Reduce subscription-related support tickets from 240/month to 100/month" | Progress: 0% | Status: Not Started
  - **Team Objective B** (connected to Company Obj 2):
    - "Define and validate the enterprise product requirements package"
    - Owner: Lisa
    - Confidence: 6/10
    - Key Results:
      1. "Complete 20 enterprise prospect interviews by May 31" | Progress: 35% (7 of 20) | Status: On Track
      2. "Publish enterprise product requirements document by June 15" | Progress: 10% | Status: On Track
      3. "Validate requirements with 5 enterprise design partners" | Progress: 0% | Status: Not Started

### Frame 4: Engineering Team OKRs

- **Position**: Second row, second quarter
- **Size**: 1300x1750px
- **Background**: White with Steel Blue left border (5px, #1565C0)
- **Elements**:
  - Team header: "Engineering Team" (font 18, bold, Steel Blue #1565C0)
  - Team members: "Alex, Ravi, Maria" (font 11, #616161)
  - **Team Objective A** (connected to Company Obj 1):
    - "Deliver a performant, reliable subscription management system"
    - Owner: Alex
    - Confidence: 7/10
    - Key Results:
      1. "Complete all subscription API endpoints with 95% test coverage by May 22" | Progress: 20% | Status: On Track
      2. "Achieve < 200ms p95 latency for all subscription operations" | Progress: 0% | Status: Not Started
      3. "Zero critical bugs in subscription flow for 2 consecutive weeks before launch" | Progress: 0% | Status: Not Started
  - **Team Objective B** (connected to Company Obj 2):
    - "Implement enterprise-grade security and compliance infrastructure"
    - Owner: Maria
    - Confidence: 5/10
    - Key Results:
      1. "Pass SOC 2 Type II external audit with zero critical findings" | Progress: 40% | Status: At Risk
      2. "Deploy SSO integration supporting Okta, Azure AD, and Google Workspace" | Progress: 30% | Status: On Track
      3. "Implement comprehensive audit logging covering 100% of data access events" | Progress: 15% | Status: On Track

### Frame 5: Marketing Team OKRs

- **Position**: Second row, third quarter
- **Size**: 1300x1750px
- **Background**: White with Amber left border (5px, #F9A825)
- **Elements**:
  - Team header: "Marketing Team" (font 18, bold, Amber #F9A825)
  - Team members: "Mike (PMM), Dana (Content)" (font 11, #616161)
  - **Team Objective** (connected to Company Obj 1):
    - "Drive awareness and adoption that contributes to 6,000 new user signups this quarter"
    - Owner: Mike
    - Confidence: 6/10
    - Key Results:
      1. "Generate 6,000 new trial signups (from organic + paid channels)" | Progress: 22% (1,320 signups) | Status: On Track
      2. "Publish 12 blog posts and 3 webinars driving 25,000 organic visits/month" | Progress: 25% (3 posts, 1 webinar) | Status: On Track
      3. "Launch referral program achieving 15% of new signups from referrals (from 12%)" | Progress: 10% | Status: At Risk
      4. "Produce 6 customer case studies for enterprise sales enablement" | Progress: 17% (1 of 6) | Status: On Track

### Frame 6: Sales Team OKRs

- **Position**: Second row, fourth quarter
- **Size**: 1300x1750px
- **Background**: White with Coral left border (5px, #E64A19)
- **Elements**:
  - Team header: "Sales Team" (font 18, bold, Coral #E64A19)
  - Team members: "Tom (VP Sales), 2 SDRs, 1 AE" (font 11, #616161)
  - **Team Objective** (connected to Company Obj 2):
    - "Build a repeatable enterprise sales motion and close 10 enterprise deals"
    - Owner: Tom
    - Confidence: 5/10
    - Key Results:
      1. "Close 10 enterprise deals with >$50K ACV" | Progress: 30% (3 closed) | Status: On Track
      2. "Build enterprise pipeline of $2M in qualified opportunities" | Progress: 45% ($900K) | Status: On Track
      3. "Reduce enterprise sales cycle from 90 to 60 days" | Progress: 27% (82 days current) | Status: At Risk
      4. "Achieve 30% win rate on enterprise deals (from 18%)" | Progress: 15% (21% current) | Status: At Risk

### Frame 7: Scoring Legend

- **Position**: Bottom-left
- **Size**: 1150x1050px
- **Background**: White with Navy border (2px, #0D47A1)
- **Elements**:
  - Header: "OKR Scoring Guide" (font 18, bold, #0D47A1)
  - **Score scale**:
    - 0.0-0.3: "Off Track" (Crimson badge) — "Significant miss. Need to understand root cause and adjust."
    - 0.4-0.6: "At Risk" (Orange badge) — "Below target but recoverable. Requires intervention."
    - 0.7-0.8: "On Track" (Emerald badge) — "Healthy progress. This is the sweet spot."
    - 0.9-1.0: "Exceeded" (Blue badge) — "Fully achieved or exceeded. Were the OKRs ambitious enough?"
  - **Scoring rules**:
    - "Score at the END of the quarter, not during"
    - "A healthy organization scores 0.6-0.8 on average"
    - "Scoring 1.0 on everything means your OKRs weren't ambitious enough"
    - "Scoring below 0.4 consistently means misalignment or resourcing issues"
  - **Confidence scale** (1-10):
    - "1-3: Low confidence. Major unknowns or blockers."
    - "4-6: Medium confidence. Some risks to manage."
    - "7-9: High confidence. Clear path forward."
    - "10: Certain. Already virtually done (too easy?)."

### Frame 8: Quarterly Review

- **Position**: Bottom-right, spanning most of width
- **Size**: 4150x1050px
- **Background**: White with Violet top border (4px, #6A1B9A)
- **Elements**:
  - Header: "Q2 2026 — Mid-Quarter Review (Week 3)" (font 18, bold, Violet #6A1B9A)
  - **Summary table**:
    | Objective | Owner | Confidence | Status | Notes |
    |-----------|-------|-----------|--------|-------|
    | Company Obj 1: SMB #1 | Marcus | 7/10 | On Track | NPS improvement is the biggest risk |
    | Company Obj 2: Enterprise | Priya | 5/10 | At Risk | SOC 2 audit timeline is tight |
    | Product: Subscription | Jordan | 8/10 | On Track | Sprint 14 starts on schedule |
    | Product: Enterprise Reqs | Lisa | 6/10 | On Track | Need to accelerate interviews |
    | Engineering: Subscription | Alex | 7/10 | On Track | API work started; frontend blocked on design |
    | Engineering: Security | Maria | 5/10 | At Risk | Auditor availability may delay |
    | Marketing: Growth | Mike | 6/10 | On Track | Referral program launch delayed 2 weeks |
    | Sales: Enterprise | Tom | 5/10 | At Risk | Pipeline healthy but win rate needs improvement |
  - **Key decisions from review**:
    1. "Allocate additional engineering support to SOC 2 audit — move Ravi to assist Maria for 2 weeks"
    2. "Sales team to pilot new demo format to improve win rate — A/B test starting Week 5"
    3. "Marketing to prioritize case studies over blog posts to support enterprise sales motion"
  - **Next review**: "Mid-Quarter Review #2: Week 7 (May 12)" (font 12, bold)

## Connectors & Flow

**Hierarchy connectors** (solid lines, Slate #546E7A, 2px, arrows pointing down):

1. Company Obj 1 --> Product Team Obj A (labeled "drives")
2. Company Obj 1 --> Engineering Team Obj A (labeled "drives")
3. Company Obj 1 --> Marketing Team Obj (labeled "drives")
4. Company Obj 2 --> Product Team Obj B (labeled "drives")
5. Company Obj 2 --> Engineering Team Obj B (labeled "drives")
6. Company Obj 2 --> Sales Team Obj (labeled "drives")

**Cross-team dependencies** (dashed lines, Orange #EF6C00, 1px):

1. Product Team KR "Ship subscription flow" --> Engineering Team KR "Complete API endpoints" (labeled "depends on")
2. Engineering Team KR "SOC 2 audit" --> Sales Team KR "Close enterprise deals" (labeled "enables")
3. Marketing Team KR "Case studies" --> Sales Team KR "Win rate improvement" (labeled "supports")

**Status flow** (color-coded progress bars within each KR):

- Green fill = percentage complete
- Background = remaining percentage
- Border color matches status (green/orange/red)

## Example Content

The OKR board maps Q2 2026 goals for CloudSync Pro. The two company-level objectives represent the dual strategic priorities: strengthening the SMB core business (Obj 1) and building the enterprise foundation (Obj 2).

**OKR cadence**:

- OKRs set in last week of Q1 during planning workshop
- Weekly check-ins: team leads update progress and confidence scores every Monday
- Mid-quarter reviews: Weeks 3, 7, and 10. Full team discussion of progress and course corrections
- End-of-quarter scoring: Week 13. Score all KRs, reflect, and feed into Q3 planning

**Alignment narrative**:

- Company Obj 1 (SMB leadership) cascades to Product (build features), Engineering (deliver reliably), and Marketing (drive growth)
- Company Obj 2 (enterprise entry) cascades to Product (validate needs), Engineering (build security), and Sales (close deals)
- No team works in isolation — every team objective traces to a company objective

## Variations

1. **Individual OKRs**: Add a third level below team OKRs showing individual contributor objectives. Each person has 1-2 objectives with 2-3 KRs. Useful for performance conversations but can feel heavy — use judiciously.

2. **Annual OKR Roadmap**: Show 4 quarters side by side (Q1-Q4). Each quarter has its company objectives. Connectors show how Q1 outcomes inform Q2 OKRs, creating a strategic narrative. Good for board presentations.

3. **OKR + Initiatives Mapping**: Below each KR, list the specific projects/initiatives that contribute to achieving it. This bridges the gap between OKRs (outcomes) and roadmap (outputs). Connects to the Roadmap template.

4. **Startup OKRs (Simplified)**: Single company objective with 3-5 key results. No team breakdown (team is too small). Add a "Bets" section listing the experiments or initiatives the team is running to hit each KR. More action-oriented.

## Build Instructions

1. **Create canvas**: 5500x4000px, background #F5F5F0.
2. **Build quarter header**: Full-width frame (5400x200px). Navy background. Add quarter label, health badge, week indicator, and progress bar.
3. **Create company objective frames**: Two frames side by side (2650x700px each). Violet tint background. Add objective text, owner, confidence score, and 3 KR cards with progress bars.
4. **Create team OKR frames**: Four frames in a row (1300x1750px each). White with colored left borders. Each contains a team header, team objective(s), and key results with progress indicators.
5. **Build scoring legend**: Bottom-left frame (1150x1050px). Add score scale with color-coded badges and scoring rules.
6. **Build quarterly review**: Bottom-right frame (4150x1050px). Add summary table, key decisions, and next review date.
7. **Draw hierarchy connectors**: Solid Slate lines from company objectives down to team objectives.
8. **Draw cross-team dependencies**: Dashed Orange lines between dependent key results across teams.
9. **Add progress visualizations**: For each KR, create a horizontal progress bar showing current vs. target. Color the bar based on status.
10. **Review**: Verify every team objective connects to a company objective. Check that KR metrics are specific and measurable. Confirm progress percentages are mathematically correct.

## Tips & Best Practices

- **Objectives are qualitative and inspiring; Key Results are quantitative and measurable**: "Delight our customers" is an objective. "Achieve NPS of 70" is a key result. Never confuse the two.
- **3-5 KRs per objective maximum**: More than 5 means the objective is too broad. Split it.
- **KRs should be outcomes, not outputs**: "Ship feature X" is an output. "Reduce support tickets by 40%" is an outcome. OKRs measure impact, not effort.
- **Update confidence weekly, score quarterly**: Confidence is a forward-looking indicator updated frequently. Scoring is a backward-looking assessment done once at quarter end.
- **0.7 is success**: Google's OKR philosophy says achieving 70% of an ambitious target is a win. Set stretch goals and celebrate 0.7.
- **Alignment lines should be sparse**: If every team objective connects to every company objective, the alignment is fake. Each team should have 1-2 clear connections.
- **Use mid-quarter reviews to course-correct, not blame**: The review is about "what do we need to change?" not "who failed?" Focus on actions, not judgments.
- **OKRs are not performance reviews**: Do not tie compensation directly to OKR scores. This incentivizes sandbagging instead of ambition.
