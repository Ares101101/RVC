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
      scrollSnapType: {
        'x-mandatory': 'x mandatory',
        'y-mandatory': 'y mandatory',
        'both-mandatory': 'both mandatory',
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

