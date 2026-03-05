import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import AppShell from '@components/layout/AppShell'
import { Spinner } from '@components/ui/Spinner'
import { ErrorBoundary } from '@components/ui/ErrorBoundary'

const Home = lazy(() => import('@pages/Home'))
const Templates = lazy(() => import('@pages/Templates'))
const Import = lazy(() => import('@pages/Import'))
const Builder = lazy(() => import('@pages/Builder'))
const Settings = lazy(() => import('@pages/Settings'))
const AgentCenter = lazy(() => import('@pages/AgentCenter'))

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  // Listen for navigation events from Electron main process (menu commands)
  useEffect(() => {
    const api = window.electronAPI
    if (!api?.onNavigate) return

    const cleanup = api.onNavigate((path: string) => {
      navigate(path)
    })

    return cleanup
  }, [navigate])

  return (
    <AppShell>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              <Spinner size="lg" />
            </div>
          }
        >
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/import" element={<Import />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/agent-center" element={<AgentCenter />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
    </AppShell>
  )
}
