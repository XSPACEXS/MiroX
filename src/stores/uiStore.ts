import { create } from 'zustand'

export type ModalType = 'welcome' | 'templatePreview' | 'success' | null

export interface Toast {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message?: string
  duration?: number
}

interface UIStore {
  sidebarCollapsed: boolean
  activePage: string
  activeModal: ModalType
  toasts: Toast[]
  isSearchOpen: boolean
  toggleSidebar: () => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setActivePage: (page: string) => void
  openModal: (modal: ModalType) => void
  closeModal: () => void
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  toggleSearch: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarCollapsed: false,
  activePage: '/',
  activeModal: null,
  toasts: [],
  isSearchOpen: false,
  toggleSidebar: () => set(state => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
  setActivePage: (activePage) => set({ activePage }),
  openModal: (activeModal) => set({ activeModal }),
  closeModal: () => set({ activeModal: null }),
  addToast: (toast) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`
    set(state => ({ toasts: [...state.toasts, { ...toast, id }] }))
    setTimeout(() => {
      set(state => ({ toasts: state.toasts.filter(t => t.id !== id) }))
    }, toast.duration || 4000)
  },
  removeToast: (id) => set(state => ({ toasts: state.toasts.filter(t => t.id !== id) })),
  toggleSearch: () => set(state => ({ isSearchOpen: !state.isSearchOpen })),
}))
