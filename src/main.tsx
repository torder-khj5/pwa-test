import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';
import '@styles/globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log(`load sw ${import.meta.env.MODE}`);
    navigator.serviceWorker.register('sw.js', { scope: '/' });
  });
}

// if ('serviceWorker' in navigator) {
//   const wb = new Workbox('/service-worker.js');
//
//   wb.addEventListener('activated', (event) => {
//     // 서비스 워커가 활성화된 후에 실행되는 로직
//     console.log('Service Worker activated:', event.isUpdate);
//   });
//
//   wb.register()
//     .then((registration) => {
//       // 서비스 워커 등록 성공 시 실행되는 로직
//       console.log('Service Worker registered:', registration);
//     })
//     .catch((error) => {
//       // 서비스 워커 등록 실패 시 실행되는 로직
//       console.error('Service Worker registration failed:', error);
//     });
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(err) {
        console.log({ err });
      },
    },
    mutations: {
      onError(err) {
        console.log({ err }, '전체 포괄 오류');
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
