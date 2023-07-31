import * as S from '@components/CustomModal/styles.tsx';
import { type ModalSize } from '@components/CustomModal/ModalView.tsx';
import { CommonButton } from '@components/CommonButton';

interface ModalButtonProps {
  isConfirm: boolean;
  onBtnClick: () => void;
  sizeType?: ModalSize;
}

export const ModalButton = ({ isConfirm, onBtnClick, sizeType = 'lg' }: ModalButtonProps) => {
  const btnClassName = `btn-${sizeType}${isConfirm ? '-confirm' : ''}`;
  return (
    <>
      <S.ModalButtonContainer>
        {isConfirm ? (
          <>
            <CommonButton onButtonClick={onBtnClick} label={'취소'} className={btnClassName} />
            <CommonButton onButtonClick={onBtnClick} label={'확인'} className={btnClassName} />
          </>
        ) : (
          <CommonButton onButtonClick={onBtnClick} label={'확인'} className={btnClassName} />
        )}
      </S.ModalButtonContainer>
    </>
  );
};
