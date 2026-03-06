# Layout Patterns — Education Boards

## Overview

Education boards visualize learning sequences, knowledge architectures, and research flows. The layout must communicate temporal progression, conceptual hierarchy, and alignment between goals and activities. This guide covers four core layout patterns for education boards.

---

## Pattern 1: The Timeline Lesson Plan

A left-to-right horizontal timeline showing minute-by-minute classroom flow. This is the primary layout for single-session lesson planning.

### Structure

```
+------------------------------------------------------------------+
|              HEADER: Lesson Plan — Subject & Topic                 |
|  Teacher | Grade | Period | Room | Date | Duration                |
+------------------------------------------------------------------+
|                                                                    |
|  OBJECTIVES     ACTIVITY TIMELINE (minute by minute)              |
|  & STANDARDS    |                                                  |
|  +----------+   +------+------+-----------+--------+------+       |
|  | LO1      |   | HOOK | DIRECT| GUIDED   | INDEP. | CLOSE|      |
|  | LO2      |   | 5min | INST  | PRACTICE | WORK   | 5min |      |
|  | LO3      |   |      | 15min | 10min    | 10min  |      |      |
|  +----------+   +------+------+-----------+--------+------+       |
|  | Standards |                                                     |
|  +----------+   +------+------+-----------+--------+------+       |
|                 | TEACHER NOTES & KEY QUESTIONS per activity      |
|  MATERIALS      +------+------+-----------+--------+------+       |
|  +----------+                                                      |
|  | Physical |   +------+------+-----------+--------+------+       |
|  | Digital  |   | ASSESSMENT CHECKPOINTS per activity             |
|  | Prep     |   +------+------+-----------+--------+------+       |
|  +----------+                                                      |
|                 +------+------+-----------+--------+------+       |
|  DIFFERENTI-    | DIFFERENTIATION per activity                    |
|  ATION KEY      | Scaffold | Core | Extension                     |
|                 +------+------+-----------+--------+------+       |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element          | Width        | Height    | Notes                                          |
| ---------------- | ------------ | --------- | ---------------------------------------------- |
| Total board      | 4000px       | 2800px    | Medium complexity                              |
| Header           | 3900px       | 160px     | Full width                                     |
| Left sidebar     | 1100px       | Full      | Objectives, materials, differentiation key     |
| Activity columns | Proportional | 2200px    | Width proportional to duration                 |
| Layer rows       | Full width   | 300-400px | Activities, notes, assessment, differentiation |

### Spacing Rules

- **Between activity columns**: 10px gap (tight, showing time continuity)
- **Between layers**: 15px
- **Sidebar to timeline**: 30px gap
- **Activity column width formula**: (Duration in minutes / Total minutes) x available width
- **Internal padding**: 12px

### Key Layout Principles

1. **Width = Time** — a 15-minute activity is exactly 3x wider than a 5-minute activity. This proportional sizing gives an instant visual sense of pacing.
2. **Left sidebar anchors context** — objectives, materials, and keys live in a static column that the eye can reference at any point.
3. **Horizontal layers create structure** — each row through the timeline represents a different lens: what students do, what the teacher does, how to assess, how to differentiate.
4. **Activity columns are color-coded by type** — warm orange for active learning, cool blue for instruction, purple for assessment, green for reflection.

---

## Pattern 2: The Knowledge Web (Study Map)

A radial or network layout showing a central topic with branching subtopics, connections, and mastery checkpoints. Designed for student-facing study planning.

### Structure

```
+------------------------------------------------------------------+
|                    TITLE: Study Map — [Topic]                     |
+------------------------------------------------------------------+
|                                                                    |
|                         [CENTRAL                                   |
|                          CONCEPT]                                  |
|                        /    |    \                                  |
|                       /     |     \                                 |
|              [Sub-    [Sub-    [Sub-                                |
|              topic 1] topic 2] topic 3]                            |
|              /  \       |       /  \                                |
|             /    \      |      /    \                               |
|        [Detail] [Detail][Detail][Detail][Detail]                   |
|            |       |      |       |       |                        |
|         [Quiz] [Practice][Reading][Lab] [Project]                  |
|                                                                    |
|  +---RESOURCES---+  +---MASTERY---+  +---SCHEDULE---+             |
|  | Textbook Ch.  |  | Checkpoint 1|  | Week 1: Sub1 |             |
|  | Videos        |  | Checkpoint 2|  | Week 2: Sub2 |             |
|  | Practice Sets |  | Final Exam  |  | Week 3: Sub3 |             |
|  +---------------+  +-------------+  +--------------+             |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element         | Width       | Height | Notes                        |
| --------------- | ----------- | ------ | ---------------------------- |
| Total board     | 4200px      | 3500px | Square-ish for radial layout |
| Title           | 4100px      | 150px  | Full width                   |
| Central concept | 400px       | 200px  | Large, prominent, centered   |
| Subtopic nodes  | 300px       | 150px  | Medium, evenly distributed   |
| Detail nodes    | 200px       | 120px  | Smaller, leaves of the tree  |
| Bottom panels   | 1250px each | 400px  | 3 equal panels               |

### Spacing Rules

- **Central to subtopics**: 400px radial distance
- **Subtopics to details**: 300px radial distance
- **Between same-level nodes**: 200px minimum
- **Connector lines**: 2px, light gray (#BDBDBD)
- **Bottom panels**: 25px gap between panels

### Key Layout Principles

1. **Radial hierarchy** — the most important concept is at the center, with detail radiating outward. This mirrors how memory works: core concepts anchor related details.
2. **Visual weight decreases with distance** — the central concept is the largest node (400px), subtopics are medium (300px), details are smallest (200px). This creates natural zoom-in behavior.
3. **Connection lines show relationships** — solid lines for "is part of," dashed lines for "relates to," dotted lines for "also see." Line style communicates relationship type.
4. **Bottom anchors provide structure** — the three panels at the bottom (Resources, Mastery Checkpoints, Schedule) ground the organic web in practical structure.
5. **Color encodes mastery status** — nodes can be colored to show student progress: gray (not started), blue (in progress), green (mastered).

---

## Pattern 3: The Semester Grid (Course Curriculum)

A grid layout with weeks as columns and course components as rows, showing the full arc of a semester or academic year.

### Structure

```
+------------------------------------------------------------------------+
|              HEADER: Course Curriculum — [Course Name]                   |
|  Instructor | Semester | Meeting Time | Room | Credits                  |
+------------------------------------------------------------------------+
|         | WK 1  | WK 2  | WK 3  | WK 4  | ... | WK 14 | WK 15  |     |
+---------+-------+-------+-------+-------+-----+-------+--------+     |
| TOPIC   | Intro | Funda-| Core  | Core  | ... | Adv   | Review |     |
|         |       | mentals| Topic1| Topic2|     | Topic | & Exam |     |
+---------+-------+-------+-------+-------+-----+-------+--------+     |
| READINGS| Ch.1  | Ch.2-3| Ch.4  | Ch.5  | ... | Ch.12 | —      |     |
+---------+-------+-------+-------+-------+-----+-------+--------+     |
| ASSIGN- | —     | HW1   | HW2   | Quiz1 | ... | Final | Final  |     |
| MENTS   |       | Due   | Due   |       |     | Draft | Exam   |     |
+---------+-------+-------+-------+-------+-----+-------+--------+     |
| LEARNING| LO1   | LO1-2 | LO2-3 | LO3  | ... | LO6-7 | All    |     |
| OBJ.    |       |       |       |       |     |       |        |     |
+---------+-------+-------+-------+-------+-----+-------+--------+     |
| BLOOM'S | Rem.  | Und.  | Apply | Analy.| ... | Eval  | Create |     |
| LEVEL   |       |       |       |       |     |       |        |     |
+---------+-------+-------+-------+-------+-----+-------+--------+     |
|                                                                        |
|  +--COURSE OBJECTIVES--+  +--GRADING--+  +--KEY DATES--+              |
|  | CO1: ...            |  | HW: 30%   |  | Midterm: Wk7|              |
|  | CO2: ...            |  | Quizzes:20|  | Final: Wk15 |              |
|  | CO3: ...            |  | Project:30|  | Break: Wk9  |              |
|  | CO4: ...            |  | Final: 20 |  | Drop: Wk4   |              |
|  +---------------------+  +----------+  +-------------+              |
+------------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element          | Width       | Height    | Notes                    |
| ---------------- | ----------- | --------- | ------------------------ |
| Total board      | 5500px      | 3000px    | Wide for 15 week columns |
| Header           | 5400px      | 180px     | Full width               |
| Row label column | 400px       | —         | Left labels              |
| Week columns     | ~320px each | —         | 15 equal columns         |
| Component rows   | Full width  | 250-300px | 5-6 rows                 |
| Bottom panels    | 1700px each | 350px     | 3 panels                 |

### Spacing Rules

- **Between week columns**: 8px (tight grid feel)
- **Between rows**: 10px
- **Row labels to grid**: 15px
- **Grid to bottom panels**: 30px
- **Internal cell padding**: 10px

### Key Layout Principles

1. **Weeks as columns create a timeline** — the eye naturally scans left to right through the semester. Each column is a snapshot of one week.
2. **Rows represent dimensions** — Topic, Readings, Assignments, Objectives, and Bloom's Level create a multi-dimensional view of each week.
3. **The Bloom's row reveals cognitive arc** — scanning the bottom row should show progression from Remember/Understand (weeks 1-3) through Apply/Analyze (weeks 4-10) to Evaluate/Create (weeks 11-15).
4. **Color intensity increases** — early weeks use lighter colors, later weeks use darker colors, visually communicating increasing challenge and depth.
5. **Major milestones are highlighted** — midterm and final exam weeks use a different background color (amber) to stand out.

---

## Pattern 4: The Research Canvas (Research Board)

A structured flow from research question through literature, methodology, findings, and implications. Designed for academic research planning and communication.

### Structure

```
+------------------------------------------------------------------------+
|              HEADER: Research Board — [Study Title]                      |
|  Researcher(s) | Institution | Field | Date | Status                    |
+------------------------------------------------------------------------+
|                                                                         |
|  +--RESEARCH QUESTION--+  +--LITERATURE REVIEW--+                      |
|  |                      |  |                      |                      |
|  | "How does X          |  | Key Study 1 (2024)  |                      |
|  |  affect Y in the     |  | Key Study 2 (2023)  |                      |
|  |  context of Z?"      |  | Key Study 3 (2025)  |                      |
|  |                      |  | Gap: "No study has   |                      |
|  | Hypothesis: ...      |  |  examined X+Y+Z"    |                      |
|  +----------------------+  +---------------------+                      |
|                                                                         |
|  +--METHODOLOGY--+  +--DATA COLLECTION--+  +--ANALYSIS--+              |
|  | Design: RCT   |  | Sample: n=200     |  | Method:    |              |
|  | Variables: IV, |  | Timeline: 6 months|  | Regression |              |
|  |   DV, Controls|  | Instruments: ...  |  | Tools: R   |              |
|  | Validity: ...  |  | Ethics: IRB #123  |  | Thresholds |              |
|  +---------------+  +------------------+  +------------+              |
|                                                                         |
|  +--FINDINGS--+  +--DISCUSSION--+  +--IMPLICATIONS--+                  |
|  | Result 1   |  | Interpretation|  | For Practice  |                  |
|  | Result 2   |  | Limitations   |  | For Policy    |                  |
|  | Result 3   |  | Future Work   |  | For Research  |                  |
|  +------------+  +--------------+  +--------------+                   |
|                                                                         |
|  +--TIMELINE & MILESTONES--+  +--REFERENCES (key 10-15)--+            |
|  | Q1: Lit review           |  | APA citation list       |            |
|  | Q2: Data collection      |  |                         |            |
|  | Q3: Analysis             |  |                         |            |
|  | Q4: Writing & submission |  |                         |            |
|  +--------------------------+  +-------------------------+            |
+------------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element           | Width       | Height | Notes                           |
| ----------------- | ----------- | ------ | ------------------------------- |
| Total board       | 4500px      | 3500px | Portrait-ish                    |
| Header            | 4400px      | 180px  | Full width                      |
| Top row panels    | 2100px each | 600px  | 2 panels: Question + Literature |
| Middle row panels | 1400px each | 500px  | 3 panels: Methodology flow      |
| Output row panels | 1400px each | 500px  | 3 panels: Findings flow         |
| Bottom row panels | 2100px each | 400px  | 2 panels: Timeline + References |

### Spacing Rules

- **Between panels in same row**: 30px
- **Between rows**: 35px
- **Header to first row**: 25px
- **Internal panel padding**: 20px
- **Literature items spacing**: 12px between entries

### Key Layout Principles

1. **Top-to-bottom flow mirrors the research process** — question at top, findings at bottom. Reading the board vertically traces the research journey.
2. **Two-then-three-then-three-then-two rhythm** — the row structure (2-3-3-2) creates visual breathing room and groups related elements.
3. **The research question is the largest text** — it anchors the entire board. The question should be visible at 40% zoom, stated in full, and surrounded by whitespace.
4. **Literature review connects to the gap** — the literature panel should explicitly identify the gap that justifies this research. This gap is the bridge between "what we know" and "what we're studying."
5. **Color coding follows the research process** — blue for question/theory, green for methodology, amber for findings, purple for implications.

---

## Universal Layout Rules for Education Boards

### Time Representation

- When time is a dimension, it MUST be represented spatially, not just as a label
- Use proportional widths: 15 minutes of activity = 3x the width of 5 minutes
- Timeline direction: left to right (within a session) or top to bottom (across a semester)

### Bloom's Taxonomy Visual Integration

Map Bloom's levels to consistent visual treatment:

- Remember: Light blue background, simple icons
- Understand: Medium blue, slightly more prominent
- Apply: Green, active-feeling elements
- Analyze: Amber, analytical iconography
- Evaluate: Orange, judgment-focused elements
- Create: Red/deep purple, the most visually prominent

### Alignment Visibility

Every education board should make the objective-activity-assessment alignment visible:

- Same color family for aligned elements across rows
- Connector lines between related objectives and activities
- Assessment items labeled with the objective they measure

---

## Choosing the Right Pattern

| Pattern              | Best For                   | Complexity | Board Size |
| -------------------- | -------------------------- | ---------- | ---------- |
| Timeline Lesson Plan | Single session planning    | Medium     | 4000x2800  |
| Knowledge Web        | Student study planning     | Medium     | 4200x3500  |
| Semester Grid        | Course curriculum overview | Advanced   | 5500x3000  |
| Research Canvas      | Research project planning  | Advanced   | 4500x3500  |

### Decision Framework

1. **"How should I teach this one class?"** → Timeline Lesson Plan
2. **"How should a student study this topic?"** → Knowledge Web
3. **"How does this entire course fit together?"** → Semester Grid
4. **"How should I structure this research project?"** → Research Canvas
