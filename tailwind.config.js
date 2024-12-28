/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        "primary-heading": ["1.375rem", "1.815rem"],
      },
      backgroundColor: {
        primary: "#F2F4F7",
        secondary: "#F7F9FC",
      },
      textColor: {
        primary: "#1D2939",
      },
      borderColor: {
        primary: "#E4E7EC",
      },
    },
  },
  plugins: [],
};
