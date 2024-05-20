import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./domains/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
      colors: {
        primary: "#dbd1d1",
        secondary: "#dbd1d1",
      },
    },
  },
  plugins: [],
};

export default config;
