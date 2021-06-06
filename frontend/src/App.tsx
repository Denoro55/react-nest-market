import React from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import { theme } from "constants/theme";

import { Routes } from "./pages/Routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          autoHideDuration={5000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          maxSnack={3}
        >
          <CssBaseline />
          <Container maxWidth="lg">
            <Routes />
          </Container>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
