import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';

export interface ModalOptions {
  children?: ReactNode;
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

export function useModal({
  initialOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  onClose,
}: ModalOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  const handleClose = useCallback(() => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  }, [onClose, setOpen]);

  return useMemo(
    () => ({
      open,
      setOpen,
      handleClose,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [open, setOpen, handleClose, interactions, data, labelId, descriptionId]
  );
}

type ContextType =
  | (ReturnType<typeof useModal> & {
      setLabelId: Dispatch<SetStateAction<string | undefined>>;
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
    })
  | null;

export const ModalContext = createContext<ContextType>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('CustomModal components must be wrapped in <CustomModal />');
  }

  return context;
};
