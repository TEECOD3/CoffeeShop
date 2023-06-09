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
    fontFamily: {
      rails: ["Raleway", "sans-serif"],
      nunito: ["nunito", "sans-serif"],
      mini: ["Miniver", "sans-serif"],
      monsts: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        coffee: {
          100: "#BC9A6C",
          200: "#3b2f2f",
          800: "#333333",
        },

        lightdark: "#4F4F4F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
    plugins: [require("tailwindcss-animate")],
  },
};
