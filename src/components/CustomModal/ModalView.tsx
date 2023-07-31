import { themes } from '@styles/theme.ts';
import { ModalButton } from '@components/CustomModal/ModalButton.tsx';
import { useModalContext } from '@components/@shared/Modal/useModal.ts';
import * as S from './styles.tsx';

export type ModalSize = 'lg' | 'md';

export interface ModalProps {
  onClose: () => void;
  sizeType?: ModalSize;
  title?: string;
  label?: string;
  contents?: string;
  isConfirm?: boolean;
}

const ModalView = ({ onClose, title, label, contents, sizeType = 'lg', isConfirm = false }: ModalProps) => {
  const onBtnClickHandler = () => {
    onClose?.();
    context.handleClose();
  };
  const context = useModalContext();
  return (
    <S.ModalFrame tabIndex={0} width={themes.modal.size[sizeType].width} height={themes.modal.size[sizeType].height}>
      <S.ModalContainer margin={themes.modal.size[sizeType].margin}>
        {sizeType === 'lg' && (
          <>
            {title && <S.ModalTitle>{title}</S.ModalTitle>}
            {label && <S.ModalLabel>{label}</S.ModalLabel>}
          </>
        )}
        <S.ModalContents height={themes.modal.contents[sizeType].height}>{contents}</S.ModalContents>
        <ModalButton isConfirm={isConfirm} sizeType={sizeType} onBtnClick={onBtnClickHandler} />
      </S.ModalContainer>
    </S.ModalFrame>
  );
};

export default ModalView;
