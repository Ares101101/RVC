/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-1': '-1',
      },
    },
    variants: {
      extend: {
        scale: ['group-hover'],
      },
    },
  },
  plugins: [],

}

