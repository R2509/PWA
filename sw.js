const cacheName = 'sus-v1'
let cachefiles = [
	'/PWA/',
	'/PWA/app.js',
	'/PWA/index.html',
	'/PWA/styles.css',
]

self.addEventListener('install', (e) => {
	console.log('[Service Worker]: install');
		e.waitUntil((
			async () => {
				const cache = await caches.open(cacheName);
				console.log('[Service Worker]: caching app shell and content');
				await cache.addAll(cachefiles);
			}
		)());
	});
	
	self.addEventListener('fetch', (e) => {
		e.respondWith((
			async () => {
				const r = await caches.match(e.request);
				console.log(`[Service Worker]: resource: fetching ${e.request.url}`);
				if (r) { return r; }
				const response = await fetch(e.request);
				const cache = await caches.open(cacheName);
				console.log(`[Service Worker]: resource: caching ${e.request.url}`);
				cache.put(e.request, response.clone());
				return response;
			}
		)());
	});