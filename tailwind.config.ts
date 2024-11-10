import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily: {
      rye: [ 'Rye' , 'Serif'],
   
      libre: ['"Libre Bodoni"', 'Serif'],
     }, 
    //  fontWeight: {
    //   regular: '400',
    //  }, width: {'custom-288': '288px',}, height: {
    //   'custom-58': '58px',
    //  }

    },
  },
  plugins: [],
};
export default config;
