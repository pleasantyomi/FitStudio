/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors:{
        'primary': '#25AB75',  
        'Hero' : '#F7F7F7',
        'secondary': '#BDBDBD',
        'footer': '#808080',
        'icons': '#2C433A',
        'Grey': '#383838',
        'other': '#ECECEA',

      },

      fontFamily: {
        'primary': 'Inter',
        'hero' : 'Sora',
      }

    },
  },
  plugins: [],
}

