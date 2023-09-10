/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
    "./app/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        /**FIXME:: */
        "barchart1-500": "#314F5C",
        "barchart2-500": "#43B4A0",
        "barchart3-500": "#EF8939",
        "barchart4-500": "#E9C232",
        "barchart5-500": "#E3E3E3",
        blue: {
          veryLight: "#FAFBFC",
          light: "#0073C4",
          dark: "#164794",
          flat: "#3876AD",
          active: "#E6F3F9",
        },
        yellow: {
          light: "#FFF7E0",
          dark: "#C58930",
        },
        gray: {
          thin: "#F2F2F2",
          veryLight: "#F3F3F3",
          light: "#F4F4F4",
          medium: "#C4C4C4",
          dark: "#707070",
          veryDark: "#272727",
          neutral: "#676767",
        },
        green: {
          light: "#E8F4F0",
          dark: "#1B8057",
        },
        navy: "#141C36",
        red: "#D75C5C",
        purple: "#434690",
        white: "#FFFFFF",
        neutrals: "#333F48",
        neutrals5: "#F5F5F6",
        neutrals10: "#E4EEFC ",
        neutrals20: "#D6D9DA",
        scampi: "#6468B6",
        mountainMist: "#92989F",
        persianOrange: "#E38E4F",
        radicalRed: "#FF375A",
        silverTree: "#60B2A1",
        azure: "#00A1FF",
        grayLight: "#E1E1E1",
        aqua: "#96E6F0",
        grayMedium: "#C0C0C0",
        redMedium: "#B83C3C",
        warning: "#FFEEBA",
        redLight: "#FEEFF2",
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
      },
      opacity: {
        65: ".65",
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  safelist: [
    /**FIXME:: */
    {
      pattern:
        /^(fill-(?:barchart1|barchart2|barchart3|barchart4|barchart5|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    "bg-scampi",
    "bg-mountainMist",
    "bg-persianOrange",
    "bg-radicalRed",
    "bg-silverTree",
    "bg-azure",
    "bg-blue-flat",
    "bg-aqua",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@headlessui/tailwindcss"),
    require("tailwindcss-animate"),
  ],
};
