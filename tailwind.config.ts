import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#acf7c1",
        orange: "#f26430",
        blue: "#009ddc",
        white: "#ffffff",
        black:"#222222"
      },
      backgroundImage: {
        heroimg: "url('https://res.cloudinary.com/dckdognik/image/upload/v1725817855/highlights/f6tgqiae4yxfqs21w2g5.png')",
        coolor: "url('https://res.cloudinary.com/dckdognik/image/upload/v1725891473/highlights/wecqzp0sbaw8ekgza2ve.png')"
      },
      fontFamily:{
        raleway: ['var(--font-raleway)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
