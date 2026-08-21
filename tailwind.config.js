/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071124',
          900: '#0b1936',
          850: '#0f2249',
          800: '#142a59',
          700: '#1d3b7a',
          600: '#274e9f',
        },
        teal: {
          DEFAULT: '#0f766e',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        academic: {
          gold: '#d97706',
          amber: '#b45309',
          border: '#e2e8f0',
          darkborder: 'rgba(255, 255, 255, 0.12)',
          bg: '#f8fafc',
          muted: '#64748b',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '1480px',
        'reading': '760px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'academic': '0 4px 12px -2px rgba(15, 23, 42, 0.06)',
      },
      lineHeight: {
        'hero': '1.12',
        'tight': '1.2',
        'body': '1.75',
      }
    },
  },
  plugins: [],
}
