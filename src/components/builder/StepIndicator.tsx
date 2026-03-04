import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface StepIndicatorProps {
  currentStep: number
  className?: string
}

const steps = [
  { num: 1, label: 'Template' },
  { num: 2, label: 'Name' },
  { num: 3, label: 'Content' },
  { num: 4, label: 'Creating' },
]

export function StepIndicator({ currentStep, className = '' }: StepIndicatorProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {steps.map((step, i) => {
        const isComplete = currentStep > step.num
        const isActive = currentStep === step.num

        return (
          <div key={step.num} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.9,
                  backgroundColor: isComplete ? '#FFD600' : isActive ? '#FFD600' : 'rgba(34,34,34,1)',
                  borderColor: isComplete || isActive ? '#FFD600' : 'rgba(51,51,51,1)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold"
              >
                {isComplete ? (
                  <Check size={14} className="text-black" />
                ) : (
                  <span className={isActive ? 'text-black' : 'text-gray-500'}>{step.num}</span>
                )}
              </motion.div>
              <span className={`text-sm font-medium ${
                isActive ? 'text-white' : isComplete ? 'text-yellow-400' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-px ${isComplete ? 'bg-yellow-400' : 'bg-black-600'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}
