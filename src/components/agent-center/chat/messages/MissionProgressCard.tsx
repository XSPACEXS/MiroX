import { useState, useEffect } from 'react'
import { Bot, Activity, Clock } from 'lucide-react'
import { useMissionStore } from '@stores/missionStore'
import { useAgentStore } from '@stores/agentStore'
import type { ChatMessage } from '@/types/chat'

interface MissionProgressCardProps {
  message: ChatMessage
}

function contextBarColor(usage: number): string {
  if (usage < 50) return 'bg-green-400/60'
  if (usage < 75) return 'bg-yellow-400/60'
  return 'bg-red-400/60'
}

function formatElapsed(ms: number): string {
  const totalSec = Math.floor(ms / 1000)
  const min = Math.floor(totalSec / 60)
  const sec = totalSec % 60
  if (min >= 60) {
    const hr = Math.floor(min / 60)
    const remMin = min % 60
    return `${hr}:${String(remMin).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }
  return `${min}:${String(sec).padStart(2, '0')}`
}

export default function MissionProgressCard({ message }: MissionProgressCardProps): JSX.Element {
  const mission = useMissionStore((s) => s.mission)
  const agents = useAgentStore((s) => s.agents)

  // B12: Elapsed timer
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    if (!mission?.startedAt) return
    const update = () => setElapsed(Date.now() - mission.startedAt)
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [mission?.startedAt])

  const missionAgents = agents.filter(
    (a) => a.teamRunId === mission?.id || (mission?.activeAgentIds.includes(a.id) ?? false)
  )

  const firstRunning = missionAgents.find((a) => a.status === 'running')
  const latestLogs = firstRunning?.logs.slice(-10) ?? []

  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
        <Bot size={14} className="text-yellow-400" />
      </div>
      <div className="flex-1 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 max-w-[85%]">
        <div className="flex items-center gap-2 mb-3">
          <Activity size={16} className="text-purple-400" />
          <h4 className="text-sm font-semibold text-white">Mission in Progress</h4>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400">Live</span>
          </div>
        </div>

        {mission?.phase && (
          <div className="mb-3 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-purple-400/10 text-purple-400 text-[11px] font-medium uppercase">
              {mission.phase}
            </span>
            {mission.startedAt && (
              <span className="inline-flex items-center gap-1 text-[11px] text-gray-500 font-mono">
                <Clock size={10} />
                {formatElapsed(elapsed)}
              </span>
            )}
          </div>
        )}

        {message.content && (
          <p className="text-sm text-gray-300 mb-3">{message.content}</p>
        )}

        <div className="space-y-2">
          {missionAgents.map((agent) => (
            <div key={agent.id} className="flex items-center gap-2 text-xs">
              <div
                className={`w-2 h-2 rounded-full shrink-0 ${
                  agent.status === 'running' ? 'bg-green-400' : 'bg-gray-500'
                }`}
              />
              <span className="text-gray-300 truncate">
                {agent.teamSkill || agent.id.slice(0, 8)}
              </span>
              {agent.contextUsage && (() => {
                const usagePct = Math.min(
                  100,
                  ((agent.contextUsage.inputTokens + agent.contextUsage.outputTokens) / 200000) * 100
                )
                return (
                  <div className="flex-1 h-1 bg-black-600 rounded-full overflow-hidden ml-2">
                    <div
                      className={`h-full ${contextBarColor(usagePct)} rounded-full transition-all duration-300`}
                      style={{ width: `${usagePct}%` }}
                    />
                  </div>
                )
              })()}
              <span className="text-gray-500 shrink-0">{agent.status}</span>
            </div>
          ))}
        </div>

        {latestLogs.length > 0 && (
          <details className="mt-3">
            <summary className="text-xs text-gray-500 cursor-pointer hover:text-gray-300">
              Live logs
            </summary>
            <div className="mt-2 bg-black-900 rounded-xl p-3 max-h-32 overflow-y-auto">
              {latestLogs.map((log, i) => (
                <p key={i} className="text-[11px] font-mono text-gray-400">
                  {log.text}
                </p>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  )
}
