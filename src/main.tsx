import App from "@/app";
import { StrictMode } from "react";
import "@/css/app.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
