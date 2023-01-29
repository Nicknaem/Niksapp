self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/Niksapp/',
        '/Niksapp/index.html',
        '/Niksapp/main.js',
        '/Niksapp/main.css',
        '/Niksapp/assets/backgrounds/1.jpg',
        '/Niksapp/logos/n.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });