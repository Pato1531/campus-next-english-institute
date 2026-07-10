import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          light2: "#e7e1eb",
          light: "#f2eff4",
          border: "#d8cce0",
          DEFAULT: "#62377c",
          dark: "#532e69",
          darker: "#3f2350",
        },
        ink: {
          secondary: "#6b5d75",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
