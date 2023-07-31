/* eslint-disable react-refresh/only-export-components */
import IndexPage from '@pages/IndexPage/Index';
import Layout from '@components/Layout';
import initMocks from '../__mocks__';
import AuthCheck from './AuthCheck';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SelectSignupTypePage = lazy(async () => await import('@pages/SelectSignupTypePage'));
const LoginPage = lazy(async () => await import('@pages/LoginPage'));
const CertificationPage = lazy(async () => await import('@pages/CertificationPage'));
const NoticePage = lazy(async () => await import('@pages/NoticePage'));
const FAQPage = lazy(async () => await import('@pages/FAQPage'));
const TestPage = lazy(async () => await import('@pages/TestPage'));

// if (import.meta.env.MODE === 'development') {
//   await initMocks();
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <AuthCheck>
          <Layout />
        </AuthCheck>
      </Suspense>
    ),
    errorElement: <div>ErrorPage</div>,

    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'signup',
        element: <SelectSignupTypePage />,
      },
      {
        path: 'notice',
        element: <NoticePage />,
      },
      {
        path: 'cert',
        element: <CertificationPage />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);

export default router;
