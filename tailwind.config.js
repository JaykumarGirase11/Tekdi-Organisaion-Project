/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        background: {
          light: '#f8fafc',
          dark: '#1e293b',
        },
        // Eye comfort colors
        comfort: {
          light: {
            bg: '#f8f9fa',
            text: '#2d3748',
            card: '#ffffff',
            border: '#e2e8f0',
          },
          dark: {
            bg: '#1a202c',
            text: '#e2e8f0',
            card: '#2d3748',
            border: '#4a5568',
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'card-hover': '0 0 0 1px rgba(0, 0, 0, 0.05), 0 3px 6px 0 rgba(0, 0, 0, 0.1)',
        'dark-card': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        'dark-card-hover': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 3px 6px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
} 