import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { TimerProvider } from "./contexts/TimerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <TimerProvider>
        <App />
      </TimerProvider>
    </Router>
  </React.StrictMode>
);
