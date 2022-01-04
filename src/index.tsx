import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SoloEBPFApp from "./SoloEBPFApp";
import * as serviceWorker from "./serviceWorker";
import "./fontFace.css";

ReactDOM.render(<SoloEBPFApp />, document.getElementById("root"));

if ((module as any).hot) {
  (module as any).hot.accept("./SoloEBPFApp", () => {
    const NextApp = require("./SoloEBPFApp").default;
    ReactDOM.render(<NextApp />, document.getElementById("root"));
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
