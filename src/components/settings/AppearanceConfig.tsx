import { useSettingsStore } from '../../stores/settingsStore'
import { Button } from '@components/ui/Button'

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
          <Button
            variant={theme === 'dark' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setTheme('dark')}
            aria-pressed={theme === 'dark'}
            className={`flex-1 p-4 flex-col items-stretch h-auto ${
              theme === 'dark' ? 'border-yellow-400' : ''
            }`}
          >
            <div className="w-full h-16 bg-black-900 rounded-lg mb-3 border border-black-600" />
            <p className="text-sm font-medium text-white">Dark</p>
            <p className="text-xs text-gray-500">Default theme</p>
          </Button>
          <Button
            variant={theme === 'light' ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setTheme('light')}
            aria-pressed={theme === 'light'}
            className={`flex-1 p-4 flex-col items-stretch h-auto ${
              theme === 'light' ? 'border-yellow-400' : ''
            }`}
          >
            <div className="w-full h-16 bg-gray-200 rounded-lg mb-3 border border-gray-300" />
            <p className="text-sm font-medium text-white">Light</p>
            <p className="text-xs text-gray-500">Coming soon</p>
          </Button>
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
              aria-label={`${color.label} accent color`}
              aria-pressed={accentColor === color.value}
              className={`w-10 h-10 rounded-xl border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 focus-visible:ring-offset-1 focus-visible:ring-offset-black-900 ${
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
