import React from "react";
import ReactDOM from "react-dom";

import * as dotenv from "dotenv";

import "./index.scss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

dotenv.config();
