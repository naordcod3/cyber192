/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#D1D5DB', // text-gray-300
            a: {
              color: '#34D399', // text-emerald-400
              '&:hover': {
                color: '#6EE7B7', // text-emerald-300
              },
            },
            h1: {
              color: '#34D399', // text-emerald-400
            },
            h2: {
              color: '#34D399', // text-emerald-400
            },
            h3: {
              color: '#34D399', // text-emerald-400
            },
            h4: {
              color: '#34D399', // text-emerald-400
            },
            strong: {
              color: '#D1D5DB', // text-gray-300
            },
            code: {
              color: '#34D399', // text-emerald-400
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgba(17, 24, 39, 0.8)', // bg-gray-900/80
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};