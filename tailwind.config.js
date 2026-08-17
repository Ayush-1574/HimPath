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
        ceva: {
          orange: '#e65100',
          orangeDark: '#bf360c',
          orangeLight: '#ff8a50',
          blue: '#0066cc',
          blueDark: '#004c99',
          green: '#2e7d32',
          forest: '#1b5e20',
          sand: '#fbf9f5',
          warmGray: '#f4efe6',
          earth: '#8d6e63',
          dark: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
