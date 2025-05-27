/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // Add typical content paths for a Next.js project
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "grid-flash": "grid-flash 0.8s linear infinite",
        "grid": "grid 15s linear infinite",
      },
      keyframes: {
        "grid-flash": {
          "0%": {
            "background-position": "0% 0%"
          },
          "100%": {
            "background-position": "0% -50%"
          }
        },
        "grid": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" }
        },
      },
    },
  },
  plugins: [], // Add plugins array
};