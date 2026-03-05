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
  lastCreatedBoard: RecentBoard | null
  addRecentBoard: (board: RecentBoard) => void
  removeRecentBoard: (id: string) => void
  clearRecentBoards: () => void
  setLastCreated: (board: RecentBoard) => void
  incrementTotal: () => void
}

export const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      recentBoards: [],
      totalBoardsCreated: 0,
      lastCreatedBoard: null,
      addRecentBoard: (board) => set(state => ({
        recentBoards: [board, ...state.recentBoards.filter(b => b.id !== board.id)].slice(0, 10),
      })),
      removeRecentBoard: (id) => set(state => ({
        recentBoards: state.recentBoards.filter(b => b.id !== id),
      })),
      clearRecentBoards: () => set({ recentBoards: [] }),
      setLastCreated: (board) => set({ lastCreatedBoard: board }),
      incrementTotal: () => set(state => ({ totalBoardsCreated: state.totalBoardsCreated + 1 })),
    }),
    {
      name: 'mirox-boards',
      partialize: (state) => ({
        recentBoards: state.recentBoards,
        totalBoardsCreated: state.totalBoardsCreated,
      }),
    }
  )
)
