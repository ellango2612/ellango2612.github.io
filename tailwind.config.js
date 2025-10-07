/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Times New Roman', 'Times', 'serif'],
        'serif': ['Times New Roman', 'Times', 'serif'],
        'mono': ['Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
};
