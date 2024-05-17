import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import FoodProvider from "./context/FoodContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FoodProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FoodProvider>
  </BrowserRouter>
);
