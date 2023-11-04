/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "2%": { transform: "translateX(-10px) rotate(-5deg)" },
          "4%": { transform: "translateX(10px) rotate(5deg)" },
          "6%": { transform: "translateX(-10px) rotate(-5deg)" },
          "8%": { transform: "translateX(10px) rotate(5deg)" },
          "9%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    animation: {
      "bounce-short": "bounce 1s ease-in-out 1s",
      shake: "shake 5s ease-in-out infinite",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  daisyui: {
    themes: [
      "emerald",
      {
        whatsApp: {
          primary: "#16a34a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
