/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        move: {
          // "0%": { opacity: "0",
          // },
          "50%": { transform: "translate3d(0,0,0)", opacity: "1" },
          // "100%": { transform: "translate3d(0,0,0)", opacity: "0" },
        },

        show1: {
          "0%": { opacity: "0" },
          "15%": { opacity: "1" },
          "30%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        show2: {
          "0%": { opacity: "0" },
          "30%": { opacity: "0" },
          "45%": { opacity: "1" },
          "65%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        show3: {
          "0%": { opacity: "0" },
          "60%": { opacity: "0" },
          "75%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        moveColor: {
          // "0%": { opacity: "0",
          // },
          "100%": { transform: "translate(0,0)", opacity: "1" },
          // "100%": { transform: "translate3d(0,0,0)", opacity: "0" },
        },
      },
      animation: {
        move: "move 6s ease-in-out infinite",
        moveColor: "moveColor 1.4s ease-in-out infinite",
        show1: "show1 18s linear infinite",
        show2: "show2 18s linear infinite",
        show3: "show3 18s linear infinite",
      },
    },
  },
  plugins: [],
};
