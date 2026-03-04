import { useSettingsStore } from '../../stores/settingsStore'

const accentColors = [
  { value: '#FFD600', label: 'Yellow' },
  { value: '#FF6B6B', label: 'Coral' },
  { value: '#4ECDC4', label: 'Teal' },
  { value: '#A78BFA', label: 'Purple' },
  { value: '#60A5FA', label: 'Blue' },
  { value: '#34D399', label: 'Green' },
  { value: '#F97316', label: 'Orange' },
  { value: '#EC4899', label: 'Pink' },
]

export function AppearanceConfig() {
  const theme = useSettingsStore(s => s.theme)
  const accentColor = useSettingsStore(s => s.accentColor)
  const setTheme = useSettingsStore(s => s.setTheme)
  const setAccentColor = useSettingsStore(s => s.setAccentColor)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display font-bold text-2xl text-white mb-1">Appearance</h2>
        <p className="text-gray-400 text-sm">Customize the look and feel of MiroX.</p>
      </div>

      {/* Theme */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-200">Theme</label>
        <div className="flex gap-3">
          <button
            onClick={() => setTheme('dark')}
            className={`flex-1 p-4 rounded-xl border-2 transition-all ${
              theme === 'dark'
                ? 'border-yellow-400 bg-black-700'
                : 'border-black-500 bg-black-800 hover:border-black-400'
            }`}
          >
            <div className="w-full h-16 bg-black-900 rounded-lg mb-3 border border-black-600" />
            <p className="text-sm font-medium text-white">Dark</p>
            <p className="text-xs text-gray-500">Default theme</p>
          </button>
          <button
            onClick={() => setTheme('light')}
            className={`flex-1 p-4 rounded-xl border-2 transition-all ${
              theme === 'light'
                ? 'border-yellow-400 bg-black-700'
                : 'border-black-500 bg-black-800 hover:border-black-400'
            }`}
          >
            <div className="w-full h-16 bg-gray-200 rounded-lg mb-3 border border-gray-300" />
            <p className="text-sm font-medium text-white">Light</p>
            <p className="text-xs text-gray-500">Coming soon</p>
          </button>
        </div>
      </div>

      {/* Accent color */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-gray-200">Accent Color</label>
        <div className="flex flex-wrap gap-3">
          {accentColors.map(color => (
            <button
              key={color.value}
              onClick={() => setAccentColor(color.value)}
              className={`w-10 h-10 rounded-xl border-2 transition-all ${
                accentColor === color.value
                  ? 'border-white scale-110'
                  : 'border-transparent hover:border-gray-600'
              }`}
              style={{ backgroundColor: color.value }}
              title={color.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
