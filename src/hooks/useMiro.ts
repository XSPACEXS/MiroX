import { useState, useEffect, useCallback, useRef } from 'react'
import type { MiroConnectionStatus, MiroBoard } from '../types/miro'
import { logger } from '../utils/logger'

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
  const isElectronRef = useRef(typeof window !== 'undefined' && !!window.electronAPI)

  const [token, setTokenState] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<MiroConnectionStatus | null>(null)
  const [boards, setBoards] = useState<MiroBoard[]>([])
  const [isLoadingBoards, setIsLoadingBoards] = useState(false)

  const testConnectionInternal = useCallback(async () => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    try {
      const result = await window.electronAPI.miro.testConnection()
      const status: MiroConnectionStatus = { ok: result.ok, error: result.error }
      setConnectionStatus(status)
      setIsConnected(result.ok)
    } catch {
      setConnectionStatus({ ok: false, error: 'Connection failed' })
      setIsConnected(false)
    } finally {
      setIsConnecting(false)
    }
  }, [])

  // Load token on mount
  useEffect(() => {
    if (!isElectronRef.current) return
    const loadToken = async () => {
      try {
        const savedToken = await window.electronAPI.miro.getToken()
        if (savedToken && savedToken.hasToken) {
          setTokenState(savedToken.masked)
          await testConnectionInternal()
        }
      } catch (err) {
        logger.error('Failed to load Miro token:', err)
      }
    }
    loadToken()
  }, [testConnectionInternal])

  const testConnection = useCallback(async () => {
    await testConnectionInternal()
  }, [testConnectionInternal])

  const loadBoards = useCallback(async () => {
    if (!isElectronRef.current || !isConnected) return
    setIsLoadingBoards(true)
    try {
      const result = await window.electronAPI.miro.listBoards()
      const data = result.data || []
      setBoards(data.map((b) => ({
        id: b.id,
        name: b.name,
        description: b.description,
        viewLink: b.viewLink,
        createdAt: String(b.createdAt ?? new Date().toISOString()),
        modifiedAt: String(b.modifiedAt ?? new Date().toISOString()),
      })))
    } catch (err) {
      logger.error('Failed to load boards:', err)
    } finally {
      setIsLoadingBoards(false)
    }
  }, [isConnected])

  const createBoard = useCallback(async (name: string, description?: string): Promise<MiroBoard | null> => {
    if (!isElectronRef.current) return null
    try {
      const response = await window.electronAPI.miro.createBoard(name, description)
      const board: MiroBoard = {
        id: response.id,
        name: response.name,
        description: response.description,
        viewLink: response.viewLink,
        createdAt: typeof response.createdAt === 'string' ? response.createdAt : new Date().toISOString(),
        modifiedAt: typeof response.modifiedAt === 'string' ? response.modifiedAt : new Date().toISOString(),
      }
      return board
    } catch (err) {
      logger.error('Failed to create board:', err)
      return null
    }
  }, [])

  const setToken = useCallback(async (newToken: string) => {
    if (!isElectronRef.current) return
    await window.electronAPI.miro.setToken(newToken)
    setTokenState(newToken)
    await testConnectionInternal()
  }, [testConnectionInternal])

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
