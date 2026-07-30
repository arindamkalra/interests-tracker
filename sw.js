const CACHE = 'interests-v2';
const ASSETS = ['/interests-tracker/', '/interests-tracker/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Only handle same-origin GET requests (the app shell). Let everything
  // else - cross-origin API calls like Supabase, POST/PATCH requests, etc.
  // - pass through untouched instead of risking a broken respondWith().
  if (url.origin !== self.location.origin || e.request.method !== 'GET') return;
  // network first, fall back to cache
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});