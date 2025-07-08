self.addEventListener("install", (event) => {
  console.log("🛠️ Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("⚡ Service Worker: Activated");
  event.waitUntil(self.clients.claim());
});
