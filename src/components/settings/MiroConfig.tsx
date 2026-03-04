import { useState, useEffect } from 'react'
import { Spinner } from '../ui/Spinner'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { useMiro } from '../../hooks/useMiro'

export function MiroConfig() {
  const { isConnected, isConnecting, setToken, testConnection } = useMiro()
  const [tokenInput, setTokenInput] = useState('')
  const [maskedToken, setMaskedToken] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined' || !window.electronAPI) return
    window.electronAPI.miro.getToken().then(res => {
      if (res && res.hasToken) {
        setMaskedToken(res.masked)
      }
    })
  }, [isConnected])

  const handleSave = async () => {
    if (!tokenInput.trim()) return
    await setToken(tokenInput.trim())
    setTokenInput('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-2xl text-white mb-1">Miro Connection</h2>
        <p className="text-gray-400 text-sm">Configure your Miro API token to create boards.</p>
      </div>

      {/* Status */}
      <div className="flex items-center gap-3 p-4 glass rounded-xl">
        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
        <div>
          <p className="text-sm font-medium text-white">
            {isConnected ? 'Connected to Miro' : 'Not Connected'}
          </p>
          {maskedToken && (
            <p className="text-xs text-gray-500 font-mono">Token: {maskedToken}</p>
          )}
        </div>
        <div className="ml-auto">
          <Button variant="ghost" size="sm" onClick={testConnection} disabled={isConnecting}>
            {isConnecting ? <Spinner size="sm" /> : 'Test'}
          </Button>
        </div>
      </div>

      {/* Token input */}
      <div className="space-y-3">
        <Input
          label="API Token"
          type="password"
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target.value)}
          placeholder="Paste your Miro REST API token..."
          hint="Get your token from miro.com/app/settings/user-profile/"
        />
        <Button
          variant="primary"
          size="md"
          onClick={handleSave}
          disabled={!tokenInput.trim()}
        >
          Save Token
        </Button>
      </div>
    </div>
  )
}
