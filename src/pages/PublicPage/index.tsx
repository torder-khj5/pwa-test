import { useAuthAction } from '@store/useAuthStore';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

export default function PublicPage({ text }: { text?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuthAction();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    signIn();
    navigate(from, { replace: true });
  };
  return (
    <div>
      <h1>PublicPage - {text}</h1>
      <p>You must log in to view the page at {from}</p>

      <button onClick={handleSubmit}>login</button>
    </div>
  );
}
