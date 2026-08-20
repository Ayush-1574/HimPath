/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        himpath: {
          ink: '#102b3c',
          ink2: '#173f52',
          blue: '#1e667c',
          teal: '#258b82',
          tealLight: '#32a297',
          mist: '#eef5f3',
          paper: '#fbfcfa',
          gold: '#c9a45b',
          gold2: '#e4c982',
          goldLight: '#f6e7c1',
          text: '#273943',
          muted: '#66767d',
          line: '#dbe5e4',
          cardBg: '#ffffff',
          darkBg: '#071e2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        himpath: '0 18px 50px rgba(15, 44, 58, 0.10)',
        card: '0 8px 28px rgba(20, 57, 66, 0.06)',
        subtle: '0 4px 16px rgba(15, 44, 58, 0.04)',
      },
    },
  },
  plugins: [],
};
