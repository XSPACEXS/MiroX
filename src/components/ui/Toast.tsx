import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useUIStore, type Toast as ToastType } from '../../stores/uiStore'
import { toastVariants } from '../../design-system/animations'

const icons: Record<ToastType['type'], typeof CheckCircle> = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
}

const styles: Record<ToastType['type'], string> = {
  success: 'border-green-500/50 bg-green-500/10',
  error: 'border-red-500/50 bg-red-500/10',
  info: 'border-blue-500/50 bg-blue-500/10',
  warning: 'border-orange-500/50 bg-orange-500/10',
}

const iconColors: Record<ToastType['type'], string> = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-orange-400',
}

function ToastItem({ toast }: { toast: ToastType }) {
  const removeToast = useUIStore(s => s.removeToast)
  const Icon = icons[toast.type]

  return (
    <motion.div
      layout
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex items-start gap-3 px-4 py-3 rounded-xl border backdrop-blur-lg ${styles[toast.type]}`}
    >
      <Icon size={18} className={`mt-0.5 flex-shrink-0 ${iconColors[toast.type]}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">{toast.title}</p>
        {toast.message && <p className="text-xs text-gray-400 mt-0.5">{toast.message}</p>}
      </div>
      <button onClick={() => removeToast(toast.id)} aria-label="Dismiss notification" className="p-0.5 text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 rounded">
        <X size={14} />
      </button>
    </motion.div>
  )
}

export function ToastContainer() {
  const toasts = useUIStore(s => s.toasts)

  return (
    <div role="region" aria-live="polite" aria-label="Notifications" className="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-80 max-w-[calc(100vw-2rem)] pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map(toast => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export function useToast() {
  const addToast = useUIStore(s => s.addToast)
  return {
    success: (title: string, message?: string) => addToast({ type: 'success', title, message }),
    error: (title: string, message?: string) => addToast({ type: 'error', title, message }),
    info: (title: string, message?: string) => addToast({ type: 'info', title, message }),
    warning: (title: string, message?: string) => addToast({ type: 'warning', title, message }),
  }
}
