import { useAuthSelector } from '@store/useAuthStore';
import PublicLayout from './PublicLayout';
import PrivateLayout from './PrivateLayout';

export default function Layout() {
  const { auth } = useAuthSelector(['auth']);
  if (auth) return <PrivateLayout />;
  return <PublicLayout />;
}
