/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'SFProDisplay': ['SF Pro Display']
      },
      screens:{
        'sm': '555px',
        'lg': '1090px',
        'md': '780px'
      },
      colors: {
        'gray5': '#E0E0E0',
        'gray2': '#4F4F4F',
        'gray4': '#BDBDBD',
        'black': '#181818',
        'lightGray': '#F2F2F2',
        'veryLightGray': '#EBEBEB',
        'red': '#EB5757',
        'green': '#219653',
        'blue': '#2F80ED',
        'lightBlue': '#2969BF',
        'darkBlue': '#144E9D',
        'paleYellow': '#FCEFCA'
      }
    },
  },
  plugins: [],
}

