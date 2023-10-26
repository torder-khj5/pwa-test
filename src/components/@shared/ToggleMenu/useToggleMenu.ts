import { useControllableState } from '@hooks/useControllableState';
import { useContext, createContext, useMemo } from 'react';

export type ToggleMenuOption = {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function useToggleMenu({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: onOpenChangeProp,
}: ToggleMenuOption = {}) {
  const [open, setOpen] = useControllableState({
    value: controlledOpen,
    onChange: onOpenChangeProp,
    defaultValue: initialOpen,
  });

  return useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open, setOpen]
  );
}

type ContextType = ReturnType<typeof useToggleMenu> | null;
export const ToggleMenuContext = createContext<ContextType>(null);

export const useToggleMenuContext = () => {
  const context = useContext(ToggleMenuContext);

  if (context == null) {
    throw new Error('ToggleMenu components must be wrapped in <ToggleMenu />');
  }

  return context;
};
