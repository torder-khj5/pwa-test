const t = "cache-v0.0.1", o = "/offline.html", s = "https://api.example.com/data", i = "/apiCache.json", r = [
  "/offline.html",
  "/favicon.ico",
  "/img/hubt_logo_full_black.svg",
  "/css/offline.css",
  "/apiCache.json"
];
console.log([{"revision":null,"url":"assets/index-37bb4f2b.js"},{"revision":null,"url":"assets/index-407a2081.js"},{"revision":null,"url":"assets/index-6558a9b5.js"},{"revision":null,"url":"assets/index-69471918.js"},{"revision":null,"url":"assets/index-880f7878.js"},{"revision":null,"url":"assets/index-b4268186.js"},{"revision":null,"url":"assets/index-cab2d093.css"},{"revision":null,"url":"assets/index-d4beff7b.css"},{"revision":null,"url":"assets/index-d4d24a22.js"},{"revision":null,"url":"assets/index-e163314c.js"},{"revision":null,"url":"assets/index-eda1ff70.js"},{"revision":"167d58cb310f8d1afbee6224f0bb1bab","url":"css/offline.css"},{"revision":"83d037aa48a630fb4d5c50bf07ce50dc","url":"index.html"},{"revision":"4d9b9a6766b036c28723f7c4cd4596d9","url":"mockServiceWorker.js"},{"revision":"24c44f3e6e9628b121c9a79a15448867","url":"offline.html"},{"revision":"b77371ae1780ffa41869e002795e0eeb","url":"manifest.webmanifest"}]);
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
