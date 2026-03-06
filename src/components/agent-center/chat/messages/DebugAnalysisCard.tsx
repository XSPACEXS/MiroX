import { Bug } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import type { ChatMessage } from '@/types/chat'

interface DebugAnalysisCardProps {
  message: ChatMessage
}

export default function DebugAnalysisCard({ message }: DebugAnalysisCardProps): JSX.Element {
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)
  const analysis = message.metadata?.debugAnalysis

  if (!analysis) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-full bg-red-400/20 flex items-center justify-center shrink-0 mt-0.5">
          <Bug size={14} className="text-red-400" />
        </div>
        <p className="text-sm text-gray-400">No debug analysis available.</p>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-red-400/20 flex items-center justify-center shrink-0 mt-0.5">
        <Bug size={14} className="text-red-400" />
      </div>
      <div className="flex-1 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 max-w-[85%]">
        <h4 className="text-sm font-semibold text-white mb-2">Debug Analysis</h4>

        <div className="mb-3">
          <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Root Cause</h5>
          <p className="text-sm text-gray-300">{analysis.rootCause}</p>
        </div>

        <div className="mb-3">
          <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Affected Files</h5>
          <div className="space-y-0.5">
            {analysis.affectedFiles.map((f) => (
              <p key={f} className="text-xs font-mono text-gray-400">
                {f}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Suggested Fix</h5>
          <p className="text-sm text-gray-300">{analysis.suggestedFix}</p>
        </div>

        {analysis.diffPreview && (
          <div className="mb-3">
            <h5 className="text-xs font-semibold text-gray-500 uppercase mb-1">Diff Preview</h5>
            <pre className="bg-black-900 rounded-xl p-3 overflow-x-auto">
              <code className="text-xs font-mono text-gray-300">{analysis.diffPreview}</code>
            </pre>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => {
              setMode('mission')
              setPendingInput(analysis.suggestedFix)
            }}
            className="px-3 py-1.5 rounded-lg bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-300 hover:text-white transition-colors"
          >
            Fix All
          </button>
          <button
            onClick={() => void navigator.clipboard.writeText(analysis.suggestedFix)}
            className="px-3 py-1.5 rounded-lg bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-300 hover:text-white transition-colors"
          >
            Copy Fix
          </button>
        </div>
      </div>
    </div>
  )
}
