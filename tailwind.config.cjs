module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212123",

          secondary: "#fcf2e4",

          accent: "#cea46f",

          neutral: "#606061",

          "base-100": "#09090B",

          info: "#66C7FF",

          success: "#87D039",

          warning: "#E3D664",

          error: "#FF7070",
        },
      },
      "bumblebee",
      "luxury",
    ],
  },
  content: ["./src/**/*.{svelte,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spartan", "sans-serif"],
      },
      color: {
        black: "#212123",
      },
    },
  },
  plugins: [require("daisyui")],
};
