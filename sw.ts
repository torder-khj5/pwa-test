// const CACHE_NAME = 'cache-v0.0.1';
//
// const OFFLINE_URL = '/offline.html';
// const API_URL = 'https://api.example.com/data';
// const API_RESPONSE_FILE = '/apiCache.json';
// const FILES_TO_CACHE = [
//   './offline.html',
//   './favicon.ico',
//   './img/hubt_logo_full_black.svg',
//   './css/offline.css',
//   './apiCache.json',
// ];
//
// console.log(self.__WB_MANIFEST);
//
// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });
//
// self.addEventListener('install', async (event) => {
//   event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));
//   // API 데이터를 캐시에 미리 저장
//   event.waitUntil(
//     fetch(API_URL)
//       .then((res) => {
//         return caches.open(CACHE_NAME).then((cache) => {
//           return cache.put(API_URL, res);
//         });
//       })
//       .catch((error) => {
//         console.error('Failed to cache API data:', error);
//       })
//   );
// });
//
// self.addEventListener('fetch', (event) => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith(
//       (async () => {
//         try {
//           const preloadResp = await event.preloadResponse;
//
//           if (preloadResp) {
//             return preloadResp;
//           }
//
//           return await fetch(event.request);
//         } catch (error) {
//           const cache = await caches.open(CACHE_NAME);
//           return await cache.match(OFFLINE_URL);
//         }
//       })()
//     );
//   } else if (event.request.url === API_URL) {
//     event.respondWith(
//       (async () => {
//         try {
//           const networkResp = await fetch(event.request);
//
//           // 성공적인 API 응답인 경우, 응답을 캐시에 저장
//           if (networkResp && networkResp.ok) {
//             const cache = await caches.open(CACHE_NAME);
//             cache.put(API_URL, networkResp.clone());
//           }
//
//           return networkResp;
//         } catch (error) {
//           // 네트워크 요청이 실패하는 경우, 캐시된 응답을 리턴
//           const cache = await caches.open(CACHE_NAME);
//           const cachedResponse = await cache.match(API_RESPONSE_FILE);
//           if (cachedResponse) {
//             return cachedResponse;
//           }
//
//           // 캐시된 응답도 없을 경우, 에러 응답을 반환
//           return new Response('Network request failed and no cached response available.', {
//             status: 503,
//             statusText: 'Service Unavailable',
//             headers: new Headers({
//               'Content-Type': 'text/plain',
//             }),
//           });
//         }
//       })()
//     );
//   } else {
//     // 다른 요청에 대해서는 네트워크로 직접 처리하거나 오프라인 상태일 때 캐시에서 가져옴
//     event.respondWith(
//       (async () => {
//         const cache = await caches.open(CACHE_NAME);
//         const cachedResponse = await cache.match(event.request);
//         return cachedResponse || fetch(event.request);
//       })()
//     );
//   }
// });
//
// self.addEventListener('activate', (event) => {
//   event.waitUntil(self.clients.claim());
// });

// import { precacheAndRoute } from 'workbox-precaching';
//
// declare let self: ServiceWorkerGlobalScope & typeof globalThis;
//
// precacheAndRoute(self.__WB_MANIFEST);
