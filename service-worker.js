const CACHE_NAME = 'loemii-cache-v1';
const urlsToCache = [
  'https://script.google.com/macros/s/AKfycbyQl4kf0v_WYrqt1Ol0MOR2YGolf013M0YMyBU0hZ8a0q1sGjo_7AW6lu1wqBC8l_LO/exec',
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

