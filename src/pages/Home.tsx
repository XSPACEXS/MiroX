import { motion } from 'framer-motion'
import { pageVariants } from '../design-system/animations'
import { HeroBanner } from '../components/home/HeroBanner'
import { StatCards } from '../components/home/StatCards'
import { QuickActions } from '../components/home/QuickActions'
import { RecentBoards } from '../components/home/RecentBoards'
import { WelcomeModal } from '../components/home/WelcomeModal'
import { useSettingsStore } from '../stores/settingsStore'

export default function Home() {
  const onboardingComplete = useSettingsStore((s) => s.onboardingComplete)

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-6 space-y-6"
    >
      <HeroBanner />
      <StatCards />
      <QuickActions />
      <RecentBoards />
      {!onboardingComplete && <WelcomeModal />}
    </motion.div>
  )
}
