/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '1.35',
        'super-tight': '0.9',
      },
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgGradientStart: "var(--bg-gradient-start)",
        bgGradientEnd: "var(--bg-gradient-end)",
        inputBorder: "var(--input-border)",
        inputBorderError: "var(--input-border-error)",
        buttonBg: "var(--button-bg)",
        buttonBgHover: "var(--button-bg-hover)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        bgSecondary: "var(--bg-secondary)",
        lightBackground: "var(--light-bg)",
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--bg-gradient-start), var(--bg-gradient-end))',
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
        heading: "var(--font-heading)",
      },
    },
  },
  plugins: [],
}

