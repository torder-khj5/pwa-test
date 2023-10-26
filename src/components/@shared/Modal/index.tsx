import * as S from './styles';
import ReactDOM from 'react-dom';
import { type ReactNode, useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRoot = document.getElementById('modal-root');
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    if (!modalRoot) return;
    modalRoot.appendChild(el.current);

    return () => {
      modalRoot.removeChild(el.current);
    };
  }, [modalRoot]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(<S.Overlay onClick={handleOverlayClick}>{children}</S.Overlay>, el.current);
};

export default Modal;
