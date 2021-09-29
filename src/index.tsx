import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
