/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        leftright: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(30%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        blink: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        leftright: 'leftright 4s linear infinite',
        blink: 'blink 1s linear infinite'
      },

    },
  },
	plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}