import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";

import { GlobalStyles } from "@mui/material";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          h1: {
            textTransform: "capitalize",
            fontSize: "1.25rem",
            marginBottom: "20px",

            [theme.breakpoints.up("md")]: {
              fontSize: "1.875rem",
            },
            [theme.breakpoints.up("lg")]: {
              fontSize: "2.5rem",
              marginBottom: "42px",
            },
            [theme.breakpoints.up("xl")]: {
              fontSize: "4rem",
            },
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
