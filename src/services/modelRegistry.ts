// Model Registry — single source of truth for all AI models available in MiroX

export type ProviderKey = 'claude' | 'gemini'

export type ModelCapability =
  | 'text-generation'
  | 'code-generation'
  | 'code-editing'
  | 'image-generation'
  | 'video-generation'
  | 'reasoning'
  | 'tool-use'

export type ModelTier = 'flagship' | 'standard' | 'fast' | 'lite'

export type ModelOutputType = 'text' | 'image' | 'video'

export interface ModelDefinition {
  id: string
  label: string
  provider: ProviderKey
  apiModelId: string
  capabilities: ModelCapability[]
  tier: ModelTier
  description: string
  canBePrimary: boolean
  supportsTools: boolean
  outputType: ModelOutputType
  maxOutputTokens: number | null
  badgeColor: 'purple' | 'blue' | 'green' | 'yellow' | 'orange' | 'red' | 'gray'
  providerIcon: 'bot' | 'sparkles' | 'image' | 'video'
}

// --- Claude models ---

const CLAUDE_OPUS: ModelDefinition = {
  id: 'opus',
  label: 'Opus 4.6',
  provider: 'claude',
  apiModelId: 'claude-opus-4-6',
  capabilities: ['text-generation', 'code-generation', 'code-editing', 'reasoning', 'tool-use'],
  tier: 'flagship',
  description: 'Most capable. Complex refactors, architecture, deep review.',
  canBePrimary: true,
  supportsTools: true,
  outputType: 'text',
  maxOutputTokens: 32768,
  badgeColor: 'purple',
  providerIcon: 'bot',
}

const CLAUDE_SONNET: ModelDefinition = {
  id: 'sonnet',
  label: 'Sonnet 4.6',
  provider: 'claude',
  apiModelId: 'claude-sonnet-4-6',
  capabilities: ['text-generation', 'code-generation', 'code-editing', 'reasoning', 'tool-use'],
  tier: 'standard',
  description: 'Best balance of speed and capability. Feature work, bug fixes.',
  canBePrimary: true,
  supportsTools: true,
  outputType: 'text',
  maxOutputTokens: 16384,
  badgeColor: 'blue',
  providerIcon: 'bot',
}

const CLAUDE_HAIKU: ModelDefinition = {
  id: 'haiku',
  label: 'Haiku 4.5',
  provider: 'claude',
  apiModelId: 'claude-haiku-4-5-20251001',
  capabilities: ['text-generation', 'code-generation', 'code-editing', 'tool-use'],
  tier: 'fast',
  description: 'Fast and cheap. Linting, simple fixes, builds.',
  canBePrimary: true,
  supportsTools: true,
  outputType: 'text',
  maxOutputTokens: 8192,
  badgeColor: 'green',
  providerIcon: 'bot',
}

// --- Gemini text models ---

const GEMINI_PRO: ModelDefinition = {
  id: 'gemini-pro',
  label: 'Gemini 2.5 Pro',
  provider: 'gemini',
  apiModelId: 'gemini-2.5-pro-preview-06-05',
  capabilities: ['text-generation', 'code-generation', 'reasoning'],
  tier: 'flagship',
  description: 'Google flagship. Long context, strong reasoning.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'text',
  maxOutputTokens: 16384,
  badgeColor: 'blue',
  providerIcon: 'sparkles',
}

const GEMINI_FLASH: ModelDefinition = {
  id: 'gemini-flash',
  label: 'Gemini 2.5 Flash',
  provider: 'gemini',
  apiModelId: 'gemini-2.5-flash-preview-04-17',
  capabilities: ['text-generation', 'code-generation'],
  tier: 'standard',
  description: 'Fast Gemini. Good for design audits and reviews.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'text',
  maxOutputTokens: 8192,
  badgeColor: 'green',
  providerIcon: 'sparkles',
}

const GEMINI_FLASH_2: ModelDefinition = {
  id: 'gemini-flash-2',
  label: 'Gemini 2.0 Flash',
  provider: 'gemini',
  apiModelId: 'gemini-2.0-flash',
  capabilities: ['text-generation'],
  tier: 'fast',
  description: 'Very fast. Quick summaries and simple tasks.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'text',
  maxOutputTokens: 8192,
  badgeColor: 'yellow',
  providerIcon: 'sparkles',
}

const GEMINI_FLASH_LITE: ModelDefinition = {
  id: 'gemini-flash-lite',
  label: 'Flash Lite',
  provider: 'gemini',
  apiModelId: 'gemini-2.0-flash-lite',
  capabilities: ['text-generation'],
  tier: 'lite',
  description: 'Cheapest Gemini. Minimal tasks only.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'text',
  maxOutputTokens: 4096,
  badgeColor: 'gray',
  providerIcon: 'sparkles',
}

// --- Gemini image models ---

const GEMINI_IMAGEN: ModelDefinition = {
  id: 'gemini-imagen',
  label: 'Imagen 4',
  provider: 'gemini',
  apiModelId: 'imagen-4.0-generate-001',
  capabilities: ['image-generation'],
  tier: 'standard',
  description: 'Generate high-quality images from text prompts.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'image',
  maxOutputTokens: null,
  badgeColor: 'orange',
  providerIcon: 'image',
}

const GEMINI_IMAGEN_FAST: ModelDefinition = {
  id: 'gemini-imagen-fast',
  label: 'Imagen 4 Fast',
  provider: 'gemini',
  apiModelId: 'imagen-4.0-fast-generate-001',
  capabilities: ['image-generation'],
  tier: 'fast',
  description: 'Fast image generation. Lower quality, higher speed.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'image',
  maxOutputTokens: null,
  badgeColor: 'yellow',
  providerIcon: 'image',
}

const GEMINI_NANO_BANANA: ModelDefinition = {
  id: 'gemini-nano-banana',
  label: 'Nano Banana 2',
  provider: 'gemini',
  apiModelId: 'gemini-3.1-flash-image-preview',
  capabilities: ['text-generation', 'image-generation'],
  tier: 'standard',
  description: 'Text + image generation in one model. Great for design mockups.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'image',
  maxOutputTokens: 8192,
  badgeColor: 'orange',
  providerIcon: 'image',
}

// --- Gemini video models ---

const GEMINI_VEO: ModelDefinition = {
  id: 'gemini-veo',
  label: 'Veo 3.1',
  provider: 'gemini',
  apiModelId: 'veo-3.1-generate-preview',
  capabilities: ['video-generation'],
  tier: 'flagship',
  description: 'Generate short videos from text. Realistic motion and physics.',
  canBePrimary: false,
  supportsTools: false,
  outputType: 'video',
  maxOutputTokens: null,
  badgeColor: 'red',
  providerIcon: 'video',
}

// --- Exports ---

export const ALL_MODELS: readonly ModelDefinition[] = [
  CLAUDE_OPUS,
  CLAUDE_SONNET,
  CLAUDE_HAIKU,
  GEMINI_PRO,
  GEMINI_FLASH,
  GEMINI_FLASH_2,
  GEMINI_FLASH_LITE,
  GEMINI_IMAGEN,
  GEMINI_IMAGEN_FAST,
  GEMINI_NANO_BANANA,
  GEMINI_VEO,
] as const

export const CLAUDE_MODELS = ALL_MODELS.filter((m) => m.provider === 'claude')
export const GEMINI_TEXT_MODELS = ALL_MODELS.filter(
  (m) => m.provider === 'gemini' && m.outputType === 'text'
)
export const GEMINI_MEDIA_MODELS = ALL_MODELS.filter(
  (m) => m.provider === 'gemini' && m.outputType !== 'text'
)

export function getModelById(id: string): ModelDefinition | undefined {
  return ALL_MODELS.find((m) => m.id === id)
}

export function getModelsByProvider(provider: ProviderKey): ModelDefinition[] {
  return ALL_MODELS.filter((m) => m.provider === provider)
}

export function getPrimaryModels(): ModelDefinition[] {
  return ALL_MODELS.filter((m) => m.canBePrimary)
}

export function getCollaboratorModels(): ModelDefinition[] {
  return ALL_MODELS.filter((m) => !m.canBePrimary)
}

// --- Collaborator roles ---

export interface CollaboratorRole {
  id: string
  label: string
  instruction: string
}

export const COLLABORATOR_ROLES: readonly CollaboratorRole[] = [
  {
    id: 'content-writer',
    label: 'Content Writer',
    instruction: 'Focus on copywriting, documentation, content structure, and clear communication.',
  },
  {
    id: 'design-specialist',
    label: 'Design Specialist',
    instruction:
      'Focus on UI/UX design, visual layout, styling, color theory, and aesthetic improvements.',
  },
  {
    id: 'code-reviewer',
    label: 'Code Reviewer',
    instruction:
      'Focus on code quality, best practices, performance, type safety, and maintainability.',
  },
  {
    id: 'security-auditor',
    label: 'Security Auditor',
    instruction:
      'Focus on security vulnerabilities, input validation, XSS/CSRF prevention, and hardening.',
  },
  {
    id: 'custom',
    label: 'Custom',
    instruction: '',
  },
] as const
