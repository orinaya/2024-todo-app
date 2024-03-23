import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#FCFCFC',
          primary: {
            50: '#f5f0ff',
            100: '#ede4ff',
            200: '#dccdff',
            300: '#c5a5ff',
            400: '#aa72ff',
            500: '#9239ff',
            600: '#8b12ff',
            700: '#8000ff',
            800: '#6b00d8',
            900: '#5d02b8',
            950: '#350078',
            DEFAULT: '#5d02b8',
            foreground: 'DEFAULT'
          }
        }
      },
      dark: {
        colors: {
          background: '#0d0c0c',
          primary: {
            50: '#f5f0ff',
            100: '#ede4ff',
            200: '#dccdff',
            300: '#c5a5ff',
            400: '#aa72ff',
            500: '#9239ff',
            600: '#8b12ff',
            700: '#8000ff',
            800: '#6b00d8',
            900: '#5d02b8',
            950: '#350078',
            DEFAULT: '#5d02b8',
            foreground: 'DEFAULT'
          }
        }
      }
    }
  })]
}
