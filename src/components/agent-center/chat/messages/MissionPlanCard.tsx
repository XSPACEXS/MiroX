import { useState } from 'react'
import { Bot, ClipboardList, CheckCircle2, Loader2, Circle, XCircle } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import { useMissionStore } from '@stores/missionStore'
import { isTerminal } from '@services/orchestrator'
import type { ChatMessage } from '@/types/chat'
import type { Subtask } from '@/services/orchestrator/types'

interface MissionPlanCardProps {
  message: ChatMessage
}

function StatusIcon({ status }: { status: Subtask['status'] }): JSX.Element {
  switch (status) {
    case 'completed':
      return <CheckCircle2 size={12} className="text-green-400 shrink-0" />
    case 'running':
      return <Loader2 size={12} className="text-blue-400 animate-spin shrink-0" />
    case 'pending':
      return <Circle size={12} className="text-gray-500 shrink-0" />
    case 'failed':
      return <XCircle size={12} className="text-red-400 shrink-0" />
    case 'skipped':
      return <Circle size={12} className="text-gray-600 shrink-0" />
  }
}

function modelColor(model: string): string {
  if (model.includes('opus')) return 'bg-purple-400/20 text-purple-400'
  if (model.includes('sonnet')) return 'bg-blue-400/20 text-blue-400'
  return 'bg-green-400/20 text-green-400'
}

export default function MissionPlanCard({ message }: MissionPlanCardProps): JSX.Element {
  const plan = message.metadata?.plan
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)
  const missionPhase = useMissionStore((s) => s.mission?.phase ?? 'idle')
  const [expanded, setExpanded] = useState(false)

  if (!plan) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
          <Bot size={14} className="text-yellow-400" />
        </div>
        <p className="text-sm text-gray-400">No plan data available.</p>
      </div>
    )
  }

  const shouldCollapse = plan.subtasks.length > 4
  const visibleSubtasks = shouldCollapse && !expanded ? plan.subtasks.slice(0, 3) : plan.subtasks

  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
        <Bot size={14} className="text-yellow-400" />
      </div>
      <div className="flex-1 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 max-w-[85%]">
        <div className="flex items-center gap-2 mb-3">
          <ClipboardList size={16} className="text-blue-400" />
          <h4 className="text-sm font-semibold text-white">Mission Plan</h4>
          <span className="text-xs text-gray-400">
            {plan.subtasks.length} subtask{plan.subtasks.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="space-y-1.5">
          {visibleSubtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center gap-2 text-xs">
              <StatusIcon status={subtask.status} />
              <span className="text-gray-300">{subtask.title}</span>
              <span className={`ml-auto px-2 py-0.5 rounded-full text-[11px] font-medium ${modelColor(subtask.model)}`}>
                {subtask.model}
              </span>
            </div>
          ))}
        </div>

        {shouldCollapse && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-xs text-gray-500 hover:text-gray-300 mt-2 transition-colors"
          >
            + {plan.subtasks.length - 3} more subtasks
          </button>
        )}

        {shouldCollapse && expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="text-xs text-gray-500 hover:text-gray-300 mt-2 transition-colors"
          >
            Show less
          </button>
        )}

        <div className="flex gap-2 mt-3 pt-3 border-t border-blue-500/10">
          <button
            onClick={() => {
              setMode('mission')
              setPendingInput(message.content)
            }}
            className="px-3 py-1.5 rounded-lg bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-300 hover:text-white transition-colors"
          >
            Adjust
          </button>
          {isTerminal(missionPhase) ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-500/20 border border-gray-500/30 text-xs text-gray-400">
              <CheckCircle2 size={10} />
              {missionPhase === 'done' ? 'Completed' : missionPhase === 'aborted' ? 'Aborted' : 'Failed'}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/20 border border-green-500/30 text-xs text-green-300">
              <Loader2 size={10} className="animate-spin" />
              Executing
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
