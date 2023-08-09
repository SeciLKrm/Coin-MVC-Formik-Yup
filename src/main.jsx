import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { CoinProvider } from "./context/CoinContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CoinProvider>
  </React.StrictMode>
);
