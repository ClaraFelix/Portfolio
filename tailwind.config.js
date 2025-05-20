const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/!(*.stories|*.spec).{ts,html}")],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0C1421",
          secondary: "#C4B5FD",
          neutral: "#040111",
          text: "#4C1D95",
          body: "#040111",
          white: "#FFFFF",
        },
      },
    ],
  },
  extend: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["Roboto", "sans-serif"],
    },
    cursor: {
      grab: "grab",
      grabbing: "grabbing",
    },
  },
};
