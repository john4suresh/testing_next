/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^components/(.*)$|^components/(.*)$",
    "^lib/(.*)$",
    "^utils/(.*)$",
    "^constants/(.*)$",
    "^data/(.*)$",
    "^styles/(.*)$",
    "^[./]",
    "^nprogress/nprogress.css$",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};
