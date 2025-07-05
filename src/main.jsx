import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Register service worker for PWA only if not running in StackBlitz
if (
  "serviceWorker" in navigator &&
  !window.navigator.userAgent.includes("StackBlitz")
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  });
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("Service worker registered", reg))
      .catch((err) =>
        console.error("Service worker registration failed:", err)
      );
  });
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
