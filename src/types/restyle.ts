export interface ScanReport {
  components: string[]
  pages: string[]
  colorTokens: string[]
  borderRadii: string[]
  fonts: string[]
  spacingValues: string[]
  inconsistencies: string[]
}

export interface InspirationImage {
  id: string
  dataUrl: string
  selected: boolean
  fileName: string
}

export interface URLReference {
  id: string
  url: string
  title: string
  domain: string
  tags: string[]
  selected: boolean
  fetchedHtml?: string
}

export interface StyleQuizAnswers {
  corners: 'rounded' | 'sharp' | null
  surfaceEffect: 'glass' | 'solid' | null
  density: number
  animationIntensity: number
  selectedPalette: number | null
  selectedExtractedColors: string[]
}

export interface StyleProposal {
  name: string
  description: string
  tokens: {
    accent: string
    accentDim: string
    background: string
    surface: string
    surfaceBorder: string
    borderRadius: string
    cardStyle: 'glass' | 'solid'
  }
  recommended: boolean
  reasoning: string
}

export type RestyleStep = 1 | 2 | 3 | 4 | 5 | 6
