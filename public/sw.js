importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute } = workbox.precaching;
const { CacheFirst } = workbox.strategies;

workbox.core.setCacheNameDetails({ prefix: 'public-sw-pwa' });

// 캐시할 파일 목록
precacheAndRoute([
  { url: '/', revision: '3' },
  { url: '/index.html', revision: '3' },
  // 다른 페이지들을 캐싱하려면 여기에 경로를 추가
  ...self.__WB_MANIFEST,
]);

// 모든 페이지 캐싱
workbox.routing.registerRoute(
  ({ event }) => event.request.mode === 'navigate',
  new CacheFirst({
    cacheName: 'pages-cache',
  })
);

// 자바스크립트 파일 캐싱
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

// 기타 파일 요청 캐싱
workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font' ||
    request.destination === 'image',
  new CacheFirst({
    cacheName: 'assets-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30일
      }),
    ],
  })
);
