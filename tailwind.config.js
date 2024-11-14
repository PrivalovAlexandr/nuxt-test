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
      accent: {
        50: '#FFF4F3',
        100: '#FFE2E0',
        200: '#FF9993',
        300: '#FF7067',
        400: '#FF5449',
        500: '#FF3427',
        600: '#DE1A0D',
        700: '#B60B00',
        800: '#830800',
        900: '#5F0600',
        950: '#420602',
      },
      error: {
        100: '#FFE3DF',
        200: '#FEB9AF',
        300: '#FF8F7F',
        400: '#ED6552',
        500: '#EA3E26',
        600: '#B62410',
        700: '#7B1204',
        800: '#430901',
      },
      warning: {
        100: '#FFF1D6',
        200: '#FFE5B4',
        300: '#FFCD6D',
        400: '#FFAE12',
        500: '#E99900',
        600: '#B37600',
        700: '#452D00',
      },
      info: {
        DEFAULT: '#3C5DD0',
      },
      success: {
        DEFAULT: '#64C15B',
      },
      boxShadow: {
        card: '0 4px 8.5px 0 #36353D1F',
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
    },
  },
  plugins: [],
}
