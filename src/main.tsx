import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import React from 'react';
import '@styles/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(import.meta.env.MODE === 'production' ? '/service-worker.js' : '/dev-sw.js?dev-sw');
  // navigator.serviceWorker.register(import.meta.env.MODE === 'production' ? '/service-worker.js' : '/src-sw.ts');
}
