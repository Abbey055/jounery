// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
      colors: {
        forest: '#1F3B2C',
        'forest-dark': '#16291D',
        gold: '#EFA83C',
        'gold-light': '#FBE8C6',
        cream: '#FAF9F4',
        card: '#F4F3EE',
        ink: '#1E1E1E',
        muted: '#6B6B62',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}