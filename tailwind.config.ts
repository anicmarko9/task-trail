import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: "#4A4947",
        secondary: "#4A49474D",
        accent: "#B17457",
        danger: "#E53935",
      },

      backgroundColor: {
        primary: "#FAF7F0",
        secondary: "#D8D2C2",
        tertiary: "#D8D2C21A",
        accent: "#FFD700",
        danger: "#E53935",
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
    },
  },
  plugins: [],
};

export default config;
