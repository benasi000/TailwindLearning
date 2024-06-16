import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'gold': "#D7BC83"
      },
    },
  },
  plugins: [],
};
export default config;
