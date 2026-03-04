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

export interface MiroItem {
  id: string
  type: string
  position?: {
    x: number
    y: number
    origin?: string
    relativeTo?: string
  }
  geometry?: {
    width?: number
    height?: number
    rotation?: number
  }
  data?: {
    content?: string
    shape?: string
    color?: string
    title?: string
    description?: string
  }
  style?: {
    fillColor?: string
    fillOpacity?: number
    borderColor?: string
    borderWidth?: number
    borderOpacity?: number
    borderStyle?: string
    fontFamily?: string
    fontSize?: number
    textColor?: string
    textAlign?: string
    fontStyle?: string
    fontWeight?: string
  }
  createdAt?: string
  modifiedAt?: string
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

export interface CreateShapeOptions {
  shape: string  // 'rectangle' | 'circle' | 'triangle' | etc.
  content?: string
  x: number
  y: number
  width?: number
  height?: number
  style?: {
    fillColor?: string
    fillOpacity?: number
    borderColor?: string
    borderWidth?: number
    textColor?: string
    fontSize?: number
    fontFamily?: string
    textAlign?: string
    textAlignVertical?: string
    fontStyle?: string
    fontWeight?: string
  }
}

export interface CreateStickyNoteOptions {
  content: string
  x: number
  y: number
  color?: 'gray' | 'light_yellow' | 'yellow' | 'orange' | 'light_green' | 'green' | 'teal' | 'light_pink' | 'pink' | 'violet' | 'red' | 'dark_blue' | 'blue' | 'dark_brown' | 'brown' | 'indigo' | 'salmon' | 'peach' | 'light_gray'
  width?: number
}

export interface CreateTextOptions {
  content: string
  x: number
  y: number
  width?: number
  fontSize?: number
  color?: string
  fontFamily?: string
  align?: 'left' | 'center' | 'right'
}

export interface CreateConnectorOptions {
  startItemId: string
  endItemId: string
  caption?: string
  color?: string
  strokeWidth?: number
  style?: 'straight' | 'curved' | 'elbowed'
}

export interface CreateFrameOptions {
  title: string
  x: number
  y: number
  width: number
  height: number
  fillColor?: string
}
