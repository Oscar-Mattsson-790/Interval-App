import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.sass";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoadingView from "./componets/LoadingView/LoadingView";
import SetTimerView from "./componets/SetTimerView/SetTimerView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoadingView /> },
      { path: "set-timer", element: <SetTimerView /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>
);
