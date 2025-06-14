const CACHE_NAME = 'dpmaker-cache-v1';
const URLS_TO_CACHE = [
  '/dpmaker/',
  '/dpmaker/index.html',
  '/dpmaker/manifest.json',
  '/dpmaker/notepad.jpg'
  // Add more assets if needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
