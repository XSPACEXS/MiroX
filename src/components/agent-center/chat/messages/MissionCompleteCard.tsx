import { Bot, CheckCircle2, XCircle, Octagon } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import { CopyButton } from './CopyButton'
import type { ChatMessage } from '@/types/chat'

interface MissionCompleteCardProps {
  message: ChatMessage
}

export default function MissionCompleteCard({ message }: MissionCompleteCardProps): JSX.Element {
  const setMode = useChatStore((s) => s.setMode)
  const summary = message.metadata?.missionSummary

  if (!summary) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
          <Bot size={14} className="text-yellow-400" />
        </div>
        <p className="text-sm text-gray-400">No mission summary available.</p>
      </div>
    )
  }

  const { status } = summary
  const avatarBg =
    status === 'done'
      ? 'bg-green-400/20'
      : status === 'aborted'
        ? 'bg-yellow-400/20'
        : 'bg-red-400/20'
  const avatarText =
    status === 'done'
      ? 'text-green-400'
      : status === 'aborted'
        ? 'text-yellow-400'
        : 'text-red-400'
  const cardBorder =
    status === 'done'
      ? 'border-green-500/20 bg-green-500/5'
      : status === 'aborted'
        ? 'border-yellow-500/20 bg-yellow-500/5'
        : 'border-red-500/20 bg-red-500/5'

  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-7 h-7 rounded-full ${avatarBg} flex items-center justify-center shrink-0 mt-0.5`}
      >
        {status === 'done' ? (
          <CheckCircle2 size={14} className={avatarText} />
        ) : status === 'aborted' ? (
          <Octagon size={14} className={avatarText} />
        ) : (
          <XCircle size={14} className={avatarText} />
        )}
      </div>
      <div
        className={`relative flex-1 rounded-2xl border ${cardBorder} p-4 max-w-[85%] group`}
      >
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton text={`Mission ${status === 'done' ? 'Complete' : status === 'aborted' ? 'Aborted' : 'Failed'}\nDuration: ${summary.duration}\nFiles changed: ${summary.filesChanged}\nAgents: ${summary.agentCount}${summary.qualityScore != null ? `\nQuality: ${summary.qualityScore}/100` : ''}`} />
        </div>
        <div className="flex items-center gap-2 mb-3">
          {status === 'done' ? (
            <CheckCircle2 size={16} className="text-green-400" />
          ) : status === 'aborted' ? (
            <Octagon size={16} className="text-yellow-400" />
          ) : (
            <XCircle size={16} className="text-red-400" />
          )}
          <h4 className="text-sm font-semibold text-white">
            {status === 'done'
              ? 'Mission Complete'
              : status === 'aborted'
                ? 'Mission Aborted'
                : 'Mission Failed'}
          </h4>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-lg font-bold text-white">{summary.duration}</p>
            <p className="text-[10px] text-gray-500">Duration</p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">{summary.filesChanged}</p>
            <p className="text-[10px] text-gray-500">Files</p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">{summary.agentCount}</p>
            <p className="text-[10px] text-gray-500">Agents</p>
          </div>
        </div>

        {summary.qualityScore != null && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-gray-400">Quality:</span>
            <span
              className={`text-sm font-bold ${
                summary.qualityScore >= 90
                  ? 'text-green-400'
                  : summary.qualityScore >= 70
                    ? 'text-yellow-400'
                    : 'text-red-400'
              }`}
            >
              {summary.qualityScore}/100
            </span>
          </div>
        )}

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setMode('mission')}
            className="px-3 py-1.5 rounded-lg bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-300 hover:text-white transition-colors"
          >
            New Mission
          </button>
          <button
            onClick={() => setMode('scan')}
            className="px-3 py-1.5 rounded-lg bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-300 hover:text-white transition-colors"
          >
            Re-scan
          </button>
        </div>
      </div>
    </div>
  )
}
