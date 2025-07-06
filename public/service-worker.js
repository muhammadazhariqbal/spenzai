self.addEventListener("install", (event) => {
  console.log("🛠️ Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("⚡ Service Worker: Activated");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Simple network-first strategy (no aggressive caching)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
