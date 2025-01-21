/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-rock-Black": "#121212",
        "black-rock-Grey": "#CCCCCC",
        "black-rock-Grey2": "#888888",
        "black-rock-Orange": "#FA4500",
        "black-rock-White": "#ffffff",
        "black-rock-bg-color": "#F5F5F0",
      },
      fontFamily: {
        ivarRegular: ["var(--font-ivarRegular)"],
        "gt-reguler": ["var(--font-gt-reguler)"],
        "gt-bold": ["var(--font-gt-bold)"],
        "gt-light": ["var(--font-gt-light)"],
        "gt-medium": ["var(--font-gt-medium)"],
        handestonie: ["var(--font-handestonie)"],
      },
      fontSize: {
        90: "90px", 
        78: "78px", 
        70: "70px",
        60: "60px",
        50: "50px",
        40: "40px",
        30: "30px",
        24: "24px",
        28: "28px",
        12: "12px",
      },
      screens: {
        425: "424px",
        375: "375px",
        320: { max: "339px" },
        360: "360px",
        xs: { max: "639px" },
      },
      // screens: {
      //   '425': "424px",
      //  '375': "375px",
      //   '320': { max: "339px" },
      //   '1280': "1280px",
      //   "lg-1": { min: "1025", max: "1279px" },
      //   xs: { max: "639px" },
      //   // xs: { max: "400px" },
      //   // => @media (min-width: 340px and max-width: 639px) { ... }
      //   "2xl": { min: "1440px" },
      //   "3xl": { min: "1536px" },
      // },
    },
  },
  plugins: [],
};
