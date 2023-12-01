/* eslint-disable react-refresh/only-export-components */
import ProductList from '@pages/HomePage/ProductList.tsx';
import HomePage from '@pages/HomePage';
import ErrorPage from '@pages/ErrorPage';

import Layout from '@layout';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: '/order',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <HomePage />,
        element: <ProductList />,
      },
    ],
  },
  { path: '/', element: <HomePage /> },
]);

export default router;
