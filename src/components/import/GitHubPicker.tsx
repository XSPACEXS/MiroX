import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Spinner } from '@components/ui/Spinner'
import { useGitHub } from '../../hooks/useGitHub'
import type { ParsedContent } from '../../types/import'

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'today'
  if (diffDays === 1) return 'yesterday'
  if (diffDays < 30) return `${diffDays}d ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`
  return `${Math.floor(diffDays / 365)}y ago`
}

interface GitHubPickerProps {
  onAnalysisReady?: (analysis: ParsedContent) => void
}

export default function GitHubPicker({ onAnalysisReady }: GitHubPickerProps) {
  const {
    user, isConnected, isConnecting, repos, isLoadingRepos,
    selectedRepo, analysis, isAnalyzing,
    setToken, disconnect, selectRepo, analyzeRepo,
  } = useGitHub()

  const [tokenInput, setTokenInput] = useState('')
  const [search, setSearch] = useState('')

  const filteredRepos = useMemo(() => {
    if (!search.trim()) return repos
    const q = search.toLowerCase()
    return repos.filter(r =>
      r.name?.toLowerCase().includes(q) ||
      r.full_name?.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q) ||
      r.language?.toLowerCase().includes(q)
    )
  }, [repos, search])

  const handleConnect = async () => {
    if (!tokenInput.trim()) return
    await setToken(tokenInput.trim())
    setTokenInput('')
  }

  const handleAnalyze = async () => {
    if (!selectedRepo) return
    await analyzeRepo(selectedRepo)
    if (analysis && onAnalysisReady) {
      onAnalysisReady(analysis)
    }
  }

  // Not connected state
  if (!isConnected) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center min-h-[320px] gap-6 px-8"
      >
        <div className="w-16 h-16 rounded-2xl bg-black-700 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>

        <div className="text-center">
          <h3 className="text-white font-semibold text-lg">Connect to GitHub</h3>
          <p className="text-gray-400 text-sm mt-1 max-w-sm">
            Enter a Personal Access Token to import repositories.
            Needs <span className="text-yellow-400">repo</span> scope for private repos.
          </p>
        </div>

        <div className="w-full max-w-md space-y-3">
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleConnect()}
            placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
            aria-label="GitHub personal access token"
            className="w-full px-4 py-3 rounded-lg bg-black-800 border border-black-500 text-white text-sm font-mono placeholder:text-gray-600 focus:border-yellow-400/50 focus:outline-none focus:ring-1 focus:ring-yellow-400/20 transition-colors"
          />
          <button
            onClick={handleConnect}
            disabled={!tokenInput.trim() || isConnecting}
            className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isConnecting ? (
              <>
                <Spinner size="sm" className="border-black/20 border-t-black" />
                Connecting...
              </>
            ) : (
              'Connect'
            )}
          </button>
        </div>

        <button
          onClick={() => window.electronAPI.openExternal('https://github.com/settings/tokens/new?scopes=repo&description=MiroX')}
          className="text-xs text-gray-500 hover:text-yellow-400 transition-colors"
        >
          Create a token on GitHub
        </button>
      </motion.div>
    )
  }

  // Connected state
  return (
    <div className="space-y-4">
      {/* User header */}
      <div className="flex items-center justify-between p-3 rounded-lg bg-black-800/60 border border-black-600">
        <div className="flex items-center gap-3">
          {user?.avatar_url && (
            <img src={user.avatar_url} alt="" className="w-8 h-8 rounded-full" />
          )}
          <div>
            <p className="text-sm text-white font-medium">{user?.name || user?.login || 'Connected'}</p>
            <p className="text-xs text-gray-500">{user?.login ? `@${user.login}` : 'GitHub'}</p>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-400/10 text-green-400 border border-green-400/20">
            Connected
          </span>
        </div>
        <button
          onClick={disconnect}
          className="text-xs text-gray-500 hover:text-red-400 transition-colors"
        >
          Disconnect
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search repositories..."
          aria-label="Search repositories"
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-black-800 border border-black-500 text-white text-sm placeholder:text-gray-600 focus:border-yellow-400/50 focus:outline-none focus:ring-1 focus:ring-yellow-400/20 transition-colors"
        />
      </div>

      {/* Repo list */}
      <div className="max-h-[320px] overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-black-600">
        {isLoadingRepos ? (
          <div className="flex items-center justify-center py-12">
            <Spinner size="md" />
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            {search ? 'No repos match your search' : 'No repositories found'}
          </div>
        ) : (
          <AnimatePresence>
            {filteredRepos.map((repo, i) => (
              <motion.button
                key={repo.id || repo.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                onClick={() => selectRepo(repo)}
                className={`w-full text-left p-3 rounded-lg border transition-all ${
                  selectedRepo?.id === repo.id
                    ? 'bg-yellow-400/5 border-yellow-400/30 ring-1 ring-yellow-400/10'
                    : 'bg-black-800/40 border-black-600 hover:border-black-500 hover:bg-black-800/60'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate flex items-center gap-1.5">
                      {repo.name}
                      {repo.private && (
                        <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      )}
                    </p>
                    {repo.description && (
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{repo.description}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-600 flex-shrink-0 whitespace-nowrap">
                    {formatDate(repo.updated_at)}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || '#888' }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Analyze button */}
      {selectedRepo && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <Spinner size="sm" className="border-black/20 border-t-black" />
                Analyzing {selectedRepo.name}...
              </>
            ) : (
              <>
                Analyze {selectedRepo.name}
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  )
}
