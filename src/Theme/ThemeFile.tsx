import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      // main: "#03314B",
      main: "#22C870",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    h1: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "45px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "23px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle2: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "23px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    button: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
      textTransform: "none",
    },
    caption: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
});

export default Theme;
