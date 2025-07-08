import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'text-fade': {
          '0%, 100%': { color: '#22d3ee' }, // cyan-400
          '50%': { color: '#ffffff' },      // white
        },
      },
      animation: {
        'text-fade': 'text-fade 3s ease-in-out infinite',
      },
    },
  },
  plugins: [daisyui],
}
