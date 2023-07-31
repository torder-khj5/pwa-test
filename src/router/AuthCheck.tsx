import { useAuthSelector } from '@store/useAuthStore';
import { useLocation, Navigate } from 'react-router-dom';

const PUBLIC_PATH = ['/login', '/signup'];

export default function AuthCheck({ children }: { children: JSX.Element }) {
  const { auth } = useAuthSelector(['auth']);
  const location = useLocation();

  const isPublicPath = PUBLIC_PATH.includes(location.pathname);
  if (auth && isPublicPath) return <Navigate to="/notice" state={{ from: location }} replace />;
  if (!auth && isPublicPath) return children;
  if (!auth) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}
