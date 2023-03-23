/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
      },
      colors:{
        primary:'#F40404',
        para:"#6c6c6c",
        yellowborder:"#FFB800",
      },
      maxWidth:{
        container:"1144px",
      },
    },
  },
};
