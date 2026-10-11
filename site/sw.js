const CACHE_NAME = "domi-shell-b540e1db513f";
const LOCAL_DEV_HOSTS = new Set(["localhost", "127.0.0.1"]);
const LOCAL_DEV_FRESH_FILES = new Set([
  "/index.html",
  "/styles.css",
  "/app.js",
  "/data.js",
  "/manifest.webmanifest",
]);
const CORE_FILES = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/data.js",
  "/manifest.webmanifest",
  "/assets/nunito.ttf",
  "/assets/pwa-192.png",
  "/assets/pwa-512.png",
  "/assets/pwa-maskable-512.png",
  "/brand/logo.png",
  "/brand/wordmark.png",
  "/brand/mascot-waving.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const shell = await caches.open(CACHE_NAME);
    const absoluteUrls = CORE_FILES.map((path) => new URL(path, self.registration.scope).href);
    await shell.addAll(absoluteUrls);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter((name) => name.startsWith("domi-shell-") && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const appRoot = new URL(self.registration.scope);
  if (request.mode === "navigate" && url.pathname === appRoot.pathname) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const shell = await caches.open(CACHE_NAME);
          await shell.put(new URL("/index.html", self.registration.scope).href, response.clone());
        }
        return response;
      } catch {
        const shell = await caches.open(CACHE_NAME);
        const cached = await shell.match(request, { ignoreSearch: true })
          ?? await shell.match(new URL("/index.html", self.registration.scope).href);
        return cached ?? new Response("DOMI is offline. Reconnect to load the app.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    })());
    return;
  }

  if (LOCAL_DEV_HOSTS.has(url.hostname) && LOCAL_DEV_FRESH_FILES.has(url.pathname)) {
    event.respondWith((async () => {
      const shell = await caches.open(CACHE_NAME);
      const cached = await shell.match(request);
      try {
        const response = await fetch(request);
        if (response.ok && response.type === "basic") await shell.put(request, response.clone());
        return response;
      } catch {
        return cached ?? new Response("This part of DOMI is not available offline yet.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const shell = await caches.open(CACHE_NAME);
    const cached = await shell.match(request);
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(request);
      if (response.ok && response.type === "basic") await shell.put(request, response.clone());
      return response;
    } catch {
      return new Response("This item is not available offline.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }
  })());
});
