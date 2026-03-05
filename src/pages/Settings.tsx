import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pageVariants } from '../design-system/animations'
import { SettingsLayout } from '../components/settings/SettingsLayout'
import { MiroConfig } from '../components/settings/MiroConfig'
import { GitHubConfig } from '../components/settings/GitHubConfig'
import { GeminiConfig } from '../components/settings/GeminiConfig'
import { AppearanceConfig } from '../components/settings/AppearanceConfig'
import { AboutPanel } from '../components/settings/AboutPanel'

const panels: Record<string, React.ReactNode> = {
  miro: <MiroConfig />,
  github: <GitHubConfig />,
  gemini: <GeminiConfig />,
  appearance: <AppearanceConfig />,
  about: <AboutPanel />,
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState('miro')

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-6"
    >
      <h1 className="font-display font-bold text-4xl text-white mb-6">Settings</h1>
      <SettingsLayout activeTab={activeTab} onTabChange={setActiveTab}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            {panels[activeTab]}
          </motion.div>
        </AnimatePresence>
      </SettingsLayout>
    </motion.div>
  )
}
