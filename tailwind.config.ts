import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8976A",
          light: "#D4B896",
          pale: "#F5EFE6",
        },
        dark: {
          DEFAULT: "#0D0D0D",
          2: "#161616",
          3: "#1E1E1E",
          4: "#2A2A2A",
        },
        muted: {
          DEFAULT: "#888880",
          2: "#666660",
        },
        "off-white": "#F2EDE6",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond', Georgia, serif", "Georgia", "serif"],
        jost: ["'Jost', system-ui, sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
