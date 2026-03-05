import { useState, useCallback } from 'react'
import type { TemplateDefinition } from '../templates/types'
import { useBoardStore } from '../stores/boardStore'
import { useSettingsStore } from '../stores/settingsStore'
import { buildBoard } from '../services/boardBuilder'

export interface CreationStep {
  id: string
  label: string
  status: 'pending' | 'active' | 'complete' | 'error'
}

const DEFAULT_STEPS: CreationStep[] = [
  { id: 'validate', label: 'Validating configuration', status: 'pending' },
  { id: 'create-board', label: 'Creating Miro board', status: 'pending' },
  { id: 'diagrams', label: 'Building diagrams', status: 'pending' },
  { id: 'documents', label: 'Creating documents', status: 'pending' },
  { id: 'tables', label: 'Adding tables', status: 'pending' },
  { id: 'polish', label: 'Applying visual polish', status: 'pending' },
  { id: 'cleanup', label: 'Cleaning up ghost items', status: 'pending' },
]

export function useBoardBuilder() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateDefinition | null>(null)
  const [boardName, setBoardName] = useState('')
  const [boardDescription, setBoardDescription] = useState('')
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({})
  const [creationProgress, setCreationProgress] = useState(0)
  const [creationSteps, setCreationSteps] = useState<CreationStep[]>(DEFAULT_STEPS)
  const [isCreating, setIsCreating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [boardUrl, setBoardUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const boardStore = useBoardStore()
  const settingsStore = useSettingsStore()

  const setTemplate = useCallback((template: TemplateDefinition | null) => {
    setSelectedTemplate(template)
    if (template) {
      setBoardName(template.name)
      // Initialize field defaults
      const defaults: Record<string, string> = {}
      template.fields.forEach(f => {
        if (f.defaultValue) defaults[f.id] = f.defaultValue
      })
      setFieldValues(defaults)
    }
  }, [])

  const setFieldValue = useCallback((fieldId: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [fieldId]: value }))
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }, [])

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }, [])

  const updateStep = useCallback((stepId: string, status: CreationStep['status']) => {
    setCreationSteps(prev => prev.map(s => s.id === stepId ? { ...s, status } : s))
  }, [])

  const startCreation = useCallback(async () => {
    if (!selectedTemplate) return
    setIsCreating(true)
    setError(null)
    setCurrentStep(4)
    setCreationSteps(DEFAULT_STEPS.map(s => ({ ...s, status: 'pending' as const })))

    try {
      const result = await buildBoard(
        selectedTemplate,
        fieldValues,
        boardName || selectedTemplate.name,
        (step, progress) => {
          setCreationProgress(progress)
          // Map progress to step statuses
          if (progress >= 5) updateStep('validate', 'active')
          if (progress >= 15) {
            updateStep('validate', 'complete')
            updateStep('create-board', 'active')
          }
          if (progress >= 30) {
            updateStep('create-board', 'complete')
            updateStep('diagrams', 'active')
          }
          if (progress >= 50) {
            updateStep('diagrams', 'complete')
            updateStep('documents', 'active')
          }
          if (progress >= 65) {
            updateStep('documents', 'complete')
            updateStep('tables', 'active')
          }
          if (progress >= 80) {
            updateStep('tables', 'complete')
            updateStep('polish', 'active')
          }
          if (progress >= 88) {
            updateStep('polish', 'complete')
            updateStep('cleanup', 'active')
          }
          if (progress >= 100) updateStep('cleanup', 'complete')
          void step // progress callback provides step name for logging
        },
        boardDescription
      )

      setBoardUrl(result.boardUrl)

      boardStore.addRecentBoard({
        id: result.boardId,
        name: result.boardName,
        url: result.boardUrl,
        templateId: selectedTemplate.id,
        templateName: selectedTemplate.name,
        createdAt: new Date().toISOString(),
      })
      boardStore.incrementTotal()
      settingsStore.recordTemplateUsed(selectedTemplate.id)

      setIsComplete(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Board creation failed')
    } finally {
      setIsCreating(false)
    }
  }, [selectedTemplate, boardName, boardDescription, fieldValues, boardStore, settingsStore, updateStep, setCurrentStep])

  const reset = useCallback(() => {
    setCurrentStep(1)
    setSelectedTemplate(null)
    setBoardName('')
    setBoardDescription('')
    setFieldValues({})
    setCreationProgress(0)
    setCreationSteps(DEFAULT_STEPS)
    setIsCreating(false)
    setIsComplete(false)
    setBoardUrl(null)
    setError(null)
  }, [])

  return {
    currentStep,
    selectedTemplate,
    boardName,
    boardDescription,
    fieldValues,
    creationProgress,
    creationSteps,
    isCreating,
    isComplete,
    boardUrl,
    error,
    setTemplate,
    setBoardName,
    setBoardDescription,
    setFieldValue,
    nextStep,
    prevStep,
    setCurrentStep,
    startCreation,
    reset,
  }
}
