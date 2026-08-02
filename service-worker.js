const CACHE_NAME = 'wifi-cards-v2';
const urlsToCache = [
  '/wifi-cards-system/',
  '/wifi-cards-system/index.html',
  '/wifi-cards-system/manifest.json'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
