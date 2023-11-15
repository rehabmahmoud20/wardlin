import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00878F",
    },
    secondary: {
      main: "#fff",
    },
    black: {
      main: "#000",
    },
    light: {
      main: "#fff",
    },
    babyBlue: {
      main: "#2FBFDE",
    },
    borderColor: {
      main: "#C8CBD9",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});


export default theme;
