import { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/Button'

export function AboutPanel() {
  const [systemInfo, setSystemInfo] = useState<{
    platform: string
    arch: string
    version: string
    appVersion: string
    nodeVersion: string
  } | null>(null)
  const mountedRef = useRef(true)
  useEffect(() => () => { mountedRef.current = false }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.electronAPI) return
    window.electronAPI.getSystemInfo().then(info => {
      if (mountedRef.current) setSystemInfo(info)
    }).catch(() => {})
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-2xl text-white mb-1">About MiroX</h2>
        <p className="text-gray-400 text-sm">Enterprise Miro board builder.</p>
      </div>

      {/* App info */}
      <div className="glass rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center">
            <span className="text-black font-bold text-2xl font-display">M</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">MiroX</h3>
            <p className="text-gray-400 text-sm">v{systemInfo?.appVersion || '1.0.0'}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">
          MiroX is an enterprise-grade board launcher for Miro. Create professional boards from
          30+ templates, import files and GitHub repos, and customize everything with a 4-step wizard.
        </p>

        {/* System info */}
        {systemInfo && (
          <div className="space-y-2 pt-2 border-t border-black-600">
            <InfoRow label="Platform" value={`${systemInfo.platform} ${systemInfo.arch}`} />
            <InfoRow label="Electron" value={systemInfo.version} />
            <InfoRow label="Node.js" value={systemInfo.nodeVersion} />
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.electronAPI?.openExternal('https://github.com/XSPACEXS/MiroX')}
        >
          GitHub
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.electronAPI?.openExternal('https://miro.com')}
        >
          Miro.com
        </Button>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="text-xs text-gray-300 font-mono">{value}</span>
    </div>
  )
}
