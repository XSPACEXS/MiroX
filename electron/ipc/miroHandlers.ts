import { ipcMain } from 'electron'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'

const SERVICE = 'com.mirox.app'
const ACCOUNT_MIRO = 'miro-token'
const MIRO_BASE_URL = 'https://api.miro.com/v2'

// Miro IDs are alphanumeric strings (board IDs are numeric, item IDs may have underscores/hyphens)
const MIRO_ID_RE = /^[a-zA-Z0-9_=-]+$/

function validateId(id: string, label: string): { ok: false; error: string } | null {
  if (typeof id !== 'string' || !id.trim()) return { ok: false, error: `${label} is required` }
  if (!MIRO_ID_RE.test(id)) return { ok: false, error: `Invalid ${label} format` }
  return null
}

async function getMiroToken(): Promise<string> {
  try {
    const token = await keytar.getPassword(SERVICE, ACCOUNT_MIRO)
    return token || ''
  } catch {
    return ''
  }
}

async function miroRequest(method: string, path: string, body?: object): Promise<unknown> {
  const token = await getMiroToken()
  if (!token) {
    throw new Error('No Miro API token configured. Add one in Settings.')
  }
  const response = await fetch(`${MIRO_BASE_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Miro API error ${response.status}: ${error}`)
  }
  // DELETE responses may not have a body
  if (response.status === 204) return { ok: true }
  return response.json()
}

export function registerMiroHandlers(): void {
  // Test connection
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_TEST_CONNECTION)
  ipcMain.handle(IPC_CHANNELS.MIRO_TEST_CONNECTION, async () => {
    try {
      const token = await getMiroToken()
      if (!token) {
        return { ok: false, error: 'No Miro API token configured. Add one in Settings.' }
      }
      const response = await fetch(`${MIRO_BASE_URL}/boards?limit=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      })
      if (response.ok) {
        return { ok: true, status: response.status }
      }
      return { ok: false, error: `HTTP ${response.status}` }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Create board
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_CREATE_BOARD)
  ipcMain.handle(IPC_CHANNELS.MIRO_CREATE_BOARD, async (_event, name: string, description?: string) => {
    if (typeof name !== 'string' || !name.trim()) {
      return { ok: false, error: 'Board name is required' }
    }
    const body: Record<string, unknown> = { name }
    if (description) body.description = description
    return miroRequest('POST', '/boards', body)
  })

  // List boards
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_LIST_BOARDS)
  ipcMain.handle(IPC_CHANNELS.MIRO_LIST_BOARDS, async () => {
    return miroRequest('GET', '/boards?sort=last_modified&limit=50')
  })

  // Get token
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_GET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.MIRO_GET_TOKEN, async () => {
    const token = await getMiroToken()
    if (!token) {
      return { ok: true, masked: '', hasToken: false }
    }
    const masked = token.length > 8 ? '...' + token.slice(-8) : token
    return { ok: true, masked, hasToken: true }
  })

  // Set token
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_SET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.MIRO_SET_TOKEN, async (_event, token: string) => {
    if (typeof token !== 'string' || !token.trim()) {
      return { ok: false, error: 'Token is required' }
    }
    try {
      await keytar.setPassword(SERVICE, ACCOUNT_MIRO, token)
      return { ok: true }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Create frame
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_CREATE_FRAME)
  ipcMain.handle(IPC_CHANNELS.MIRO_CREATE_FRAME, async (_event, boardId: string, data: {
    title: string
    x: number
    y: number
    width: number
    height: number
    style?: { fillColor?: string }
  }) => {
    const err = validateId(boardId, 'Board ID')
    if (err) return err
    return miroRequest('POST', `/boards/${boardId}/frames`, {
      data: { title: data.title, format: 'custom', type: 'freeform' },
      style: data.style || { fillColor: '#1a1a1a' },
      position: { x: data.x, y: data.y },
      geometry: { width: data.width, height: data.height },
    })
  })

  // Create shape
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_CREATE_SHAPE)
  ipcMain.handle(IPC_CHANNELS.MIRO_CREATE_SHAPE, async (_event, boardId: string, data: {
    content: string
    shape: string
    x: number
    y: number
    width: number
    height: number
    style?: Record<string, unknown>
  }) => {
    const err = validateId(boardId, 'Board ID')
    if (err) return err
    return miroRequest('POST', `/boards/${boardId}/shapes`, {
      data: { content: data.content, shape: data.shape },
      style: data.style || {
        fillColor: '#1a1a1a',
        fontColor: '#ffffff',
        borderColor: '#FFD600',
        borderWidth: '2.0',
        fontSize: '14',
        textAlign: 'center',
        textAlignVertical: 'middle',
      },
      position: { x: data.x, y: data.y },
      geometry: { width: data.width, height: data.height },
    })
  })

  // Create sticky note
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_CREATE_STICKY)
  ipcMain.handle(IPC_CHANNELS.MIRO_CREATE_STICKY, async (_event, boardId: string, data: {
    content: string
    x: number
    y: number
    shape?: string
    style?: Record<string, unknown>
  }) => {
    const err = validateId(boardId, 'Board ID')
    if (err) return err
    return miroRequest('POST', `/boards/${boardId}/sticky_notes`, {
      data: { content: data.content, shape: data.shape || 'square' },
      style: data.style || { fillColor: 'yellow', textAlign: 'center', textAlignVertical: 'middle' },
      position: { x: data.x, y: data.y },
    })
  })

  // Create text
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_CREATE_TEXT)
  ipcMain.handle(IPC_CHANNELS.MIRO_CREATE_TEXT, async (_event, boardId: string, data: {
    content: string
    x: number
    y: number
    width?: number
    style?: Record<string, unknown>
  }) => {
    const err = validateId(boardId, 'Board ID')
    if (err) return err
    return miroRequest('POST', `/boards/${boardId}/texts`, {
      data: { content: data.content },
      style: data.style || { color: '#ffffff', fontSize: '14', textAlign: 'left' },
      position: { x: data.x, y: data.y },
      geometry: data.width ? { width: data.width } : undefined,
    })
  })

  // Create connector
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_CREATE_CONNECTOR)
  ipcMain.handle(IPC_CHANNELS.MIRO_CREATE_CONNECTOR, async (_event, boardId: string, data: {
    startItemId: string
    endItemId: string
    style?: Record<string, unknown>
    captions?: Array<{ content: string }>
  }) => {
    const err = validateId(boardId, 'Board ID')
    if (err) return err
    return miroRequest('POST', `/boards/${boardId}/connectors`, {
      startItem: { id: data.startItemId },
      endItem: { id: data.endItemId },
      style: data.style || {
        strokeColor: '#FFD600',
        strokeWidth: '2.0',
        strokeStyle: 'normal',
        startStrokeCap: 'none',
        endStrokeCap: 'stealth',
      },
      captions: data.captions,
    })
  })

  // Delete item
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_DELETE_ITEM)
  ipcMain.handle(IPC_CHANNELS.MIRO_DELETE_ITEM, async (_event, boardId: string, itemId: string) => {
    const boardErr = validateId(boardId, 'Board ID')
    if (boardErr) return boardErr
    const itemErr = validateId(itemId, 'Item ID')
    if (itemErr) return itemErr
    return miroRequest('DELETE', `/boards/${boardId}/items/${itemId}`)
  })

  // Reposition item
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_REPOSITION_ITEM)
  ipcMain.handle(IPC_CHANNELS.MIRO_REPOSITION_ITEM, async (_event, boardId: string, itemId: string, x: number, y: number) => {
    const boardErr = validateId(boardId, 'Board ID')
    if (boardErr) return boardErr
    const itemErr = validateId(itemId, 'Item ID')
    if (itemErr) return itemErr
    return miroRequest('PATCH', `/boards/${boardId}/items/${itemId}`, {
      position: { x, y },
    })
  })

  // Delete ghost items (ai_generation_result at position 20,20)
  ipcMain.removeHandler(IPC_CHANNELS.MIRO_DELETE_GHOSTS)
  ipcMain.handle(IPC_CHANNELS.MIRO_DELETE_GHOSTS, async (_event, boardId: string) => {
    const err = validateId(boardId, 'Board ID')
    if (err) return err
    try {
      const result = await miroRequest('GET', `/boards/${boardId}/items?limit=50`) as {
        data?: Array<{ id: string; type?: string; position?: { x: number; y: number } }>
      }
      const items = result.data || []
      const ghosts = items.filter(
        (item) =>
          item.type === 'ai_generation_result' ||
          (item.position && Math.abs(item.position.x - 20) < 5 && Math.abs(item.position.y - 20) < 5)
      )
      let deleted = 0
      for (const ghost of ghosts) {
        try {
          await miroRequest('DELETE', `/boards/${boardId}/items/${ghost.id}`)
          deleted++
        } catch {
          // Skip items that can't be deleted
        }
      }
      return { ok: true, deleted }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })
}
