import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#608B56',
          'green-mid': '#7AAD6E',
          'green-light': '#96C48A',
          'green-bright': '#AACC90',
          'green-pale': '#DCF0D2',
          cream: '#EAF7E4',
          yellow: '#F2C14E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif'],
        serif: ['Noto Serif TC', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
