/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'rgb(var(--accent-color))',
        'accent-light': 'rgb(var(--accent-light))',
        'accent-dark': 'rgb(var(--accent-dark))',
        'app-dark': 'rgb(var(--app-dark))',
        'app-blue': 'rgb(var(--app-blue))',
      },
    },
  },
  plugins: [],
}; 