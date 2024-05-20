// React And ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App.jsx";

// Context
import { AuthProvider } from "./Context/AuthProvider";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
