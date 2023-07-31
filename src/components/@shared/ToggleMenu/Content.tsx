import { useToggleMenuContext } from './useToggleMenu';
import React from 'react';

type ToggleMenuContentProps = {
  children: React.ReactNode;
};
export default function ToggleMenuContent({ children }: ToggleMenuContentProps) {
  const { open } = useToggleMenuContext();

  if (!open) return null;
  return <>{children}</>;
}
