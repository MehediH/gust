module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: "-1px 4px 14px 0 rgb(25 144 255 / 43%)",
        solid: "9px 8px 0px #333d79",
      },
      colors: {
        cream: "#FAEBEF",
        navy: "#333D79",
        green: "#2BAE66",
      },
    },
    fontFamily: {
      display: ["Croissant One", "system-ui", "cursive"],
      body: ["Shippori Antique", "system-ui", "sans-serif"],
      mono: [
        "ui-monospace",
        "monospace",
        "Shippori Antique",
        "system-ui",
        "sans-serif",
      ],
    },
  },
  variants: {},
  plugins: [],
};
