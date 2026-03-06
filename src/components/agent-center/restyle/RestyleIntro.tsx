import { motion } from 'framer-motion'
import { Paintbrush, ScanSearch, ImageIcon, Palette, Wand2 } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { Card } from '@components/ui/Card'
import { useRestyleStore } from '@stores/restyleStore'
import { listContainerVariants, listItemVariants } from '@design-system/animations'

const FLOW_STEPS = [
  { icon: ScanSearch, label: 'Scan', desc: 'Audit your codebase' },
  { icon: ImageIcon, label: 'Inspire', desc: 'Upload references' },
  { icon: Palette, label: 'Choose', desc: 'Pick your style' },
  { icon: Wand2, label: 'Apply', desc: 'Redesign everything' },
] as const

export function RestyleIntro(): JSX.Element {
  const setStep = useRestyleStore((s) => s.setStep)

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center px-8 py-10 text-center"
    >
      <motion.div variants={listItemVariants} className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center mx-auto">
          <Paintbrush size={28} className="text-purple-400" />
        </div>
      </motion.div>

      <motion.h2 variants={listItemVariants} className="font-display font-bold text-2xl text-white mb-2">
        Re-Style MiroX
      </motion.h2>

      <motion.p variants={listItemVariants} className="text-gray-400 text-sm max-w-md mb-5">
        Show us what you like, and we&apos;ll redesign the entire app to match your vision.
      </motion.p>

      <motion.div variants={listItemVariants} className="flex items-center gap-2 mb-8">
        <Badge color="yellow">Claude Opus</Badge>
        <Badge color="blue">Gemini 2.5 Pro</Badge>
      </motion.div>

      <motion.div variants={listItemVariants} className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
        {FLOW_STEPS.map((step) => (
          <Card key={step.label} variant="default" className="p-4 text-left">
            <step.icon size={18} className="text-purple-400 mb-2" />
            <div className="text-sm font-semibold text-white">{step.label}</div>
            <div className="text-xs text-gray-500">{step.desc}</div>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={listItemVariants}>
        <Button
          variant="primary"
          size="lg"
          onClick={() => setStep(2)}
          className="!bg-purple-400 !text-white hover:!bg-purple-500 !shadow-none hover:!shadow-[0_0_20px_rgba(167,139,250,0.3)]"
        >
          Start Design Audit
        </Button>
      </motion.div>
    </motion.div>
  )
}
