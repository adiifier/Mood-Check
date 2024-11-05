/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#cdb4db",
        white: " #ffffff",
        pink: "ffafcc",
      },
      height: {
        head: "7rem",
      },
      width: {
        mxh: "400px",
      },
    },
  },
  plugins: [],
};
