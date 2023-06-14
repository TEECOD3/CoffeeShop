/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "transalte(0)" },
          "100%": { transform: "translate(-50%)" },
        },
        skeleton: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        scroll: "scroll 5s ease-in-out infinite",
        skeleton: "skeleton 10s ease-in-out infinite",
      },
      backgroundImage: {
        hero: "url('./src/assets/Images/bg-hero.png')",
        lightSeed: "url('./src/assets/Images/ligghtseed.png')",
        seed: "url('./public/Images/seed.png')",
        cofeeHero: "url('./public/Images/coffeeHero.png')",
        blackcoffee: "url('./src/assets/Images/blackcofee.png')",
        coffeabout: "url('./public/Images/coffeeAboutSec.png')",
        coffeabout2: "url('./public/Images/cofeeAbout2.png')",
        leaveright: "url('./public/Images/leaveright.png')",
        leaveleft: "url('./public/Images/leaveleft.png')",
        middlecofee: "url('./public/Images/cofeemids.png')",
      },
      fontFamily: {
        rails: ["Raleway", "sans-serif"],
        nunito: ["nunito", "sans-serif"],
        mini: ["Miniver", "sans-serif"],
      },
      colors: {
        coffee: {
          100: "#BC9A6C",
          200: "#3b2f2f",
          800: "#333333",
        },

        lightdark: "#4F4F4F",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
