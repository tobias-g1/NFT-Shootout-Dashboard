module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "min-1.5": "-0.375rem",
      },
      spacing: {
        "min-4": "-1rem",
        "min-10": "-2.5rem",
        "min-1/2": "-50%",
      },
      colors: {
        primary: "#495057",
        secondary: "#1c75bb",
        third: "#fab40e",
        forth: "#e9e9ef",
        fifth: "#5156be",
        info: "rgb(75,166,239)",
        danger: "rgb(253,98,94)",
        softInfo: "rgba(75,166,239,0.25)",
        softDanger: "rgba(253,98,94,0.25)",
        light: "rgba(233,233,239, 0.4)",
        white: "rgb(255,255,255)",
        link: "#1c73ba",
        muted: "#74788d",
        softSuccess: "rgba(42,181,125, 0.25)",
        success: "rgba(42,181,125)",
        sidebarAlert: "rgba(81,86,190,0.1)",
        warn: "rgb(255,191,83)",
      },
      zIndex: {
        "min-1": "-1",
      },
      minWidth: {
        60: "15rem",
        40: "10rem",
        36: "9rem",
        28: "7rem",
      },
      boxShadow: {
        dropdown: "0 0.25rem 0.75rem rgba(18,38,63,0.08)",
      },
      fontFamily: {
        marcellus: "Marcellus, serif",
      },
      transitionProperty: {
        height: "height",
      },
    },
    screens: {
      xxxs: "400px",
      xxs: "496px",
      xs: "640px",
      sm: "784px",
      md: "928px",
      lg: "1056px",
      xl: "1184px",
      "2xl": "1296px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
