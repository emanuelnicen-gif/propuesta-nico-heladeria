import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDFCF7",
          dark: "#F5EEE0",
        },
        choco: {
          50: "#FDF6EE",
          100: "#F5E8D2",
          200: "#EACFA3",
          300: "#DAAE6A",
          400: "#C68A36",
          500: "#A86A20",
          600: "#7C4D18",
          700: "#5C3510",
          800: "#3D2209",
          900: "#201005",
        },
        pista: {
          50: "#F0F7F1",
          100: "#D4EAD8",
          200: "#A8CFB1",
          300: "#75AF83",
          400: "#4A8F5A",
          500: "#3B7248",
          600: "#2D5938",
          700: "#1F4028",
          800: "#122819",
          900: "#071209",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-plus-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        warm: "0 1px 3px rgba(124, 77, 24, 0.07), 0 4px 12px rgba(124, 77, 24, 0.05)",
        "warm-md":
          "0 4px 16px rgba(124, 77, 24, 0.09), 0 8px 32px rgba(124, 77, 24, 0.06)",
        "warm-lg":
          "0 8px 32px rgba(124, 77, 24, 0.10), 0 20px 56px rgba(124, 77, 24, 0.07)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
