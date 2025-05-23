/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
import defaultColors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...defaultColors.blue,
          DEFAULT: defaultColors.blue[600],
          light: defaultColors.blue[400],
          dark: defaultColors.blue[800],
        },
      },
      boxShadow: {
        neon: "0 0 10px theme('colors.blue.200'), 0 0 25px theme('colors.blue.400'), 0 0 40px theme('colors.blue.600')",
      },
    },
  },
  plugins: [
    typography,
    plugin(({ addUtilities }) => {
      const neonUtilities = {};
      for (const color in defaultColors) {
        if (typeof defaultColors[color] === "object") {
          const c200 = defaultColors[color][200];
          const c400 = defaultColors[color][400];
          const c600 = defaultColors[color][600];
          if (c200 && c400 && c600) {
            neonUtilities[`.neon-${color}`] = {
              boxShadow: `0 0 10px ${c200}, 0 0 25px ${c400}, 0 0 40px ${c600}`,
            };
          }
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};