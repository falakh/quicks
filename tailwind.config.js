/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/pages/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey3": "#828282",
        "blue-primary": "#2F80ED",
        "gray-text": "#4F4F4F",
        "red-primary": "#EB5757",
      },
    },
  },
  plugins: [require("daisyui")],
};
