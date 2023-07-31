const t = "cache-v0.0.1", o = "/offline.html", s = "https://api.example.com/data", i = "/apiCache.json", r = [
  "./offline.html",
  "./favicon.ico",
  "./img/hubt_logo_full_black.svg",
  "./css/offline.css",
  "./apiCache.json"
];
console.log([{"revision":null,"url":"assets/index-031fb899.js"},{"revision":null,"url":"assets/index-05fcf372.js"},{"revision":null,"url":"assets/index-09063f08.js"},{"revision":null,"url":"assets/index-12368cf8.js"},{"revision":null,"url":"assets/index-39074fdf.js"},{"revision":null,"url":"assets/index-5cc81d47.js"},{"revision":null,"url":"assets/index-995e4426.js"},{"revision":null,"url":"assets/index-b62d48e4.js"},{"revision":null,"url":"assets/index-bc69b97e.js"},{"revision":null,"url":"assets/index-cab2d093.css"},{"revision":null,"url":"assets/index-d4beff7b.css"},{"revision":"167d58cb310f8d1afbee6224f0bb1bab","url":"css/offline.css"},{"revision":"ab91324a7230708c109aab5721919af5","url":"index.html"},{"revision":"4d9b9a6766b036c28723f7c4cd4596d9","url":"mockServiceWorker.js"},{"revision":"d09e215b65e8776e0ae384121717835a","url":"offline.html"},{"revision":"b77371ae1780ffa41869e002795e0eeb","url":"manifest.webmanifest"}]);
self.addEventListener("message", (e) => {
  e.data && e.data.type === "SKIP_WAITING" && self.skipWaiting();
});
self.addEventListener("install", async (e) => {
  e.waitUntil(caches.open(t).then((a) => a.addAll(r))), e.waitUntil(
    fetch(s).then((a) => caches.open(t).then((c) => c.put(s, a))).catch((a) => {
      console.error("Failed to cache API data:", a);
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.request.mode === "navigate" ? e.respondWith(
    (async () => {
      try {
        const a = await e.preloadResponse;
        return a || await fetch(e.request);
      } catch {
        return await (await caches.open(t)).match(o);
      }
    })()
  ) : e.request.url === s ? e.respondWith(
    (async () => {
      try {
        const a = await fetch(e.request);
        return a && a.ok && (await caches.open(t)).put(s, a.clone()), a;
      } catch {
        const n = await (await caches.open(t)).match(i);
        return n || new Response("Network request failed and no cached response available.", {
          status: 503,
          statusText: "Service Unavailable",
          headers: new Headers({
            "Content-Type": "text/plain"
          })
        });
      }
    })()
  ) : e.respondWith(
    (async () => await (await caches.open(t)).match(e.request) || fetch(e.request))()
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});
