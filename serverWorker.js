

var cacheName = 'PWA'

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        'index.html'
      ]))
  )
})
self.addEventListener('activate', function (event) {
  console.log('Service Worker activate');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  )
})