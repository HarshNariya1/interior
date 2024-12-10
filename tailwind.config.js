/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  fontFamily: {
    'sans': ['ui-sans-serif', 'system-ui'],
    'serif': ['ui-serif', 'Georgia'],
    'mono': ['ui-monospace', 'SFMono-Regular'],
    'display': ['Oswald'],
    'body': ['"Open Sans"'],
    
  },
  theme: {
    screens: {
      'sm': '576px',
     
      'md': '768px',
     
      'lg': '992px',
     

      'xl': '1200px',
      

      '2xl': '1400px',
     
    },
    extend: {},
  },
  plugins: [],
}

