# Study Map

## Overview

- **Purpose**: A visual mind map for study and exam revision — placing the subject at the center with topics branching outward, key concepts and formulas on each branch, exam tips, and progress tracking to monitor mastery across the full syllabus.
- **Best For**: Students preparing for exams (GCSE, A-Level, AP, university finals), self-directed learners mastering a new subject, and study groups organizing shared revision materials.
- **Complexity**: Simple
- **Board Size**: 3600 x 3600px (square, radial layout)

## Color Scheme

| Role        | Color         | Hex     |
| ----------- | ------------- | ------- |
| Primary     | Academic Blue | #1565C0 |
| Branch 1    | Warm Orange   | #EF6C00 |
| Branch 2    | Sage Green    | #388E3C |
| Branch 3    | Deep Purple   | #6A1B9A |
| Branch 4    | Brick Red     | #C62828 |
| Branch 5    | Dark Teal     | #00695C |
| Mastered    | Bright Green  | #4CAF50 |
| In Progress | Amber         | #FFC107 |
| Not Started | Light Gray    | #BDBDBD |
| Background  | Ivory         | #FFFDE7 |
| Text        | Near Black    | #1A1A1A |

## Board Layout

The board uses a radial mind map layout with the subject at the center and 5 main topic branches radiating outward. A progress tracker bar sits at the bottom.

```
                        +------------------+
                        |   Branch 3:      |
                        |   Organic Chem   |
                        +------------------+
                               |
        +----------------+     |     +------------------+
        |  Branch 2:     |     |     |  Branch 4:       |
        |  Atomic        +-----+-----+  Energetics      |
        |  Structure     |     |     |                  |
        +----------------+  +-----+  +------------------+
                            |     |
                            | SUB |
                            | JECT|
                            |     |
        +----------------+  +-----+  +------------------+
        |  Branch 1:     |     |     |  Branch 5:       |
        |  Bonding       +-----+-----+  Equilibrium     |
        |                |     |     |  & Rates         |
        +----------------+     |     +------------------+
                               |
                    +---------------------+
                    |  Exam Tips &        |
                    |  Progress Tracker   |
                    +---------------------+
```

## Frames & Sections

### Central Node: Subject

- **Position**: Center of board
- **Size**: 500 x 500px (circle)
- **Background**: #1565C0
- **Elements**:
  - Shape: Large circle, #1565C0 fill, white text
  - Text block: "A-Level Chemistry" (font size 28, bold, white)
  - Text block: "AQA Specification 2025" (font size 14, white)
  - Text block: "Exam Date: June 10, 2026" (font size 12, #B3D4FC)
  - Text block: "3 Papers | 6 hours total | 40% AS + 60% A2" (font size 11, #B3D4FC)

### Branch 1: Chemical Bonding (Southwest)

- **Position**: Lower-left quadrant
- **Size**: 1200 x 800px
- **Background**: Transparent (elements floating)
- **Branch Color**: #EF6C00
- **Elements**:
  - Shape: Rounded rectangle, #EF6C00, label "Chemical Bonding" (font size 18, bold, white)
  - Connector: Thick line from Central Node to this branch (#EF6C00, 4px)
  - **Sub-branch 1.1**: Sticky note (orange, #FFE0B2): "Ionic Bonding: Electrostatic attraction between oppositely charged ions. E.g., NaCl — Na loses 1e- to form Na+, Cl gains 1e- to form Cl-. Born-Haber cycle connects to energetics."
  - **Sub-branch 1.2**: Sticky note (orange, #FFE0B2): "Covalent Bonding: Shared pair of electrons. Types: single, double, triple. Dative (coordinate): both electrons from one atom (e.g., NH4+ formation from NH3 + H+)."
  - **Sub-branch 1.3**: Sticky note (orange, #FFE0B2): "Metallic Bonding: Sea of delocalised electrons surrounding positive metal ions. Explains conductivity, malleability, high melting points."
  - **Sub-branch 1.4**: Sticky note (orange, #FFE0B2): "Intermolecular Forces: London dispersion (all molecules) < permanent dipole < hydrogen bonding (N-H, O-H, F-H). Controls boiling points and solubility."
  - **Key Formula** (shape, #FFF9C4 fill, #EF6C00 border):
    - Text: "Electronegativity difference > 1.7 = ionic character" (font size 12, bold)
  - Progress indicator: Circle badge "3/4" (#4CAF50 fill, white text) — 3 of 4 subtopics mastered

### Branch 2: Atomic Structure (Northwest)

- **Position**: Upper-left quadrant
- **Size**: 1200 x 800px
- **Background**: Transparent
- **Branch Color**: #388E3C
- **Elements**:
  - Shape: Rounded rectangle, #388E3C, label "Atomic Structure" (font size 18, bold, white)
  - Connector: Thick line from Central Node (#388E3C, 4px)
  - **Sub-branch 2.1**: Sticky note (green, #C8E6C9): "Atomic Models: Thomson (plum pudding) -> Rutherford (nuclear) -> Bohr (shells) -> Schrodinger (orbitals/probability clouds). Each model solved a problem the previous one could not explain."
  - **Sub-branch 2.2**: Sticky note (green, #C8E6C9): "Electron Configuration: 1s2 2s2 2p6 3s2 3p6 4s2 3d10... Follow Aufbau principle, Hund's rule (fill degenerate orbitals singly first), Pauli exclusion (max 2e- per orbital, opposite spin)."
  - **Sub-branch 2.3**: Sticky note (green, #C8E6C9): "Mass Spectrometry: Ionise -> Accelerate -> Deflect -> Detect. m/z ratio. Used to determine relative atomic mass and identify isotopes. Calculation: RAM = sum(isotope mass x abundance) / 100."
  - **Sub-branch 2.4**: Sticky note (green, #C8E6C9): "Ionisation Energy: Energy to remove 1 mol of electrons from 1 mol of gaseous atoms. Trends: increases across period (more protons, same shielding), decreases down group (more shielding, further from nucleus)."
  - **Key Formula** (shape, #FFF9C4 fill, #388E3C border):
    - Text: "1st IE: X(g) -> X+(g) + e- | Units: kJ mol-1" (font size 12, bold)
  - Progress indicator: Circle badge "4/4" (#4CAF50 fill) — fully mastered

### Branch 3: Organic Chemistry (North)

- **Position**: Top-center
- **Size**: 1200 x 800px
- **Background**: Transparent
- **Branch Color**: #6A1B9A
- **Elements**:
  - Shape: Rounded rectangle, #6A1B9A, label "Organic Chemistry" (font size 18, bold, white)
  - Connector: Thick line from Central Node (#6A1B9A, 4px)
  - **Sub-branch 3.1**: Sticky note (purple, #E1BEE7): "Alkanes: CnH2n+2. Saturated hydrocarbons. Reactions: combustion (complete/incomplete), free radical substitution with halogens (initiation, propagation, termination)."
  - **Sub-branch 3.2**: Sticky note (purple, #E1BEE7): "Alkenes: CnH2n. Unsaturated, C=C double bond. Reactions: electrophilic addition (HBr, H2O/H+, Br2). Markovnikov's rule for asymmetric alkenes. Test for unsaturation: bromine water decolorisation."
  - **Sub-branch 3.3**: Sticky note (purple, #E1BEE7): "Alcohols: Classification (primary, secondary, tertiary). Reactions: oxidation (primary -> aldehyde -> carboxylic acid, secondary -> ketone, tertiary = no oxidation with acidified dichromate). Elimination vs. substitution."
  - **Sub-branch 3.4**: Sticky note (purple, #E1BEE7): "Reaction Mechanisms: Curly arrows show electron pair movement. Nucleophilic substitution (SN1/SN2), electrophilic addition, free radical substitution. DRAW THESE IN EXAMS — marks for correct arrows."
  - **Sub-branch 3.5**: Sticky note (purple, #E1BEE7): "Isomerism: Structural (chain, position, functional group) and stereoisomerism (E/Z geometric, optical). Chiral centres = 4 different groups around carbon."
  - **Exam Tip** (shape, #FFCDD2 fill, #C62828 border):
    - Text: "EXAM TIP: Organic mechanism questions are worth 3-5 marks each. ALWAYS show curly arrows starting from the electron pair source. Partial marks for correct intermediates even if the final product is wrong." (font size 11, bold)
  - Progress indicator: Circle badge "2/5" (#FFC107 fill) — in progress

### Branch 4: Energetics (Northeast)

- **Position**: Upper-right quadrant
- **Size**: 1200 x 800px
- **Background**: Transparent
- **Branch Color**: #C62828
- **Elements**:
  - Shape: Rounded rectangle, #C62828, label "Energetics" (font size 18, bold, white)
  - Connector: Thick line from Central Node (#C62828, 4px)
  - **Sub-branch 4.1**: Sticky note (pink, #F8BBD0): "Enthalpy Changes: Exothermic (delta H negative, energy released, temperature rises). Endothermic (delta H positive, energy absorbed, temperature falls). Standard conditions: 298K, 100kPa."
  - **Sub-branch 4.2**: Sticky note (pink, #F8BBD0): "Hess's Law: Total enthalpy change is independent of the route taken. Use enthalpy cycles to calculate unknown delta H values from known formation or combustion enthalpies."
  - **Sub-branch 4.3**: Sticky note (pink, #F8BBD0): "Bond Enthalpies: Energy to break 1 mol of bonds in gaseous molecules. Delta H = sum(bonds broken) - sum(bonds formed). Always positive for breaking, negative for forming."
  - **Sub-branch 4.4**: Sticky note (pink, #F8BBD0): "Born-Haber Cycles: Construct for ionic compounds. Steps: atomisation, ionisation, electron affinity, lattice enthalpy. Use Hess's law to find unknown values. Remember: lattice enthalpy is exothermic (formation convention)."
  - **Key Formula** (shape, #FFF9C4 fill, #C62828 border):
    - Text: "q = mc(delta T) | delta H = -q/n | Units: kJ mol-1" (font size 12, bold)
  - Progress indicator: Circle badge "1/4" (#FFC107 fill) — in progress

### Branch 5: Equilibrium & Rates (Southeast)

- **Position**: Lower-right quadrant
- **Size**: 1200 x 800px
- **Background**: Transparent
- **Branch Color**: #00695C
- **Elements**:
  - Shape: Rounded rectangle, #00695C, label "Equilibrium & Rates" (font size 18, bold, white)
  - Connector: Thick line from Central Node (#00695C, 4px)
  - **Sub-branch 5.1**: Sticky note (teal tint, #B2DFDB): "Rate of Reaction: Measured by change in concentration over time. Factors: temperature (+10C roughly doubles rate), concentration, surface area, catalysts. Collision theory: effective collisions need sufficient energy (Ea) and correct orientation."
  - **Sub-branch 5.2**: Sticky note (teal tint, #B2DFDB): "Maxwell-Boltzmann Distribution: Bell curve showing distribution of molecular energies. At higher temperature: curve shifts right, flattens, more molecules exceed Ea. Catalysts lower Ea — shown as a vertical line shifting left."
  - **Sub-branch 5.3**: Sticky note (teal tint, #B2DFDB): "Chemical Equilibrium: Dynamic equilibrium = forward and reverse rates equal, concentrations constant. Le Chatelier's principle: system opposes change. Increase temperature favors endothermic direction."
  - **Sub-branch 5.4**: Sticky note (teal tint, #B2DFDB): "Kc and Kp: Kc = products/reactants (concentration). Kp = partial pressures. Only temperature changes the value of K. Concentration and pressure changes shift position but NOT the value of K."
  - **Key Formula** (shape, #FFF9C4 fill, #00695C border):
    - Text: "Kc = [C]^c[D]^d / [A]^a[B]^b | Rate = k[A]^m[B]^n" (font size 12, bold)
  - Progress indicator: Circle badge "0/4" (#BDBDBD fill) — not started

### Bottom Strip: Exam Tips & Progress Tracker

- **Position**: Full-width bottom
- **Size**: 3500 x 500px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Overall Progress" (font size 22, bold, #1565C0)
  - Progress bar: 10 out of 21 subtopics mastered (48%) — segmented bar with green (#4CAF50), amber (#FFC107), and gray (#BDBDBD) sections
  - Text block: "10/21 topics mastered | 5 in progress | 6 not started | 34 days until exam" (font size 14, #1A1A1A)
  - Text block: "Exam Strategy Tips" (font size 18, bold, #C62828)
  - Sticky note (yellow, #FFF9C4): "Paper 1 (Inorganic + Physical): 105 marks, 2 hours. Start with Section A short answers, move to long answers. Budget 1 min/mark."
  - Sticky note (yellow, #FFF9C4): "Paper 2 (Organic + Physical): 105 marks, 2 hours. Mechanism questions appear every year — practice drawing curly arrows under timed conditions."
  - Sticky note (yellow, #FFF9C4): "Paper 3 (Practical skills): 90 marks, 2 hours. Always state units. Show all working in calculations. Reference the data booklet for constants."
  - Sticky note (green, #C8E6C9): "Study plan: Focus on Branch 5 (Equilibrium) this week — it overlaps with both Paper 1 and Paper 2. Then revisit Organic mechanisms (Branch 3)."

## Connectors & Flow

- Thick connector lines from Central Node to each of the 5 branch nodes (color-matched to each branch, 4px)
- Thinner connector lines from each branch node to its sub-branch sticky notes (color-matched, 2px, dashed)
- Cross-link dashed line from Branch 1 (Bonding) sub-branch 1.1 to Branch 4 (Energetics) sub-branch 4.4: label "Born-Haber cycles connect ionic bonding to energetics" (#607D8B, dashed)
- Cross-link dashed line from Branch 5 (Rates) sub-branch 5.1 to Branch 4 (Energetics): label "Activation energy (Ea) is an energetics concept" (#607D8B, dashed)

## Example Content

All example content is embedded above. The study map covers an A-Level Chemistry syllabus (AQA 2025) with:

- 5 major topic branches: Bonding, Atomic Structure, Organic Chemistry, Energetics, Equilibrium & Rates
- 21 subtopics with detailed revision notes on each sticky note
- Key formulas highlighted for each branch
- Exam-specific tips for all three papers
- Progress tracking showing 48% mastery (10/21 topics)
- Cross-links showing topic interconnections

## Variations

1. **University Course Map**: Replace A-Level topics with university module content, add a "Past Exam Analysis" branch showing question frequency by topic, and include a "Key Readings" sub-branch for each topic.
2. **Language Learning Map**: Central node is the language, branches are Grammar, Vocabulary, Listening, Reading, Speaking/Writing. Sub-branches contain specific skills with example sentences.
3. **Professional Certification Map**: Adapt for CPA, PMP, AWS, or similar certifications. Include exam domain weights (e.g., "Domain 1: 35% of exam") to prioritize study time.

## Build Instructions

1. Create the board at 3600 x 3600px with #FFFDE7 background.
2. Place the Central Node circle at the exact center (1800, 1800) with 500px diameter, #1565C0 fill, white text.
3. Create Branch 1 (Bonding) in the lower-left quadrant. Place the branch label rectangle at approximately (400, 2400) and connect it to the center with a thick #EF6C00 line. Fan out 4 sticky notes below/left of the branch label.
4. Create Branch 2 (Atomic Structure) in the upper-left quadrant at approximately (400, 800). Same pattern with #388E3C color.
5. Create Branch 3 (Organic Chemistry) at the top-center at approximately (1500, 300). Same pattern with #6A1B9A color. This branch has 5 sub-topics.
6. Create Branch 4 (Energetics) in the upper-right quadrant at approximately (2800, 800). Same pattern with #C62828 color.
7. Create Branch 5 (Equilibrium & Rates) in the lower-right quadrant at approximately (2800, 2400). Same pattern with #00695C color.
8. Add key formula shapes adjacent to each branch.
9. Add progress indicator badges on each branch.
10. Create the bottom progress tracker strip at position (50, 3100) with size 3500 x 500px.
11. Add cross-link connectors between related branches.
12. Verify all sub-topic counts match the progress tracker totals.

## Tips & Best Practices

- **Color-code religiously**: Each branch should have a distinct color used for all its elements. This enables instant visual scanning.
- **Keep sticky notes concise**: Each sub-topic sticky note should be a study aid, not a textbook. Target 2-3 sentences with the key idea, an example, and a connection to related topics.
- **Update progress daily**: Move progress indicators as you study. Seeing green circles grow is a powerful motivator.
- **Add cross-links**: The connections between branches (e.g., bonding ↔ energetics) represent the higher-order understanding examiners test. Do not skip these.
- **Include exam tips on the map**: Generic study advice is useless. Specific tips like "mechanism questions appear every year" drive focused revision.
- **Study with the map visible**: Print it large or keep it open on a second screen. Glance at it before each study session to orient yourself in the bigger picture.
