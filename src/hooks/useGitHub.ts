import { useState, useEffect, useCallback, useRef } from 'react'
import type { GitHubRepo, GitHubUser } from '../types/github'
import type { ParsedContent } from '../types/import'

interface UseGitHubReturn {
  token: string | null
  user: GitHubUser | null
  isConnected: boolean
  isConnecting: boolean
  repos: GitHubRepo[]
  isLoadingRepos: boolean
  selectedRepo: GitHubRepo | null
  analysis: ParsedContent | null
  isAnalyzing: boolean
  setToken: (token: string) => Promise<void>
  disconnect: () => Promise<void>
  loadRepos: () => Promise<void>
  selectRepo: (repo: GitHubRepo) => void
  analyzeRepo: (repo: GitHubRepo) => Promise<void>
}

export function useGitHub(): UseGitHubReturn {
  const isElectronRef = useRef(typeof window !== 'undefined' && !!window.electronAPI)

  const [token, setTokenState] = useState<string | null>(null)
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [isLoadingRepos, setIsLoadingRepos] = useState(false)
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null)
  const [analysis, setAnalysis] = useState<ParsedContent | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const loadReposInternal = useCallback(async () => {
    if (!isElectronRef.current) return
    setIsLoadingRepos(true)
    try {
      const result = await window.electronAPI.github.listRepos()
      if (result.ok && result.repos) {
        setRepos(result.repos as unknown as GitHubRepo[])
      }
    } catch {
      // Repo loading failed silently — user can retry manually
    } finally { setIsLoadingRepos(false) }
  }, [])

  useEffect(() => {
    if (!isElectronRef.current) return
    const load = async () => {
      const t = await window.electronAPI.github.getToken()
      if (t && t.hasToken) {
        setTokenState('stored')
        const status = await window.electronAPI.github.testConnection()
        if (status.ok) {
          setIsConnected(true)
          setUser(status.user as unknown as GitHubUser || null)
          loadReposInternal()
        }
      }
    }
    load()
  }, [loadReposInternal])

  const setToken = useCallback(async (newToken: string) => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    await window.electronAPI.github.setToken(newToken)
    setTokenState(newToken)
    const status = await window.electronAPI.github.testConnection()
    if (status.ok) {
      setIsConnected(true)
      setUser(status.user as unknown as GitHubUser || null)
      await loadReposInternal()
    } else {
      setIsConnected(false)
    }
    setIsConnecting(false)
  }, [loadReposInternal])

  const disconnect = useCallback(async () => {
    if (!isElectronRef.current) return
    await window.electronAPI.github.setToken('')
    setTokenState(null)
    setIsConnected(false)
    setUser(null)
    setRepos([])
  }, [])

  const loadRepos = useCallback(() => loadReposInternal(), [loadReposInternal])

  const selectRepo = useCallback((repo: GitHubRepo) => {
    setSelectedRepo(repo)
    setAnalysis(null)
  }, [])

  const analyzeRepo = useCallback(async (repo: GitHubRepo) => {
    if (!isElectronRef.current) return
    setIsAnalyzing(true)
    try {
      const result = await window.electronAPI.github.analyzeRepo(repo.owner.login, repo.name)
      if (result.ok && result.analysis) {
        setAnalysis(result.analysis as unknown as ParsedContent)
      }
    } catch (err) {
      console.error('Analyze failed:', err)
    } finally { setIsAnalyzing(false) }
  }, [])

  return {
    token, user, isConnected, isConnecting, repos, isLoadingRepos,
    selectedRepo, analysis, isAnalyzing,
    setToken, disconnect, loadRepos, selectRepo, analyzeRepo,
  }
}
