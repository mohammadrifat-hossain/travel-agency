import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fcfee8",
          100: "#f8fccb",
          200: "#f1f899",
          300: "#e8f35c",
          400: "#E6F13A",
          500: "#c7d41f",
          600: "#9da914",
          700: "#758013",
          800: "#5c6514",
          900: "#4e5515",
          DEFAULT: "#E6F13A",
          hover: "#d8e32c",
          light: "#edf66b",
          dark: "#c7d41f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
