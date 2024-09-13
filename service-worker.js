const CACHE_NAME = 'loemii-cache-v1';
const urlsToCache = [
  'https://script.google.com/macros/s/AKfycbzEbfPbgLiKnj0Zp7uaoGtA8fgOYKVXa-_Nn8mLVIniCK2FepS0yVTn2R7QOmKCWCFz/exec',
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

