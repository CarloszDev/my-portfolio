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
              pressStart: ["Press Start 2P", "system-ui"],
              Poppins: ["Poppins", "sans-serif"]
            },

            backgroundImage: {
              'Background-star': "url('./assets/image.png')",
              'gradient': "url('./assets/gradientBG.png')",
            },

            screens: {
              'tablet': {'max': '600px'},  // Aplica-se a telas menores que 640px
              'laptop': {'max': '1024px'}, // Aplica-se a telas menores que 1024px
              'desktop': {'max': '1280px'}, // Aplica-se a telas menores que 1280px
            },

            zIndex: {
              '2': '2',
            },
            
  },
  plugins: [],
}

