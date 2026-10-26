
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  palette: {
    primary: {
      main: "#14255c",
      light: "#394b83",
      dark: "#0b153b",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#00897b",
      dark: "#00695c",
      contrastText: "#ffffff",
    },

    success: {
      main: "#2e7d32",
    },

    error: {
      main: "#d32f2f",
    },

    background: {
      default: "#f0f2f5",
      paper: "#ffffff",
    },

    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },

  typography: {
    fontFamily: "Arial, sans-serif",

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 8,
  },
});

export default theme;
