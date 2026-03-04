import { useState, useEffect, useCallback } from 'react'
import type { MiroConnectionStatus, MiroBoard } from '../types/miro'

interface UseMiroReturn {
  token: string | null
  isConnected: boolean
  isConnecting: boolean
  connectionStatus: MiroConnectionStatus | null
  boards: MiroBoard[]
  isLoadingBoards: boolean
  testConnection: () => Promise<void>
  loadBoards: () => Promise<void>
  createBoard: (name: string, description?: string) => Promise<MiroBoard | null>
  setToken: (token: string) => Promise<void>
}

export function useMiro(): UseMiroReturn {
  const isElectron = typeof window !== 'undefined' && !!window.electronAPI

  const [token, setTokenState] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<MiroConnectionStatus | null>(null)
  const [boards, setBoards] = useState<MiroBoard[]>([])
  const [isLoadingBoards, setIsLoadingBoards] = useState(false)

  const testConnectionInternal = async () => {
    if (!isElectron) return
    setIsConnecting(true)
    try {
      const status = await window.electronAPI.miro.testConnection()
      setConnectionStatus(status)
      setIsConnected(status.ok)
    } catch {
      setConnectionStatus({ ok: false, error: 'Connection failed' })
      setIsConnected(false)
    } finally {
      setIsConnecting(false)
    }
  }

  // Load token on mount
  useEffect(() => {
    if (!isElectron) return
    const loadToken = async () => {
      try {
        const savedToken = await window.electronAPI.miro.getToken()
        if (savedToken && savedToken.hasToken) {
          setTokenState(savedToken.masked)
          await testConnectionInternal()
        }
      } catch (err) {
        console.error('Failed to load Miro token:', err)
      }
    }
    loadToken()
  }, [])

  const testConnection = useCallback(async () => {
    await testConnectionInternal()
  }, [])

  const loadBoards = useCallback(async () => {
    if (!isElectron || !isConnected) return
    setIsLoadingBoards(true)
    try {
      const result = (await window.electronAPI.miro.listBoards()) as { data?: MiroBoard[] }
      setBoards(result?.data || [])
    } catch (err) {
      console.error('Failed to load boards:', err)
    } finally {
      setIsLoadingBoards(false)
    }
  }, [isConnected])

  const createBoard = useCallback(async (name: string, description?: string): Promise<MiroBoard | null> => {
    if (!isElectron) return null
    try {
      const board = (await window.electronAPI.miro.createBoard(name, description)) as MiroBoard
      return board
    } catch (err) {
      console.error('Failed to create board:', err)
      return null
    }
  }, [])

  const setToken = useCallback(async (newToken: string) => {
    if (!isElectron) return
    await window.electronAPI.miro.setToken(newToken)
    setTokenState(newToken)
    await testConnectionInternal()
  }, [])

  return {
    token,
    isConnected,
    isConnecting,
    connectionStatus,
    boards,
    isLoadingBoards,
    testConnection,
    loadBoards,
    createBoard,
    setToken,
  }
}
