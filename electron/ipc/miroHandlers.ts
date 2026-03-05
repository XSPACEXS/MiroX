import { ipcMain } from 'electron'
import * as keytar from 'keytar'

const SERVICE = 'com.mirox.app'
const ACCOUNT_MIRO = 'miro-token'
const MIRO_DEFAULT_TOKEN = 'eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_1lHPl4N2tFRPuZK2z6CoFkGTsxU'
const MIRO_BASE_URL = 'https://api.miro.com/v2'

async function getMiroToken(): Promise<string> {
  try {
    const token = await keytar.getPassword(SERVICE, ACCOUNT_MIRO)
    return token || MIRO_DEFAULT_TOKEN
  } catch {
    return MIRO_DEFAULT_TOKEN
  }
}

async function miroRequest(method: string, path: string, body?: object): Promise<unknown> {
  const token = await getMiroToken()
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
  ipcMain.removeHandler('miro:test-connection')
  ipcMain.handle('miro:test-connection', async () => {
    try {
      const token = await getMiroToken()
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
  ipcMain.removeHandler('miro:create-board')
  ipcMain.handle('miro:create-board', async (_event, name: string, description?: string) => {
    if (typeof name !== 'string' || !name.trim()) {
      return { ok: false, error: 'Board name is required' }
    }
    const body: Record<string, unknown> = { name }
    if (description) body.description = description
    return miroRequest('POST', '/boards', body)
  })

  // List boards
  ipcMain.removeHandler('miro:list-boards')
  ipcMain.handle('miro:list-boards', async () => {
    return miroRequest('GET', '/boards?sort=last_modified&limit=50')
  })

  // Get token
  ipcMain.removeHandler('miro:get-token')
  ipcMain.handle('miro:get-token', async () => {
    const token = await getMiroToken()
    // Mask the token for display — only show last 8 chars
    const masked = token.length > 8 ? '...' + token.slice(-8) : token
    return { ok: true, masked, hasToken: token !== MIRO_DEFAULT_TOKEN }
  })

  // Set token
  ipcMain.removeHandler('miro:set-token')
  ipcMain.handle('miro:set-token', async (_event, token: string) => {
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
  ipcMain.removeHandler('miro:create-frame')
  ipcMain.handle('miro:create-frame', async (_event, boardId: string, data: {
    title: string
    x: number
    y: number
    width: number
    height: number
    style?: { fillColor?: string }
  }) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
    return miroRequest('POST', `/boards/${boardId}/frames`, {
      data: { title: data.title, format: 'custom', type: 'freeform' },
      style: data.style || { fillColor: '#1a1a1a' },
      position: { x: data.x, y: data.y },
      geometry: { width: data.width, height: data.height },
    })
  })

  // Create shape
  ipcMain.removeHandler('miro:create-shape')
  ipcMain.handle('miro:create-shape', async (_event, boardId: string, data: {
    content: string
    shape: string
    x: number
    y: number
    width: number
    height: number
    style?: Record<string, unknown>
  }) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
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
  ipcMain.removeHandler('miro:create-sticky')
  ipcMain.handle('miro:create-sticky', async (_event, boardId: string, data: {
    content: string
    x: number
    y: number
    shape?: string
    style?: Record<string, unknown>
  }) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
    return miroRequest('POST', `/boards/${boardId}/sticky_notes`, {
      data: { content: data.content, shape: data.shape || 'square' },
      style: data.style || { fillColor: 'yellow', textAlign: 'center', textAlignVertical: 'middle' },
      position: { x: data.x, y: data.y },
    })
  })

  // Create text
  ipcMain.removeHandler('miro:create-text')
  ipcMain.handle('miro:create-text', async (_event, boardId: string, data: {
    content: string
    x: number
    y: number
    width?: number
    style?: Record<string, unknown>
  }) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
    return miroRequest('POST', `/boards/${boardId}/texts`, {
      data: { content: data.content },
      style: data.style || { color: '#ffffff', fontSize: '14', textAlign: 'left' },
      position: { x: data.x, y: data.y },
      geometry: data.width ? { width: data.width } : undefined,
    })
  })

  // Create connector
  ipcMain.removeHandler('miro:create-connector')
  ipcMain.handle('miro:create-connector', async (_event, boardId: string, data: {
    startItemId: string
    endItemId: string
    style?: Record<string, unknown>
    captions?: Array<{ content: string }>
  }) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
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
  ipcMain.removeHandler('miro:delete-item')
  ipcMain.handle('miro:delete-item', async (_event, boardId: string, itemId: string) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
    if (typeof itemId !== 'string' || !itemId.trim()) {
      return { ok: false, error: 'Item ID is required' }
    }
    return miroRequest('DELETE', `/boards/${boardId}/items/${itemId}`)
  })

  // Reposition item
  ipcMain.removeHandler('miro:reposition-item')
  ipcMain.handle('miro:reposition-item', async (_event, boardId: string, itemId: string, x: number, y: number) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
    if (typeof itemId !== 'string' || !itemId.trim()) {
      return { ok: false, error: 'Item ID is required' }
    }
    return miroRequest('PATCH', `/boards/${boardId}/items/${itemId}`, {
      position: { x, y },
    })
  })

  // Delete ghost items (ai_generation_result at position 20,20)
  ipcMain.removeHandler('miro:delete-ghosts')
  ipcMain.handle('miro:delete-ghosts', async (_event, boardId: string) => {
    if (typeof boardId !== 'string' || !boardId.trim()) {
      return { ok: false, error: 'Board ID is required' }
    }
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
