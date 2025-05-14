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
        primary: "#386641", // deep forest green
        secondary: "#6a994e", // moss green
        accent: "#bc4749", // clay red
        background: "#f2e8cf", // sand
        foreground: "#283618", // dark olive
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
