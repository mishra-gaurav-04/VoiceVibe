/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width : {
        '700' : '700px',
        '500' : '500px',
        '370' : '370px',
        '350' : '350px',
        '90' : '90px',
        '200' : '200px'
      },
      maxHeight : {
        'card' : '300px'
      }
      ,
      maxWidth : {
        'card' : '90%',
        '400' : '40px',
      },
      top : {
        '240' : '240px'
      },
      left : {
        '1000' : '1000px'
      },
      height : {
        '90' : '90px'
      }

    },
  },
  plugins: [],
}