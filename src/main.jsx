import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import NavigatedRoutes from "./configs/NavigatedRoutes.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NavigatedRoutes />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
