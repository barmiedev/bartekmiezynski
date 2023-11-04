/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'background': '#040202',
        'text': '#ffffff',
        'primary': '#841010',
        'secondary': '#3f0808',
        'accent': '#8a5c5c',
        'tertiary': '#ffffff3d',
      },
    },
  },
  plugins: [],
};
