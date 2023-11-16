/* eslint-disable react-refresh/only-export-components */
import ProductList from '@pages/HomePage/ProductList.tsx';
import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';

import Layout from '@layout';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

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
      // {
      //   index: true,
      //   element: <HomePage />,
      // },
      {
        // path: '/test',
        index: true,
        element: <ProductList />,
      },
    ],
  },
]);

export default router;
