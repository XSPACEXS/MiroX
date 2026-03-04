import { useUIStore } from '../../stores/uiStore'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { StatusBar } from './StatusBar'
import { ToastContainer } from '../ui/Toast'
import type { ReactNode } from 'react'

export default function AppShell({ children }: { children: ReactNode }) {
  const sidebarCollapsed = useUIStore(s => s.sidebarCollapsed)

  return (
    <div className="flex h-screen bg-black-900 overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
        <StatusBar />
      </div>
      <ToastContainer />
    </div>
  )
}
