/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        topbar: "#54BAB9",
      },
      colors: {
        topbar: "#54BAB9",
        search: "rgba(68, 68, 68, 0.5)",
      },
      fontSize: {
        text22: "22px",
      },
    },
  },
  plugins: [],
};
