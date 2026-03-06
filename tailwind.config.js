/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFD600',
          500: '#FFC107',
          600: '#FF8F00',
          700: '#E65100',
          800: '#BF360C',
          900: '#7F0000',
        },
        black: {
          50: '#F5F5F5',
          100: '#EEEEEE',
          200: '#E0E0E0',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#333333',
          600: '#222222',
          700: '#1A1A1A',
          800: '#111111',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '14px' }],
      },
      animation: {
        'pulse-yellow': 'pulse-yellow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-claude': 'glow-claude 2s ease-in-out infinite',
        'glow-gemini': 'glow-gemini 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-yellow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 214, 0, 0)' },
          '50%': { boxShadow: '0 0 20px 8px rgba(255, 214, 0, 0.3)' },
        },
        'glow-claude': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 214, 0, 0)' },
          '50%': { boxShadow: '0 0 15px 4px rgba(255, 214, 0, 0.15)' },
        },
        'glow-gemini': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)' },
          '50%': { boxShadow: '0 0 15px 4px rgba(59, 130, 246, 0.15)' },
        },
      },
      boxShadow: {
        'yellow-glow': '0 0 30px rgba(255, 214, 0, 0.3)',
        'yellow-glow-lg': '0 0 60px rgba(255, 214, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
