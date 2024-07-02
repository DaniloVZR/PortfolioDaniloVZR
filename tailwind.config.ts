const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      colors: {
        purple: {
          primary: "#b936c0"
        },
        gray: {
          primary: "rgba(5,5,5,5)"
        }
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 50%, rgba(0,0,0,1) 100%)',
        'gradient-card': 'linear-gradient(90deg, rgba(3,2,14,1) 0%, rgba(59,46,78,0.6993172268907564) 100%)'
      },

    },
  },
  plugins: [
    addVariablesForColors,

  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

export default config;