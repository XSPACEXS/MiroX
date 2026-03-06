import { useState, useMemo } from 'react'
import { File, Folder, ChevronDown, ChevronRight } from 'lucide-react'
import { Badge } from '@components/ui/Badge'
import type { FileMapEntry } from '@/types/character'
import type { AgentCharacter } from '@/types/character'

interface FileMapProps {
  entries: Record<string, FileMapEntry>
  characters: Record<string, AgentCharacter>
}

const ACTION_BADGE_COLOR: Record<FileMapEntry['lastAction'], 'gray' | 'blue' | 'green' | 'yellow'> = {
  read: 'gray',
  edit: 'blue',
  write: 'green',
  create: 'yellow',
}

function formatRelativeTime(timestamp: number): string {
  const delta = Math.floor((Date.now() - timestamp) / 1000)
  if (delta < 5) return 'just now'
  if (delta < 60) return `${delta}s ago`
  if (delta < 3600) return `${Math.floor(delta / 60)}m ago`
  return `${Math.floor(delta / 3600)}h ago`
}

function extractDirAndFile(path: string): { dir: string; fileName: string } {
  const parts = path.replace(/\\/g, '/').split('/')
  const fileName = parts.pop() ?? path
  const dir = parts.length > 0 ? parts.join('/') : '.'
  return { dir, fileName }
}

function truncatePath(path: string, maxLen: number): string {
  if (path.length <= maxLen) return path
  const parts = path.replace(/\\/g, '/').split('/')
  if (parts.length <= 2) return path
  const fileName = parts[parts.length - 1]
  const parent = parts[parts.length - 2]
  return `.../${parent}/${fileName}`
}

interface GroupedFiles {
  dir: string
  entries: Array<FileMapEntry & { fileName: string }>
}

export function FileMap({ entries, characters }: FileMapProps): JSX.Element {
  const [collapsedDirs, setCollapsedDirs] = useState<Set<string>>(new Set())

  const grouped = useMemo((): GroupedFiles[] => {
    const entryList = Object.values(entries)
    if (entryList.length === 0) return []

    const groups = new Map<string, Array<FileMapEntry & { fileName: string }>>()

    for (const entry of entryList) {
      const { dir, fileName } = extractDirAndFile(entry.path)
      const existing = groups.get(dir) ?? []
      existing.push({ ...entry, fileName })
      groups.set(dir, existing)
    }

    // Sort groups by directory name, sort files within by timestamp descending
    return Array.from(groups.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([dir, files]) => ({
        dir,
        entries: files.sort((a, b) => b.timestamp - a.timestamp),
      }))
  }, [entries])

  const toggleDir = (dir: string): void => {
    setCollapsedDirs((prev) => {
      const next = new Set(prev)
      if (next.has(dir)) {
        next.delete(dir)
      } else {
        next.add(dir)
      }
      return next
    })
  }

  if (grouped.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 text-gray-500 text-sm">
        No file activity yet
      </div>
    )
  }

  return (
    <div className="overflow-y-auto max-h-full space-y-1">
      {grouped.map((group) => {
        const isCollapsed = collapsedDirs.has(group.dir)

        return (
          <div key={group.dir}>
            {/* Directory header */}
            <button
              type="button"
              onClick={() => toggleDir(group.dir)}
              className="flex items-center gap-1.5 w-full text-left px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              {isCollapsed ? (
                <ChevronRight size={12} className="text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown size={12} className="text-gray-500 flex-shrink-0" />
              )}
              <Folder size={13} className="text-yellow-400/60 flex-shrink-0" />
              <span className="text-xs font-mono text-gray-400 truncate">
                {truncatePath(group.dir, 40)}
              </span>
              <span className="text-[10px] text-gray-600 ml-auto flex-shrink-0">
                {group.entries.length}
              </span>
            </button>

            {/* File entries */}
            {!isCollapsed && (
              <div className="ml-4 space-y-px">
                {group.entries.map((entry) => {
                  const character = characters[entry.ownerAgentId]

                  return (
                    <div
                      key={entry.path}
                      className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <File size={12} className="text-gray-500 flex-shrink-0" />
                      <span className="text-xs font-mono text-gray-300 truncate flex-1 min-w-0">
                        {entry.fileName}
                      </span>

                      {/* Agent color dot + name */}
                      {character && (
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: `hsl(${character.avatarHue}, 70%, 55%)` }}
                          />
                          <span className="text-[10px] text-gray-500">
                            {character.firstName}
                          </span>
                        </div>
                      )}

                      {/* Action badge */}
                      <Badge color={ACTION_BADGE_COLOR[entry.lastAction]} size="sm" className="text-[10px] px-1.5 py-0">
                        {entry.lastAction}
                      </Badge>

                      {/* Timestamp */}
                      <span className="text-[10px] text-gray-600 flex-shrink-0 w-12 text-right">
                        {formatRelativeTime(entry.timestamp)}
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
