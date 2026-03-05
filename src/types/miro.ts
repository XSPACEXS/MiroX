export interface MiroBoard {
  id: string
  name: string
  description?: string
  viewLink: string
  createdAt: string
  modifiedAt: string
  owner?: {
    id: string
    name: string
  }
  picture?: {
    imageUrl: string
  }
}

export interface MiroConnectionStatus {
  ok: boolean
  user?: {
    id: string
    name: string
    email?: string
    picture?: string
  }
  error?: string
}
