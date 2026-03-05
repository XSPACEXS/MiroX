import { useState, useEffect, useCallback, useRef } from 'react'
import { logger } from '../utils/logger'
import { useUIStore } from '../stores/uiStore'
import { useSettingsStore } from '../stores/settingsStore'

interface UseGeminiReturn {
  isConnected: boolean
  isConnecting: boolean
  setToken: (token: string) => Promise<void>
  testConnection: () => Promise<void>
  disconnect: () => Promise<void>
}

export function useGemini(): UseGeminiReturn {
  const isElectronRef = useRef(typeof window !== 'undefined' && !!window.electronAPI)

  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const testConnectionInternal = useCallback(async () => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    try {
      const result = await window.electronAPI.gemini.testConnection()
      setIsConnected(result.ok)
      useSettingsStore.getState().setGeminiConnected(result.ok)
    } catch {
      setIsConnected(false)
      useSettingsStore.getState().setGeminiConnected(false)
    } finally {
      setIsConnecting(false)
    }
  }, [])

  // Load token on mount
  useEffect(() => {
    if (!isElectronRef.current) return
    let cancelled = false
    const load = async () => {
      try {
        const res = await window.electronAPI.gemini.getToken() as {
          ok: boolean
          hasToken?: boolean
          masked?: string
          token?: string | null
        }
        if (cancelled) return
        if (res.ok && (res.hasToken || res.token)) {
          await testConnectionInternal()
          if (cancelled) return
        }
      } catch (err) {
        logger.error('Failed to load Gemini state:', err)
        useUIStore.getState().addToast({
          type: 'error',
          title: 'Gemini Error',
          message: err instanceof Error ? err.message : String(err),
        })
      }
    }
    void load()
    return () => { cancelled = true }
  }, [testConnectionInternal])

  const testConnection = useCallback(async () => {
    await testConnectionInternal()
  }, [testConnectionInternal])

  const setToken = useCallback(async (newToken: string) => {
    if (!isElectronRef.current) return
    setIsConnecting(true)
    try {
      await window.electronAPI.gemini.setToken(newToken)
      await testConnectionInternal()
    } catch (err) {
      logger.error('Failed to set Gemini token:', err)
      useUIStore.getState().addToast({
        type: 'error',
        title: 'Gemini Error',
        message: err instanceof Error ? err.message : String(err),
      })
    } finally {
      setIsConnecting(false)
    }
  }, [testConnectionInternal])

  const disconnect = useCallback(async () => {
    if (!isElectronRef.current) return
    await window.electronAPI.gemini.setToken('')
    setIsConnected(false)
    useSettingsStore.getState().setGeminiConnected(false)
  }, [])

  return { isConnected, isConnecting, setToken, testConnection, disconnect }
}
