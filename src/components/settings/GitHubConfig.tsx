import { useState, useEffect } from 'react'
import { Spinner } from '../ui/Spinner'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { useGitHub } from '../../hooks/useGitHub'

export function GitHubConfig() {
  const { isConnected, isConnecting, user, setToken, disconnect } = useGitHub()
  const [tokenInput, setTokenInput] = useState('')
  const [maskedToken, setMaskedToken] = useState('')

  useEffect(() => {
    window.electronAPI.github.getToken().then(res => {
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
        <h2 className="font-display font-bold text-2xl text-white mb-1">GitHub Integration</h2>
        <p className="text-gray-400 text-sm">Connect a GitHub Personal Access Token to import repositories.</p>
      </div>

      {/* Status */}
      <div className="flex items-center gap-3 p-4 glass rounded-xl">
        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-gray-600'}`} />
        <div>
          <p className="text-sm font-medium text-white">
            {isConnected ? `Connected as ${user?.login || user?.name || 'User'}` : 'Not Connected'}
          </p>
          {maskedToken && (
            <p className="text-xs text-gray-500 font-mono">Token: {maskedToken}</p>
          )}
        </div>
        {isConnected && (
          <Button variant="ghost" size="sm" onClick={disconnect} className="ml-auto text-red-400 hover:text-red-300">
            Disconnect
          </Button>
        )}
      </div>

      {/* Token input */}
      {!isConnected && (
        <div className="space-y-3">
          <Input
            label="Personal Access Token"
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            hint="Needs 'repo' scope for private repositories"
          />
          <div className="flex gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={handleSave}
              disabled={!tokenInput.trim() || isConnecting}
              isLoading={isConnecting}
            >
              Connect
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={() => window.electronAPI.openExternal('https://github.com/settings/tokens/new?scopes=repo&description=MiroX')}
            >
              Create Token on GitHub
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
