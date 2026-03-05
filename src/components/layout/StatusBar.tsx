import { useMiro } from '../../hooks/useMiro'

export function StatusBar() {
  const { isConnected } = useMiro()

  return (
    <div role="status" className="h-6 flex items-center justify-between px-4 bg-black-800 border-t border-black-700 flex-shrink-0">
      {/* Left: connection status */}
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
        <span className="text-2xs text-gray-500">
          {isConnected ? 'Miro Connected' : 'Miro Disconnected'}
        </span>
      </div>

      {/* Center: empty or hint */}
      <span className="text-2xs text-gray-500" />

      {/* Right: version */}
      <span className="text-2xs text-gray-500">v{__APP_VERSION__}</span>
    </div>
  )
}
