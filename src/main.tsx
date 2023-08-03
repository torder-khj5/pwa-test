import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';
import '@styles/globals.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log(`load sw ${import.meta.env.MODE}`);
    // navigator.serviceWorker.register('/sw.ts', { scope: '/' });
    navigator.serviceWorker.register('/src-sw.js', { scope: '/' });
  });
}

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
