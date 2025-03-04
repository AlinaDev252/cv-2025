module.exports = {
  content: [
    './pages/**/*.{vue,js}',  // Look for Tailwind classes inside the pages folder
    './layouts/**/*.{vue,js}', // Look for Tailwind classes inside the layouts folder
    './components/**/*.{vue,js}',  // Look for Tailwind classes inside the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

