// --- Mood system ---

export type AgentMood = 'focused' | 'excited' | 'frustrated' | 'idle' | 'thinking' | 'celebrating'

export interface MoodConfig {
  glowColor: string
  glowRgba: string
  bubbleStyle: 'calm' | 'energetic' | 'tense' | 'dim' | 'pulsing' | 'sparkle'
  animationSpeed: number
}

export const MOOD_CONFIGS: Record<AgentMood, MoodConfig> = {
  focused: {
    glowColor: 'yellow-400',
    glowRgba: 'rgba(255,214,0,0.15)',
    bubbleStyle: 'calm',
    animationSpeed: 1.0,
  },
  excited: {
    glowColor: 'green-400',
    glowRgba: 'rgba(74,222,128,0.15)',
    bubbleStyle: 'energetic',
    animationSpeed: 1.5,
  },
  frustrated: {
    glowColor: 'red-400',
    glowRgba: 'rgba(248,113,113,0.15)',
    bubbleStyle: 'tense',
    animationSpeed: 0.7,
  },
  idle: {
    glowColor: 'gray-500',
    glowRgba: 'rgba(107,114,128,0.1)',
    bubbleStyle: 'dim',
    animationSpeed: 0.3,
  },
  thinking: {
    glowColor: 'purple-400',
    glowRgba: 'rgba(192,132,252,0.15)',
    bubbleStyle: 'pulsing',
    animationSpeed: 0.8,
  },
  celebrating: {
    glowColor: 'yellow-300',
    glowRgba: 'rgba(253,224,71,0.25)',
    bubbleStyle: 'sparkle',
    animationSpeed: 2.0,
  },
}

// --- Personality ---

export type PersonalityTrait =
  | 'meticulous' | 'enthusiastic' | 'cautious' | 'creative'
  | 'analytical' | 'tenacious' | 'pragmatic' | 'methodical'
  | 'curious' | 'decisive' | 'patient' | 'bold'

// --- Character identity ---

export type AvatarIcon = 'shield' | 'code' | 'search' | 'paintbrush' | 'flask' | 'cpu' | 'bug' | 'rocket' | 'wrench' | 'eye'

export interface AgentCharacter {
  id: string
  firstName: string
  roleTitle: string
  personalityTraits: [PersonalityTrait, PersonalityTrait]
  avatarHue: number
  avatarIcon: AvatarIcon
  mood: AgentMood
}

// --- Stats ---

export interface AgentStats {
  filesTouched: number
  linesChanged: number
  toolsUsed: string[]
  activeSeconds: number
  errorsEncountered: number
}

// --- Interactions ---

export type InteractionType = 'handoff' | 'waiting' | 'helping' | 'celebration' | 'error_report'

export interface AgentInteraction {
  id: string
  timestamp: number
  type: InteractionType
  fromAgentId: string
  toAgentId: string | null
  message: string
}

// --- File ownership ---

export interface FileMapEntry {
  path: string
  ownerAgentId: string
  lastAction: 'read' | 'write' | 'edit' | 'create'
  timestamp: number
}

// --- Page state ---

export type AgentCenterPageState = 'idle' | 'planning' | 'working' | 'verifying' | 'done'
