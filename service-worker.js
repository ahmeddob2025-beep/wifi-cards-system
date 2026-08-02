const CACHE_NAME = 'wifi-pro-v1';
const urlsToCache = [
  '/wifi-cards-system/?v=pro',
  '/wifi-cards-system/index.html?v=pro',
  '/wifi-cards-system/manifest.json?v=pro'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
