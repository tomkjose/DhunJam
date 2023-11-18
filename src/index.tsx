import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./Styles/index.css";
import { AuthProvider } from "./Provider/AuthProvider";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
