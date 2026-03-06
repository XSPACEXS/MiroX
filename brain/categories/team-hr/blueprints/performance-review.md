# Performance Review Framework

## Overview

- **Purpose**: A structured performance review board for conducting thorough evaluations — reviewing goals and OKRs, assessing competencies, gathering multi-directional feedback, building a development plan, and mapping a career growth path. Designed to make the review conversation productive and forward-looking rather than backward-looking and bureaucratic.
- **Best For**: People managers conducting annual or semi-annual reviews, HR business partners facilitating calibration, employees preparing self-assessments, and leaders designing performance management systems.
- **Complexity**: Advanced
- **Board Size**: 5200 x 3600px

## Color Scheme

| Role        | Color          | Hex     |
| ----------- | -------------- | ------- |
| Primary     | Corporate Blue | #1565C0 |
| Goals/OKR   | Sage Green     | #2E7D32 |
| Competency  | Deep Purple    | #7B1FA2 |
| Feedback    | Warm Amber     | #EF6C00 |
| Development | Dark Teal      | #00695C |
| Career      | Rich Purple    | #7B1FA2 |
| Alert       | Signal Red     | #D32F2F |
| Highlight   | Warm Gold      | #F9A825 |
| Background  | Soft White     | #FAFAFA |
| Text        | Charcoal       | #212121 |

## Board Layout

The board flows left to right through the review process: past performance assessment (left), current competency evaluation (center), and forward-looking development and career planning (right).

```
+------------------------------------------------------------------------+
|              HEADER: Performance Review — [Employee Name]                |
+------------------------------------------------------------------------+
|  Frame 1:              |  Frame 3:              |  Frame 5:             |
|  Goals / OKR           |  Feedback               |  Development          |
|  Review                |  360-Degree             |  Plan                 |
|  (Past Period)         |  Summary                |  (Next 6-12 Months)   |
|                        |                         |                       |
+------------------------+-------------------------+-----------------------+
|  Frame 2:              |  Frame 4:              |  Frame 6:             |
|  Competency            |  Overall               |  Career               |
|  Assessment            |  Rating &              |  Growth               |
|  Matrix                |  Manager Summary       |  Path                 |
|                        |                         |                       |
+------------------------+-------------------------+-----------------------+
```

## Frames & Sections

### Header

- **Position**: Top, full-width
- **Size**: 5200 x 180px
- **Background**: #1565C0
- **Elements**:
  - Text block: "Performance Review: Alex Kim — Senior Product Designer" (font size 28, bold, white)
  - Text block: "Review Period: July 1, 2025 — December 31, 2025 (H2 2025) | Review Type: Semi-Annual" (font size 14, #B3D4FC)
  - Text block: "Manager: Mia Chen, Head of Design | Reviewer: David Kim, VP People | Date: January 22, 2026" (font size 13, #B3D4FC)
  - Text block: "Confidential — Do not share outside of the review participants" (font size 11, italic, #FFCDD2)

### Frame 1: Goals / OKR Review

- **Position**: Top-left
- **Size**: 1650 x 1400px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "H2 2025 Goals & OKR Review" (font size 24, bold, #2E7D32)
  - Text block: "Review each goal against its success criteria. Rate: Exceeded | Met | Partially Met | Not Met" (font size 12, #6D6D6D)
  - **Goal 1** (card, #FFFFFF fill, #2E7D32 left border):
    - Text: "Goal 1: Ship the Checkout Redesign" (font size 16, bold)
    - Text: "KR1: Complete user research (5 interviews, 3 usability tests) by Aug 15" (font size 12)
    - Shape: Green badge "EXCEEDED" — "Completed 7 interviews and 5 usability tests. Research insights directly influenced the final design."
    - Text: "KR2: Ship final designs to engineering by Sep 30" (font size 12)
    - Shape: Green badge "MET" — "Shipped on Sep 28. No rework needed — engineering praised the spec quality."
    - Text: "KR3: Achieve 15% conversion rate improvement within 60 days of launch" (font size 12)
    - Shape: Green badge "EXCEEDED" — "Achieved 22% conversion improvement. Best-performing design change of H2."
  - **Goal 2** (card, #FFFFFF fill, #2E7D32 left border):
    - Text: "Goal 2: Mentor Junior Designer (Sam Parker)" (font size 16, bold)
    - Text: "KR1: Conduct weekly 1:1 mentoring sessions throughout H2" (font size 12)
    - Shape: Green badge "MET" — "25 of 26 weeks completed. Missed one due to PTO (communicated in advance)."
    - Text: "KR2: Sam independently leads a design project by Q4" (font size 12)
    - Shape: Green badge "MET" — "Sam led the Notifications redesign in Nov-Dec with Alex as advisor (not doer)."
  - **Goal 3** (card, #FFFFFF fill, #EF6C00 left border):
    - Text: "Goal 3: Establish Design System Component Library v2" (font size 16, bold)
    - Text: "KR1: Audit all existing components and document gaps by Aug 31" (font size 12)
    - Shape: Green badge "MET" — "Audit completed Aug 22. Identified 34 components needing updates."
    - Text: "KR2: Deliver 20 updated components by Dec 31" (font size 12)
    - Shape: Yellow badge "PARTIALLY MET" — "Delivered 14 of 20 components. Remaining 6 blocked by engineering migration to new front-end framework. Communicated blocker in Oct."
    - Text: "KR3: 80% adoption across product teams by Dec 31" (font size 12)
    - Shape: Yellow badge "PARTIALLY MET" — "72% adoption achieved. Two teams still on legacy components. Adoption plan in place for Q1 2026."
  - **Goal 4** (card, #FFFFFF fill, #2E7D32 left border):
    - Text: "Goal 4: Improve Cross-Functional Collaboration Score" (font size 16, bold)
    - Text: "KR1: Attend 100% of sprint planning and retro meetings with product squads" (font size 12)
    - Shape: Green badge "MET" — "100% attendance. Engineering lead Raj specifically called out Alex's reliability."
    - Text: "KR2: Achieve 4.5+ rating in quarterly cross-functional feedback survey" (font size 12)
    - Shape: Green badge "EXCEEDED" — "Received 4.8 rating (highest on the design team)."
  - Summary bar: "Overall Goals: 2 Exceeded, 4 Met, 2 Partially Met, 0 Not Met" (#2E7D32 background, white text)

### Frame 2: Competency Assessment Matrix

- **Position**: Bottom-left
- **Size**: 1650 x 1400px
- **Background**: #FFFFFF with 1px #E0E0E0 border
- **Elements**:
  - Text block: "Competency Assessment" (font size 24, bold, #7B1FA2)
  - Text block: "Assessed against Senior Product Designer competency model. Scale: 1 (Developing) to 5 (Distinguished)." (font size 12, #6D6D6D)
  - Table with columns: Competency | Self Rating | Manager Rating | Target for Level | Gap
  - Row 1: Design Craft | 4 | 4 | 4 | 0 (At level)
  - Row 2: User Research | 4 | 5 | 4 | +1 (Above level)
  - Row 3: Design Systems Thinking | 3 | 4 | 4 | 0 (At level)
  - Row 4: Cross-Functional Leadership | 4 | 4 | 3 | +1 (Above level)
  - Row 5: Mentorship & Coaching | 3 | 4 | 3 | +1 (Above level)
  - Row 6: Strategic Thinking | 3 | 3 | 4 | -1 (Below level)
  - Row 7: Communication & Presentation | 4 | 4 | 4 | 0 (At level)
  - Row 8: Technical Proficiency (Figma, Proto) | 5 | 5 | 4 | +1 (Above level)
  - Color coding: Above level (#C8E6C9), At level (#FFFFFF), Below level (#FFCDD2)
  - Text block: "Competency Summary" (font size 16, bold, #7B1FA2)
  - Text block: "Alex exceeds expectations in 4 of 8 competencies, meets expectations in 3, and has 1 development area (Strategic Thinking). This is a strong profile for a Senior Designer, with readiness signals for Staff level in the research and cross-functional leadership dimensions." (font size 13, #212121)
  - Sticky note (yellow, #FFF9C4): "Mia's note: Strategic Thinking is the key gap for Staff-level promotion. Alex excels at executing design work but needs to develop the ability to independently identify which problems to solve and influence the product roadmap."

### Frame 3: 360-Degree Feedback Summary

- **Position**: Top-center
- **Size**: 1650 x 1400px
- **Background**: #FFF3E0 (warm tint)
- **Elements**:
  - Text block: "360-Degree Feedback Summary" (font size 24, bold, #EF6C00)
  - Text block: "Collected from 6 reviewers: 1 manager, 2 peers, 2 cross-functional partners, 1 direct report" (font size 12, #6D6D6D)
  - Text block: "Strengths (Themes)" (font size 18, bold, #2E7D32)
  - Sticky note 1 (green, #C8E6C9): "THEME: Exceptional collaboration. 'Alex is the designer I most enjoy working with. He comes to sprint planning prepared, asks smart questions, and never blocks engineering with late specs.' — Raj Gupta, VP Backend Engineering"
  - Sticky note 2 (green, #C8E6C9): "THEME: High craft standard. 'The checkout redesign was the most polished design work I've seen at NovaTech. Every edge case was considered.' — Ben Torres, VP Product"
  - Sticky note 3 (green, #C8E6C9): "THEME: Generous mentor. 'Alex spent real time helping me grow. He didn't just review my work — he taught me how to think about design problems.' — Sam Parker, Junior Designer"
  - Text block: "Growth Areas (Themes)" (font size 18, bold, #EF6C00)
  - Sticky note 4 (orange, #FFE0B2): "THEME: Needs to speak up more in strategy conversations. 'Alex has great instincts but waits to be asked. I want him to proactively bring design perspectives to roadmap discussions.' — Aisha Patel, CPO"
  - Sticky note 5 (orange, #FFE0B2): "THEME: Could take more risks. 'Alex's designs are consistently good but rarely surprising. I'd love to see him push boundaries more — propose something wild once in a while.' — Jordan Lee, Peer Designer"
  - Sticky note 6 (orange, #FFE0B2): "THEME: Delegation. 'Alex sometimes does work that Sam or I could do because he wants it to be perfect. He should delegate more and focus on the high-leverage work.' — Mia Chen, Manager"
  - Text block: "Verbatim Quote Highlight" (font size 16, bold, #1565C0)
  - Shape (rounded rectangle, #1565C0 fill, white text): "'Alex is the quiet force that makes the design team great. When he's on a project, things just work. He needs to realize he has the influence to shape what projects we pursue, not just how we execute them.' — Aisha Patel, CPO"

### Frame 4: Overall Rating & Manager Summary

- **Position**: Bottom-center
- **Size**: 1650 x 1400px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Overall Performance Rating" (font size 24, bold, #1565C0)
  - Shape: Large rounded rectangle, centered, #1565C0 fill:
    - Text: "EXCEEDS EXPECTATIONS" (font size 28, bold, white)
    - Text: "Rating: 4.2 / 5.0" (font size 18, white)
  - Text block: "Rating Scale Reference" (font size 14, #6D6D6D)
  - Text block: "5.0 = Distinguished (top 5%) | 4.0-4.9 = Exceeds Expectations (top 20%) | 3.0-3.9 = Meets Expectations | 2.0-2.9 = Needs Improvement | 1.0-1.9 = Does Not Meet" (font size 12, #6D6D6D)
  - Text block: "Manager Narrative" (font size 20, bold, #1565C0)
  - Text block (font size 14, #212121): "Alex had an outstanding H2 2025. The checkout redesign delivered a 22% conversion improvement — the single most impactful design project of the half. His mentorship of Sam was exemplary and directly contributed to Sam's independent project leadership. The design system work was strong despite external blockers. Alex's cross-functional feedback (4.8 rating) is the highest on the team and reflects his reliability and quality. The primary development area is strategic thinking — Alex needs to transition from 'best executor' to 'strategic design leader' who shapes what we build, not just how we build it. I believe Alex is 6-12 months away from readiness for Staff Designer if he deliberately develops this dimension."
  - Text block: "Compensation Recommendation" (font size 18, bold, #F9A825)
  - Shape (rounded rectangle, #FFF9C4 fill):
    - Text: "Merit increase: 6% (vs. 4% standard)" (font size 14, bold, #212121)
    - Text: "Equity refresh: 500 additional RSUs (vesting over 4 years)" (font size 14, bold, #212121)
    - Text: "Spot bonus: $3,000 for checkout redesign impact" (font size 14, bold, #212121)
    - Text: "Status: Pending VP approval (David Kim review on Jan 28)" (font size 12, #EF6C00)
  - Sticky note (yellow, #FFF9C4): "Calibration note: Alex rated 4.2 — second highest on the design team. Only Mia rated higher (4.5, as a manager). This is consistent with team calibration on Jan 15."

### Frame 5: Development Plan

- **Position**: Top-right
- **Size**: 1650 x 1400px
- **Background**: #E0F2F1 (light teal)
- **Elements**:
  - Text block: "Development Plan — H1 2026" (font size 24, bold, #00695C)
  - Text block: "Focused on the strategic thinking gap and Staff Designer readiness" (font size 12, #6D6D6D)
  - **Development Area 1: Strategic Thinking** (card, #FFFFFF fill, #00695C left border):
    - Text: "Goal: Independently identify and pitch 2 design opportunities to the product roadmap by June 2026" (font size 14, bold)
    - Sticky note (teal, #B2DFDB): "Action 1: Shadow Aisha (CPO) in 3 product strategy meetings (Feb-Mar) — observe how product priorities are set and where design can influence."
    - Sticky note (teal, #B2DFDB): "Action 2: Read 'Articulating Design Decisions' by Tom Greever and 'The Strategic Designer' by David Holston. Discuss key takeaways with Mia in April 1:1."
    - Sticky note (teal, #B2DFDB): "Action 3: Present a 'Design-led opportunity brief' at the April product review — identify a user problem not currently on the roadmap and propose a design-led solution."
    - Sticky note (teal, #B2DFDB): "Action 4: Attend the NovaTech leadership offsite (May) as an observer — exposure to company-level strategic planning."
  - **Development Area 2: Delegation & Leverage** (card, #FFFFFF fill, #EF6C00 left border):
    - Text: "Goal: Increase personal leverage by delegating 30% of execution work to junior designers" (font size 14, bold)
    - Sticky note (orange, #FFE0B2): "Action 1: Identify 3 projects in Q1 where Sam or a new junior hire can own execution with Alex providing direction and review."
    - Sticky note (orange, #FFE0B2): "Action 2: Create a 'Design Delegation Playbook' — document which types of work Alex should own vs. delegate, with clear quality checkpoints."
    - Sticky note (orange, #FFE0B2): "Action 3: Track delegation ratio monthly in 1:1s with Mia. Target: Alex spends 40% of time on strategic work, 40% on execution, 20% on mentorship."
  - **Development Area 3: External Visibility** (card, #FFFFFF fill, #7B1FA2 left border):
    - Text: "Goal: Build external presence as a design thought leader" (font size 14, bold)
    - Sticky note (purple, #E1BEE7): "Action 1: Publish 2 articles on Medium or the NovaTech design blog (one on checkout redesign case study, one on design system strategy)."
    - Sticky note (purple, #E1BEE7): "Action 2: Submit a talk proposal to Config 2026 or a local UX meetup. Mia to review abstract by April."
  - Text block: "Support Provided" (font size 16, bold, #00695C)
  - Sticky note (green, #C8E6C9): "Mia commits to: weekly coaching on strategic thinking, quarterly stretch assignments, and sponsoring Alex for the leadership offsite."
  - Sticky note (green, #C8E6C9): "Budget: $2,000 learning stipend (books, conferences, courses) + 2 days/quarter for professional development."

### Frame 6: Career Growth Path

- **Position**: Bottom-right
- **Size**: 1650 x 1400px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Career Growth Path" (font size 24, bold, #7B1FA2)
  - Text block: "Where is Alex heading, and what does the path look like?" (font size 12, #6D6D6D)
  - **Career Ladder Visualization** (vertical progression):
  - Shape (rounded rectangle, #C8E6C9, solid border): "CURRENT: Senior Product Designer (IC4)" — "Alex is here. Strong performer, 2.5 years in role."
  - Arrow upward (solid, #7B1FA2, 3px)
  - Shape (rounded rectangle, #E1BEE7, dashed border): "NEXT: Staff Product Designer (IC5)" — "Target: H2 2026. Requires: strategic thinking (gap closing), scope expansion, cross-team influence."
  - Arrow upward (dashed, #7B1FA2, 2px)
  - Shape (rounded rectangle, #F3E5F5, dashed border): "FUTURE: Principal Designer (IC6) OR Design Manager (M1)" — "Fork in the road. Alex to decide IC track vs. management track by mid-2027."
  - Text block: "Promotion Readiness Assessment" (font size 18, bold, #7B1FA2)
  - Table with columns: Staff Designer Criteria | Current Status | Ready?
  - Row 1: Independently scopes and leads projects | Yes | Ready
  - Row 2: Influences product strategy | Developing | 6-12 months
  - Row 3: Mentors others effectively | Yes | Ready
  - Row 4: Recognized by cross-functional leaders | Yes (4.8 rating) | Ready
  - Row 5: Delivers outsized business impact | Yes (22% checkout conversion) | Ready
  - Row 6: Demonstrates strategic design thinking | Developing | 6-12 months
  - Summary: "4 of 6 criteria met. 2 in development. Expected readiness: Q3-Q4 2026."
  - Text block: "Career Conversation Notes" (font size 16, bold, #1565C0)
  - Sticky note (blue, #BBDEFB): "Alex expressed interest in remaining on the IC track for now. He enjoys hands-on design work and is not yet interested in full-time management. Revisit at next annual review."
  - Sticky note (blue, #BBDEFB): "Long-term aspiration: Alex wants to lead a 'design lab' — a small team focused on exploratory, high-risk product concepts. This aligns with a Principal Designer scope."
  - Sticky note (yellow, #FFF9C4): "Mia's commitment: If Alex meets the strategic thinking criteria by Q3, I will sponsor his promotion to Staff Designer at the October calibration cycle."

## Connectors & Flow

- Arrow from Frame 1 (Goals) to Frame 4 (Overall Rating): solid line, #2E7D32, label "Goals feed rating"
- Arrow from Frame 2 (Competencies) to Frame 4 (Overall Rating): solid line, #7B1FA2, label "Competencies feed rating"
- Arrow from Frame 3 (Feedback) to Frame 4 (Overall Rating): solid line, #EF6C00, label "Feedback informs rating"
- Arrow from Frame 2 (Competencies) to Frame 5 (Development): dashed line, #00695C, label "Gaps become dev areas"
- Arrow from Frame 3 (Feedback) to Frame 5 (Development): dashed line, #00695C, label "Feedback informs plan"
- Arrow from Frame 5 (Development) to Frame 6 (Career): solid line, #7B1FA2, label "Development enables promotion"
- Arrow from Frame 4 (Rating) to Frame 6 (Career): dashed line, #F9A825, label "Rating tracks readiness"

## Example Content

All example content is embedded above. The board models the H2 2025 performance review for Alex Kim, Senior Product Designer at NovaTech Inc.:

- 4 goals with 8 key results (2 exceeded, 4 met, 2 partially met)
- 8-competency assessment matrix with self and manager ratings
- 360-degree feedback from 6 reviewers with strength and growth themes
- Overall rating of 4.2/5.0 (Exceeds Expectations) with compensation recommendations
- 3-area development plan focused on strategic thinking, delegation, and external visibility
- Career growth path from Senior to Staff to Principal Designer with promotion criteria tracking

## Variations

1. **Simplified Review (For Startups)**: Reduce to 3 frames: Goals Review, Manager Feedback, and Development Plan. Remove the formal competency matrix and 360 feedback. Use a simpler rating scale (Exceeds / Meets / Below).
2. **Manager Review**: Add a "Leadership Effectiveness" frame assessing management competencies (team development, retention, cross-functional leadership). Add a "Team Performance" frame showing the manager's team's aggregate results.
3. **Continuous Performance (No Annual Review)**: Replace the half/annual structure with a rolling board that is updated monthly. Remove the overall rating; focus on ongoing goals, weekly check-ins, and continuous feedback collection.

## Build Instructions

1. Create the board at 5200 x 3600px with #FAFAFA background.
2. Build the header at position (0, 0), full width, 180px tall, #1565C0 background. Fill in the employee name, role, review period, and participants.
3. Create Frame 1 (Goals Review) at position (50, 200) with size 1650 x 1400px. Build 4 goal cards with KR status badges.
4. Create Frame 2 (Competency Matrix) at position (50, 1650) with size 1650 x 1400px. Build the 8-row competency table with color-coded gap analysis.
5. Create Frame 3 (360 Feedback) at position (1750, 200) with size 1650 x 1400px. Organize feedback into strength and growth themes with quoted feedback.
6. Create Frame 4 (Overall Rating) at position (1750, 1650) with size 1650 x 1400px. Add the rating badge, manager narrative, and compensation recommendation.
7. Create Frame 5 (Development Plan) at position (3450, 200) with size 1650 x 1400px. Build 3 development area cards with specific actions.
8. Create Frame 6 (Career Path) at position (3450, 1650) with size 1650 x 1400px. Build the career ladder visualization and promotion readiness table.
9. Add all connectors between frames following the review flow.
10. Verify consistency: competency gaps should match development areas, feedback themes should appear in the development plan, and the overall rating should logically follow from goals + competencies + feedback.

## Tips & Best Practices

- **No surprises**: Nothing in the performance review should be a surprise. If you have been giving regular feedback throughout the period, the review should feel like a summary, not a revelation.
- **Be specific with evidence**: Every rating should have examples. "Alex exceeded the checkout conversion goal by 7 percentage points" is better than "Alex did great work."
- **Balance backward and forward**: The review should be 40% backward-looking (assessment) and 60% forward-looking (development and career). People are motivated by growth, not grades.
- **Include the employee's voice**: The self-assessment and career conversation notes ensure the review is a dialogue, not a monologue.
- **Connect development to promotion**: If an employee cannot see how their development plan connects to their career goals, they will not be motivated to follow it.
- **Protect confidentiality**: 360 feedback should be anonymized for peers and direct reports. Only the manager's feedback is attributed.
