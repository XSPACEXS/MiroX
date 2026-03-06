import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface BuilderDraft {
  templateId: string | null
  boardName: string
  boardDescription: string
  fieldValues: Record<string, string>
  currentStep: number
}

interface BuilderDraftStore extends BuilderDraft {
  saveDraft: (draft: Partial<BuilderDraft>) => void
  clearDraft: () => void
}

const INITIAL: BuilderDraft = {
  templateId: null,
  boardName: '',
  boardDescription: '',
  fieldValues: {},
  currentStep: 1,
}

export const useBuilderDraftStore = create<BuilderDraftStore>()(
  persist(
    (set) => ({
      ...INITIAL,
      saveDraft: (draft) => set((state) => ({ ...state, ...draft })),
      clearDraft: () => set(INITIAL),
    }),
    {
      name: 'mirox-builder-draft',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
