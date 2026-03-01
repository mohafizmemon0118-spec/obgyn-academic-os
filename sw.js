const CACHE_NAME = "obgyn-os-v1";
const urlsToCache = [
  "/obgyn-academic-os/",
  "/obgyn-academic-os/index.html",
  "/obgyn-academic-os/style.css",
  "/obgyn-academic-os/app.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});