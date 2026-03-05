import { useId, Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react'

type Placement = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  content: string
  placement?: Placement
  children: ReactNode
  className?: string
}

const placementStyles: Record<Placement, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
}

export function Tooltip({ content, placement = 'top', children, className = '' }: TooltipProps) {
  const tooltipId = useId()

  const child = Children.only(children)
  const trigger = isValidElement(child)
    ? cloneElement(child as ReactElement<Record<string, unknown>>, { 'aria-describedby': tooltipId })
    : child

  return (
    <div className={`relative group inline-flex ${className}`}>
      {trigger}
      <div
        id={tooltipId}
        role="tooltip"
        className={`absolute ${placementStyles[placement]} pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150 z-50`}
      >
        <div className="px-2.5 py-1.5 text-xs font-medium text-white bg-black-700 border border-black-500 rounded-lg shadow-lg whitespace-nowrap">
          {content}
        </div>
      </div>
    </div>
  )
}
