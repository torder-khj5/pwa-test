import { useAuthSelector } from '@store/useAuthStore';
import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';

export default function IndexPage() {
  const { auth } = useAuthSelector(['auth']);

  const location = useLocation();
  if (!auth) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Navigate to="/notice" state={{ from: location }} replace />;
}
