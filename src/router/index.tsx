/* eslint-disable react-refresh/only-export-components */
import ProductList from '@pages/HomePage/ProductList.tsx';
import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';

import Layout from '@layout';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import PouchDB from 'pouchdb';

// if (import.meta.env.MODE === 'development') {
//   await initMocks();
// }
console.log('ENV MODE: ', import.meta.env.MODE);
const ADMIN_ACCOUNT = {
  username: 'admin',
  password: '0000',
};

export const localDB = new PouchDB('test', {
  auto_compaction: true, // 자동 압축 활성화, 기본값 false,
  // adapter: 'indexeddb', // 'indexeddb' | 'idb' | 'leveldb' | 'http'.
});

export const remoteDB = new PouchDB('https://192.168.101.6:6984/test', {
  auth: ADMIN_ACCOUNT,
  skip_setup: false, // DB 없을떄 setup
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/test',
        element: <ProductList />,
      },
    ],
  },
]);

export default router;
