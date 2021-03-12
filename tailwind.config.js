module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lightgray: '#F2F2F2',
      lightergray: '#C9C9C9',
      darkerlightergray: '#F9F9F9',
      darkblue: '#191D35',
      pink: '#e2003a',
      white: '#ffffff',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.7rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
    },
    fontFamily: {
      body:['soleil', 'sans-serif']
    },
    screens: {
      'xsm': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1367px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '0.5/12': '4.16666%',
        '1/12': '8.33333%',
        '2/12': '16.66666%',
        '3/12': '25',
        '4/12': '33.33333%',
        '5/12': '41.66666%',
        '6/12': '50%',
        '7/12': '58.33333%',
        '8/12': '66.66666%',
        '9/12': '75%',
        '10/12': '83.33333%',
        '11/12': '91.66666%',
        '12/12': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
