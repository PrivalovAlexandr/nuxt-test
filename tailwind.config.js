/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '8px',
      },
    },
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        starJedi: ['StarJedi', 'sans-serif'],
      },
      fontSize: {
        '44/100': ['36px', '100%'],
        '36/100': ['36px', '100%'],
        '32/136': ['32px', '136%'],
        '28/128': ['28px', '128%'],
        '24/132': ['24px', '132%'],
        '20/140': ['20px', '140%'],
        '20/120': ['20px', '120%'],
        '16/128': ['16px', '128%'],
        '16/120': ['16px', '120%'],
        '12/132': ['12px', '132%'],
        '8/144': ['8px', '144%'],
      },
      colors: {
        neutral: {
          50: '#FCFCFF',
          100: '#FBFAFF',
          200: '#F1F1F6',
          250: '#E5E5ED',
          300: '#D1D0DB',
          400: '#AFADBD',
          500: '#918FA1',
          600: '#726F81',
          700: '#4D4B5E',
          800: '#373546',
          900: '#282637',
          950: '#1B1927',
        },
        gold: {
          50: '#fffdf0',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      boxShadow: {
        field: '0 0 5px 0 #fffdf0;',
        fieldHover: '0 0 10px 2px #fde047;',
        card: '0 0 5px 2px #fffdf0;',
        cardHover: '0 0 15px 5px #fef9c3;',
      },
      borderRadius: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        36: '36px',
        40: '40px',
      },
      backgroundImage: {
        space: 'url(/assets/images/space-background.jpg)'
      }
    },
  },
  plugins: [],
}

