import { type ModalOptions, ModalContext, useDialog } from './useModalContext';
import Trigger from './Trigger';
import ModalContent from './Content';
import { type PropsWithChildren } from 'react';

const Modal = ({ children, ...options }: PropsWithChildren<ModalOptions>) => {
  const dialog = useDialog(options);
  return <ModalContext.Provider value={dialog}>{children}</ModalContext.Provider>;
};

export default Modal;

Modal.Content = ModalContent;
Modal.Trigger = Trigger;
