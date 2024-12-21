/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#F2F4F7",
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
