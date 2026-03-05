import { useState, useEffect, useRef } from 'react'
import { Spinner } from '../ui/Spinner'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { useGemini } from '../../hooks/useGemini'

export function GeminiConfig() {
  const { isConnected, isConnecting, setToken, testConnection } = useGemini()
  const [tokenInput, setTokenInput] = useState('')
  const [maskedToken, setMaskedToken] = useState('')
  const mountedRef = useRef(true)
  useEffect(() => () => { mountedRef.current = false }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.electronAPI) return
    void (window.electronAPI.gemini.getToken() as Promise<{
      ok: boolean
      hasToken?: boolean
      masked?: string
      token?: string | null
    }>).then(res => {
      if (!mountedRef.current) return
      if (res && (res.hasToken || res.token)) {
        setMaskedToken(res.masked || '')
      }
    })
  }, [isConnected])

  const handleSave = async () => {
    if (!tokenInput.trim()) return
    await setToken(tokenInput.trim())
    if (!mountedRef.current) return
    setTokenInput('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display font-bold text-2xl text-white mb-1">Gemini Connection</h2>
        <p className="text-gray-400 text-sm">Configure your Google Gemini API key for AI design tasks.</p>
      </div>

      {/* Status */}
      <div className="flex items-center gap-3 p-4 glass rounded-xl">
        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
        <div>
          <p className="text-sm font-medium text-white">
            {isConnected ? 'Connected to Gemini' : 'Not Connected'}
          </p>
          {maskedToken && (
            <p className="text-xs text-gray-500 font-mono">Key: {maskedToken}</p>
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
          label="API Key"
          type="password"
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target.value)}
          placeholder="Paste your Gemini API key..."
          hint="Get your API key from aistudio.google.com/apikey"
        />
        <Button
          variant="primary"
          size="md"
          onClick={handleSave}
          disabled={!tokenInput.trim()}
        >
          Save Key
        </Button>
      </div>
    </div>
  )
}
