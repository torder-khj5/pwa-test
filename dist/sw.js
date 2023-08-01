const t = "cache-v0.0.1", o = "/offline.html", n = "https://api.example.com/data", i = "/apiCache.json", r = [
  "./offline.html",
  "./favicon.ico",
  "./img/hubt_logo_full_black.svg",
  "./css/offline.css",
  "./apiCache.json"
];
console.log([{"revision":null,"url":"assets/index-01efa002.js"},{"revision":null,"url":"assets/index-0c67f332.js"},{"revision":null,"url":"assets/index-38f680be.js"},{"revision":null,"url":"assets/index-3f61c4dd.js"},{"revision":null,"url":"assets/index-6042819a.js"},{"revision":null,"url":"assets/index-9da176d7.js"},{"revision":null,"url":"assets/index-b8dc8b6d.js"},{"revision":null,"url":"assets/index-cab2d093.css"},{"revision":null,"url":"assets/index-d4beff7b.css"},{"revision":null,"url":"assets/index-de462ef7.js"},{"revision":null,"url":"assets/index-f07a20bd.js"},{"revision":"167d58cb310f8d1afbee6224f0bb1bab","url":"css/offline.css"},{"revision":"e2a5a47346f3c410e39968c98a563056","url":"index.html"},{"revision":"4d9b9a6766b036c28723f7c4cd4596d9","url":"mockServiceWorker.js"},{"revision":"d09e215b65e8776e0ae384121717835a","url":"offline.html"},{"revision":"a99d5c422e40f4b6eb64546791a031a5","url":"icons/logo-512x512.png"},{"revision":"e3e8067d0439d36dcecb2b3cd7ff2aba","url":"icons/favicon-128.png"},{"revision":"a93cd3c7ee89f57c409c3da1250a4b5e","url":"favicon.ico"},{"revision":"4d9b9a6766b036c28723f7c4cd4596d9","url":"mockServiceWorker.js"},{"revision":"d09e215b65e8776e0ae384121717835a","url":"offline.html"},{"revision":"6383ff87ac81d263c4f8791d8a740f6d","url":"sw.js"},{"revision":"167d58cb310f8d1afbee6224f0bb1bab","url":"css/offline.css"},{"revision":"fec816ed209497cac699a55220e5d8e0","url":"icons/apple-touch-icon-152x152.png"},{"revision":"44361f12da5a85d3650f6b7c76637edd","url":"img/hubt_logo_full_black.svg"},{"revision":"c018fe319fe908f268cc8340c919f577","url":"img/hubt_logo_full_white.svg"},{"revision":"fcffd41ddf2023a11ede7c7b901ed3bb","url":"manifest.webmanifest"}]);
self.addEventListener("message", (e) => {
  e.data && e.data.type === "SKIP_WAITING" && self.skipWaiting();
});
self.addEventListener("install", async (e) => {
  e.waitUntil(caches.open(t).then((a) => a.addAll(r)));
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
  ) : e.request.url === n ? e.respondWith(
    (async () => {
      try {
        const a = await fetch(e.request);
        return a && a.ok && (await caches.open(t)).put(n, a.clone()), a;
      } catch {
        const c = await (await caches.open(t)).match(i);
        return c || new Response("Network request failed and no cached response available.", {
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
