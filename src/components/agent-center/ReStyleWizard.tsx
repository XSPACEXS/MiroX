import { Modal } from '@components/ui/Modal'
import { useRestyleStore } from '@stores/restyleStore'
import { RestyleIntro } from './restyle/RestyleIntro'
import { RestyleScan } from './restyle/RestyleScan'
import { RestyleInspiration } from './restyle/RestyleInspiration'
import { RestylePreferences } from './restyle/RestylePreferences'
import { RestyleProposals } from './restyle/RestyleProposals'
import { RestyleApply } from './restyle/RestyleApply'
import type { RestyleStep } from '@/types/restyle'

const STEP_NAMES: Record<RestyleStep, string> = {
  1: 'Welcome',
  2: 'Design Audit',
  3: 'Inspiration',
  4: 'Preferences',
  5: 'Proposals',
  6: 'Apply',
}

const STEP_COMPONENTS: Record<RestyleStep, () => JSX.Element> = {
  1: RestyleIntro,
  2: RestyleScan,
  3: RestyleInspiration,
  4: RestylePreferences,
  5: RestyleProposals,
  6: RestyleApply,
}

export function ReStyleWizard(): JSX.Element {
  const isOpen = useRestyleStore((s) => s.isOpen)
  const currentStep = useRestyleStore((s) => s.currentStep)
  const closeWizard = useRestyleStore((s) => s.closeWizard)

  const StepComponent = STEP_COMPONENTS[currentStep]

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeWizard}
      title={`Step ${currentStep} of 6 — ${STEP_NAMES[currentStep]}`}
      size="xl"
    >
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 py-3 border-b border-black-600">
        {([1, 2, 3, 4, 5, 6] as RestyleStep[]).map((step) => (
          <div
            key={step}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              step === currentStep
                ? 'bg-purple-400 scale-125 shadow-[0_0_8px_rgba(167,139,250,0.5)]'
                : step < currentStep
                  ? 'bg-purple-400/50'
                  : 'bg-black-600'
            }`}
          />
        ))}
      </div>

      {/* Step content */}
      <StepComponent />
    </Modal>
  )
}
