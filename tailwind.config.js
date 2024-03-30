/* eslint-disable no-unused-vars */
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
   

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	 
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: 'class',
	theme: {
	  extend: {
		animation: {
			aurora: "aurora 60s linear infinite",
		},
		keyframes: {
			aurora: {
			  from: {
				backgroundPosition: "50% 50%, 50% 50%",
			  },
			  to: {
				backgroundPosition: "350% 50%, 350% 50%",
			  },
			}
		},
		maxWidth: {
		  container: "1440px",
		},
		screens: {
		  xs: "320px",
		  sm: "375px",
		  sml: "500px",
		  md: "667px",
		  mdl: "768px",
		  lg: "960px",
		  lgl: "1024px",
		  xl: "1280px",
		},
		fontFamily: {
		  bodyFont: ["DM Sans", "sans-serif"],
		  titleFont: ["Poppins", "sans-serif"],
		},
		colors: {
		  primeColor: "#262626",
		  lightText: "#6D6D6D",
		},
		boxShadow: {
		  testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
		},
	  },
	},
	plugins: [require("tailwind-scrollbar")],
  };

function addVariablesForColors({ addBase, theme }) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  
  