/** @type {import('tailwindcss').Config} */
import images from "./public/Images/bg-hero.png";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./public/Images/bg-hero.png')",
        lightSeed: "url('./public/Images/ligghtseed.png')",
        seed: "url('./public/Images/seed.png')",
        cofeeHero: "url('./public/Images/coffeeHero.png')",
        dottedimage: "url('./public/Images/dottedimagecofee.png')",
        coffeabout: "url('./public/Images/coffeeAboutSec.png')",
        coffeabout2: "url('./public/Images/cofeeAbout2.png')",
      },
      fontFamily: {
        inter: ["lato", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        lora: ["lora", "sans-serif"],
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        coffee: "#BC9A6C",
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
