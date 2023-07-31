import { useToggleMenuContext } from './useToggleMenu';
import React from 'react';

type ToggleMenuTriggerProps = {
  children: React.ReactNode;
};
export default function ToggleMenuTrigger({ children }: ToggleMenuTriggerProps) {
  const { open, setOpen } = useToggleMenuContext();
  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <div onClick={onClickHandler} data-state={open ? 'open' : 'closed'}>
      {children}
    </div>
  );
}
