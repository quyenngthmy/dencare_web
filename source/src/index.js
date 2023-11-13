import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./js/index";
// import "/node_modules/rsuite/dist/rsuite.css";

if (document.getElementById("form-schedule")) {
  const formSchedule = document.getElementById("form-schedule");
  const formRoot = createRoot(formSchedule);
  formRoot.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
