import { describe, it, expect } from 'vitest'
import { colors, spacing, radius, shadows, typography, animation } from '../design-system/tokens'
import {
  pageVariants,
  cardVariants,
  modalVariants,
  modalPanelVariants,
  sidebarVariants,
  listContainerVariants,
  listItemVariants,
  toastVariants,
  buttonPressVariants,
  fadeInVariants,
  slideUpVariants,
  stepVariants,
  spinnerVariants,
  progressVariants,
  staggerContainer,
} from '../design-system/animations'

describe('Design Tokens', () => {
  it('exports colors with yellow-400 accent', () => {
    expect(colors.yellow[400]).toBe('#FFD600')
  })

  it('exports colors with black-900 background', () => {
    expect(colors.black[900]).toBe('#0A0A0A')
  })

  it('exports semantic colors', () => {
    expect(colors.success).toBe('#22C55E')
    expect(colors.error).toBe('#EF4444')
    expect(colors.warning).toBe('#F97316')
    expect(colors.info).toBe('#3B82F6')
  })

  it('exports spacing scale', () => {
    expect(spacing[0]).toBe('0px')
    expect(spacing[4]).toBe('16px')
    expect(spacing[8]).toBe('32px')
  })

  it('exports radius values', () => {
    expect(radius.sm).toBe('4px')
    expect(radius.full).toBe('9999px')
  })

  it('exports shadow values including yellow glow', () => {
    expect(shadows.yellowGlow).toBeDefined()
    expect(shadows.yellowGlowLg).toBeDefined()
  })

  it('exports typography with correct font families', () => {
    expect(typography.fontFamily.display).toContain('Space Grotesk')
    expect(typography.fontFamily.body).toContain('Inter')
    expect(typography.fontFamily.mono).toContain('JetBrains Mono')
  })

  it('exports font weights', () => {
    expect(typography.fontWeight.normal).toBe(400)
    expect(typography.fontWeight.bold).toBe(700)
    expect(typography.fontWeight.extrabold).toBe(800)
  })

  it('exports animation timing', () => {
    expect(animation.duration.fast).toBe('150ms')
    expect(animation.duration.normal).toBe('250ms')
    expect(animation.duration.slow).toBe('400ms')
  })
})

describe('Animation Presets', () => {
  it('exports pageVariants with initial/animate/exit', () => {
    expect(pageVariants.initial).toBeDefined()
    expect(pageVariants.animate).toBeDefined()
    expect(pageVariants.exit).toBeDefined()
  })

  it('exports cardVariants', () => {
    expect(cardVariants.initial).toBeDefined()
    expect(cardVariants.animate).toBeDefined()
    expect(cardVariants.hover).toBeDefined()
    expect(cardVariants.tap).toBeDefined()
  })

  it('exports modalVariants', () => {
    expect(modalVariants.initial).toBeDefined()
    expect(modalVariants.animate).toBeDefined()
    expect(modalVariants.exit).toBeDefined()
  })

  it('exports modalPanelVariants', () => {
    expect(modalPanelVariants.initial).toBeDefined()
    expect(modalPanelVariants.animate).toBeDefined()
    expect(modalPanelVariants.exit).toBeDefined()
  })

  it('exports sidebarVariants with expanded/collapsed', () => {
    expect(sidebarVariants.expanded).toBeDefined()
    expect(sidebarVariants.collapsed).toBeDefined()
  })

  it('exports list variants', () => {
    expect(listContainerVariants.animate).toBeDefined()
    expect(listItemVariants.initial).toBeDefined()
    expect(listItemVariants.animate).toBeDefined()
  })

  it('exports toastVariants', () => {
    expect(toastVariants.initial).toBeDefined()
    expect(toastVariants.animate).toBeDefined()
    expect(toastVariants.exit).toBeDefined()
  })

  it('exports buttonPressVariants', () => {
    expect(buttonPressVariants.initial).toBeDefined()
    expect(buttonPressVariants.tap).toBeDefined()
  })

  it('exports fadeInVariants', () => {
    expect(fadeInVariants.initial).toBeDefined()
    expect(fadeInVariants.animate).toBeDefined()
    expect(fadeInVariants.exit).toBeDefined()
  })

  it('exports slideUpVariants', () => {
    expect(slideUpVariants.initial).toBeDefined()
    expect(slideUpVariants.animate).toBeDefined()
  })

  it('exports stepVariants', () => {
    expect(stepVariants.inactive).toBeDefined()
    expect(stepVariants.active).toBeDefined()
    expect(stepVariants.complete).toBeDefined()
  })

  it('exports spinnerVariants', () => {
    expect(spinnerVariants.animate).toBeDefined()
  })

  it('exports progressVariants', () => {
    expect(progressVariants.initial).toBeDefined()
    expect(typeof progressVariants.animate).toBe('function')
  })

  it('staggerContainer returns valid config', () => {
    const config = staggerContainer(0.1, 0.2)
    expect(config.animate).toBeDefined()
  })
})
