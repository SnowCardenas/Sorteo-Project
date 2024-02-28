import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navbar />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
