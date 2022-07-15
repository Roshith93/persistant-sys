import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { MainContextProvider } from "./Context/MainContext";
import App from "./App";

const element = document.getElementById("root");
ReactDOM.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>,
  element
);
