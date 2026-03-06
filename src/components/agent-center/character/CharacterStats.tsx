import { FileText, Code, Wrench, Clock } from 'lucide-react'
import type { AgentStats } from '@/types/character'

interface CharacterStatsProps {
  stats: AgentStats
  compact?: boolean
}

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`
}

export function CharacterStats({ stats, compact }: CharacterStatsProps): JSX.Element {
  if (compact) {
    return (
      <p className="text-xs text-gray-400 font-mono tabular-nums truncate">
        {stats.filesTouched} files &middot; {stats.linesChanged} lines &middot; {formatTime(stats.activeSeconds)}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-1.5">
      <StatTile icon={<FileText size={12} className="text-gray-500" />} label="Files" value={String(stats.filesTouched)} />
      <StatTile icon={<Code size={12} className="text-gray-500" />} label="Lines" value={String(stats.linesChanged)} />
      <StatTile icon={<Wrench size={12} className="text-gray-500" />} label="Tools" value={String(stats.toolsUsed.length)} />
      <StatTile icon={<Clock size={12} className="text-gray-500" />} label="Time" value={formatTime(stats.activeSeconds)} />
    </div>
  )
}

function StatTile({ icon, label, value }: { icon: JSX.Element; label: string; value: string }): JSX.Element {
  return (
    <div className="flex items-center gap-1.5 rounded-lg bg-black-700/50 px-2 py-1">
      {icon}
      <span className="text-[10px] text-gray-500">{label}</span>
      <span className="text-xs text-gray-300 font-mono tabular-nums ml-auto">{value}</span>
    </div>
  )
}
