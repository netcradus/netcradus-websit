/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        accent: "var(--color-accent)",
        "accent-bright": "var(--color-accent-bright)",
        "accent-deep": "var(--color-accent-deep)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        primary: "var(--color-accent)",
        "surface-color": "var(--color-surface)",
        border: "var(--color-border)",

        white: "#ffffff",
        gray: {
          300: "#C7BCC3",
          400: "#A99AA3",
          500: "#7E6F78",
          700: "#3A2C34",
          800: "#241A21",
          900: "#140E13",
        },
      },

      fontFamily: {
        sans: ['"TT Hoves"', 'TTHoves', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        display: ['"TT Hoves"', 'TTHoves', 'Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        mono: ["JetBrains Mono", "monospace"],
      },

      animation: {
        "grid-scroll": "grid-scroll 20s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },

      keyframes: {
        "grid-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "red-radial": "radial-gradient(ellipse at 65% 50%, rgba(232, 64, 10, 0.13) 0%, transparent 65%)",
        "brand-gradient": "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-bright) 100%)",
        "heading-gradient": "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-bright) 100%)",
      },

      boxShadow: {
        brand: "0 10px 30px rgba(232, 64, 10, 0.18)",
        "brand-lg": "0 20px 60px rgba(232, 64, 10, 0.22)",
        glow: "0 0 40px rgba(232, 64, 10, 0.18)",
        "red-glow": "0 0 30px rgba(232, 64, 10, 0.45), 0 0 70px rgba(232, 64, 10, 0.15)",
        "red-glow-lg": "0 0 50px rgba(232, 64, 10, 0.5), 0 0 100px rgba(232, 64, 10, 0.2)",
      },
    },
  },
  plugins: [],
};