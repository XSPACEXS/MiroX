import axios, { AxiosInstance, AxiosError } from 'axios'
import type { MiroBoard, MiroItem, MiroConnectionStatus, CreateShapeOptions, CreateStickyNoteOptions, CreateTextOptions, CreateConnectorOptions, CreateFrameOptions } from '../types/miro'

const DEFAULT_TOKEN = 'eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_1lHPl4N2tFRPuZK2z6CoFkGTsxU'

export class MiroApiClient {
  private client: AxiosInstance

  constructor(token: string = DEFAULT_TOKEN) {
    this.client = axios.create({
      baseURL: 'https://api.miro.com/v2',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      timeout: 30000,
    })

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      response => response,
      (error: AxiosError) => {
        const message = (error.response?.data as Record<string, string>)?.message || error.message
        throw new Error(`Miro API Error (${error.response?.status}): ${message}`)
      }
    )
  }

  updateToken(token: string): void {
    this.client.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  // ─── Connection ───────────────────────────────────────────────────────────

  async testConnection(): Promise<MiroConnectionStatus> {
    try {
      const { data } = await this.client.get('/users/me')
      return {
        ok: true,
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          picture: data.picture?.imageUrl,
        }
      }
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : 'Connection failed',
      }
    }
  }

  // ─── Boards ───────────────────────────────────────────────────────────────

  async createBoard(name: string, description?: string): Promise<MiroBoard> {
    const { data } = await this.client.post('/boards', {
      name,
      description: description || '',
      policy: { collaborationToolsStartAccess: 'all_editors', permissionsPolicy: { copyAccess: 'anyone', copyAccessLevel: 'anyone', sharingAccess: 'team_members_with_editing_rights' } },
    })
    return data
  }

  async listBoards(limit = 20): Promise<MiroBoard[]> {
    const { data } = await this.client.get(`/boards?limit=${limit}&sort=last_modified`)
    return data.data || []
  }

  async getBoard(boardId: string): Promise<MiroBoard> {
    const { data } = await this.client.get(`/boards/${boardId}`)
    return data
  }

  async deleteBoard(boardId: string): Promise<void> {
    await this.client.delete(`/boards/${boardId}`)
  }

  // ─── Frames ───────────────────────────────────────────────────────────────

  async createFrame(boardId: string, opts: CreateFrameOptions): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/frames`, {
      data: { title: opts.title, format: 'custom', type: 'freeform' },
      position: { x: opts.x, y: opts.y, origin: 'center' },
      geometry: { width: opts.width, height: opts.height },
      style: { fillColor: opts.fillColor || '#1A1A1A' },
    })
    return data.id
  }

  // ─── Shapes ───────────────────────────────────────────────────────────────

  async createShape(boardId: string, opts: CreateShapeOptions): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/shapes`, {
      data: {
        shape: opts.shape,
        content: opts.content || '',
      },
      position: { x: opts.x, y: opts.y, origin: 'center' },
      geometry: { width: opts.width || 400, height: opts.height || 200 },
      style: {
        fillColor: opts.style?.fillColor || '#1A1A1A',
        fillOpacity: opts.style?.fillOpacity ?? 1.0,
        borderColor: opts.style?.borderColor || '#333333',
        borderWidth: opts.style?.borderWidth ?? 2.0,
        textColor: opts.style?.textColor || '#FFFFFF',
        fontSize: opts.style?.fontSize || 18,
        fontFamily: opts.style?.fontFamily || 'open_sans',
        textAlign: opts.style?.textAlign || 'center',
        textAlignVertical: 'middle',
        fontStyle: opts.style?.fontStyle || 'normal',
        fontWeight: opts.style?.fontWeight || 'normal',
      },
    })
    return data.id
  }

  // ─── Sticky Notes ─────────────────────────────────────────────────────────

  async createStickyNote(boardId: string, opts: CreateStickyNoteOptions): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/sticky_notes`, {
      data: {
        content: opts.content,
        shape: 'square',
      },
      position: { x: opts.x, y: opts.y, origin: 'center' },
      geometry: { width: opts.width || 228 },
      style: { fillColor: opts.color || 'light_yellow', textAlign: 'center', textAlignVertical: 'middle' },
    })
    return data.id
  }

  // ─── Text ─────────────────────────────────────────────────────────────────

  async createText(boardId: string, opts: CreateTextOptions): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/texts`, {
      data: { content: opts.content },
      position: { x: opts.x, y: opts.y, origin: 'center' },
      geometry: { width: opts.width || 400 },
      style: {
        color: opts.color || '#FFFFFF',
        fontSize: opts.fontSize || 18,
        fontFamily: opts.fontFamily || 'open_sans',
        textAlign: opts.align || 'left',
      },
    })
    return data.id
  }

  // ─── Cards ────────────────────────────────────────────────────────────────

  async createCard(boardId: string, title: string, description?: string, x = 0, y = 0): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/cards`, {
      data: { title, description: description || '' },
      position: { x, y, origin: 'center' },
    })
    return data.id
  }

  // ─── Connectors ───────────────────────────────────────────────────────────

  async createConnector(boardId: string, opts: CreateConnectorOptions): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/connectors`, {
      startItem: { id: opts.startItemId },
      endItem: { id: opts.endItemId },
      captions: opts.caption ? [{ content: opts.caption, position: '50%' }] : [],
      style: {
        strokeColor: opts.color || '#FFD600',
        strokeWidth: opts.strokeWidth ?? 3.0,
        strokeStyle: 'normal',
        endStrokeCap: 'filled_triangle',
        startStrokeCap: 'none',
        lineType: opts.style || 'curved',
      },
    })
    return data.id
  }

  // ─── Items ────────────────────────────────────────────────────────────────

  async listItems(boardId: string, type?: string): Promise<MiroItem[]> {
    const url = type ? `/boards/${boardId}/items?type=${type}` : `/boards/${boardId}/items?limit=50`
    const { data } = await this.client.get(url)
    return data.data || []
  }

  async deleteItem(boardId: string, itemId: string): Promise<void> {
    await this.client.delete(`/boards/${boardId}/items/${itemId}`)
  }

  async repositionItem(boardId: string, itemId: string, x: number, y: number): Promise<void> {
    await this.client.patch(`/boards/${boardId}/items/${itemId}`, {
      position: { x, y, origin: 'center' },
    })
  }

  // ─── Ghost Items ──────────────────────────────────────────────────────────

  async findGhostItems(boardId: string): Promise<MiroItem[]> {
    const items = await this.listItems(boardId)
    return items.filter(item => {
      const pos = item.position
      return pos && Math.abs((pos.x || 0) - 20) < 10 && Math.abs((pos.y || 0) - 20) < 10
    })
  }

  async deleteGhostItems(boardId: string): Promise<number> {
    const ghosts = await this.findGhostItems(boardId)
    await Promise.all(ghosts.map(g => this.deleteItem(boardId, g.id)))
    return ghosts.length
  }

  // ─── Images ───────────────────────────────────────────────────────────────

  async createImageFromUrl(boardId: string, url: string, x: number, y: number, width?: number): Promise<string> {
    const { data } = await this.client.post(`/boards/${boardId}/images`, {
      data: { url, title: 'Image' },
      position: { x, y, origin: 'center' },
      geometry: width ? { width } : undefined,
    })
    return data.id
  }
}

// Singleton instance
let _instance: MiroApiClient | null = null

export function getMiroClient(token?: string): MiroApiClient {
  if (!_instance || token) {
    _instance = new MiroApiClient(token || DEFAULT_TOKEN)
  }
  return _instance
}

export default MiroApiClient
