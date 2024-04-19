import flowbite from 'flowbite-react/tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#50cfdf',
        'primary-bg': '#a5d8ff',
        secundary: '#9c36b5',
        'secundary-bg': '#d0bfff',
        accent: '#f8f1ee',
        'accent-bg': '#461f00',
        notification: '#1F2A37',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'move-horizontal': 'move 1s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay'), flowbite.plugin()],
}
export default config
