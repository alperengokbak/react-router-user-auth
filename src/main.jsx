// React And ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App.jsx";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
