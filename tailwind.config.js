/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#131313',
             'secondary': '#ffed4a',
            'danger': '#e3342f',
            })},

            fontFamily : {
              spaceGrotesk: ["Space Grotesk", "sans-serif"],
            },

            backgroundImage: {
              'Background-star': "url('./assets/image.png')",
            }
  },
  plugins: [],
}

