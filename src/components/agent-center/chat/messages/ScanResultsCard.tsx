import { Bot, Search } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import type { ChatMessage, ScanIssue } from '@/types/chat'

interface ScanResultsCardProps {
  message: ChatMessage
}

function SeverityIcon({ severity }: { severity: ScanIssue['severity'] }): JSX.Element {
  switch (severity) {
    case 'critical':
      return <span className="shrink-0">🔴</span>
    case 'warning':
      return <span className="shrink-0">⚠️</span>
    case 'info':
      return <span className="shrink-0">ℹ️</span>
  }
}

export default function ScanResultsCard({ message }: ScanResultsCardProps): JSX.Element {
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)
  const scanResults = message.metadata?.scanResults

  if (!scanResults) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
          <Bot size={14} className="text-yellow-400" />
        </div>
        <p className="text-sm text-gray-400">No scan results available.</p>
      </div>
    )
  }

  const { overallScore, categories, strengths } = scanResults
  const allIssues = categories.flatMap((cat) => cat.issues)

  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
        <Bot size={14} className="text-yellow-400" />
      </div>
      <div className="flex-1 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 max-w-[85%]">
        <div className="flex items-center gap-2 mb-4">
          <Search size={16} className="text-cyan-400" />
          <h4 className="text-sm font-semibold text-white">Project Health Report</h4>
          <span
            className={`ml-auto text-2xl font-bold ${
              overallScore >= 80
                ? 'text-green-400'
                : overallScore >= 60
                  ? 'text-yellow-400'
                  : 'text-red-400'
            }`}
          >
            {overallScore}
          </span>
        </div>

        {categories.map((cat) => (
          <div key={cat.name} className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">{cat.name}</span>
              <span className="text-gray-500">{cat.score}</span>
            </div>
            <div className="h-1.5 bg-black-600 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${cat.score}%`,
                  backgroundColor:
                    cat.score >= 80 ? '#4ade80' : cat.score >= 60 ? '#fbbf24' : '#f87171',
                }}
              />
            </div>
          </div>
        ))}

        {allIssues.length > 0 && (
          <div className="mt-4 space-y-1.5">
            <h5 className="text-xs font-semibold text-gray-500 uppercase">Issues</h5>
            {allIssues.slice(0, 8).map((issue, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <SeverityIcon severity={issue.severity} />
                <span className="flex-1 text-gray-300">{issue.message}</span>
                {issue.file && (
                  <span className="text-gray-500 font-mono shrink-0">{issue.file}</span>
                )}
                {issue.fixPrompt && (
                  <button
                    onClick={() => {
                      setMode('mission')
                      setPendingInput(issue.fixPrompt!)
                    }}
                    className="text-yellow-400 hover:text-yellow-300 shrink-0"
                  >
                    Fix →
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {strengths.length > 0 && (
          <div className="mt-3">
            <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Strengths</h5>
            <div className="flex flex-wrap gap-1.5">
              {strengths.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 text-[11px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
