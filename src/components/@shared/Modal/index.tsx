import { ModalContext, type ModalOptions, useModal } from '@components/@shared/Modal/useModal.ts';
import { ModalTrigger } from '@components/@shared/Modal/Trigger.tsx';
import { ModalContent } from '@components/@shared/Modal/Content.tsx';
import { type ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children, ...options }: ModalProps & ModalOptions) {
  const modal = useModal(options);
  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
}

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
