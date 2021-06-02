import React from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";

import { Routes } from "./pages/Routes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
