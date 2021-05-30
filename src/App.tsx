import React from "react";
import { Container } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Routes } from "./pages/Routes";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes />
      </Container>
    </div>
  );
};

export default App;
