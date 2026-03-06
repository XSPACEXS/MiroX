import { Bot, ClipboardList, CheckCircle2, Loader2, Circle, XCircle } from 'lucide-react'
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

export default function MissionPlanCard({ message }: MissionPlanCardProps): JSX.Element {
  const plan = message.metadata?.plan

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
          {plan.subtasks.map((subtask) => (
            <div key={subtask.id} className="flex items-center gap-2 text-xs">
              <StatusIcon status={subtask.status} />
              <span className="text-gray-300">{subtask.title}</span>
              <span className="text-gray-500 ml-auto">{subtask.model}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
