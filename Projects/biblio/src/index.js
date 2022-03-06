import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./products-context";
import { ToastProvider } from "./toast-context";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
