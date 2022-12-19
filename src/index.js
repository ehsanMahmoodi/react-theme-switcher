import React from "react";
import ReactDOM from "react-dom";
// component
import App from "./app/App";
// style's
import "./index.css";
import "./assets/scss/themeSwitcher.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
