/* eslint-disable react-refresh/only-export-components */
import MenuList from '@pages/HomePage/MenuList.tsx';
import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';

import Layout from '@layout';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

// if (import.meta.env.MODE === 'development') {
//   await initMocks();
// }
console.log('ENV MODE: ', import.meta.env.MODE);

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
        element: <MenuList />,
      },
    ],
  },
]);

export default router;
