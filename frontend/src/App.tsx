import React from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { User } from "features";
import { theme } from "constants/theme";

import store from "./store";
import { Routes } from "./pages/Routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
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
              <User>
                <Routes />
              </User>
            </Container>
          </SnackbarProvider>
        </ThemeProvider>
      </Provider>
    </div>
  );
};

export default App;
