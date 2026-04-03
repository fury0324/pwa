const CACHE_NAME = 'myapp-v1';
const urlsToCache = [
  './',
  './index.html',
  './node_modules/bootstrap/dist/css/bootstrap.min.css',
  './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32x32.png',
  './icons/favicon-16x16.png'
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