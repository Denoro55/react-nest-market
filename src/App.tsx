import React, { Component } from "react";
import "./App.css";

import image from "images/react.png";
import svgIcon from "images/computer-graphic.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <div className="background-image"></div>
        <br />
        <img width={300} src={image} alt="React" />
        <br />
        <br />
        <img width={150} src={svgIcon} alt="svg" />
        <br />
        <br />
        <div className="font-lato">My web font works great!</div>
      </div>
    );
  }
}

export default App;
