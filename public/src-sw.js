importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute } = workbox.precaching;
const { StaleWhileRevalidate, CacheFirst } = workbox.strategies;

// 캐시할 파일 목록
precacheAndRoute(
  [
    { url: '/', revision: '2' },
    // { url: '/index.html', revision: '2' },
    { url: '/login', revision: '2' },
    { url: '/notice', revision: '2' },
    { url: '/manifest.json', revision: '2' },
    // 다른 페이지들을 캐싱하려면 여기에 경로를 추가
    ...self.__WB_MANIFEST,
  ] || []
);

// 모든 페이지 캐싱 (Stale-While-Revalidate 전략)
workbox.routing.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'pages-cache',
  })
);

// 자바스크립트 파일 캐싱 (Cache-First 전략)
workbox.routing.registerRoute(
  /\.(?:js)$/,
  new CacheFirst({
    cacheName: 'js-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7일
      }),
    ],
  })
);

// 기타 파일 요청 캐싱 (Stale-While-Revalidate 전략)
workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30일
      }),
    ],
  })
);
