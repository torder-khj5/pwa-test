/* eslint-disable react-refresh/only-export-components */
import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';

import Layout from '@layout';
import initMocks from '../__mocks__';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

if (import.meta.env.MODE === 'development') {
  await initMocks();
}

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
    ],
  },
]);

export default router;
