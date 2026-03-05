import { useState, useEffect, useCallback, useRef } from 'react'
import type { GitHubRepo, GitHubUser } from '../types/github'
import type { ParsedContent } from '../types/import'
import { logger } from '../utils/logger'
import { useUIStore } from '../stores/uiStore'

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
        setRepos(result.repos.map(r => ({
          id: r.id,
          name: r.name,
          full_name: r.fullName,
          description: r.description,
          language: r.language,
          stargazers_count: r.stars,
          updated_at: r.updatedAt,
          html_url: r.url,
          default_branch: r.defaultBranch || '',
          owner: { login: r.owner.login, avatar_url: r.owner.avatarUrl },
          topics: r.topics || [],
          private: r.isPrivate ?? false,
        })))
      }
    } catch (err) {
      logger.error('Failed to load repos:', err)
      useUIStore.getState().addToast({ type: 'error', title: 'GitHub Error', message: err instanceof Error ? err.message : String(err) })
    } finally { setIsLoadingRepos(false) }
  }, [])

  useEffect(() => {
    if (!isElectronRef.current) return
    let cancelled = false
    const load = async () => {
      try {
        const t = await window.electronAPI.github.getToken()
        if (cancelled) return
        if (t && t.hasToken) {
          setTokenState('stored')
          const status = await window.electronAPI.github.testConnection()
          if (cancelled) return
          if (status.ok) {
            setIsConnected(true)
            setUser(status.user ? {
              id: 0,
              login: status.user.login,
              name: status.user.name || '',
              avatar_url: status.user.avatarUrl,
              public_repos: 0,
              html_url: '',
            } : null)
            void loadReposInternal()
          }
        }
      } catch (err) {
        logger.error('Failed to load GitHub state:', err)
        useUIStore.getState().addToast({ type: 'error', title: 'GitHub Error', message: err instanceof Error ? err.message : String(err) })
      }
    }
    void load()
    return () => { cancelled = true }
  }, [loadReposInternal])

  const setToken = useCallback(async (newToken: string) => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    await window.electronAPI.github.setToken(newToken)
    setTokenState(newToken)
    const status = await window.electronAPI.github.testConnection()
    if (status.ok) {
      setIsConnected(true)
      setUser(status.user ? {
        id: 0,
        login: status.user.login,
        name: status.user.name || '',
        avatar_url: status.user.avatarUrl,
        public_repos: 0,
        html_url: '',
      } : null)
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
        const a = result.analysis
        setAnalysis({
          rawText: a.readme || '',
          title: a.name,
          headings: [],
          keyPhrases: a.topics || [],
          summary: a.description || '',
          fileType: 'code',
          suggestedTemplate: a.suggestedTemplate || '',
          confidence: 0.8,
        })
      }
    } catch (err) {
      logger.error('Analyze failed:', err)
      useUIStore.getState().addToast({ type: 'error', title: 'GitHub Error', message: err instanceof Error ? err.message : String(err) })
    } finally { setIsAnalyzing(false) }
  }, [])

  return {
    token, user, isConnected, isConnecting, repos, isLoadingRepos,
    selectedRepo, analysis, isAnalyzing,
    setToken, disconnect, loadRepos, selectRepo, analyzeRepo,
  }
}
