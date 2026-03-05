import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface RecentBoard {
  id: string
  name: string
  url: string
  templateId: string
  templateName: string
  createdAt: string
  thumbnail?: string
}

interface BoardStore {
  recentBoards: RecentBoard[]
  totalBoardsCreated: number
  isCreating: boolean
  creationProgress: number
  creationStep: string
  lastCreatedBoard: RecentBoard | null
  addRecentBoard: (board: RecentBoard) => void
  removeRecentBoard: (id: string) => void
  clearRecentBoards: () => void
  setCreating: (isCreating: boolean) => void
  setProgress: (progress: number, step?: string) => void
  setLastCreated: (board: RecentBoard) => void
  incrementTotal: () => void
}

export const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      recentBoards: [],
      totalBoardsCreated: 0,
      isCreating: false,
      creationProgress: 0,
      creationStep: '',
      lastCreatedBoard: null,
      addRecentBoard: (board) => set(state => ({
        recentBoards: [board, ...state.recentBoards.filter(b => b.id !== board.id)].slice(0, 10),
      })),
      removeRecentBoard: (id) => set(state => ({
        recentBoards: state.recentBoards.filter(b => b.id !== id),
      })),
      clearRecentBoards: () => set({ recentBoards: [] }),
      setCreating: (isCreating) => set({ isCreating }),
      setProgress: (progress, step) => set({ creationProgress: progress, creationStep: step || '' }),
      setLastCreated: (board) => set({ lastCreatedBoard: board }),
      incrementTotal: () => set(state => ({ totalBoardsCreated: state.totalBoardsCreated + 1 })),
    }),
    {
      name: 'mirox-boards',
    }
  )
)
