import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type {
  RestyleStep,
  ScanReport,
  InspirationImage,
  URLReference,
  StyleQuizAnswers,
  StyleProposal,
} from '@/types/restyle'

interface RestyleState {
  currentStep: RestyleStep
  isOpen: boolean
  scanReport: ScanReport | null
  scanAgentId: string | null
  isScanRunning: boolean
  inspirationImages: InspirationImage[]
  urlReferences: URLReference[]
  freeTextVision: string
  colorExtractionAgentId: string | null
  extractedColors: string[]
  quizAnswers: StyleQuizAnswers
  proposals: StyleProposal[]
  selectedProposalIndex: number | null
  isGeneratingProposals: boolean
  applyAgentId: string | null
  isApplying: boolean
  applyProgress: { step: string; done: boolean }[]

  // Actions
  setStep: (step: RestyleStep) => void
  openWizard: () => void
  closeWizard: () => void
  setScanReport: (report: ScanReport) => void
  setScanAgentId: (id: string | null) => void
  setIsScanRunning: (running: boolean) => void
  addImage: (image: InspirationImage) => void
  removeImage: (id: string) => void
  toggleImageSelection: (id: string) => void
  addUrl: (ref: URLReference) => void
  removeUrl: (id: string) => void
  toggleUrlSelection: (id: string) => void
  setFreeText: (text: string) => void
  setColorExtractionAgentId: (id: string | null) => void
  setExtractedColors: (colors: string[]) => void
  updateQuizAnswer: <K extends keyof StyleQuizAnswers>(key: K, value: StyleQuizAnswers[K]) => void
  setProposals: (proposals: StyleProposal[]) => void
  selectProposal: (index: number | null) => void
  setIsGeneratingProposals: (generating: boolean) => void
  setApplyAgentId: (id: string | null) => void
  setIsApplying: (applying: boolean) => void
  setApplyProgress: (progress: { step: string; done: boolean }[]) => void
  reset: () => void
}

const initialQuizAnswers: StyleQuizAnswers = {
  corners: null,
  surfaceEffect: null,
  density: 50,
  animationIntensity: 50,
  selectedPalette: null,
  selectedExtractedColors: [],
}

const initialState = {
  currentStep: 1 as RestyleStep,
  isOpen: false,
  scanReport: null,
  scanAgentId: null,
  isScanRunning: false,
  inspirationImages: [],
  urlReferences: [],
  freeTextVision: '',
  colorExtractionAgentId: null,
  extractedColors: [],
  quizAnswers: initialQuizAnswers,
  proposals: [],
  selectedProposalIndex: null,
  isGeneratingProposals: false,
  applyAgentId: null,
  isApplying: false,
  applyProgress: [],
}

export const useRestyleStore = create<RestyleState>()(
  immer((set) => ({
    ...initialState,

    setStep: (step) =>
      set((state) => {
        state.currentStep = step
      }),

    openWizard: () =>
      set((state) => {
        state.isOpen = true
        state.currentStep = 1
      }),

    closeWizard: () =>
      set((state) => {
        state.isOpen = false
      }),

    setScanReport: (report) =>
      set((state) => {
        state.scanReport = report
      }),

    setScanAgentId: (id) =>
      set((state) => {
        state.scanAgentId = id
      }),

    setIsScanRunning: (running) =>
      set((state) => {
        state.isScanRunning = running
      }),

    addImage: (image) =>
      set((state) => {
        if (state.inspirationImages.length < 8) {
          state.inspirationImages.push(image)
        }
      }),

    removeImage: (id) =>
      set((state) => {
        state.inspirationImages = state.inspirationImages.filter((img) => img.id !== id)
      }),

    toggleImageSelection: (id) =>
      set((state) => {
        const img = state.inspirationImages.find((i) => i.id === id)
        if (img) img.selected = !img.selected
      }),

    addUrl: (ref) =>
      set((state) => {
        state.urlReferences.push(ref)
      }),

    removeUrl: (id) =>
      set((state) => {
        state.urlReferences = state.urlReferences.filter((u) => u.id !== id)
      }),

    toggleUrlSelection: (id) =>
      set((state) => {
        const url = state.urlReferences.find((u) => u.id === id)
        if (url) url.selected = !url.selected
      }),

    setFreeText: (text) =>
      set((state) => {
        state.freeTextVision = text
      }),

    setColorExtractionAgentId: (id) =>
      set((state) => {
        state.colorExtractionAgentId = id
      }),

    setExtractedColors: (colors) =>
      set((state) => {
        state.extractedColors = colors
      }),

    updateQuizAnswer: (key, value) =>
      set((state) => {
        state.quizAnswers[key] = value
      }),

    setProposals: (proposals) =>
      set((state) => {
        state.proposals = proposals
      }),

    selectProposal: (index) =>
      set((state) => {
        state.selectedProposalIndex = index
      }),

    setIsGeneratingProposals: (generating) =>
      set((state) => {
        state.isGeneratingProposals = generating
      }),

    setApplyAgentId: (id) =>
      set((state) => {
        state.applyAgentId = id
      }),

    setIsApplying: (applying) =>
      set((state) => {
        state.isApplying = applying
      }),

    setApplyProgress: (progress) =>
      set((state) => {
        state.applyProgress = progress
      }),

    reset: () =>
      set((state) => {
        Object.assign(state, initialState)
      }),
  }))
)
