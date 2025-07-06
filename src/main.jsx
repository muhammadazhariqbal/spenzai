import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("✅ Service Worker registered");

        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          newWorker.onstatechange = () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller &&
              !sessionStorage.getItem("reloaded")
            ) {
              console.log("🚀 New update available");
              sessionStorage.setItem("reloaded", "true");
              window.location.reload(); // Auto-reload only once
            }
          };
        };
      })
      .catch((err) => console.error("SW registration failed:", err));
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
