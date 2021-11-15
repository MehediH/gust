module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        highlight: "-1px 4px 14px 0 rgb(25 144 255 / 43%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
