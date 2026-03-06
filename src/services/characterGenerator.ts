import type { AgentRun } from '@/types/agent'
import type { AgentCharacter, AvatarIcon, PersonalityTrait } from '@/types/character'

// --- Name pools per role archetype ---

const NAME_POOLS: Record<string, string[]> = {
  developer: [
    'Ada', 'Linus', 'Grace', 'Kai', 'Maya', 'Devon', 'Sage', 'Niko',
    'Quinn', 'Rowan', 'Zara', 'Felix', 'Luna', 'Atlas', 'Iris', 'Orion',
  ],
  security: [
    'Ash', 'Knox', 'Raven', 'Blaze', 'Onyx', 'Cade', 'Flint',
    'Vera', 'Drake', 'Ember', 'Sable', 'Aegis', 'Cipher', 'Vigil',
  ],
  designer: [
    'Aria', 'Pixel', 'Paloma', 'Indigo', 'Saffron', 'Coral', 'Muse', 'Opal',
    'Violet', 'Jade', 'Celeste', 'Lyric', 'Prism', 'Aurora', 'Bloom',
  ],
  tester: [
    'Echo', 'Probe', 'Delta', 'Sigma', 'Nova',
    'Piper', 'Ridge', 'Cleo', 'Briar', 'Kira', 'Zephyr', 'Aster', 'Tori',
  ],
  scout: [
    'Scout', 'Hawk', 'Trail', 'Finch', 'Robin', 'Swift', 'Rune',
    'Compass', 'Rover', 'Beacon', 'Tracker', 'Lark', 'Wren',
  ],
  architect: [
    'Mason', 'Forge', 'Slate', 'Cobalt', 'Nexus',
    'Summit', 'Basalt', 'Frame', 'Steel', 'Stratus', 'Zenith',
  ],
  lead: [
    'Atlas', 'Apex', 'Prime', 'Titan', 'Ace',
    'Captain', 'Sterling', 'Valor', 'Pinnacle', 'Crown', 'Vanguard',
  ],
  planner: [
    'Oracle', 'Sage', 'Blueprint', 'Meridian', 'Thesis',
    'Axiom', 'Logic', 'Schema', 'Compass', 'Catalyst',
  ],
  verifier: [
    'Judge', 'Sentinel', 'Auditor', 'Clarity', 'Proof',
    'Verdict', 'Arbiter', 'Gauge', 'Caliber', 'Standard',
  ],
}

// --- Skill-to-pool mapping ---

const SKILL_TO_POOL: Record<string, string> = {
  'Lead': 'lead',
  'Bug Hunter': 'developer',
  'Test Engineer': 'tester',
  'Tester': 'tester',
  'Design Reviewer': 'designer',
  'Security Auditor': 'security',
  'Architect': 'architect',
  'Perf Optimizer': 'developer',
  'Code Reviewer': 'developer',
  'Scout': 'scout',
  'Artist': 'designer',
  'Director': 'designer',
  'Planner': 'planner',
  'Verifier': 'verifier',
}

const SKILL_TO_ROLE_TITLE: Record<string, string> = {
  'Lead': 'Mission Lead',
  'Bug Hunter': 'Senior Developer',
  'Test Engineer': 'QA Engineer',
  'Tester': 'QA Engineer',
  'Design Reviewer': 'Design Specialist',
  'Security Auditor': 'Security Auditor',
  'Architect': 'Systems Architect',
  'Perf Optimizer': 'Performance Engineer',
  'Code Reviewer': 'Code Reviewer',
  'Scout': 'Recon Scout',
  'Artist': 'Creative Artist',
  'Director': 'Creative Director',
  'Planner': 'Mission Planner',
  'Verifier': 'Quality Verifier',
}

const SKILL_TO_ICON: Record<string, AvatarIcon> = {
  'Lead': 'rocket',
  'Bug Hunter': 'bug',
  'Test Engineer': 'flask',
  'Tester': 'flask',
  'Design Reviewer': 'paintbrush',
  'Security Auditor': 'shield',
  'Architect': 'cpu',
  'Perf Optimizer': 'wrench',
  'Code Reviewer': 'eye',
  'Scout': 'search',
  'Artist': 'paintbrush',
  'Director': 'paintbrush',
  'Planner': 'cpu',
  'Verifier': 'shield',
}

const TRAIT_POOLS: Record<string, PersonalityTrait[]> = {
  developer: ['meticulous', 'analytical', 'tenacious', 'pragmatic'],
  security: ['cautious', 'meticulous', 'analytical', 'decisive'],
  designer: ['creative', 'enthusiastic', 'curious', 'bold'],
  tester: ['methodical', 'patient', 'analytical', 'tenacious'],
  scout: ['curious', 'decisive', 'bold', 'pragmatic'],
  architect: ['analytical', 'methodical', 'decisive', 'pragmatic'],
  lead: ['decisive', 'bold', 'tenacious', 'enthusiastic'],
  planner: ['analytical', 'methodical', 'patient', 'meticulous'],
  verifier: ['meticulous', 'cautious', 'analytical', 'patient'],
}

// --- Deterministic hash ---

function hashString(str: string): number {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

// --- Generator ---

export function generateCharacter(agent: AgentRun): AgentCharacter {
  const seed = hashString(agent.id)

  // Determine skill from teamSkill or from builder tag
  let skill = agent.teamSkill ?? ''
  if (skill.startsWith('Builder (')) {
    skill = 'Lead'
  }
  if (!skill) {
    skill = agent.teamRole === 'primary' ? 'Lead' : 'Code Reviewer'
  }

  const poolKey = SKILL_TO_POOL[skill] ?? 'developer'
  const namePool = NAME_POOLS[poolKey] ?? NAME_POOLS.developer!
  const traitPool = TRAIT_POOLS[poolKey] ?? TRAIT_POOLS.developer!

  const firstName = namePool[seed % namePool.length]!
  const roleTitle = SKILL_TO_ROLE_TITLE[skill] ?? skill
  const avatarIcon = SKILL_TO_ICON[skill] ?? 'code'

  // Pick 2 distinct traits
  const trait1 = traitPool[seed % traitPool.length]!
  let trait2 = traitPool[(seed + 1) % traitPool.length]!
  if (trait2 === trait1) {
    trait2 = traitPool[(seed + 2) % traitPool.length]!
  }

  // Hue: Claude = warm (30-60), Gemini = cool (200-240)
  const baseHue = agent.provider === 'claude' ? 45 : 220
  const avatarHue = (baseHue + (seed % 30) - 15 + 360) % 360

  return {
    id: agent.id,
    firstName,
    roleTitle,
    personalityTraits: [trait1, trait2],
    avatarHue,
    avatarIcon,
    mood: 'idle',
  }
}
