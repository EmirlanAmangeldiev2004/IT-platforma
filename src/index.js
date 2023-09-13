import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RoatContextProvider from "./context/RoatContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RoatContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoatContextProvider>
);
