import { useState, useEffect, useCallback, useRef } from 'react'
import { logger } from '../utils/logger'

interface UseClaudeReturn {
  isConnected: boolean
  isConnecting: boolean
  maskedKey: string
  version: string
  setToken: (token: string) => Promise<void>
  testConnection: () => Promise<void>
  disconnect: () => Promise<void>
}

export function useClaude(): UseClaudeReturn {
  const isElectronRef = useRef(typeof window !== 'undefined' && !!window.electronAPI)

  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [maskedKey, setMaskedKey] = useState('')
  const [version, setVersion] = useState('')

  const testConnectionInternal = useCallback(async () => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    try {
      const result = await window.electronAPI.claude.testConnection()
      setIsConnected(result.ok)
      if (result.version) setVersion(result.version)
    } catch {
      setIsConnected(false)
    } finally {
      setIsConnecting(false)
    }
  }, [])

  useEffect(() => {
    if (!isElectronRef.current) return
    let cancelled = false
    const load = async () => {
      try {
        const res = await window.electronAPI.claude.getToken()
        if (cancelled) return
        if (res.ok && res.hasToken) {
          setMaskedKey(res.masked)
          await testConnectionInternal()
          if (cancelled) return
        }
      } catch (err) {
        logger.error('Failed to load Claude state:', err)
      }
    }
    void load()
    return () => { cancelled = true }
  }, [testConnectionInternal])

  const testConnection = useCallback(async () => {
    await testConnectionInternal()
    if (isElectronRef.current) {
      const res = await window.electronAPI.claude.getToken()
      if (res.ok && res.hasToken) setMaskedKey(res.masked)
    }
  }, [testConnectionInternal])

  const setToken = useCallback(async (newToken: string) => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    try {
      const result = await window.electronAPI.claude.setToken(newToken)
      if (result.ok) {
        const tokenRes = await window.electronAPI.claude.getToken()
        if (tokenRes.ok && tokenRes.hasToken) setMaskedKey(tokenRes.masked)
        await testConnectionInternal()
      }
    } catch (err) {
      logger.error('Failed to set Claude token:', err)
    } finally {
      setIsConnecting(false)
    }
  }, [testConnectionInternal])

  const disconnect = useCallback(async () => {
    if (!isElectronRef.current) return
    await window.electronAPI.claude.setToken('')
    setIsConnected(false)
    setMaskedKey('')
    setVersion('')
  }, [])

  return { isConnected, isConnecting, maskedKey, version, setToken, testConnection, disconnect }
}
