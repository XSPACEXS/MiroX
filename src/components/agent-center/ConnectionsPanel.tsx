import { useState, useEffect } from 'react'
import { Plug, X } from 'lucide-react'
import { useClaude } from '@hooks/useClaude'
import { useGemini } from '@hooks/useGemini'

interface ConnectionCardProps {
  name: string
  isConnected: boolean
  isConnecting: boolean
  maskedKey?: string
  statusDetail?: string
  hint: string
  onSave: (token: string) => void
  onTest: () => void
  onDisconnect?: () => void
}

function StatusDot({ connected, checking }: { connected: boolean; checking: boolean }): JSX.Element {
  if (checking) return <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shrink-0" />
  if (connected) return <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
  return <div className="w-2 h-2 rounded-full bg-gray-500 shrink-0" />
}

function ConnectionCard({
  name,
  isConnected,
  isConnecting,
  maskedKey,
  statusDetail,
  hint,
  onSave,
  onTest,
  onDisconnect,
}: ConnectionCardProps): JSX.Element {
  const [tokenInput, setTokenInput] = useState('')

  return (
    <div className="rounded-xl border border-black-600 bg-black-700/50 p-3 space-y-2">
      <div className="flex items-center gap-2">
        <StatusDot connected={isConnected} checking={isConnecting} />
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs text-gray-500 ml-auto">
          {isConnecting ? 'Checking...' : isConnected ? 'Connected' : 'Not connected'}
        </span>
      </div>

      {maskedKey && (
        <p className="text-[11px] font-mono text-gray-500 pl-4">Key: {maskedKey}</p>
      )}

      {statusDetail && (
        <p className="text-[11px] text-gray-500 pl-4">{statusDetail}</p>
      )}

      <div className="flex items-center gap-2 pl-4">
        <input
          type="password"
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target.value)}
          placeholder="Paste API key..."
          className="flex-1 bg-black-800 border border-black-500 rounded-lg text-xs text-white placeholder-gray-600 px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-yellow-400/50"
        />
        <button
          onClick={() => {
            if (tokenInput.trim()) {
              onSave(tokenInput.trim())
              setTokenInput('')
            }
          }}
          disabled={!tokenInput.trim() || isConnecting}
          className="px-3 py-1.5 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-xs text-yellow-400 hover:bg-yellow-400/20 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>

      <div className="flex items-center gap-2 pl-4">
        <button
          onClick={onTest}
          disabled={isConnecting}
          className="text-[11px] text-gray-500 hover:text-gray-300 transition-colors disabled:opacity-40"
        >
          {isConnecting ? 'Testing...' : 'Test connection'}
        </button>
        {isConnected && onDisconnect && (
          <>
            <span className="text-gray-600">|</span>
            <button
              onClick={onDisconnect}
              className="text-[11px] text-gray-500 hover:text-red-400 transition-colors"
            >
              Disconnect
            </button>
          </>
        )}
        <span className="text-[11px] text-gray-600 ml-auto">{hint}</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// iCloud status (read-only)
// ---------------------------------------------------------------------------

function ICloudCard(): JSX.Element {
  const [status, setStatus] = useState<'checking' | 'connected' | 'not-found'>('checking')

  useEffect(() => {
    let cancelled = false
    const check = async () => {
      try {
        if (window.electronAPI?.system?.checkiCloud) {
          const result = await window.electronAPI.system.checkiCloud()
          if (!cancelled) setStatus(result.ok ? 'connected' : 'not-found')
        } else {
          if (!cancelled) setStatus('not-found')
        }
      } catch {
        if (!cancelled) setStatus('not-found')
      }
    }
    void check()
    return () => { cancelled = true }
  }, [])

  return (
    <div className="rounded-xl border border-black-600 bg-black-700/50 p-3">
      <div className="flex items-center gap-2">
        <StatusDot connected={status === 'connected'} checking={status === 'checking'} />
        <span className="text-sm font-medium text-white">iCloud</span>
        <span className="text-xs text-gray-500 ml-auto">
          {status === 'checking'
            ? 'Checking...'
            : status === 'connected'
              ? 'Detected'
              : 'Not detected'}
        </span>
      </div>
      <p className="text-[11px] text-gray-600 pl-4 mt-1">
        {status === 'connected'
          ? 'iCloud account found on this Mac'
          : status === 'not-found'
            ? 'Sign in via System Settings to enable'
            : 'Checking system accounts...'}
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Connections strip (compact dots for header)
// ---------------------------------------------------------------------------

interface ConnectionsStripProps {
  onClick: () => void
  claudeConnected: boolean
  geminiConnected: boolean
}

export function ConnectionsStrip({ onClick, claudeConnected, geminiConnected }: ConnectionsStripProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-black-600 hover:border-yellow-400/20 hover:bg-yellow-400/5 transition-colors"
      aria-label="Toggle connections panel"
    >
      <Plug size={12} className="text-gray-500" />
      <div className={`w-1.5 h-1.5 rounded-full ${claudeConnected ? 'bg-green-400' : 'bg-gray-500'}`} title="Claude" />
      <div className={`w-1.5 h-1.5 rounded-full ${geminiConnected ? 'bg-green-400' : 'bg-gray-500'}`} title="Gemini" />
    </button>
  )
}

// ---------------------------------------------------------------------------
// Full panel
// ---------------------------------------------------------------------------

interface ConnectionsPanelProps {
  onClose: () => void
}

export function ConnectionsPanel({ onClose }: ConnectionsPanelProps): JSX.Element {
  const claude = useClaude()
  const gemini = useGemini()

  return (
    <div className="rounded-2xl border border-black-600 bg-black-800/90 backdrop-blur-sm p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plug size={14} className="text-yellow-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Connections</h3>
        </div>
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-black-600 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label="Close connections panel"
        >
          <X size={12} />
        </button>
      </div>

      <ConnectionCard
        name="Claude"
        isConnected={claude.isConnected}
        isConnecting={claude.isConnecting}
        maskedKey={claude.maskedKey}
        statusDetail={claude.version ? `CLI: ${claude.version}` : undefined}
        hint="console.anthropic.com"
        onSave={(token) => void claude.setToken(token)}
        onTest={() => void claude.testConnection()}
        onDisconnect={() => void claude.disconnect()}
      />

      <ConnectionCard
        name="Gemini"
        isConnected={gemini.isConnected}
        isConnecting={gemini.isConnecting}
        hint="aistudio.google.com"
        onSave={(token) => void gemini.setToken(token)}
        onTest={() => void gemini.testConnection()}
        onDisconnect={() => void gemini.disconnect()}
      />

      <ICloudCard />
    </div>
  )
}
