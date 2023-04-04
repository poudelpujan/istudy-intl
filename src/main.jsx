import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";
import "./index.scss";
import MenuManager from "./components/Menu/MenuManager/MenuManager";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuManager>
      <HashRouter>
        <App />
      </HashRouter>
    </MenuManager>
  </React.StrictMode>
);
