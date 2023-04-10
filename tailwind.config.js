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
    },
    fontFamily: {
      inter: ["lato", "sans-serif"],
      playfair: ["Playfair Display", "sans-serif"],
    },
    BackgroundColors: {
      coffee: "#BC9A6C",
    },
  },
  plugins: [],
};
