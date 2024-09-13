const CACHE_NAME = 'loemii-cache-v1';
const urlsToCache = [
  'https://script.google.com/macros/s/your-app-url/exec',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

