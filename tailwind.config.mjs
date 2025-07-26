/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        primary: "#4A4947",
        secondary: "#4A49474D",
        accent: "#B17457",
        danger: "#E53935",
        nav: "#FAF7F0",
      },

      backgroundColor: {
        primary: "#FAF7F0",
        secondary: "#D8D2C2",
        tertiary: "#D8D2C21A",
        accent: "#B17457",
        danger: "#E53935",
        nav: "#4A4947",
      },

      screens: {
        xxs: "360px",
        xs: "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1500px",
        "3xl": "1920px",
      },

      keyframes: {
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        "slide-out-right": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },

      animation: {
        "slide-in-right": "slide-in-right 0.3s ease-out forwards",
        "slide-out-right": "slide-out-right 0.3s ease-in forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-out": "fade-out 0.3s ease-in forwards",
      },
    },
  },

  plugins: [],
};

export default config;
