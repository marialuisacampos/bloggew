/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        decorated: 'Roboto Mono, monospace'
      },
      colors: {
        "dark-bg": "#23212E",
        "dark-second-bg": "#252836"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
  experimental: {
    fontLoaders: [
      {
        loader: 'next/font/google',
        options: { subsets: ['latin'] },
      },
    ],
  },
}
