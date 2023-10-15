// To avoid the white flash while load
document.documentElement.setAttribute("data-bs-theme", "dark")

import "bootstrap";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
