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

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

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
    const timeoutId = setTimeout(() => {
      set(state => ({ toasts: state.toasts.filter(t => t.id !== id) }))
      toastTimeouts.delete(id)
    }, toast.duration || 4000)
    toastTimeouts.set(id, timeoutId)
  },
  removeToast: (id) => {
    const timeoutId = toastTimeouts.get(id)
    if (timeoutId) {
      clearTimeout(timeoutId)
      toastTimeouts.delete(id)
    }
    set(state => ({ toasts: state.toasts.filter(t => t.id !== id) }))
  },
  toggleSearch: () => set(state => ({ isSearchOpen: !state.isSearchOpen })),
}))
