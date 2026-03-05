import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useBoardBuilder } from '../../hooks/useBoardBuilder'
import { useMiro } from '../../hooks/useMiro'
import { getTemplateById } from '../../templates'
import { StepIndicator } from './StepIndicator'
import { ContentEditor } from './ContentEditor'
import { BoardPreview } from './BoardPreview'
import { CreationProgress } from './CreationProgress'
import { SuccessScreen } from './SuccessScreen'
import { TemplateGallery } from '../templates/TemplateGallery'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export function BoardWizard() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { isConnected: isMiroConnected } = useMiro()
  const {
    currentStep, selectedTemplate, boardName, boardDescription,
    fieldValues, creationProgress, creationSteps, isCreating, isComplete,
    boardUrl, error,
    setTemplate, setBoardName, setBoardDescription, setFieldValue,
    nextStep, prevStep, setCurrentStep, startCreation, reset,
  } = useBoardBuilder()

  // Auto-select template from URL param
  useEffect(() => {
    const templateId = searchParams.get('template')
    if (templateId && !selectedTemplate) {
      const template = getTemplateById(templateId)
      if (template) {
        setTemplate(template)
        setCurrentStep(2)
      }
    }
  }, [searchParams, selectedTemplate, setTemplate, setCurrentStep])

  return (
    <div className="flex flex-col gap-6">
      <StepIndicator currentStep={currentStep} className="mb-4" />

      <AnimatePresence mode="wait">
        {/* Step 1: Choose Template */}
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <TemplateGallery
              compact
              onSelect={(templateId) => {
                const t = getTemplateById(templateId)
                if (t) {
                  setTemplate(t)
                  nextStep()
                }
              }}
            />
          </motion.div>
        )}

        {/* Step 2: Name & Description */}
        {currentStep === 2 && selectedTemplate && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="max-w-xl mx-auto w-full space-y-6"
          >
            <div className="flex items-center gap-4 p-4 glass rounded-xl">
              <span className="text-4xl">{selectedTemplate.emoji}</span>
              <div>
                <h3 className="text-white font-semibold">{selectedTemplate.name}</h3>
                <p className="text-gray-400 text-sm">{selectedTemplate.description}</p>
              </div>
            </div>

            {!isMiroConnected && (
              <div className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-sm flex items-center justify-between gap-3">
                <span>Connect your Miro account in Settings to create boards.</span>
                <Button variant="ghost" size="sm" onClick={() => navigate('/settings')}>
                  Settings
                </Button>
              </div>
            )}

            <Input
              label="Board Name"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              placeholder={`My ${selectedTemplate.name}`}
            />

            <Input
              label="Description (optional)"
              value={boardDescription}
              onChange={(e) => setBoardDescription(e.target.value)}
              placeholder="What is this board for?"
            />

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center justify-between gap-3">
                <span>{error}</span>
                <Button variant="ghost" size="sm" onClick={reset}>
                  Try Again
                </Button>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button variant="ghost" onClick={prevStep}>Back</Button>
              <Button variant="primary" onClick={nextStep} disabled={!boardName.trim()}>
                Next: Customize Content
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Content Fields + Preview */}
        {currentStep === 3 && selectedTemplate && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex flex-col lg:flex-row gap-6"
          >
            <div className="flex-1">
              <ContentEditor
                fields={selectedTemplate.fields}
                values={fieldValues}
                onChange={setFieldValue}
              />
            </div>
            <div className="w-full lg:w-80 flex-shrink-0">
              <BoardPreview template={selectedTemplate} />
            </div>

            <div className="flex justify-between pt-4 w-full">
              <Button variant="ghost" onClick={prevStep}>Back</Button>
              <Button variant="primary" onClick={startCreation}>
                Create Board
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Creating */}
        {currentStep === 4 && !isComplete && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {error && !isCreating ? (
              <div className="max-w-xl mx-auto w-full space-y-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center space-y-3">
                  <p className="text-red-400 text-sm">{error}</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" onClick={reset}>
                      Start Over
                    </Button>
                    <Button variant="primary" size="sm" onClick={startCreation}>
                      Try Again
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <CreationProgress
                progress={creationProgress}
                steps={creationSteps}
              />
            )}
          </motion.div>
        )}

        {/* Success */}
        {isComplete && selectedTemplate && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <SuccessScreen
              boardName={boardName}
              boardUrl={boardUrl}
              templateName={selectedTemplate.name}
              onNewBoard={reset}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
