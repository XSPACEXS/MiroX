import { motion } from 'framer-motion'
import type { ChatMessage } from '@/types/chat'
import UserMessage from './messages/UserMessage'
import AssistantMessage from './messages/AssistantMessage'
import ThinkingIndicator from './messages/ThinkingIndicator'
import SuggestionCard from './messages/SuggestionCard'
import MissionPlanCard from './messages/MissionPlanCard'
import MissionProgressCard from './messages/MissionProgressCard'
import MissionCompleteCard from './messages/MissionCompleteCard'
import ScanResultsCard from './messages/ScanResultsCard'
import DebugAnalysisCard from './messages/DebugAnalysisCard'

interface Props {
  message: ChatMessage
}

export function ChatMessageRenderer({ message }: Props): JSX.Element {
  let content: JSX.Element

  if (message.role === 'user') {
    content = <UserMessage message={message} />
  } else {
    switch (message.type) {
      case 'thinking':
        content = <ThinkingIndicator message={message} />
        break
      case 'suggestion-card':
        content = <SuggestionCard message={message} />
        break
      case 'mission-plan':
        content = <MissionPlanCard message={message} />
        break
      case 'mission-progress':
        content = <MissionProgressCard message={message} />
        break
      case 'mission-complete':
        content = <MissionCompleteCard message={message} />
        break
      case 'scan-results':
        content = <ScanResultsCard message={message} />
        break
      case 'debug-analysis':
        content = <DebugAnalysisCard message={message} />
        break
      case 'error':
        content = <AssistantMessage message={message} />
        break
      default:
        content = <AssistantMessage message={message} />
        break
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  )
}
