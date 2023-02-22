import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // React Strict Mode is turned off so that `useEffect` doesn't run twice.
  // `useEffect` normally would run twice in React Strict Mode, but not in production.
  // It's important that `useEffect` not run twice so that the API doesn't do all calls twice.
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
