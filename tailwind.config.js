/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        myFont: ['Pixelify', 'sans-serif'],
      },
      keyframes: {
        'rotate-border': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rotate-border': 'rotate-border 3s infinite linear',
        'fade-in': 'fade-in 0.5s ease-in-out forwards', 
      },
    },
  },
  plugins: [],
};
