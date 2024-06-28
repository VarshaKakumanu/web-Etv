import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "./Redux/store.js"
import { Toaster } from "sonner";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
