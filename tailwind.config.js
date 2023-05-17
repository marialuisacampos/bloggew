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
        "primary-dark": "#1A1D21",
        "secondary-dark": "#0D1216",
        "yellow": "#CFD714",
        "pink": "#C865C9",
        "green": "#13AD6B",
        "blue": "#149ABE"
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
