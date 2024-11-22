/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{JS}" ,"./index.html"],
  theme: {
    extend: { 
      colors:{
        'blue-dark':'#22587C',
        'blue-clear':'#38a7a6',
        'blue-green':'#59cd97',
        'green-clear':'#83ee99',
        'green-pastel':'#cbfacf',
      }
     },
  },
  plugins: [],
}

