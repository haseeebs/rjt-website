import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routing/routes.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import AuthWrapper from "./AuthWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </Provider>
  </React.StrictMode>
);